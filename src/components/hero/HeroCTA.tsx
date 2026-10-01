import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { heroConfig } from '../../data/heroConfig';

interface HeroCTAProps {
  onOpenConsultation: () => void;
}

export const HeroCTA: React.FC<HeroCTAProps> = ({ onOpenConsultation }) => {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 pt-2">
      {/* 
        Primary CTA Button: Contact Now
        Background: #C6A15B, Text: Dark, Circular white icon container on right with arrow
      */}
      <a
        href={heroConfig.primaryCTA.href}
        className="group inline-flex items-center justify-between sm:justify-center gap-4 pl-7 pr-3 h-[52px] rounded-full bg-[#C6A15B] hover:bg-[#b8924b] text-[#171313] font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
        style={{ minHeight: '52px' }}
      >
        <span className="tracking-wide">{heroConfig.primaryCTA.label}</span>
        <span className="w-8 h-8 rounded-full bg-[#FDF0D5] text-[#171313] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 shadow-xs">
          <ArrowRight className="w-4 h-4" />
        </span>
      </a>

      {/* 
        Secondary CTA Button: Free Consultation
        Background: #FDF0D5, Text: #5B1111, Circular gold icon container on right with phone
      */}
      <button
        type="button"
        onClick={onOpenConsultation}
        className="group inline-flex items-center justify-between sm:justify-center gap-4 pl-7 pr-3 h-[52px] rounded-full bg-[#FDF0D5] hover:bg-[#FFF9EC] text-[#5B1111] font-semibold text-sm sm:text-base border border-[#5B1111]/15 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
        style={{ minHeight: '52px' }}
      >
        <span className="tracking-wide">{heroConfig.secondaryCTA.label}</span>
        <span className="w-8 h-8 rounded-full bg-[#C6A15B] text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-xs">
          <Phone className="w-3.5 h-3.5" />
        </span>
      </button>
    </div>
  );
};
