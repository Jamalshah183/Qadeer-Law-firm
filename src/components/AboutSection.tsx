import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import neutralChambersImg from '../assets/images/chambers_architecture_neutral_1791853431656.jpg';

interface AboutSectionProps {
  onOpenConsultation: () => void;
  onSelectPracticeForConsultation?: (practiceTitle: string) => void;
}

const STATS_DATA = [
  { value: '18+', label: 'Years Experience' },
  { value: '1,250+', label: 'Cases Handled' },
  { value: '340+', label: 'Corporate Matters' },
  { value: '30+', label: 'Courts & Tribunals' },
  { value: '98%', label: 'Client Satisfaction' },
];

const CREDIBILITY_PILLARS = [
  {
    number: '01',
    tabLabel: 'Who We Are',
    question: 'WHO WE ARE',
    titleMain: 'Established',
    titleAccent: 'Legal Practice',
    bullets: [
      'Dual chambers in Sialkot & Lahore',
      'High Courts & appellate bench counsel',
      'Direct senior partner advocacy',
    ],
  },
  {
    number: '02',
    tabLabel: 'What We Excel At',
    question: 'WHAT WE EXCEL AT',
    titleMain: 'Litigation &',
    titleAccent: 'Legal Advisory',
    bullets: [
      'Constitutional writs & stay orders',
      'Corporate governance & SECP matters',
      'Property title verification & disputes',
    ],
  },
  {
    number: '03',
    tabLabel: 'Who We Represent',
    question: 'WHO WE REPRESENT',
    titleMain: 'Domestic &',
    titleAccent: 'Global Counsel',
    bullets: [
      'Overseas Pakistanis in UK, US & Gulf',
      'Corporate & family business groups',
      'International law firm instructions',
    ],
  },
];

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenConsultation,
}) => {
  const [activePillarIndex, setActivePillarIndex] = useState(0);

  const activePillar = CREDIBILITY_PILLARS[activePillarIndex];

  const handlePrevPillar = () => {
    setActivePillarIndex((prev) => (prev === 0 ? CREDIBILITY_PILLARS.length - 1 : prev - 1));
  };

  const handleNextPillar = () => {
    setActivePillarIndex((prev) => (prev === CREDIBILITY_PILLARS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="about"
      className="relative z-[10] -mt-16 sm:-mt-20 lg:-mt-24 xl:-mt-28 pt-20 sm:pt-24 md:pt-28 pb-24 sm:pb-28 lg:pb-36 bg-[#FFFFFF] rounded-t-[50px] sm:rounded-t-[65px] lg:rounded-t-[80px] border-t-2 border-[#9B112C]/20 shadow-[0_-25px_50px_-15px_rgba(155,17,44,0.12)] overflow-hidden font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ====================================================================
            1. INSPIRATION-ALIGNED CENTERED HEADER
            ==================================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          {/* Centered Headline matching Hero typography */}
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-[2.85rem] font-bold text-[#0F172A] tracking-[-0.02em] leading-[1.12] mb-3.5 sm:mb-4">
            Bringing Disciplined Advocacy &{' '}
            <span className="font-sans italic font-semibold text-[#9B112C]">
              Strategic Counsel
            </span>{' '}
            to Every Mandate
          </h2>

          {/* Centered Subtitle in Neue Haas Grotesk Display */}
          <p className="font-sans text-[14.5px] sm:text-[16px] text-[#475569] leading-[1.65] font-normal max-w-2xl mx-auto">
            Established Pakistani legal practice operating from chambers in Sialkot and Lahore—serving domestic clients, commercial enterprises, overseas Pakistanis, and international law firms.
          </p>
        </div>

        {/* ====================================================================
            2. HERO FEATURED IMAGE (Gender-Neutral & Area-Neutral Law Chambers)
            ==================================================================== */}
        <div className="relative mb-6 sm:mb-8">
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/8.5] lg:aspect-[21/9] rounded-[24px] sm:rounded-[34px] lg:rounded-[42px] overflow-hidden shadow-xl border border-slate-200/90 bg-[#6A0C1E] group">
            <img
              src={neutralChambersImg}
              alt="Qadeer Legal Chambers conference room and judicial law library"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* ====================================================================
            3. REFINED STATS BAR (Compact, premium, uniform Neue Haas numerals)
            ==================================================================== */}
        <div className="bg-white border border-slate-200/90 rounded-2xl py-3.5 sm:py-4 px-4 sm:px-6 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.06)] mb-8 sm:mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-3 gap-x-2 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {STATS_DATA.map((stat, idx) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center text-center py-1 sm:py-0 ${
                  idx === 4 ? 'col-span-2 sm:col-span-1 pt-2.5 sm:pt-0' : idx > 1 ? 'pt-2.5 sm:pt-0' : ''
                } ${idx > 0 ? 'sm:pl-3 lg:pl-5' : ''}`}
              >
                <div className="font-sans text-xl sm:text-2xl lg:text-[1.65rem] font-bold text-[#0F172A] tracking-tight leading-none mb-1 [font-variant-numeric:lining-nums]">
                  {stat.value}
                </div>
                <div className="font-sans text-[11px] sm:text-[11.5px] font-semibold uppercase tracking-[0.08em] text-[#9B112C] leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ====================================================================
            4. MOBILE INTERACTIVE PILLAR SWITCHER (Eliminates long scrolling!)
               Designed specifically for mobile devices with high attraction
            ==================================================================== */}
        {/* ====================================================================
            4. MOBILE INTERACTIVE PILLAR SWITCHER (Eliminates long scrolling!)
               Designed specifically for mobile devices with high attraction
            ==================================================================== */}
        <div className="block md:hidden">
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2 px-1">
              <span className="font-sans text-[11px] uppercase tracking-[0.2em] font-bold text-[#9B112C]">
                Core Practice Mandate
              </span>
              <span className="font-sans text-xs font-semibold text-[#64748B]">
                {activePillarIndex + 1} of {CREDIBILITY_PILLARS.length}
              </span>
            </div>

            {/* Segmented Control Pill Tabs */}
            <div className="grid grid-cols-3 gap-1.5 p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200/90 shadow-inner">
              {CREDIBILITY_PILLARS.map((pillar, idx) => (
                <button
                  key={pillar.number}
                  type="button"
                  onClick={() => setActivePillarIndex(idx)}
                  className={`py-2 px-2 rounded-xl font-sans text-[11.5px] font-bold transition-all text-center cursor-pointer ${
                    activePillarIndex === idx
                      ? 'bg-gradient-to-r from-[#850E24] to-[#9B112C] text-white shadow-sm ring-1 ring-[#E5B842]/40'
                      : 'text-[#475569] hover:text-[#0F172A] hover:bg-white/60'
                  }`}
                >
                  {pillar.tabLabel}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Mobile Pillar Card */}
          <div className="relative rounded-2xl bg-gradient-to-b from-white via-[#FDFCFA] to-[#FAF8F5] border-2 border-[#9B112C]/25 shadow-xl overflow-hidden transition-all duration-300">
            {/* Top Gilded Accent Filigree */}
            <div className="h-[3px] bg-gradient-to-r from-[#9B112C] via-[#E5B842] to-[#9B112C]" aria-hidden="true" />

            {/* Card Header Strip with Deep Royal Burgundy - Center Aligned */}
            <div className="bg-gradient-to-r from-[#6A0C1E] via-[#850E24] to-[#9B112C] px-5 py-3.5 border-b border-[#E5B842]/30 flex items-center justify-center text-center relative overflow-hidden">
              <span className="relative z-10 font-sans text-[11px] sm:text-[12px] uppercase tracking-[0.16em] font-bold text-[#E5B842] drop-shadow-xs whitespace-nowrap truncate text-center">
                {activePillar.question}
              </span>
            </div>

            {/* Card Body - Center Aligned & Same Height */}
            <div className="p-5 flex flex-col items-center justify-between text-center relative">
              <div className="w-full flex flex-col items-center text-center">
                {/* Title - Single Line, Center Aligned, matching Hero typography */}
                <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#0F172A] tracking-[-0.02em] leading-normal text-center whitespace-nowrap truncate w-full mb-0">
                  <span className="inline font-sans">{activePillar.titleMain} </span>
                  <span className="font-sans italic font-semibold text-[#9B112C] inline">
                    {activePillar.titleAccent}
                  </span>
                </h3>

                {/* Symmetrical Dual-Tone Divider - Center Aligned */}
                <div className="flex items-center justify-center gap-2 my-3.5 w-full" aria-hidden="true">
                  <div className="h-[1.5px] w-8 bg-gradient-to-r from-transparent via-[#9B112C] to-[#E5B842]" />
                  <div className="w-1.5 h-1.5 rotate-45 bg-[#E5B842] shrink-0" />
                  <div className="h-[1.5px] w-8 bg-gradient-to-l from-transparent via-[#9B112C] to-[#E5B842]" />
                </div>

                {/* Focused Key Points - Single Line per item, Center Aligned */}
                <ul className="space-y-2 mb-5 w-full text-center">
                  {activePillar.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-50/80 border border-slate-100 text-[#1E293B] w-full overflow-hidden text-center"
                    >
                      <span className="w-1.5 h-1.5 rotate-45 bg-[#9B112C] border border-[#E5B842] shrink-0" />
                      <span className="font-sans text-[12.5px] font-medium whitespace-nowrap truncate text-center">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile Actions: Navigation Controls & Consultation CTA */}
              <div className="relative z-10 pt-3 border-t border-slate-200/80 flex items-center justify-between gap-3 w-full">
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handlePrevPillar}
                    aria-label="Previous pillar"
                    className="p-2 rounded-xl border border-slate-200 bg-white text-[#0F172A] hover:bg-slate-100 active:bg-slate-200 transition-colors cursor-pointer shadow-xs"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextPillar}
                    aria-label="Next pillar"
                    className="p-2 rounded-xl border border-slate-200 bg-white text-[#0F172A] hover:bg-slate-100 active:bg-slate-200 transition-colors cursor-pointer shadow-xs"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#850E24] to-[#9B112C] text-white font-sans text-xs font-bold uppercase tracking-[0.05em] hover:from-[#6A0C1E] hover:to-[#850E24] active:scale-98 transition-all cursor-pointer shadow-sm ring-1 ring-[#E5B842]/30"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E5B842]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ====================================================================
            5. DESKTOP 3-COLUMN CREDIBILITY GRID (For tablet & desktop screens)
            ==================================================================== */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {CREDIBILITY_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="group relative h-full rounded-2xl bg-gradient-to-b from-white via-[#FDFCFA] to-[#FAF8F5] border border-slate-200/90 hover:border-[#E5B842]/80 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_45px_-12px_rgba(155,17,44,0.18),0_0_0_1px_rgba(229,184,66,0.35)] transition-all duration-300 hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between"
            >
              {/* Top Gilded Accent Filigree */}
              <div className="h-[3px] bg-gradient-to-r from-[#9B112C] via-[#E5B842] to-[#9B112C] group-hover:h-[4px] transition-all shrink-0" aria-hidden="true" />

              {/* Royal Burgundy & Radiant Gold Header Bar - Center Aligned */}
              <div className="bg-gradient-to-r from-[#6A0C1E] via-[#850E24] to-[#9B112C] px-5 py-3.5 border-b border-[#E5B842]/30 flex items-center justify-center text-center relative overflow-hidden shrink-0">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-[#6A0C1E]/60 via-transparent to-[#6A0C1E]/30 pointer-events-none"
                  aria-hidden="true"
                />
                
                {/* Eyebrow Label - Center Aligned, Single Line, Font Matching Hero */}
                <span className="relative z-10 font-sans text-[11px] sm:text-[12px] uppercase tracking-[0.16em] font-bold text-[#E5B842] drop-shadow-xs whitespace-nowrap truncate text-center">
                  {pillar.question}
                </span>
              </div>

              {/* Editorial Card Body - Equal Dimensions, Center Aligned, Single Line Text */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col items-center justify-between text-center relative">
                <div className="w-full flex flex-col items-center text-center">
                  {/* Card Title - Single Line, Center Aligned, matching Hero typography */}
                  <h3 className="font-sans text-lg sm:text-xl lg:text-[1.35rem] font-bold text-[#0F172A] group-hover:text-[#9B112C] tracking-[-0.02em] leading-normal text-center whitespace-nowrap truncate w-full transition-colors mb-0">
                    <span className="inline font-sans">{pillar.titleMain} </span>
                    <span className="font-sans italic font-semibold text-[#9B112C] inline">
                      {pillar.titleAccent}
                    </span>
                  </h3>

                  {/* Symmetrical Dual-Tone Divider - Center Aligned */}
                  <div className="flex items-center justify-center gap-2 my-4 w-full" aria-hidden="true">
                    <div className="h-[1.5px] w-8 lg:w-10 bg-gradient-to-r from-transparent via-[#9B112C] to-[#E5B842]" />
                    <div className="w-1.5 h-1.5 rotate-45 bg-[#E5B842] shrink-0" />
                    <div className="h-[1.5px] w-8 lg:w-10 bg-gradient-to-l from-transparent via-[#9B112C] to-[#E5B842]" />
                  </div>

                  {/* Focused Practice Points - Single Line per item, Center Aligned, Font Matching Hero */}
                  <ul className="space-y-2.5 w-full text-center">
                    {pillar.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-50/80 border border-slate-100/90 group-hover:bg-white group-hover:border-[#E5B842]/30 transition-all duration-300 w-full overflow-hidden text-center"
                      >
                        <span className="w-1.5 h-1.5 rotate-45 bg-[#9B112C] border border-[#E5B842] shrink-0 group-hover:bg-[#E5B842] group-hover:border-[#9B112C] transition-colors" />
                        <span className="font-sans text-[12.5px] lg:text-[13px] font-medium text-[#1E293B] whitespace-nowrap truncate text-center">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
