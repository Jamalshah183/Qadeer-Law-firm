import React from 'react';
import {
  Scale,
  Award,
  Landmark,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  MessageSquare,
  ArrowUpRight,
} from 'lucide-react';
import { FIRM_CONFIG } from '../data/firmData';
import qadeerCeoImg from '../assets/images/qadeer_hussain_ceo.png';
import { useStudioCutout } from './TeamSection';

const CREDENTIAL_LEDGER = [
  {
    category: 'Qualifications & Standing',
    Icon: GraduationCap,
    items: [
      'LL.B. (Bachelor of Laws)',
      'Enrolled Advocate of the High Court',
      '18+ Years in Active Legal Practice',
    ],
  },
  {
    category: 'Bar Memberships & Enrolment',
    Icon: Award,
    items: [
      'Enrolled Member, Punjab Bar Council',
      'Member, Lahore High Court Bar Association',
      'Member, District Bar Association, Sialkot',
    ],
  },
  {
    category: 'Courts & Forums of Practice',
    Icon: Landmark,
    items: [
      'Lahore High Court & Appellate Benches',
      'District, Sessions, Civil & Family Courts',
      'Commercial, Banking & Regulatory Tribunals',
    ],
  },
  {
    category: 'Chambers Mandate & Reach',
    Icon: Briefcase,
    items: [
      'Chambers in Sialkot & Lahore, Pakistan',
      'Lead Counsel for Domestic & Corporate Briefs',
      'Local Counsel for Foreign Firms & Overseas Clients',
    ],
  },
];

const MAJOR_PRACTICE_AREAS = [
  '01. Civil, Commercial & Appellate Litigation',
  '02. Corporate Structuring & Commercial Advisory',
  '03. Property Title Due Diligence & Land Disputes',
  '04. Family Law, Succession & Estate Administration',
  '05. International Local Counsel & Pakistani-Law Opinions',
  '06. Precision Legal Drafting & Injunctive Relief',
];

export const PrincipalAdvocateSection: React.FC = () => {
  const cutoutSrc = useStudioCutout(qadeerCeoImg, 1.08);

  const whatsappText =
    'Assalam-o-Alaikum Qadeer Legal Chambers, I would like to request a consultation with Principal Advocate Mian Qadeer Hussain.';
  const whatsappHref = `https://wa.me/${FIRM_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
    whatsappText
  )}`;

  return (
    <section
      id="principal-advocate"
      className="relative z-[11] -mt-10 sm:-mt-12 lg:-mt-14 pt-20 sm:pt-24 md:pt-28 pb-28 md:pb-36 bg-gradient-to-b from-[#8C0E26] via-[#750B1F] to-[#5C0818] text-white rounded-t-[50px] sm:rounded-t-[65px] lg:rounded-t-[80px] border-t-2 border-[#E5B842]/45 shadow-[0_-25px_50px_-15px_rgba(106,12,30,0.35)] overflow-hidden"
    >
      {/* Subtle radial ambient depth */}
      <div
        className="absolute inset-0 bg-radial from-[#B81D3C]/20 via-transparent to-black/30 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 mb-3">
            <span className="h-[1px] w-7 bg-[#E5B842]" aria-hidden="true" />
            <Scale className="w-3.5 h-3.5 text-[#E5B842]" aria-hidden="true" />
            <span className="font-sans text-[11px] sm:text-[12px] uppercase tracking-[0.16em] font-bold text-[#E5B842]">
              CHAMBERS LEADERSHIP & CREDENTIALS
            </span>
            <span className="h-[1px] w-7 bg-[#E5B842]" aria-hidden="true" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[3.25rem] font-semibold text-white leading-[1.08] tracking-[-0.02em]">
            Principal Advocate —{' '}
            <span className="italic font-normal text-[#E5B842]">
              Head of Chambers
            </span>
          </h2>
        </div>

        {/* Main 12-Column Executive Dossier Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column (4 Cols): Professional Photograph & Standing Summary */}
          <div className="lg:col-span-4 bg-[#5C0818]/90 rounded-3xl p-6 sm:p-8 border border-[#E5B842]/40 shadow-2xl flex flex-col items-center justify-between relative overflow-hidden">
            {/* Framed Executive Portrait */}
            <div className="w-full flex flex-col items-center">
              <div className="relative w-full max-w-[270px] aspect-[3/3.66] rounded-2xl bg-white border-2 border-[#E5B842]/70 shadow-xl overflow-hidden">
                {/* Left Vertical Deep Burgundy Architectural Pillar */}
                <div
                  className="absolute top-0 left-0 bottom-0 w-[44%] bg-[#9B112C] z-[1]"
                  aria-hidden="true"
                />

                {/* Normalized Studio Portrait */}
                <div className="absolute inset-x-0 bottom-0 top-2.5 z-[2] flex items-end justify-center pointer-events-none select-none">
                  <img
                    src={cutoutSrc || qadeerCeoImg}
                    alt="Mian Qadeer Hussain — Founder & Principal Advocate, Qadeer Legal Chambers"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain object-bottom"
                  />
                </div>

                {/* Bottom Burgundy Nameplate Scrim */}
                <div
                  className="absolute inset-x-0 bottom-0 h-[32%] z-[3] pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(to top, #5C0818 0%, rgba(92, 8, 24, 0.90) 45%, transparent 100%)',
                  }}
                  aria-hidden="true"
                />

                {/* Portrait Caption */}
                <div className="absolute bottom-3.5 left-4 right-4 z-[4] text-left">
                  <div className="font-serif font-semibold text-lg text-white leading-tight">
                    Mian Qadeer Hussain
                  </div>
                  <div className="font-sans text-[10.5px] uppercase tracking-[0.12em] text-[#E5B842] font-bold mt-0.5">
                    Founder & Principal Advocate
                  </div>
                </div>
              </div>

              {/* Quick Standing Metrics under Portrait */}
              <div className="w-full grid grid-cols-2 gap-3 mt-6 pt-5 border-t border-[#E5B842]/30 text-center">
                <div className="p-3 rounded-xl bg-[#8C0E26]/40 border border-[#E5B842]/30">
                  <div className="font-serif text-2xl sm:text-3xl font-semibold text-[#E5B842] tabular-nums leading-none">
                    18+ Yrs
                  </div>
                  <div className="font-sans text-[11px] text-white/90 mt-1 font-medium">
                    Legal Experience
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#8C0E26]/40 border border-[#E5B842]/30">
                  <div className="font-serif text-2xl sm:text-3xl font-semibold text-white leading-none">
                    High Court
                  </div>
                  <div className="font-sans text-[11px] text-[#E5B842] mt-1 font-medium">
                    Enrolled Advocate
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Consultation Button */}
            <div className="w-full mt-6 pt-5 border-t border-[#E5B842]/30">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-full bg-[#E5B842] hover:bg-[#d4a833] text-[#0F172A] font-sans text-[12px] uppercase tracking-[0.06em] font-bold shadow-lg transition-all duration-200 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#0F172A]" />
                <span>Consult Principal Advocate</span>
                <ArrowUpRight className="w-4 h-4 text-[#0F172A] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Right Column (8 Cols): Full Credentials, Enrolment, Courts & Practice Dossier */}
          <div className="lg:col-span-8 bg-white text-[#0F172A] rounded-3xl p-6 sm:p-9 lg:p-10 border border-slate-200 shadow-2xl flex flex-col justify-between">
            <div>
              {/* Top Unboxed Metadata Line */}
              <div className="flex flex-wrap items-center gap-2 font-sans text-[11.5px] sm:text-[12px] uppercase tracking-[0.14em] font-bold text-[#9B112C] mb-2">
                <span>HEAD OF CHAMBERS</span>
                <span className="text-[#E5B842]" aria-hidden="true">·</span>
                <span>ADVOCATE HIGH COURT</span>
                <span className="text-[#E5B842]" aria-hidden="true">·</span>
                <span>SIALKOT & LAHORE</span>
              </div>

              {/* Full Name & Formal Designation */}
              <div className="pb-5 mb-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-[-0.02em] leading-[1.08]">
                    Mian Qadeer Hussain
                  </h3>
                  <p className="font-sans text-[13.5px] sm:text-[14.5px] font-semibold text-[#9B112C] mt-1">
                    Founder & Principal Advocate · Qadeer Legal Chambers
                  </p>
                </div>

                <div className="font-sans text-[12.5px] text-[#475569] font-medium">
                  LL.B. · Advocate High Court
                </div>
              </div>

              {/* Concise Editorial Overview */}
              <p className="font-sans text-[15px] sm:text-[16px] text-[#334155] leading-[1.68] font-normal mb-7">
                With over <strong className="font-semibold text-[#9B112C]">18 years of active legal practice</strong>, Mian Qadeer Hussain leads Qadeer Legal Chambers as Founder and Principal Advocate. Practicing before the High Court, District and Sessions Courts, and specialized tribunals across Pakistan, he advises and represents domestic litigants, corporate enterprises, overseas Pakistanis, and international law firms requiring authoritative Pakistani-law counsel.
              </p>

              {/* 2x2 Credentials Grid: Qualifications, Bar Enrolment, Courts & Mandate */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
                {CREDENTIAL_LEDGER.map((block) => {
                  const BlockIcon = block.Icon;
                  return (
                    <div
                      key={block.category}
                      className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#E5B842]/60 transition-colors"
                    >
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <span className="w-7 h-7 rounded-lg bg-[#9B112C] text-[#E5B842] flex items-center justify-center shrink-0">
                          <BlockIcon className="w-4 h-4" aria-hidden="true" />
                        </span>
                        <h4 className="font-serif text-lg sm:text-[1.2rem] font-bold text-[#9B112C] leading-tight">
                          {block.category}
                        </h4>
                      </div>

                      <ul className="space-y-1.5 font-sans text-[13.5px] text-[#334155] leading-[1.45]">
                        {block.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span
                              className="w-1.5 h-1.5 rounded-full bg-[#E5B842] mt-1.5 shrink-0"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Major Areas of Practice Ledger */}
            <div className="pt-5 border-t border-slate-200">
              <div className="font-sans text-[11px] uppercase tracking-[0.16em] font-bold text-[#9B112C] mb-3">
                MAJOR AREAS OF PRACTICE
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {MAJOR_PRACTICE_AREAS.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2.5 font-sans text-[13.5px] font-semibold text-[#1E293B] bg-slate-50 px-3.5 py-2.5 rounded-xl border border-slate-200/80 hover:border-[#9B112C]/40 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#9B112C] shrink-0" aria-hidden="true" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
