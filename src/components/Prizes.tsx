
import React from 'react';
import { Trophy, Gift, Star, Zap, Rocket } from 'lucide-react';

const prizeCategories = [
  {
    id: 1,
    name: "Grand Prize",
    amount: "$500,000",
    icon: <Trophy className="h-8 w-8 text-yellow-400" />,
    description: "The ultimate recognition for the most innovative solution that demonstrates exceptional technical achievement and real-world impact.",
    color: "from-yellow-500/20 to-amber-700/20",
    border: "border-yellow-500/30"
  },
  {
    id: 2,
    name: "Runner Up",
    amount: "$250,000",
    icon: <Star className="h-8 w-8 text-blue-400" />,
    description: "Awarded to the second-place team that showcases outstanding innovation and execution.",
    color: "from-blue-500/20 to-blue-700/20",
    border: "border-blue-500/30"
  },
  {
    id: 3,
    name: "Category Winners",
    amount: "$50,000 each",
    icon: <Gift className="h-8 w-8 text-purple-400" />,
    description: "Five category prizes for the best solutions in AI, Climate Tech, Healthcare, Fintech, and Gaming.",
    color: "from-purple-500/20 to-purple-700/20",
    border: "border-purple-500/30"
  },
  {
    id: 4,
    name: "Innovation Award",
    amount: "$100,000",
    icon: <Zap className="h-8 w-8 text-green-400" />,
    description: "Recognizing the most creative and groundbreaking approach, regardless of completion status.",
    color: "from-green-500/20 to-green-700/20",
    border: "border-green-500/30"
  },
  {
    id: 5,
    name: "Community Choice",
    amount: "$100,000",
    icon: <Rocket className="h-8 w-8 text-pink-400" />,
    description: "Voted by the public and fellow participants for the project that captures the community's imagination.",
    color: "from-pink-500/20 to-pink-700/20",
    border: "border-pink-500/30"
  }
];

const Prizes = () => {
  return (
    <section id="prizes" className="relative py-24">
      <div className="section-container">
        <div className="chip mx-auto mb-4">$1M+ IN TOTAL PRIZES</div>
        <h2 className="section-heading">
          Substantial Rewards <span className="text-accent">Await</span>
        </h2>
        <p className="section-subheading">
          The world's largest prize pool for any hackathon, divided across multiple categories to reward different types of innovation.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {prizeCategories.map((prize, index) => (
            <div 
              key={prize.id}
              className={`prize-card bg-gradient-to-br ${prize.color} ${prize.border}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="glass-panel rounded-full p-2">
                  {prize.icon}
                </div>
                <div className="text-right">
                  <h3 className="text-xl font-bold">{prize.name}</h3>
                  <p className="text-2xl font-extrabold text-accent mt-1">{prize.amount}</p>
                </div>
              </div>
              <p className="text-white/70">{prize.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Additional prizes include mentorship opportunities, investor introductions, and sponsored prizes from our partners.
          </p>
          <a 
            href="#register" 
            className="px-6 py-3 rounded-full bg-accent text-white font-medium inline-flex items-center 
                     transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
          >
            Compete for the Prizes
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
