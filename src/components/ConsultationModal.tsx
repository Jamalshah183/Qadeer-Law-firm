import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, ArrowUpRight, MessageSquare, CheckCircle2 } from 'lucide-react';
import { FIRM_CONFIG } from '../data/firmData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPractice?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedPractice = '',
}) => {
  const [selectedPractice, setSelectedPractice] = useState<string>(preselectedPractice);

  useEffect(() => {
    setSelectedPractice(preselectedPractice);
  }, [preselectedPractice]);

  if (!isOpen) return null;

  const whatsappText = selectedPractice
    ? `Assalam-o-Alaikum Qadeer Law Chamber, I would like to schedule a legal consultation regarding ${selectedPractice}.`
    : FIRM_CONFIG.whatsappMessage;

  const whatsappUrl = `https://wa.me/${FIRM_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
    whatsappText
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#3E0808]/75 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#FFF9EC] rounded-2xl max-w-xl w-full border border-[#5B1111]/30 shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#5B1111] p-6 text-[#FDF0D5] relative border-b border-[#C6A15B]/30">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-[#3E0808]/80 hover:bg-[#3E0808] text-[#FDF0D5] transition-colors focus:outline-none cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-1">
            <span className="h-[1px] w-6 bg-[#C6A15B]" />
            <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-[#C6A15B] font-bold">
              Direct WhatsApp Intake
            </span>
          </div>
          <h3 id="consultation-modal-title" className="font-serif text-2xl sm:text-[1.75rem] font-semibold tracking-[-0.015em] text-[#FDF0D5]">
            Connect Directly via WhatsApp
          </h3>
          <p className="font-sans text-[13px] text-[#FDF0D5]/80 mt-1">
            Zero forms to fill. Speak directly with Qadeer Law Chamber on WhatsApp.
          </p>
        </div>

        {/* Content — Strictly WhatsApp Only, No Form */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <span className="block font-sans text-[11px] uppercase tracking-[0.12em] font-bold text-[#171313] mb-2">
              Optional: Select Matter Topic to Pre-fill Message
            </span>
            <div className="flex flex-wrap gap-2">
              {FIRM_CONFIG.practiceAreas.map((area) => {
                const isSelected = selectedPractice === area.title;
                return (
                  <button
                    key={area.id}
                    type="button"
                    onClick={() =>
                      setSelectedPractice(isSelected ? '' : area.title)
                    }
                    className={`px-3 py-1.5 rounded-lg font-sans text-[12.5px] font-medium transition-all cursor-pointer border ${
                      isSelected
                        ? 'bg-[#5B1111] text-[#FDF0D5] border-[#5B1111]'
                        : 'bg-[#FDF0D5]/60 text-[#171313] border-[#5B1111]/20 hover:border-[#5B1111]/50'
                    }`}
                  >
                    {area.title}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#FDF0D5]/70 border border-[#5B1111]/15 space-y-2">
            <div className="flex items-center gap-2 font-sans text-[13px] font-semibold text-[#5B1111]">
              <CheckCircle2 className="w-4 h-4 text-[#C6A15B] shrink-0" />
              <span>Official Chambers WhatsApp: {FIRM_CONFIG.contact.whatsappDisplay}</span>
            </div>
            <p className="font-sans text-[13px] text-[#171313]/80 leading-[1.55]">
              Click below to launch WhatsApp immediately and discuss your legal matter in strict confidence.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-1.5 font-sans text-[12px] text-[#6D6260]">
              <ShieldCheck className="w-4 h-4 text-[#C6A15B]" />
              <span>Strictly confidential</span>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#5B1111] hover:bg-[#3E0808] text-[#FDF0D5] font-sans text-[13px] uppercase tracking-[0.06em] font-bold rounded-lg shadow transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#C6A15B]" />
              <span>Open WhatsApp Chat</span>
              <ArrowUpRight className="w-4 h-4 text-[#C6A15B]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
