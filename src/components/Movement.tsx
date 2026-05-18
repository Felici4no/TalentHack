import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from '../data/content';
import { SectionLabel } from './ui';

export const MovementSection = () => (
  <section className="py-16 md:py-24 px-5 md:px-8 border-b border-brand-sand bg-brand-paper">
    <div className="max-w-7xl mx-auto">
      <SectionLabel className="mb-8 md:mb-12 text-brand-red">Posicionamento</SectionLabel>
      <div className="flex flex-col lg:flex-row gap-8 md:gap-16 mb-16 md:mb-24">
        <h2 className="text-3xl md:text-6xl font-serif flex-1 leading-tight text-brand-black">
          {siteData.movementContent.title}
        </h2>
        <div className="flex-1 flex flex-col gap-6 md:gap-8 justify-center">
          <p className="text-base md:text-xl font-sans leading-relaxed text-brand-black/90">
            {siteData.movementContent.text}
          </p>
          <p className="text-sm md:text-lg font-sans leading-relaxed text-brand-black/60">
            {siteData.movementContent.complement}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-x-8 md:gap-y-12 mb-12 md:mb-16">
        {siteData.movementContent.points.map((point, i) => (
          <div key={i} className="flex flex-col">
            <h3 className="text-xl md:text-2xl font-serif mb-3 md:mb-4 pb-3 md:pb-4 border-b border-brand-black">{point.title}</h3>
            <p className="font-sans text-brand-black/80 leading-relaxed text-sm">{point.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center pt-10 md:pt-16 border-t border-brand-sand">
        <p className="text-xl md:text-3xl font-serif text-brand-red italic leading-relaxed">
          "{siteData.movementContent.keyMessage}"
        </p>
      </div>
    </div>
  </section>
);
