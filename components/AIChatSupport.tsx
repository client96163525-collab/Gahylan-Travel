import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles } from 'lucide-react';
import { getChatResponse, ChatMessage } from '../services/geminiService';
import { useLanguage } from '../contexts/LanguageContext';

const AIChatSupport: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  const toggleChat = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const responseText = await getChatResponse(messages, userMessage.text, language);
      const botMessage: ChatMessage = { role: 'model', text: responseText };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage: ChatMessage = { 
        role: 'model', 
        text: language === 'hi' 
          ? "**त्रुटि:** क्षमा करें, अभी कनेक्शन में समस्या है। कृपया पुनः प्रयास करें।" 
          : "**Connection Error:** I apologize, but I'm having trouble connecting right now. Please try again."
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Helper to parse inline formatting within a line
  const parseInline = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-bold text-royal">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const renderMessageContent = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, index) => {
      const trimmed = line.trim();
      if (!trimmed) return <br key={index} />;

      // Header style
      if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
         return (
          <strong key={index} className="block font-heading text-royal text-lg mb-2 mt-4 first:mt-0 border-b border-gray-100 pb-1">
            {trimmed.slice(2, -2)}
          </strong>
        );
      }

      // Subheading style
      if (trimmed.startsWith('*') && trimmed.endsWith('*') && !trimmed.startsWith('* ') && trimmed.length > 2) {
         return (
          <em key={index} className="block font-subheading text-gold-hover font-bold mb-1 mt-2 not-italic text-sm uppercase tracking-wide">
            {trimmed.slice(1, -1)}
          </em>
        );
      }

      // Bullet points
      if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
        const content = trimmed.substring(2);
        return (
             <div key={index} className="flex items-start mb-1 ml-1">
                <span className="text-gold mr-2 mt-1.5 text-[10px]">●</span>
                <span className="font-content text-gray-700 leading-relaxed text-[15px]">{parseInline(content)}</span>
            </div>
        );
      }

      // Standard text
      return (
        <p key={index} className="font-content text-gray-700 leading-relaxed text-[15px] mb-2">
          {parseInline(line)}
        </p>
      );
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col animate-fade-in-up transition-all h-[550px] max-h-[80vh]">
          {/* Header */}
          <div className="bg-gradient-to-r from-royal to-[#0F4C75] text-white p-4 flex justify-between items-center shadow-md flex-shrink-0">
            <div className="flex items-center">
              <div className="bg-white/10 p-2 rounded-full mr-3 border border-white/20 relative">
                <Bot size={20} className="text-gold" />
                <div className="absolute -top-1 -right-1">
                    <Sparkles size={10} className="text-gold animate-pulse" />
                </div>
              </div>
              <div>
                <h3 className="font-heading font-bold text-base">Abhi-X</h3>
                <p className="text-xs text-blue-200 font-subheading">AI Assistant • Sahil Tour & Travels</p>
              </div>
            </div>
            <button onClick={toggleChat} className="text-white/80 hover:text-white transition-colors bg-white/10 rounded-full p-1 hover:bg-white/20">
              <X size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F5F7FA]">
            {messages.length === 0 && (
              <div className="text-center text-gray-400 mt-10 h-full flex flex-col justify-center items-center opacity-70">
                <div className="w-16 h-16 bg-royal/10 rounded-full flex items-center justify-center mb-4 relative">
                  <Bot size={32} className="text-royal" />
                  <Sparkles size={16} className="text-gold absolute top-2 right-2 animate-pulse" />
                </div>
                <h4 className="font-bold text-royal mb-2">Hello! I'm Abhi-X.</h4>
                <p className="text-sm px-6 font-content">Ask me about our premium packages, custom itineraries, or travel tips.</p>
              </div>
            )}
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-4 rounded-2xl text-sm shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-royal text-white rounded-tr-none font-sans shadow-blue-900/20' 
                      : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none font-content shadow-gray-200/50'
                  }`}
                >
                  {msg.role === 'model' ? renderMessageContent(msg.text) : <p className="leading-relaxed">{msg.text}</p>}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex items-center space-x-1">
                  <div className="w-1.5 h-1.5 bg-royal rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-royal rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-1.5 h-1.5 bg-royal rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-100 flex items-center flex-shrink-0">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask Abhi-X anything..."
              className="flex-1 bg-gray-50 border border-gray-200 text-gray-800 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-transparent text-sm transition-all font-content placeholder-gray-400"
            />
            <button 
              type="submit" 
              disabled={!inputValue.trim() || isLoading}
              className="ml-2 p-3 bg-gold text-royal rounded-full hover:bg-gold-hover transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:scale-105"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      {/* Trigger Button - Always visible fixed at bottom right */}
      <button 
        onClick={toggleChat}
        className="bg-royal text-white p-4 rounded-full shadow-2xl hover:bg-[#0F4C75] transition-all hover:scale-110 flex items-center justify-center border-2 border-gold/50 group relative"
      >
        {isOpen ? <X size={24} /> : (
            <>
                <Bot size={28} className="group-hover:rotate-12 transition-transform" />
                <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-royal"></span>
            </>
        )}
      </button>
    </div>
  );
};

export default AIChatSupport;