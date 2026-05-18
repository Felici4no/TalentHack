import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from '../data/content';
import { SectionLabel } from './ui';

export const MovementSection = () => (
  <section className="py-24 px-8 border-b border-brand-sand bg-brand-paper">
    <div className="max-w-7xl mx-auto">
      <SectionLabel className="mb-12 text-brand-red">Posicionamento</SectionLabel>
      <div className="flex flex-col lg:flex-row gap-16 mb-24">
        <h2 className="text-4xl md:text-6xl font-serif flex-1 leading-tight text-brand-black">
          {siteData.movementContent.title}
        </h2>
        <div className="flex-1 flex flex-col gap-8 justify-center">
          <p className="text-xl font-sans leading-relaxed text-brand-black/90">
            {siteData.movementContent.text}
          </p>
          <p className="text-lg font-sans leading-relaxed text-brand-black/60">
            {siteData.movementContent.complement}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-16">
        {siteData.movementContent.points.map((point, i) => (
          <div key={i} className="flex flex-col">
            <h3 className="text-2xl font-serif mb-4 pb-4 border-b border-brand-black">{point.title}</h3>
            <p className="font-sans text-brand-black/80 leading-relaxed text-sm">{point.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center pt-16 border-t border-brand-sand">
        <p className="text-2xl md:text-3xl font-serif text-brand-red italic">
          "{siteData.movementContent.keyMessage}"
        </p>
      </div>
    </div>
  </section>
);
