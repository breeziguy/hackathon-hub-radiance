
import React from 'react';

const judges = [
  {
    id: 1,
    name: "Logan Kilpatrick",
    title: "AI Expert",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    bio: "Leading authority in artificial intelligence and machine learning with a focus on democratizing AI technology."
  },
  {
    id: 2,
    name: "Pieter Levels",
    title: "Founder, Nomad List",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    bio: "Serial entrepreneur and indie maker known for building profitable startups as a solo founder."
  },
  {
    id: 3,
    name: "Sarah Guo",
    title: "Venture Capitalist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    bio: "Investing in founders building transformative companies at the intersection of technology and industry."
  },
  {
    id: 4,
    name: "Theo",
    title: "Developer & Educator",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    bio: "Full-stack developer and educator known for accessible tutorials and practical coding advice."
  },
  {
    id: 5,
    name: "Evan You",
    title: "Creator of Vue.js",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    bio: "Open source developer and creator of Vue.js, one of the most popular JavaScript frameworks."
  },
  {
    id: 6,
    name: "KP",
    title: "Technology Leader",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    bio: "Visionary technology leader with expertise in scaling platforms and building successful tech ecosystems."
  }
];

const Judges = () => {
  return (
    <section id="judges" className="relative py-24">
      <div className="section-container">
        <div className="chip mx-auto mb-4">WORLD-CLASS PANEL</div>
        <h2 className="section-heading">
          Meet Our <span className="text-accent">Esteemed Judges</span>
        </h2>
        <p className="section-subheading">
          Industry leaders, investors, and technical experts who will evaluate your innovations with a critical eye.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {judges.map((judge, index) => (
            <div 
              key={judge.id} 
              className="judge-card overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[3/2] mb-6 overflow-hidden rounded-xl">
                <img 
                  src={judge.image} 
                  alt={judge.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="chip mb-3">{judge.title}</div>
              <h3 className="text-xl font-bold mb-2">{judge.name}</h3>
              <p className="text-white/70">{judge.bio}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Our distinguished panel will evaluate projects based on innovation, technical complexity, design, and real-world impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Judges;
