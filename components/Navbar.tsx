
import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200/50">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm font-semibold tracking-tight text-gray-900"
        >
          Mayank Mishra
        </motion.div>
        
        <div className="hidden md:flex items-center space-x-8">
          {['About', 'Journey', 'Expertise', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-xs font-normal text-gray-600 hover:text-blue-600 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center">
          <a 
            href="#contact"
            className="text-xs bg-blue-600 text-white px-4 py-1.5 rounded-full font-medium hover:bg-blue-700 transition-all shadow-sm active:scale-95"
          >
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
