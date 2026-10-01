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
      className="relative z-[2] w-full min-h-[100vh] lg:min-h-[100dvh] flex flex-col justify-between overflow-visible pb-10 sm:pb-12 lg:pb-14"
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
        - Left Content: Eyebrow badge, Large serif headline, Supporting copy, 2 CTA buttons
        - Right Foreground Cutout: Confident Lawyer placed right beside the content, overlapping boundary
      */}
      <div className="w-full flex-1 flex flex-col justify-center relative">
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:pl-16 xl:pl-20 lg:pr-8 flex flex-col lg:flex-row items-center lg:items-end justify-start gap-4 lg:gap-6 relative min-h-[500px] lg:min-h-[580px]">
          {/* Hero Content (Positioned over Burgundy side with 70–90px left spacing) */}
          <HeroContent onOpenConsultation={onOpenConsultation} />

          {/* Independent Foreground Lawyer Cutout (z-index 6, close to text and buttons) */}
          <HeroLawyer />
        </div>
      </div>
    </section>
  );
};
