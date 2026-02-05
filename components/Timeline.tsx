
import React from 'react';
import { motion } from 'framer-motion';
import { TimelineItem } from '../types';

const timelineData: TimelineItem[] = [
  {
    year: '2023',
    title: 'B.Tech Graduate',
    organization: 'PTU, Jalandhar',
    description: 'Completed engineering with a strong foundation in physical principles and mathematical modeling.',
    type: 'education'
  },
  {
    year: '2023 - 2025',
    title: 'Physics Faculty',
    organization: 'Motion, Muzaffarpur',
    description: 'Began the professional journey in coaching, specializing in JEE and NEET preparation.',
    type: 'professional'
  },
  {
    year: '2025 - Present',
    title: 'Physics Faculty',
    organization: 'Resonance, Samastipur',
    description: 'Current position delivering high-impact lectures and mentoring students for competitive exams.',
    type: 'professional'
  }
];

const Timeline: React.FC = () => {
  return (
    <div className="relative">
      {/* Central Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200 hidden md:block"></div>
      
      <div className="space-y-12 relative">
        {timelineData.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex flex-col md:flex-row items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Content Card */}
            <div className="w-full md:w-[45%]">
              <div className="p-8 bg-white border border-gray-100 shadow-sm rounded-3xl transition-transform hover:translate-y-[-4px] duration-300">
                <span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">
                  {item.year}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-blue-500 font-medium text-sm mb-4">{item.organization}</p>
                <p className="text-gray-500 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Indicator Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-4 h-4 rounded-full bg-white border-4 border-blue-600 z-10 hidden md:flex"></div>

            {/* Spacer for empty side */}
            <div className="hidden md:block w-[45%]"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
