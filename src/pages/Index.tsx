
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Prizes from '@/components/Prizes';
import Judges from '@/components/Judges';
import Sponsors from '@/components/Sponsors';
import Footer from '@/components/Footer';
import { Code, Users, Globe, Calendar } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    const registerSectionObserver = () => {
      const sections = document.querySelectorAll('section');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      }, { threshold: 0.1 });
      
      sections.forEach(section => {
        observer.observe(section);
      });
    };
    
    registerSectionObserver();
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      
      {/* About Section */}
      <section id="about" className="relative py-24">
        <div className="section-container">
          <div className="chip mx-auto mb-4">ABOUT THE EVENT</div>
          <h2 className="section-heading">
            Redefining <span className="text-accent">Innovation</span>
          </h2>
          <p className="section-subheading">
            A global gathering of coders, designers, and visionaries collaborating to build groundbreaking solutions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
            <div className="mx-auto text-center md:text-center">
              <h3 className="text-2xl font-semibold mb-6">Unleash Your Creativity</h3>
              <p className="text-white/70 mb-6">
                The World's Largest Hackathon is an unprecedented event bringing together participants from every corner of the globe 
                to ideate, create, and innovate. Whether you're a seasoned developer, a creative designer, or a visionary entrepreneur, 
                this is your opportunity to make an impact on a global stage.
              </p>
              <p className="text-white/70">
                With challenges spanning multiple domains from AI and blockchain to climate tech and healthcare, 
                there's a space for every passion and skillset. Form teams with like-minded innovators or bring your 
                own crew to compete for groundbreaking prizes and global recognition.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-panel rounded-xl p-6">
                <Code className="h-8 w-8 text-accent mb-4" />
                <h4 className="text-xl font-semibold mb-2">Open Innovation</h4>
                <p className="text-white/70">
                  Build with cutting-edge technologies and open-source tools to create solutions that matter.
                </p>
              </div>
              
              <div className="glass-panel rounded-xl p-6">
                <Users className="h-8 w-8 text-accent mb-4" />
                <h4 className="text-xl font-semibold mb-2">Global Community</h4>
                <p className="text-white/70">
                  Connect with thousands of participants from over 100 countries sharing your passion.
                </p>
              </div>
              
              <div className="glass-panel rounded-xl p-6">
                <Globe className="h-8 w-8 text-accent mb-4" />
                <h4 className="text-xl font-semibold mb-2">Virtual Format</h4>
                <p className="text-white/70">
                  Participate from anywhere with our seamless digital experience and global reach.
                </p>
              </div>
              
              <div className="glass-panel rounded-xl p-6">
                <Calendar className="h-8 w-8 text-accent mb-4" />
                <h4 className="text-xl font-semibold mb-2">48-Hour Sprint</h4>
                <p className="text-white/70">
                  Intense but exhilarating two-day hackathon with continuous support and mentorship.
                </p>
              </div>
            </div>
          </div>
          
          {/* Theme Section */}
          <div className="mt-24">
            <div className="chip mx-auto mb-4">THIS YEAR'S THEME</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              <span className="text-accent">Breakthrough</span> Technologies for <span className="text-accent">Human Progress</span>
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto text-center">
              Explore how emerging technologies can be harnessed to address humanity's most pressing challenges and create a more equitable future.
            </p>
            
            <div className="glass-panel rounded-xl p-8 bg-gradient-to-br from-accent/10 to-transparent border border-accent/20">
              <div className="max-w-3xl mx-auto">
                <p className="text-white/80 mb-6">
                  This year's hackathon challenges participants to develop innovative solutions that leverage cutting-edge technologies 
                  to address real-world problems. From climate change and healthcare accessibility to educational equity and sustainable cities, 
                  we're looking for projects that demonstrate both technical excellence and meaningful impact.
                </p>
                <p className="text-white/80 mb-6">
                  Successful projects will combine technical innovation with a clear understanding of the human needs they address. 
                  We encourage interdisciplinary teams that bring together diverse perspectives and skills.
                </p>
                <div className="flex justify-center">
                  <a 
                    href="#register" 
                    className="px-6 py-3 rounded-full bg-accent text-white font-medium inline-flex items-center 
                             transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
                  >
                    Ready to Build the Future?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Prizes />
      <Judges />
      <Sponsors />
      
      {/* Registration Section */}
      <section id="register" className="relative py-24">
        <div className="section-container">
          <div className="chip mx-auto mb-4">REGISTER NOW</div>
          <h2 className="section-heading">
            Join the <span className="text-accent">Global Movement</span>
          </h2>
          <p className="section-subheading">
            Secure your spot in the World's Largest Hackathon and prepare to build something extraordinary.
          </p>
          
          <div className="max-w-2xl mx-auto mt-12">
            <div className="glass-panel rounded-2xl p-8 border border-accent/20">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="background" className="block text-sm font-medium mb-2">Your Background</label>
                  <select
                    id="background"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50"
                  >
                    <option value="" disabled selected>Select your primary skill</option>
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                    <option value="product">Product Manager</option>
                    <option value="data">Data Scientist</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium mb-2">Hackathon Experience</label>
                  <select
                    id="experience"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50"
                  >
                    <option value="" disabled selected>Select your experience level</option>
                    <option value="first">This is my first hackathon</option>
                    <option value="few">I've done 1-3 hackathons</option>
                    <option value="several">I've done 4-10 hackathons</option>
                    <option value="veteran">I'm a hackathon veteran (10+)</option>
                  </select>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="updates"
                    className="w-4 h-4 rounded border-white/30 bg-white/5 text-accent focus:ring-accent/50"
                  />
                  <label htmlFor="updates" className="ml-2 text-sm text-white/70">
                    I'd like to receive updates about the hackathon and future events
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-4 rounded-full bg-accent text-white font-semibold text-lg transition-all
                          hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
                >
                  Register Your Interest
                </button>
              </form>
              
              <p className="text-sm text-white/60 mt-6 text-center">
                Registration of interest does not guarantee a spot. Final participants will be selected from registrants.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
