"use client";

import React, { useState, useRef, useEffect } from 'react';
import PrimaryButton from './PrimaryButton';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const navRef = useRef(null);
    const pillRef = useRef(null);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            // Show navbar when scrolling up or at the top
            if (currentY < lastScrollY.current || currentY < 50) {
                setVisible(true);
            } else if (currentY > lastScrollY.current && currentY > 50) {
                // Hide navbar when scrolling down past 50px
                setVisible(false);
            }
            lastScrollY.current = currentY;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useGSAP(() => {
        gsap.from(pillRef.current, {
            y: -20,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.2
        });
    }, { scope: navRef });

    return (
        <div
            ref={navRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 9999,
                pointerEvents: 'none',
                transform: visible ? 'translateY(0)' : 'translateY(-100%)',
                transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            className="pt-4 md:pt-6 px-4"
        >
            {/* Desktop & Mobile Main Bar */}
            <div
                ref={pillRef}
                className="flex w-full md:w-fit h-fit py-2 pr-2 pl-5 md:pl-7 items-center justify-between md:justify-start gap-4 md:gap-24 rounded-full mx-auto shadow-sm"
                style={{
                    backgroundColor: '#F1F2F4',
                    pointerEvents: 'auto',
                }}
            >

                {/* Logo */}
                <div className='flex items-center gap-2'>
                    <img src="/logo.svg" width={25} alt="logo" />
                    <span className='text-[#042449] font-bold text-xl tracking-tighter'>ClickLab</span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:block">
                    <ul className='flex gap-6 font-medium text-base text-[#042449]/70'>
                        <li className='font-semibold text-[#042449]/90 cursor-pointer hover:text-[#042449] transition-colors'>Home</li>
                        <li className='cursor-pointer hover:text-[#042449] transition-colors'>Projects</li>
                        <li className='cursor-pointer hover:text-[#042449] transition-colors'>Pricing</li>
                        <li className='cursor-pointer hover:text-[#042449] transition-colors'>Careers</li>
                    </ul>
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <PrimaryButton className='py-3 px-8 text-base tracking-tighter'>Get Started</PrimaryButton>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    className="md:hidden flex items-center justify-center p-2 mr-1 text-[#042449] bg-black/5 hover:bg-black/10 rounded-full transition-colors"
                    onClick={() => setIsOpen(true)}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
            </div>

            {/* Mobile Overlay Menu */}
            {isOpen && (
                <div className="fixed inset-0 flex flex-col md:hidden animate-in fade-in slide-in-from-bottom-4 duration-200" style={{ zIndex: 10000, pointerEvents: 'auto' }}>
                    <div className="relative bg-white w-full h-full flex flex-col overflow-hidden">

                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-100">
                            <div className='flex items-center gap-2'>
                                <img src="/logo.svg" width={24} alt="logo" className="brightness-0" />
                                <span className='text-[#042449] font-bold text-xl tracking-tighter'>ClickLab</span>
                            </div>
                            <button
                                className="flex items-center justify-center w-10 h-10 bg-[#e8ebf0] text-[#042449] hover:bg-gray-200 rounded-full transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>

                        {/* Links */}
                        <div className="flex-1 overflow-y-auto py-4 px-6">
                            <ul className="flex flex-col">
                                {['Home', 'Projects', 'Pricing', 'Careers'].map((item) => (
                                    <li key={item} className="flex items-center py-6 border-b border-gray-100 last:border-0 text-[#042449] font-semibold text-2xl cursor-pointer hover:bg-gray-50 transition-colors">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Footer CTA */}
                        <div className="p-6 bg-[#f7f8f9] flex flex-col gap-3 border-t border-gray-100 pb-12">
                            <PrimaryButton className="w-full py-4 text-[17px] font-semibold shadow-none">Get Started</PrimaryButton>
                            <button className="w-full py-4 text-[17px] font-semibold text-[#042449] border-2 border-gray-200 rounded-full hover:bg-white transition-colors bg-transparent">Contact Sales</button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}
