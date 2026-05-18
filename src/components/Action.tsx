import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from '../data/content';
import { SectionLabel } from './ui';

export const WhatWeDoSection = () => (
  <section className="py-24 px-8">
    <div className="max-w-7xl mx-auto">
      <SectionLabel className="mb-12">O que fazemos</SectionLabel>
      <h2 className="text-4xl md:text-6xl font-serif mb-16 text-brand-red">
        {siteData.whatWeDo.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
        {siteData.whatWeDo.cards.map((card, i) => (
          <div key={i} className="flex flex-col">
            <h3 className="text-2xl font-serif mb-4 pb-4 border-b border-brand-black">{card.title}</h3>
            <p className="font-sans text-brand-black/80 leading-relaxed">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const WhatWeAreSection = () => (
  <section className="py-24 px-8 bg-brand-gray-light border-y border-brand-black">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="border-b md:border-b-0 md:border-r border-brand-black pb-12 md:pb-0 md:pr-12">
          <SectionLabel className="mb-8 text-brand-red">O que somos</SectionLabel>
          <ul className="flex flex-col gap-6">
            {siteData.whatWeAre.is.map((item, i) => (
              <li key={i} className="text-xl md:text-3xl font-serif">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-12 md:pt-0 md:pl-12">
          <SectionLabel className="mb-8">O que não somos</SectionLabel>
          <ul className="flex flex-col gap-6">
            {siteData.whatWeAre.isNot.map((item, i) => (
              <li key={i} className="text-xl md:text-3xl font-serif text-brand-black/40 line-through">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);
