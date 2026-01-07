import React from 'react';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-royal/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <span className="text-gold font-bold uppercase tracking-[0.2em] text-sm mb-2 block">Get in Touch</span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4 drop-shadow-lg">{t('nav.contact')}</h1>
          <p className="text-gray-200 text-lg max-w-xl mx-auto font-light">
            We'd love to hear from you. Let's plan your next extraordinary adventure together.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Info Card */}
            <div className="bg-royal text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10"></div>
                
                <h3 className="text-2xl font-heading font-bold mb-8 relative z-10">Contact Information</h3>
                
                <div className="space-y-6 relative z-10">
                    <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mr-4">
                            <Phone className="w-5 h-5 text-gold" />
                        </div>
                        <div>
                            <p className="text-xs text-blue-200 uppercase tracking-wider font-bold mb-1">Phone</p>
                            <p className="text-lg font-medium">+91 80508 30548</p>
                            <p className="text-sm text-gray-400 mt-1">Mon-Sun 9am-8pm</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mr-4">
                            <Mail className="w-5 h-5 text-gold" />
                        </div>
                        <div>
                            <p className="text-xs text-blue-200 uppercase tracking-wider font-bold mb-1">Email</p>
                            <p className="text-lg font-medium">safarx02@gmail.com</p>
                            <p className="text-sm text-gray-400 mt-1">24/7 Online Support</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mr-4">
                            <MapPin className="w-5 h-5 text-gold" />
                        </div>
                        <div>
                            <p className="text-xs text-blue-200 uppercase tracking-wider font-bold mb-1">Office</p>
                            <p className="text-lg font-medium leading-snug">Safar X,<br/> Shakti Colony, Karnal,<br/> Haryana 132001</p>
                        </div>
                    </div>
                </div>

                {/* Social Links */}
                <div className="mt-10 pt-6 border-t border-white/10">
                    <p className="text-sm font-bold text-gold mb-4 uppercase tracking-wider">Connect with us</p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold hover:text-royal flex items-center justify-center transition-all duration-300">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold hover:text-royal flex items-center justify-center transition-all duration-300">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold hover:text-royal flex items-center justify-center transition-all duration-300">
                            <Twitter className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
            
            {/* Opening Hours Card (Optional decoration) */}
            <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100 hidden lg:block">
                <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-gold" />
                    <h4 className="font-bold text-royal text-lg">Business Hours</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="font-bold text-royal">09:00 AM - 08:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Saturday</span>
                        <span className="font-bold text-royal">10:00 AM - 06:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Sunday</span>
                        <span className="font-bold text-royal">Closed</span>
                    </li>
                </ul>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[2rem] shadow-2xl p-8 md:p-12 border border-gray-100 h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gold to-royal"></div>
                <div className="mb-8">
                    <h2 className="text-3xl font-heading font-bold text-royal mb-2">{t('contact.title')}</h2>
                    <p className="text-gray-500">Fill out the form below and our travel experts will get back to you shortly.</p>
                </div>
                <ContactForm />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;