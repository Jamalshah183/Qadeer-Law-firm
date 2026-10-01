import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Phone, MessageSquare } from 'lucide-react';
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
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    practice: preselectedPractice || FIRM_CONFIG.practiceAreas[0].title,
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

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
            className="absolute top-4 right-4 p-1.5 rounded-full bg-[#3E0808]/80 hover:bg-[#3E0808] text-[#FDF0D5] transition-colors focus:outline-none"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-1">
            <span className="h-[1px] w-6 bg-[#C6A15B]" />
            <span className="text-xs uppercase tracking-widest text-[#C6A15B] font-semibold">
              Confidential Intake
            </span>
          </div>
          <h3 id="consultation-modal-title" className="text-2xl font-serif font-bold text-[#FDF0D5]">
            Schedule a Legal Consultation
          </h3>
          <p className="text-xs text-[#FDF0D5]/80 mt-1">
            Discuss your case with qualified legal counsel at Qadeer Law Firm.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#5B1111]/10 flex items-center justify-center mx-auto text-[#5B1111]">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-serif font-bold text-[#171313]">
                Inquiry Successfully Logged
              </h4>
              <p className="text-xs sm:text-sm text-[#171313]/80 leading-relaxed max-w-sm mx-auto">
                Thank you for contacting our chambers. We have queued your brief for initial conflicts clearance and our office will reach out within standard business hours.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/${FIRM_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
                    FIRM_CONFIG.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#5B1111] text-[#FDF0D5] text-xs uppercase tracking-wider font-semibold rounded hover:bg-[#3E0808] transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>Connect Immediately via WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs uppercase font-semibold text-[#5B1111] hover:underline"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#171313] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your legal name"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#FDF0D5]/50 border border-[#5B1111]/25 text-sm text-[#171313] focus:bg-[#FFF9EC] focus:outline-none focus:ring-2 focus:ring-[#5B1111]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#171313] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+92 300 0000000"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#FDF0D5]/50 border border-[#5B1111]/25 text-sm text-[#171313] focus:bg-[#FFF9EC] focus:outline-none focus:ring-2 focus:ring-[#5B1111] tabular-nums"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#171313] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#FDF0D5]/50 border border-[#5B1111]/25 text-sm text-[#171313] focus:bg-[#FFF9EC] focus:outline-none focus:ring-2 focus:ring-[#5B1111]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#171313] mb-1">
                  Primary Area of Practice
                </label>
                <select
                  value={formData.practice}
                  onChange={(e) => setFormData({ ...formData, practice: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#FDF0D5]/50 border border-[#5B1111]/25 text-sm text-[#171313] focus:bg-[#FFF9EC] focus:outline-none focus:ring-2 focus:ring-[#5B1111]"
                >
                  {FIRM_CONFIG.practiceAreas.map((area) => (
                    <option key={area.id} value={area.title}>
                      {area.title}
                    </option>
                  ))}
                  <option value="Appellate / Other Specialized Matter">
                    Appellate / Other Specialized Matter
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#171313] mb-1">
                  Brief Details / Urgency
                </label>
                <textarea
                  rows={3}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Briefly state procedural stage (e.g. fresh suit, pending appeal, notice received)..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#FDF0D5]/50 border border-[#5B1111]/25 text-sm text-[#171313] focus:bg-[#FFF9EC] focus:outline-none focus:ring-2 focus:ring-[#5B1111]"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-[#6D6260]">
                  <ShieldCheck className="w-4 h-4 text-[#C6A15B]" />
                  <span>Strictly confidential</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#5B1111] hover:bg-[#3E0808] disabled:opacity-60 text-[#FDF0D5] text-xs uppercase tracking-wider font-semibold rounded shadow transition-colors cursor-pointer"
                >
                  {loading ? 'Submitting...' : 'Submit Request'}
                  <ArrowRight className="w-3.5 h-3.5 text-[#C6A15B]" />
                </button>
              </div>

              {/* Direct alternatives */}
              <div className="mt-4 pt-4 border-t border-[#5B1111]/10 flex items-center justify-around text-xs text-[#5B1111]">
                <a
                  href={`tel:${FIRM_CONFIG.contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-1.5 font-semibold hover:underline"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>Direct Call</span>
                </a>
                <span className="text-[#5B1111]/30">|</span>
                <a
                  href={`https://wa.me/${FIRM_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
                    FIRM_CONFIG.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-semibold hover:underline"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>WhatsApp Inquiries</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
