import React from 'react';
import { siteData } from '../data/content';
import { SectionLabel } from './ui';

export const StudentValueSection = () => (
  <section className="py-24 px-8 bg-brand-gray-light border-b border-brand-black/10">
    <div className="max-w-7xl mx-auto">
      <SectionLabel className="mb-12">Valor para o Estudante</SectionLabel>
      <h2 className="text-4xl md:text-6xl font-serif max-w-4xl mb-16 leading-tight text-brand-red">
        {siteData.studentValueCards.title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
        {siteData.studentValueCards.cards.map((card, i) => (
          <div key={i} className="flex flex-col">
            <h3 className="text-2xl font-serif mb-4 pb-4 border-b border-brand-black/20">{card.title}</h3>
            <p className="font-sans text-brand-black/80 leading-relaxed text-sm">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
