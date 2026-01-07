import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedLink, setExpandedLink] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { 
      name: t('nav.packages'), 
      path: '#',
      children: [
        { name: t('nav.domestic'), path: '/#domestic' },
        { name: t('nav.international'), path: '/#domestic' } // Currently linking both to the same section as per existing structure
      ]
    },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setExpandedLink(null);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (path: string) => {
    // If it's a dummy link for dropdown, don't do anything in desktop click (handled by hover/click)
    if (path === '#') return;

    setIsOpen(false);
    if (path.startsWith('/#')) {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(path.substring(2));
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 300);
        } else {
           const element = document.getElementById(path.substring(2));
           if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        navigate(path);
    }
  };

  const toggleExpand = (name: string) => {
    setExpandedLink(expandedLink === name ? null : name);
  };

  // Determine navbar text color based on scroll/mobile state
  const isTransparent = !scrolled && !isOpen;
  
  // Set text color to black/dark gray always as per request because background is white
  const textColorClass = 'text-black'; 
  const hoverColorClass = 'hover:text-royal';
  
  // Logo text always royal blue
  const logoTextClass = 'text-royal';

  return (
    <nav 
        className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
            scrolled || isOpen ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100' : 'bg-transparent border-b border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer group relative z-50" onClick={() => navigate('/')}>
             <img 
              src="https://res.cloudinary.com/doehytakj/image/upload/v1767774520/567272135_3026504187556589_681659511054053744_n_wiftln.jpg" 
              alt="Safar X" 
              className="h-10 w-10 md:h-12 md:w-12 rounded-full mr-3 shadow-lg border border-gold/50 object-cover" 
            />
            <span className={`font-heading font-bold text-lg md:text-2xl tracking-wide transition-colors ${logoTextClass} hover:opacity-90`}>
              Safar X
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.children ? (
                  <button
                    className={`font-subheading text-sm uppercase tracking-wider font-bold flex items-center transition-colors duration-300 ${textColorClass} ${hoverColorClass}`}
                  >
                    {link.name}
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => handleNav(link.path)}
                    className={`font-subheading text-sm uppercase tracking-wider font-bold relative group transition-colors duration-300 ${textColorClass} ${hoverColorClass}`}
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-royal transition-all duration-300 group-hover:w-full"></span>
                  </button>
                )}

                {/* Dropdown Menu */}
                {link.children && (
                  <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border border-gray-100">
                    {link.children.map((child) => (
                      <button
                        key={child.name}
                        onClick={() => handleNav(child.path)}
                        className="block w-full text-left px-5 py-3 text-sm font-bold text-gray-800 hover:bg-blue-50 hover:text-royal transition-colors"
                      >
                        {child.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <button 
                onClick={() => handleNav('/contact')}
                className="bg-gradient-to-r from-gold to-yellow-500 text-royal px-7 py-2.5 rounded-full font-bold hover:shadow-[0_0_20px_rgba(197,157,95,0.4)] transition-all transform hover:scale-105 active:scale-95 shadow-md"
            >
              {t('nav.book_now')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3 relative z-50">
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className={`text-royal hover:text-gold focus:outline-none transition-colors duration-300 p-2 rounded-full hover:bg-black/5`}
                aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Content */}
      <div 
        className={`absolute top-20 left-0 w-full bg-white backdrop-blur-xl border-b border-gray-100 shadow-2xl transition-all duration-500 ease-in-out origin-top lg:hidden overflow-hidden ${
            isOpen ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'
        }`}
      >
        <div className="px-6 pt-4 pb-8 space-y-3 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link, idx) => (
            <div key={link.name} style={{ transitionDelay: `${idx * 50}ms` }}>
              {link.children ? (
                <>
                  <button
                    onClick={() => toggleExpand(link.name)}
                    className="flex items-center justify-between w-full text-left px-5 py-4 rounded-xl text-lg font-bold text-gray-800 hover:text-royal hover:bg-blue-50 transition-all duration-300"
                  >
                    {link.name}
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${expandedLink === link.name ? 'rotate-180 text-gold' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 bg-gray-50/50 rounded-xl ${expandedLink === link.name ? 'max-h-40 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                     {link.children.map(child => (
                        <button
                          key={child.name}
                          onClick={() => handleNav(child.path)}
                          className="block w-full text-left px-8 py-3 text-base font-bold text-gray-700 hover:text-royal"
                        >
                           {child.name}
                        </button>
                     ))}
                  </div>
                </>
              ) : (
                <button
                  onClick={() => handleNav(link.path)}
                  className={`flex items-center justify-between w-full text-left px-5 py-4 rounded-xl text-lg font-bold text-gray-800 hover:text-royal hover:bg-blue-50 transition-all duration-300 group ${
                      isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                  }`}
                >
                  {link.name}
                  <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all text-gold" />
                </button>
              )}
            </div>
          ))}
          
          <div 
            className={`pt-4 transition-all duration-500 delay-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
              <button 
                  onClick={() => handleNav('/contact')}
                  className="w-full text-center bg-gradient-to-r from-gold to-yellow-500 text-royal px-5 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-gold/30 active:scale-[0.98] transition-all"
              >
                  {t('nav.book_now')}
              </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;