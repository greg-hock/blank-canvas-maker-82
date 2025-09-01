
import { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isPricingPage = location.pathname === '/pricing';
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Check if we have a hash in the URL and scroll to that section
  useEffect(() => {
    if (location.hash) {
      // Wait a bit for the DOM to be fully loaded
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } else if (isHomePage) {
      // Scroll to top when navigating to home without hash
      window.scrollTo(0, 0);
    }
  }, [location, isHomePage]);

  const scrollToSection = (sectionId: string) => {
    // Only attempt to scroll if we're on the homepage
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isPricingPage 
          ? 'py-4 bg-black shadow-md' 
          : scrolled
            ? 'py-4 bg-white/90 shadow-md backdrop-blur-md'
            : 'py-6 bg-transparent'
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Rocket className={`w-6 h-6 ${isPricingPage ? 'text-launch-orange' : scrolled ? 'text-launch-orange' : 'text-white'}`} />
          <span className={`font-bold text-xl ${isPricingPage ? 'text-white' : scrolled ? 'text-gray-800' : 'text-white'}`}>
            LAUNCH<span className="text-launch-orange">10</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          {isPricingPage ? (
            <Link 
              to="/#how-it-works" 
              className={`font-medium transition-all hover:text-launch-orange ${isPricingPage ? 'text-white' : scrolled ? 'text-gray-800' : 'text-white'}`}
            >
              How It Works
            </Link>
          ) : (
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className={`font-medium transition-all hover:text-launch-orange ${isPricingPage ? 'text-white' : scrolled ? 'text-gray-800' : 'text-white'}`}
            >
              How It Works
            </button>
          )}
          
          {isPricingPage ? (
            <Link 
              to="/#features" 
              className={`font-medium transition-all hover:text-launch-orange ${isPricingPage ? 'text-white' : scrolled ? 'text-gray-800' : 'text-white'}`}
            >
              Features
            </Link>
          ) : (
            <button 
              onClick={() => scrollToSection('features')}
              className={`font-medium transition-all hover:text-launch-orange ${isPricingPage ? 'text-white' : scrolled ? 'text-gray-800' : 'text-white'}`}
            >
              Features
            </button>
          )}
          
          {isPricingPage ? (
            <Link 
              to="/#testimonials" 
              className={`font-medium transition-all hover:text-launch-orange ${isPricingPage ? 'text-white' : scrolled ? 'text-gray-800' : 'text-white'}`}
            >
              Testimonials
            </Link>
          ) : (
            <button 
              onClick={() => scrollToSection('testimonials')}
              className={`font-medium transition-all hover:text-launch-orange ${isPricingPage ? 'text-white' : scrolled ? 'text-gray-800' : 'text-white'}`}
            >
              Testimonials
            </button>
          )}
          
          <Link 
            to="/pricing" 
            className={`font-medium transition-all hover:text-launch-orange ${isPricingPage ? 'text-white' : scrolled ? 'text-gray-800' : 'text-white'}`}
          >
            Pricing
          </Link>
        </nav>
        
        <Link 
          to="/pricing" 
          className={`hidden md:flex items-center justify-center px-6 py-2 rounded-full font-medium text-white transition-all duration-300 shadow-md hover:shadow-lg button-glow ${
            isPricingPage ? 'bg-launch-orange hover:bg-orange-600' : scrolled ? 'bg-launch-orange hover:bg-orange-600' : 'bg-launch-orange hover:bg-orange-600'
          }`}
        >
          Launch Your Ideas
        </Link>
      </div>
    </header>
  );
};

export default Header;
