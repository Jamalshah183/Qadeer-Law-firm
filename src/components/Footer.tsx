import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react';
import { FIRM_CONFIG } from '../data/firmData';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenConsultation,
}) => {
  return (
    <footer className="bg-[#3E0808] text-[#FDF0D5] relative border-t-2 border-[#5B1111] rounded-t-[40px] sm:rounded-t-[50px] overflow-hidden mt-6 shadow-2xl">
      {/* Subtle top gold accent bar */}
      <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#C6A15B]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#C6A15B]/20">
          {/* Column 1: Logo & Firm Summary (col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-2.5">
              <img
                src={FIRM_CONFIG.logoUrl}
                alt="Qadeer Law Firm"
                className="h-12 sm:h-14 w-auto object-contain drop-shadow-md shrink-0"
              />
              <span className="font-serif font-bold text-xl sm:text-2xl tracking-[0.02em] text-[#FDF0D5] leading-[1.1]">
                Qadeer Law Firm
              </span>
            </div>

            <p className="text-sm text-[#FDF0D5]/80 leading-relaxed font-normal max-w-sm">
              Dedicated advocates delivering focused legal guidance, strategic representation, and trusted counsel across corporate, civil, property, criminal, and tax disciplines.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#5B1111] hover:bg-[#5B1111]/80 text-[#FDF0D5] text-xs uppercase tracking-wider font-semibold rounded border border-[#C6A15B]/40 transition-colors shadow-xs"
              >
                <span>Free Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C6A15B]" />
              </button>
            </div>
          </div>

          {/* Column 2: Navigation Links (col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#C6A15B] font-bold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#FDF0D5]/80 font-normal">
              {FIRM_CONFIG.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#FDF0D5] transition-colors hover:translate-x-0.5 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Practice Areas (col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#C6A15B] font-bold">
              Practice Areas
            </h4>
            <ul className="space-y-2.5 text-sm text-[#FDF0D5]/80 font-normal">
              {FIRM_CONFIG.practiceAreas.map((area) => (
                <li key={area.id}>
                  <a
                    href="#practice-areas"
                    className="hover:text-[#FDF0D5] transition-colors hover:translate-x-0.5 inline-block"
                  >
                    {area.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Chambers (col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#C6A15B] font-bold">
              Contact Chambers
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-[#FDF0D5]/85">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                <a
                  href={`tel:${FIRM_CONFIG.contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="hover:text-[#FDF0D5] transition-colors tabular-nums"
                >
                  {FIRM_CONFIG.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                <a
                  href={`https://wa.me/${FIRM_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
                    FIRM_CONFIG.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FDF0D5] transition-colors tabular-nums"
                >
                  WhatsApp: {FIRM_CONFIG.contact.whatsappDisplay}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                <a
                  href={`mailto:${FIRM_CONFIG.contact.email}`}
                  className="hover:text-[#FDF0D5] transition-colors"
                >
                  {FIRM_CONFIG.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                <span className="leading-snug text-[#FDF0D5]/80">
                  {FIRM_CONFIG.contact.address}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal Policies */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FDF0D5]/70">
          <div>
            © {FIRM_CONFIG.establishedYear} {FIRM_CONFIG.firmName}. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-[#FDF0D5] transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-[#C6A15B]/40" aria-hidden="true">·</span>
            <button
              type="button"
              onClick={onOpenTerms}
              className="hover:text-[#FDF0D5] transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Terms of Use
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
