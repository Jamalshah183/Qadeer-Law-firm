import React, { useState } from 'react';
import { UserCheck, Compass, Scale, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { FIRM_CONFIG, PracticeArea } from '../data/firmData';
import { PracticeModal } from './PracticeModal';

interface AboutSectionProps {
  onOpenConsultation: () => void;
  onSelectPracticeForConsultation: (practiceTitle: string) => void;
}

const ABOUT_KEYPOINTS = [
  {
    title: 'Direct Senior Counsel',
    Icon: UserCheck,
  },
  {
    title: 'Clear Legal Strategy',
    Icon: Compass,
  },
  {
    title: 'Courtroom & Advisory Excellence',
    Icon: Scale,
  },
  {
    title: 'Strict Client Confidentiality',
    Icon: ShieldCheck,
  },
];

export const AboutSection: React.FC<AboutSectionProps> = ({
  onSelectPracticeForConsultation,
}) => {
  const [selectedPractice, setSelectedPractice] = useState<PracticeArea | null>(null);

  return (
    <section
      id="about"
      className="relative z-[10] -mt-16 sm:-mt-20 lg:-mt-24 xl:-mt-28 pt-20 sm:pt-24 md:pt-28 pb-28 md:pb-36 bg-[#FFF9EC] rounded-t-[50px] sm:rounded-t-[65px] lg:rounded-t-[80px] border-t-2 border-[#5B1111]/25 shadow-[0_-25px_50px_-15px_rgba(62,8,8,0.25)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Distinguished Counsel Photograph */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div
                className="absolute -top-3 -left-3 w-full h-full border border-[#C6A15B]/50 rounded-2xl -z-10"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-3 -right-3 w-full h-full bg-[#5B1111]/10 rounded-2xl -z-10"
                aria-hidden="true"
              />

              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#5B1111]/20 aspect-[4/3] bg-[#3E0808] group">
                <img
                  src={FIRM_CONFIG.images.about}
                  alt="Legal counsel reviewing case documents at Qadeer Law Chamber"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E0808]/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* 
            Right Column: Strictly 2 Fonts & 2 Sizes
            - Font 1 / Size 1: font-serif text-2xl sm:text-3xl (Headings & Metric Values)
            - Font 2 / Size 2: font-sans text-sm sm:text-base (Keypoints, Labels & CTA)
          */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-7">
            {/* Heading (Cormorant Garamond, 600) */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] font-semibold text-[#171313] tracking-[-0.015em] leading-[1.12]">
              About Qadeer Law Chamber —{' '}
              <span className="italic font-medium text-[#5B1111]">
                Trusted Counsel & Strategic Representation
              </span>
            </h2>

            {/* Focused Keypoints List (Manrope, 600) */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ABOUT_KEYPOINTS.map((point, index) => {
                const IconComponent = point.Icon;
                return (
                  <li
                    key={index}
                    className="flex items-center gap-3 font-sans text-[15px] sm:text-[16px] text-[#171313] leading-[1.5]"
                  >
                    <span className="w-8 h-8 rounded-full bg-[#5B1111] text-[#FDF0D5] flex items-center justify-center shrink-0 shadow-xs">
                      <IconComponent className="w-4 h-4 text-[#C6A15B]" aria-hidden="true" />
                    </span>
                    <span className="font-semibold tracking-[0.01em] text-[#171313]">{point.title}</span>
                  </li>
                );
              })}
            </ul>

            {/* Burgundy Firm Metrics Container (Cormorant Garamond 600 for Numbers, Manrope 500 for Labels) */}
            <div className="bg-[#5B1111] text-[#FDF0D5] p-5 sm:p-6 rounded-2xl border border-[#C6A15B]/30 shadow-lg relative overflow-hidden">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 items-stretch">
                {FIRM_CONFIG.statistics.map((stat) => (
                  <div
                    key={stat.id}
                    className="flex flex-col items-center justify-center text-center p-3.5 sm:p-4 rounded-xl bg-[#3E0808]/40 border border-[#C6A15B]/25 gap-2.5"
                  >
                    <div className="font-serif text-[2.5rem] sm:text-[2.85rem] lg:text-[3.1rem] font-semibold text-[#FDF0D5] leading-none tracking-[-0.02em] lining-nums tabular-nums flex items-center justify-center">
                      {stat.value}
                    </div>
                    <div className="w-6 h-[1.5px] bg-[#C6A15B] shrink-0" aria-hidden="true" />
                    <div className="font-sans text-[13px] sm:text-[14px] font-medium tracking-[0.02em] text-[#FDF0D5]/95 leading-[1.4] flex items-center justify-center">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Merged Practice Areas Block — Editorial List Design */}
        <div id="practice-areas" className="mt-20 sm:mt-24 pt-4 max-w-5xl mx-auto">
          <h2 className="text-center font-serif text-3xl sm:text-4xl lg:text-[3.25rem] font-medium text-[#171313] tracking-[-0.02em] leading-[1.08] mb-10 sm:mb-14">
            My Areas Of <span className="text-[#C6A15B]">Expertise</span>
          </h2>

          <div className="divide-y divide-[#171313]/15 border-b border-[#171313]/15">
            {FIRM_CONFIG.practiceAreas.map((practice) => (
              <div
                key={practice.id}
                onClick={() => setSelectedPractice(practice)}
                className="group py-6 sm:py-8 flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-10 cursor-pointer transition-colors"
              >
                {/* Left Column: Serif Practice Area Title (Cormorant Garamond, 600) */}
                <h3 className="md:w-[36%] lg:w-[34%] shrink-0 font-serif text-2xl sm:text-[1.85rem] font-semibold tracking-[-0.01em] leading-[1.15] text-[#171313] group-hover:text-[#5B1111] transition-colors">
                  {practice.title}
                </h3>

                {/* Middle Column: Concise 2-Line Description (Manrope, 400) */}
                <p className="flex-1 max-w-xl font-sans text-[15px] sm:text-[16px] text-[#6D6260] leading-[1.65] font-normal">
                  {practice.shortDesc}
                </p>

                {/* Right Column: Minimalist Up-Right Arrow */}
                <div className="shrink-0 self-end md:self-center pl-2">
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#171313] group-hover:text-[#5B1111] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Practice Area Detail Modal */}
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
