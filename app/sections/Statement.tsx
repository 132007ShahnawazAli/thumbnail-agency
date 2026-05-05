"use client"
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Statement() {
  const container = useRef(null);
  const strikeRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      }
    });

    tl.from(".statement-text", {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from(strikeRef.current, {
      scaleX: 0,
      duration: 0.8,
      ease: "power2.inOut"
    }, "-=0.4")
    .from(".statement-highlight", {
      scale: 0.95,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)"
    }, "-=0.4");
  }, { scope: container });

  return (
    <section ref={container} className="w-full bg-[#f7f8f9] py-24 md:py-20 px-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl flex flex-col items-center gap-4 md:gap-6 text-center">

        {/* Main Statement */}
        <p className="statement-text text-[#115199] text-3xl md:text-5xl font-semibold tracking-tight leading-snug md:leading-snug">
          You spent hours on that video. {"Don't let a"} <br className="hidden md:block" />
          <span className="relative inline-block mr-2 md:mr-3">
            {/* Strikethrough line */}
            <span className="relative text-[#042449]/50">
              bad thumbnail
              <span
                ref={strikeRef}
                className="absolute left-[-2px] right-[-2px] top-[60%] -translate-y-1/2 h-[3px] md:h-[4px] rounded-full bg-[#FF4D4F] origin-left"
                aria-hidden="true"
              />
            </span>
          </span>
          <span className="text-[#115199]">be the reason nobody watches it.</span>
        </p>

        {/* Highlighted Emphasis */}
        <div className="statement-highlight inline-flex items-center px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl bg-gradient-to-b from-[#6EC2F3]/30 to-[#1C87FF]/30">
          <span className="text-[#1C87FF] text-3xl md:text-5xl font-semibold tracking-tight">
            We make sure they do.
          </span>
        </div>

      </div>
    </section>
  );
}

export default Statement;
