import React from 'react';
import { siteData } from '../data/content';
import { SectionLabel } from './ui';

export const ChallengeTracksSection = () => (
  <section className="py-16 md:py-24 px-5 md:px-8 bg-brand-black text-brand-paper border-b border-brand-black/20">
    <div className="max-w-7xl mx-auto">
      <SectionLabel className="mb-8 md:mb-12 text-brand-red">Aplicações</SectionLabel>
      <h2 className="text-3xl md:text-6xl font-serif max-w-4xl mb-12 md:mb-16 leading-tight text-brand-paperLight">
        {siteData.challengeTracks.title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
        {siteData.challengeTracks.tracks.map((track, i) => (
          <div key={i} className="border border-brand-sand/20 p-6 md:p-8 flex flex-col gap-3 md:gap-4 hover:bg-brand-sand/5 transition-colors duration-300">
            <span className="text-brand-red font-serif text-2xl md:text-3xl">0{i + 1}</span>
            <h3 className="text-xl md:text-2xl font-serif mt-2 md:mt-4 pb-3 md:pb-4 border-b border-brand-sand/20">{track.title}</h3>
            <p className="font-sans text-sm leading-relaxed text-brand-sand/80">{track.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center pt-4 md:pt-8">
        <p className="text-lg md:text-2xl font-serif text-brand-sand max-w-3xl mx-auto leading-relaxed">
          "{siteData.challengeTracks.closing}"
        </p>
      </div>
    </div>
  </section>
);
