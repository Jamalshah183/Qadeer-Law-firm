import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FIRM_CONFIG, PracticeArea } from '../data/firmData';
import { PracticeModal } from './PracticeModal';

interface PracticeAreasProps {
  onSelectPracticeForConsultation: (practiceTitle: string) => void;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({
  onSelectPracticeForConsultation,
}) => {
  const [selectedPractice, setSelectedPractice] = useState<PracticeArea | null>(null);

  return (
    <section id="practice-areas" className="py-20 md:py-28 bg-[#FDF0D5] rounded-[32px] sm:rounded-[40px] mx-2 sm:mx-4 md:mx-6 my-6 border border-[#5B1111]/10 shadow-xs relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-6 bg-[#C6A15B]" aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#5B1111]">
              OUR PRACTICE AREAS
            </span>
            <span className="h-[1px] w-6 bg-[#C6A15B]" aria-hidden="true" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#171313] leading-tight mb-4">
            Legal Expertise.{' '}
            <span className="italic font-normal text-[#5B1111]">
              Personal Attention.
            </span>
          </h2>

          <p className="text-base text-[#171313]/80 leading-relaxed font-normal">
            We provide structured legal advisory and court representation across key substantive disciplines, handling every brief with disciplined preparation and discrete client focus.
          </p>
        </div>

        {/* 6 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FIRM_CONFIG.practiceAreas.map((practice) => (
            <div
              key={practice.id}
              onClick={() => setSelectedPractice(practice)}
              className="group cursor-pointer bg-[#FFF9EC] rounded-xl overflow-hidden border border-[#5B1111]/20 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Practice Card Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#3E0808]">
                  <img
                    src={practice.image}
                    alt={practice.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle warm gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3E0808]/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Corner gold decorative badge indicator */}
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-[#FFF9EC]/90 backdrop-blur-xs flex items-center justify-center text-[#5B1111] group-hover:bg-[#5B1111] group-hover:text-[#FDF0D5] transition-colors shadow-xs">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Subtle decorative line that turns burgundy on hover */}
                  <div className="w-8 h-[2px] bg-[#C6A15B] group-hover:w-16 group-hover:bg-[#5B1111] transition-all duration-300 mb-3" />

                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#171313] group-hover:text-[#5B1111] transition-colors mb-2.5">
                    {practice.title}
                  </h3>

                  <p className="text-sm text-[#171313]/75 leading-relaxed font-normal mb-4">
                    {practice.shortDesc}
                  </p>
                </div>
              </div>

              {/* Card Footer / Action Link */}
              <div className="px-6 pb-6 pt-0 border-t border-[#5B1111]/10 flex items-center justify-between text-xs font-semibold text-[#5B1111] group-hover:text-[#3E0808]">
                <span className="uppercase tracking-wider">Explore Scope & Counsel</span>
                <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>View Details</span>
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom prompt */}
        <div className="mt-14 text-center">
          <p className="text-xs uppercase tracking-widest text-[#6D6260] font-semibold mb-3">
            HAVE A MATTER OUTSIDE THESE CORE HEADINGS?
          </p>
          <button
            type="button"
            onClick={() => onSelectPracticeForConsultation('General Advisory & Special Brief')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#5B1111] hover:text-[#3E0808] underline underline-offset-4 decoration-[#C6A15B]"
          >
            Inquire about tailored appellate or constitutional representation →
          </button>
        </div>
      </div>

      {/* Detail Modal */}
      <PracticeModal
        practice={selectedPractice}
        onClose={() => setSelectedPractice(null)}
        onConsult={(title) => {
          setSelectedPractice(null);
          onSelectPracticeForConsultation(title);
        }}
      />
    </section>
  );
};
