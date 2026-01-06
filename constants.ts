import { TravelPackage, Testimonial } from './types';

export const POPULAR_PACKAGES: TravelPackage[] = [
  {
    id: 'dubai-luxury',
    title: { en: 'Dubai Luxury Escape', hi: 'दुबई लक्ज़री एस्केप' },
    location: { en: 'Dubai, UAE', hi: 'दुबई, संयुक्त अरब अमीरात' },
    price: 45000,
    duration: { en: '5 Days / 4 Nights', hi: '5 दिन / 4 रातें' },
    description: { 
      en: 'Experience the glitz and glamour of Dubai with desert safaris, Burj Khalifa tours, and luxury shopping.',
      hi: 'दुबई की चमक और दमक का अनुभव करें, डेजर्ट सफारी, बुर्ज खलीफा की यात्रा और लक्जरी खरीदारी के साथ।'
    },
    // Image: High contrast, cinematic Burj Khalifa at dusk (Blue + Gold tones)
    image: 'https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=1974&auto=format&fit=crop', 
    rating: 4.8,
    inclusions: {
      en: ['Flight', '5-Star Hotel', 'Breakfast', 'Desert Safari', 'Burj Khalifa Ticket'],
      hi: ['उड़ान', '5-सितारा होटल', 'नाश्ता', 'डेजर्ट सफारी', 'बुर्ज खलीफा टिकट']
    },
    itinerary: [
      { 
        day: 1, 
        title: { en: 'Arrival & Dhow Cruise', hi: 'आगमन और ढो क्रूज' }, 
        desc: { en: 'Arrive at DXB, transfer to hotel. Evening Marina Dhow Cruise with dinner.', hi: 'DXB पर आगमन, होटल स्थानांतरण। शाम को डिनर के साथ मरीना ढो क्रूज।' } 
      },
      { 
        day: 2, 
        title: { en: 'City Tour & Burj Khalifa', hi: 'सिटी टूर और बुर्ज खलीफा' }, 
        desc: { en: 'Half-day city tour. Evening visit to the top of Burj Khalifa.', hi: 'आधे दिन का सिटी टूर। शाम को बुर्ज खलीफा की चोटी की यात्रा।' } 
      },
      { 
        day: 3, 
        title: { en: 'Desert Safari', hi: 'डेजर्ट सफारी' }, 
        desc: { en: 'Afternoon pickup for premium Desert Safari with BBQ dinner.', hi: 'प्रीमियम डेजर्ट सफारी और बीबीक्यू डिनर के लिए दोपहर में पिकअप।' } 
      },
      { 
        day: 4, 
        title: { en: 'Shopping & Leisure', hi: 'खरीदारी और आराम' }, 
        desc: { en: 'Free day for shopping at Dubai Mall or visiting Miracle Garden.', hi: 'दुबई मॉल में खरीदारी या मिरेकल गार्डन जाने के लिए खाली दिन।' } 
      },
      { 
        day: 5, 
        title: { en: 'Departure', hi: 'प्रस्थान' }, 
        desc: { en: 'Transfer to airport for flight back home.', hi: 'घर वापसी की उड़ान के लिए हवाई अड्डे पर स्थानांतरण।' } 
      }
    ]
  },
  {
    id: 'maldives-bliss',
    title: { en: 'Maldives Island Bliss', hi: 'मालदीव द्वीप आनंद' },
    location: { en: 'Maldives', hi: 'मालदीव' },
    price: 65000,
    duration: { en: '4 Days / 3 Nights', hi: '4 दिन / 3 रातें' },
    description: {
      en: 'Relax in a water villa surrounded by turquoise waters. The ultimate honeymoon or relaxation destination.',
      hi: 'फ़िरोज़ा पानी से घिरे वाटर विला में आराम करें। यह एक बेहतरीन हनीमून या विश्राम स्थल है।'
    },
    // Image: Updated to a reliable, breathtaking water villa shot
    image: 'https://res.cloudinary.com/doehytakj/image/upload/v1767711016/1742800922927_o5dgvk.jpg',
    rating: 4.9,
    inclusions: {
      en: ['Speedboat Transfer', 'Water Villa', 'All Meals', 'Snorkeling Gear'],
      hi: ['स्पीडबोट ट्रांसफर', 'वाटर विला', 'सभी भोजन', 'स्नॉर्कलिंग गियर']
    },
    itinerary: [
      { 
        day: 1, 
        title: { en: 'Arrival in Paradise', hi: 'स्वर्ग में आगमन' }, 
        desc: { en: 'Speedboat transfer to resort. Welcome drink and check-in.', hi: 'रिसॉर्ट के लिए स्पीडबोट ट्रांसफर। स्वागत पेय और चेक-इन।' } 
      },
      { 
        day: 2, 
        title: { en: 'Water Sports', hi: 'जल खेल' }, 
        desc: { en: 'Snorkeling, kayaking, and enjoying the pristine beach.', hi: 'स्नॉर्कलिंग, कयाकिंग और प्राचीन समुद्र तट का आनंद लेना।' } 
      },
      { 
        day: 3, 
        title: { en: 'Sunset Fishing & Spa', hi: 'सूर्यास्त मछली पकड़ना और स्पा' }, 
        desc: { en: 'Relaxing spa treatment followed by a sunset fishing trip.', hi: 'आरामदायक स्पा उपचार और उसके बाद सूर्यास्त मछली पकड़ने की यात्रा।' } 
      },
      { 
        day: 4, 
        title: { en: 'Departure', hi: 'प्रस्थान' }, 
        desc: { en: 'Breakfast and speedboat transfer to Male airport.', hi: 'नाश्ता और माले हवाई अड्डे के लिए स्पीडबोट ट्रांसफर।' } 
      }
    ]
  },
  {
    id: 'goa-vibes',
    title: { en: 'Goa Beach Party', hi: 'गोवा बीच पार्टी' },
    location: { en: 'Goa, India', hi: 'गोवा, भारत' },
    price: 15000,
    duration: { en: '4 Days / 3 Nights', hi: '4 दिन / 3 रातें' },
    description: {
      en: 'Sun, sand, and parties. Explore North Goa beaches, forts, and enjoy the nightlife.',
      hi: 'सूरज, रेत और पार्टियां। उत्तरी गोवा के समुद्र तटों, किलों का अन्वेषण करें और नाइटलाइफ़ का आनंद लें।'
    },
    // Image: Golden hour silhouette of palm trees - Warm/Party vibe
    image: 'https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?q=80&w=1974&auto=format&fit=crop',
    rating: 4.5,
    inclusions: {
      en: ['Hotel Stay', 'Breakfast', 'Scooter Rental Assistance', 'Airport Pickup'],
      hi: ['होटल में ठहरना', 'नाश्ता', 'स्कूटर किराए पर लेने में सहायता', 'हवाई अड्डे से पिकअप']
    },
    itinerary: [
      { 
        day: 1, 
        title: { en: 'Arrival & Calangute', hi: 'आगमन और कलंगुट' }, 
        desc: { en: 'Check-in. Evening stroll at Calangute beach.', hi: 'चेक-इन। शाम को कलंगुट बीच पर टहलना।' } 
      },
      { 
        day: 2, 
        title: { en: 'North Goa Tour', hi: 'नॉर्थ गोवा टूर' }, 
        desc: { en: 'Visit Fort Aguada, Baga Beach, and Anjuna Flea Market.', hi: 'फोर्ट अगुआडा, बागा बीच और अंजुना पिस्सू बाजार की यात्रा।' } 
      },
      { 
        day: 3, 
        title: { en: 'South Goa Heritage', hi: 'दक्षिण गोवा विरासत' }, 
        desc: { en: 'Visit Old Goa Churches and Panjim city.', hi: 'ओल्ड गोवा चर्च और पणजी शहर की यात्रा।' } 
      },
      { 
        day: 4, 
        title: { en: 'Departure', hi: 'प्रस्थान' }, 
        desc: { en: 'Transfer to Dabolim airport.', hi: 'डाबोलिम हवाई अड्डे पर स्थानांतरण।' } 
      }
    ]
  },
  {
    id: 'kedarnath-pilgrimage',
    title: { en: 'Kedarnath Yatra', hi: 'केदारनाथ यात्रा' },
    location: { en: 'Uttarakhand, India', hi: 'उत्तराखंड, भारत' },
    price: 18000,
    duration: { en: '5 Days / 4 Nights', hi: '5 दिन / 4 रातें' },
    description: {
      en: 'A spiritual journey to one of the holiest shrines. Helicopter options available.',
      hi: 'सबसे पवित्र तीर्थस्थलों में से एक की आध्यात्मिक यात्रा। हेलीकाप्टर विकल्प उपलब्ध हैं।'
    },
    // Image: Majestic snow-capped Himalayan peaks - Spiritual/Grand vibe
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop',
    rating: 4.7,
    inclusions: {
      en: ['Hotel/Camp Stay', 'Meals', 'Transport from Haridwar', 'Yatra Registration'],
      hi: ['होटल/शिविर प्रवास', ' भोजन', 'हरिद्वार से परिवहन', 'यात्रा पंजीकरण']
    },
    itinerary: [
      { 
        day: 1, 
        title: { en: 'Haridwar to Guptkashi', hi: 'हरिद्वार से गुप्तकाशी' }, 
        desc: { en: 'Drive from Haridwar to Guptkashi. Overnight stay.', hi: 'हरिद्वार से गुप्तकाशी तक ड्राइव। रात का प्रवास।' } 
      },
      { 
        day: 2, 
        title: { en: 'Trek to Kedarnath', hi: 'केदारनाथ ट्रेक' }, 
        desc: { en: 'Trek or Helicopter to Kedarnath Ji. Darshan and Aarti.', hi: 'केदारनाथ जी के लिए ट्रेक या हेलीकॉप्टर। दर्शन और आरती।' } 
      },
      { 
        day: 3, 
        title: { en: 'Kedarnath to Guptkashi', hi: 'केदारनाथ से गुप्तकाशी' }, 
        desc: { en: 'Morning Darshan. Trek down and return to Guptkashi.', hi: 'सुबह का दर्शन। नीचे उतरें और गुप्तकाशी लौटें।' } 
      },
      { 
        day: 4, 
        title: { en: 'Guptkashi to Rishikesh', hi: 'गुप्तकाशी से ऋषिकेश' }, 
        desc: { en: 'Drive to Rishikesh. Ganga Aarti in evening.', hi: 'ऋषिकेश तक ड्राइव। शाम को गंगा आरती।' } 
      },
      { 
        day: 5, 
        title: { en: 'Departure', hi: 'प्रस्थान' }, 
        desc: { en: 'Departure from Haridwar.', hi: 'हरिद्वार से प्रस्थान।' } 
      }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Rohan Sharma",
    role: { en: "Travel Enthusiast", hi: "यात्रा प्रेमी" },
    content: {
      en: "Gahylan Travel planned our honeymoon to Maldives perfectly. The support was 24/7!",
      hi: "Gahylan Travel ने हमारे मालदीव हनीमून की योजना पूरी तरह से बनाई। समर्थन 24/7 था!"
    },
    rating: 5,
    image: "https://picsum.photos/100/100?random=1"
  },
  {
    id: 2,
    name: "Priya Singh",
    role: { en: "Family Traveler", hi: "पारिवारिक यात्री" },
    content: {
      en: "Affordable luxury packages. We loved the Dubai trip. Highly recommended.",
      hi: "किफायती लक्जरी पैकेज। हमें दुबई की यात्रा बहुत पसंद आई। अत्यधिक सिफारिश की जाती है।"
    },
    rating: 5,
    image: "https://picsum.photos/100/100?random=2"
  },
  {
    id: 3,
    name: "Amit Patel",
    role: { en: "Adventure Seeker", hi: "साहसिक साधक" },
    content: {
      en: "The Kedarnath yatra was managed professionally. Very hassle-free experience.",
      hi: "केदारनाथ यात्रा का प्रबंधन पेशेवर रूप से किया गया था। बहुत ही परेशानी मुक्त अनुभव।"
    },
    rating: 4,
    image: "https://picsum.photos/100/100?random=3"
  }
];