
import { siteData } from '../data/content';
import { SectionLabel } from './ui';

export const MethodSection = () => (
  <section id="metodo" className="py-16 md:py-24 px-5 md:px-8 border-b border-brand-sand bg-brand-paperLight">
    <div className="max-w-7xl mx-auto">
      <SectionLabel className="mb-8 md:mb-12">O Método</SectionLabel>
      <h2 className="text-3xl md:text-6xl font-serif max-w-4xl mb-4 md:mb-6 leading-tight">
        {siteData.methodSteps.title}
      </h2>
      <p className="text-lg md:text-xl font-sans mb-16 md:mb-24 max-w-3xl text-brand-black/80 leading-relaxed">
        {siteData.methodSteps.subtitle}
      </p>

      <div className="flex flex-col gap-10 md:gap-12 md:border-l md:border-brand-black/20 md:pl-16 md:ml-8 relative">
        {siteData.methodSteps.steps.map((step, i) => (
          <div key={i} className="relative flex flex-col md:block border-l-2 border-brand-red pl-4 md:border-none md:pl-0">
            <span className="md:absolute md:-left-24 md:top-1 text-brand-red font-sans font-bold text-sm md:text-xl tracking-widest mb-2 md:mb-0 block">{step.num}</span>
            <h3 className="text-xl md:text-3xl font-serif mb-2">{step.title}</h3>
            <p className="font-sans text-brand-black/70 text-base md:text-xl max-w-2xl leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 md:mt-24 pt-8 border-t border-brand-sand max-w-3xl">
        <p className="text-xl md:text-4xl font-serif italic text-brand-red leading-relaxed">
          "{siteData.methodSteps.closing}"
        </p>
      </div>
    </div>
  </section>
);
