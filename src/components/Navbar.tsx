import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <nav className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6', isScrolled ? 'backdrop-blur-lg bg-black/50 shadow-md py-3' : 'bg-transparent')}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex flex-col items-center text-xl font-bold text-white">
            <span className="text-accent">HACKATHON</span>
            <div className="mt-1 text-white w-12 h-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51 21.9" fill="currentColor">
                <path d="M24.1 19.3c-4.7 0-7-2.7-7-6.1s3.2-7.7 7.9-7.7 7 2.7 7 6.1-3.2 7.7-7.9 7.7Zm.2-4.3c1.6 0 2.7-1.5 2.7-3.1s-.8-2-2.2-2-2.7 1.5-2.7 3.1.8 2 2.2 2ZM37 19h-4.9l4-18.2H41l-4 18.1Z" />
                <path d="M9.6 19.3c-1.5 0-3-.5-3.8-1.7L5.5 19 0 21.9.6 19 4.6.8h4.9L8.1 7.2c1.1-1.2 2.2-1.7 3.6-1.7 3 0 4.9 1.9 4.9 5.5s-2.3 8.3-7 8.3Zm1.9-7.3c0 1.7-1.2 3-2.8 3s-1.7-.3-2.2-.9l.8-3.3c.6-.6 1.2-.9 2-.9 1.2 0 2.2.9 2.2 2.2Z" style={{
                fillRule: 'evenodd'
              }} />
                <path d="M46.1 19.3c-2.8 0-4.9-1-4.9-3.3s0-.7.1-1l1.1-4.9h-2.2l1-4.2h2.2l.8-3.6L49.7 0l-.6 2.3-.8 3.6H51l-1 4.2h-2.7l-.7 3.2v.6c0 .6.4 1.1 1.2 1.1s.6 0 .7-.1v3.9c-.5.4-1.4.5-2.3.5Z" />
              </svg>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#about" className="nav-link">About</a>
          <a href="#prizes" className="nav-link">Prizes</a>
          <a href="#judges" className="nav-link">Judges</a>
          
          <a href="#register" className="px-5 py-2 rounded-full bg-accent text-white font-medium transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20">
            Register Now
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button className="text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}>
            {isMobileMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <div className="fixed inset-0 bg-black/95 z-40 pt-20 px-6 flex flex-col md:hidden animate-fade-in">
          <a href="#about" className="text-lg py-4 border-b border-white/10" onClick={() => setIsMobileMenuOpen(false)}>
            About
          </a>
          <a href="#prizes" className="text-lg py-4 border-b border-white/10" onClick={() => setIsMobileMenuOpen(false)}>
            Prizes
          </a>
          <a href="#judges" className="text-lg py-4 border-b border-white/10" onClick={() => setIsMobileMenuOpen(false)}>
            Judges
          </a>
          <a href="#sponsors" className="text-lg py-4 border-b border-white/10" onClick={() => setIsMobileMenuOpen(false)}>
            Sponsors
          </a>
          <a href="#register" className="mt-6 px-5 py-3 rounded-full bg-accent text-white font-medium text-center" onClick={() => setIsMobileMenuOpen(false)}>
            Register Now
          </a>
        </div>}
    </nav>;
};
export default Navbar;