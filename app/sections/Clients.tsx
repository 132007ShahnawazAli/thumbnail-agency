"use client"
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Clients() {
  const container = useRef(null);

  useGSAP(() => {
    // Header reveal
    gsap.fromTo(".clients-header > *", 
      { y: 30, opacity: 0 },
      {
        scrollTrigger: {
          trigger: ".clients-header",
          start: "top 85%",
          toggleActions: "play none none none"
        },
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out"
      }
    );

    // Creator cards reveal
    gsap.fromTo(".creator-card", 
      { scale: 0.9, opacity: 0 },
      {
        scrollTrigger: {
          trigger: ".creator-grid",
          start: "top 80%",
          toggleActions: "play none none none"
        },
        scale: 1,
        opacity: 1,
        stagger: 0.05,
        duration: 0.8,
        ease: "power3.out"
      }
    );

    // Subscriber count-up animation
    gsap.utils.toArray(".client-subs-count").forEach((el: any) => {
      const target = parseFloat(el.getAttribute("data-target") || "0");
      gsap.from(el, {
        textContent: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none"
        },
        onUpdate: function() {
          const progress = this.progress();
          const currentVal = (progress * target).toFixed(2);
          el.textContent = currentVal;
        }
      });
    });
  }, { scope: container });

  return (
    <section ref={container} className="w-full bg-[#f7f8f9] py-24 px-4 flex flex-col items-center justify-center gap-16">

      <div className="clients-header flex flex-col gap-6 w-fit items-center ">
        {/* Badge */}
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-100">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#042449]" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 5H21V11C21 12.6569 19.6569 14 18 14H17.414L15.414 16H13V19H17V21H7V19H11V16H8.58597L6.58597 14H6C4.34315 14 3 12.6569 3 11V5H5V11C5 11.5523 5.44772 12 6 12H7H17H18C18.5523 12 19 11.5523 19 11V5ZM17 5V10H7V5H17Z"></path>
            <path d="M17 3H7C5.89543 3 5 3.89543 5 5V10C5 11.1046 5.89543 12 7 12H8.58597L10.586 14H13.414L15.414 12H17C18.1046 12 19 11.1046 19 10V5C19 3.89543 18.1046 3 17 3Z" fill="currentColor" />
          </svg>
          <span className="text-[#042449] font-semibold text-sm">Our Clients</span>
        </div>

        {/* Heading */}
        <h2 className="text-[#042449] text-4xl md:text-5xl font-semibold tracking-tighter text-center">
          Trusted by Your <span className="bg-linear-to-b from-[#6EC2F3] to-[#1C87FF] bg-clip-text text-transparent">Favorite Creators</span>
        </h2>

        {/* Subheading */}
        <p className="text-[#042449]/80 text-base md:text-lg text-center max-w-2xl font-medium leading-relaxed">
          We help creators and brands grow faster with thumbnails designed to improve<br className="hidden md:block" /> first impressions and increase clicks.
        </p>
      </div>
      {/* Thumbnail Grid */}
      <div className="creator-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-full md:max-w-[calc(100vw-8rem)] lg:max-w-[calc(100vw-18rem)] px-4 md:px-0">
        {/* We create 8 placeholders as shown in the design */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="creator-card relative overflow-hidden w-full aspect-[4/4.8] rounded-2xl bg-[radial-gradient(circle_at_top,#1B85FF_0%,#389FFF_24%,#001833_100%)] shadow-lg"
          >
            <svg width="310" height="259" viewBox="0 0 310 259" className='absolute -top-5 left-1/2 -translate-x-1/2 pointer-events-none overflow-visible' fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_f_96_507)" style={{ mixBlendMode: 'plus-lighter' }}>
                <ellipse cx="155.5" cy="17" rx="150.5" ry="68" fill="#5DFFFF" />
              </g>
              <defs>
                <filter id="filter0_f_96_507" x="-169" y="-225" width="649" height="484" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_96_507" />
                </filter>
              </defs>
            </svg>
            <img
              src="Mark_Tibury.png"
              alt="Mark Tilbury"
              className='absolute top-0 left-0 w-full h-full object-cover'
              style={{
                maskImage: "url('/creatormask.svg')",
                WebkitMaskImage: "url('/creatormask.svg')",
                maskSize: "100%",
                WebkitMaskSize: "100%",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskPosition: "center top",
                WebkitMaskPosition: "center top",
              }}
            />

            {/* Creator Info */}
            <div className="absolute bottom-6 left-0 w-full flex flex-col items-center justify-center gap-1 px-4">
              <h3 className="text-[#F1F2F4] text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-center leading-tight">Mark Tilbury</h3>
              <p className="text-sm sm:text-xs md:text-sm font-semibold tracking-wide uppercase bg-[radial-gradient(ellipse_at_center,#C4D4D9_0%,#45BAFD_100%)] mix-blend-plus-lighter bg-clip-text text-transparent text-center leading-tight">
                <span className="client-subs-count" data-target="8.09">8.09</span>M Subscribers
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Clients;
