"use client"
import React, { useRef } from 'react'
import PrimaryButton from '../components/PrimaryButton'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const thumbnails = [
  "thumbnail.png",
  "thumbnail.png",
  "thumbnail.png",
  "thumbnail.png",
  "thumbnail.png",
  "thumbnail.png",
];

function Hero() {
    const container = useRef(null);
    const col1 = useRef<HTMLDivElement>(null);
    const col2 = useRef<HTMLDivElement>(null);
    const col3 = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Entry animations
        const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

        tl.from(".hero-content > *", {
            y: 30,
            opacity: 0,
            stagger: 0.2,
            delay: 0.5
        });

        // Infinite loop animations
        const setupLoop = (col: HTMLDivElement | null, speed: number, reverse: boolean = false) => {
          if (!col) return;
          const height = col.scrollHeight / 2;
          gsap.to(col, {
            y: reverse ? `+=${height}` : `-=${height}`,
            duration: speed,
            ease: "none",
            repeat: -1,
            modifiers: {
              y: gsap.utils.unitize((y) => {
                const val = parseFloat(y);
                if (reverse) {
                  return val % height;
                } else {
                  return val % height;
                }
              })
            }
          });
        };

        // Simpler way for seamless loop: animate to -height and use modifiers or just repeat: -1
        // Actually, a simpler way is to just animate from 0 to -height and repeat.
        
        const loop = (el: HTMLDivElement | null, duration: number, reverse = false) => {
            if (!el) return;
            const h = el.offsetHeight / 2;
            gsap.set(el, { y: reverse ? -h : 0 });
            gsap.to(el, {
                y: reverse ? 0 : -h,
                duration: duration,
                ease: "none",
                repeat: -1
            });
        };

        loop(col1.current, 30);
        loop(col2.current, 25, true);
        loop(col3.current, 35);

    }, { scope: container });

    return (
        <div ref={container} className='relative w-full h-screen overflow-hidden bg-[linear-gradient(to_bottom,#1B85FF_0%,#389FFF_21%,#00244D_50%,#001833_100%)]'>
            <style>{`
                .hero-mask {
                    mask-image: url('/mobilemask.svg');
                    mask-position: center top;
                    mask-repeat: no-repeat;
                    mask-size: 250% 65%;
                    -webkit-mask-image: url('/mobilemask.svg');
                    -webkit-mask-position: center top;
                    -webkit-mask-repeat: no-repeat;
                    -webkit-mask-size: 250% 65%;
                }
                @media (min-width: 768px) {
                    .hero-mask {
                        mask-image: url('/masksvg.svg');
                        -webkit-mask-image: url('/masksvg.svg');
                        mask-size: 100%;
                        -webkit-mask-size: 100%;
                    }
                }
            `}</style>

            {/* 3 Vertical Columns */}
            <div className="hero-mask absolute top-0 left-[-25%] md:left-0 w-[150%] md:w-full h-screen flex gap-2 md:gap-4 p-2 md:p-4 z-0 opacity-80 md:opacity-100 overflow-hidden">
                
                {/* Column 1 */}
                <div ref={col1} className="flex flex-col gap-2 md:gap-4 flex-1">
                    {[...thumbnails, ...thumbnails].map((src, i) => (
                      <div key={i} className="w-full aspect-video rounded-xl overflow-hidden shrink-0">
                          <img src={src} alt="thumbnail" className="w-full h-full object-cover" />
                      </div>
                    ))}
                </div>

                {/* Column 2 */}
                <div ref={col2} className="flex flex-col gap-2 md:gap-4 flex-1">
                    {[...thumbnails, ...thumbnails].map((src, i) => (
                      <div key={i} className="w-full aspect-video rounded-xl overflow-hidden shrink-0">
                          <img src={src} alt="thumbnail" className="w-full h-full object-cover" />
                      </div>
                    ))}
                </div>

                {/* Column 3 */}
                <div ref={col3} className="flex flex-col gap-2 md:gap-4 flex-1">
                    {[...thumbnails, ...thumbnails].map((src, i) => (
                      <div key={i} className="w-full aspect-video rounded-xl overflow-hidden shrink-0">
                          <img src={src} alt="thumbnail" className="w-full h-full object-cover" />
                      </div>
                    ))}
                </div>
            </div>



            {/* Hero Main Content */}
            <div className="hero-content relative z-10 flex flex-col items-center justify-center mt-56 md:mt-80 px-4 text-center gap-6">
                <h1 className="text-[#F1F2F4] text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] max-w-5xl drop-shadow-lg">
                    We Make Thumbnails That <br className="hidden md:block" /> Make People Stop Scrolling
                </h1>
                <p className="text-[#F1F2F4]/90 text-base md:text-lg max-w-2xl leading-relaxed font-medium drop-shadow-md">
                    We help creators and brands grow faster with thumbnails designed to improve first impressions and increase clicks.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-4">
                    <PrimaryButton className="w-full sm:w-auto px-8 py-4 text-lg">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 10.5V7C17 5.89543 16.1046 5 15 5H4C2.89543 5 2 5.89543 2 7V17C2 18.1046 2.89543 19 4 19H15C16.1046 19 17 18.1046 17 17V13.5L22 17.5V6.5L17 10.5Z" />
                        </svg>
                        Book a Call
                    </PrimaryButton>
                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#F1F2F4] hover:bg-white text-[#042449] rounded-full font-semibold text-lg transition-all shadow-lg">
                        See Projects
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Hero
