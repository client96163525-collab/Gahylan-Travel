import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Loader2, Send } from 'lucide-react';
import { getTravelSuggestion } from '../services/geminiService';
import { TravelSuggestionRequest, TravelSuggestionResponse } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { useCurrency } from '../contexts/CurrencyContext';
import { useLocation } from 'react-router-dom';

const AIPlanner: React.FC = () => {
  const { language, t } = useLanguage();
  const { currency } = useCurrency();
  const location = useLocation();
  const resultsRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<Omit<TravelSuggestionRequest, 'language'>>({
    destination: '',
    budget: '',
    days: '',
    mood: 'Relaxing'
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<TravelSuggestionResponse | null>(null);
  const [error, setError] = useState('');

  // Pre-fill form if data passed from Hero
  useEffect(() => {
    if (location.state) {
        const { destination, budget } = location.state as { destination?: string, budget?: string };
        setFormData(prev => ({
            ...prev,
            destination: destination || prev.destination,
            budget: budget || prev.budget
        }));
    }
  }, [location.state]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generatePlan = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await getTravelSuggestion({ ...formData, language, currency });
      setResult(response);
      // Auto-scroll to results on success
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } catch (err) {
      setError('Failed to generate plan. Please ensure API Key is set or try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-royal/80 to-[#001529]/90 backdrop-blur-md text-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-14 shadow-2xl relative overflow-hidden border border-white/10">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="relative z-10 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <div className="inline-flex items-center bg-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-gold text-xs md:text-sm font-bold mb-4 md:mb-6 backdrop-blur-md border border-white/10 shadow-lg">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 mr-2 animate-pulse" />
            {t('ai.tag')}
          </div>
          <h2 className="text-2xl md:text-5xl font-heading font-bold mb-4 md:mb-6 leading-tight">
            {t('ai.heading')}
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed text-sm md:text-lg font-light">
            {t('ai.desc')}
          </p>
          
          <form onSubmit={generatePlan} className="space-y-4 md:space-y-5">
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              <div className="group">
                <label className="block text-[10px] md:text-xs uppercase tracking-wider text-gold font-bold mb-1.5 ml-1">{t('ai.label_dest')}</label>
                <input 
                  name="destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  type="text" 
                  placeholder={t('ai.ph_dest')}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-sm md:text-base text-white placeholder-gray-500 focus:outline-none focus:border-gold focus:bg-white/10 transition-all"
                />
              </div>
              <div className="group">
                <label className="block text-[10px] md:text-xs uppercase tracking-wider text-gold font-bold mb-1.5 ml-1">{t('ai.label_days')}</label>
                <input 
                  name="days"
                  value={formData.days}
                  onChange={handleInputChange}
                  type="number" 
                  placeholder={t('ai.ph_days')}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-sm md:text-base text-white placeholder-gray-500 focus:outline-none focus:border-gold focus:bg-white/10 transition-all"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 md:gap-5">
               <div className="group">
                <label className="block text-[10px] md:text-xs uppercase tracking-wider text-gold font-bold mb-1.5 ml-1">{t('hero.label_budget')}</label>
                <input 
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  type="text" 
                  placeholder={t('ai.ph_budget')}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-sm md:text-base text-white placeholder-gray-500 focus:outline-none focus:border-gold focus:bg-white/10 transition-all"
                />
              </div>
              <div className="group">
                <label className="block text-[10px] md:text-xs uppercase tracking-wider text-gold font-bold mb-1.5 ml-1">{t('ai.label_mood')}</label>
                <select 
                  name="mood"
                  value={formData.mood}
                  onChange={handleInputChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-sm md:text-base text-white focus:outline-none focus:border-gold focus:bg-white/10 transition-all [&>option]:text-royal cursor-pointer"
                >
                  <option value="Relaxing">{t('ai.mood_relax')}</option>
                  <option value="Adventure">{t('ai.mood_adventure')}</option>
                  <option value="Romantic">{t('ai.mood_romantic')}</option>
                  <option value="Spiritual">{t('ai.mood_spiritual')}</option>
                  <option value="Party">{t('ai.mood_party')}</option>
                </select>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="mt-6 w-full bg-gradient-to-r from-gold to-yellow-500 hover:from-yellow-400 hover:to-gold text-royal font-bold py-3 md:py-4 rounded-xl shadow-lg hover:shadow-gold/30 flex items-center justify-center transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none text-sm md:text-base"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  {t('ai.btn_loading')}
                </>
              ) : (
                <>
                  {t('ai.btn_generate')}
                  <Sparkles className="w-5 h-5 ml-2" />
                </>
              )}
            </button>
            {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
          </form>
        </div>

        {/* Results Section */}
        <div ref={resultsRef} className="h-full min-h-[350px] md:min-h-[400px] bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 p-6 md:p-8 flex flex-col relative shadow-inner">
          {!result && !loading && (
            <div className="flex-1 flex flex-col items-center justify-center text-gray-500 opacity-50">
              <Sparkles className="w-16 h-16 md:w-20 md:h-20 mb-4 stroke-1" />
              <p className="font-light text-sm md:text-base text-center px-4">{t('ai.heading').split('?')[1] || 'AI Result here'}</p>
            </div>
          )}
          
          {loading && (
            <div className="flex-1 flex flex-col items-center justify-center animate-pulse">
              <div className="relative w-16 h-16 md:w-20 md:h-20 mb-6">
                 <div className="absolute inset-0 border-4 border-gray-600/30 rounded-full"></div>
                 <div className="absolute inset-0 border-4 border-gold rounded-full border-t-transparent animate-spin"></div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-gold animate-bounce" />
                 </div>
              </div>
              <p className="text-gold tracking-[0.2em] uppercase text-xs font-bold">Designing Your Trip...</p>
            </div>
          )}

          {result && (
            <div className="animate-fade-in-up h-full flex flex-col">
              <div className="flex items-center justify-between mb-4 md:mb-6">
                 <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-white">{t('ai.result_title')}</h3>
                 <Sparkles className="text-gold w-5 h-5 md:w-6 md:h-6" />
              </div>
              
              <div className="bg-white/5 rounded-xl p-4 md:p-5 mb-4 md:mb-6 border border-white/5 hover:border-white/20 transition-colors">
                <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                    {result.suggestion}
                </p>
              </div>
              
              <div className="mb-4 md:mb-6 flex items-center justify-between bg-royal/50 p-3 md:p-4 rounded-xl border border-white/10">
                <h4 className="text-[10px] md:text-xs uppercase tracking-wider text-gray-400">{t('ai.result_cost')}</h4>
                <p className="text-lg md:text-xl font-bold text-gold">{result.estimatedCost}</p>
              </div>

              <div className="flex-grow">
                <h4 className="text-[10px] md:text-xs uppercase tracking-wider text-gray-400 mb-2 md:mb-3">{t('ai.result_highlights')}</h4>
                <ul className="space-y-2 md:space-y-3">
                  {result.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start text-xs md:text-sm text-gray-200 bg-white/5 p-2 md:p-3 rounded-lg border border-transparent hover:border-gold/30 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 mr-2 md:mr-3 flex-shrink-0 shadow-[0_0_8px_rgba(249,199,79,0.8)]"></span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={() => window.open(`https://wa.me/919468278300?text=Hi, I liked this AI suggestion: ${result.suggestion}`, '_blank')}
                className="w-full mt-4 md:mt-6 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 md:py-4 rounded-xl font-bold flex items-center justify-center transition-all shadow-lg hover:shadow-green-500/30 group text-sm md:text-base"
              >
                <Send className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                {t('ai.book_whatsapp')}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIPlanner;