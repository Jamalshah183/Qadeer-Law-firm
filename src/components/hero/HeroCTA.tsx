import React from 'react';
import { ArrowRight, Globe } from 'lucide-react';
import { heroConfig } from '../../data/heroConfig';

interface HeroCTAProps {
  onOpenConsultation: () => void;
}

export const HeroCTA: React.FC<HeroCTAProps> = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-4 pt-1 sm:pt-3">
      {/* 
        Primary CTA Button: OUR PRACTICE AREAS -> #practice-areas
      */}
      <a
        href={heroConfig.primaryCTA.href}
        className="group inline-flex items-center justify-between sm:justify-center gap-2.5 sm:gap-3.5 pl-5 sm:pl-6 pr-2 sm:pr-2.5 h-[46px] sm:h-[58px] w-full max-w-[260px] sm:w-auto sm:max-w-none rounded-full bg-[#E5B842] hover:bg-[#d4a833] text-[#0F172A] font-sans font-bold text-[12px] sm:text-[13px] whitespace-nowrap shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
      >
        <span className="tracking-[0.05em] uppercase">{heroConfig.primaryCTA.label}</span>
        <span className="w-7.5 h-7.5 sm:w-9 sm:h-9 rounded-full bg-white text-[#0F172A] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 shadow-xs shrink-0">
          <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
        </span>
      </a>

      {/* 
        Secondary CTA Button: INTERNATIONAL COUNSEL -> #international-counsel
      */}
      <a
        href={heroConfig.secondaryCTA.action}
        className="group inline-flex items-center justify-between sm:justify-center gap-2.5 sm:gap-3.5 pl-5 sm:pl-6 pr-2 sm:pr-2.5 h-[46px] sm:h-[58px] w-full max-w-[260px] sm:w-auto sm:max-w-none rounded-full bg-white hover:bg-[#F8FAFC] text-[#9B112C] font-sans font-bold text-[12px] sm:text-[13px] whitespace-nowrap border border-white/50 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
      >
        <span className="tracking-[0.05em] uppercase">{heroConfig.secondaryCTA.label}</span>
        <span className="w-7.5 h-7.5 sm:w-9 sm:h-9 rounded-full bg-[#9B112C] text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-xs shrink-0">
          <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </span>
      </a>
    </div>
  );
};
