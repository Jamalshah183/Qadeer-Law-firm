import React from 'react';
import { HeroBackground } from './hero/HeroBackground';
import { HeroNavigation } from './hero/HeroNavigation';
import { HeroContent } from './hero/HeroContent';
import { HeroLawyer } from './hero/HeroLawyer';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section
      id="hero"
      className="relative z-[2] w-full min-h-[100vh] lg:h-[100dvh] lg:min-h-[760px] flex flex-col justify-start overflow-x-clip overflow-y-visible pb-10 sm:pb-12 lg:pb-14"
    >
      {/* 
        Two Independent Background Layers:
        1. Left Background Image (Desk & Paperwork) + Independent Primary Burgundy Overlay (#5B1111, 88%)
        2. Right Background Image (Warm Legal & Subtle Justice Scales) + Warm Cream Overlay
        Right border of the left section is smoothly rounded.
      */}
      <HeroBackground />

      {/* Top Header & Navigation: Logo at top-left, Navigation links at top-right */}
      <HeroNavigation onOpenConsultation={onOpenConsultation} />

      {/* 
        Main Hero Editorial Split Composition:
        - Positioned with generous top spacing below the navbar so the writing is never close to the navbar
        - Left Content: Eyebrow badge, 3-line serif headline, Supporting copy, 2 CTA buttons
        - Center-Split Statue of Justice: Straddles the boundary between the 2 containers,
          top edge level with the writing, lower edge extending behind the second section.
      */}
      <div className="w-full flex-1 flex flex-col justify-start relative pt-4 sm:pt-8 lg:pt-12 xl:pt-14">
        <div className="w-full relative flex flex-col lg:flex-row items-center lg:items-start justify-start">
          {/* Hero Content (Positioned over Burgundy side with left spacing, top-aligned) */}
          <HeroContent onOpenConsultation={onOpenConsultation} />

          {/* Foreground Statue of Justice Cutout (Positioned between the 2 containers, top-aligned with writing) */}
          <HeroLawyer />
        </div>
      </div>
    </section>
  );
};
