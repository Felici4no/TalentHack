import React from 'react';
import { siteData } from '../data/content';
import { SectionLabel } from './ui';

export const StudentValueSection = () => (
  <section id="escolas" className="py-16 md:py-24 px-5 md:px-8 bg-brand-paper border-b border-brand-sand">
    <div className="max-w-7xl mx-auto">
      <SectionLabel className="mb-8 md:mb-12">Valor para o Estudante</SectionLabel>
      <h2 className="text-3xl md:text-6xl font-serif max-w-4xl mb-12 md:mb-16 leading-tight text-brand-red">
        {siteData.studentValueCards.title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-y-16 gap-x-8 md:gap-x-12">
        {siteData.studentValueCards.cards.map((card, i) => (
          <div key={i} className="flex flex-col">
            <h3 className="text-xl md:text-2xl font-serif mb-3 md:mb-4 pb-3 md:pb-4 border-b border-brand-sand">{card.title}</h3>
            <p className="font-sans text-brand-black/80 leading-relaxed text-sm md:text-base">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
