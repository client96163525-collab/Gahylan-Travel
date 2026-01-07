import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Plane, Map, Mountain, Bus, Briefcase } from 'lucide-react';
import PackageCard from '../components/PackageCard';
import { POPULAR_PACKAGES } from '../constants';

const Services: React.FC = () => {
  const { t } = useLanguage();

  // Filter or Mock Data for different sections
  // Using POPULAR_PACKAGES as a base for demonstration
  const domesticPackages = POPULAR_PACKAGES.filter(p => p.location.en.includes('India'));
  const internationalPackages = POPULAR_PACKAGES.filter(p => !p.location.en.includes('India'));

  // Placeholder cards for services without specific packages yet
  const ServicePlaceholder = ({ title, icon: Icon, desc }: { title: string, icon: any, desc: string }) => (
    <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all group">
        <div className="w-16 h-16 bg-royal/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-royal transition-colors duration-300">
            <Icon className="w-8 h-8 text-royal group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-xl font-heading font-bold text-royal mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-6">{desc}</p>
        <button className="text-gold font-bold uppercase text-sm tracking-wider hover:text-royal transition-colors flex items-center">
            Learn More <span className="ml-2">→</span>
        </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Header */}
      <div className="relative h-[40vh] min-h-[350px] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-royal/90 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 text-center px-4 animate-fade-in-up mt-10">
          <span className="text-gold font-bold uppercase tracking-[0.2em] text-sm mb-2 block">Comprehensive Travel Solutions</span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4 drop-shadow-lg">{t('services.hero_title')}</h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto font-light">
            {t('services.hero_subtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 space-y-20 pb-20">
        
        {/* Domestic Section */}
        <section id="domestic" className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100">
             <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-blue-50 rounded-xl">
                    <Map className="w-8 h-8 text-royal" />
                </div>
                <div>
                    <h2 className="text-3xl font-heading font-bold text-royal">{t('services.domestic_title')}</h2>
                    <div className="h-1 w-20 bg-gold mt-2 rounded-full"></div>
                </div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {domesticPackages.length > 0 ? (
                    domesticPackages.map(pkg => <PackageCard key={pkg.id} pkg={pkg} />)
                ) : (
                    <p className="col-span-full text-gray-500 italic">More domestic packages coming soon...</p>
                )}
             </div>
        </section>

        {/* International Section */}
        <section id="international" className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100">
             <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-blue-50 rounded-xl">
                    <Plane className="w-8 h-8 text-royal" />
                </div>
                <div>
                    <h2 className="text-3xl font-heading font-bold text-royal">{t('services.international_title')}</h2>
                    <div className="h-1 w-20 bg-gold mt-2 rounded-full"></div>
                </div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {internationalPackages.length > 0 ? (
                    internationalPackages.map(pkg => <PackageCard key={pkg.id} pkg={pkg} />)
                ) : (
                    <p className="col-span-full text-gray-500 italic">More international packages coming soon...</p>
                )}
             </div>
        </section>

        {/* Specialized Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
            <ServicePlaceholder 
                title={t('services.trekking_title')} 
                icon={Mountain} 
                desc="Embark on thrilling trekking adventures across the Himalayas and other scenic trails. Expert guides and safety equipment included."
            />
            <ServicePlaceholder 
                title={t('services.transport_title')} 
                icon={Bus} 
                desc="Premium fleet of vehicles for seamless transfers. From airport pickups to luxury coaches for group travel."
            />
            <ServicePlaceholder 
                title={t('services.tours_title')} 
                icon={Briefcase} 
                desc="Professional guided tours for heritage sites, city exploration, and cultural immersion experiences."
            />
        </div>

      </div>
    </div>
  );
};

export default Services;