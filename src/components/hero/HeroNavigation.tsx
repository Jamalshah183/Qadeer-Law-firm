import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { heroConfig } from '../../data/heroConfig';
import { useTransparentLogo } from '../../utils/useTransparentLogo';

interface HeroNavigationProps {
  onOpenConsultation: () => void;
}

export const HeroNavigation: React.FC<HeroNavigationProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { logoSrc, isProcessed } = useTransparentLogo(heroConfig.logo);

  return (
    <>
      <nav
        className="w-full z-[25] relative pt-6 sm:pt-8 pb-4"
        aria-label="Hero navigation"
      >
        <div className="w-full flex items-center">
          {/* 
            ====================================================================
            LEFT CONTAINER SECTION (Aligned directly with where HeroContent writing starts)
            ====================================================================
          */}
          <div className="w-full lg:w-[53%] xl:w-[52%] px-6 sm:px-10 lg:pl-12 lg:pr-2 xl:pr-4 flex justify-center lg:justify-end">
            <div className="w-full max-w-[580px] xl:max-w-[620px] flex items-center justify-between">
              {/* Qadeer Law Chamber Logo aligned with HeroContent start */}
              <a
                href="#hero"
                className="inline-flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] rounded-lg transition-transform duration-200 hover:scale-[1.02]"
                aria-label="Qadeer Law Chamber - Home"
              >
                <img
                  src={logoSrc}
                  alt="Qadeer Law Chamber Logo"
                  className={`h-14 sm:h-16 lg:h-20 w-auto object-contain object-left drop-shadow-md shrink-0 ${
                    isProcessed ? '' : 'mix-blend-screen'
                  }`}
                />
              </a>

              {/* Mobile Hamburger Button */}
              <div className="lg:hidden flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className="p-2 rounded-lg bg-white/15 text-[#FDF0D5] hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-[#C6A15B] transition-colors cursor-pointer"
                  aria-label="Open mobile menu"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* 
            ====================================================================
            RIGHT SECTION: Starts where the left side container ends (at 58%)
            ====================================================================
          */}
          <div className="hidden lg:flex items-center lg:ml-[5%] xl:ml-[6%] pl-8 xl:pl-12">
            <div className="flex items-center gap-7 xl:gap-9 font-sans text-[14.5px] font-semibold tracking-[0.03em] text-[#171313]">
              {heroConfig.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="hover:text-[#5B1111] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#5B1111] hover:after:w-full after:transition-all whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </div>
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
                <div className="flex items-center gap-2">
                  <img
                    src={logoSrc}
                    alt="Qadeer Law Chamber"
                    className="h-9 sm:h-10 w-auto object-contain shrink-0"
                  />
                  <span className="font-serif font-semibold text-base sm:text-lg tracking-[-0.01em] text-[#5B1111] leading-tight">
                    Qadeer Law Chamber
                  </span>
                </div>
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
                    className="font-sans text-[15px] font-semibold tracking-[0.03em] text-[#171313] hover:text-[#5B1111] py-2 transition-colors border-b border-[#5B1111]/10 flex items-center justify-between"
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
                className="w-full py-3 bg-[#5B1111] hover:bg-[#3E0808] text-[#FDF0D5] font-sans text-[13px] uppercase tracking-[0.06em] font-bold rounded-full text-center block shadow transition-colors"
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
