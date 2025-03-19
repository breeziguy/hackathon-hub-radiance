
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

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6',
        isScrolled ? 'backdrop-blur-lg bg-black/50 shadow-md py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold text-white">
            <span className="text-accent">WORLD'S</span> HACKATHON
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#about" className="nav-link">About</a>
          <a href="#prizes" className="nav-link">Prizes</a>
          <a href="#judges" className="nav-link">Judges</a>
          <a href="#sponsors" className="nav-link">Sponsors</a>
          <a
            href="#register"
            className="px-5 py-2 rounded-full bg-accent text-white font-medium transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
          >
            Register Now
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-40 pt-20 px-6 flex flex-col md:hidden animate-fade-in">
          <a
            href="#about"
            className="text-lg py-4 border-b border-white/10"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#prizes"
            className="text-lg py-4 border-b border-white/10"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Prizes
          </a>
          <a
            href="#judges"
            className="text-lg py-4 border-b border-white/10"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Judges
          </a>
          <a
            href="#sponsors"
            className="text-lg py-4 border-b border-white/10"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sponsors
          </a>
          <a
            href="#register"
            className="mt-6 px-5 py-3 rounded-full bg-accent text-white font-medium text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Register Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
