import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScrollToPricing = (e) => {
    e.preventDefault();
    const section = document.getElementById('pricing');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 lg:px-0 xl:px-6 flex gap-4 md:gap-6 justify-between items-center">
        <div className="flex flex-col items-end">
          <Link to="/" className="flex items-center">
            <img src="/images/img_onewellness_logo_1.svg" alt="OneWellness" className="h-4 md:h-6" />
          </Link>
          <div className="ml-2 text-sm text-gray-500">
            <span>By</span>
            <img src="/images/img_ohnewpng_1.png" alt="OneHealth" className="h-3 ml-1 inline" />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {/* <Link to="/" className="text-accent font-semibold text-sm hover:text-primary transition-colors duration-200">Home</Link> */}
          <a href="#pricing" onClick={handleScrollToPricing} className="text-accent font-semibold text-sm hover:text-primary transition-colors duration-200">Pricing & Plans</a>
          <a href="#testimonials" className="text-accent font-semibold text-sm hover:text-primary transition-colors duration-200">Testimonials</a>
          <a href="#faq" className="text-accent font-semibold text-sm hover:text-primary transition-colors duration-200">FAQ</a>
          <a href="#contact" className="text-accent font-semibold text-sm hover:text-primary transition-colors duration-200">Contact Us</a>
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {/* <Button 
            variant="outline" 
            className="border border-gray-300 text-sm rounded-[8px] text-accent font-light h-[40px] px-4"
            onClick={() => navigate('/login')}
          >
            Login
          </Button> */}
          {/* <Button 
            variant="primary" 
            className="rounded-[8px] text-sm font-light h-[40px] px-4"
            onClick={() => navigate('/signup')}
          >
            Get Started
          </Button> */}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-accent p-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-x-0 top-[72px] transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'translate-y-0 opacity-100 visible' 
            : '-translate-y-full opacity-0 invisible'
        }`}
      >
        <div className="bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-accent text-sm font-semibold py-2 hover:text-primary transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <a 
                href="#pricing" 
                className="text-accent text-sm font-semibold py-2 hover:text-primary transition-colors duration-200"
                onClick={handleScrollToPricing}
              >
                Pricing & Plans
              </a>
              <Link 
                to="#diaspora" 
                className="text-accent text-sm font-semibold py-2 hover:text-primary transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Diaspora
              </Link>
              <Link 
                to="#about" 
                className="text-accent text-sm font-semibold py-2 hover:text-primary transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="#contact" 
                className="text-accent text-sm font-semibold py-2 hover:text-primary transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-3 pt-3">
                {/* <Button 
                  variant="outline" 
                  className="border border-gray-300 rounded-[8px] text-accent font-light h-[40px]"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    navigate('/login');
                  }}
                >
                  Login
                </Button> */}
                {/* <Button 
                  variant="primary" 
                  className="rounded-[8px] font-light h-[40px]"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    navigate('/signup');
                  }}
                >
                  Get Started
                </Button> */}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;