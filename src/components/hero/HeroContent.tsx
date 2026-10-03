import React from 'react';
import { Scale } from 'lucide-react';
import { heroConfig } from '../../data/heroConfig';
import { HeroCTA } from './HeroCTA';

interface HeroContentProps {
  onOpenConsultation: () => void;
}

export const HeroContent: React.FC<HeroContentProps> = ({ onOpenConsultation }) => {
  return (
    <div className="w-full lg:w-[52%] xl:w-[51%] px-6 sm:px-10 lg:pl-12 lg:pr-2 xl:pr-4 z-[5] flex justify-center lg:justify-end pt-0 pb-6 shrink-0 self-start">
      <div className="w-full max-w-[520px] xl:max-w-[550px] flex flex-col justify-start text-left">
      {/* 
        Eyebrow Badge:
        Height ~40px, pill shape, subtle translucent glass border, small gold scale icon, cream text
      */}
      <div className="inline-flex items-center gap-2.5 px-4.5 h-[40px] rounded-full bg-white/12 backdrop-blur-md border border-white/20 text-[#FDF0D5] text-xs sm:text-sm font-semibold tracking-wide mb-5 sm:mb-6 w-fit shadow-xs">
        <Scale className="w-4 h-4 text-[#C6A15B] shrink-0" aria-hidden="true" />
        <span>{heroConfig.eyebrow.text}</span>
      </div>

      {/* 
        Editorial Serif Headline:
        Balanced size: Mobile 36-40px, Tablet 50-54px, Desktop 64–74px.
        Noticeably larger than original, but moderated from the oversized scale.
        Color: #FDF0D5, tight leading, authoritative & elegant.
      */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.95rem] xl:text-[4.35rem] 2xl:text-[4.6rem] font-serif font-bold text-[#FDF0D5] leading-[1.07] tracking-tight mb-5 sm:mb-6 text-balance">
        {heroConfig.headline.line1} <br />
        {heroConfig.headline.line2} <br />
        {heroConfig.headline.line3}
      </h1>

      {/* 
        Supporting Text:
        17–19px desktop, comfortable line-height.
      */}
      <p className="text-base sm:text-lg lg:text-[1.125rem] text-[#FDF0D5]/90 max-w-[500px] leading-relaxed mb-7 sm:mb-8 font-normal">
        {heroConfig.supportingText}
      </p>

      {/* CTA Buttons */}
      <HeroCTA onOpenConsultation={onOpenConsultation} />
      </div>
    </div>
  );
};
