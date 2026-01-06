import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Compass, ArrowRight } from 'lucide-react';
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
    }, 5000); // 5 seconds for smoother transitions
    return () => clearInterval(interval);
  }, []);

  const handleExplore = () => {
    // Scroll to domestic packages
    const element = document.getElementById('domestic');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-[65vh] min-h-[550px] w-full overflow-hidden flex items-center justify-center">
      {/* Dynamic Background Slideshow */}
      {HERO_IMAGES.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentImageIdx ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
          style={{ backgroundImage: `url('${img}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-royal via-royal/60 to-transparent mix-blend-multiply opacity-90"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center lg:text-left flex flex-col lg:flex-row items-center lg:justify-between mt-10">
        
        {/* Left: Typography */}
        <div className="lg:w-1/2 mb-12 lg:mb-0 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-md mb-6">
                <Compass className="w-4 h-4 text-gold" />
                <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase">{t('hero.subtitle')}</span>
            </div>
            
            <h1 className="text-3xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              <span className="block">{t('hero.title_start').split(' ')[0]}</span>
              <span className="block italic font-display text-gold-light">The Extraordinary</span>
            </h1>
            
            <p className="text-gray-300 text-sm lg:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 font-light border-l-2 border-gold pl-6 mb-8">
              {t('hero.desc')}
            </p>

            <button 
                onClick={handleExplore}
                className="hidden lg:inline-flex items-center px-8 py-4 bg-gradient-to-r from-gold to-[#B08D55] text-royal font-bold text-lg rounded-full shadow-glow hover:scale-105 transition-transform duration-300"
            >
                {t('hero.find_plan')}
                <Search className="w-5 h-5 ml-2" />
            </button>
        </div>

        {/* Right: Floating Glass Action Card (Modified) */}
        <div className="lg:w-5/12 w-full animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="glass-panel p-6 lg:p-10 rounded-[2rem] shadow-premium transform lg:rotate-2 hover:rotate-0 transition-all duration-500 text-center">
                <h3 className="text-xl lg:text-3xl font-heading text-royal mb-4">
                    Begin Your Journey
                </h3>
                <p className="text-gray-600 mb-8 font-light text-sm lg:text-base">
                    Explore our diverse range of holiday packages curated just for you. From serene beaches to majestic mountains.
                </p>
                
                <button 
                    onClick={handleExplore}
                    className="w-full py-4 bg-royal text-white font-bold text-base lg:text-lg rounded-xl hover:bg-gold hover:text-white transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                >
                    View All Packages
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;