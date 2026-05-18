import React from 'react';
import { siteData } from '../data/content';
import { SectionLabel, SupportTag } from './ui';

export const MethodSection = () => (
  <section className="py-24 px-8 border-b border-brand-black">
    <div className="max-w-7xl mx-auto">
      <SectionLabel className="mb-12">Método Talent Hack</SectionLabel>
      <h2 className="text-4xl md:text-6xl font-serif max-w-4xl mb-24 leading-tight">
        {siteData.method.title}
      </h2>
      <div className="flex flex-col gap-12 border-l border-brand-black/20 pl-8 md:pl-16 ml-4 md:ml-8 relative">
        {siteData.method.steps.map((step, i) => (
          <div key={i} className="relative">
            <span className="absolute -left-12 md:-left-24 top-1 text-brand-red font-sans font-bold">{step.num}</span>
            <h3 className="text-2xl md:text-3xl font-serif mb-2">{step.title}</h3>
            <p className="font-sans text-brand-black/70 text-lg">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const SponsorSection = () => (
  <section id="apoie" className="py-24 px-8 bg-brand-red text-brand-offwhite">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div>
          <SectionLabel className="text-brand-black mb-8">Para Patrocinadores</SectionLabel>
          <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
            {siteData.sponsor.title}
          </h2>
          <p className="text-xl font-sans mb-12">
            {siteData.sponsor.text}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {siteData.sponsor.points.map((point, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-brand-black mt-1">✦</span>
                <span className="font-sans font-semibold">{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-brand-offwhite text-brand-black p-12">
          <SectionLabel className="text-brand-red mb-8">Formas de Apoio</SectionLabel>
          <h3 className="text-3xl font-serif mb-4">{siteData.sponsor.supportTitle}</h3>
          <p className="font-sans mb-12 text-brand-black/70">{siteData.sponsor.supportSubtitle}</p>
          
          <div className="flex flex-wrap gap-4 mb-16">
            {siteData.sponsor.supportCategories.map((cat, i) => (
              <SupportTag key={i}>{cat}</SupportTag>
            ))}
          </div>
          
          <button className="w-full bg-brand-red text-white py-4 uppercase tracking-widest text-sm font-semibold hover:bg-brand-black transition-colors">
            Falar com a equipe
          </button>
        </div>
      </div>
    </div>
  </section>
);
