import React from 'react';
import { Globe, Compass, Scale, ShieldCheck } from 'lucide-react';
import { FIRM_CONFIG } from '../data/firmData';

interface AboutSectionProps {
  onOpenConsultation: () => void;
  onSelectPracticeForConsultation: (practiceTitle: string) => void;
}

const ABOUT_KEYPOINTS = [
  {
    title: 'Established Pakistani Practice',
    subtitle: 'Chambers in Sialkot & Lahore appearing across Pakistan',
    Icon: Scale,
  },
  {
    title: 'Litigation & Legal Advisory',
    subtitle: 'Courtroom advocacy, legal opinions & precision drafting',
    Icon: Compass,
  },
  {
    title: 'Domestic, Overseas & Foreign Clients',
    subtitle: 'Serving individuals, enterprises & international firms',
    Icon: Globe,
  },
  {
    title: 'Confidential & Privileged Counsel',
    subtitle: 'Strict bar ethics, transparency & partner attention',
    Icon: ShieldCheck,
  },
];

const CREDIBILITY_PILLARS = [
  {
    number: '01',
    question: 'Who We Are',
    titleMain: 'Established Pakistani',
    titleAccent: 'Legal Practice',
    description:
      'Operating from chambers in Sialkot and Lahore, Qadeer Legal Chambers brings disciplined procedural command before High Courts, District & Sessions Courts, and specialized tribunals.',
    footerMeta: 'Sialkot · Lahore · High Courts',
    Icon: Scale,
  },
  {
    number: '02',
    question: 'What We Excel At',
    titleMain: 'Litigation & Legal',
    titleAccent: 'Advisory in Pakistan',
    description:
      'We combine trial and appellate litigation with authoritative Pakistani-law opinions, corporate and commercial structuring, property due diligence, and private-client estate representation.',
    footerMeta: 'Trial · Appellate · Advisory',
    Icon: Compass,
  },
  {
    number: '03',
    question: 'Who We Represent',
    titleMain: 'Pakistani, Overseas &',
    titleAccent: 'International Clients',
    description:
      'We represent Pakistani citizens, commercial businesses, non-resident overseas Pakistanis managing assets or disputes, and foreign law firms instructing local counsel in Pakistan.',
    footerMeta: 'Domestic · Overseas · Global',
    Icon: Globe,
  },
];

export const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <section
      id="about"
      className="relative z-[10] -mt-16 sm:-mt-20 lg:-mt-24 xl:-mt-28 pt-20 sm:pt-24 md:pt-28 pb-28 md:pb-36 bg-[#FFF9EC] rounded-t-[50px] sm:rounded-t-[65px] lg:rounded-t-[80px] border-t-2 border-[#5B1111]/25 shadow-[0_-25px_50px_-15px_rgba(62,8,8,0.25)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Distinguished Chambers Photograph */}
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

              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#5B1111]/20 aspect-[4/3.2] bg-[#3E0808] group">
                <img
                  src={FIRM_CONFIG.images.about}
                  alt="Legal counsel reviewing case documents at Qadeer Legal Chambers"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E0808]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-5 right-5 text-left">
                  <div className="font-sans text-[11px] uppercase tracking-[0.14em] text-[#C6A15B] font-bold">
                    Sialkot · Lahore · Pakistan
                  </div>
                  <div className="font-serif text-lg text-[#FDF0D5] font-medium">
                    High Court & District Court Chambers
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About & Credibility Overview */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-6">
            <div>
              <div className="font-sans text-[11px] sm:text-[12px] uppercase tracking-[0.16em] font-bold text-[#5B1111] mb-2">
                ABOUT THE CHAMBERS · CREDIBILITY & MANDATE
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] font-semibold text-[#171313] tracking-[-0.015em] leading-[1.12] mb-3.5">
                About Qadeer Legal Chambers —{' '}
                <span className="italic font-medium text-[#5B1111]">
                  Established Pakistani Legal Practice
                </span>
              </h2>
              <p className="font-sans text-[15px] sm:text-[16px] text-[#6D6260] leading-[1.65] font-normal">
                Qadeer Legal Chambers provides strategic courtroom litigation, Pakistani-law advisory, and local-counsel representation across Pakistan—serving domestic clients, commercial businesses, overseas Pakistanis, and instructing international law firms.
              </p>
            </div>

            {/* Focused Keypoints List */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ABOUT_KEYPOINTS.map((point, index) => {
                const IconComponent = point.Icon;
                return (
                  <li
                    key={index}
                    className="flex items-start gap-3 font-sans text-[15px] sm:text-[16px] text-[#171313] leading-[1.4]"
                  >
                    <span className="w-8 h-8 rounded-full bg-[#5B1111] text-[#FDF0D5] flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                      <IconComponent className="w-4 h-4 text-[#C6A15B]" aria-hidden="true" />
                    </span>
                    <div>
                      <div className="font-semibold tracking-[0.01em] text-[#171313]">
                        {point.title}
                      </div>
                      <div className="text-[13px] text-[#6D6260] font-normal mt-0.5">
                        {point.subtitle}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* Burgundy Firm Metrics Container */}
            <div className="bg-[#5B1111] text-[#FDF0D5] p-5 sm:p-6 rounded-2xl border border-[#C6A15B]/30 shadow-lg relative overflow-hidden">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 items-stretch">
                {FIRM_CONFIG.statistics.map((stat) => (
                  <div
                    key={stat.id}
                    className="flex flex-col items-center justify-center text-center p-3.5 sm:p-4 rounded-xl bg-[#3E0808]/40 border border-[#C6A15B]/25 gap-2.5"
                  >
                    <div className="font-serif text-[2.35rem] sm:text-[2.75rem] lg:text-[3rem] font-semibold text-[#FDF0D5] leading-none tracking-[-0.02em] lining-nums tabular-nums flex items-center justify-center">
                      {stat.value}
                    </div>
                    <div className="w-6 h-[1.5px] bg-[#C6A15B] shrink-0" aria-hidden="true" />
                    <div className="font-sans text-[12.5px] sm:text-[13.5px] font-medium tracking-[0.02em] text-[#FDF0D5]/95 leading-[1.35] flex items-center justify-center">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3-Column Chamber Positioning & Credibility Strip (Who We Are · What We Excel At · Who We Represent) */}
        <div className="mt-14 sm:mt-16 pt-10 sm:pt-12 border-t border-[#5B1111]/15 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {CREDIBILITY_PILLARS.map((pillar) => {
            const PillarIcon = pillar.Icon;
            return (
              <div
                key={pillar.number}
                className="group relative rounded-2xl bg-[#FFF9EC] border border-[#5B1111]/25 hover:border-[#C6A15B] shadow-[0_14px_34px_-12px_rgba(62,8,8,0.16)] hover:shadow-[0_22px_44px_-12px_rgba(62,8,8,0.28)] transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between"
              >
                {/* Top Deep Burgundy & Antique Gold Architectural Header Bar */}
                <div className="bg-[#5B1111] px-6 py-4 border-b border-[#C6A15B]/40 flex items-center justify-between relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-[#3E0808]/65 via-transparent to-[#3E0808]/40 pointer-events-none"
                    aria-hidden="true"
                  />
                  <div className="relative z-10 flex items-center gap-3">
                    <span className="w-9 h-9 rounded-full bg-[#3E0808] border border-[#C6A15B]/45 flex items-center justify-center shrink-0 shadow-xs">
                      <PillarIcon className="w-4 h-4 text-[#C6A15B]" aria-hidden="true" />
                    </span>
                    <span className="font-sans text-[11px] sm:text-[11.5px] uppercase tracking-[0.16em] font-bold text-[#C6A15B]">
                      {pillar.question}
                    </span>
                  </div>

                  <span className="relative z-10 font-serif text-2xl sm:text-[1.75rem] font-semibold italic text-[#FDF0D5]/90 leading-none tabular-nums">
                    {pillar.number}
                  </span>
                </div>

                {/* Warm Cream Editorial Body */}
                <div className="p-6 sm:p-7 bg-gradient-to-b from-[#FFF9EC] to-[#FDF0D5]/55 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-[1.65rem] font-semibold text-[#171313] group-hover:text-[#5B1111] tracking-[-0.015em] leading-[1.15] transition-colors">
                      {pillar.titleMain}{' '}
                      <span className="italic font-medium text-[#5B1111]">
                        {pillar.titleAccent}
                      </span>
                    </h3>

                    {/* Signature Gold Accent Rule */}
                    <div
                      className="w-10 h-[1.5px] bg-[#C6A15B] group-hover:w-16 group-hover:bg-[#5B1111] transition-all duration-300 my-3.5"
                      aria-hidden="true"
                    />

                    <p className="font-sans text-[14.5px] sm:text-[15px] text-[#6D6260] leading-[1.65] font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Subtle Chamber Scope Footer */}
                  <div className="mt-6 pt-3.5 border-t border-[#5B1111]/12 flex items-center justify-between">
                    <span className="font-sans text-[11px] uppercase tracking-[0.12em] font-bold text-[#5B1111]/85">
                      {pillar.footerMeta}
                    </span>
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
