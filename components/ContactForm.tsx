import React from 'react';
import { Send, User, Phone, MapPin, MessageSquare } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactForm: React.FC = () => {
    const { t } = useLanguage();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(t('contact.success'));
    };

    // Enhanced input classes with smoother focus transition and scale effect
    const inputClasses = "w-full border border-gray-200 p-4 pl-12 rounded-xl focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/10 bg-gray-50/30 transition-all duration-300 ease-out font-medium text-gray-800 focus:bg-white focus:shadow-xl focus:scale-[1.02] hover:border-gold/50 placeholder-gray-400";
    
    // Enhanced label animation
    const labelClasses = "block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1 transition-all duration-300 group-focus-within:text-gold group-focus-within:translate-x-1";
    
    // Icon animation
    const iconClasses = "w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2 group-focus-within:text-gold group-focus-within:scale-110 transition-all duration-300";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group relative">
                <label className={labelClasses}>{t('book.label_name')}</label>
                <div className="relative">
                    <input 
                        type="text" 
                        required 
                        className={inputClasses}
                        placeholder="Your Name"
                    />
                    <User className={iconClasses} />
                </div>
            </div>

            <div className="group relative">
                <label className={labelClasses}>{t('book.label_phone')}</label>
                <div className="relative">
                    <input 
                        type="tel" 
                        required 
                        className={inputClasses}
                        placeholder="Mobile Number"
                    />
                    <Phone className={iconClasses} />
                </div>
            </div>
        </div>

        <div className="group relative">
            <label className={labelClasses}>{t('hero.label_dest')} <span className="text-gray-300 font-normal group-focus-within:text-gold/50 transition-colors">(Optional)</span></label>
            <div className="relative">
                <input 
                    type="text" 
                    className={inputClasses}
                    placeholder="Where do you want to go?"
                />
                <MapPin className={iconClasses} />
            </div>
        </div>

        <div className="group relative">
            <label className={labelClasses}>Message</label>
            <div className="relative">
                <textarea 
                    rows={4} 
                    className={`${inputClasses} resize-none`}
                    placeholder={t('contact.ph_req')}
                ></textarea>
                <MessageSquare className="w-5 h-5 text-gray-400 absolute left-4 top-6 group-focus-within:text-gold group-focus-within:scale-110 transition-all duration-300" />
            </div>
        </div>

        <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-royal via-[#164e78] to-[#C59D5F] bg-[length:200%_auto] hover:bg-right text-white font-bold py-4 rounded-xl transition-all duration-500 flex items-center justify-center shadow-lg hover:shadow-gold/30 hover:-translate-y-1 active:scale-[0.98]"
        >
            {t('contact.btn_submit')} <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
    </form>
  );
};

export default ContactForm;