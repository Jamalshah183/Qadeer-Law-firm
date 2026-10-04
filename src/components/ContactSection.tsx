import React, { useState, useEffect } from 'react';
import { MapPin, MessageSquare, Clock, ShieldCheck, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { FIRM_CONFIG } from '../data/firmData';

interface ContactSectionProps {
  initialPracticeArea?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialPracticeArea = '' }) => {
  const [selectedTopic, setSelectedTopic] = useState<string>(
    initialPracticeArea || ''
  );

  useEffect(() => {
    if (initialPracticeArea) {
      setSelectedTopic(initialPracticeArea);
    }
  }, [initialPracticeArea]);

  const whatsappText = selectedTopic
    ? `Assalam-o-Alaikum Qadeer Law Firm, I would like to request a legal consultation regarding ${selectedTopic}.`
    : FIRM_CONFIG.whatsappMessage;

  const whatsappHref = `https://wa.me/${FIRM_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
    whatsappText
  )}`;

  return (
    <section
      id="contact"
      className="relative z-[15] -mt-10 sm:-mt-12 lg:-mt-14 pt-20 sm:pt-24 md:pt-28 pb-28 md:pb-36 bg-[#5B1111] text-[#FDF0D5] rounded-t-[50px] sm:rounded-t-[65px] lg:rounded-t-[80px] border-t-2 border-[#C6A15B]/35 shadow-[0_-25px_50px_-15px_rgba(62,8,8,0.35)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Direct Chambers Details (Strictly WhatsApp Only) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-3">
                <span className="h-[1px] w-6 bg-[#C6A15B]" aria-hidden="true" />
                <span className="font-sans text-[11px] sm:text-[12px] uppercase tracking-[0.16em] font-bold text-[#C6A15B]">
                  INITIATE A CONSULTATION
                </span>
              </div>

              {/* Large Serif Heading */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[3.25rem] font-semibold text-[#FDF0D5] leading-[1.08] tracking-[-0.02em] mb-6">
                Let’s Discuss Your{' '}
                <span className="text-[#C6A15B] italic font-normal">Legal Matter.</span>
              </h2>

              <p className="font-sans text-[16px] sm:text-[17px] text-[#FDF0D5]/85 leading-[1.65] font-normal mb-8">
                We have eliminated lengthy intake forms. Connect directly with our chambers via official WhatsApp to arrange a confidential preliminary consultation protected by professional privilege.
              </p>

              {/* Contact Details List — Strictly WhatsApp & Chambers Location */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#3E0808] border border-[#C6A15B]/35 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageSquare className="w-4 h-4 text-[#C6A15B]" />
                  </div>
                  <div>
                    <span className="font-sans text-[11px] uppercase tracking-[0.14em] text-[#C6A15B] font-bold block">
                      Official WhatsApp Line (Only Contact Method)
                    </span>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-[15.5px] font-semibold tracking-[0.01em] text-[#FDF0D5] hover:text-[#C6A15B] transition-colors tabular-nums"
                    >
                      {FIRM_CONFIG.contact.whatsappDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#3E0808] border border-[#C6A15B]/35 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#C6A15B]" />
                  </div>
                  <div>
                    <span className="font-sans text-[11px] uppercase tracking-[0.14em] text-[#C6A15B] font-bold block">
                      Chambers Location
                    </span>
                    <p className="font-sans text-[14.5px] text-[#FDF0D5]/90 leading-[1.55] font-normal">
                      {FIRM_CONFIG.contact.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours Note */}
            <div className="p-4 rounded-xl bg-[#3E0808]/80 border border-[#C6A15B]/30 flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#C6A15B] shrink-0" />
              <div className="font-sans text-[12.5px] text-[#FDF0D5]/85 leading-[1.5]">
                <span className="font-semibold text-[#C6A15B]">Consultation Hours: </span>
                {FIRM_CONFIG.contact.officeHours}
              </div>
            </div>
          </div>

          {/* Right Column: Zero-Friction Direct WhatsApp Consultation Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFF9EC] text-[#171313] rounded-2xl p-8 sm:p-10 border border-[#C6A15B]/40 shadow-2xl relative">
              {/* Gold decorative top border */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent" />

              <div className="space-y-6">
                <div className="border-b border-[#5B1111]/10 pb-4">
                  <div className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.14em] font-bold text-[#5B1111] mb-2">
                    <MessageSquare className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span>Direct WhatsApp Chambers Intake</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold tracking-[-0.01em] text-[#171313]">
                    Instant Consultation via WhatsApp
                  </h3>
                  <p className="font-sans text-[14.5px] text-[#6D6260] mt-1.5 leading-[1.6]">
                    No forms to fill out. Start a direct WhatsApp conversation with our legal intake desk to share your matter summary or schedule a private consultation.
                  </p>
                </div>

                {/* Optional 1-Tap Topic Selector to pre-fill the WhatsApp message */}
                <div>
                  <span className="block font-sans text-[11px] uppercase tracking-[0.12em] font-bold text-[#171313] mb-2.5">
                    Select Matter Topic (Optional — Pre-fills Your WhatsApp Message)
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {FIRM_CONFIG.practiceAreas.map((area) => {
                      const isSelected = selectedTopic === area.title;
                      return (
                        <button
                          key={area.id}
                          type="button"
                          onClick={() =>
                            setSelectedTopic(isSelected ? '' : area.title)
                          }
                          className={`px-3.5 py-2 rounded-lg font-sans text-[13px] font-medium transition-all cursor-pointer border ${
                            isSelected
                              ? 'bg-[#5B1111] text-[#FDF0D5] border-[#5B1111] shadow-xs'
                              : 'bg-[#FDF0D5]/60 text-[#171313] border-[#5B1111]/20 hover:border-[#5B1111]/50'
                          }`}
                        >
                          {area.title}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Key Benefits of Direct WhatsApp Intake */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="flex items-center gap-2.5 font-sans text-[13.5px] font-medium text-[#171313]/90">
                    <CheckCircle2 className="w-4 h-4 text-[#5B1111] shrink-0" />
                    <span>Zero forms or waiting queues</span>
                  </div>
                  <div className="flex items-center gap-2.5 font-sans text-[13.5px] font-medium text-[#171313]/90">
                    <CheckCircle2 className="w-4 h-4 text-[#5B1111] shrink-0" />
                    <span>Direct senior counsel routing</span>
                  </div>
                  <div className="flex items-center gap-2.5 font-sans text-[13.5px] font-medium text-[#171313]/90">
                    <CheckCircle2 className="w-4 h-4 text-[#5B1111] shrink-0" />
                    <span>Share case documents securely</span>
                  </div>
                  <div className="flex items-center gap-2.5 font-sans text-[13.5px] font-medium text-[#171313]/90">
                    <CheckCircle2 className="w-4 h-4 text-[#5B1111] shrink-0" />
                    <span>Strict attorney-client privilege</span>
                  </div>
                </div>

                {/* Direct WhatsApp CTA Button */}
                <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#5B1111]/10">
                  <div className="flex items-center gap-1.5 font-sans text-[12px] text-[#6D6260]">
                    <ShieldCheck className="w-4 h-4 text-[#C6A15B] shrink-0" />
                    <span>End-to-end encrypted & privileged communication.</span>
                  </div>

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#5B1111] hover:bg-[#3E0808] text-[#FDF0D5] font-sans text-[13px] uppercase tracking-[0.06em] font-bold rounded-lg transition-all duration-200 shadow-md cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-[#C6A15B]" />
                    <span>Chat on WhatsApp Now</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C6A15B]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
