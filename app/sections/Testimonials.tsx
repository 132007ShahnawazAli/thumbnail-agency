"use client";
import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const testimonialsData = [
  {
    name: "Eric Janici",
    subs: "573K Subscribers",
    text: "They didn't just make it prettier. They told me exactly why my face placement was killing my CTR, rewrote my visual hierarchy, and delivered in 48 hours. Numbers don't lie.",
    tags: ["Fitness", "Phycology"],
    avatar: "/Mark_Tibury.png"
  },
  {
    name: "Sarah Jenkins",
    subs: "1.2M Subscribers",
    text: "I thought good thumbnails were about looking nice. These guys showed me it's about psychology. My last video hit 800K views. First time ever.",
    tags: ["Fitness", "Lifestyle"],
    avatar: "/Mark_Tibury.png"
  },
  {
    name: "Daniel Oliver",
    subs: "45K Subscribers",
    text: "I was ready to quit. Three years of uploading, going nowhere. Two weeks after working with them, my video got recommended for the first time. I cried.",
    tags: ["Comedy", "Entertainment"],
    avatar: "/Mark_Tibury.png"
  }
];

function TestimonialCard({ t, isActive, position, onNext, onPrev }) {
  // We determine the horizontal offset based on the position state
  const getPositionStyles = () => {
    if (isActive) return 'translate-x-0 opacity-100 scale-100 z-20';
    if (position === 'left') return '-translate-x-[70%] md:-translate-x-[110%] opacity-35 scale-90 z-10 cursor-pointer';
    if (position === 'right') return 'translate-x-[70%] md:translate-x-[110%] opacity-35 scale-90 z-10 cursor-pointer';
    return 'opacity-0 scale-75 z-0 pointer-events-none';
  };

  return (
    <div
      onClick={() => { if (!isActive) position === 'left' ? onPrev() : onNext() }}
      className={`
        absolute flex flex-col gap-8 bg-white rounded-3xl p-6 w-full max-w-[420px] shrink-0 transition-all duration-700 ease-in-out
        ${getPositionStyles()}
        ${isActive ? 'shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]' : 'hidden md:flex'}
      `}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={t.avatar} className="w-12 h-12 rounded-full object-cover" alt={t.name} />
          <div className="flex flex-col w-fit items-start">
            <span className="text-[#042449]/90 font-semibold text-base">{t.name}</span>
            <span className="text-[#042449]/60 text-xs font-semibold">{t.subs}</span>
          </div>
        </div>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[#042449]/80">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </div>

      <p className="text-[#042449] text-left font-semibold text-base leading-tight flex-grow tracking-tighter">
        {t.text}
      </p>

      <div className="flex items-center gap-2 mt-auto">
        {t.tags.map((tag) => (
          <span key={tag} className="bg-linear-to-b from-[#6EC2F3]/30 to-[#1C87FF]/30 text-[#1C87FF] text-xs font-semibold px-1.5 py-1 rounded-lg">
            {tag}
          </span>
        ))}
      </div>

      {isActive && (
        <>
          <button 
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#344054] text-white flex items-center justify-center shadow-lg hover:bg-[#1D2939] transition-colors z-40"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#344054] text-white flex items-center justify-center shadow-lg hover:bg-[#1D2939] transition-colors z-40"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </>
      )}
    </div>
  );
}

function Testimonials() {
  const container = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);

  useGSAP(() => {
    // Entrance Animation for the header section
    gsap.from(".gsap-reveal", {
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      }
    });
  }, { scope: container });

  return (
    <section ref={container} className="w-full bg-[#f7f8f9] py-24 md:py-32 px-4 flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full max-w-full md:max-w-[calc(100vw-8rem)] lg:max-w-[calc(100vw-18rem)] px-4 md:px-0 flex flex-col gap-16 text-center items-center">
        <style>{`
            @media (min-width: 768px) {
                .testimonial-mask {
                    mask-image: url('/testimonialmask.svg');
                    -webkit-mask-image: url('/testimonialmask.svg');
                    mask-size: 100% 100%;
                    -webkit-mask-size: 100% 100%;
                    mask-position: center;
                    -webkit-mask-position: center;
                    mask-repeat: no-repeat;
                    -webkit-mask-repeat: no-repeat;
                }
            }
        `}</style>

        {/* Header */}
        <div className="flex flex-col gap-6 w-full items-center text-center">
          <div className="gsap-reveal flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 w-fit">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#042449]">
              <path d="M19 2H5C3.34315 2 2 3.34315 2 5V6C2 7.65685 3.34315 9 5 9H6.11054C6.54418 11.5307 8.35623 13.5855 10.9 14.2882V19H8V21H16V19H13.1V14.2882C15.6438 13.5855 17.4558 11.5307 17.8895 9H19C20.6569 9 22 7.65685 22 6V5C22 3.34315 20.6569 2 19 2ZM5 7C4.44772 7 4 6.55228 4 6V5C4 4.44772 4.44772 4 5 4H6V7H5ZM19 7H18V4H19C19.5523 4 20 4.44772 20 5V6C20 6.55228 19.5523 7 19 7Z" />
            </svg>
            <span className="text-[#042449] font-semibold text-sm tracking-tight">Testimonials</span>
          </div>

          <div className="gsap-reveal flex flex-col gap-3 items-center">
            <h2 className="text-[#042449] text-4xl md:text-[3.25rem] font-semibold tracking-tighter leading-tight">
              Honest Words From <span className="bg-linear-to-b from-[#6EC2F3] to-[#1C87FF] bg-clip-text text-transparent">Real Creators.</span>
            </h2>

            <p className="text-[#042449]/70 text-base md:text-lg max-w-2xl font-medium leading-relaxed">
              Unfiltered. Unscripted. Just real feedback from creators we've worked with.
            </p>
          </div>
        </div>

        {/* Carousel Logic Area */}
        <div className="testimonial-mask relative flex w-full h-[480px] md:h-[400px] items-center justify-center py-8">
          {testimonialsData.map((t, index) => {
            let position = 'hidden';
            if (index === activeIndex) position = 'center';
            else if (index === (activeIndex - 1 + testimonialsData.length) % testimonialsData.length) position = 'left';
            else if (index === (activeIndex + 1) % testimonialsData.length) position = 'right';

            return (
              <TestimonialCard
                key={index}
                t={t}
                isActive={index === activeIndex}
                position={position}
                onNext={next}
                onPrev={prev}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;