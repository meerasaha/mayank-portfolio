
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="about" className="pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <div className="relative w-40 h-40 md:w-56 md:h-56">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-gray-100 rounded-[2.5rem] rotate-6"></div>
              <img 
                src="/assets/profilepic.jpeg"
                alt="Mayank Mishra" 
                className="relative z-10 w-full h-full object-cover rounded-[2.5rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-gray-100 text-gray-500 text-xs font-semibold mb-6 tracking-wide uppercase">
              Physics Faculty @ Resonance
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-gray-900 mb-6 leading-[1.1]">
              Mayank <br />
              <span className="text-blue-600">Mishra</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light mb-10">
              I am Mayank Mishra. An engineer by degree, a teacher by heart. Currently shaping the future of young minds at Resonance, Samastipur.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#journey" 
                className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white rounded-2xl font-semibold hover:bg-black transition-all shadow-xl shadow-gray-200 active:scale-95"
              >
                View My Journey
              </a>
              <a 
                href="#expertise" 
                className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-2xl font-semibold hover:bg-gray-50 transition-all active:scale-95"
              >
                Teaching Philosophy
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto px-6 border-t border-gray-100 pt-16"
      >
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold text-gray-900 mb-2">99%</span>
          <span className="text-gray-400 font-medium">Concept Clarity</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold text-gray-900 mb-2">1k+</span>
          <span className="text-gray-400 font-medium">Students Taught</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold text-gray-900 mb-2">PTU</span>
          <span className="text-gray-400 font-medium">B.Tech Alumni</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
