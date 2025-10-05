import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen lg:h-[1300px] overflow-x-clip md:bg-[#020D2D] bg-gradient-to-b from-[#020D2D] to-transparent">
      {/* Grid Background - Vertical Lines (Hidden on mobile) */}
      <div className="hidden md:flex absolute inset-0 pointer-events-none opacity-20">
        {[...Array(24)].map((_, index) => (
          <div
            key={`vertical-${index}`}
            className=" w-[4rem] h-[40rem] border-r-2 border-white"
          />
        ))}
      </div>

      {/* Grid Background - Horizontal Lines (Hidden on mobile) */}
      <div className="hidden md:flex absolute   inset-0 flex-col pointer-events-none opacity-20">
        {[...Array(10)].map((_, index) => (
          <div
            key={`horizontal-${index}`}
            className=" h-[4rem] border-t-2 border-white"
          />
        ))}
      </div>

      {/* Gradient Overlay Top */}
      <div className="hidden md:block absolute inset-x-0 top-0 h-screen max-h-[1174px] opacity-65 pointer-events-none bg-[linear-gradient(180deg,#010314_40.24%,rgba(1,3,20,0)_100%),radial-gradient(85.05%_65.08%_at_50%_50%,#7B50FE_37.41%,#F462F3_69.27%,#FFFFFF_100%)] blur-[200px] rotate-180" />

      {/* Radial Gradient Center */}
      <div className="hidden md:block absolute  inset-0 pointer-events-none bg-[radial-gradient(54.1%_56.99%_at_49.11%_40.56%,rgba(2,13,45,0)_1.5%,#020D2D_90%)]" />

      {/* Blue Ellipse (smaller radius) */}
      <div className="md:block hidden absolute z-10 w-[400px] h-[400px] md:left-60 md:top-30 opacity-25 pointer-events-none md:bg-blue-500 bg-blue-500/50 blur-[150px]" />

      <div className="block md:hidden absolute w-[400px] h-[400px] 
  md:left-60 md:top-30 
  opacity-60 pointer-events-none 
  rounded-full blur-[120px]
  bg-[radial-gradient(circle_at_center,_#2563eb,_#1e3a8a)]" />


      {/* Green Ellipse (smaller radius) */}
      <div className="hidden md:block  z-10 absolute w-[400px] h-[400px] right-40 top-50 opacity-40 pointer-events-none bg-green-400 blur-[180px]" />

      {/* Pink-Purple Glare */}
      <div className="hidden md:block z-10 absolute w-[500px] h-[500px] left-20 -top-20 opacity-25 pointer-events-none bg-[radial-gradient(circle_at_center,#F462F3_0%,#7B50FE_50%,transparent_100%)] blur-[180px]" />


      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center lg:px-6 px-3 space-y-10">
        {/* Hero Title */}
        <h1 className="max-w-6xl text-center lg:mt-0 mt-34  text-[2rem] font-bold leading-[1.4] text-white md:text-4xl lg:text-[4.3rem]">
          One Platform. Three Powerful Solutions for Retailers.
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-center text-sm md:text-base tracking-wide text-white/90">
          AI-powered tools for video & transaction analytics, online order
          management,<br className="hidden sm:block" />
          and automated invoice processing.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 w-full max-w-md md:max-w-none md:flex-row">
          {/* Primary CTA */}
          <button
            className="w-full md:w-auto rounded-full px-5 py-2.5 tracking-wide text-sm font-semibold text-white transition-opacity hover:opacity-90 bg-gradient-to-r from-[#F462F3] via-[#F462F3] to-[#7B50FE]"
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


        <div className="block md:hidden  absolute w-full h-[4rem] bottom-30  pointer-events-none bg-green-400 blur-[180px]" />
        <div className="relative mx-auto z-50 w-full h-[18rem]  sm:aspect-[2/1] sm:h-auto md:max-w-5xl rounded-[20px] border border-white/20 overflow-hidden">

          <video
            src="/images/demo.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </section>
  );
}