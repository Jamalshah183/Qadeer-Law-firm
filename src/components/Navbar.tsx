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
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          if (y > 80) {
            setIsScrolled(true);
          } else if (y < 40) {
            setIsScrolled(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transform-gpu transition-all duration-300 will-change-transform ${
          isScrolled
            ? 'opacity-100 translate-y-0 pointer-events-auto bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-3.5'
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
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5B842] rounded"
              aria-label="Qadeer Legal Chambers - Home"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-[#9B112C]">
                  Qadeer
                </span>
                <span className="text-[10px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded border border-[#9B112C]/25 text-[#9B112C] bg-[#9B112C]/5">
                  Legal Chambers
                </span>
              </div>
            </a>

            {/* 
              Navigation Links
            */}
            <nav className="hidden lg:flex items-center gap-8 text-[15px] font-semibold text-[#0F172A]">
              <a
                href="#about"
                className="hover:text-[#9B112C] transition-colors relative py-1"
              >
                About
              </a>
              <a
                href="#practice-areas"
                className="hover:text-[#9B112C] transition-colors relative py-1"
              >
                Practice Areas
              </a>
              <a
                href="#testimonials"
                className="hover:text-[#9B112C] transition-colors relative py-1"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="hover:text-[#9B112C] transition-colors relative py-1"
              >
                Contact
              </a>
            </nav>

            {/* Right Action: Free Consultation Button & Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#9B112C] hover:bg-[#800C22] text-white text-xs uppercase tracking-wider font-semibold rounded-full transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap"
              >
                <span>Free Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E5B842]" />
              </button>

              {/* Mobile menu hamburger toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5B842] transition-colors ${
                  isScrolled
                    ? 'text-[#9B112C] hover:bg-[#9B112C]/10'
                    : 'text-white hover:bg-white/10'
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
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white border-l border-slate-200 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-6 pt-16">
              <div className="pb-4 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#E5B842] font-semibold block mb-0.5">
                    Advocates • Litigation • Legal Advisory
                  </span>
                  <span className="text-lg font-serif font-bold text-[#9B112C]">
                    Qadeer Legal Chambers
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-full text-[#0F172A] hover:bg-slate-100"
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
                    className="text-base font-sans font-medium text-[#0F172A] hover:text-[#9B112C] py-2 transition-colors border-b border-slate-100 flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#E5B842]" />
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 space-y-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 bg-[#9B112C] text-white text-xs uppercase tracking-wider font-semibold rounded-full text-center block shadow-md hover:bg-[#800C22] transition-colors cursor-pointer"
              >
                Free Consultation
              </button>

              <a
                href={`tel:${FIRM_CONFIG.contact.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full py-2.5 bg-transparent border border-slate-200 text-[#0F172A] text-xs uppercase tracking-wider font-semibold rounded-full text-center flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#E5B842]" />
                <span className="tabular-nums">{FIRM_CONFIG.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
