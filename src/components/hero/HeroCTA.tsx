import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { heroConfig } from '../../data/heroConfig';

interface HeroCTAProps {
  onOpenConsultation: () => void;
}

export const HeroCTA: React.FC<HeroCTAProps> = ({ onOpenConsultation }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-5 pt-1 sm:pt-3">
      {/* 
        Primary CTA Button: Contact Now
        Mobile-reduced size, Desktop unchanged
      */}
      <a
        href={heroConfig.primaryCTA.href}
        className="group inline-flex items-center justify-between sm:justify-center gap-3 sm:gap-4.5 pl-5 sm:pl-8 pr-2 sm:pr-3.5 h-[46px] sm:h-[62px] w-full max-w-[240px] sm:w-auto sm:max-w-none rounded-full bg-[#C6A15B] hover:bg-[#b8924b] text-[#171313] font-bold text-sm sm:text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
      >
        <span className="tracking-wide">{heroConfig.primaryCTA.label}</span>
        <span className="w-7.5 h-7.5 sm:w-10 sm:h-10 rounded-full bg-[#FDF0D5] text-[#171313] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 shadow-xs">
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </span>
      </a>

      {/* 
        Secondary CTA Button: Free Consultation
        Mobile-reduced size, Desktop unchanged
      */}
      <button
        type="button"
        onClick={onOpenConsultation}
        className="group inline-flex items-center justify-between sm:justify-center gap-3 sm:gap-4.5 pl-5 sm:pl-8 pr-2 sm:pr-3.5 h-[46px] sm:h-[62px] w-full max-w-[240px] sm:w-auto sm:max-w-none rounded-full bg-[#FDF0D5] hover:bg-[#FFF9EC] text-[#5B1111] font-bold text-sm sm:text-lg border border-[#5B1111]/15 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
      >
        <span className="tracking-wide">{heroConfig.secondaryCTA.label}</span>
        <span className="w-7.5 h-7.5 sm:w-10 sm:h-10 rounded-full bg-[#C6A15B] text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-xs">
          <Phone className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" />
        </span>
      </button>
    </div>
  );
};
