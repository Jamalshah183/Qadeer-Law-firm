import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { heroConfig } from '../../data/heroConfig';

interface HeroNavigationProps {
  onOpenConsultation: () => void;
}

export const HeroNavigation: React.FC<HeroNavigationProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="w-full z-[25] relative pt-6 sm:pt-8 pb-4"
        aria-label="Hero navigation"
      >
        <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 flex items-center justify-between">
          {/* 
            ====================================================================
            TOP-LEFT: Qadeer Law Firm Logo
            Positioned over the burgundy section (~70–90px from left on desktop).
            Preserves exact proportions, framed in a clean elevated container.
            ====================================================================
          */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] rounded"
            aria-label="Qadeer Law Firm - Home"
          >
            <div className="relative flex items-center justify-center p-1.5 sm:p-2 rounded-lg bg-[#FFF9EC] border border-[#C6A15B]/40 shadow-md transition-transform duration-200 group-hover:scale-102">
              <img
                src={heroConfig.logo}
                alt="Qadeer Law Firm Logo"
                className="h-9 sm:h-11 w-auto object-contain max-w-[160px] sm:max-w-[200px]"
              />
            </div>
          </a>

          {/* 
            ====================================================================
            TOP-RIGHT: Navigation Links (on the Cream side)
            Clean sans-serif font, medium weight, dark text #171313, generous spacing.
            ====================================================================
          */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            <div className="flex items-center gap-7 xl:gap-9 text-[15px] font-medium text-[#171313]">
              {heroConfig.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="hover:text-[#5B1111] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#5B1111] hover:after:w-full after:transition-all"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Optional subtle CTA pill on the cream side */}
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#5B1111] hover:bg-[#3E0808] text-[#FDF0D5] text-xs uppercase tracking-wider font-semibold shadow-xs hover:shadow transition-all duration-200 cursor-pointer"
            >
              <span>Free Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C6A15B]" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-lg bg-white/15 text-[#FDF0D5] hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-[#C6A15B] transition-colors"
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          <div
            className="fixed inset-0 bg-[#3E0808]/75 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#FFF9EC] border-l border-[#5B1111]/20 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-6 pt-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#5B1111]/15">
                <img
                  src={heroConfig.logo}
                  alt="Qadeer Law Firm"
                  className="h-9 w-auto object-contain"
                />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-full text-[#171313] hover:bg-[#5B1111]/10"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col space-y-3">
                {heroConfig.navigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-serif font-bold text-[#171313] hover:text-[#5B1111] py-2 transition-colors border-b border-[#5B1111]/10 flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C6A15B]" />
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#5B1111]/15">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 bg-[#5B1111] hover:bg-[#3E0808] text-[#FDF0D5] text-xs uppercase tracking-wider font-semibold rounded-full text-center block shadow transition-colors"
              >
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
