import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { FIRM_CONFIG } from '../data/firmData';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'opacity-100 translate-y-0 pointer-events-auto bg-[#FDF0D5]/95 backdrop-blur-md shadow-md border-b border-[#5B1111]/15 py-3.5'
            : 'opacity-0 -translate-y-full pointer-events-none py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* 
              Brand Wordmark & Logo on the Left when scrolled
            */}
            <a
              href="#hero"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] rounded"
              aria-label="Qadeer Law Firm - Home"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-[#5B1111]">
                  Qadeer
                </span>
                <span className="text-[10px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded border border-[#5B1111]/25 text-[#5B1111] bg-[#5B1111]/5">
                  Law Firm
                </span>
              </div>
            </a>

            {/* 
              Navigation Links
            */}
            <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-[#171313]">
              <a
                href="#about"
                className="hover:text-[#5B1111] transition-colors relative py-1"
              >
                About
              </a>
              <a
                href="#practice-areas"
                className="hover:text-[#5B1111] transition-colors relative py-1"
              >
                Practice Areas
              </a>
              <a
                href="#testimonials"
                className="hover:text-[#5B1111] transition-colors relative py-1"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="hover:text-[#5B1111] transition-colors relative py-1"
              >
                Contact
              </a>
            </nav>

            {/* Right Action: Free Consultation Button & Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#5B1111] hover:bg-[#3E0808] text-[#FDF0D5] text-xs uppercase tracking-wider font-semibold rounded-full transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap"
              >
                <span>Free Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C6A15B]" />
              </button>

              {/* Mobile menu hamburger toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] transition-colors ${
                  isScrolled
                    ? 'text-[#5B1111] hover:bg-[#5B1111]/10'
                    : 'text-[#FDF0D5] hover:bg-white/10'
                }`}
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#3E0808]/70 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#FFF9EC] border-l border-[#5B1111]/20 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-6 pt-16">
              <div className="pb-4 border-b border-[#5B1111]/10 flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#C6A15B] font-semibold block mb-0.5">
                    Navigation
                  </span>
                  <span className="text-lg font-serif font-bold text-[#5B1111]">
                    Qadeer Law Firm
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-full text-[#171313] hover:bg-[#5B1111]/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col space-y-3">
                {[
                  { label: 'About', href: '#about' },
                  { label: 'Service', href: '#practice-areas' },
                  { label: 'Testimonial', href: '#testimonials' },
                  { label: 'FAQ', href: '#faq' },
                  { label: 'Contact', href: '#contact' },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-serif text-[#171313] hover:text-[#5B1111] py-2 transition-colors border-b border-[#5B1111]/5 flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C6A15B]" />
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 space-y-3 border-t border-[#5B1111]/15">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 bg-[#5B1111] text-[#FDF0D5] text-xs uppercase tracking-wider font-semibold rounded-full text-center block shadow hover:bg-[#3E0808] transition-colors"
              >
                Free Consultation
              </button>

              <a
                href={`tel:${FIRM_CONFIG.contact.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full py-2.5 bg-transparent border border-[#5B1111]/30 text-[#5B1111] text-xs uppercase tracking-wider font-semibold rounded-full text-center flex items-center justify-center gap-2 hover:bg-[#5B1111]/5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span className="tabular-nums">{FIRM_CONFIG.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
