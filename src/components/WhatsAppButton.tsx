import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { FIRM_CONFIG } from '../data/firmData';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = `https://wa.me/${FIRM_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
    FIRM_CONFIG.whatsappMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Optional prompt popup badge on first hover / view */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3 py-2 bg-[#FFF9EC] text-[#171313] border border-[#5B1111]/30 rounded-lg shadow-xl text-xs font-medium animate-in fade-in slide-in-from-right-3 duration-200">
          <span>Inquire via official WhatsApp</span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-[#6D6260] hover:text-[#5B1111] p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#FFF9EC] border-2 border-[#5B1111] shadow-lg hover:scale-106 active:scale-95 transition-transform duration-300 focus:outline-none focus:ring-3 focus:ring-[#C6A15B]"
        aria-label="Chat with Qadeer Law Firm on WhatsApp"
        title="Direct WhatsApp Consultation"
      >
        {/* WhatsApp Icon with iconic color nestled inside cream & burgundy luxury bezel */}
        <div className="relative w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-inner group-hover:bg-[#20ba59] transition-colors">
          <MessageCircle className="w-6 h-6 fill-white stroke-none" />
        </div>
      </a>
    </div>
  );
};
