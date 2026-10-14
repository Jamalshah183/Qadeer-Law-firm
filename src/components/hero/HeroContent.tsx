import React from 'react';
import { heroConfig } from '../../data/heroConfig';
import { HeroCTA } from './HeroCTA';

interface HeroContentProps {
  onOpenConsultation: () => void;
}

export const HeroContent: React.FC<HeroContentProps> = ({ onOpenConsultation }) => {
  return (
    <div className="w-full lg:w-[53%] xl:w-[52%] px-6 sm:px-10 lg:pl-12 lg:pr-2 xl:pr-4 z-[5] flex justify-center lg:justify-end pt-0 pb-4 sm:pb-6 shrink-0 self-start">
      <div className="w-full max-w-[580px] xl:max-w-[620px] flex flex-col justify-start text-left">
      {/* 
        1. Main Positioning Headline:
        LOCAL EXPERTISE. GLOBAL COUNSEL.
      */}
      <h1 className="text-[2.3rem] sm:text-[3.1rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.45rem] font-sans font-bold text-white leading-[1.03] tracking-[-0.02em] mb-3 sm:mb-4 drop-shadow-sm">
        <span className="block whitespace-nowrap font-sans">{heroConfig.headline.line1}</span>
        <span className="block whitespace-nowrap text-[#E5B842] italic font-semibold font-sans">
          {heroConfig.headline.line2}
        </span>
      </h1>

      {/* 
        2. Core Practice Positioning Line:
        Advocates • Litigation • Legal Advisory
      */}
      <div className="flex items-center mb-4 sm:mb-5">
        <p className="font-sans text-[11.5px] sm:text-[13px] lg:text-[13.5px] uppercase tracking-[0.14em] text-white font-bold">
          {heroConfig.headline.line3}
        </p>
      </div>

      {/* 
        4. Short Explanatory Sentence:
        Explaining that the chambers provides litigation, advisory, and local-counsel services in Pakistan.
      */}
      <p className="font-sans text-[15px] sm:text-[16.5px] lg:text-[17px] text-white/95 max-w-[520px] leading-[1.6] sm:leading-[1.65] mb-6 sm:mb-8 font-normal">
        {heroConfig.supportingText}
      </p>

      {/* CTA Buttons */}
      <HeroCTA onOpenConsultation={onOpenConsultation} />
      </div>
    </div>
  );
};
