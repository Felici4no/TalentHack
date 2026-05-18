import React from 'react';
import { siteData } from '../data/content';
import { SectionLabel, SupportTag } from './ui';

export const SponsorValueSection = () => (
  <section className="py-24 px-8 bg-brand-red text-brand-offwhite">
    <div className="max-w-7xl mx-auto">
      <SectionLabel className="text-brand-black mb-12">Valor para Patrocinadores</SectionLabel>
      <h2 className="text-4xl md:text-6xl font-serif max-w-4xl mb-8 leading-tight">
        {siteData.sponsorValueCards.title}
      </h2>
      <p className="text-xl md:text-2xl font-sans mb-6 max-w-3xl">
        {siteData.sponsorValueCards.text}
      </p>
      <p className="text-lg font-sans mb-16 max-w-3xl opacity-80 uppercase tracking-widest font-semibold">
        {siteData.sponsorValueCards.subtitle}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-24">
        {siteData.sponsorValueCards.cards.map((card, i) => (
          <div key={i} className="flex flex-col">
            <h3 className="text-xl font-serif mb-4 pb-4 border-b border-brand-black/30">{card.title}</h3>
            <p className="font-sans text-brand-offwhite/80 leading-relaxed text-sm">{card.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center pt-12 border-t border-brand-black/30">
        <p className="text-2xl md:text-4xl font-serif italic max-w-4xl mx-auto text-brand-black">
          "{siteData.sponsorValueCards.closing}"
        </p>
      </div>
    </div>
  </section>
);

export const SupportOptionsSection = () => (
  <section id="apoie" className="py-24 px-8 border-b border-brand-black/20 bg-brand-offwhite">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
      <div className="flex-1">
        <SectionLabel className="text-brand-red mb-8">Formas de Apoio</SectionLabel>
        <h2 className="text-4xl md:text-6xl font-serif mb-12 leading-tight">
          {siteData.supportOptions.title}
        </h2>
        
        <div className="flex flex-col gap-8 mb-12">
          {siteData.supportOptions.options.map((opt, i) => (
            <div key={i} className="flex items-start gap-4">
              <span className="text-brand-red mt-1">✦</span>
              <div>
                <span className="font-sans font-semibold uppercase tracking-widest text-sm block mb-1">{opt.title}</span>
                <span className="font-sans text-brand-black/70 text-sm">{opt.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 lg:max-w-md flex flex-col gap-8 justify-center bg-brand-gray-light p-12 border border-brand-black/10">
        <div className="flex flex-wrap gap-3 mb-8">
          {siteData.supportOptions.tags.map((tag, i) => (
            <SupportTag key={i}>{tag}</SupportTag>
          ))}
        </div>
        <button className="w-full bg-brand-red text-white py-4 uppercase tracking-widest text-sm font-semibold hover:bg-brand-black transition-colors">
          {siteData.supportOptions.cta}
        </button>
      </div>
    </div>
  </section>
);
