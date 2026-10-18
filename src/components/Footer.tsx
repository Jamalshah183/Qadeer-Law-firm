import React from 'react';
import { MessageSquare, ArrowUpRight } from 'lucide-react';
import { FIRM_CONFIG } from '../data/firmData';
import { heroConfig } from '../data/heroConfig';
import { useTransparentLogo } from '../utils/useTransparentLogo';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenConsultation: () => void;
  selectedPracticeArea?: string;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  selectedPracticeArea = '',
}) => {
  const { logoSrc, isProcessed } = useTransparentLogo(heroConfig.logo);

  const whatsappText = selectedPracticeArea
    ? `Assalam-o-Alaikum Qadeer Legal Chambers, I would like to request a legal consultation regarding ${selectedPracticeArea}.`
    : FIRM_CONFIG.whatsappMessage;

  const whatsappHref = `https://wa.me/${FIRM_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
    whatsappText
  )}`;

  return (
    <footer
      id="contact"
      className="sticky bottom-0 z-[1] w-full bg-[#6A0C1E] text-white -mt-12 sm:-mt-16 lg:-mt-20 pt-24 sm:pt-32 lg:pt-36 pb-8 sm:pb-10 overflow-hidden select-none"
    >
      {/* Background Legal Desk & Gavel Photograph (Person-Free Still Life) */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center pointer-events-none scale-105"
        style={{
          backgroundImage: `url(${FIRM_CONFIG.images.about})`,
        }}
        aria-hidden="true"
      />

      {/* Rich Vibrant Burgundy Atmospheric Overlay matching the bright website vibe */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(140, 14, 38, 0.92) 0%, rgba(106, 12, 30, 0.90) 50%, rgba(74, 7, 19, 0.96) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Subtle radial vignette */}
      <div
        className="absolute inset-0 bg-radial from-transparent via-transparent to-black/40 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Centerpiece Editorial Headline + Advisory Statement + Zero-Friction WhatsApp Consultation CTA */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="hidden sm:block font-sans text-[12px] uppercase tracking-[0.2em] text-[#E5B842] font-bold mb-3">
            LOCAL EXPERTISE. GLOBAL COUNSEL.
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-white tracking-[-0.02em] leading-[1.06] mb-3 sm:mb-5">
            Let’s Discuss Your Legal Matter
          </h2>

          {/* Concise Mobile Summary */}
          <p className="sm:hidden max-w-xs mx-auto font-sans text-[13px] text-white/85 leading-[1.55] font-normal mb-5">
            Representation across Pakistan, Pakistani-law advisory, and local counsel for international firms.
          </p>

          {/* Full Editorial Desktop Summary */}
          <p className="hidden sm:block max-w-2xl mx-auto font-sans text-[16px] text-white/90 leading-[1.68] font-normal mb-8">
            From courtroom representation across Pakistan and authoritative opinions on Pakistani law to serving as trusted local counsel for international law firms, our advocates are prepared to review your brief and guide your next step.
          </p>

          {/* Direct WhatsApp Consultation Action */}
          <div className="flex flex-col items-center justify-center gap-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#E5B842] hover:bg-[#d4a833] text-[#0F172A] font-sans text-[12.5px] sm:text-[14px] uppercase tracking-[0.06em] font-bold shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#0F172A]" />
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 text-[#0F172A] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <span className="hidden sm:inline font-sans text-[12px] text-white/80 tracking-[0.03em]">
              Direct Chambers WhatsApp Intake · No Forms · Strictly Confidential
            </span>
          </div>
        </div>

        {/* Middle Row: Brand Logo + Chamber Jurisdictions & Practice Lockup on Left, Social Icons on Right */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 pb-4 sm:pb-6">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <a
              href="#hero"
              aria-label="Qadeer Legal Chambers - Home"
              className="inline-flex items-center transition-transform duration-200 hover:scale-[1.03] shrink-0"
            >
              <img
                src={logoSrc}
                alt="Qadeer Legal Chambers Logo"
                className="h-12 sm:h-16 lg:h-18 w-auto object-contain drop-shadow-md"
              />
            </a>

            {/* Compact single-line positioning badge on mobile */}
            <div className="sm:hidden font-sans text-[10.5px] uppercase tracking-[0.14em] text-[#E5B842] font-bold">
              ADVOCATES • LITIGATION • LEGAL ADVISORY
            </div>

            {/* Full Chamber Identity Lockup on tablet/desktop */}
            <div className="hidden sm:block sm:border-l sm:border-[#E5B842]/35 sm:pl-6">
              <div className="font-serif text-xl sm:text-2xl font-semibold text-white tracking-[0.02em] leading-snug">
                Qadeer Legal Chambers
              </div>
              <div className="mt-1 font-sans text-[11.5px] sm:text-[12px] uppercase tracking-[0.14em] text-[#E5B842] font-bold">
                ADVOCATES • LITIGATION • LEGAL ADVISORY
              </div>
              <div className="mt-1 flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-1 font-sans text-[12px] sm:text-[12.5px] text-white/85 font-normal">
                <span>Sialkot | Lahore | Pakistan</span>
                <span className="text-[#E5B842]" aria-hidden="true">·</span>
                <span>Local Expertise. Global Counsel.</span>
              </div>
            </div>
          </div>

          {/* Circular Social Icon Buttons */}
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-[#E5B842] text-[#9B112C] hover:text-[#0F172A] flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-105"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-[#E5B842] text-[#9B112C] hover:text-[#0F172A] flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-105"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-[#E5B842] text-[#9B112C] hover:text-[#0F172A] flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-105"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Thin Horizontal Divider Line */}
        <div className="w-full h-[1px] bg-white/20" aria-hidden="true" />

        {/* Bottom Row: Navigation Links on Left, Copyright & Legal Links on Right */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-[13.5px] sm:text-[14px] text-white/90">
          <nav className="flex flex-wrap items-center justify-center sm:justify-start gap-6 sm:gap-8" aria-label="Footer navigation">
            <a href="#hero" className="hover:text-[#E5B842] transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-[#E5B842] transition-colors">
              About
            </a>
            <a href="#practice-areas" className="hover:text-[#E5B842] transition-colors">
              Service
            </a>
            <a href="#insights" className="hover:text-[#E5B842] transition-colors">
              Insights
            </a>
            <a href="#faq" className="hover:text-[#E5B842] transition-colors">
              Faq
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E5B842] transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="flex flex-wrap items-center justify-center gap-4 text-[12.5px] sm:text-[13.5px] text-white/80">
            <span>© {new Date().getFullYear()} Qadeer Legal Chambers. All rights reserved.</span>
            <span className="text-[#E5B842]/50" aria-hidden="true">·</span>
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-[#E5B842] transition-colors cursor-pointer"
            >
              Privacy
            </button>
            <span className="text-[#E5B842]/50" aria-hidden="true">·</span>
            <button
              type="button"
              onClick={onOpenTerms}
              className="hover:text-[#E5B842] transition-colors cursor-pointer"
            >
              Terms
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
