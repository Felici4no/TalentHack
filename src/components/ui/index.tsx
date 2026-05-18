import React from 'react';
import { motion } from 'framer-motion';

export const SectionLabel = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`text-[10px] md:text-sm uppercase tracking-widest font-sans font-semibold ${className}`}>
    {children}
  </div>
);

export const EditorialMetric = ({ value, label, overrideColor = "text-brand-black" }: { value: string, label: string, overrideColor?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex flex-col border-t border-brand-black/20 pt-3 md:pt-4"
  >
    <span className={`text-4xl sm:text-5xl md:text-7xl font-serif mb-1 md:mb-2 ${overrideColor}`}>{value}</span>
    <span className="text-xs md:text-base font-sans uppercase tracking-widest text-brand-black/70 max-w-[150px] leading-snug">{label}</span>
  </motion.div>
);

export const SupportTag = ({ children }: { children: React.ReactNode }) => (
  <div className="border border-brand-black px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-sm uppercase tracking-widest font-sans hover:bg-brand-black hover:text-brand-paperLight transition-colors duration-300">
    {children}
  </div>
);
