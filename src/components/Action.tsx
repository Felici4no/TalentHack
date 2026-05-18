
import { siteData } from '../data/content';
import { SectionLabel } from './ui';

export const WhatWeAreSection = () => (
  <section className="py-16 md:py-24 px-5 md:px-8 bg-brand-black text-brand-paper">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="border-b md:border-b-0 md:border-r border-brand-sand/20 pb-10 md:pb-0 md:pr-12">
          <SectionLabel className="mb-6 md:mb-8 text-brand-red">O que somos</SectionLabel>
          <ul className="flex flex-col gap-4 md:gap-6">
            {siteData.whatWeAre.is.map((item, i) => (
              <li key={i} className="text-xl md:text-3xl font-serif">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-10 md:pt-0 md:pl-12">
          <SectionLabel className="mb-6 md:mb-8 text-brand-sand/40">O que não somos</SectionLabel>
          <ul className="flex flex-col gap-4 md:gap-6">
            {siteData.whatWeAre.isNot.map((item, i) => (
              <li key={i} className="text-xl md:text-3xl font-serif text-brand-sand/30 line-through">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mt-16 md:mt-24 pt-8 md:pt-12 border-t border-brand-sand/20 text-center">
        <p className="text-xl md:text-4xl font-serif italic text-brand-red leading-relaxed">
          "{siteData.whatWeAre.closing}"
        </p>
      </div>
    </div>
  </section>
);
