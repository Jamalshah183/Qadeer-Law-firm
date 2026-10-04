import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Clock, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { FIRM_CONFIG } from '../data/firmData';

interface ContactSectionProps {
  initialPracticeArea?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialPracticeArea = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    practiceArea: initialPracticeArea || FIRM_CONFIG.practiceAreas[0].title,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMessage('Please fill in your full name, phone number, and email.');
      return;
    }

    setIsSubmitting(true);
    // Simulate brief network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FDF0D5] rounded-[32px] sm:rounded-[40px] mx-2 sm:mx-4 md:mx-6 my-6 border border-[#5B1111]/10 relative overflow-hidden shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Chambers Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-3">
                <span className="h-[1px] w-6 bg-[#C6A15B]" aria-hidden="true" />
                <span className="font-sans text-[11px] sm:text-[12px] uppercase tracking-[0.16em] font-bold text-[#5B1111]">
                  INITIATE A CONSULTATION
                </span>
              </div>

              {/* Large Serif Heading */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[3.25rem] font-semibold text-[#171313] leading-[1.08] tracking-[-0.02em] mb-6">
                Let’s Discuss Your{' '}
                <span className="text-[#5B1111] italic font-normal">Legal Matter.</span>
              </h2>

              <p className="font-sans text-[16px] sm:text-[17px] text-[#171313]/80 leading-[1.65] font-normal mb-8">
                Reach out to arrange a confidential preliminary consultation at our Islamabad chambers or via secure video conference. All discussions are protected by professional privilege.
              </p>

              {/* Contact Details List */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FFF9EC] border border-[#5B1111]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-[#5B1111]" />
                  </div>
                  <div>
                    <span className="font-sans text-[11px] uppercase tracking-[0.14em] text-[#6D6260] font-bold block">
                      Telephone / Chambers
                    </span>
                    <a
                      href={`tel:${FIRM_CONFIG.contact.phone.replace(/[^0-9+]/g, '')}`}
                      className="font-sans text-[15.5px] font-semibold tracking-[0.01em] text-[#171313] hover:text-[#5B1111] transition-colors tabular-nums"
                    >
                      {FIRM_CONFIG.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FFF9EC] border border-[#5B1111]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageSquare className="w-4 h-4 text-[#5B1111]" />
                  </div>
                  <div>
                    <span className="font-sans text-[11px] uppercase tracking-[0.14em] text-[#6D6260] font-bold block">
                      Official WhatsApp Line
                    </span>
                    <a
                      href={`https://wa.me/${FIRM_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
                        FIRM_CONFIG.whatsappMessage
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-[15.5px] font-semibold tracking-[0.01em] text-[#171313] hover:text-[#5B1111] transition-colors tabular-nums"
                    >
                      {FIRM_CONFIG.contact.whatsappDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FFF9EC] border border-[#5B1111]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-[#5B1111]" />
                  </div>
                  <div>
                    <span className="font-sans text-[11px] uppercase tracking-[0.14em] text-[#6D6260] font-bold block">
                      Chambers Email
                    </span>
                    <a
                      href={`mailto:${FIRM_CONFIG.contact.email}`}
                      className="font-sans text-[15.5px] font-semibold tracking-[0.01em] text-[#171313] hover:text-[#5B1111] transition-colors"
                    >
                      {FIRM_CONFIG.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FFF9EC] border border-[#5B1111]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#5B1111]" />
                  </div>
                  <div>
                    <span className="font-sans text-[11px] uppercase tracking-[0.14em] text-[#6D6260] font-bold block">
                      Chambers Location
                    </span>
                    <p className="font-sans text-[14.5px] text-[#171313]/90 leading-[1.55] font-normal">
                      {FIRM_CONFIG.contact.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours Note */}
            <div className="p-4 rounded-xl bg-[#FFF9EC] border border-[#5B1111]/15 flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#C6A15B] shrink-0" />
              <div className="font-sans text-[12.5px] text-[#171313]/80 leading-[1.5]">
                <span className="font-semibold text-[#5B1111]">Consultation Hours: </span>
                {FIRM_CONFIG.contact.officeHours}
              </div>
            </div>
          </div>

          {/* Right Column: Elegant Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFF9EC] rounded-2xl p-8 sm:p-10 border border-[#5B1111]/20 shadow-xl relative">
              {/* Gold decorative top border */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent" />

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#5B1111]/10 flex items-center justify-center mx-auto text-[#5B1111]">
                    <CheckCircle2 className="w-8 h-8 text-[#5B1111]" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold tracking-[-0.01em] text-[#171313]">
                    Consultation Request Received
                  </h3>
                  <p className="font-sans text-[15px] text-[#171313]/80 max-w-md mx-auto leading-[1.65]">
                    Thank you, <strong className="text-[#5B1111]">{formData.fullName}</strong>. Our chambers coordinator will review your inquiry regarding <span className="font-semibold">{formData.practiceArea}</span> and contact you shortly via telephone or email to confirm consultation scheduling.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          phone: '',
                          email: '',
                          practiceArea: FIRM_CONFIG.practiceAreas[0].title,
                          message: '',
                        });
                      }}
                      className="px-6 py-2.5 bg-[#5B1111] text-[#FDF0D5] font-sans text-[13px] uppercase tracking-[0.06em] font-bold rounded hover:bg-[#3E0808] transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-[#5B1111]/10 pb-3 mb-4">
                    <h3 className="font-serif text-2xl font-semibold tracking-[-0.01em] text-[#171313]">
                      Request a Consultation
                    </h3>
                    <p className="font-sans text-[13px] text-[#6D6260] mt-0.5">
                      Please provide details so we may route your brief to the appropriate advocate.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 font-sans text-[12.5px] bg-red-50 text-red-800 rounded border border-red-200">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block font-sans text-[11px] uppercase tracking-[0.12em] font-bold text-[#171313] mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Barrister / Mr. / Ms. Name"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-[#FDF0D5]/50 border border-[#5B1111]/25 font-sans text-[14.5px] text-[#171313] focus:bg-[#FFF9EC] focus:outline-none focus:ring-2 focus:ring-[#5B1111] focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block font-sans text-[11px] uppercase tracking-[0.12em] font-bold text-[#171313] mb-1.5"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+92 300 0000000"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-[#FDF0D5]/50 border border-[#5B1111]/25 font-sans text-[14.5px] text-[#171313] focus:bg-[#FFF9EC] focus:outline-none focus:ring-2 focus:ring-[#5B1111] focus:border-transparent transition-all tabular-nums"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="email"
                        className="block font-sans text-[11px] uppercase tracking-[0.12em] font-bold text-[#171313] mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="yourname@domain.com"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-[#FDF0D5]/50 border border-[#5B1111]/25 font-sans text-[14.5px] text-[#171313] focus:bg-[#FFF9EC] focus:outline-none focus:ring-2 focus:ring-[#5B1111] focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="practiceArea"
                        className="block font-sans text-[11px] uppercase tracking-[0.12em] font-bold text-[#171313] mb-1.5"
                      >
                        Practice Area *
                      </label>
                      <select
                        id="practiceArea"
                        name="practiceArea"
                        value={formData.practiceArea}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[#FDF0D5]/50 border border-[#5B1111]/25 font-sans text-[14.5px] text-[#171313] focus:bg-[#FFF9EC] focus:outline-none focus:ring-2 focus:ring-[#5B1111] focus:border-transparent transition-all"
                      >
                        {FIRM_CONFIG.practiceAreas.map((area) => (
                          <option key={area.id} value={area.title}>
                            {area.title}
                          </option>
                        ))}
                        <option value="General Advisory & Special Brief">
                          General Advisory & Special Brief
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-sans text-[11px] uppercase tracking-[0.12em] font-bold text-[#171313] mb-1.5"
                    >
                      Brief Summary of Matter
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Outline key facts, procedural status, and your objective..."
                      className="w-full px-4 py-3 rounded-lg bg-[#FDF0D5]/50 border border-[#5B1111]/25 font-sans text-[14.5px] text-[#171313] focus:bg-[#FFF9EC] focus:outline-none focus:ring-2 focus:ring-[#5B1111] focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-1.5 font-sans text-[12px] text-[#6D6260]">
                      <ShieldCheck className="w-4 h-4 text-[#C6A15B] shrink-0" />
                      <span>Privileged & confidential communication.</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#5B1111] hover:bg-[#3E0808] disabled:opacity-60 text-[#FDF0D5] font-sans text-[13px] uppercase tracking-[0.06em] font-bold rounded transition-all duration-200 shadow-md cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Processing...</span>
                      ) : (
                        <>
                          <span>Request a Consultation</span>
                          <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
