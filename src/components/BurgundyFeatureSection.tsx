import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface BurgundyFeatureSectionProps {
  onOpenConsultation: () => void;
}

export const BurgundyFeatureSection: React.FC<BurgundyFeatureSectionProps> = ({
  onOpenConsultation,
}) => {
  return (
    <section className="bg-[#5B1111] text-[#FDF0D5] py-20 md:py-28 rounded-[32px] sm:rounded-[40px] mx-2 sm:mx-4 md:mx-6 my-6 relative overflow-hidden border border-[#C6A15B]/30 shadow-xl">
      {/* Subtle gold ornamental corner borders */}
      <div className="absolute top-6 left-6 w-12 h-12 border-t border-l border-[#C6A15B]/40 pointer-events-none hidden sm:block" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-b border-r border-[#C6A15B]/40 pointer-events-none hidden sm:block" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="h-[1px] w-8 bg-[#C6A15B]" aria-hidden="true" />
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C6A15B]">
            PURPOSEFUL ADVOCACY
          </span>
          <span className="h-[1px] w-8 bg-[#C6A15B]" aria-hidden="true" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FDF0D5] tracking-tight mb-6">
          Legal Guidance With Purpose.
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-lg text-[#FDF0D5]/85 max-w-2xl mx-auto leading-relaxed font-normal mb-10">
          We maintain an uncompromising dedication to clear communication, strategic legal advice, and client-focused representation. When critical business assets, personal integrity, or family rights are at stake, our counsel brings clarity and deliberate direction.
        </p>

        {/* CTA Button: Cream background with burgundy text */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onOpenConsultation}
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#FDF0D5] hover:bg-[#FFF9EC] text-[#5B1111] text-xs uppercase tracking-wider font-bold rounded shadow-lg hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
          >
            <span>Schedule a Consultation</span>
            <ArrowRight className="w-4 h-4 text-[#5B1111] transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-transparent border border-[#FDF0D5]/30 hover:border-[#FDF0D5] text-[#FDF0D5] text-xs uppercase tracking-wider font-semibold rounded transition-colors"
          >
            <span>Direct Chambers Inquiries</span>
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#FDF0D5]/70">
          <ShieldCheck className="w-4 h-4 text-[#C6A15B]" />
          <span>Initial consultation includes preliminary brief review & conflict check.</span>
        </div>
      </div>
    </section>
  );
};
