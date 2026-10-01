import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { StatsBand } from './components/StatsBand';
import { PracticeAreas } from './components/PracticeAreas';
import { ExperienceStrategyResults } from './components/ExperienceStrategyResults';
import { BurgundyFeatureSection } from './components/BurgundyFeatureSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ConsultationModal } from './components/ConsultationModal';
import { LegalModal } from './components/LegalModals';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [preselectedPractice, setPreselectedPractice] = useState<string>('');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleOpenConsultation = (practiceTitle?: string) => {
    if (practiceTitle) {
      setPreselectedPractice(practiceTitle);
    }
    setIsConsultationOpen(true);
  };

  const handlePracticeSelectedForContact = (practiceTitle: string) => {
    setPreselectedPractice(practiceTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF0D5] text-[#171313] selection:bg-[#5B1111] selection:text-[#FDF0D5] font-sans">
      <main id="main-content">
        {/* 1. Hero Section with Top Navigation in its actual position */}
        <Hero onOpenConsultation={() => handleOpenConsultation()} />

        {/* 3. About Section (Soft Cream) */}
        <AboutSection onOpenConsultation={() => handleOpenConsultation()} />

        {/* 4. Burgundy Statistics Band (Burgundy #5B1111) */}
        <StatsBand />

        {/* 5. Practice Areas (Cream #FDF0D5) */}
        <PracticeAreas
          onSelectPracticeForConsultation={handlePracticeSelectedForContact}
        />

        {/* 6. Experience / Strategy / Results Section (Cream with Gold accents) */}
        <ExperienceStrategyResults />

        {/* 7. Burgundy Feature Section (Burgundy #5B1111) */}
        <BurgundyFeatureSection onOpenConsultation={() => handleOpenConsultation()} />

        {/* 8. Why Clients Choose Us (Soft Cream #FFF9EC) */}
        <WhyChooseUs />

        {/* 9. Client Testimonials (Cream #FDF0D5) */}
        <Testimonials />

        {/* 10. FAQ Accordion (Soft Cream #FFF9EC) */}
        <FAQ />

        {/* 11. Contact Section (Cream #FDF0D5) */}
        <ContactSection initialPracticeArea={preselectedPractice} />
      </main>

      {/* 12. Footer (Deep Burgundy #3E0808) */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Floating WhatsApp Action */}
      <WhatsAppButton />

      {/* Global Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        preselectedPractice={preselectedPractice}
      />

      {/* Legal Policy Modals */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
