
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.slice(1);
        const element = document.getElementById(targetId || '');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-blue-500 selection:text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        
        <section id="journey" className="py-24 bg-gray-50/50 border-y border-gray-100">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
                The Professional Journey
              </h2>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
                A trajectory defined by excellence in engineering and a passion for teaching Physics.
              </p>
            </motion.div>
            <Timeline />
          </div>
        </section>

        <section id="expertise" className="py-24">
          <Skills />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
