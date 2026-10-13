import React from 'react';
import { Scale, Compass, Award, ArrowDown, ShieldCheck, MessageSquare } from 'lucide-react';
import { FIRM_CONFIG } from '../data/firmData';

const PATH_ICONS = [Scale, Compass, Award];
const PATH_PHASES = [
  'Phase 01 · Case Foundation',
  'Phase 02 · Legal Direction',
  'Phase 03 · Decisive Resolution',
];

const BENEFIT_ICONS: Record<string, React.ElementType> = {
  ShieldCheck,
  MessageSquare,
  Compass,
  Scale,
};

export const ExperienceStrategyResults: React.FC = () => {
  return (
    <section
      id="approach"
      className="relative z-[14] -mt-10 sm:-mt-12 lg:-mt-14 pt-20 sm:pt-24 md:pt-28 pb-28 md:pb-36 bg-gradient-to-b from-[#8C0E26] via-[#750B1F] to-[#5C0818] text-white rounded-t-[50px] sm:rounded-t-[65px] lg:rounded-t-[80px] border-t-2 border-[#E5B842]/40 shadow-[0_-25px_50px_-15px_rgba(106,12,30,0.35)] overflow-hidden"
    >
      {/* Subtle radial gold/burgundy ambient depth */}
      <div
        className="absolute inset-0 bg-radial from-[#E5B842]/10 via-transparent to-black/30 pointer-events-none"
        aria-hidden="true"
      />

      <div id="why-choose-us" className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-[1px] w-8 bg-[#E5B842]" aria-hidden="true" />
            <span className="font-sans text-[11px] sm:text-[12px] uppercase tracking-[0.16em] font-bold text-[#E5B842]">
              WHY CHOOSE QADEER LEGAL CHAMBERS
            </span>
            <span className="h-[1px] w-8 bg-[#E5B842]" aria-hidden="true" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[3.25rem] font-semibold text-white leading-[1.08] tracking-[-0.02em] mb-4">
            Experience.{' '}
            <span className="text-[#E5B842]">Strategy.</span>{' '}
            <span className="italic font-normal text-white">Results.</span>
          </h2>

          <p className="font-sans text-[16px] sm:text-[17px] text-white/90 leading-[1.65] font-normal max-w-2xl mx-auto">
            Why Pakistani clients, commercial enterprises, overseas Pakistanis, and international law firms instruct our chambers for contentious and advisory mandates.
          </p>
        </div>

        {/* 4 Client-Care Standards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14 sm:mb-18">
          {FIRM_CONFIG.benefits.map((benefit, idx) => {
            const IconComp = BENEFIT_ICONS[benefit.icon] || ShieldCheck;
            return (
              <div
                key={benefit.id}
                className="bg-[#5C0818]/70 border border-[#E5B842]/30 rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-[#8C0E26] border border-[#E5B842]/50 flex items-center justify-center text-[#E5B842]">
                      <IconComp className="w-5 h-5" aria-hidden="true" />
                    </span>
                    <span className="font-serif text-xl font-bold text-[#E5B842] tabular-nums">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white leading-snug mb-2">
                    {benefit.title}
                  </h3>
                  <p className="font-sans text-[14px] text-white/85 leading-[1.6] font-normal">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Connected 3-Stage Path Layout */}
        <div className="relative pt-10 sm:pt-12 border-t border-[#E5B842]/30">
          {/* Desktop Horizontal Connecting Path Line & Curve (lg and above) */}
          <div
            className="hidden lg:block absolute top-[88px] left-[16%] right-[16%] h-[2px] z-0"
            aria-hidden="true"
          >
            {/* Dashed gold track */}
            <div className="w-full h-full border-t-2 border-dashed border-[#E5B842]/55" />
            {/* Glowing solid overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#E5B842]/20 via-[#E5B842] to-[#E5B842]/20 opacity-40" />
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
                    <div
                      className="w-[88px] h-[88px] rounded-full bg-[#5C0818] border-2 border-[#E5B842] shadow-[0_0_30px_rgba(229,184,66,0.30)] flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-105"
                    >
                      <StepIcon className="w-7 h-7 text-white" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Milestone Card */}
                  <div className="w-full flex-1 bg-[#5C0818]/70 hover:bg-[#5C0818]/90 border border-[#E5B842]/35 group-hover:border-[#E5B842]/75 rounded-2xl p-6 sm:p-8 shadow-xl transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <div className="font-sans text-[11px] uppercase tracking-[0.15em] text-[#E5B842] font-bold mb-2">
                        {PATH_PHASES[index]}
                      </div>

                      <h3 className="font-serif text-2xl sm:text-[1.85rem] font-semibold text-white tracking-[-0.01em] leading-[1.15] mb-3">
                        {principle.title.charAt(0) + principle.title.slice(1).toLowerCase()}
                      </h3>

                      <div className="w-10 h-[1.5px] bg-[#E5B842]/70 mx-auto mb-4" aria-hidden="true" />

                      <p className="font-sans text-[15px] sm:text-[16px] text-white/90 leading-[1.65] font-normal">
                        {principle.description}
                      </p>
                    </div>
                  </div>

                  {/* Mobile / Tablet Vertical Path Connector */}
                  {!isLast && (
                    <div
                      className="lg:hidden flex flex-col items-center my-2 text-[#E5B842]"
                      aria-hidden="true"
                    >
                      <div className="w-[2px] h-5 border-l-2 border-dashed border-[#E5B842]/60" />
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
