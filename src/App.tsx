import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExperienceStrategyResults } from './components/ExperienceStrategyResults';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { TeamSection } from './components/TeamSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ConsultationModal } from './components/ConsultationModal';
import { LegalModal } from './components/LegalModals';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [preselectedPractice, setPreselectedPractice] = useState<string>('');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  // Smooth scrolling engine with zero start/end transform shake
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.12,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
      infinite: false,
    });
    lenisRef.current = lenis;

    const onAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const hash = anchor.getAttribute('href');
      if (!hash || hash === '#') return;

      if (hash === '#contact') {
        e.preventDefault();
        lenis.scrollTo('bottom', { lerp: 0.1 });
        return;
      }

      const targetEl = document.querySelector(hash) as HTMLElement | null;
      if (targetEl) {
        e.preventDefault();
        lenis.scrollTo(targetEl, { lerp: 0.1 });
      }
    };

    document.addEventListener('click', onAnchorClick);

    return () => {
      document.removeEventListener('click', onAnchorClick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const handleOpenConsultation = (practiceTitle?: string) => {
    if (practiceTitle) {
      setPreselectedPractice(practiceTitle);
    }
    setIsConsultationOpen(true);
  };

  const handlePracticeSelectedForContact = (practiceTitle: string) => {
    setPreselectedPractice(practiceTitle);
    if (lenisRef.current) {
      lenisRef.current.scrollTo('bottom', { lerp: 0.1 });
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#3E0808] text-[#171313] selection:bg-[#5B1111] selection:text-[#FDF0D5] font-sans">
      <main
        id="main-content"
        className="relative z-[10] bg-[#FDF0D5] rounded-b-[50px] sm:rounded-b-[65px] lg:rounded-b-[80px]"
      >
        {/* 1. Hero Section with Top Navigation in its actual position */}
        <Hero onOpenConsultation={() => handleOpenConsultation()} />

        {/* 2. Merged About Us & Practice Areas Section */}
        <AboutSection
          onOpenConsultation={() => handleOpenConsultation()}
          onSelectPracticeForConsultation={handlePracticeSelectedForContact}
        />

        {/* 6. Experience / Strategy / Results Section */}
        <ExperienceStrategyResults />

        {/* 9. Client Testimonials */}
        <Testimonials />

        {/* 10. FAQ Accordion */}
        <FAQ />

        {/* 11. Team Members Section (Last section of main — scrolls up to reveal Footer) */}
        <TeamSection />
      </main>

      {/* 12. Revealing Footer with Integrated WhatsApp Consultation */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenConsultation={() => handleOpenConsultation()}
        selectedPracticeArea={preselectedPractice}
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
