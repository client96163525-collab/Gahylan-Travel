import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Target, Eye, Globe, Award, Heart, Users } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { label: 'Happy Travelers', value: '10k+', icon: Users },
    { label: 'Destinations', value: '50+', icon: Globe },
    { label: 'Awards Won', value: '15', icon: Award },
    { label: 'Years Experience', value: '8+', icon: Heart },
  ];

  const team = [
    {
      name: "Sahil",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop"
    },
    {
      name: "Sarah Jenkins",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1573496359-136d47552640?q=80&w=1000&auto=format&fit=crop"
    },
    {
      name: "Rahul Verma",
      role: "Travel Consultant Lead",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner - Shortened */}
      <div className="relative h-[35vh] min-h-[350px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-royal/80 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 animate-fade-in-up mt-16">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">{t('about.hero_title')}</h1>
          <p className="text-lg md:text-xl font-light text-gold italic font-display">{t('about.hero_subtitle')}</p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 py-16 -mt-16 relative z-20">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border-t-4 border-gold">
            <div className="w-14 h-14 bg-royal/5 rounded-full flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-royal" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-royal mb-4">{t('about.mission')}</h2>
            <p className="text-gray-600 leading-relaxed">{t('about.mission_desc')}</p>
          </div>
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border-t-4 border-royal">
             <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-gold" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-royal mb-4">{t('about.vision')}</h2>
             <p className="text-gray-600 leading-relaxed">{t('about.vision_desc')}</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-royal py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <stat.icon className="w-10 h-10 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-blue-200 text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
             <div className="relative">
                <div className="absolute inset-0 bg-gold/20 transform translate-x-4 translate-y-4 rounded-3xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                  alt="Our Story" 
                  className="relative rounded-3xl shadow-2xl z-10 w-full h-[300px] object-cover"
                />
             </div>
          </div>
          <div className="md:w-1/2">
            <span className="text-gold font-bold uppercase tracking-widest text-sm mb-2 block">{t('about.story_subtitle')}</span>
            <h2 className="text-3xl font-heading font-bold text-royal mb-6">{t('about.story')}</h2>
            <p className="text-gray-600 leading-relaxed text-base mb-6">
              {t('about.story_desc')}
            </p>
             <p className="text-gray-600 leading-relaxed text-base">
              {t('about.story_desc_2')}
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-heading font-bold text-royal mb-12">{t('about.team')}</h2>
           <div className="grid md:grid-cols-3 gap-8">
             {team.map((member, idx) => (
               <div key={idx} className="group bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-2 transition-transform duration-300">
                 <div className="w-24 h-24 mx-auto mb-4 relative">
                   <div className="absolute inset-0 bg-gradient-to-br from-gold to-royal rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-full border-4 border-white relative z-10" />
                 </div>
                 <h3 className="text-lg font-bold text-royal">{member.name}</h3>
                 <p className="text-gold font-medium text-xs uppercase tracking-wide mt-1">{member.role}</p>
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;