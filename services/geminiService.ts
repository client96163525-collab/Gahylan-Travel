// @ts-ignore
import { GoogleGenAI, Type } from "@google/genai";
import { TravelSuggestionRequest, TravelSuggestionResponse } from "../types";

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export const getTravelSuggestion = async (
  request: TravelSuggestionRequest & { currency: 'INR' | 'USD' }
): Promise<TravelSuggestionResponse> => {
  // Check for API Key inside the function
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API Key is missing from process.env.API_KEY");
    throw new Error("API Key is missing. Please configure process.env.API_KEY.");
  }

  // Initialize AI instance here
  const ai = new GoogleGenAI({ apiKey });

  const langInstruction = request.language === 'hi' 
    ? "Provide the response strictly in Hindi language." 
    : "Provide the response in English.";

  const currencyInstruction = `Estimated costs should be in ${request.currency === 'USD' ? 'USD ($)' : 'INR (₹)'}.`;

  const prompt = `
    Act as a senior travel consultant for 'Sahil Tour & Travels'.
    The user is looking for a travel plan.
    Destination Preference: ${request.destination || "Anywhere"}
    Budget: ${request.budget || "Flexible"}
    Duration: ${request.days || "Flexible"} days
    Mood: ${request.mood || "Relaxing"}

    ${langInstruction}
    ${currencyInstruction}
    Provide a summary suggestion, an estimated cost breakdown, and 3-4 key highlights of this trip.
    Keep the tone professional, inviting, and premium.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            suggestion: {
              type: Type.STRING,
              description: "A 2-3 sentence engaging summary of the suggested trip.",
            },
            estimatedCost: {
              type: Type.STRING,
              description: "Estimated cost range per person (e.g. ₹20,000 - ₹30,000 or $300 - $400).",
            },
            highlights: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "List of 3-4 key activities or spots.",
            },
          },
          required: ["suggestion", "estimatedCost", "highlights"],
        },
      },
    });

    let jsonText = response.text;
    if (!jsonText) {
        throw new Error("Empty response from AI");
    }
    
    // Cleanup: Remove markdown code blocks if present (e.g. ```json ... ```)
    jsonText = jsonText.replace(/```json/g, "").replace(/```/g, "").trim();
    
    // Robust JSON extraction: Find the first '{' and last '}'
    const firstBrace = jsonText.indexOf('{');
    const lastBrace = jsonText.lastIndexOf('}');
    
    if (firstBrace === -1 || lastBrace === -1) {
         console.error("Invalid JSON format received:", jsonText);
         throw new Error("No JSON found in response");
    }
    
    const cleanJson = jsonText.substring(firstBrace, lastBrace + 1);
    
    try {
        return JSON.parse(cleanJson) as TravelSuggestionResponse;
    } catch (parseError) {
        console.error("JSON Parse Error:", parseError, "Cleaned Text:", cleanJson);
        throw new Error("Failed to parse AI response.");
    }

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Could not generate travel suggestion. Please try again.");
  }
};

export const getChatResponse = async (
  history: ChatMessage[], 
  newMessage: string,
  language: 'en' | 'hi'
): Promise<string> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    return "Configuration Error: API Key is missing.";
  }

  // Initialize AI instance here
  const ai = new GoogleGenAI({ apiKey });

  // New formatting instructions for Abhi-X
  const systemInstruction = `You are Abhi-X, a premium AI travel assistant for 'Sahil Tour & Travels'.
  
  Your goal is to assist users with booking packages, planning trips, and answering travel queries.
  The current language is ${language === 'hi' ? 'Hindi' : 'English'}.
  
  **Formatting Rules (Strictly Follow These):**
  1. Use **Double Asterisks** for the Main Header of your response.
  2. Use *Single Asterisks* for subheadings.
  3. Use bullet points (* or -) for lists.
  4. Keep the content concise, polite, and professional.
  
  Example Response Structure:
  **Welcome to Sahil Tour & Travels**
  *How can I help you?*
  I can assist you with:
  * Booking a package
  * Custom itinerary
  * Travel tips
  `;

  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemInstruction,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "";
  } catch (error) {
    console.error("Chat Error:", error);
    return "I'm having trouble connecting right now. Please try again later.";
  }
};