import React from 'react';
import { Scale, Compass, Award, ArrowDown } from 'lucide-react';
import { FIRM_CONFIG } from '../data/firmData';

const PATH_ICONS = [Scale, Compass, Award];
const PATH_PHASES = [
  'Phase 01 · Case Foundation',
  'Phase 02 · Legal Direction',
  'Phase 03 · Decisive Resolution',
];

export const ExperienceStrategyResults: React.FC = () => {
  return (
    <section className="relative z-[11] -mt-10 sm:-mt-12 lg:-mt-14 pt-20 sm:pt-24 md:pt-28 pb-28 md:pb-36 bg-[#5B1111] text-[#FDF0D5] rounded-t-[50px] sm:rounded-t-[65px] lg:rounded-t-[80px] border-t-2 border-[#C6A15B]/35 shadow-[0_-25px_50px_-15px_rgba(62,8,8,0.35)] overflow-hidden">
      {/* Subtle radial gold/burgundy ambient depth */}
      <div
        className="absolute inset-0 bg-radial from-[#C6A15B]/8 via-transparent to-[#3E0808]/50 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-[1px] w-8 bg-[#C6A15B]" aria-hidden="true" />
            <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.22em] font-semibold text-[#C6A15B]">
              CORE ADVOCACY PILLARS
            </span>
            <span className="h-[1px] w-8 bg-[#C6A15B]" aria-hidden="true" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FDF0D5] leading-tight mb-4">
            Experience.{' '}
            <span className="text-[#C6A15B]">Strategy.</span>{' '}
            <span className="italic font-normal text-[#FFF9EC]">Results.</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#FDF0D5]/85 leading-relaxed max-w-xl mx-auto">
            A clear, structured three-stage path guiding your legal matter from initial case evaluation to courtroom resolution.
          </p>
        </div>

        {/* Connected Path Layout */}
        <div className="relative">
          {/* Desktop Horizontal Connecting Path Line & Curve (lg and above) */}
          <div
            className="hidden lg:block absolute top-[44px] left-[16%] right-[16%] h-[2px] z-0"
            aria-hidden="true"
          >
            {/* Dashed gold track */}
            <div className="w-full h-full border-t-2 border-dashed border-[#C6A15B]/55" />
            {/* Glowing solid overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#C6A15B]/20 via-[#C6A15B] to-[#C6A15B]/20 opacity-40" />
          </div>

          {/* 3 Path Milestones */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 relative z-10">
            {FIRM_CONFIG.principles.map((principle, index) => {
              const StepIcon = PATH_ICONS[index] || Scale;
              const isLast = index === FIRM_CONFIG.principles.length - 1;

              return (
                <div
                  key={principle.number}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Path Node Medallion */}
                  <div className="relative flex items-center justify-center mb-6">
                    {/* Outer pulse ring on hover */}
                    <div
                      className="w-[88px] h-[88px] rounded-full bg-[#3E0808] border-2 border-[#C6A15B] shadow-[0_0_30px_rgba(198,161,91,0.22)] flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-105"
                    >
                      <StepIcon className="w-7 h-7 text-[#FDF0D5]" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Milestone Card */}
                  <div className="w-full flex-1 bg-[#3E0808]/60 hover:bg-[#3E0808]/80 border border-[#C6A15B]/30 group-hover:border-[#C6A15B]/70 rounded-2xl p-6 sm:p-8 shadow-xl transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <div className="font-sans text-xs uppercase tracking-[0.18em] text-[#C6A15B] font-semibold mb-2">
                        {PATH_PHASES[index]}
                      </div>

                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FDF0D5] tracking-wide mb-3">
                        {principle.title.charAt(0) + principle.title.slice(1).toLowerCase()}
                      </h3>

                      <div className="w-10 h-[1.5px] bg-[#C6A15B]/60 mx-auto mb-4" aria-hidden="true" />

                      <p className="font-sans text-sm sm:text-base text-[#FDF0D5]/85 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>

                  {/* Mobile / Tablet Vertical Path Connector */}
                  {!isLast && (
                    <div
                      className="lg:hidden flex flex-col items-center my-2 text-[#C6A15B]"
                      aria-hidden="true"
                    >
                      <div className="w-[2px] h-5 border-l-2 border-dashed border-[#C6A15B]/60" />
                      <ArrowDown className="w-4 h-4 -mt-1" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
