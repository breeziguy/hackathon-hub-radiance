
import React, { useEffect, useRef } from 'react';
import { Calendar, Globe, Award } from 'lucide-react';

const Hero = () => {
  const rayRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!rayRef.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      const ray1 = rayRef.current.querySelector('.ray-gradient-1') as HTMLElement;
      const ray2 = rayRef.current.querySelector('.ray-gradient-2') as HTMLElement;
      
      if (ray1 && ray2) {
        // Move rays slightly based on mouse position for subtle effect
        ray1.style.transform = `translate(${x * 30 - 15}px, ${y * 30 - 15}px)`;
        ray2.style.transform = `translate(${-x * 30 + 15}px, ${-y * 30 + 15}px)`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ray gradients */}
      <div ref={rayRef} className="ray-background">
        <div className="ray-gradient-1"></div>
        <div className="ray-gradient-2"></div>
      </div>
      
      {/* Hero content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="chip animate-fade-in" style={{ animationDelay: '0.2s' }}>
            COMING SOON
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up">
          THE WORLD'S <span className="text-accent">LARGEST</span><br /> HACKATHON
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Join thousands of innovators worldwide to build solutions that will shape our future. 
          Compete for $1M+ in prizes and global recognition.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
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
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <a 
            href="#register" 
            className="px-8 py-4 rounded-full bg-accent text-white font-semibold text-lg transition-all duration-300
                     hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20 hover:translate-y-[-2px]"
          >
            Register Interest
          </a>
          <a 
            href="#about" 
            className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-lg transition-all duration-300
                     hover:bg-white/5 hover:border-white/30 hover:translate-y-[-2px]"
          >
            Learn More
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse-soft">
        <span className="text-white/60 text-sm mb-2">Scroll to discover</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
