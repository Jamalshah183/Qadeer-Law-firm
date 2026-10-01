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
        className="fixed inset-0 bg-[#3E0808]/75 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative bg-[#FFF9EC] rounded-2xl max-w-2xl w-full border border-[#5B1111]/30 shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-[#5B1111] p-6 text-[#FDF0D5] relative flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#C6A15B]" />
            <h3 className="text-xl font-serif font-bold text-[#FDF0D5]">
              {type === 'privacy' ? 'Privacy Policy & Professional Privilege' : 'Terms of Representation & Legal Notice'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-full bg-[#3E0808] text-[#FDF0D5] hover:bg-[#171313] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-4 max-h-[70vh] overflow-y-auto text-sm text-[#171313]/85 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <h4 className="font-serif font-bold text-base text-[#5B1111]">1. Attorney-Client Privilege</h4>
              <p>
                Any electronic correspondence, intake forms, or uploaded documents received by {FIRM_CONFIG.firmName} are maintained under strict professional confidentiality and applicable bar ethics. Preliminary inquiries are handled with the same discretion as formal engagements.
              </p>
              <h4 className="font-serif font-bold text-base text-[#5B1111]">2. Collection of Information</h4>
              <p>
                We only collect contact details and matter summaries voluntarily submitted for consultation scheduling. We never sell, lease, or distribute prospective client data to commercial third parties.
              </p>
              <h4 className="font-serif font-bold text-base text-[#5B1111]">3. Data Retention</h4>
              <p>
                Records of unrepresented inquiries are periodically purged following conflict assessments unless retention is mandated by law or court instruction.
              </p>
            </>
          ) : (
            <>
              <h4 className="font-serif font-bold text-base text-[#5B1111]">1. No Attorney-Client Relationship Prior to Retainer</h4>
              <p>
                Submission of a consultation inquiry or preliminary discussion through this website does not automatically constitute a formal advocate-client relationship. Representation commences only upon execution of an official vakalatnama, engagement letter, and retainer agreement.
              </p>
              <h4 className="font-serif font-bold text-base text-[#5B1111]">2. Informational Purposes Only</h4>
              <p>
                The materials and summaries presented on this website are for general informational purposes and do not constitute specific legal opinions. You should always consult qualified counsel regarding the exact facts of your matter.
              </p>
              <h4 className="font-serif font-bold text-base text-[#5B1111]">3. Jurisdiction</h4>
              <p>
                Chambers advocates are enrolled with applicable provincial Bar Councils and the High Court Bar Association in Pakistan.
              </p>
            </>
          )}
        </div>

        <div className="p-4 bg-[#FDF0D5] border-t border-[#5B1111]/15 text-right">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-[#5B1111] text-[#FDF0D5] text-xs uppercase tracking-wider font-semibold rounded hover:bg-[#3E0808]"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
