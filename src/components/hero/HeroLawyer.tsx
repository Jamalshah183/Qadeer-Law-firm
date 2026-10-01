import React from 'react';
import { heroConfig } from '../../data/heroConfig';

export const HeroLawyer: React.FC = () => {
  return (
    <div
      className="relative w-full lg:w-[49%] xl:w-[47%] max-w-[420px] sm:max-w-[490px] lg:max-w-[580px] xl:max-w-[650px] 2xl:max-w-[690px] flex items-end justify-center lg:justify-start z-[6] pointer-events-none select-none mt-6 lg:mt-0 lg:-ml-6 xl:-ml-10"
      style={{
        height: '100%',
      }}
    >
      <div className="relative w-full flex items-end justify-center lg:justify-start">
        {/* Foreground Lawyer Cutout Image - Tuned sweet spot */}
        <img
          src={heroConfig.lawyerImage}
          alt="Distinguished Advocate at Qadeer Law Firm"
          className="w-full h-auto max-h-[78vh] sm:max-h-[84vh] lg:max-h-[88vh] xl:max-h-[91vh] object-contain object-bottom drop-shadow-[0_22px_38px_rgba(0,0,0,0.36)] pointer-events-auto transform translate-y-3 lg:translate-y-5 scale-100 lg:scale-104 origin-bottom transition-transform duration-300"
          loading="eager"
        />
      </div>
    </div>
  );
};
