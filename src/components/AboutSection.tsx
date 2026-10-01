import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { FIRM_CONFIG } from '../data/firmData';

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section
      id="about"
      className="relative z-[10] -mt-12 sm:-mt-16 lg:-mt-24 pt-20 sm:pt-24 md:pt-28 pb-20 md:pb-28 bg-[#FFF9EC] rounded-t-[50px] sm:rounded-t-[65px] lg:rounded-t-[80px] border-t-2 border-[#5B1111]/25 shadow-[0_-25px_50px_-15px_rgba(62,8,8,0.25)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Distinguished Counsel Photograph */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Gold border accent offset */}
              <div
                className="absolute -top-3 -left-3 w-full h-full border border-[#C6A15B]/50 rounded-2xl -z-10"
                aria-hidden="true"
              />

              {/* Burgundy base backing */}
              <div
                className="absolute -bottom-3 -right-3 w-full h-full bg-[#5B1111]/10 rounded-2xl -z-10"
                aria-hidden="true"
              />

              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#5B1111]/20 aspect-[4/3] bg-[#3E0808] group">
                <img
                  src={FIRM_CONFIG.images.about}
                  alt="Legal counsel reviewing case documents at Qadeer Law Firm"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E0808]/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-[#FDF0D5] font-serif italic">
                  Chambers Consultation & Diligent Brief Review
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Editable Statistics */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[1px] w-6 bg-[#C6A15B]" aria-hidden="true" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#5B1111]">
                ABOUT QADEER LAW FIRM
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#171313] leading-[1.15] mb-6">
              Trusted Counsel.{' '}
              <span className="italic font-normal text-[#5B1111]">
                Strategic Representation.
              </span>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-base text-[#171313]/85 leading-relaxed font-normal mb-8">
              <p>
                At Qadeer Law Firm, we believe that effective legal representation is founded upon meticulous preparation, sound legal doctrine, and an uncompromising commitment to our clients’ best interests. We represent individuals, family offices, and commercial enterprises with equal rigor.
              </p>
              <p>
                Every matter entrusted to our chambers receives deliberate, partner-led focus. Rather than applying standard formulas, our advocates conduct in-depth analysis of evidence, examine court precedents, and structure a custom legal roadmap tailored to realistic outcomes.
              </p>
            </div>

            {/* Values / Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {[
                'Individualized case strategy & procedural clarity',
                'Comprehensive pre-litigation risk assessments',
                'Ethical, confidential, and partner-driven advocacy',
                'Transparent billing & structured fee schedules',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#5B1111]/10 flex items-center justify-center mt-1 shrink-0">
                    <Check className="w-3 h-3 text-[#5B1111]" />
                  </div>
                  <span className="text-xs sm:text-sm text-[#171313]/90 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Editable Statistics Grid under text */}
            <div className="pt-6 border-t border-[#5B1111]/15">
              <div className="text-[11px] uppercase tracking-wider text-[#6D6260] font-semibold mb-3 flex items-center justify-between">
                <span>Firm Metrics</span>
                <span className="text-[10px] text-[#5B1111] italic lowercase font-normal">
                  (Editable firm records)
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-[#FDF0D5] border border-[#5B1111]/15">
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#5B1111] tabular-nums">
                    {FIRM_CONFIG.statistics[0].value}
                  </div>
                  <div className="text-xs font-semibold text-[#171313] mt-1">
                    {FIRM_CONFIG.statistics[0].label}
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-[#FDF0D5] border border-[#5B1111]/15">
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#5B1111] tabular-nums">
                    {FIRM_CONFIG.statistics[1].value}
                  </div>
                  <div className="text-xs font-semibold text-[#171313] mt-1">
                    {FIRM_CONFIG.statistics[1].label}
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-[#FDF0D5] border border-[#5B1111]/15">
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#5B1111] tabular-nums">
                    {FIRM_CONFIG.statistics[3].value}
                  </div>
                  <div className="text-xs font-semibold text-[#171313] mt-1">
                    {FIRM_CONFIG.statistics[3].label}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#5B1111] hover:text-[#3E0808] group"
                >
                  <span>Schedule Private Chambers Meeting</span>
                  <ArrowRight className="w-4 h-4 text-[#C6A15B] transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
