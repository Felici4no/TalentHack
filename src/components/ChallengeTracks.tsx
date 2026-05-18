import React from 'react';
import { siteData } from '../data/content';
import { SectionLabel } from './ui';

export const ChallengeTracksSection = () => (
  <section className="py-24 px-8 bg-brand-black text-brand-offwhite">
    <div className="max-w-7xl mx-auto">
      <SectionLabel className="mb-12 text-brand-red">Aplicações</SectionLabel>
      <h2 className="text-4xl md:text-6xl font-serif max-w-4xl mb-16 leading-tight">
        {siteData.challengeTracks.title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {siteData.challengeTracks.tracks.map((track, i) => (
          <div key={i} className="border border-brand-offwhite/20 p-8 flex flex-col gap-4 hover:bg-brand-offwhite/5 transition-colors duration-300">
            <span className="text-brand-red font-serif text-3xl">0{i + 1}</span>
            <h3 className="text-2xl font-serif mt-4 pb-4 border-b border-brand-offwhite/20">{track.title}</h3>
            <p className="font-sans text-sm leading-relaxed text-brand-gray-light/80">{track.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center pt-8">
        <p className="text-xl md:text-2xl font-serif text-brand-gray-light/90 max-w-3xl mx-auto">
          "{siteData.challengeTracks.closing}"
        </p>
      </div>
    </div>
  </section>
);
