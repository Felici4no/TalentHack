import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from '../data/content';
import { SectionLabel } from './ui';

export const ProblemSection = () => (
  <section className="py-24 px-8 bg-brand-black text-brand-offwhite">
    <div className="max-w-7xl mx-auto">
      <SectionLabel className="text-brand-red mb-12">O Desafio</SectionLabel>
      <h2 className="text-4xl md:text-6xl font-serif max-w-4xl mb-12 leading-tight">
        {siteData.problem.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <p className="text-lg md:text-xl font-sans leading-relaxed text-brand-gray-light">
          {siteData.problem.text}
        </p>
        <div className="flex flex-col gap-6 border-l border-brand-red pl-8">
          {siteData.problem.points.map((point, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-xl md:text-2xl font-serif"
            >
              — {point}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const CapitalCulturalSection = () => (
  <section className="py-24 px-8 border-b border-brand-black/10">
    <div className="max-w-7xl mx-auto">
      <SectionLabel className="mb-12">Fundamentação</SectionLabel>
      <div className="flex flex-col md:flex-row gap-16 mb-24">
        <h2 className="text-4xl md:text-6xl font-serif flex-1 leading-tight text-brand-red">
          {siteData.capitalCultural.title}
        </h2>
        <p className="text-lg md:text-xl font-sans leading-relaxed flex-1 pt-2">
          {siteData.capitalCultural.text}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {siteData.capitalCultural.types.map((type, i) => (
          <div key={i} className="border border-brand-black p-8 flex flex-col gap-4 hover:bg-brand-pink-soft transition-colors duration-300">
            <span className="text-xs uppercase tracking-widest font-bold">Capital Cultural</span>
            <h3 className="text-2xl font-serif">{type.title}</h3>
            <p className="font-sans text-sm leading-relaxed">{type.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
