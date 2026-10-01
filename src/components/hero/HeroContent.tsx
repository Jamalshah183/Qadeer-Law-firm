import React from 'react';
import { Scale } from 'lucide-react';
import { heroConfig } from '../../data/heroConfig';
import { HeroCTA } from './HeroCTA';

interface HeroContentProps {
  onOpenConsultation: () => void;
}

export const HeroContent: React.FC<HeroContentProps> = ({ onOpenConsultation }) => {
  return (
    <div className="w-full lg:w-[52%] xl:w-[50%] max-w-[540px] xl:max-w-[580px] z-[5] flex flex-col justify-center text-left py-8 lg:py-14 shrink-0">
      {/* 
        Eyebrow Badge:
        Height ~38px, pill shape, subtle translucent glass border, small gold scale icon, cream text
      */}
      <div className="inline-flex items-center gap-2.5 px-4 h-[38px] rounded-full bg-white/12 backdrop-blur-md border border-white/20 text-[#FDF0D5] text-xs sm:text-sm font-medium tracking-wide mb-5 sm:mb-6 w-fit shadow-xs">
        <Scale className="w-4 h-4 text-[#C6A15B] shrink-0" aria-hidden="true" />
        <span>{heroConfig.eyebrow.text}</span>
      </div>

      {/* 
        Large Editorial Serif Headline:
        Desktop 58–72px, Tablet 48–56px, Mobile 38–44px.
        Color: #FDF0D5, tight leading, authoritative & elegant.
      */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.8rem] xl:text-[4.2rem] font-serif font-bold text-[#FDF0D5] leading-[1.09] tracking-tight mb-5 sm:mb-6 text-balance">
        {heroConfig.headline.line1} <br />
        {heroConfig.headline.line2} <br />
        {heroConfig.headline.line3}
      </h1>

      {/* 
        Supporting Text:
        Max-width 480px, cream text, 16–18px desktop, comfortable line-height.
      */}
      <p className="text-base sm:text-lg text-[#FDF0D5]/85 max-w-[480px] leading-relaxed mb-7 sm:mb-9 font-normal">
        {heroConfig.supportingText}
      </p>

      {/* CTA Buttons */}
      <HeroCTA onOpenConsultation={onOpenConsultation} />
    </div>
  );
};
