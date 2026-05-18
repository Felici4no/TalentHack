import React from 'react';
import { siteData } from '../data/content';
import { SectionLabel, EditorialMetric } from './ui';

export const ImpactSection = () => (
  <section className="py-16 md:py-24 px-5 md:px-8 bg-brand-paperLight border-b border-brand-sand/40">
    <div className="max-w-7xl mx-auto">
      <SectionLabel className="mb-8 md:mb-12 text-brand-red">Escala e Impacto</SectionLabel>
      <h2 className="text-3xl md:text-6xl font-serif max-w-4xl mb-12 md:mb-16 leading-tight">
        {siteData.impactMetrics.title}
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-16">
        {siteData.impactMetrics.metrics.map((metric, i) => {
          let colorClass = "text-brand-black";
          if (i === 0 || i === 4) colorClass = "text-brand-red"; // 36h e 100%
          if (i === 3 || i === 5 || i === 6) colorClass = "text-brand-sand"; // decorativos/menores
          
          return (
            <EditorialMetric key={i} value={metric.value} label={metric.label} overrideColor={colorClass} />
          );
        })}
      </div>
    </div>
  </section>
);

export const ManifestoSection = () => (
  <section id="manifesto" className="py-20 md:py-32 px-5 md:px-8 bg-brand-clay border-b border-brand-sand/40">
    <div className="max-w-3xl mx-auto">
      <SectionLabel className="text-brand-red mb-10 md:mb-12 text-center">Manifesto</SectionLabel>
      <div className="flex flex-col gap-4 md:gap-6 text-2xl md:text-5xl font-serif leading-snug">
        {siteData.manifestoContent.text.split('\n\n').map((paragraph, i) => (
          <p key={i} className="mb-4 md:mb-6">{paragraph}</p>
        ))}
      </div>
    </div>
  </section>
);

export const Footer = () => (
  <footer className="bg-brand-black text-brand-paper py-16 md:py-24 px-5 md:px-8">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12 md:gap-16">
      <div className="max-w-md">
        <h2 className="text-3xl md:text-4xl font-serif mb-4 text-brand-red">{siteData.footerContent.title}</h2>
        <p className="font-sans text-brand-sand uppercase tracking-widest text-xs md:text-sm mb-2">
          {siteData.footerContent.subtitle1}
        </p>
        <p className="font-sans text-brand-sand/60 text-xs md:text-sm">
          {siteData.footerContent.subtitle2}
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-12 md:gap-16 w-full lg:w-auto">
        <nav className="flex flex-col gap-3 md:gap-4 flex-1">
          <span className="text-[10px] md:text-xs uppercase tracking-widest text-brand-sand/40 mb-2 md:mb-4">Navegação</span>
          {siteData.footerContent.links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="font-sans text-xs md:text-sm uppercase tracking-widest hover:text-brand-red transition-colors">
              {link}
            </a>
          ))}
        </nav>
        
        <div className="flex flex-col gap-8 w-full sm:w-auto">
          <a href="#apoie" className="w-full sm:w-auto bg-brand-red text-brand-paperLight px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-brand-redDark transition-colors text-center inline-block">
            Quero Apoiar
          </a>
        </div>
      </div>
    </div>
  </footer>
);
