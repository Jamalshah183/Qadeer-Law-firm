import React, { useState } from 'react';
import {
  Globe,
  Scale,
  FileSearch,
  Building2,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react';
import { FIRM_CONFIG } from '../data/firmData';

interface CounselPillar {
  id: string;
  number: string;
  title: string;
  mobileTitle: string;
  tagline: string;
  highlights: [string, string];
  Icon: React.ElementType;
}

const COUNSEL_PILLARS: CounselPillar[] = [
  {
    id: 'opinions',
    number: '01',
    title: 'Pakistani-Law Opinions & Contracts',
    mobileTitle: 'Opinions & Contracts',
    tagline: 'Formal legal opinions, statutory research, and contract review for foreign counsel.',
    highlights: ['Expert Legal Opinions', 'Contract Drafting & Review'],
    Icon: Scale,
  },
  {
    id: 'litigation',
    number: '02',
    title: 'Litigation & Dispute Support',
    mobileTitle: 'Litigation & Disputes',
    tagline: 'On-the-ground representation before Pakistani courts and arbitral forums.',
    highlights: ['Local Court Advocacy', 'Arbitration & Evidence'],
    Icon: ShieldCheck,
  },
  {
    id: 'property',
    number: '03',
    title: 'Property & Title Investigations',
    mobileTitle: 'Property & Title',
    tagline: 'Comprehensive real-estate due diligence, title verification, and asset protection.',
    highlights: ['Title & Registry Audits', 'Overseas Estate Protection'],
    Icon: FileSearch,
  },
  {
    id: 'corporate',
    number: '04',
    title: 'Corporate & Commercial Counsel',
    mobileTitle: 'Corporate Counsel',
    tagline: 'Commercially focused local assistance for international businesses and investors.',
    highlights: ['Cross-Border Transactions', 'Local Counsel Coordination'],
    Icon: Building2,
  },
];

export const InternationalCounsel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activePillar = COUNSEL_PILLARS[activeIndex];
  const ActiveIcon = activePillar.Icon;

  const whatsappText = `Assalam-o-Alaikum Qadeer Law Chamber, I would like to inquire about International Counsel services regarding ${activePillar.title}.`;
  const whatsappHref = `https://wa.me/${FIRM_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
    whatsappText
  )}`;

  return (
    <section
      id="international-counsel"
      className="relative z-[11] -mt-10 sm:-mt-12 lg:-mt-14 rounded-t-[50px] sm:rounded-t-[65px] lg:rounded-t-[80px] border-t-2 border-[#C6A15B]/45 shadow-[0_-25px_50px_-15px_rgba(62,8,8,0.3)] overflow-hidden bg-[#3E0808]"
    >
      {/* ======================================================================
          MOBILE-NATIVE INTERACTIVE DECK (lg:hidden)
          Purpose-built for mobile screens — not a downsized desktop stack.
          Fits within a single mobile viewport with a 2x2 selector + live card.
          ====================================================================== */}
      <div className="lg:hidden relative pt-14 pb-24 px-4 sm:px-8 text-[#FDF0D5] overflow-hidden">
        {/* Background Law Library Still-Life (Person-Free) */}
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage: `url(${FIRM_CONFIG.images.practiceCorporate})`,
          }}
          aria-hidden="true"
        />

        {/* Deep Burgundy Atmospheric Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(62, 8, 8, 0.94) 0%, rgba(91, 17, 17, 0.91) 50%, rgba(45, 5, 5, 0.97) 100%)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-md mx-auto">
          {/* Compact Mobile Header */}
          <div className="text-center mb-5">
            <div className="inline-flex items-center gap-2 px-3.5 h-[30px] rounded-full bg-white/10 border border-[#C6A15B]/40 text-[#FDF0D5] font-sans text-[10px] font-bold uppercase tracking-[0.15em] mb-3">
              <Globe className="w-3 h-3 text-[#C6A15B]" aria-hidden="true" />
              <span>INTERNATIONAL COUNSEL</span>
            </div>

            <h2 className="font-serif text-[2rem] sm:text-4xl font-semibold text-[#FDF0D5] leading-[1.06] tracking-[-0.02em]">
              Your Pakistan{' '}
              <span className="italic font-normal text-[#C6A15B]">Legal Partner.</span>
            </h2>

            <p className="font-sans text-[13.5px] text-[#FDF0D5]/85 leading-[1.45] mt-2">
              Local Pakistan representation for foreign law firms & overseas clients.
            </p>
          </div>

          {/* Single-Line Mobile Corridor Pill */}
          <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#2A0505]/80 border border-[#C6A15B]/30 text-[10.5px] font-sans uppercase tracking-[0.12em] text-[#C6A15B] font-semibold mb-4">
            <span>UK · UAE · US · EU</span>
            <ArrowRight className="w-3 h-3 text-[#C6A15B] shrink-0" aria-hidden="true" />
            <span className="text-[#FDF0D5] font-bold">Pakistan Chambers</span>
          </div>

          {/* 2x2 Thumb-Friendly Mandate Selector Grid */}
          <div className="grid grid-cols-2 gap-2.5 mb-3.5" role="tablist" aria-label="International Counsel Mandates">
            {COUNSEL_PILLARS.map((pillar, index) => {
              const isSelected = index === activeIndex;
              const IconComponent = pillar.Icon;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveIndex(index)}
                  className={`text-left p-3.5 rounded-2xl border transition-all duration-200 flex flex-col justify-between gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-[#FFF9EC] text-[#171313] border-[#C6A15B] shadow-lg -translate-y-0.5'
                      : 'bg-[#3E0808]/75 text-[#FDF0D5] border-[#C6A15B]/30 hover:border-[#C6A15B]/60'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span
                      className={`font-serif text-xl font-bold leading-none ${
                        isSelected ? 'text-[#5B1111]' : 'text-[#C6A15B]'
                      }`}
                    >
                      {pillar.number}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center ${
                        isSelected
                          ? 'bg-[#5B1111] text-[#C6A15B]'
                          : 'bg-white/10 text-[#C6A15B]'
                      }`}
                    >
                      <IconComponent className="w-3.5 h-3.5" aria-hidden="true" />
                    </span>
                  </div>

                  <div
                    className={`font-serif text-[16.5px] font-semibold leading-tight ${
                      isSelected ? 'text-[#171313]' : 'text-[#FDF0D5]'
                    }`}
                  >
                    {pillar.mobileTitle}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Mandate Spotlight Card (Cream Editorial Card) */}
          <div className="bg-[#FFF9EC] text-[#171313] rounded-2xl p-4 border border-[#C6A15B]/50 shadow-xl mb-4">
            <div className="flex items-center gap-2.5 mb-1.5">
              <span className="w-6 h-6 rounded-full bg-[#5B1111] text-[#C6A15B] flex items-center justify-center shrink-0">
                <ActiveIcon className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
              <h3 className="font-serif text-[18px] font-bold text-[#5B1111] leading-tight">
                {activePillar.title}
              </h3>
            </div>

            <p className="font-sans text-[13px] text-[#171313]/85 leading-[1.45] mb-3">
              {activePillar.tagline}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {activePillar.highlights.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#5B1111]/10 text-[#5B1111] font-sans text-[11px] font-semibold"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5B1111]" aria-hidden="true" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Full-Width Hero-Style Gold Pill CTA */}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-between pl-6 pr-2 h-[48px] rounded-full bg-[#C6A15B] active:bg-[#b8924b] text-[#171313] font-sans font-bold text-[12px] uppercase tracking-[0.06em] shadow-xl"
          >
            <span>Instruct Pakistan Desk</span>
            <span className="w-8.5 h-8.5 rounded-full bg-[#FDF0D5] text-[#171313] flex items-center justify-center shadow-xs shrink-0">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>
        </div>
      </div>

      {/* ======================================================================
          DESKTOP ASYMMETRIC SPLIT-CANVAS ARCHITECTURE (hidden lg:grid)
          Untouched desktop experience
          ====================================================================== */}
      <div className="hidden lg:grid lg:grid-cols-12 min-h-[560px]">
        {/* LEFT COLUMN (5 Cols): Atmospheric Burgundy & Photographic Showcase */}
        <div className="lg:col-span-5 relative pt-24 pb-28 pl-14 pr-10 flex flex-col justify-between text-[#FDF0D5] overflow-hidden">
          {/* Background Law Library Still-Life (Person-Free) */}
          <div
            className="absolute inset-0 bg-cover bg-center pointer-events-none scale-105"
            style={{
              backgroundImage: `url(${FIRM_CONFIG.images.practiceCorporate})`,
            }}
            aria-hidden="true"
          />

          {/* Signature Deep Burgundy Gradient Overlay matching Hero & Footer */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(155deg, rgba(62, 8, 8, 0.93) 0%, rgba(91, 17, 17, 0.89) 55%, rgba(45, 5, 5, 0.96) 100%)',
            }}
            aria-hidden="true"
          />

          {/* Subtle Outlined Watermark (Matches Board of Directors card motif) */}
          <span
            className="block absolute -bottom-6 -left-3 font-serif font-bold text-[110px] leading-none select-none pointer-events-none whitespace-nowrap opacity-35"
            style={{
              WebkitTextStroke: '1px rgba(198, 161, 91, 0.28)',
              color: 'transparent',
            }}
            aria-hidden="true"
          >
            Counsel
          </span>

          {/* Top Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2.5 px-4 h-[36px] rounded-full bg-white/10 border border-[#C6A15B]/40 text-[#FDF0D5] font-sans text-[11px] font-bold uppercase tracking-[0.15em] mb-5">
              <Globe className="w-3.5 h-3.5 text-[#C6A15B]" aria-hidden="true" />
              <span>INTERNATIONAL COUNSEL</span>
            </div>

            <h2 className="font-serif text-[3.15rem] font-semibold text-[#FDF0D5] leading-[1.06] tracking-[-0.02em] mb-4">
              Your Pakistan{' '}
              <span className="italic font-normal text-[#C6A15B] block">
                Legal Partner.
              </span>
            </h2>

            <p className="font-sans text-[16.5px] text-[#FDF0D5]/85 leading-[1.65] font-normal max-w-md">
              Foreign law firms, international businesses, and overseas clients rely on{' '}
              <span className="text-[#FDF0D5] font-semibold">{FIRM_CONFIG.firmName}</span>{' '}
              for dependable Pakistani-law expertise and local courtroom representation.
            </p>
          </div>

          {/* Bottom Corridor Badge & Hero-Style Pill CTA */}
          <div className="relative z-10 mt-12 pt-6 border-t border-[#C6A15B]/25 flex flex-col items-start gap-5">
            <div className="flex items-center gap-3 text-[11.5px] font-sans uppercase tracking-[0.14em] text-[#C6A15B] font-semibold">
              <span>UK</span>
              <span className="text-[#FDF0D5]/40">·</span>
              <span>UAE</span>
              <span className="text-[#FDF0D5]/40">·</span>
              <span>North America</span>
              <span className="text-[#FDF0D5]/40">·</span>
              <span>Europe</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C6A15B]" aria-hidden="true" />
              <span className="text-[#FDF0D5]">Pakistan</span>
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-between gap-3.5 pl-6 pr-2.5 h-[54px] rounded-full bg-[#C6A15B] hover:bg-[#b8924b] text-[#171313] font-sans font-bold text-[13px] uppercase tracking-[0.06em] shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <span>Instruct Pakistan Desk</span>
              <span className="w-9 h-9 rounded-full bg-[#FDF0D5] text-[#171313] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 shadow-xs shrink-0">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN (7 Cols): Soft Cream (#FFF9EC) Interactive Numbered Ledger */}
        <div className="lg:col-span-7 bg-[#FFF9EC] text-[#171313] pt-24 pb-32 px-14 flex flex-col justify-center relative">
          <div className="flex items-center justify-between pb-4 mb-2 border-b border-[#5B1111]/15">
            <span className="font-sans text-[12px] uppercase tracking-[0.16em] font-bold text-[#5B1111]">
              CROSS-BORDER & LOCAL COUNSEL MANDATES
            </span>
            <span className="font-serif italic text-[14px] text-[#6D6260]">
              01 — 04
            </span>
          </div>

          <div className="divide-y divide-[#5B1111]/15 border-b border-[#5B1111]/15">
            {COUNSEL_PILLARS.map((pillar, index) => {
              const isActive = index === activeIndex;
              const IconComponent = pillar.Icon;

              return (
                <div
                  key={pillar.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`group py-6 px-5 -mx-5 rounded-2xl transition-all duration-200 cursor-pointer ${
                    isActive ? 'bg-[#FDF0D5] shadow-xs' : 'hover:bg-[#FDF0D5]/60'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-5 min-w-0">
                      <span
                        className={`font-serif text-3xl font-semibold leading-none transition-colors shrink-0 ${
                          isActive ? 'text-[#5B1111]' : 'text-[#C6A15B]'
                        }`}
                      >
                        {pillar.number}
                      </span>

                      <div className="min-w-0">
                        <h3
                          className={`font-serif text-[1.6rem] font-semibold tracking-[-0.01em] leading-snug transition-colors ${
                            isActive ? 'text-[#5B1111]' : 'text-[#171313] group-hover:text-[#5B1111]'
                          }`}
                        >
                          {pillar.title}
                        </h3>

                        <p className="font-sans text-[14.5px] text-[#6D6260] leading-[1.5] mt-1">
                          {pillar.tagline}
                        </p>

                        <div className="flex flex-wrap items-center gap-2 mt-2.5">
                          {pillar.highlights.map((tag) => (
                            <span
                              key={tag}
                              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-sans text-[11px] font-semibold tracking-[0.02em] transition-colors ${
                                isActive
                                  ? 'bg-[#5B1111] text-[#FDF0D5]'
                                  : 'bg-[#5B1111]/10 text-[#5B1111]'
                              }`}
                            >
                              <span
                                className="w-1 h-1 rounded-full bg-[#C6A15B]"
                                aria-hidden="true"
                              />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                        isActive
                          ? 'bg-[#5B1111] text-[#C6A15B] shadow-md scale-105'
                          : 'bg-[#5B1111]/10 text-[#5B1111] group-hover:bg-[#5B1111] group-hover:text-[#C6A15B]'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
