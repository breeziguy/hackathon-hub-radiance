
import React from 'react';
import { Database, Server, Globe, LucideIcon } from 'lucide-react';

type SponsorType = 'platinum' | 'gold' | 'silver' | 'bronze';

type Sponsor = {
  id: number;
  name: string;
  type: SponsorType;
  src: string;
  alt: string;
  icon: LucideIcon;
  placeholder?: boolean;
};

const sponsors: Sponsor[] = [
  {
    id: 1,
    name: 'Supabase',
    type: 'platinum',
    src: '/placeholder.svg',
    alt: 'Supabase logo',
    icon: Database,
    placeholder: true
  },
  {
    id: 2,
    name: 'Netlify',
    type: 'platinum',
    src: '/placeholder.svg',
    alt: 'Netlify logo',
    icon: Server,
    placeholder: true
  },
  {
    id: 3,
    name: 'CloudflareDev',
    type: 'gold',
    src: '/placeholder.svg',
    alt: 'CloudflareDev logo',
    icon: Globe,
    placeholder: true
  },
  {
    id: 4,
    name: 'GetSentry',
    type: 'gold',
    src: '/placeholder.svg',
    alt: 'GetSentry logo',
    icon: Server,
    placeholder: true
  },
  {
    id: 5,
    name: 'Loops',
    type: 'silver',
    src: '/placeholder.svg',
    alt: 'Loops logo',
    icon: Database,
    placeholder: true
  },
  {
    id: 6,
    name: 'AlgoFoundation',
    type: 'silver',
    src: '/placeholder.svg',
    alt: 'AlgoFoundation logo',
    icon: Globe,
    placeholder: true
  }
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
                        <sponsor.icon size={40} className="text-accent mb-2" />
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
                        <sponsor.icon size={32} className="text-accent mb-2" />
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
            <h3 className="text-2xl font-semibold mb-6 text-center">Silver Partners</h3>
            <div className="grid grid-cols-2 gap-4">
              {sponsors
                .filter(sponsor => sponsor.type === 'silver')
                .map(sponsor => (
                  <div key={sponsor.id} className="sponsor-logo h-24">
                    {sponsor.placeholder ? (
                      <div className="flex flex-col items-center justify-center">
                        <sponsor.icon size={24} className="text-accent mb-1" />
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
