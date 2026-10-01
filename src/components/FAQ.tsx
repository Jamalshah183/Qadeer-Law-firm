import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { FIRM_CONFIG } from '../data/firmData';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FIRM_CONFIG.faqs[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FFF9EC] rounded-[32px] sm:rounded-[40px] mx-2 sm:mx-4 md:mx-6 my-6 border border-[#5B1111]/10 relative overflow-hidden shadow-xs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-6 bg-[#C6A15B]" aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#5B1111]">
              FAQ
            </span>
            <span className="h-[1px] w-6 bg-[#C6A15B]" aria-hidden="true" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#171313] leading-tight mb-4">
            Questions, Answered.
          </h2>

          <p className="text-base text-[#171313]/80 leading-relaxed font-normal">
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
                className="bg-[#FDF0D5] rounded-xl border border-[#5B1111]/15 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B1111] cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-serif font-semibold text-[#171313] hover:text-[#5B1111] transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#5B1111] text-[#FDF0D5] rotate-180'
                        : 'bg-[#5B1111]/10 text-[#5B1111]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 text-[#C6A15B]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#171313]/80 leading-relaxed font-normal border-t border-[#5B1111]/10 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-12 p-6 rounded-xl bg-[#FDF0D5] border border-[#C6A15B]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#5B1111]/10 flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5 text-[#5B1111]" />
            </div>
            <div>
              <p className="text-sm font-serif font-bold text-[#171313]">
                Do you have an unlisted inquiry?
              </p>
              <p className="text-xs text-[#6D6260]">
                Our intake coordinator is available via WhatsApp or phone.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${FIRM_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
              FIRM_CONFIG.whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#5B1111] hover:bg-[#3E0808] text-[#FDF0D5] text-xs uppercase tracking-wider font-semibold rounded transition-colors whitespace-nowrap"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Inquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
