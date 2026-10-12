import React from 'react';
import { heroConfig } from '../../data/heroConfig';

export const HeroLawyer: React.FC = () => {
  return (
    <div
      className="relative lg:absolute lg:top-0 lg:left-[63%] xl:left-[62%] lg:-translate-x-1/2 w-full lg:w-auto flex items-start justify-center z-[6] pointer-events-none select-none mt-2 sm:mt-6 lg:mt-0 -mb-24 sm:-mb-20 lg:mb-0 translate-x-2 sm:translate-x-0 -translate-y-3 sm:translate-y-0"
    >
      <div className="relative flex items-start justify-center">
        {/* 
          Foreground Statue of Justice Cutout:
          - Centered on the 58% split boundary between the left burgundy and right cream containers
          - Top edge (object-top, top-0) aligned level with the top of the hero writing, safely below the navbar
          - Increased height extends downward so the lower pedestal tucks behind the second section (AboutSection, z-10)
        */}
        <img
          src={heroConfig.lawyerImage}
          alt="Statue of Lady Justice - Qadeer Legal Chambers"
          referrerPolicy="no-referrer"
          className="h-[54vh] sm:h-[72vh] lg:h-[88vh] xl:h-[92vh] min-h-[400px] sm:min-h-[500px] lg:min-h-[720px] w-auto max-w-[85vw] sm:max-w-[88vw] lg:max-w-none object-contain object-top drop-shadow-[0_24px_42px_rgba(0,0,0,0.45)] pointer-events-auto transition-transform duration-300"
          loading="eager"
        />
      </div>
    </div>
  );
};
