"use client"
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function WhyUs() {
  const container = useRef(null);

  useGSAP(() => {
    // Header reveal
    gsap.from(".why-us-header > *", {
      scrollTrigger: {
        trigger: ".why-us-header",
        start: "top 85%",
      },
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out"
    });

    // Cards reveal
    gsap.from(".why-us-card", {
      scrollTrigger: {
        trigger: ".why-us-grid",
        start: "top 80%",
      },
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 1.2,
      ease: "power3.out"
    });
  }, { scope: container });

  return (
    <section ref={container} className="w-full bg-[#f7f8f9] py-24 px-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-full md:max-w-[calc(100vw-8rem)] lg:max-w-[calc(100vw-18rem)] px-4 md:px-0 flex flex-col gap-16">

        {/* Header Section */}
        <div className="why-us-header flex flex-col gap-6 w-full items-start">
          {/* Badge */}
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm w-fit">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#042449]" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 1L9 9L1 12L9 15L12 23L15 15L23 12L15 9L12 1Z" />
            </svg>
            <span className="text-[#042449] font-semibold text-sm tracking-tight">Why Us</span>
          </div>

          {/* Heading */}
          <h2 className="text-[#042449] text-4xl md:text-6xl font-semibold tracking-tighter">
            What Makes Us <span className="bg-linear-to-b from-[#6EC2F3] to-[#1C87FF] bg-clip-text text-transparent">Different</span>
          </h2>

          {/* Subheading */}
          <p className="text-[#042449]/80 text-base md:text-lg max-w-2xl font-medium leading-relaxed">
            We focus on what actually drives clicks combining strategy,<br className="hidden md:block" /> design, and performance into every thumbnail.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="why-us-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">

          {/* Card 1 */}
          <div className="why-us-card relative overflow-hidden w-full aspect-[10/11] bg-white rounded-3xl p-6 md:p-8 flex flex-col justify-end">
            <img src="/whyus_cards/card1.png" alt="Designed for Attention" className="absolute top-0 left-0 w-full object-cover" />
            <div className="relative z-10 flex flex-col gap-2.5">
              <h3 className="text-[#042449] text-lg md:text-xl font-semibold">Designed for Attention</h3>
              <p className="text-[#042449]/70 leading-tight text-base md:text-base font-medium leading-relaxed">
                Every thumbnail is built to win attention in seconds not just look good but to stand out instantly and drive more clicks from the right audience.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="why-us-card relative overflow-hidden w-full aspect-[10/11] bg-white rounded-3xl p-6 md:p-8 flex flex-col justify-end">
            <img src="/whyus_cards/card2.png" alt="We Think Like the Viewer" className="absolute top-0 left-0 w-full object-cover" />
            <div className="relative z-10 flex flex-col gap-2.5">
              <h3 className="text-[#042449] text-lg md:text-xl font-semibold">We Think Like the Viewer</h3>
              <p className="text-[#042449]/70 leading-tight text-base md:text-base font-medium leading-relaxed">
                We design from the viewer's perspective—while most designers focus on aesthetics, we focus on what your audience actually responds to.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="why-us-card relative overflow-hidden w-full aspect-[10/11] bg-white rounded-3xl p-6 md:p-8 flex flex-col justify-end">
            <img src="/whyus_cards/card3.png" alt="Direction, Not Guesswork" className="absolute top-0 left-0 w-full object-cover" />
            <div className="relative z-10 flex flex-col gap-2.5">
              <h3 className="text-[#042449] text-lg md:text-xl font-semibold">Direction, Not Guesswork</h3>
              <p className="text-[#042449]/70 leading-tight text-base md:text-base font-medium leading-relaxed">
                Every design decision is intentional guided by performance data, audience behavior, and what actually gets results.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyUs;
