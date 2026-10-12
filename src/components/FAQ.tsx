import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { FIRM_CONFIG } from '../data/firmData';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FIRM_CONFIG.faqs[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative z-[17] -mt-10 sm:-mt-12 lg:-mt-14 pt-20 sm:pt-24 md:pt-28 pb-28 md:pb-36 bg-[#5B1111] text-[#FDF0D5] rounded-t-[50px] sm:rounded-t-[65px] lg:rounded-t-[80px] border-t-2 border-[#C6A15B]/35 shadow-[0_-25px_50px_-15px_rgba(62,8,8,0.35)] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-6 bg-[#C6A15B]" aria-hidden="true" />
            <span className="font-sans text-[11px] sm:text-[12px] uppercase tracking-[0.16em] font-bold text-[#C6A15B]">
              FAQ
            </span>
            <span className="h-[1px] w-6 bg-[#C6A15B]" aria-hidden="true" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[3.25rem] font-semibold text-[#FDF0D5] leading-[1.08] tracking-[-0.02em] mb-4">
            Questions, Answered.
          </h2>

          <p className="font-sans text-[16px] sm:text-[17px] text-[#FDF0D5]/85 leading-[1.65] font-normal">
            Essential information regarding our consultation procedures, case intake, and representation guidelines.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FIRM_CONFIG.faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#3E0808]/70 rounded-xl border border-[#C6A15B]/30 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans text-[16px] sm:text-[17px] font-semibold tracking-[-0.005em] leading-[1.45] text-[#FDF0D5] hover:text-[#C6A15B] transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#C6A15B] text-[#171313] rotate-180'
                        : 'bg-[#FDF0D5]/10 text-[#C6A15B]'
                    }`}
                  >
                    <ChevronDown className={`w-4 h-4 ${isOpen ? 'text-[#171313]' : 'text-[#C6A15B]'}`} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 font-sans text-[15px] sm:text-[16px] text-[#FDF0D5]/85 leading-[1.65] font-normal border-t border-[#C6A15B]/20 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-12 p-6 rounded-xl bg-[#3E0808]/80 border border-[#C6A15B]/35 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C6A15B]/15 flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5 text-[#C6A15B]" />
            </div>
            <div>
              <p className="font-sans text-[15px] font-semibold text-[#FDF0D5]">
                Do you have an unlisted inquiry?
              </p>
              <p className="font-sans text-[13px] font-normal text-[#FDF0D5]/80">
                Our intake coordinator is available directly via WhatsApp.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${FIRM_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
              FIRM_CONFIG.whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C6A15B] hover:bg-[#b8924b] text-[#171313] font-sans text-[13px] uppercase tracking-[0.06em] font-bold rounded transition-colors whitespace-nowrap"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#171313]" />
            <span>Inquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
