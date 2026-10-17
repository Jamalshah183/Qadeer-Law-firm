import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FIRM_CONFIG } from '../data/firmData';
import goldenWorldMapTransparent from '../assets/images/golden_world_map_transparent.png';

interface InternationalCounselProps {
  onOpenConsultation?: () => void;
}

const INTERNATIONAL_SERVICES = [
  {
    title: 'Local Co-Counsel',
    description: 'Instructing partner for global law firms',
  },
  {
    title: 'Commercial Litigation',
    description: 'High Court writs, stays & trial proceedings',
  },
  {
    title: 'Foreign Arbitral Awards',
    description: 'Enforcement of international judgments',
  },
  {
    title: 'Foreign Investment & SECP',
    description: 'Joint ventures, FDI & regulatory filings',
  },
  {
    title: 'Asset Due Diligence',
    description: 'Land revenue searches & corporate audits',
  },
  {
    title: 'Overseas Estates',
    description: 'Succession certificates & asset transfers',
  },
];

export const InternationalCounsel: React.FC<InternationalCounselProps> = ({
  onOpenConsultation,
}) => {
  const whatsappBaseText =
    'Assalam-o-Alaikum Qadeer Legal Chambers, I am inquiring regarding your International Counsel Services in Pakistan.';
  const whatsappHref = `https://wa.me/${FIRM_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
    whatsappBaseText
  )}`;

  const handleActionClick = (e: React.MouseEvent) => {
    if (onOpenConsultation) {
      e.preventDefault();
      onOpenConsultation();
    }
  };

  return (
    <section
      id="international-counsel"
      className="relative z-[13] -mt-10 sm:-mt-12 lg:-mt-14 min-h-screen lg:min-h-[105vh] xl:min-h-[112vh] flex flex-col justify-center rounded-t-[50px] sm:rounded-t-[65px] lg:rounded-t-[80px] border-t-2 border-[#E5B842]/40 shadow-[0_-25px_50px_-15px_rgba(155,17,44,0.35)] overflow-hidden bg-gradient-to-b from-[#9B112C] via-[#800F24] to-[#6A0C1E] py-8 sm:py-12 lg:py-16"
    >
      {/* ======================================================================
          BACKGROUND LAYER: Website-Matched Royal Chamber Burgundy Canvas
          Matching Principal Advocate & Experience sections (#9B112C to #6A0C1E)
          ====================================================================== */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Soft Radial Studio Vignette matching Principal Advocate section */}
        <div
          className="absolute inset-0 bg-radial from-transparent via-black/10 to-black/35 pointer-events-none"
          aria-hidden="true"
        />

        {/* Enlarged Warm Gold Ambient Spotlight directly behind the world map */}
        <div
          className="absolute top-1/4 right-0 lg:right-4 w-[52rem] h-[52rem] xl:w-[62rem] xl:h-[62rem] bg-[#E5B842]/[0.14] rounded-full blur-[170px] pointer-events-none"
          aria-hidden="true"
        />

        {/* Royal Burgundy Radial Ambient Glow matching website primary #9B112C */}
        <div
          className="absolute bottom-1/4 left-4 w-[42rem] h-[42rem] bg-[#9B112C]/40 rounded-full blur-[160px] pointer-events-none"
          aria-hidden="true"
        />


        {/* Top/Bottom Edge Feathers to seamlessly melt into surrounding sections */}
        <div
          className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#9B112C]/80 to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#6A0C1E]/90 to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* ======================================================================
          MAIN 2-COLUMN CONTAINER: Content on Left · Enlarged Majestic Map on Right
          ====================================================================== */}
      <div className="relative z-10 max-w-[94rem] mx-auto w-full px-5 sm:px-8 lg:px-10 xl:px-14 pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40 pb-24 sm:pb-28 md:pb-32 lg:pb-36 xl:pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-14 items-center">
          
          {/* ==================================================================
              LEFT SIDE: Content & Mandates
              ================================================================== */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center items-center text-center">
            {/* Section Eyebrow (Hidden on mobile version only) */}
            <div className="hidden sm:inline-flex items-center justify-center gap-2 mb-3 sm:mb-3.5">
              <span className="w-1.5 h-1.5 rotate-45 bg-[#E5B842]" aria-hidden="true" />
              <span className="font-sans text-[11px] sm:text-[12px] uppercase tracking-[0.16em] font-bold text-[#E5B842]">
                YOUR GLOBAL LEGAL PARTNER IN PAKISTAN
              </span>
              <span className="w-1.5 h-1.5 rotate-45 bg-[#E5B842]" aria-hidden="true" />
            </div>

            {/* Main Headline */}
            <h2 className="text-[2.25rem] sm:text-[2.85rem] md:text-[3.25rem] xl:text-[3.65rem] font-sans font-bold text-white leading-[1.05] tracking-[-0.02em] mb-3 sm:mb-3.5 drop-shadow-sm text-center">
              <span className="block font-sans">International</span>
              <span className="block text-[#E5B842] italic font-semibold font-sans">
                Counsel Services
              </span>
            </h2>

            {/* Core Practice Positioning Line (Hidden on mobile version only) */}
            <div className="hidden sm:flex items-center justify-center mb-3.5 sm:mb-4">
              <p className="font-sans text-[11.5px] sm:text-[12.5px] uppercase tracking-[0.14em] text-white/90 font-bold text-center">
                Cross-Border Advocacy • Pakistan Local Counsel
              </p>
            </div>

            {/* Narrative Statement */}
            <p className="font-sans text-[14.5px] sm:text-[16px] text-white/95 leading-[1.6] sm:leading-[1.65] font-normal mb-6 sm:mb-8 text-center max-w-xl mx-auto">
              For international law firms, businesses and individuals — we handle your
              legal matters in Pakistan, so you can focus on what matters most, globally.
            </p>

            {/* What We Do For International Law Firms & Clients */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3.5 mb-8 sm:mb-10 w-full max-w-lg mx-auto">
              {INTERNATIONAL_SERVICES.map((service) => (
                <div key={service.title} className="flex flex-col items-center text-center">
                  <div className="inline-flex items-center gap-1.5 justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E5B842] shrink-0 shadow-[0_0_6px_#E5B842]" />
                    <span className="font-sans text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.1em] text-white">
                      {service.title}
                    </span>
                  </div>
                  <div className="font-sans text-[12px] text-[#E5B842]/90 leading-tight mt-0.5 text-center">
                    {service.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Call-to-Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleActionClick}
                className="group inline-flex items-center justify-between sm:justify-center gap-2.5 sm:gap-3.5 pl-6 sm:pl-7 pr-2 sm:pr-2.5 h-[50px] sm:h-[54px] rounded-full bg-[#E5B842] hover:bg-[#d4a833] text-[#0F172A] font-sans font-bold text-[12px] sm:text-[13px] whitespace-nowrap shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
              >
                <span className="tracking-[0.05em] uppercase">GET IN TOUCH</span>
                <span className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full bg-white text-[#0F172A] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 shadow-xs shrink-0">
                  <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </span>
              </a>

              <div
                className="hidden sm:block h-8 w-[1.5px] bg-[#E5B842]/30"
                aria-hidden="true"
              />

              <div className="font-sans text-[10.5px] sm:text-[11.5px] uppercase tracking-[0.12em] text-white/85 font-bold leading-tight text-center sm:text-left">
                <span className="block">LET US HANDLE THE LEGAL SIDE</span>
                <span className="block text-[#E5B842]">IN PAKISTAN</span>
              </div>
            </div>
          </div>

          {/* ==================================================================
              RIGHT SIDE: Illuminated Golden World Counsel Map
              Contained within viewport - engraved directly in burgundy background
              ================================================================== */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center relative">
            <div className="relative w-full flex items-center justify-center pointer-events-none select-none py-2 sm:py-4">
              {/* Photorealistic Golden World Counsel Map (Contained within screen boundaries) */}
              <img
                src={goldenWorldMapTransparent}
                alt="Pakistan to Global Legal Network Map with radiating golden counsel arcs connecting North America, Europe, Asia, South America, Africa, and Australia"
                className="w-full max-w-full h-auto max-h-[480px] sm:max-h-[540px] lg:max-h-[580px] xl:max-h-[620px] object-contain object-center drop-shadow-[0_0_40px_rgba(229,184,66,0.30)]"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

