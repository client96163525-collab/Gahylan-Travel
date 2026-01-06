import React from 'react';
import { Clock, MapPin, Star, ArrowRight, Plane, CalendarCheck } from 'lucide-react';
import { TravelPackage } from '../types';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useCurrency } from '../contexts/CurrencyContext';

interface PackageCardProps {
  pkg: TravelPackage;
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg }) => {
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const { formatPrice } = useCurrency();

  // Handler to go specifically to booking section
  const handleBookNow = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the card click
    navigate(`/package/${pkg.id}`);
    // Ideally pass a state to scroll to booking, or just let the details page handle it.
    // The details page already has the booking form visible on desktop or button on mobile.
  };

  return (
    <div 
        onClick={() => navigate(`/package/${pkg.id}`)}
        className="group relative h-[280px] md:h-[320px] w-full rounded-[1.5rem] overflow-hidden cursor-pointer shadow-premium hover:shadow-2xl transition-all duration-300 border border-gray-100 bg-white"
    >
      {/* Background Image - Reduced height impact */}
      <img 
        src={pkg.image} 
        alt={pkg.title[language]} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Gradient Overlay - Darker at bottom for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

      {/* Content Container */}
      <div className="absolute inset-0 p-5 flex flex-col justify-between">
        
        {/* Top Badges */}
        <div className="flex justify-between items-start">
            <div className="bg-royal/90 backdrop-blur-sm px-2.5 py-1 rounded-lg flex items-center border border-white/10 shadow-sm">
                <MapPin className="w-3 h-3 text-gold mr-1" />
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">{pkg.location[language]}</span>
            </div>
            
            <div className="bg-white/20 backdrop-blur-md px-2 py-1 rounded-lg flex items-center border border-white/10">
                <Star className="w-3 h-3 text-gold fill-current mr-1" />
                <span className="text-xs font-bold text-white">{pkg.rating}</span>
            </div>
        </div>

        {/* Bottom Info */}
        <div className="transform transition-transform duration-300 group-hover:-translate-y-1">
            <h3 className="text-lg md:text-xl font-heading text-white mb-1 leading-tight group-hover:text-gold-light transition-colors line-clamp-2">
                {pkg.title[language]}
            </h3>
            
            <div className="flex items-center gap-3 text-gray-300 text-xs mb-3">
                 <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-gold" />
                    {pkg.duration[language]}
                 </div>
                 <div className="flex items-center gap-1">
                    <Plane className="w-3 h-3 text-gold" />
                    Flight Incl.
                 </div>
            </div>

            {/* Price & Action Row */}
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/10">
                <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">{t('packages.starting_from')}</p>
                    <p className="text-lg font-bold text-white">{formatPrice(pkg.price)}</p>
                </div>
                
                {/* Book Now Button */}
                <button 
                    onClick={handleBookNow}
                    className="bg-gold hover:bg-white hover:text-royal text-royal text-xs font-bold px-4 py-2 rounded-lg transition-all duration-300 shadow-lg flex items-center gap-1"
                >
                    Book Now
                    <ArrowRight className="w-3 h-3" />
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;