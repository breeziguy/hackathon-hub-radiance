
import React from 'react';

const sponsorTiers = [
  {
    tier: "Platinum Partners",
    logos: [
      { id: 1, alt: "TechCorp", placeholder: true },
      { id: 2, alt: "GlobalInnovate", placeholder: true },
      { id: 3, alt: "FutureTech", placeholder: true },
    ]
  },
  {
    tier: "Gold Sponsors",
    logos: [
      { id: 4, alt: "NextGen", placeholder: true },
      { id: 5, alt: "Quantum Solutions", placeholder: true },
      { id: 6, alt: "Atlas Ventures", placeholder: true },
      { id: 7, alt: "Horizon AI", placeholder: true },
    ]
  },
  {
    tier: "Silver Sponsors",
    logos: [
      { id: 8, alt: "DevTools", placeholder: true },
      { id: 9, alt: "CloudNative", placeholder: true },
      { id: 10, alt: "DataSphere", placeholder: true },
      { id: 11, alt: "BlockMatrix", placeholder: true },
      { id: 12, alt: "ServerPro", placeholder: true },
      { id: 13, alt: "CodeNow", placeholder: true },
    ]
  }
];

const Sponsors = () => {
  return (
    <section id="sponsors" className="relative py-24">
      <div className="section-container">
        <div className="chip mx-auto mb-4">OUR SUPPORTERS</div>
        <h2 className="section-heading">
          Backed By <span className="text-accent">Industry Leaders</span>
        </h2>
        <p className="section-subheading">
          Leading technology companies and venture firms supporting the next generation of innovation.
        </p>
        
        {sponsorTiers.map((tier, tierIndex) => (
          <div key={tierIndex} className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">{tier.tier}</h3>
            <div className={`grid ${
              tier.tier === "Platinum Partners" 
                ? "grid-cols-1 md:grid-cols-3" 
                : tier.tier === "Gold Sponsors" 
                  ? "grid-cols-2 md:grid-cols-4" 
                  : "grid-cols-2 md:grid-cols-6"
            } gap-6`}>
              {tier.logos.map((logo) => (
                <div key={logo.id} className="sponsor-logo">
                  {logo.placeholder ? (
                    <div className="flex flex-col items-center justify-center text-white/50 h-full w-full">
                      <div className="text-accent mb-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 7C4 5.89543 4.89543 5 6 5H18C19.1046 5 20 5.89543 20 7V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M16 11C16 13.2091 14.2091 15 12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-sm">{logo.alt}</span>
                    </div>
                  ) : (
                    <img src={logo.src} alt={logo.alt} className="max-h-12" />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <div className="mt-16 text-center">
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Interested in sponsoring the World's Largest Hackathon? Get unprecedented access to global tech talent and showcase your brand to innovators worldwide.
          </p>
          <a 
            href="#sponsor-us" 
            className="px-6 py-3 rounded-full bg-white/10 text-white font-medium inline-flex items-center 
                     transition-all hover:bg-white/15"
          >
            Become a Sponsor
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
