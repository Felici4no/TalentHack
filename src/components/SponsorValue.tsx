import React from 'react';
import { siteData } from '../data/content';
import { SectionLabel, SupportTag } from './ui';

export const SponsorValueSection = () => (
  <section id="empresas" className="py-16 md:py-24 px-5 md:px-8 bg-brand-black text-brand-paper">
    <div className="max-w-7xl mx-auto">
      <SectionLabel className="text-brand-red mb-8 md:mb-12">Valor para Patrocinadores</SectionLabel>
      <h2 className="text-3xl md:text-6xl font-serif max-w-4xl mb-6 md:mb-8 leading-tight">
        {siteData.sponsorValueCards.title}
      </h2>
      <p className="text-lg md:text-2xl font-sans mb-6 max-w-3xl text-brand-sand leading-relaxed">
        {siteData.sponsorValueCards.text}
      </p>
      <p className="text-base md:text-lg font-sans mb-12 md:mb-16 max-w-3xl uppercase tracking-widest font-semibold text-brand-red leading-relaxed">
        {siteData.sponsorValueCards.subtitle}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-x-8 md:gap-y-12 mb-16 md:mb-24">
        {siteData.sponsorValueCards.cards.map((card, i) => (
          <div key={i} className="flex flex-col">
            <h3 className="text-lg md:text-xl font-serif mb-3 md:mb-4 pb-3 md:pb-4 border-b border-brand-sand/20">{card.title}</h3>
            <p className="font-sans text-brand-sand/80 leading-relaxed text-sm">{card.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center pt-8 md:pt-12 border-t border-brand-sand/20">
        <p className="text-xl md:text-4xl font-serif italic max-w-4xl mx-auto text-brand-paperLight leading-relaxed">
          "{siteData.sponsorValueCards.closing}"
        </p>
      </div>
    </div>
  </section>
);

export const SupportOptionsSection = () => (
  <section id="apoie" className="py-16 md:py-24 px-5 md:px-8 border-b border-brand-sand bg-brand-paper">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 md:gap-16">
      <div className="flex-1">
        <SectionLabel className="text-brand-red mb-6 md:mb-8">Formas de Apoio</SectionLabel>
        <h2 className="text-3xl md:text-6xl font-serif mb-8 md:mb-12 leading-tight">
          {siteData.supportOptions.title}
        </h2>
        
        <div className="flex flex-col gap-6 md:gap-8 mb-8 md:mb-12">
          {siteData.supportOptions.options.map((opt, i) => (
            <div key={i} className="flex items-start gap-4">
              <span className="text-brand-red mt-1">✦</span>
              <div>
                <span className="font-sans font-semibold uppercase tracking-widest text-xs md:text-sm block mb-1">{opt.title}</span>
                <span className="font-sans text-brand-black/70 text-sm">{opt.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 lg:max-w-md flex flex-col gap-8 justify-center bg-brand-paperLight p-6 md:p-12 border border-brand-sand/40">
        <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-8">
          {siteData.supportOptions.tags.map((tag, i) => (
            <SupportTag key={i}>{tag}</SupportTag>
          ))}
        </div>
        <a href="#contato" className="inline-flex items-center justify-center w-full bg-brand-red text-brand-paperLight py-4 uppercase tracking-widest text-sm font-semibold transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md hover:bg-brand-redDark active:translate-y-0">
          {siteData.supportOptions.cta}
        </a>
      </div>
    </div>
  </section>
);
