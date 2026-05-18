import React from 'react';
import { siteData } from '../data/content';
import { SectionLabel, EditorialMetric } from './ui';

export const ImpactSection = () => (
  <section className="py-24 px-8 bg-brand-offwhite border-b border-brand-black/20">
    <div className="max-w-7xl mx-auto">
      <SectionLabel className="mb-12 text-brand-red">Escala e Impacto</SectionLabel>
      <h2 className="text-4xl md:text-6xl font-serif max-w-4xl mb-16 leading-tight">
        {siteData.impactMetrics.title}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
        {siteData.impactMetrics.metrics.map((metric, i) => (
          <EditorialMetric key={i} value={metric.value} label={metric.label} />
        ))}
      </div>
    </div>
  </section>
);

export const ManifestoSection = () => (
  <section id="manifesto" className="py-32 px-8 bg-brand-pink-soft border-b border-brand-black/20">
    <div className="max-w-3xl mx-auto">
      <SectionLabel className="text-brand-red mb-12 text-center">Manifesto</SectionLabel>
      <div className="flex flex-col gap-6 text-3xl md:text-5xl font-serif leading-snug">
        {siteData.manifestoContent.text.split('\n\n').map((paragraph, i) => (
          <p key={i} className="mb-6">{paragraph}</p>
        ))}
      </div>
    </div>
  </section>
);

export const Footer = () => (
  <footer className="bg-brand-black text-brand-offwhite py-24 px-8">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
      <div className="max-w-md">
        <h2 className="text-4xl font-serif mb-4 text-brand-red">{siteData.footerContent.title}</h2>
        <p className="font-sans text-brand-gray-light uppercase tracking-widest text-sm mb-2">
          {siteData.footerContent.subtitle1}
        </p>
        <p className="font-sans text-brand-gray-light/60 text-sm">
          {siteData.footerContent.subtitle2}
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-16">
        <nav className="flex flex-col gap-4">
          <span className="text-xs uppercase tracking-widest text-brand-gray-light/40 mb-4">Navegação</span>
          {siteData.footerContent.links.map(link => (
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
