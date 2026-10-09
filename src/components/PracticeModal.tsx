import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ArrowRight, CheckCircle2, Shield } from 'lucide-react';
import { PracticeArea } from '../data/firmData';

interface PracticeModalProps {
  practice: PracticeArea | null;
  onClose: () => void;
  onConsult: (practiceTitle: string) => void;
}

export const PracticeModal: React.FC<PracticeModalProps> = ({
  practice,
  onClose,
  onConsult,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (practice) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [practice, onClose]);

  if (!practice || typeof document === 'undefined') return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] overflow-y-auto flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="practice-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#3E0808]/75 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#FFF9EC] rounded-2xl max-w-2xl w-full max-h-[calc(100dvh-2rem)] overflow-y-auto border border-[#5B1111]/30 shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Top Image Banner */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-[#3E0808]">
          <img
            src={practice.image}
            alt={practice.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3E0808] via-[#3E0808]/40 to-transparent" />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#171313]/60 hover:bg-[#5B1111] text-[#FDF0D5] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C6A15B] cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category Title on image banner */}
          <div className="absolute bottom-4 left-6 right-6">
            <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-[#C6A15B] font-bold block mb-1">
              Practice Area
            </span>
            <h3
              id="practice-modal-title"
              className="font-serif text-2xl sm:text-3xl font-semibold tracking-[-0.015em] text-[#FDF0D5]"
            >
              {practice.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="font-sans text-[16px] text-[#171313]/90 leading-[1.65] font-normal">
            {practice.fullDesc}
          </p>

          <div className="pt-2">
            <h4 className="font-sans text-[11px] uppercase tracking-[0.14em] font-bold text-[#5B1111] mb-3 flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#C6A15B]" />
              <span>Core Chambers Services & Representation</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {practice.keyServices.map((service, idx) => (
                <div key={idx} className="flex items-start gap-2 font-sans text-[14.5px] font-medium text-[#171313] leading-[1.5]">
                  <CheckCircle2 className="w-4 h-4 text-[#5B1111] shrink-0 mt-0.5" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-4 border-t border-[#5B1111]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="font-sans text-[12px] text-[#6D6260]">
              Strict attorney-client confidentiality assured.
            </div>

            <button
              type="button"
              onClick={() => {
                onClose();
                onConsult(practice.title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#5B1111] hover:bg-[#3E0808] text-[#FDF0D5] font-sans text-[13px] uppercase tracking-[0.06em] font-bold rounded transition-colors shadow cursor-pointer"
            >
              <span>Consult on {practice.title}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C6A15B]" />
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
