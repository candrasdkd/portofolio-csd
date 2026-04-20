"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-darker"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="orb orb-primary w-[400px] h-[400px] top-0 left-0 opacity-40" />
        <div className="orb orb-secondary w-[300px] h-[300px] bottom-0 right-0 opacity-30" />
        <div className="absolute inset-0 bg-grid opacity-20" />
      </div>

      <div className="relative flex flex-col items-center gap-8">
        {/* Spinner stack */}
        <div className="relative w-20 h-20">
          {/* Outer ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2.5, ease: 'linear', repeat: Infinity }}
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-primary/30"
          />
          {/* Middle ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 1.8, ease: 'linear', repeat: Infinity }}
            className="absolute inset-2 rounded-full border-2 border-transparent border-t-secondary border-l-secondary/30"
          />
          {/* Inner dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary shadow-[0_0_12px_rgba(139,92,246,0.6)]"
            />
          </div>
        </div>

        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white font-black text-2xl tracking-tight">
            Cs<span className="text-gradient">Dev</span>
          </span>
          <div className="flex items-center gap-1.5">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.25 }}
                className="w-1.5 h-1.5 rounded-full bg-primary/60"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;
