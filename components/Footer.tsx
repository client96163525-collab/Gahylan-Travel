import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-royal text-gray-300 py-16 border-t border-white/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-3xl font-heading font-bold text-white mb-6">Safar X</h3>
          <p className="text-sm leading-relaxed mb-6 text-gray-400">
            {t('footer.desc')}
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold hover:bg-gold hover:text-royal transition-all duration-300"><Facebook size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold hover:bg-gold hover:text-royal transition-all duration-300"><Instagram size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold hover:bg-gold hover:text-royal transition-all duration-300"><Twitter size={18} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm border-l-4 border-gold pl-3">{t('footer.quick_links')}</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="/" className="hover:text-gold transition-colors block transform hover:translate-x-1 duration-200">{t('nav.home')}</a></li>
            <li><a href="/about" className="hover:text-gold transition-colors block transform hover:translate-x-1 duration-200">{t('nav.about')}</a></li>
            <li><a href="/contact" className="hover:text-gold transition-colors block transform hover:translate-x-1 duration-200">{t('nav.contact')}</a></li>
            <li><a href="#" className="hover:text-gold transition-colors block transform hover:translate-x-1 duration-200">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Popular Destinations */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm border-l-4 border-gold pl-3">{t('footer.destinations')}</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-gold transition-colors block transform hover:translate-x-1 duration-200">Maldives</a></li>
            <li><a href="#" className="hover:text-gold transition-colors block transform hover:translate-x-1 duration-200">Dubai</a></li>
            <li><a href="#" className="hover:text-gold transition-colors block transform hover:translate-x-1 duration-200">Thailand</a></li>
            <li><a href="#" className="hover:text-gold transition-colors block transform hover:translate-x-1 duration-200">Goa</a></li>
            <li><a href="#" className="hover:text-gold transition-colors block transform hover:translate-x-1 duration-200">Europe</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm border-l-4 border-gold pl-3">{t('footer.contact')}</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start group">
              <MapPin className="h-5 w-5 text-gold mr-3 flex-shrink-0 group-hover:animate-bounce" />
              <span className="text-gray-400 group-hover:text-white transition-colors">Safar X, Shakti Colony, Karnal, Haryana 132001</span>
            </li>
            <li className="flex items-center group">
              <Phone className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
              <span className="text-gray-400 group-hover:text-white transition-colors">+91 80508 30548</span>
            </li>
            <li className="flex items-center group">
              <Mail className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
              <span className="text-gray-400 group-hover:text-white transition-colors">safarx02@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Safar X. {t('footer.rights')} {t('footer.gstin')}: 27ABCDE1234F1Z5.
      </div>
    </footer>
  );
};

export default Footer;