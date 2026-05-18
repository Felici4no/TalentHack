import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from '../data/content';
import { SectionLabel } from './ui';

export const Header = () => (
  <header className="w-full py-6 px-8 flex justify-between items-center border-b border-brand-black/10 z-50 relative bg-brand-offwhite">
    <div className="font-serif text-2xl font-bold tracking-tight">TALENT HACK</div>
    <nav className="hidden md:flex gap-8">
      {siteData.footer.links.map(link => (
        <a key={link} href={`#${link.toLowerCase()}`} className="text-sm uppercase tracking-widest font-sans font-semibold hover:text-brand-red transition-colors">
          {link}
        </a>
      ))}
    </nav>
    <a href="#apoie" className="bg-brand-red text-white px-6 py-2 uppercase tracking-widest text-sm font-semibold hover:bg-brand-black transition-colors">
      Quero Apoiar
    </a>
  </header>
);

export const Hero = () => (
  <section className="relative min-h-[90vh] flex flex-col pt-12 overflow-hidden px-8">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-serif font-bold text-brand-gray-light opacity-50 whitespace-nowrap pointer-events-none select-none -z-10">
      TALENT HACK
    </div>
    
    <div className="border-t border-brand-red w-full pt-4 mb-16 flex justify-between">
      <SectionLabel className="text-brand-red">{siteData.hero.label}</SectionLabel>
    </div>

    <div className="flex-1 flex flex-col justify-center max-w-5xl">
      <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-none text-brand-black mb-8">
        {siteData.hero.title[0]} <br/> <span className="italic">{siteData.hero.title[1]}</span>
      </h1>
      <h2 className="text-2xl md:text-4xl font-serif mb-12 max-w-2xl text-brand-black/80">
        {siteData.hero.subtitle}
      </h2>
      
      <div className="flex flex-col md:flex-row gap-12 max-w-3xl mb-16">
        <p className="text-lg md:text-xl font-sans leading-relaxed flex-1">
          {siteData.hero.description1}
        </p>
        <p className="text-lg md:text-xl font-sans leading-relaxed font-semibold flex-1 border-l-2 border-brand-red pl-6">
          {siteData.hero.description2}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 items-start">
        <a href="#apoie" className="bg-brand-red text-white px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-brand-black transition-colors text-center">
          {siteData.hero.ctaPrimary}
        </a>
        <a href="#manifesto" className="border border-brand-black text-brand-black px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-brand-black hover:text-brand-offwhite transition-colors text-center">
          {siteData.hero.ctaSecondary}
        </a>
      </div>
    </div>

    <div className="absolute bottom-8 right-8 flex flex-col items-end gap-2 hidden lg:flex">
      {siteData.hero.metrics.map((m, i) => (
        <span key={i} className="text-brand-black/40 font-sans tracking-widest text-sm uppercase">{m}</span>
      ))}
    </div>
  </section>
);
