import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '@/constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 md:px-8 bg-dark">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Briefcase className="text-primary" />
            Work Experience
          </h2>
        </motion.div>

        <div className="relative space-y-12">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 -translate-x-1/2 md:translate-x-0" />

          {EXPERIENCE.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-dark -translate-x-1/2 z-10" />

              <div className="md:w-1/2 pl-12 md:pl-0">
                <div className={`p-6 bg-card rounded-2xl border border-gray-800 hover:border-primary/50 transition-colors ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                  <span className="text-primary text-sm font-mono mb-2 block">{item.period}</span>
                  <h3 className="text-xl font-bold text-white">{item.role}</h3>
                  <h4 className="text-gray-400 mb-4">{item.company}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;