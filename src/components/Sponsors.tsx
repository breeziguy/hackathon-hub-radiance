import React from 'react';
import { BarChart3, Zap, Terminal } from 'lucide-react';

type Sponsor = {
  id: number;
  name: string;
  type: 'platinum' | 'gold' | 'silver' | 'bronze';
  src: string;
  alt: string;
  placeholder?: boolean;
};

const sponsors: Sponsor[] = [
  {
    id: 1,
    name: 'TechGiant',
    type: 'platinum',
    src: '/placeholder.svg',
    alt: 'TechGiant logo',
    placeholder: true
  },
  {
    id: 2,
    name: 'CloudSys',
    type: 'platinum',
    src: '/placeholder.svg',
    alt: 'CloudSys logo',
    placeholder: true
  },
  {
    id: 3,
    name: 'AILabs',
    type: 'gold',
    src: '/placeholder.svg',
    alt: 'AILabs logo',
    placeholder: true
  },
  {
    id: 4,
    name: 'DataVerse',
    type: 'gold',
    src: '/placeholder.svg',
    alt: 'DataVerse logo',
    placeholder: true
  },
  {
    id: 5,
    name: 'CryptoNext',
    type: 'silver',
    src: '/placeholder.svg',
    alt: 'CryptoNext logo',
    placeholder: true
  },
  {
    id: 6,
    name: 'DevTools',
    type: 'silver',
    src: '/placeholder.svg',
    alt: 'DevTools logo',
    placeholder: true
  },
  {
    id: 7,
    name: 'StartupX',
    type: 'bronze',
    src: '/placeholder.svg',
    alt: 'StartupX logo',
    placeholder: true
  },
  {
    id: 8,
    name: 'InnovateCo',
    type: 'bronze',
    src: '/placeholder.svg',
    alt: 'InnovateCo logo',
    placeholder: true
  },
];

const Sponsors = () => {
  return (
    <section id="sponsors" className="relative py-24">
      <div className="section-container">
        <div className="chip mx-auto mb-4">OUR SPONSORS</div>
        <h2 className="section-heading">
          Powered by <span className="text-accent">Industry Leaders</span>
        </h2>
        <p className="section-subheading">
          The world's most innovative companies supporting the next generation of tech talent.
        </p>
        
        <div className="mt-16 space-y-12">
          {/* Platinum Sponsors */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Platinum Sponsors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sponsors
                .filter(sponsor => sponsor.type === 'platinum')
                .map(sponsor => (
                  <div key={sponsor.id} className="sponsor-logo h-32">
                    {sponsor.placeholder ? (
                      <div className="flex flex-col items-center justify-center">
                        <Terminal size={40} className="text-accent mb-2" />
                        <span className="text-lg font-medium">{sponsor.name}</span>
                      </div>
                    ) : (
                      <img src={sponsor.src} alt={sponsor.alt} className="h-16 object-contain" />
                    )}
                  </div>
                ))}
            </div>
          </div>
          
          {/* Gold Sponsors */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Gold Sponsors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sponsors
                .filter(sponsor => sponsor.type === 'gold')
                .map(sponsor => (
                  <div key={sponsor.id} className="sponsor-logo">
                    {sponsor.placeholder ? (
                      <div className="flex flex-col items-center justify-center">
                        <Zap size={32} className="text-accent mb-2" />
                        <span className="text-lg font-medium">{sponsor.name}</span>
                      </div>
                    ) : (
                      <img src={sponsor.src} alt={sponsor.alt} className="h-14 object-contain" />
                    )}
                  </div>
                ))}
            </div>
          </div>
          
          {/* Silver & Bronze Sponsors */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Silver & Bronze Partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sponsors
                .filter(sponsor => sponsor.type === 'silver' || sponsor.type === 'bronze')
                .map(sponsor => (
                  <div key={sponsor.id} className="sponsor-logo h-24">
                    {sponsor.placeholder ? (
                      <div className="flex flex-col items-center justify-center">
                        <BarChart3 size={24} className="text-accent mb-1" />
                        <span className="text-sm font-medium">{sponsor.name}</span>
                      </div>
                    ) : (
                      <img src={sponsor.src} alt={sponsor.alt} className="h-12 object-contain" />
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 rounded-full border border-white/20 text-white font-medium transition-all hover:bg-white/5 hover:border-white/30"
          >
            Become a Sponsor
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
