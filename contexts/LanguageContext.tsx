import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '../types';

type Translations = {
  [key: string]: {
    en: string;
    hi: string;
  };
};

const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', hi: 'होम' },
  'nav.domestic': { en: 'Domestic', hi: 'घरेलू' },
  'nav.international': { en: 'International', hi: 'अंतरराष्ट्रीय' },
  'nav.trekking': { en: 'Trekking', hi: 'ट्रेकिंग' },
  'nav.transportation': { en: 'Transportation', hi: 'परिवहन' },
  'nav.tours': { en: 'Tours', hi: 'टूर्स' },
  'nav.packages': { en: 'Package and Price', hi: 'पैकेज और कीमत' },
  'nav.about': { en: 'About Us', hi: 'हमारे बारे में' },
  'nav.ai_planner': { en: 'AI Planner', hi: 'AI प्लानर' },
  'nav.contact': { en: 'Contact', hi: 'संपर्क करें' },
  'nav.book_now': { en: 'Book Now', hi: 'अभी बुक करें' },

  // Hero
  'hero.subtitle': { en: 'Affordable • Hassle-Free • Premium', hi: 'किफायती • परेशानी मुक्त • प्रीमियम' },
  'hero.title_start': { en: 'Explore The World With', hi: 'दुनिया का अन्वेषण करें' },
  'hero.desc': { en: 'Discover curated packages for Dubai, Maldives, Europe, and more. Your journey, our responsibility.', hi: 'दुबई, मालदीव, यूरोप और अधिक के लिए क्यूरेटेड पैकेज खोजें। आपकी यात्रा, हमारी जिम्मेदारी।' },
  'hero.search_dest': { en: 'Where to go?', hi: 'कहाँ जाना है?' },
  'hero.label_dest': { en: 'Destination', hi: 'गंतव्य' },
  'hero.label_budget': { en: 'Budget', hi: 'बजट' },
  'hero.any_budget': { en: 'Any Budget', hi: 'कोई भी बजट' },
  'hero.economy': { en: 'Economy', hi: 'इकोनॉमी' },
  'hero.standard': { en: 'Standard', hi: 'स्टैण्डर्ड' },
  'hero.luxury': { en: 'Luxury', hi: 'लक्ज़री' },
  'hero.find_plan': { en: 'Find Plan', hi: 'योजना खोजें' },

  // About Page
  'about.hero_title': { en: 'Our Journey', hi: 'हमारी यात्रा' },
  'about.hero_subtitle': { en: 'Crafting memories, one destination at a time.', hi: 'यादें बनाना, एक समय में एक गंतव्य।' },
  'about.mission': { en: 'Our Mission', hi: 'हमारा मिशन' },
  'about.mission_desc': { en: 'To curate unforgettable journeys that blend luxury, culture, and comfort, ensuring every traveler experiences the extraordinary.', hi: 'अविस्मरणीय यात्राओं को क्यूरेट करना जो विलासिता, संस्कृति और आराम को मिश्रित करती हैं, यह सुनिश्चित करती हैं कि प्रत्येक यात्री असाधारण अनुभव करे।' },
  'about.vision': { en: 'Our Vision', hi: 'हमारा दृष्टिकोण' },
  'about.vision_desc': { en: 'To be the world’s most trusted partner for premium travel experiences, connecting people with the beauty of the globe.', hi: 'प्रीमियम यात्रा अनुभवों के लिए दुनिया का सबसे भरोसेमंद साथी बनना, लोगों को दुनिया की सुंदरता से जोड़ना।' },
  'about.story': { en: 'Our Story', hi: 'हमारी कहानी' },
  'about.story_subtitle': { en: 'Who We Are', hi: 'हम कौन हैं' },
  'about.story_desc': { en: 'Founded with a passion for exploration, Safar X began as a small boutique agency. Today, we stand as a beacon of premium travel, having served thousands of happy travelers across the globe.', hi: 'अन्वेषण के प्रति जुनून के साथ स्थापित, Safar X एक छोटी बुटीक एजेंसी के रूप में शुरू हुई। आज, हम प्रीमियम यात्रा के एक प्रतीक के रूप में खड़े हैं, जिन्होंने दुनिया भर में हजारों खुश यात्रियों की सेवा की है।' },
  'about.story_desc_2': { en: 'We believe that travel is the only thing you buy that makes you richer. Our team of experts meticulously crafts every itinerary.', hi: 'हमारा मानना है कि यात्रा ही वह एकमात्र चीज है जिसे आप खरीदते हैं जो आपको अमीर बनाती है। विशेषज्ञों की हमारी टीम हर यात्रा कार्यक्रम को सावधानीपूर्वक तैयार करती है।' },
  'about.team': { en: 'Meet The Leaders', hi: 'नेताओं से मिलें' },

  // Why Choose Us
  'why.title': { en: 'Why Choose Safar X?', hi: 'Safar X क्यों चुनें?' },
  'why.support': { en: '24/7 Support', hi: '24/7 सहायता' },
  'why.support_desc': { en: 'We are always here for you.', hi: 'हम हमेशा आपके लिए यहाँ हैं।' },
  'why.verified': { en: 'Verified Hotels', hi: 'सत्यापित होटल' },
  'why.verified_desc': { en: 'Only the best stays for you.', hi: 'केवल आपके लिए सबसे अच्छा ठहरना।' },
  'why.price': { en: 'Best Price', hi: 'सर्वोत्तम मूल्य' },
  'why.price_desc': { en: 'Guaranteed value for money.', hi: 'पैसे की गारंटीकृत कीमत।' },
  'why.premium': { en: 'Premium Exp.', hi: 'प्रीमियम अनुभव' },
  'why.premium_desc': { en: 'Luxury services at every step.', hi: 'हर कदम पर लक्जरी सेवाएं।' },

  // Popular Packages
  'packages.title': { en: 'Popular Packages', hi: 'लोकप्रिय पैकेज' },
  'packages.subtitle': { en: 'Explore our most booked destinations', hi: 'हमारे सबसे अधिक बुक किए गए गंतव्यों का अन्वेषण करें' },
  'packages.view_all': { en: 'View All Destinations', hi: 'सभी गंतव्य देखें' },
  'packages.starting_from': { en: 'Starting from', hi: 'शुरुआती कीमत' },

  // AI Planner
  'ai.tag': { en: 'AI-Powered Travel Agent', hi: 'AI-संचालित ट्रैवल एजेंट' },
  'ai.heading': { en: 'Not sure where to go? Let AI decide.', hi: 'कहाँ जाना है पता नहीं? AI को तय करने दें।' },
  'ai.desc': { en: 'Enter your preferences, budget, and mood. Our smart AI will curate the perfect mini-itinerary and cost estimate for you instantly.', hi: 'अपनी पसंद, बजट और मूड दर्ज करें। हमारा स्मार्ट एआई तुरंत आपके लिए सही मिनी-यात्रा कार्यक्रम और लागत अनुमान तैयार करेगा।' },
  'ai.label_dest': { en: 'Destination', hi: 'गंतव्य' },
  'ai.ph_dest': { en: 'e.g. Mountains, Bali', hi: 'जैसे पहाड़, बाली' },
  'ai.label_days': { en: 'Days', hi: 'दिन' },
  'ai.ph_days': { en: 'e.g. 5', hi: 'जैसे 5' },
  'ai.ph_budget': { en: 'e.g. ₹50k', hi: 'जैसे ₹50k' },
  'ai.label_mood': { en: 'Mood', hi: 'मूड' },
  'ai.btn_generate': { en: 'Generate My Trip', hi: 'मेरी यात्रा योजना बनाएं' },
  'ai.btn_loading': { en: 'Generating Plan...', hi: 'योजना बन रही है...' },
  'ai.result_title': { en: 'Recommended Plan', hi: 'अनुशंसित योजना' },
  'ai.result_cost': { en: 'Estimated Cost', hi: 'अनुमानित लागत' },
  'ai.result_highlights': { en: 'Trip Highlights', hi: 'यात्रा की मुख्य विशेषताएं' },
  'ai.book_whatsapp': { en: 'Book this on WhatsApp', hi: 'इसे व्हाट्सएप पर बुक करें' },
  'ai.mood_relax': { en: 'Relaxing', hi: 'आरामदायक' },
  'ai.mood_adventure': { en: 'Adventure', hi: 'साहसिक' },
  'ai.mood_romantic': { en: 'Romantic', hi: 'रोमांटिक' },
  'ai.mood_spiritual': { en: 'Spiritual', hi: 'आध्यात्मिक' },
  'ai.mood_party': { en: 'Party', hi: 'पार्टी' },

  // Video
  'video.title': { en: 'Your Journey, Our Responsibility', hi: 'आपकी यात्रा, हमारी जिम्मेदारी' },

  // Testimonials
  'testimonials.title': { en: 'Happy Travelers', hi: 'खुश यात्री' },
  'testimonials.subtitle': { en: "Don't just take our word for it.", hi: "सिर्फ हमारी बात पर विश्वास न करें।" },

  // Footer
  'footer.desc': { en: 'Your trusted partner for premium travel experiences. We make your dream vacations a reality with hassle-free planning and luxury support.', hi: 'प्रीमियम यात्रा अनुभवों के लिए आपका विश्वसनीय साथी। हम परेशानी मुक्त योजना और लक्जरी समर्थन के साथ आपकी सपनों की छुट्टियों को वास्तविकता बनाते हैं।' },
  'footer.quick_links': { en: 'Quick Links', hi: 'त्वरित लिंक' },
  'footer.destinations': { en: 'Destinations', hi: 'गंतव्य' },
  'footer.contact': { en: 'Contact Us', hi: 'संपर्क करें' },
  'footer.rights': { en: 'All rights reserved.', hi: 'सर्वाधिकार सुरक्षित।' },
  'footer.gstin': { en: 'GSTIN', hi: 'GSTIN' },

  // Contact / Book
  'book.title': { en: 'Book This Package', hi: 'इस पैकेज को बुक करें' },
  'book.starting_price': { en: 'Starting Price', hi: 'शुरुआती कीमत' },
  'book.per_person': { en: '/person', hi: '/व्यक्ति' },
  'book.label_name': { en: 'Full Name', hi: 'पूरा नाम' },
  'book.label_phone': { en: 'Phone Number', hi: 'फ़ोन नंबर' },
  'book.label_date': { en: 'Travel Date', hi: 'यात्रा की तारीख' },
  'book.label_guests': { en: 'Guests', hi: 'अतिथि' },
  'book.btn_whatsapp': { en: 'Book via WhatsApp', hi: 'व्हाट्सएप के माध्यम से बुक करें' },
  'book.confirmation': { en: 'Instant booking confirmation via WhatsApp.', hi: 'व्हाट्सएप के माध्यम से तत्काल बुकिंग पुष्टि।' },
  'book.overview': { en: 'Overview', hi: 'अवलोकन' },
  'book.included': { en: "What's Included", hi: 'क्या शामिल है' },
  'book.itinerary': { en: 'Day-wise Itinerary', hi: 'दिन-वार यात्रा कार्यक्रम' },
  'contact.title': { en: 'Request a Call Back', hi: 'कॉल बैक का अनुरोध करें' },
  'contact.btn_submit': { en: 'Submit Request', hi: 'अनुरोध सबमिट करें' },
  'contact.success': { en: 'Thanks! We will contact you on WhatsApp shortly.', hi: 'धन्यवाद! हम शीघ्र ही आपसे व्हाट्सएप पर संपर्क करेंगे।' },
  'contact.ph_req': { en: 'Tell us about your requirements...', hi: 'हमें अपनी आवश्यकताओं के बारे में बताएं...' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};