import React from 'react';
import { User, MessagesSquare, Landmark } from 'lucide-react';
import marbleColumnImg from '../assets/images/classical_marble_column_1792242281393.jpg';

const ChessKnightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M19 20H5v-1c0-1.5 1-2.5 2-3 0-1-1-2-1-3 0-1 .5-2 1.5-2.5C7 10 6.5 8 8 6.5c1-1 2.2-1.5 3.5-1.5 1 0 1.8-.7 2-1.5.3.6.5 1.3.5 2 1.5.5 3 2 2.5 4.5-.5 2.5 0 3.5 1 4.5 1 .8 1.5 1.7 1.5 2.5v1.5z" />
    <circle cx="10" cy="9" r="0.75" fill="currentColor" />
    <path d="M9 13.5c1 .5 2 .5 3 0" />
  </svg>
);

const PILLARS = [
  {
    number: '01',
    titleLine1: 'Personal',
    titleLine2: 'Attention',
    Icon: User,
  },
  {
    number: '02',
    titleLine1: 'Clear',
    titleLine2: 'Communication',
    Icon: MessagesSquare,
  },
  {
    number: '03',
    titleLine1: 'Strategic',
    titleLine2: 'Thinking',
    Icon: ChessKnightIcon,
  },
  {
    number: '04',
    titleLine1: 'Professional',
    titleLine2: 'Representation',
    Icon: Landmark,
  },
];

export const ExperienceStrategyResults: React.FC = () => {
  return (
    <section
      id="approach"
      className="relative z-[14] -mt-10 sm:-mt-12 lg:-mt-14 min-h-screen lg:min-h-[105vh] xl:min-h-[112vh] flex flex-col justify-center pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40 pb-24 sm:pb-28 md:pb-32 lg:pb-36 xl:pb-40 bg-[#FFFFFF] text-[#0F172A] rounded-t-[50px] sm:rounded-t-[65px] lg:rounded-t-[80px] border-t-2 border-[#9B112C]/20 shadow-[0_-25px_50px_-15px_rgba(155,17,44,0.10)] overflow-hidden font-sans"
    >
      {/* ======================================================================
          BACKGROUND ACCENTS:
          1. Top-Left Burgundy & Gold Architectural Arc Swoosh
          2. Bottom-Right Burgundy & Gold Architectural Arc Swoosh
          3. Right Classical Marble Column with Sunlight Bleed
          ====================================================================== */}
      {/* Top-Left Burgundy & Gold Corner Arc */}
      <div className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 md:-top-10 md:-left-10 w-44 sm:w-56 md:w-72 lg:w-80 h-44 sm:h-56 md:h-72 lg:h-80 pointer-events-none select-none z-[1]">
        <svg viewBox="0 0 240 240" fill="none" className="w-full h-full">
          <path
            d="M0 0 L180 0 C180 85 95 180 0 180 Z"
            fill="#6A0C1E"
          />
          <path
            d="M180 0 C180 85 95 180 0 180"
            stroke="#E5B842"
            strokeWidth="3.5"
          />
          <path
            d="M0 0 L140 0 C140 65 75 140 0 140 Z"
            fill="#4A0815"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* Bottom-Right Burgundy & Gold Corner Arc */}
      <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 md:-bottom-10 md:-right-10 w-44 sm:w-56 md:w-72 lg:w-80 h-44 sm:h-56 md:h-72 lg:h-80 pointer-events-none select-none z-[1]">
        <svg viewBox="0 0 240 240" fill="none" className="w-full h-full">
          <path
            d="M240 240 L60 240 C60 155 145 60 240 60 Z"
            fill="#6A0C1E"
          />
          <path
            d="M60 240 C60 155 145 60 240 60"
            stroke="#E5B842"
            strokeWidth="3.5"
          />
          <path
            d="M240 240 L100 240 C100 175 165 100 240 100 Z"
            fill="#4A0815"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* Neoclassical Marble Corinthian Column
          - Hidden on mobile version only (hidden sm:flex)
          - Desktop / Tablet: Full width (lg:w-[460px]), high opacity (lg:opacity-80), and balanced directional feathering
      */}
      <div className="hidden sm:flex absolute inset-y-0 right-0 sm:w-[280px] md:w-[380px] lg:w-[460px] pointer-events-none select-none z-0 overflow-hidden items-center justify-end">
        <img
          src={marbleColumnImg}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-left-bottom mix-blend-multiply sm:opacity-70 lg:opacity-80"
          style={{
            filter: 'brightness(0.85) contrast(1.15) saturate(0.9)',
          }}
        />
        {/* Directional white feathering on desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent" />
      </div>

      {/* ======================================================================
          MAIN SECTION CONTENT
          ====================================================================== */}
      <div id="why-choose-us" className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Centered Section Header (Matching Upper Sections Sans Typography) */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 md:mb-20">
          {/* Eyebrow with flanking gold rules */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <span className="h-[1px] w-8 sm:w-12 md:w-16 bg-[#C6A15B]" aria-hidden="true" />
            <span className="font-sans text-[11px] sm:text-[12px] uppercase tracking-[0.18em] text-[#9B112C] font-bold">
              WHY CHOOSE
            </span>
            <span className="h-[1px] w-8 sm:w-12 md:w-16 bg-[#C6A15B]" aria-hidden="true" />
          </div>

          {/* Main Headline matching Upper Sections */}
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-[3.25rem] xl:text-[3.6rem] font-bold text-[#0F172A] leading-[1.08] tracking-[-0.02em] mb-3 sm:mb-4">
            Qadeer Legal <span className="font-sans italic font-semibold text-[#800F24]">Chambers</span>
          </h2>

          {/* Subtitle / Positioning Tagline */}
          <div className="mb-3.5 sm:mb-4">
            <span className="font-sans text-[11px] sm:text-[12px] md:text-[12.5px] uppercase tracking-[0.22em] text-[#0F172A] font-bold">
              EXPERIENCE • STRATEGY • RESULTS
            </span>
          </div>

          {/* Narrative Statement */}
          <p className="font-sans text-[14.5px] sm:text-[16px] text-[#475569] leading-[1.65] font-normal max-w-2xl mx-auto">
            Why Pakistani clients, commercial enterprises, overseas Pakistanis, and international law firms instruct our chambers for contentious and advisory mandates.
          </p>
        </div>

        {/* ======================================================================
            4 CONNECTED PILLAR NODES (Timeline with Exact Geometric Positioning)
            ====================================================================== */}
        <div className="relative">
          {/* Desktop Connecting Gold Line (Spanning from Col 1 center 12.5% to Col 4 center 87.5%) */}
          <div
            className="hidden lg:block absolute left-[12.5%] right-[12.5%] top-10 sm:top-11 -translate-y-1/2 h-[1.5px] bg-[#C6A15B] z-0 pointer-events-none"
            aria-hidden="true"
          />

          {/* The 3 Centered Gold Diamonds at Exact Column Midpoints: 25%, 50%, 75% */}
          <div
            className="hidden lg:block absolute inset-x-0 top-10 sm:top-11 -translate-y-1/2 pointer-events-none z-[1]"
            aria-hidden="true"
          >
            <div className="absolute left-[25%] -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#C6A15B] rotate-45 border border-white shadow-xs" />
            <div className="absolute left-[50%] -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#C6A15B] rotate-45 border border-white shadow-xs" />
            <div className="absolute left-[75%] -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#C6A15B] rotate-45 border border-white shadow-xs" />
          </div>

          {/* Tablet (sm screens) Connecting Lines between paired nodes */}
          <div
            className="hidden sm:block lg:hidden absolute left-[25%] right-[25%] top-10 sm:top-11 -translate-y-1/2 h-[1.5px] bg-[#C6A15B] z-0 pointer-events-none"
            aria-hidden="true"
          >
            <div className="absolute left-[50%] -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#C6A15B] rotate-45 border border-white shadow-xs" />
          </div>

          {/* 4 Pillar Items Grid (Centered layout matching timeline nodes) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-y-12 sm:gap-x-8 lg:gap-6 relative z-10">
            {PILLARS.map((pillar) => {
              const IconComp = pillar.Icon;

              return (
                <div
                  key={pillar.number}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Circular Medallion with Outer Gold Ring & Deep Burgundy Core */}
                  <div className="relative flex items-center justify-center mb-5 sm:mb-6">
                    <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-2 border-[#C6A15B] p-1 bg-white shadow-md flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      <div className="w-full h-full rounded-full bg-[#6A0C1E] flex items-center justify-center text-[#E5B842] shadow-inner">
                        <IconComp className="w-8 h-8 sm:w-9 sm:h-9 text-[#E5B842]" />
                      </div>
                    </div>
                  </div>

                  {/* Golden Editorial Numerals */}
                  <div className="font-sans text-xl sm:text-2xl font-bold text-[#C6A15B] mb-2 leading-none tabular-nums">
                    {pillar.number}
                  </div>

                  {/* Burgundy Sans Title matching Upper Sections (No explanatory paragraphs) */}
                  <h3 className="font-sans text-lg sm:text-xl lg:text-[1.3rem] font-bold text-[#800F24] leading-[1.2] tracking-[-0.01em]">
                    <span className="block">{pillar.titleLine1}</span>
                    <span className="block">{pillar.titleLine2}</span>
                  </h3>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
