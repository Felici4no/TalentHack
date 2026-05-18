import React from 'react';
import { siteData } from '../data/content';
import { SectionLabel } from './ui';

export const MethodSection = () => (
  <section id="metodo" className="py-24 px-8 border-b border-brand-sand bg-brand-paperLight">
    <div className="max-w-7xl mx-auto">
      <SectionLabel className="mb-12">O Método</SectionLabel>
      <h2 className="text-4xl md:text-6xl font-serif max-w-4xl mb-6 leading-tight">
        {siteData.methodSteps.title}
      </h2>
      <p className="text-xl font-sans mb-24 max-w-3xl text-brand-black/80">
        {siteData.methodSteps.subtitle}
      </p>

      <div className="flex flex-col gap-12 border-l border-brand-black/20 pl-8 md:pl-16 ml-4 md:ml-8 relative">
        {siteData.methodSteps.steps.map((step, i) => (
          <div key={i} className="relative">
            <span className="absolute -left-12 md:-left-24 top-1 text-brand-red font-sans font-bold text-lg md:text-xl tracking-widest">{step.num}</span>
            <h3 className="text-2xl md:text-3xl font-serif mb-2">{step.title}</h3>
            <p className="font-sans text-brand-black/70 text-lg md:text-xl max-w-2xl">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-24 pt-8 border-t border-brand-sand max-w-3xl">
        <p className="text-2xl md:text-4xl font-serif italic text-brand-red">
          "{siteData.methodSteps.closing}"
        </p>
      </div>
    </div>
  </section>
);
