import React from 'react';
import { siteData } from '../data/content';
import { SectionLabel, EditorialMetric } from './ui';

export const ImpactSection = () => (
  <section className="py-24 px-8 bg-brand-offwhite border-b border-brand-black/20">
    <div className="max-w-7xl mx-auto">
      <SectionLabel className="mb-16">Impacto</SectionLabel>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {siteData.impact.metrics.map((metric, i) => (
          <EditorialMetric key={i} value={metric.value} label={metric.label} />
        ))}
      </div>
    </div>
  </section>
);

export const ValuesSection = () => (
  <section className="py-24 px-8 border-b border-brand-black">
    <div className="max-w-7xl mx-auto">
      <SectionLabel className="mb-12">Valores Inegociáveis</SectionLabel>
      <h2 className="text-4xl md:text-6xl font-serif mb-16 max-w-2xl">
        {siteData.values.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {siteData.values.cards.map((card, i) => (
          <div key={i} className="border border-brand-black p-8">
            <h3 className="text-2xl font-serif mb-4 pb-4 border-b border-brand-black/20">{card.title}</h3>
            <p className="font-sans leading-relaxed text-brand-black/80">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const ManifestoSection = () => (
  <section id="manifesto" className="py-32 px-8 bg-brand-pink-soft">
    <div className="max-w-4xl mx-auto text-center">
      <SectionLabel className="text-brand-red mb-12">Manifesto</SectionLabel>
      <p className="text-3xl md:text-5xl font-serif leading-snug">
        "{siteData.manifesto.text}"
      </p>
    </div>
  </section>
);

export const Footer = () => (
  <footer className="bg-brand-black text-brand-offwhite py-24 px-8">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
      <div className="max-w-md">
        <h2 className="text-3xl font-serif mb-4">{siteData.footer.title}</h2>
        <p className="font-sans text-brand-gray-light uppercase tracking-widest text-sm mb-2">
          {siteData.footer.subtitle1}
        </p>
        <p className="font-sans text-brand-gray-light/60 text-sm">
          {siteData.footer.subtitle2}
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-16">
        <nav className="flex flex-col gap-4">
          <span className="text-xs uppercase tracking-widest text-brand-gray-light/40 mb-4">Navegação</span>
          {siteData.footer.links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="font-sans text-sm uppercase tracking-widest hover:text-brand-red transition-colors">
              {link}
            </a>
          ))}
        </nav>
        
        <div className="flex flex-col gap-8">
          <a href="#apoie" className="bg-brand-red text-brand-offwhite px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-white hover:text-brand-black transition-colors text-center inline-block">
            Quero Apoiar
          </a>
        </div>
      </div>
    </div>
  </footer>
);
