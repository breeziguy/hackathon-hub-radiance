import React, { useEffect, useRef } from 'react';
import { Calendar, Globe, Award, Circle, Star, Sparkles } from 'lucide-react';
const Hero = () => {
  const rayRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!rayRef.current) return;
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      const ray1 = rayRef.current.querySelector('.ray-gradient-1') as HTMLElement;
      const ray2 = rayRef.current.querySelector('.ray-gradient-2') as HTMLElement;
      const ray3 = rayRef.current.querySelector('.ray-gradient-3') as HTMLElement;
      if (ray1 && ray2 && ray3) {
        // Move rays slightly based on mouse position for subtle effect
        ray1.style.transform = `translate(${x * 20 - 10}px, ${y * 20 - 10}px)`;
        ray2.style.transform = `translate(${-x * 20 + 10}px, ${-y * 20 + 10}px)`;
        ray3.style.transform = `translate(${x * 15 - 7.5}px, ${-y * 15 + 7.5}px)`;
      }
    };

    // Create floating dots
    const createDots = () => {
      const dotsContainer = document.querySelector('.floating-dots');
      if (!dotsContainer) return;
      dotsContainer.innerHTML = ''; // Clear existing dots

      for (let i = 0; i < 150; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');

        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        dot.style.left = `${x}%`;
        dot.style.top = `${y}%`;

        // Random size
        const size = Math.random() * 2 + 0.5;
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;

        // Random opacity
        dot.style.opacity = (Math.random() * 0.3 + 0.05).toString();
        dotsContainer.appendChild(dot);
      }
    };

    // Create floating elements
    const createFloatingElements = () => {
      const elementsContainer = document.querySelector('.floating-elements');
      if (!elementsContainer) return;
      elementsContainer.innerHTML = ''; // Clear existing elements

      const elements = [{
        icon: Circle,
        size: () => Math.random() * 8 + 4,
        count: 10
      }, {
        icon: Star,
        size: () => Math.random() * 10 + 6,
        count: 8
      }, {
        icon: Sparkles,
        size: () => Math.random() * 12 + 8,
        count: 6
      }];
      elements.forEach(element => {
        for (let i = 0; i < element.count; i++) {
          const el = document.createElement('div');
          el.classList.add('floating-element');

          // Random position
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          el.style.left = `${x}%`;
          el.style.top = `${y}%`;

          // Random size
          const size = element.size();
          el.style.width = `${size}px`;
          el.style.height = `${size}px`;

          // Random opacity
          el.style.opacity = (Math.random() * 0.15 + 0.05).toString();

          // Random animation duration
          const duration = Math.random() * 15 + 20;
          el.style.animationDuration = `${duration}s`;

          // Random animation delay
          const delay = Math.random() * 10;
          el.style.animationDelay = `${delay}s`;

          // Fixed: Create SVG element manually instead of using toSVG
          const IconComponent = element.icon;
          const svgElement = document.createElement('div');
          svgElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="rgba(83, 196, 255, 0.4)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            ${IconComponent === Circle ? '<circle cx="12" cy="12" r="10"></circle>' : IconComponent === Star ? '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>' : '<path d="M12 3v3m0 12v3m-9-9H6m12 0h3m-2.6-6.4l-2.1 2.1M8.4 15.6l-2.1 2.1m12.2-12.2l-2.1 2.1M15.6 15.6l2.1 2.1"/>'}
          </svg>`;
          el.appendChild(svgElement.firstChild as Node);
          elementsContainer.appendChild(el);
        }
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    createDots();
    try {
      createFloatingElements();
    } catch (error) {
      console.error("Failed to create floating elements:", error);
    }
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ray gradients */}
      <div ref={rayRef} className="ray-background">
        <div className="ray-gradient-1"></div>
        <div className="ray-gradient-2"></div>
        <div className="ray-gradient-3"></div>
      </div>
      
      {/* Background elements */}
      <div className="hero-grid"></div>
      <div className="floating-dots"></div>
      <div className="floating-elements"></div>
      <div className="hero-shape hero-shape-1"></div>
      <div className="hero-shape hero-shape-2"></div>
      
      {/* Hero content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="chip animate-fade-in flex items-center" style={{
          animationDelay: '0.2s'
        }}>
            HOSTED BY GREG ISENBERG
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up">
          THE WORLD'S <span className="text-accent">LARGEST</span><br /> HACKATHON
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 animate-slide-up" style={{
        animationDelay: '0.2s'
      }}>Join thousands of Vibe Coders worldwide to build solutions that will shape our future. Compete for $1M+ in prizes and global recognition.</p>
        
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-16 animate-slide-up" style={{
        animationDelay: '0.4s'
      }}>
          <div className="glass-panel rounded-full py-3 px-6 flex items-center justify-center gap-2">
            <Globe size={20} className="text-accent" />
            <span>100% Virtual</span>
          </div>
          <div className="glass-panel rounded-full py-3 px-6 flex items-center justify-center gap-2">
            <Calendar size={20} className="text-accent" />
            <span>Coming Soon</span>
          </div>
          <div className="glass-panel rounded-full py-3 px-6 flex items-center justify-center gap-2">
            <Award size={20} className="text-accent" />
            <span>$1M+ in Prizes</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up" style={{
        animationDelay: '0.6s'
      }}>
          <a href="#register" className="px-8 py-4 rounded-full bg-accent text-white font-semibold text-lg transition-all duration-300
                     hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20 hover:translate-y-[-2px]">
            Register Interest
          </a>
          <a href="#about" className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-lg transition-all duration-300
                     hover:bg-white/5 hover:border-white/30 hover:translate-y-[-2px]">
            Learn More
          </a>
        </div>

        
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse-soft">
        <span className="text-white/60 text-sm mb-2">Scroll to discover</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>;
};
export default Hero;