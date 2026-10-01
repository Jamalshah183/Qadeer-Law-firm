import React from 'react';
import { FIRM_CONFIG } from '../data/firmData';

export const StatsBand: React.FC = () => {
  return (
    <section className="bg-[#5B1111] text-[#FDF0D5] py-14 sm:py-16 rounded-[32px] sm:rounded-[40px] mx-2 sm:mx-4 md:mx-6 my-6 relative border border-[#C6A15B]/30 shadow-xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-[#C6A15B]/25">
          {FIRM_CONFIG.statistics.map((stat, idx) => (
            <div
              key={stat.id}
              className={`flex flex-col items-center text-center px-4 ${
                idx > 0 && idx % 2 === 0 ? 'pt-6 md:pt-0' : ''
              } ${idx === 1 ? 'pt-0' : ''}`}
            >
              {/* Value with Tabular Numerals */}
              <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FDF0D5] tracking-tight tabular-nums mb-1">
                {stat.value}
              </div>

              {/* Gold tiny accent line */}
              <div className="w-6 h-[1.5px] bg-[#C6A15B] my-2" aria-hidden="true" />

              {/* Label */}
              <div className="text-xs sm:text-sm font-medium tracking-wide uppercase text-[#FDF0D5]/90 mb-1">
                {stat.label}
              </div>

              {/* Sub-description */}
              {stat.description && (
                <div className="text-[11px] text-[#FDF0D5]/70 max-w-[200px] leading-tight font-normal hidden sm:block">
                  {stat.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
