import React from 'react';
import { ShieldCheck, MessageSquare, Compass, Scale } from 'lucide-react';
import { FIRM_CONFIG } from '../data/firmData';

export const WhyChooseUs: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#5B1111]" />,
    MessageSquare: <MessageSquare className="w-6 h-6 text-[#5B1111]" />,
    Compass: <Compass className="w-6 h-6 text-[#5B1111]" />,
    Scale: <Scale className="w-6 h-6 text-[#5B1111]" />,
  };

  return (
    <section id="approach" className="py-20 md:py-28 bg-[#FFF9EC] rounded-[32px] sm:rounded-[40px] mx-2 sm:mx-4 md:mx-6 my-6 border border-[#5B1111]/10 relative overflow-hidden shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-6 bg-[#C6A15B]" aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#5B1111]">
              OUR APPROACH
            </span>
            <span className="h-[1px] w-6 bg-[#C6A15B]" aria-hidden="true" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#171313] leading-tight mb-4">
            A Better Legal Experience
          </h2>

          <p className="text-base text-[#171313]/80 leading-relaxed font-normal">
            We hold ourselves to elevated procedural and client-care standards, ensuring that engaging legal counsel provides reassurance, transparency, and strategic leverage.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FIRM_CONFIG.benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-[#FDF0D5] p-8 rounded-xl border border-[#5B1111]/15 hover:border-[#5B1111]/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon Container with subtle gold border */}
                <div className="w-12 h-12 rounded-lg bg-[#FFF9EC] border border-[#C6A15B]/40 flex items-center justify-center mb-6 group-hover:bg-[#5B1111]/10 transition-colors">
                  {iconMap[benefit.icon] || <ShieldCheck className="w-6 h-6 text-[#5B1111]" />}
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif font-bold text-[#171313] group-hover:text-[#5B1111] transition-colors mb-3">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#171313]/75 leading-relaxed font-normal">
                  {benefit.description}
                </p>
              </div>

              {/* Bottom decorative gold touch */}
              <div className="mt-6 pt-4 border-t border-[#5B1111]/10 flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider text-[#6D6260] font-semibold">
                  Standard of Practice
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
