import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { FIRM_CONFIG } from '../data/firmData';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-[#0F172A]/75 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative bg-white rounded-2xl max-w-2xl w-full border border-slate-200/90 shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-gradient-to-r from-[#8C0E26] via-[#750B1F] to-[#5C0818] p-6 text-white relative flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#E5B842]" />
            <h3 className="font-serif text-xl sm:text-2xl font-semibold tracking-[-0.015em] text-white">
              {type === 'privacy' ? 'Privacy Policy & Professional Privilege' : 'Terms of Representation & Legal Notice'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-4 max-h-[70vh] overflow-y-auto font-sans text-[15px] text-[#334155] leading-[1.65]">
          {type === 'privacy' ? (
            <>
              <h4 className="font-serif font-semibold text-lg tracking-[-0.01em] text-[#9B112C]">1. Attorney-Client Privilege</h4>
              <p>
                Any electronic correspondence, intake forms, or uploaded documents received by {FIRM_CONFIG.firmName} are maintained under strict professional confidentiality and applicable bar ethics. Preliminary inquiries are handled with the same discretion as formal engagements.
              </p>
              <h4 className="font-serif font-semibold text-lg tracking-[-0.01em] text-[#9B112C]">2. Collection of Information</h4>
              <p>
                We only collect contact details and matter summaries voluntarily submitted for consultation scheduling. We never sell, lease, or distribute prospective client data to commercial third parties.
              </p>
              <h4 className="font-serif font-semibold text-lg tracking-[-0.01em] text-[#9B112C]">3. Data Retention</h4>
              <p>
                Records of unrepresented inquiries are periodically purged following conflict assessments unless retention is mandated by law or court instruction.
              </p>
            </>
          ) : (
            <>
              <h4 className="font-serif font-semibold text-lg tracking-[-0.01em] text-[#9B112C]">1. No Attorney-Client Relationship Prior to Retainer</h4>
              <p>
                Submission of a consultation inquiry or preliminary discussion through this website does not automatically constitute a formal advocate-client relationship. Representation commences only upon execution of an official vakalatnama, engagement letter, and retainer agreement.
              </p>
              <h4 className="font-serif font-semibold text-lg tracking-[-0.01em] text-[#9B112C]">2. Informational Purposes Only</h4>
              <p>
                The materials and summaries presented on this website are for general informational purposes and do not constitute specific legal opinions. You should always consult qualified counsel regarding the exact facts of your matter.
              </p>
              <h4 className="font-serif font-semibold text-lg tracking-[-0.01em] text-[#9B112C]">3. Jurisdiction</h4>
              <p>
                Chambers advocates are enrolled with applicable provincial Bar Councils and the High Court Bar Association in Pakistan.
              </p>
            </>
          )}
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200 text-right">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 bg-[#9B112C] text-white font-sans text-[13px] uppercase tracking-[0.06em] font-bold rounded-full hover:bg-[#750B1F] shadow-sm transition-colors cursor-pointer"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
