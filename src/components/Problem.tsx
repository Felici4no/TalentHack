import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from '../data/content';
import { SectionLabel } from './ui';

export const ProblemSection = () => (
  <section className="py-24 px-8 bg-brand-black text-brand-paper border-b border-brand-black/20">
    <div className="max-w-7xl mx-auto">
      <SectionLabel className="text-brand-red mb-12">O Diagnóstico</SectionLabel>
      <h2 className="text-4xl md:text-6xl font-serif max-w-4xl mb-12 leading-tight">
        {siteData.diagnosisContent.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
        <p className="text-lg md:text-xl font-sans leading-relaxed text-brand-sand">
          {siteData.diagnosisContent.text}
        </p>
        <div className="flex flex-col justify-center">
          <p className="text-xl md:text-2xl font-serif text-brand-red border-l-2 border-brand-red pl-6">
            {siteData.diagnosisContent.complement}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {siteData.diagnosisContent.points.map((point, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="border-t border-brand-sand/20 pt-6"
          >
            <h3 className="text-xl font-serif mb-2 text-brand-red">— {point.title}</h3>
            <p className="font-sans text-brand-sand/80 text-sm leading-relaxed">{point.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center pt-12 border-t border-brand-sand/10">
        <p className="text-2xl font-serif uppercase tracking-widest text-brand-paper">{siteData.diagnosisContent.keyMessage}</p>
      </div>
    </div>
  </section>
);

export const CapitalCulturalSection = () => (
  <section className="py-24 px-8 bg-brand-paper border-b border-brand-black/10">
    <div className="max-w-7xl mx-auto">
      <SectionLabel className="mb-12">O que realmente falta</SectionLabel>
      <div className="flex flex-col md:flex-row gap-16 mb-24">
        <h2 className="text-4xl md:text-6xl font-serif flex-1 leading-tight text-brand-red">
          {siteData.capitalCulturalCards.title}
        </h2>
        <p className="text-lg md:text-xl font-sans leading-relaxed flex-1 pt-2 border-l border-brand-sand pl-8">
          {siteData.capitalCulturalCards.text}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {siteData.capitalCulturalCards.types.map((type, i) => (
          <div key={i} className="border border-brand-black p-8 flex flex-col gap-4 bg-brand-paperLight hover:bg-brand-clay transition-colors duration-300">
            <h3 className="text-2xl font-serif pb-4 border-b border-brand-black/20">{type.title}</h3>
            <p className="font-sans text-sm leading-relaxed text-brand-black/80">{type.desc}</p>
          </div>
        ))}
      </div>

      <div className="max-w-3xl border-l-4 border-brand-red pl-6">
        <p className="text-xl font-serif italic text-brand-black/90">
          "{siteData.capitalCulturalCards.closing}"
        </p>
      </div>
    </div>
  </section>
);
