
import React from 'react';

const judges = [
  {
    id: 1,
    name: "Alexandra Chen",
    title: "CTO at FutureTech",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    bio: "Former VP of Engineering at Google. Pioneer in AI research with over 15 years of experience building scalable tech products."
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    title: "Founding Partner, Nexus Ventures",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    bio: "Early investor in 5 unicorn startups. Expertise in identifying disruptive technologies and scaling startups globally."
  },
  {
    id: 3,
    name: "Dr. Sarah Johnson",
    title: "Director of Innovation, MIT",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    bio: "Award-winning computer scientist with breakthrough research in quantum computing. Advocates for inclusive technology."
  },
  {
    id: 4,
    name: "David Kim",
    title: "Founder & CEO, Stellar Labs",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    bio: "Serial entrepreneur with 3 successful exits. Built revolutionary products in fintech and blockchain that serve millions."
  },
  {
    id: 5,
    name: "Priya Sharma",
    title: "Head of Product, TechForward",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    bio: "Product leader who has launched category-defining products reaching over 100M users. Expert in user-centric design."
  },
  {
    id: 6,
    name: "James Wilson",
    title: "Chief Scientist, OpenAI Labs",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    bio: "Leading researcher in machine learning and natural language processing. Has published over 100 papers on AI ethics."
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
          <div className="flex justify-center">
            <a 
              href="#more-judges" 
              className="px-6 py-3 rounded-full border border-white/20 text-white font-medium inline-flex items-center 
                        transition-all hover:bg-white/5 hover:border-white/30"
            >
              More judges to be announced
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Judges;
