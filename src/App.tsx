import React from 'react';
import { Header, Hero } from './components/Hero';
import { ProblemSection, CapitalCulturalSection } from './components/Problem';
import { WhatWeDoSection, WhatWeAreSection } from './components/Action';
import { MethodSection, SponsorSection } from './components/MethodSponsor';
import { ImpactSection, ValuesSection, ManifestoSection, Footer } from './components/Closing';

function App() {
  return (
    <div className="min-h-screen bg-brand-offwhite font-sans text-brand-black selection:bg-brand-red selection:text-white">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <CapitalCulturalSection />
        <WhatWeDoSection />
        <WhatWeAreSection />
        <MethodSection />
        <SponsorSection />
        <ImpactSection />
        <ValuesSection />
        <ManifestoSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
