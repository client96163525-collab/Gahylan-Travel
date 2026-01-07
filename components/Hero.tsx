import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Compass, CalendarCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop", // Mountains
  "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1974&auto=format&fit=crop", // Maldives Water Villa
  "https://images.unsplash.com/photo-1512453979798-5ea936a7fe5b?q=80&w=2070&auto=format&fit=crop", // Dubai
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop", // Paris
];

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  const handleExplore = () => {
    const element = document.getElementById('domestic');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookNow = () => {
    const element = document.getElementById('planner');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Slideshow */}
      {HERO_IMAGES.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentImageIdx ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
          style={{ backgroundImage: `url('${img}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-royal via-royal/40 to-transparent mix-blend-multiply opacity-90"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        
        <div className="animate-fade-in-up max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 md:px-5 md:py-2.5 rounded-full border border-gold/40 bg-black/20 backdrop-blur-md mb-4 md:mb-8 hover:bg-black/30 transition-colors">
                <Compass className="w-3 h-3 md:w-4 md:h-4 text-gold" />
                <span className="text-gold text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase">{t('hero.subtitle')}</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-4 md:mb-8 leading-tight drop-shadow-2xl">
              <span className="block">{t('hero.title_start').split(' ')[0]}</span>
              <span className="block italic font-display text-gold-light mt-0 md:mt-2 text-2xl sm:text-4xl md:text-7xl lg:text-8xl">The Extraordinary</span>
            </h1>
            
            <p className="text-gray-100 text-sm sm:text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto font-light mb-6 md:mb-12 drop-shadow-md px-2 md:px-0">
              {t('hero.desc')}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-6 justify-center items-center w-full sm:w-auto px-8 sm:px-0">
                <button 
                    onClick={handleBookNow}
                    className="w-full sm:w-auto group relative inline-flex items-center justify-center px-6 py-2.5 md:px-10 md:py-5 bg-gradient-to-r from-gold to-[#B08D55] text-royal font-bold text-sm md:text-xl rounded-full shadow-[0_0_30px_rgba(197,157,95,0.4)] hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                    <span className="relative z-10 flex items-center">
                        {t('nav.book_now')}
                        <CalendarCheck className="w-4 h-4 md:w-6 md:h-6 ml-2 md:ml-3 group-hover:rotate-12 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>

                <button 
                    onClick={handleExplore}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 md:px-10 md:py-5 border border-white/50 text-white font-bold text-sm md:text-xl rounded-full hover:bg-white hover:text-royal hover:border-white transition-all duration-300 backdrop-blur-sm"
                >
                    {t('hero.find_plan')}
                    <Search className="w-4 h-4 md:w-6 md:h-6 ml-2 md:ml-3" />
                </button>
            </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center opacity-70">
        <span className="text-white text-[8px] md:text-[10px] uppercase tracking-widest mb-1 md:mb-2">Scroll</span>
        <div className="w-4 h-8 md:w-6 md:h-10 border border-white/50 rounded-full flex justify-center p-1">
            <div className="w-0.5 md:w-1 h-1.5 md:h-2 bg-gold rounded-full animate-float"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;