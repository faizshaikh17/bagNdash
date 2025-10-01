import React from 'react';
import { ChevronRight } from 'lucide-react';
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen lg:h-[1300px] overflow-hidden bg-[#020D2D]">
      {/* Grid Background - Vertical Lines (Hidden on mobile) */}
      <div className="hidden md:flex absolute inset-0 pointer-events-none opacity-20">
        {[...Array(24)].map((_, index) => (
          <div
            key={`vertical-${index}`}
            className="flex-1 border-r-2 border-white"
          />
        ))}
      </div>

      {/* Grid Background - Horizontal Lines (Hidden on mobile) */}
      <div className="hidden md:flex absolute inset-0 flex-col pointer-events-none opacity-20">
        {[...Array(20)].map((_, index) => (
          <div
            key={`horizontal-${index}`}
            className="flex-1 border-b border-white"
          />
        ))}
      </div>

      {/* Gradient Overlay Top (Hidden on mobile) */}
      <div
        className="hidden md:block absolute inset-x-0 top-0 h-[screen] max-h-[1174px] opacity-50 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, #010314 40.24%, rgba(1, 3, 20, 0) 100%), radial-gradient(85.05% 65.08% at 50% 50%, #7B50FE 37.41%, #F462F3 69.27%, #FFFFFF 100%)',
          filter: 'blur(250px)',
          transform: 'rotate(-180deg)',
        }}
      />

      {/* Radial Gradient Center (Hidden on mobile) */}
      <div
        className="hidden md:block absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(54.1% 56.99% at 49.11% 40.56%, rgba(2, 13, 45, 0) 1.5%, #020D2D 100%)',
        }}
      />

      {/* Blue Ellipse (Hidden on mobile) */}
      <div
        className="hidden md:block absolute w-full max-w-6xl h-full max-h-6xl left-0 top-5 opacity-20 pointer-events-none"
        style={{
          background: '#295CFA',
          filter: 'blur(300px)',
        }}
      />

      {/* Green Ellipse (Hidden on mobile) */}
      <div
        className="hidden md:block absolute w-full max-w-6xl h-full max-h-6xl left-[40%] top-8 opacity-25 pointer-events-none"
        style={{
          background: '#04FE9A',
          filter: 'blur(300px)',
        }}
      />

      {/* Pink-Purple Glare (Hidden on mobile) */}
      <div
        className="hidden md:block absolute w-full max-w-5xl h-full max-h-5xl left-20 -top-180 opacity-25 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at center, #F462F3 0%, #7B50FE 50%, transparent 100%)',
          filter: 'blur(200px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center lg:px-6 px-3 space-y-10">
        {/* Hero Title */}
        <h1 className="max-w-6xl text-center lg:mt-0 mt-20  text-4xl font-bold leading-[1.4] text-white md:text-4xl lg:text-[4.3rem]">
          One Platform. Three Powerful Solutions for Retailers.
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-center lg:text-lg tracking-wide text-white/90">
          AI-powered tools for video & transaction analytics, online order
          management,<br className="hidden sm:block" />
          and automated invoice processing.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 w-full max-w-md md:max-w-none md:flex-row">
          {/* Primary CTA */}
          <button
            className="w-full md:w-auto rounded-full px-5 py-2.5 tracking-wide text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{
              background:
                'linear-gradient(95.49deg, #F462F3 52.87%, #7B50FE 106.28%)',
            }}
          >
            Book a Demo
          </button>

          {/* Secondary CTA with Chevron animation */}
          <button className="w-full  md:w-auto group lg:flex hidden items-center justify-center gap-2 rounded-full py-2.5 tracking-wide text-sm font-semibold text-white transition-colors">
            Explore Solutions
            <ChevronRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
          <button className="w-full lg:hidden border border-white md:w-auto group flex items-center justify-center gap-2 rounded-full py-2.5 tracking-wide text-sm font-semibold text-white transition-colors">
            Explore Solutions
          </button>
        </div>

        <div className="relative mx-auto my-6 z-50 aspect-[2/1] w-full max-w-5xl rounded-[20px] border border-white/20 overflow-hidden">
          <Image src="/images/heroSection.png" alt="Hero" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}