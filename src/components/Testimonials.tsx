import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { FIRM_CONFIG } from '../data/firmData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? FIRM_CONFIG.testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === FIRM_CONFIG.testimonials.length - 1 ? 0 : prev + 1
    );
  };

  // Automatically step through reviews one by one with zero heavy animation
  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentIndex((prev) =>
        prev === FIRM_CONFIG.testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  const current = FIRM_CONFIG.testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="relative z-[13] -mt-10 sm:-mt-12 lg:-mt-14 pt-20 sm:pt-24 md:pt-28 pb-28 md:pb-36 bg-[#FFF9EC] rounded-t-[50px] sm:rounded-t-[65px] lg:rounded-t-[80px] border-t-2 border-[#5B1111]/25 shadow-[0_-25px_50px_-15px_rgba(62,8,8,0.25)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-6 bg-[#C6A15B]" aria-hidden="true" />
            <span className="font-sans text-[11px] sm:text-[12px] uppercase tracking-[0.16em] font-bold text-[#5B1111]">
              CLIENT TESTIMONIALS
            </span>
            <span className="h-[1px] w-6 bg-[#C6A15B]" aria-hidden="true" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[3.25rem] font-semibold text-[#171313] leading-[1.08] tracking-[-0.02em] mb-4">
            Trusted by Those We Represent
          </h2>

          <p className="font-sans text-[16px] sm:text-[17px] text-[#171313]/80 leading-[1.65] font-normal">
            Reflections from clients regarding our strategic representation, discretion, and courtroom advocacy.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-[#FFF9EC] rounded-2xl p-8 sm:p-12 md:p-16 border border-[#5B1111]/20 shadow-lg">
            {/* Burgundy Quotation Mark Icon */}
            <div className="absolute top-6 left-8 sm:top-10 sm:left-12">
              <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-[#5B1111]/25 -scale-x-100" />
            </div>

            <div className="relative z-10 pt-4 sm:pt-6">
              {/* 
                1x1 CSS Grid Stack:
                Locks the quote container height to the tallest review at every responsive breakpoint
                so the card and section never resize or push the next section when reviews change.
              */}
              <div className="grid grid-cols-1 grid-rows-1 items-center mb-8">
                {FIRM_CONFIG.testimonials.map((item, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <blockquote
                      key={item.id}
                      aria-hidden={!isActive}
                      className={`col-start-1 row-start-1 font-serif text-xl sm:text-2xl md:text-[1.75rem] font-medium italic text-[#171313] leading-[1.45] tracking-[-0.01em] ${
                        isActive ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none select-none'
                      }`}
                    >
                      “{item.quote}”
                    </blockquote>
                  );
                })}
              </div>

              {/* Client Info Lockup */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#5B1111]/15">
                <div>
                  <div className="font-serif text-lg sm:text-xl font-semibold tracking-[-0.01em] text-[#5B1111]">
                    {current.clientName}
                  </div>
                  <div className="font-sans text-[12px] font-medium text-[#6D6260] tracking-[0.03em] mt-0.5">
                    {current.matterArea} {current.location ? `· ${current.location}` : ''}
                  </div>
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prevSlide}
                    className="p-2.5 rounded-full bg-[#FDF0D5] hover:bg-[#5B1111] hover:text-[#FDF0D5] text-[#5B1111] border border-[#5B1111]/20 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C6A15B] cursor-pointer"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <span className="font-sans text-[12px] font-semibold tracking-[0.05em] text-[#6D6260] px-2 tabular-nums">
                    0{currentIndex + 1} / 0{FIRM_CONFIG.testimonials.length}
                  </span>

                  <button
                    type="button"
                    onClick={nextSlide}
                    className="p-2.5 rounded-full bg-[#FDF0D5] hover:bg-[#5B1111] hover:text-[#FDF0D5] text-[#5B1111] border border-[#5B1111]/20 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C6A15B] cursor-pointer"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {FIRM_CONFIG.testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === i ? 'w-8 bg-[#5B1111]' : 'w-2 bg-[#5B1111]/25 hover:bg-[#5B1111]/50'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
