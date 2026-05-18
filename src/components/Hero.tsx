import React from 'react';
import { siteData } from '../data/content';
import { SectionLabel } from './ui';

export const Header = () => (
  <header className="w-full py-4 md:py-6 px-5 md:px-8 flex justify-between items-center border-b border-brand-black/10 z-50 relative bg-brand-paper">
    <div className="font-serif text-xl md:text-2xl font-bold tracking-tight">TALENT HACK</div>
    <nav className="hidden md:flex gap-8">
      {siteData.footerContent.links.map(link => (
        <a key={link} href={`#${link.toLowerCase()}`} className="text-sm uppercase tracking-widest font-sans font-semibold hover:text-brand-red transition-colors">
          {link}
        </a>
      ))}
    </nav>
    <a href="#apoie" className="bg-brand-red text-brand-paperLight px-4 py-2 md:px-6 md:py-2 uppercase tracking-widest text-xs md:text-sm font-semibold hover:bg-brand-redDark transition-colors">
      Apoiar
    </a>
  </header>
);

export const Hero = () => (
  <section className="relative min-h-[85vh] md:min-h-[90vh] flex flex-col pt-8 md:pt-12 overflow-hidden px-5 md:px-8">
    <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-serif font-bold text-brand-sand opacity-40 whitespace-nowrap pointer-events-none select-none -z-10">
      TALENT HACK
    </div>
    
    <div className="border-t border-brand-red w-full pt-4 mb-8 md:mb-16 flex flex-col md:flex-row md:justify-between flex-wrap gap-4">
      <SectionLabel className="text-brand-red text-xs">TALENT HACK · SP · REDE PÚBLICA</SectionLabel>
      <div className="flex flex-wrap gap-2 md:gap-4">
        {siteData.heroContent.labels.map((label, i) => (
          <span key={i} className="text-[10px] md:text-xs uppercase tracking-widest border border-brand-black/20 px-2 py-1">{label}</span>
        ))}
      </div>
    </div>

    <div className="flex-1 flex flex-col justify-center max-w-5xl">
      <h1 className="font-serif text-5xl leading-[0.95] md:text-8xl lg:text-9xl md:leading-none text-brand-black mb-6 md:mb-8 tracking-tight">
        {siteData.heroContent.title[0]} <br className="hidden md:block" /> <span className="italic">{siteData.heroContent.title[1]}</span>
      </h1>
      <h2 className="text-xl md:text-4xl font-serif mb-8 md:mb-12 max-w-2xl text-brand-black/80 leading-snug">
        {siteData.heroContent.subtitle}
      </h2>
      
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-3xl mb-12 md:mb-16">
        <p className="text-base md:text-xl font-sans leading-relaxed font-semibold flex-1">
          {siteData.heroContent.description1}
        </p>
        <p className="text-base md:text-xl font-sans leading-relaxed flex-1 border-l-2 border-brand-red pl-4 md:pl-6">
          {siteData.heroContent.description2}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-start pb-12 md:pb-0">
        <a href="#apoie" className="w-full sm:w-auto bg-brand-red text-brand-paperLight px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-brand-redDark transition-colors text-center">
          {siteData.heroContent.ctaPrimary}
        </a>
        <a href="#metodo" className="w-full sm:w-auto border border-brand-black text-brand-black px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-brand-black hover:text-brand-paperLight transition-colors text-center">
          {siteData.heroContent.ctaSecondary}
        </a>
      </div>
    </div>

    <div className="absolute bottom-8 right-8 flex flex-col items-end gap-2 hidden lg:flex">
      <span className="text-brand-black/40 font-sans tracking-widest text-sm uppercase">2026</span>
    </div>
  </section>
);
