import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { POPULAR_PACKAGES } from '../constants';
import { TravelPackage } from '../types';
import { Clock, MapPin, CheckCircle, Send, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const PackageDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [pkg, setPkg] = useState<TravelPackage | null>(null);
  const { language, t } = useLanguage();

  useEffect(() => {
    const found = POPULAR_PACKAGES.find(p => p.id === id);
    if (found) {
        setPkg(found);
    } else {
        navigate('/');
    }
  }, [id, navigate]);

  if (!pkg) return null;

  const handleWhatsAppBook = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const date = (form.elements.namedItem('date') as HTMLInputElement).value;
    
    const message = `Hi Gahylan Travel, I am interested in *${pkg.title[language]}*. My name is ${name} and looking to travel around ${date}.`;
    window.open(`https://wa.me/917496877826?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Banner */}
      <div className="relative h-[65vh] w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center fixed-bg"
          style={{ backgroundImage: `url(${pkg.image})` }}
        >
             <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D62] via-[#0A3D62]/50 to-transparent"></div>
        </div>
        
        {/* Back Button */}
        <button 
            onClick={() => navigate(-1)}
            className="absolute top-24 left-4 md:left-8 z-20 text-white bg-black/20 backdrop-blur-md p-3 rounded-full hover:bg-white hover:text-royal transition-all"
        >
            <ArrowLeft className="w-6 h-6" />
        </button>

        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 pb-16">
            <div className="animate-fade-in-up">
                <div className="bg-gold text-royal inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold mb-4 shadow-lg">
                    <MapPin className="w-4 h-4 mr-2" />
                    {pkg.location[language]}
                </div>
                <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4 leading-tight shadow-black drop-shadow-lg">{pkg.title[language]}</h1>
                <div className="flex flex-wrap items-center text-white gap-6">
                    <span className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                        <Clock className="w-5 h-5 mr-2 text-gold" /> {pkg.duration[language]}
                    </span>
                    <span className="text-3xl font-bold text-gold drop-shadow-md">₹{pkg.price.toLocaleString()}</span>
                </div>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10 grid lg:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-royal mb-4 border-b pb-2 border-gray-100">{t('book.overview')}</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{pkg.description[language]}</p>
            </div>

            {/* Inclusions */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-royal mb-6 border-b pb-2 border-gray-100">{t('book.included')}</h2>
                <div className="grid grid-cols-2 gap-4">
                    {pkg.inclusions[language].map((inc, i) => (
                        <div key={i} className="flex items-center text-gray-700 bg-sky-50 p-3 rounded-xl">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="font-medium">{inc}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-royal mb-8 border-b pb-2 border-gray-100">{t('book.itinerary')}</h2>
                <div className="space-y-0 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[22px] top-4 bottom-4 w-0.5 bg-gray-200"></div>

                    {pkg.itinerary.map((day, idx) => (
                        <div key={day.day} className="flex gap-6 relative mb-8 last:mb-0 group">
                            <div className="flex-shrink-0 w-12 h-12 bg-white border-4 border-royal text-royal rounded-full flex items-center justify-center font-bold text-lg z-10 shadow-md group-hover:scale-110 transition-transform group-hover:bg-gold group-hover:border-gold">
                                {day.day}
                            </div>
                            <div className="bg-gray-50 p-5 rounded-2xl flex-grow group-hover:bg-sky-50 transition-colors">
                                <h3 className="text-lg font-bold text-royal mb-2">{day.title[language]}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{day.desc[language]}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Right Sidebar (Booking Form) */}
        <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 sticky top-24">
                <h3 className="text-2xl font-bold text-royal mb-6 text-center">{t('book.title')}</h3>
                <div className="bg-gradient-to-r from-royal to-blue-900 text-white p-5 rounded-2xl mb-8 text-center shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
                    <p className="text-sm text-gray-300 uppercase tracking-widest text-xs mb-1">{t('book.starting_price')}</p>
                    <p className="text-3xl font-bold text-gold">₹{pkg.price.toLocaleString()}<span className="text-sm font-normal text-gray-300">{t('book.per_person')}</span></p>
                </div>

                <form onSubmit={handleWhatsAppBook} className="space-y-4">
                    <div>
                        <label className="block text-xs font-bold text-royal uppercase tracking-wider mb-1 ml-1">{t('book.label_name')}</label>
                        <input name="name" type="text" required className="w-full border-gray-200 bg-gray-50 rounded-xl p-3 focus:ring-2 focus:ring-gold focus:outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-royal uppercase tracking-wider mb-1 ml-1">{t('book.label_phone')}</label>
                        <input name="phone" type="tel" required className="w-full border-gray-200 bg-gray-50 rounded-xl p-3 focus:ring-2 focus:ring-gold focus:outline-none transition-all" placeholder="+91 74968 77826" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-royal uppercase tracking-wider mb-1 ml-1">{t('book.label_date')}</label>
                        <input name="date" type="date" required className="w-full border-gray-200 bg-gray-50 rounded-xl p-3 focus:ring-2 focus:ring-gold focus:outline-none transition-all" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-royal uppercase tracking-wider mb-1 ml-1">{t('book.label_guests')}</label>
                        <input type="number" min="1" defaultValue="2" className="w-full border-gray-200 bg-gray-50 rounded-xl p-3 focus:ring-2 focus:ring-gold focus:outline-none transition-all" />
                    </div>

                    <button type="submit" className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl flex items-center justify-center transition-all shadow-lg hover:shadow-green-500/30 mt-4 transform hover:-translate-y-1">
                        <Send className="w-5 h-5 mr-2" />
                        {t('book.btn_whatsapp')}
                    </button>
                    
                    <div className="text-center text-xs text-gray-400 mt-4">
                        {t('book.confirmation')}
                    </div>
                </form>
            </div>
        </div>

      </div>
    </div>
  );
};

export default PackageDetails;