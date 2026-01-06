import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { POPULAR_PACKAGES } from '../constants';
import { TravelPackage } from '../types';
import { Clock, MapPin, CheckCircle, Send, ArrowLeft, Users, Calendar, Ticket } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCurrency } from '../contexts/CurrencyContext';

const PackageDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [pkg, setPkg] = useState<TravelPackage | null>(null);
  const { language, t } = useLanguage();
  const { formatPrice, currency } = useCurrency();
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const found = POPULAR_PACKAGES.find(p => p.id === id);
    if (found) {
        setPkg(found);
    } else {
        navigate('/');
    }
  }, [id, navigate]);

  const scrollToBooking = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  if (!pkg) return null;

  const handleWhatsAppBook = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const date = (form.elements.namedItem('date') as HTMLInputElement).value;
    const guests = (form.elements.namedItem('guests') as HTMLInputElement).value;
    
    // Client-side validation for guests
    const guestCount = parseInt(guests, 10);
    if (isNaN(guestCount) || guestCount < 1) {
        alert("Please enter a valid number of guests (minimum 1).");
        return;
    }

    // Confirmation Dialog
    const isConfirmed = window.confirm(`Please confirm your booking details:\n\nPackage: ${pkg.title[language]}\nName: ${name}\nDate: ${date}\nGuests: ${guestCount}\n\nDo you want to proceed to WhatsApp to send this inquiry?`);

    if (!isConfirmed) return;

    const message = `Hi Sahil Tour & Travels, I am interested in *${pkg.title[language]}*.
    
Name: ${name}
Travel Date: ${date}
Guests: ${guestCount}
Currency Preference: ${currency}

Please provide more details.`;

    // Updated number: +91 94682 78300
    window.open(`https://wa.me/919468278300?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 relative">
      {/* Banner - Reduced Height for 'Short' look */}
      <div className="relative h-[45vh] min-h-[400px] w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${pkg.image})` }}
        >
             <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D62] via-[#0A3D62]/40 to-black/30"></div>
        </div>
        
        {/* Back Button */}
        <button 
            onClick={() => navigate(-1)}
            className="absolute top-24 left-4 md:left-8 z-20 text-white bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white hover:text-royal transition-all border border-white/20"
        >
            <ArrowLeft className="w-6 h-6" />
        </button>

        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 pb-12">
            <div className="animate-fade-in-up">
                <div className="bg-white/10 backdrop-blur-md text-white border border-white/20 inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold mb-4 shadow-lg">
                    <MapPin className="w-4 h-4 mr-2 text-gold" />
                    {pkg.location[language]}
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                    {pkg.title[language]}
                </h1>
                <div className="flex flex-wrap items-center text-white gap-4 md:gap-6">
                    <span className="flex items-center bg-royal/80 backdrop-blur-sm px-5 py-2.5 rounded-xl border border-white/10 shadow-lg">
                        <Clock className="w-4 h-4 mr-2 text-gold" /> 
                        <span className="font-semibold tracking-wide text-sm">{pkg.duration[language]}</span>
                    </span>
                    <span className="flex items-center bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-xl border border-white/10 shadow-lg">
                        <span className="text-2xl font-bold text-royal">{formatPrice(pkg.price)}</span>
                        <span className="text-[10px] text-gray-500 ml-2 font-semibold uppercase tracking-wider">per person</span>
                    </span>
                </div>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-10 grid lg:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-6">
            {/* Overview */}
            <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-xl border border-gray-100">
                <h2 className="text-xl font-bold text-royal mb-4 border-b pb-3 border-gray-100 flex items-center">
                    {t('book.overview')}
                </h2>
                <p className="text-gray-600 leading-relaxed text-base font-light">{pkg.description[language]}</p>
            </div>

            {/* Inclusions */}
            <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-xl border border-gray-100">
                <h2 className="text-xl font-bold text-royal mb-6 border-b pb-3 border-gray-100">
                    {t('book.included')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pkg.inclusions[language].map((inc, i) => (
                        <div key={i} className="flex items-center text-gray-700 bg-sky-50/50 p-3 rounded-2xl border border-sky-100 hover:border-sky-200 transition-colors">
                            <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0">
                                <CheckCircle className="w-4 h-4 text-green-600" />
                            </div>
                            <span className="font-medium text-sm">{inc}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-xl border border-gray-100">
                <h2 className="text-xl font-bold text-royal mb-8 border-b pb-3 border-gray-100">
                    {t('book.itinerary')}
                </h2>
                <div className="space-y-0 relative pl-4">
                    {/* Vertical Line */}
                    <div className="absolute left-[33px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-royal via-gold to-royal/20"></div>

                    {pkg.itinerary.map((day, idx) => (
                        <div key={day.day} className="flex gap-6 relative mb-8 last:mb-0 group">
                            <div className="flex-shrink-0 w-12 h-12 bg-white border-[3px] border-royal text-royal rounded-full flex items-center justify-center font-bold text-lg z-10 shadow-lg group-hover:scale-110 transition-all duration-300 group-hover:bg-royal group-hover:text-white group-hover:border-gold">
                                {day.day}
                            </div>
                            <div className="bg-gray-50 p-5 rounded-3xl flex-grow group-hover:bg-white group-hover:shadow-lg transition-all duration-300 border border-transparent group-hover:border-gray-100">
                                <h3 className="text-lg font-bold text-royal mb-2 flex items-center">
                                    {day.title[language]}
                                </h3>
                                <p className="text-gray-600 leading-relaxed font-light text-sm">{day.desc[language]}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Right Sidebar (Booking Form) */}
        <div className="lg:col-span-1" ref={formRef}>
            <div className="bg-white p-6 rounded-[2rem] shadow-2xl border border-gray-100 sticky top-28">
                <h3 className="text-xl font-bold text-royal mb-5 text-center">{t('book.title')}</h3>
                
                <div className="bg-gradient-to-br from-royal to-[#0A2A45] text-white p-5 rounded-3xl mb-6 text-center shadow-lg relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-gold/20 transition-colors"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400/10 rounded-full blur-xl translate-y-1/2 -translate-x-1/2"></div>
                    
                    <p className="text-blue-200 uppercase tracking-widest text-[10px] mb-1 font-bold">{t('book.starting_price')}</p>
                    <div className="flex items-baseline justify-center">
                        <p className="text-3xl font-bold text-gold tracking-tight">{formatPrice(pkg.price)}</p>
                    </div>
                </div>

                <form onSubmit={handleWhatsAppBook} className="space-y-4">
                    <div>
                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 ml-1">{t('book.label_name')}</label>
                        <input 
                            name="name" 
                            type="text" 
                            required 
                            className="w-full border-gray-200 bg-gray-50/50 rounded-xl p-3.5 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all placeholder-gray-400 text-gray-800 font-medium text-sm" 
                            placeholder="John Doe" 
                        />
                    </div>
                    <div>
                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 ml-1">{t('book.label_phone')}</label>
                        <input 
                            name="phone" 
                            type="tel" 
                            required 
                            className="w-full border-gray-200 bg-gray-50/50 rounded-xl p-3.5 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all placeholder-gray-400 text-gray-800 font-medium text-sm" 
                            placeholder="+91 94682 78300" 
                        />
                    </div>
                    <div>
                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 ml-1">{t('book.label_date')}</label>
                        <div className="relative">
                            <input 
                                name="date" 
                                type="date" 
                                required 
                                className="w-full border-gray-200 bg-gray-50/50 rounded-xl p-3.5 pl-10 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all text-gray-800 font-medium text-sm" 
                            />
                            <Calendar className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 ml-1">{t('book.label_guests')}</label>
                        <div className="relative">
                            <input 
                                name="guests" 
                                type="number" 
                                min="1" 
                                defaultValue="2" 
                                required 
                                className="w-full border-gray-200 bg-gray-50/50 rounded-xl p-3.5 pl-10 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all text-gray-800 font-medium text-sm" 
                            />
                            <Users className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 rounded-xl flex items-center justify-center transition-all shadow-lg hover:shadow-green-500/30 mt-5 transform hover:-translate-y-1 group text-sm">
                        <Send className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                        {t('book.btn_whatsapp')}
                    </button>
                    
                    <div className="text-center">
                        <p className="text-[10px] text-gray-400 bg-gray-50 inline-block px-2 py-0.5 rounded-full">{t('book.confirmation')}</p>
                    </div>
                </form>
            </div>
        </div>
      </div>
      
      {/* Mobile Floating Book Now Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 z-50 lg:hidden flex items-center justify-between shadow-[0_-5px_15px_rgba(0,0,0,0.1)]">
        <div>
             <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Total Price</p>
             <p className="text-xl font-bold text-royal">{formatPrice(pkg.price)}</p>
        </div>
        <button 
            onClick={scrollToBooking}
            className="bg-royal text-white px-6 py-3 rounded-xl font-bold shadow-lg flex items-center"
        >
            <Ticket className="w-4 h-4 mr-2" />
            Book Now
        </button>
      </div>
    </div>
  );
};

export default PackageDetails;