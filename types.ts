export type Language = 'en' | 'hi';

export interface LocalizedString {
  en: string;
  hi: string;
}

export interface TravelPackage {
  id: string;
  title: LocalizedString;
  location: LocalizedString;
  price: number;
  duration: LocalizedString;
  description: LocalizedString;
  image: string;
  rating: number;
  inclusions: { en: string[]; hi: string[] };
  itinerary: { day: number; title: LocalizedString; desc: LocalizedString }[];
}

export interface Testimonial {
  id: number;
  name: string; // Names usually don't change, but could be localized if needed
  role: LocalizedString;
  content: LocalizedString;
  rating: number;
  image: string;
}

export interface TravelSuggestionRequest {
  destination?: string;
  budget?: string;
  days?: string;
  mood?: string;
  language: Language;
}

export interface TravelSuggestionResponse {
  suggestion: string;
  estimatedCost: string;
  highlights: string[];
}
