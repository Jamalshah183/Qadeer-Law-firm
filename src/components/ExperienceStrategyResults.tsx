import React from 'react';
import { FIRM_CONFIG } from '../data/firmData';

export const ExperienceStrategyResults: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FFF9EC] rounded-[32px] sm:rounded-[40px] mx-2 sm:mx-4 md:mx-6 my-6 border border-[#5B1111]/10 relative overflow-hidden shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Professional Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer delicate gold line */}
              <div
                className="absolute -top-4 -left-4 w-full h-full border border-[#C6A15B]/50 rounded-2xl -z-10"
                aria-hidden="true"
              />

              {/* Offset deep burgundy block */}
              <div
                className="absolute -bottom-4 -right-4 w-full h-full bg-[#5B1111] rounded-2xl -z-10 shadow-lg"
                aria-hidden="true"
              />

              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#5B1111]/30 aspect-[3/4] bg-[#3E0808] group">
                <img
                  src={FIRM_CONFIG.images.experienceStrategy}
                  alt="Senior legal advocate in strategic analysis"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E0808]/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#3E0808]/85 backdrop-blur-xs border border-[#C6A15B]/30 text-[#FDF0D5]">
                  <p className="text-xs uppercase tracking-widest text-[#C6A15B] font-semibold mb-1">
                    Institutional Standard
                  </p>
                  <p className="font-serif text-sm italic text-[#FDF0D5]/90">
                    "Every case demands rigorous factual inquiry and sharp legal doctrine."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Three Vertically Arranged Principles */}
          <div className="lg:col-span-6">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-[1px] w-6 bg-[#C6A15B]" aria-hidden="true" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#5B1111]">
                  CORE ADVOCACY PILLARS
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#171313] leading-[1.12]">
                Experience. <br />
                <span className="text-[#5B1111]">Strategy.</span> <br />
                <span className="italic font-normal">Results.</span>
              </h2>
            </div>

            {/* Principles Stack */}
            <div className="space-y-8">
              {FIRM_CONFIG.principles.map((principle, index) => (
                <div key={principle.number} className="relative group">
                  <div className="flex items-start gap-5">
                    {/* Burgundy Number */}
                    <div className="shrink-0">
                      <span className="text-2xl sm:text-3xl font-serif font-bold text-[#5B1111] tabular-nums group-hover:text-[#3E0808] transition-colors">
                        {principle.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="space-y-1.5 flex-1">
                      <h3 className="text-lg sm:text-xl font-serif font-bold text-[#171313] tracking-wide uppercase">
                        — {principle.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#171313]/80 leading-relaxed font-normal">
                        {principle.description}
                      </p>
                    </div>
                  </div>

                  {/* Gold Separator Line between items */}
                  {index < FIRM_CONFIG.principles.length - 1 && (
                    <div className="w-full h-[1px] bg-gradient-to-r from-[#C6A15B]/50 via-[#C6A15B]/20 to-transparent mt-8" />
                  )}
                </div>
              ))}
            </div>

            {/* Reassurance text */}
            <div className="mt-10 p-4 rounded-lg bg-[#FFF9EC] border border-[#5B1111]/15 text-xs text-[#6D6260] leading-relaxed">
              <strong className="text-[#5B1111] font-semibold">Chambers Commitment: </strong>
              We do not make speculative promises about court judgments. Our obligation is to formulate the most rigorous legal defense and transparently represent your brief before every judicial forum.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
