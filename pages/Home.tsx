import React from 'react';
import Hero from '../components/Hero';
import PackageCard from '../components/PackageCard';
import AIPlanner from '../components/AIPlanner';
import { POPULAR_PACKAGES, TESTIMONIALS } from '../constants';
import { ShieldCheck, Hotel, Award, Star, Play, ArrowRight, Sparkles, CheckCircle2, XCircle } from 'lucide-react';
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
      <section className="py-8 md:py-32 relative z-10 bg-gradient-to-b from-transparent to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-24 relative">
                 <span className="text-gold text-xs md:text-base font-bold tracking-[0.3em] uppercase opacity-80 mb-2 md:mb-4 block animate-pulse">Excellence</span>
                <h2 className="text-2xl md:text-6xl font-heading font-bold text-royal mb-3 md:mb-6">{t('why.title')}</h2>
                {/* Decorative vertical line */}
                <div className="w-px bg-gradient-to-b from-transparent via-gold to-transparent h-32 mx-auto opacity-50 absolute left-1/2 -top-24 hidden md:block"></div>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
                {[
                    { icon: ShieldCheck, title: t('why.support'), desc: t('why.support_desc') },
                    { icon: Hotel, title: t('why.verified'), desc: t('why.verified_desc') },
                    { icon: Award, title: t('why.price'), desc: t('why.price_desc') },
                    { icon: Star, title: t('why.premium'), desc: t('why.premium_desc') }
                ].map((item, idx) => (
                    <div key={idx} className="group relative p-4 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] bg-white shadow-xl border border-gray-100 hover:shadow-2xl hover:border-gold/30 transition-all duration-500 hover:-translate-y-4 overflow-hidden h-full flex flex-col items-center text-center">
                        {/* Internal Glow Blob */}
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/10 transition-all duration-700"></div>
                        
                        {/* Animated Icon Container - Larger */}
                        <div className="w-12 h-12 md:w-20 md:h-20 bg-royal/5 rounded-2xl md:rounded-3xl flex items-center justify-center mb-4 md:mb-8 border border-royal/10 group-hover:border-gold/50 transition-all duration-500 shadow-inner relative z-10 group-hover:bg-royal group-hover:shadow-[0_0_25px_rgba(10,61,98,0.4)]">
                            <item.icon className="w-6 h-6 md:w-10 md:h-10 text-gold group-hover:text-white transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-[360deg]" />
                        </div>
                        
                        <h3 className="font-heading font-bold text-sm md:text-2xl text-royal mb-2 md:mb-4 tracking-wide">{item.title}</h3>
                        <p className="text-gray-600 text-[10px] md:text-base leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Popular Packages - Cinematic Display */}
      <section id="domestic" className="py-8 md:py-20 relative z-10 bg-white">
        {/* Section Divider/Decoration */}
         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
         <div className="absolute right-0 top-1/2 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-6 md:mb-12 gap-4 md:gap-6">
                <div>
                     <span className="text-blue-500 text-[10px] md:text-sm font-bold tracking-[0.3em] uppercase mb-1 md:mb-2 block">Destinations</span>
                    <h2 className="text-2xl md:text-5xl font-heading font-bold text-royal mb-2 md:mb-3">{t('packages.title')}</h2>
                    <p className="text-gray-500 font-light max-w-xl text-xs md:text-base">{t('packages.subtitle')}</p>
                </div>
                <button 
                    onClick={() => navigate('/contact')} 
                    className="group relative px-5 py-2 md:px-8 md:py-3 bg-transparent overflow-hidden rounded-full border border-gold/50 text-gold font-bold hover:text-white hover:bg-gold transition-all duration-300 text-xs md:text-base"
                >
                    <span className="relative flex items-center z-10">
                        {t('packages.view_all')} <ArrowRight className="ml-1 md:ml-2 w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                </button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                {POPULAR_PACKAGES.map((pkg) => (
                    <PackageCard key={pkg.id} pkg={pkg} />
                ))}
            </div>
        </div>
      </section>

      {/* Video Promotion - Portal Style - SHORTENED */}
      <section className="py-8 md:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-[1.5rem] md:rounded-[3rem] overflow-hidden h-[200px] md:h-[450px] group border border-white shadow-2xl transform transition-transform hover:scale-[1.01] duration-700">
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700 z-10"></div>
                
                {/* Image Scale Effect */}
                <img 
                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop" 
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[20s] ease-in-out"
                    alt="Travel Video"
                />
                
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-4 md:p-6">
                    <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center mb-3 md:mb-6 group-hover:scale-110 transition-transform duration-300 cursor-pointer shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                        <div className="w-9 h-9 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center text-royal pl-1 shadow-lg">
                            <Play className="w-4 h-4 md:w-6 md:h-6 fill-current" />
                        </div>
                    </div>
                    <h2 className="text-lg md:text-5xl font-heading font-bold text-white tracking-tight drop-shadow-2xl max-w-4xl leading-tight">
                        {t('video.title')}
                    </h2>
                </div>
            </div>
        </div>
      </section>

      {/* Testimonials - Asymmetrical Glass Masonry */}
      <section className="py-8 md:py-20 relative z-10 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute left-0 top-1/3 w-1/3 h-1/3 bg-gradient-to-r from-gold/5 to-transparent blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-20">
                <h2 className="text-2xl md:text-5xl font-heading font-bold text-royal mb-3 md:mb-6">{t('testimonials.title')}</h2>
                <div className="flex justify-center gap-3">
                    <div className="w-1.5 md:w-2.5 h-1.5 md:h-2.5 rounded-full bg-gold animate-bounce" style={{ animationDelay: '0s'}}></div>
                    <div className="w-1.5 md:w-2.5 h-1.5 md:h-2.5 rounded-full bg-gold/60 animate-bounce" style={{ animationDelay: '0.2s'}}></div>
                    <div className="w-1.5 md:w-2.5 h-1.5 md:h-2.5 rounded-full bg-gold/30 animate-bounce" style={{ animationDelay: '0.4s'}}></div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-start">
                {TESTIMONIALS.map((t, idx) => (
                    <div 
                        key={t.id} 
                        className={`
                            bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border border-gray-100 shadow-xl
                            hover:border-gold/30 transition-all duration-500 hover:-translate-y-2 relative
                            ${idx === 1 ? 'md:translate-y-12' : ''} 
                            ${idx === 2 ? 'md:translate-y-6' : ''}
                        `}
                    >
                        <div className="absolute -top-3 -right-3 md:-top-6 md:-right-6 text-5xl md:text-8xl font-serif text-gray-100 font-bold leading-none">"</div>
                        
                        <div className="flex items-center justify-between mb-3 md:mb-6">
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-3 h-3 md:w-4 md:h-4 ${i < t.rating ? 'text-gold fill-current' : 'text-gray-300'}`} />
                                ))}
                            </div>
                            <img src={t.image} alt={t.name} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-sm object-cover" />
                        </div>
                        
                        <p className="text-gray-600 mb-3 md:mb-6 font-light text-xs md:text-base leading-relaxed italic relative z-10">"{t.content[language]}"</p>
                        
                        <div className="border-t border-gray-100 pt-3 md:pt-4">
                            <h4 className="font-heading font-bold text-royal text-sm md:text-lg tracking-wide">{t.name}</h4>
                            <p className="text-[10px] md:text-xs text-gold uppercase font-bold tracking-widest mt-0.5">{t.role[language]}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Bottom spacer for the offset grid */}
            <div className="h-12 hidden md:block"></div>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="py-8 md:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-[1.5rem] md:rounded-[3rem] overflow-hidden bg-royal border border-white/20 shadow-2xl">
                {/* Background Gradient & Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C75] via-royal to-[#020b14] opacity-95"></div>
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10 px-6 py-10 md:px-8 md:py-24 text-center flex flex-col items-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 md:w-16 md:h-16 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm mb-4 md:mb-6 transform hover:rotate-12 transition-transform duration-500 shadow-lg">
                        <Sparkles className="w-5 h-5 md:w-8 md:h-8 text-gold" />
                    </div>
                    
                    <h2 className="text-xl md:text-6xl font-heading font-bold text-white mb-3 md:mb-6 tracking-tight leading-tight">
                        Your Dream Journey <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-[#F9C74F]">Awaits</span>
                    </h2>
                    
                    <p className="text-gray-300 text-xs md:text-xl font-light mb-6 md:mb-10 max-w-2xl mx-auto leading-relaxed">
                        Experience personalized travel planning with our experts. Tailored to your mood, budget, and style.
                    </p>
                    
                    <button 
                        onClick={() => navigate('/contact')}
                        className="group relative inline-flex items-center px-6 py-2.5 md:px-10 md:py-4 bg-gold overflow-hidden rounded-full transition-all hover:bg-white hover:scale-105 shadow-[0_0_40px_rgba(197,157,95,0.4)]"
                    >
                        <span className="relative z-10 text-royal font-bold text-xs md:text-lg flex items-center">
                            Contact Us Today
                            <ArrowRight className="ml-1.5 md:ml-2 w-3.5 h-3.5 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                </div>
            </div>
        </div>
      </section>

      {/* AI Planner & Difference Section (Bottom of Home Page) */}
      <section id="planner" className="py-10 md:py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
                  
                  {/* Left: AI Planner */}
                  <div className="lg:col-span-8">
                      <AIPlanner />
                  </div>

                  {/* Right: Comparison Card - Safar X Difference */}
                  <div className="lg:col-span-4 flex flex-col">
                      <div className="bg-gradient-to-br from-royal/90 to-[#001529]/90 backdrop-blur-md p-5 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] shadow-premium border border-white/10 relative overflow-hidden group h-full flex flex-col">
                          {/* Decorative glow */}
                          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold/10 rounded-full blur-3xl group-hover:bg-gold/20 transition-colors"></div>
                          
                          <div className="flex-1">
                              <h3 className="text-lg md:text-2xl font-heading font-bold text-white mb-4 md:mb-6 text-center border-b border-white/10 pb-4">
                                  The Safar X Difference
                              </h3>

                              <div className="space-y-3 md:space-y-4">
                                  {/* Header Row */}
                                  <div className="grid grid-cols-3 gap-2 text-center text-[9px] md:text-xs font-bold uppercase tracking-wider mb-2 opacity-60 text-gray-300">
                                      <div className="text-left">Feature</div>
                                      <div className="text-gold">Safar X</div>
                                      <div>Others</div>
                                  </div>

                                  {/* Comparison Rows */}
                                  {[
                                      { label: "AI Planning", us: true, them: false },
                                      { label: "24/7 Support", us: true, them: false },
                                      { label: "Premium Hotels", us: true, them: "Mixed" },
                                      { label: "Hidden Fees", us: false, them: true }
                                  ].map((item, idx) => (
                                      <div key={idx} className="grid grid-cols-3 gap-2 items-center text-center py-2.5 md:py-4 border-b border-white/5 last:border-0 hover:bg-white/5 rounded-lg transition-colors">
                                          <div className="text-left font-bold text-gray-200 text-[10px] md:text-sm">{item.label}</div>
                                          <div className="flex justify-center">
                                              {item.us ? (
                                                  <CheckCircle2 className="w-4 h-4 md:w-6 md:h-6 text-green-400 fill-green-900/30" />
                                              ) : (
                                                  <XCircle className="w-4 h-4 md:w-6 md:h-6 text-gray-500" />
                                              )}
                                          </div>
                                          <div className="flex justify-center text-[10px] md:text-sm font-medium text-gray-500">
                                              {item.them === true ? (
                                                  <CheckCircle2 className="w-3.5 h-3.5 md:w-5 md:h-5 text-red-400 opacity-50" />
                                              ) : item.them === false ? (
                                                  <XCircle className="w-3.5 h-3.5 md:w-5 md:h-5 text-red-400 opacity-50" />
                                              ) : (
                                                  <span>{item.them}</span>
                                              )}
                                          </div>
                                      </div>
                                  ))}
                              </div>
                          </div>

                          <div className="mt-6 md:mt-8 pt-4 text-center">
                              <p className="text-[10px] md:text-sm text-gray-400 italic mb-4">"Experience travel without compromise."</p>
                              <div className="h-1 w-10 md:w-12 bg-gold/30 mx-auto rounded-full"></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
};

export default Home;