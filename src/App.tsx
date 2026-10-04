import React, { useState, useEffect } from 'react';
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

  // Smooth inertial scrolling for mouse wheel & anchor links
  useEffect(() => {
    let currentY = window.scrollY;
    let targetY = window.scrollY;
    let rafId: number | null = null;
    let isAnimating = false;

    const getMaxScroll = () =>
      Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    const animateScroll = () => {
      const diff = targetY - currentY;
      if (Math.abs(diff) < 0.5) {
        currentY = targetY;
        window.scrollTo(0, currentY);
        isAnimating = false;
        rafId = null;
        return;
      }
      currentY += diff * 0.1;
      window.scrollTo(0, currentY);
      rafId = requestAnimationFrame(animateScroll);
    };

    const startAnimation = () => {
      if (!isAnimating) {
        isAnimating = true;
        // Temporarily disable CSS scroll-smooth during RAF interpolation so they never fight
        document.documentElement.style.scrollBehavior = 'auto';
        rafId = requestAnimationFrame(animateScroll);
      }
    };

    const onWheel = (e: WheelEvent) => {
      // Do not intercept if a modal dialog is open or user is zooming
      if (e.ctrlKey || document.querySelector('[role="dialog"]')) {
        return;
      }
      e.preventDefault();
      if (!isAnimating) {
        currentY = window.scrollY;
        targetY = window.scrollY;
      }
      const multiplier = e.deltaMode === 1 ? 36 : e.deltaMode === 2 ? window.innerHeight : 1;
      targetY = Math.max(0, Math.min(getMaxScroll(), targetY + e.deltaY * multiplier * 0.9));
      startAnimation();
    };

    const onScrollSync = () => {
      if (!isAnimating) {
        currentY = window.scrollY;
        targetY = window.scrollY;
      }
    };

    const onAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!target) return;
      const hash = target.getAttribute('href');
      if (!hash || hash === '#') return;
      const el = document.querySelector(hash);
      if (!el) return;

      e.preventDefault();
      currentY = window.scrollY;
      if (hash === '#contact') {
        targetY = getMaxScroll();
      } else {
        const rect = el.getBoundingClientRect();
        targetY = Math.max(0, Math.min(getMaxScroll(), window.scrollY + rect.top));
      }
      startAnimation();
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('scroll', onScrollSync, { passive: true });
    document.addEventListener('click', onAnchorClick);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', onScrollSync);
      document.removeEventListener('click', onAnchorClick);
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
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#3E0808] text-[#171313] selection:bg-[#5B1111] selection:text-[#FDF0D5] font-sans">
      <main id="main-content" className="relative z-[10] bg-[#FDF0D5] rounded-b-[50px] sm:rounded-b-[65px] lg:rounded-b-[80px]">
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
