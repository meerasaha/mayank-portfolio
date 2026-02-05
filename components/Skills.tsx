
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Mechanics', level: '1000%' },
  { name: 'Electromagnetism', level: '95%' },
  { name: 'Thermodynamics', level: '92%' },
  { name: 'Modern Physics', level: '98%' },
  { name: 'Optics', level: '90%' },
  { name: 'Problem Solving', level: '99%' },
];

const Skills: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6"
          >
            Expertise in <br />
            <span className="text-blue-600">Academic Excellence.</span>
          </motion.h2>
          <p className="text-xl text-gray-500 font-light mb-8 leading-relaxed">
            Physics is more than just formulas; it's about understanding the logic of the universe. My methodology focuses on conceptual intuition before mathematical rigor.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {['JEE Main', 'JEE Advanced', 'NEET', 'Olympiads'].map((exam) => (
              <div key={exam} className="flex items-center space-x-2 text-gray-700 font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                <span>{exam}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-sm font-semibold text-gray-900">{skill.name}</span>
                <span className="text-sm text-gray-400">{skill.level}</span>
              </div>
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
                  className="h-full bg-gray-900 rounded-full"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
