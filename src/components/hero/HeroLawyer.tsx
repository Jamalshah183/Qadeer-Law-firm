import React from 'react';
import { heroConfig } from '../../data/heroConfig';

export const HeroLawyer: React.FC = () => {
  return (
    <div
      className="relative w-full lg:w-[48%] xl:w-[46%] max-w-[400px] sm:max-w-[460px] lg:max-w-[540px] xl:max-w-[600px] flex items-end justify-center lg:justify-start z-[6] pointer-events-none select-none mt-6 lg:mt-0 lg:-ml-6 xl:-ml-10"
      style={{
        height: '100%',
      }}
    >
      <div className="relative w-full flex items-end justify-center lg:justify-start">
        {/* Foreground Lawyer Cutout Image */}
        <img
          src={heroConfig.lawyerImage}
          alt="Distinguished Advocate at Qadeer Law Firm"
          className="w-full h-auto max-h-[75vh] sm:max-h-[80vh] lg:max-h-[85vh] xl:max-h-[90vh] object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)] pointer-events-auto transform translate-y-3 lg:translate-y-5"
          loading="eager"
        />
      </div>
    </div>
  );
};
