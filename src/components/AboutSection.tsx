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
      className="relative z-[10] -mt-16 sm:-mt-20 lg:-mt-24 xl:-mt-28 pt-20 sm:pt-24 md:pt-28 pb-28 md:pb-36 bg-[#FFFFFF] rounded-t-[50px] sm:rounded-t-[65px] lg:rounded-t-[80px] border-t-2 border-[#9B112C]/20 shadow-[0_-25px_50px_-15px_rgba(155,17,44,0.12)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Distinguished Chambers Photograph */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div
                className="absolute -top-3 -left-3 w-full h-full border border-[#E5B842]/55 rounded-2xl -z-10"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-3 -right-3 w-full h-full bg-[#9B112C]/10 rounded-2xl -z-10"
                aria-hidden="true"
              />

              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#9B112C]/20 aspect-[4/3.2] bg-[#6A0C1E] group">
                <img
                  src={FIRM_CONFIG.images.about}
                  alt="Legal counsel reviewing case documents at Qadeer Legal Chambers"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6A0C1E]/85 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-5 right-5 text-left">
                  <div className="font-sans text-[11px] uppercase tracking-[0.14em] text-[#E5B842] font-bold">
                    Sialkot · Lahore · Pakistan
                  </div>
                  <div className="font-serif text-lg text-white font-medium">
                    High Court & District Court Chambers
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About & Credibility Overview */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-6">
            <div>
              <div className="font-sans text-[11px] sm:text-[12px] uppercase tracking-[0.16em] font-bold text-[#9B112C] mb-2">
                ABOUT THE CHAMBERS · CREDIBILITY & MANDATE
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] font-semibold text-[#0F172A] tracking-[-0.015em] leading-[1.12] mb-3.5">
                About Qadeer Legal Chambers —{' '}
                <span className="italic font-medium text-[#9B112C]">
                  Established Pakistani Legal Practice
                </span>
              </h2>
              <p className="font-sans text-[15px] sm:text-[16px] text-[#475569] leading-[1.65] font-normal">
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
                    className="flex items-start gap-3 font-sans text-[15px] sm:text-[16px] text-[#0F172A] leading-[1.4]"
                  >
                    <span className="w-8 h-8 rounded-full bg-[#9B112C] text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                      <IconComponent className="w-4 h-4 text-[#E5B842]" aria-hidden="true" />
                    </span>
                    <div>
                      <div className="font-semibold tracking-[0.01em] text-[#0F172A]">
                        {point.title}
                      </div>
                      <div className="text-[13px] text-[#475569] font-normal mt-0.5">
                        {point.subtitle}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* Burgundy Firm Metrics Container */}
            <div className="bg-gradient-to-br from-[#9B112C] via-[#850E23] to-[#6A0C1E] text-white p-5 sm:p-6 rounded-2xl border border-[#E5B842]/40 shadow-xl relative overflow-hidden">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 items-stretch">
                {FIRM_CONFIG.statistics.map((stat) => (
                  <div
                    key={stat.id}
                    className="flex flex-col items-center justify-center text-center p-3.5 sm:p-4 rounded-xl bg-[#6A0C1E]/50 border border-[#E5B842]/30 gap-2.5"
                  >
                    <div className="font-serif text-[2.35rem] sm:text-[2.75rem] lg:text-[3rem] font-semibold text-white leading-none tracking-[-0.02em] lining-nums tabular-nums flex items-center justify-center">
                      {stat.value}
                    </div>
                    <div className="w-6 h-[1.5px] bg-[#E5B842] shrink-0" aria-hidden="true" />
                    <div className="font-sans text-[12.5px] sm:text-[13.5px] font-medium tracking-[0.02em] text-white/95 leading-[1.35] flex items-center justify-center">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3-Column Chamber Positioning & Credibility Strip (Who We Are · What We Excel At · Who We Represent) */}
        <div className="mt-14 sm:mt-16 pt-10 sm:pt-12 border-t border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {CREDIBILITY_PILLARS.map((pillar) => {
            const PillarIcon = pillar.Icon;
            return (
              <div
                key={pillar.number}
                className="group relative rounded-2xl bg-white border border-slate-200 hover:border-[#E5B842] shadow-[0_10px_30px_-10px_rgba(15,23,42,0.08)] hover:shadow-[0_20px_40px_-10px_rgba(155,17,44,0.18)] transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between"
              >
                {/* Top Bright Royal Burgundy & Radiant Gold Header Bar */}
                <div className="bg-[#9B112C] px-6 py-4 border-b border-[#E5B842]/40 flex items-center justify-between relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-[#6A0C1E]/70 via-transparent to-[#6A0C1E]/40 pointer-events-none"
                    aria-hidden="true"
                  />
                  <div className="relative z-10 flex items-center gap-3">
                    <span className="w-9 h-9 rounded-full bg-[#6A0C1E] border border-[#E5B842]/50 flex items-center justify-center shrink-0 shadow-xs">
                      <PillarIcon className="w-4 h-4 text-[#E5B842]" aria-hidden="true" />
                    </span>
                    <span className="font-sans text-[11px] sm:text-[11.5px] uppercase tracking-[0.16em] font-bold text-[#E5B842]">
                      {pillar.question}
                    </span>
                  </div>

                  <span className="relative z-10 font-serif text-2xl sm:text-[1.75rem] font-semibold italic text-white/95 leading-none tabular-nums">
                    {pillar.number}
                  </span>
                </div>

                {/* Bright Clean White Editorial Body */}
                <div className="p-6 sm:p-7 bg-white flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-[1.65rem] font-semibold text-[#0F172A] group-hover:text-[#9B112C] tracking-[-0.015em] leading-[1.15] transition-colors">
                      {pillar.titleMain}{' '}
                      <span className="italic font-medium text-[#9B112C]">
                        {pillar.titleAccent}
                      </span>
                    </h3>

                    {/* Signature Gold Accent Rule */}
                    <div
                      className="w-10 h-[1.5px] bg-[#E5B842] group-hover:w-16 group-hover:bg-[#9B112C] transition-all duration-300 my-3.5"
                      aria-hidden="true"
                    />

                    <p className="font-sans text-[14.5px] sm:text-[15px] text-[#475569] leading-[1.65] font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Subtle Chamber Scope Footer */}
                  <div className="mt-6 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                    <span className="font-sans text-[11px] uppercase tracking-[0.12em] font-bold text-[#9B112C]/90">
                      {pillar.footerMeta}
                    </span>
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[#E5B842]"
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
