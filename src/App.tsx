import React from 'react';
import { Header, Hero } from './components/Hero';
import { ProblemSection, CapitalCulturalSection } from './components/Problem';
import { MovementSection } from './components/Movement';
import { MethodSection } from './components/Method';
import { ChallengeTracksSection } from './components/ChallengeTracks';
import { StudentValueSection } from './components/StudentValue';
import { SponsorValueSection, SupportOptionsSection } from './components/SponsorValue';
import { WhatWeAreSection } from './components/Action';
import { ImpactSection, ManifestoSection, Footer } from './components/Closing';

function App() {
  return (
    <div className="min-h-screen bg-brand-paper font-sans text-brand-black selection:bg-brand-red selection:text-white">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <CapitalCulturalSection />
        <MovementSection />
        <MethodSection />
        <ChallengeTracksSection />
        <StudentValueSection />
        <SponsorValueSection />
        <SupportOptionsSection />
        <WhatWeAreSection />
        <ImpactSection />
        <ManifestoSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
