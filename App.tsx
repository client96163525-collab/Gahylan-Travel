import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PackageDetails from './pages/PackageDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import { MessageCircle } from 'lucide-react';
import { LanguageProvider } from './contexts/LanguageContext';
import { CurrencyProvider } from './contexts/CurrencyContext';

// ScrollToTop Component to reset window position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Layout wrapper to include Navbar/Footer
const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

// Floating Buttons Component
const FloatingButtons = () => {
  return (
    // Adjusted bottom spacing to 6 since Chatbot is removed
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40">
        <a 
            href="https://wa.me/919468278300" 
            target="_blank" 
            rel="noreferrer"
            className="bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:bg-[#20bd5a] transition-all hover:scale-110"
            title="Chat on WhatsApp"
        >
            <MessageCircle className="w-8 h-8" />
        </a>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <CurrencyProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="package/:id" element={<PackageDetails />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </HashRouter>
      </CurrencyProvider>
    </LanguageProvider>
  );
};

export default App;