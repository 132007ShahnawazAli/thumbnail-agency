"use client"
import React, { useRef } from 'react';
import PrimaryButton from '../components/PrimaryButton';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Cta() {
  const container = useRef(null);
  const gridRef = useRef(null);

  useGSAP(() => {
    // Reveal content
    gsap.from(".cta-content > *", {
      scrollTrigger: {
        trigger: ".cta-content",
        start: "top 85%",
      },
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out"
    });

    // Floating background grid
    gsap.to(gridRef.current, {
      y: "-=20",
      x: "+=10",
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, { scope: container });

  return (
    <section ref={container} className="w-full bg-[#f7f8f9] py-16 md:py-24 px-4 flex justify-center overflow-hidden">
      <div className="relative w-full max-w-full md:max-w-[calc(100vw-8rem)] lg:max-w-[calc(100vw-18rem)] bg-[#042449] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-[0_20px_60px_-15px_rgba(3,21,42,0.4)]">

        {/* Background Overlay - Right Side Thumbnails Collage */}
        <div className="absolute inset-0 z-0 flex items-center justify-end overflow-hidden pointer-events-none">
          {/* Fading Gradient */}
          <div className="absolute inset-0 bg-linear-to-b md:bg-linear-to-r from-[#042449] from-[55%] md:from-[35%] via-[#042449]/90 to-transparent z-10 w-full md:w-[80%] h-full"></div>
          <div className="absolute inset-0 bg-linear-to-t from-[#042449] from-0% via-transparent to-[#042449] z-10 w-full h-full opacity-50 hidden md:block"></div>

          {/* Thumbnails Mask Wrapper */}
          <div
            className="absolute right-[-40%] md:right-[-25%] top-[20%] md:top-[-20%] w-[180%] md:w-[140%] h-[140%] z-0"
            style={{
              maskImage: "url('/ctamask.svg')",
              maskSize: '100% 100%',
              maskPosition: 'center right',
              maskRepeat: 'no-repeat',
              WebkitMaskImage: "url('/ctamask.svg')",
              WebkitMaskSize: '100% 100%',
              WebkitMaskPosition: 'center right',
              WebkitMaskRepeat: 'no-repeat',
            }}
          >
            {/* Thumbnails Grid Tilted */}
            <div ref={gridRef} className="absolute right-[0%] top-[-30%] w-[90%] h-[160%] grid grid-cols-6 gap-2 md:gap-3 opacity-100 transform -rotate-[15deg] scale-110">
              {Array.from({ length: 72 }).map((_, i) => (
                <img
                  key={i}
                  src="/thumbnail.png"
                  alt="thumbnail"
                  className="w-full aspect-video object-cover rounded-xl shadow-lg border border-white/5"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Big White Logo Overlay */}
        <div className="absolute right-[-5%] sm:right-[5%] md:right-[15%] top-[80%] md:top-1/2 -translate-y-1/2 z-20 pointer-events-none drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] opacity-[0.08] md:opacity-[0.15]">
          <img src="/logo.svg" className="brightness-0 invert w-40 md:w-[180px]" alt="logo" />
        </div>

        {/* Left Side - Content */}
        <div className="cta-content relative z-30 w-full md:w-[65%] p-8 sm:p-14 md:p-20 flex flex-col gap-8 md:gap-10 text-left min-h-[400px] md:min-h-0 justify-start md:justify-center">
          <div className="flex flex-col gap-4 md:gap-6 pt-4 md:pt-0">
            <h2 className="text-white text-4xl md:text-[3.25rem] font-semibold tracking-tighter leading-[1.1]">
              Your Next Video <br className="hidden md:block" />
              Deserves a Better Shot.
            </h2>
            <p className="text-white/80 text-sm md:text-[17px] max-w-lg font-medium leading-relaxed tracking-tight pr-4 md:pr-0">
              Book a free 15-minute call. We'll look at your channel, tell you exactly what's hurting your CTR, and show you what we'd do differently.
            </p>
          </div>

          <PrimaryButton className="w-full sm:w-fit px-8 py-4 md:py-3.5 text-[16px] md:text-[15px] justify-center mt-2 md:mt-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-[-1px]">
              <polygon points="23 7 16 12 23 17 23 7"></polygon>
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
            </svg>
            Book a Call
          </PrimaryButton>
        </div>

      </div>
    </section>
  );
}
