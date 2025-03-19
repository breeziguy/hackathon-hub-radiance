import React from 'react';
import { Mail, Globe, Twitter, Linkedin, Github } from 'lucide-react';
const Footer = () => {
  return <footer className="relative pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="text-accent">HACKATHO</span> HACKATHON
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Bringing together the brightest minds and innovative thinkers for the largest virtual hackathon on the planet.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#prizes" className="text-white/70 hover:text-white transition-colors">Prizes</a>
              </li>
              <li>
                <a href="#judges" className="text-white/70 hover:text-white transition-colors">Judges</a>
              </li>
              
              <li>
                <a href="#faq" className="text-white/70 hover:text-white transition-colors">FAQ</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-accent" />
                <a href="mailto:info@worldshackathon.com" className="text-white/70 hover:text-white transition-colors">info@hackathon.dev</a>
              </li>
              <li className="flex items-center">
                <Globe size={16} className="mr-2 text-accent" />
                <span className="text-white/70">100% Virtual</span>
              </li>
            </ul>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
              <div className="flex">
                <input type="email" placeholder="Your email" className="bg-white/5 border border-white/10 rounded-l-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent/50 w-full" />
                <button className="bg-accent text-white rounded-r-full px-4 py-2 font-medium hover:bg-accent/90 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} World's Hackathon. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;