"use client"
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Works() {
  const container = useRef(null);

  useGSAP(() => {
    // Header reveal
    gsap.from(".works-header > *", {
      scrollTrigger: {
        trigger: ".works-header",
        start: "top 85%",
      },
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out"
    });

    // Cards reveal
    gsap.from(".work-card", {
      scrollTrigger: {
        trigger: ".works-grid",
        start: "top 80%",
      },
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 1.2,
      ease: "power3.out"
    });

    // Tag reveal and Count-up animation
    gsap.utils.toArray(".work-tag").forEach((tag: any) => {
      const numberEl = tag.querySelector(".count-number");
      const targetValue = parseInt(numberEl?.getAttribute("data-target") || "0");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: tag,
          start: "top 90%",
          toggleActions: "play none none none"
        }
      });

      tl.from(tag, {
        scale: 0.5,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)"
      })
      .from(numberEl, {
        textContent: 0,
        duration: 1.5,
        ease: "power2.out",
        snap: { textContent: 1 },
      }, "-=0.3");
    });
  }, { scope: container });

  const works = [
    {
      title: "The Only 3 Uses of Money: How to Spend, Invest, and Give",
      creator: "Samuel Onuha",
      views: "398k views",
      percent: "12",
    },
    {
      title: "20 Minute Intense Chest Workout (No Equipment)",
      creator: "BullyJuice",
      views: "15M views",
      percent: "89",
    },
    {
      title: "The Hunt for Robert Hansen: Alaska's Most Notorious Killer",
      creator: "Deep Dives",
      views: "2M views",
      percent: "43",
    },
    {
      title: "Secret Hack: CapCut Tips and Tricks You Need to Know",
      creator: "Samuel Onuha",
      views: "398k views",
      percent: "12",
    },
    {
      title: "My Search for the Perfect Pizza in New York",
      creator: "Samuel Onuha",
      views: "398k views",
      percent: "12",
    },
    {
      title: "Watch This Before Applying For American Express (Rules & Guide)",
      creator: "Samuel Onuha",
      views: "398k views",
      percent: "12",
    },
    {
      title: "Goodbye Adobe! Why I'm Moving On for Good",
      creator: "Creative Alternatives",
      views: "200k views",
      percent: "12",
    },
    {
      title: "10 Minute Home Ab Workout (6 PACK GUARANTEED!)",
      creator: "Fraser Wilson",
      views: "2M views",
      percent: "12",
    },
    {
      title: "The Scent That Makes Girls Can't Resist",
      creator: "Samuel Onuha",
      views: "398k views",
      percent: "12",
    }
  ];

  return (
    <section ref={container} className="w-full bg-linear-to-b from-[#1C87FF] to-[#6EC2F3] py-24 px-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-full md:max-w-[calc(100vw-8rem)] lg:max-w-[calc(100vw-18rem)] px-4 md:px-0 flex flex-col gap-16">

        {/* Header */}
        <div className="works-header flex flex-col gap-6 w-full items-center text-center">
          {/* Badge */}
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm w-fit">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#042449]" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 1L9 9L1 12L9 15L12 23L15 15L23 12L15 9L12 1Z" />
            </svg>
            <span className="text-[#042449] font-semibold text-sm tracking-tight">Our Works</span>
          </div>

          <h2 className="text-[#F1F2F4] text-4xl md:text-5xl font-semibold tracking-tighter">
            Work That Actually <span className="text-[#5DFFFF]">Clicks</span>
          </h2>

          <p className="text-[#F1F2F4]/80 text-base md:text-lg max-w-xl font-medium leading-relaxed">
            Thumbnails we've built for real creators and the results that followed.
          </p>
        </div>

        {/* Grid */}
        <div className="works-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 w-full">
          {works.map((work, i) => (
            <div key={i} className="work-card flex flex-col gap-4 w-full">
              {/* Thumbnail */}
              <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-lg border border-[#F1F2F4]/10">
                <img src="/thumbnail.png" alt={work.title} className="w-full h-full object-cover" />
              </div>

              {/* Info Row */}
              <div className="flex items-start justify-between gap-4 w-full px-1">
                <div className="flex gap-3">
                  <img src="/Mark_Tibury.png" alt={work.creator} className="w-10 h-10 rounded-full object-cover shrink-0 border border-[#F1F2F4]/20" />
                  <div className="flex flex-col">
                    <h4 className="text-[#F1F2F4] text-sm md:text-base font-semibold line-clamp-2 leading-tight">
                      {work.title}
                    </h4>
                    <p className="text-[#F1F2F4]/70 text-xs md:text-sm font-medium mt-1 flex items-center gap-1">
                      {work.creator}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-[#F1F2F4]/60">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      {work.views}
                    </p>
                  </div>
                </div>

                <div className="work-tag bg-[#87FF1C] text-[#36660B] text-xs font-bold px-2 py-1 rounded-full flex items-center gap-0.5 shrink-0 mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.58371 11.0845C7.58371 11.4066 7.32255 11.6678 7.00038 11.6678C6.6782 11.6678 6.41704 11.4066 6.41704 11.0845V3.93237C6.0825 4.23245 5.70611 4.63405 5.34492 5.05005C4.97397 5.4773 4.62988 5.9066 4.37764 6.22983C4.25183 6.39106 4.00286 6.71615 3.93216 6.80972C3.73374 7.02882 3.39777 7.06674 3.15458 6.88777C2.89528 6.69678 2.83957 6.33138 3.03039 6.07204C3.10425 5.97421 3.32747 5.67884 3.45763 5.51205C3.71751 5.17904 4.07554 4.73324 4.46423 4.28557C4.85038 3.84081 5.27846 3.38095 5.67817 3.02775C5.87728 2.8518 6.08303 2.68962 6.28375 2.56861C6.46849 2.45724 6.72265 2.33449 7.00038 2.33447L7.10345 2.34017C7.34046 2.36522 7.55483 2.47122 7.71642 2.56861C7.9172 2.68963 8.12335 2.85175 8.32256 3.02775C8.72226 3.38094 9.15037 3.84083 9.53648 4.28557C9.92515 4.73323 10.2832 5.17904 10.5431 5.51205C10.6732 5.67883 10.8965 5.97421 10.9703 6.07204C11.1612 6.33138 11.1055 6.6962 10.8461 6.88719C10.6029 7.06633 10.267 7.02894 10.0685 6.80972C10.0685 6.80972 9.95747 6.66569 9.92217 6.61891C9.85148 6.52528 9.74893 6.39106 9.6231 6.22983C9.37081 5.9066 9.02676 5.4773 8.65582 5.05005C8.29456 4.63404 7.91825 4.23246 7.58371 3.93237V11.0845Z" fill="#36660B" />
                  </svg>

                  <span className="count-number" data-target={work.percent}>{work.percent}</span>%
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Works;
