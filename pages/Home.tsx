import React from 'react';
import Hero from '../components/Hero';
import PackageCard from '../components/PackageCard';
import { POPULAR_PACKAGES, TESTIMONIALS } from '../constants';
import { ShieldCheck, Hotel, Award, Star, Play, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const { t, language } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Why Choose Us - Floating Cards */}
      <section className="py-12 md:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-16 relative">
                 <span className="text-gold text-sm font-bold tracking-[0.3em] uppercase opacity-80 mb-4 block animate-pulse">Excellence</span>
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-royal mb-6">{t('why.title')}</h2>
                {/* Decorative vertical line */}
                <div className="w-px bg-gradient-to-b from-transparent via-gold to-transparent h-20 mx-auto opacity-50 absolute left-1/2 -top-20 hidden md:block"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { icon: ShieldCheck, title: t('why.support'), desc: t('why.support_desc') },
                    { icon: Hotel, title: t('why.verified'), desc: t('why.verified_desc') },
                    { icon: Award, title: t('why.price'), desc: t('why.price_desc') },
                    { icon: Star, title: t('why.premium'), desc: t('why.premium_desc') }
                ].map((item, idx) => (
                    <div key={idx} className="group relative p-6 md:p-8 rounded-[2rem] bg-white shadow-xl border border-gray-100 hover:shadow-2xl hover:border-gold/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                        {/* Internal Glow Blob */}
                        <div className="absolute -right-10 -top-10 w-32 h-32 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/10 transition-all duration-700"></div>
                        
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-royal/5 rounded-2xl flex items-center justify-center mb-6 border border-royal/10 group-hover:border-gold/50 transition-colors shadow-inner">
                            <item.icon className="w-6 h-6 md:w-7 md:h-7 text-gold group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <h3 className="font-heading font-bold text-lg text-royal mb-3 tracking-wide">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Popular Packages - Cinematic Display */}
      <section id="domestic" className="py-12 md:py-20 relative z-10 bg-white">
        {/* Section Divider/Decoration */}
         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
         <div className="absolute right-0 top-1/2 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                     <span className="text-blue-500 text-sm font-bold tracking-[0.3em] uppercase mb-2 block">Destinations</span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-royal mb-3">{t('packages.title')}</h2>
                    <p className="text-gray-500 font-light max-w-xl text-sm md:text-base">{t('packages.subtitle')}</p>
                </div>
                <button 
                    onClick={() => navigate('/contact')} 
                    className="group relative px-8 py-3 bg-transparent overflow-hidden rounded-full border border-gold/50 text-gold font-bold hover:text-white hover:bg-gold transition-all duration-300"
                >
                    <span className="relative flex items-center z-10">
                        {t('packages.view_all')} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {POPULAR_PACKAGES.map((pkg) => (
                    <PackageCard key={pkg.id} pkg={pkg} />
                ))}
            </div>
        </div>
      </section>

      {/* Video Promotion - Portal Style - SHORTENED */}
      <section className="py-12 md:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-[3rem] overflow-hidden h-[300px] md:h-[450px] group border border-white shadow-2xl transform transition-transform hover:scale-[1.01] duration-700">
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700 z-10"></div>
                
                {/* Image Scale Effect */}
                <img 
                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop" 
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[20s] ease-in-out"
                    alt="Travel Video"
                />
                
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 cursor-pointer shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center text-royal pl-1 shadow-lg">
                            <Play className="w-5 h-5 md:w-6 md:h-6 fill-current" />
                        </div>
                    </div>
                    <h2 className="text-2xl md:text-5xl font-heading font-bold text-white tracking-tight drop-shadow-2xl max-w-4xl leading-tight">
                        {t('video.title')}
                    </h2>
                </div>
            </div>
        </div>
      </section>

      {/* Testimonials - Asymmetrical Glass Masonry */}
      <section className="py-12 md:py-20 relative z-10 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute left-0 top-1/3 w-1/3 h-1/3 bg-gradient-to-r from-gold/5 to-transparent blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 md:mb-20">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-royal mb-6">{t('testimonials.title')}</h2>
                <div className="flex justify-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-gold animate-bounce" style={{ animationDelay: '0s'}}></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-gold/60 animate-bounce" style={{ animationDelay: '0.2s'}}></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-gold/30 animate-bounce" style={{ animationDelay: '0.4s'}}></div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                {TESTIMONIALS.map((t, idx) => (
                    <div 
                        key={t.id} 
                        className={`
                            bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl
                            hover:border-gold/30 transition-all duration-500 hover:-translate-y-2 relative
                            ${idx === 1 ? 'md:translate-y-12' : ''} 
                            ${idx === 2 ? 'md:translate-y-6' : ''}
                        `}
                    >
                        <div className="absolute -top-6 -right-6 text-8xl font-serif text-gray-100 font-bold leading-none">"</div>
                        
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-4 h-4 ${i < t.rating ? 'text-gold fill-current' : 'text-gray-300'}`} />
                                ))}
                            </div>
                            <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover" />
                        </div>
                        
                        <p className="text-gray-600 mb-6 font-light text-base leading-relaxed italic relative z-10">"{t.content[language]}"</p>
                        
                        <div className="border-t border-gray-100 pt-4">
                            <h4 className="font-heading font-bold text-royal text-lg tracking-wide">{t.name}</h4>
                            <p className="text-xs text-gold uppercase font-bold tracking-widest mt-1">{t.role[language]}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Bottom spacer for the offset grid */}
            <div className="h-12 hidden md:block"></div>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="py-12 md:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-[3rem] overflow-hidden bg-royal border border-white/20 shadow-2xl">
                {/* Background Gradient & Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C75] via-royal to-[#020b14] opacity-95"></div>
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10 px-8 py-16 md:py-24 text-center flex flex-col items-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm mb-6 transform hover:rotate-12 transition-transform duration-500 shadow-lg">
                        <Sparkles className="w-8 h-8 text-gold" />
                    </div>
                    
                    <h2 className="text-3xl md:text-6xl font-heading font-bold text-white mb-6 tracking-tight leading-tight">
                        Your Dream Journey <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-[#F9C74F]">Awaits</span>
                    </h2>
                    
                    <p className="text-gray-300 text-base md:text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed">
                        Experience personalized travel planning with our experts. Tailored to your mood, budget, and style.
                    </p>
                    
                    <button 
                        onClick={() => navigate('/contact')}
                        className="group relative inline-flex items-center px-10 py-4 bg-gold overflow-hidden rounded-full transition-all hover:bg-white hover:scale-105 shadow-[0_0_40px_rgba(197,157,95,0.4)]"
                    >
                        <span className="relative z-10 text-royal font-bold text-lg flex items-center">
                            Contact Us Today
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;