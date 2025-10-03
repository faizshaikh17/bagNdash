'use client'
import React, { useState } from "react";
import Image from "next/image";

export default function AboutUs() {
  const [activeBenefitIndex, setActiveBenefitIndex] = useState(0);


  const benefits = [
    {
      title: "Trust",
      description: "Secure, reliable, and transparent.",
    },
    {
      title: "Efficiency",
      description: "Automate the manual, repetitive parts of retail.",
    },
    {
      title: "Insight",
      description: "Turn data into clear, actionable decisions.",
    },
    {
      title: "Partnership",
      description: "Built by retailers, for retailers.",
    }
  ];


  const logos = [
    { title: "Grubhub", image: "/images/grubhubLogo.png" },
    { title: "Doordash", image: "/images/doordashLogo.png" },
    { title: "Uber Eats", image: "/images/ubereatsLogo.png" },
    { title: "Moon", image: "/images/moonLogo.png" },
    { title: "Clover", image: "/images/cloverLogo.png" },
  ];
  return (
    <>
      <section className="relative min-h-screen w-full overflow-hidden md:bg-[#020D2D] bg-gradient-to-b from-[#020D2D] to-transparent ">




        {/* Gradient Overlay Top */}
        <div className="hidden md:block absolute inset-x-0 top-0 h-screen max-h-[1174px] opacity-65 pointer-events-none bg-[linear-gradient(180deg,#010314_40.24%,rgba(1,3,20,0)_100%),radial-gradient(85.05%_65.08%_at_50%_50%,#7B50FE_37.41%,#F462F3_69.27%,#FFFFFF_100%)] blur-[200px] rotate-180" />

        {/* Radial Gradient Center */}
        <div className="hidden md:block absolute inset-0 pointer-events-none bg-[radial-gradient(54.1%_56.99%_at_49.11%_40.56%,rgba(2,13,45,0)_1.5%,#020D2D_100%)]" />

        {/* Blue Ellipse (smaller radius) */}
        <div className="block absolute w-[400px] h-[400px] md:left-60 md:top-30 opacity-60 md:opacity-15 pointer-events-none md:bg-blue-500 bg-blue-500/50 blur-[150px]" />

        {/* Green Ellipse (smaller radius) */}
        <div className="hidden md:block absolute w-[400px] h-[400px] right-40 top-50 opacity-25 pointer-events-none bg-green-400 blur-[180px]" />

        {/* Pink-Purple Glare */}
        <div className="hidden md:block absolute w-[500px] h-[500px] left-20 -top-20 opacity-15 pointer-events-none bg-[radial-gradient(circle_at_center,#F462F3_0%,#7B50FE_50%,transparent_100%)] blur-[180px]" />

        {/* Content */}

        <div className="relative z-10 mt-36 container mx-auto px-6 md:px-18 h-full lg:flex lg:flex-col lg:justify-end">
          <div className="flex flex-col gap-5 md:items-start items-center md:text-left text-center  max-w-7xl">
            <h1 className="font-extrabold text-3xl md:text-5xl lg:text-6xl leading-[1.5] text-white max-w-4xl">
              About Us
            </h1>

            <p className="text-white text-sm lg:text-base max-w-3xl">
              AI-powered tools designed for retailers, by retailers.
            </p>

          </div>
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-18 py-20">
          <div className="relative w-full mx-auto aspect-video md:aspect-[3/1] h-[300px] md:h-[450px] rounded-[20px] border border-white/20 overflow-hidden">
            <video
              className="w-full h-full object-cover"
              poster="/images/video-placeholder.jpg" // Placeholder image for now
            >
              <source src="/videos/about-placeholder.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>


      <section className='relative flex flex-col items-center gap-12 sm:gap-16 md:gap-20 lg:gap-32 w-full py-8 sm:py-12 md:py-16 bg-transparent
  md:bg-none md:bg-[#020D2D] '>

        <div
          className="absolute lg:flex z-50 hidden w-88 h-60 pointer-events-none left-40 bottom-10 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 blur-[180px]"
        />

        <div
          className="absolute lg:hidden z-50 block w-[22rem] opacity-80 h-[28rem] pointer-events-none left-0 top-0
             bg-gradient-to-r from-[#0A3B36] via-[#0D5049] to-[#11715E] blur-[180px]"
        />



        <div className="absolute lg:flex z-50 hidden w-88 h-60 pointer-events-none right-30 bottom-10 opacity-60 md:bg-blue-500 bg-blue-500/50 blur-[150px]" />

        <div className="w-full flex flex-col gap-6 max-w-7xl items-center z-50">
          <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-[2.2rem] tracking-wide text-white mb-4 md:mb-8 px-4">
            Our Story
          </h1>
          <div className='text-center text-white text-sm md:text-base md:px-0 px-12  flex flex-col gap-8 items-center max-w-2xl'>

            <p>
              Bag n Dash was born inside real liquor and convenience stores. As independent retailers, we saw firsthand the challenges of shoplifting, manual invoices, and scattered online orders. Large chains had advanced technology, but smaller retailers were left without affordable solutions.
            </p>
            <p>

              That’s why we built Bag n Dash: a simple, powerful platform that unifies Video + Transaction Analytics, Online Order Management, and AI-powered Invoice Processing in one place.
            </p>
          </div>
        </div>


      </section>


      <section className="relative flex flex-col items-center gap-12 sm:gap-16 md:gap-20 lg:gap-32 w-full py-8 sm:py-12 md:py-16 bg-gradient-to-b from-transparent via-[#020D2D] to-[#020D2D] md:bg-[#020D2D]  ">

        <div className="absolute lg:flex hidden z-50 w-88 h-60 pointer-events-none left-30 bottom-10 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 blur-[180px]" />
        <div className="absolute lg:flex hidden z-50 w-88 h-60 pointer-events-none right-30 bottom-10 opacity-60 bg-blue-500/50 blur-[150px]" />

        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 md:px-0 z-50">

          {/* Mission */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/images/heroSection.png"
              alt="Mission"
              width={600}
              height={300}
              className="object-cover w-full max-w-[38rem] md:h-[16rem] rounded-3xl"
              priority
            />
          </div>
          <div className="flex flex-col gap-4 px-3 md:px-20 justify-center text-white">
            <h2 className="md:text-3xl text-2xl  font-semibold">Mission</h2>
            <p className="text-sm tracking-wide leading-[1.5]">
              Our mission is to help independent retailers cut losses, streamline
              operations, and grow profits through practical AI solutions.
            </p>
          </div>

          {/* Vision */}
          <div className="flex flex-col gap-4 px-3 md:px-20 justify-center text-white order-2 md:order-1">
            <h2 className="md:text-3xl text-2xl font-semibold">Vision</h2>
            <p className="text-sm tracking-wide leading-[1.5]">
              Our vision is to empower retailers with seamless technology that brings
              efficiency and growth without complexity.
            </p>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <Image
              src="/images/heroSection.png"
              alt="Vision"
              width={600}
              height={300}
              className="object-cover w-full max-w-[38rem] md:h-[16rem] rounded-3xl"
              priority
            />
          </div>

        </div>
      </section>


      <section className="relative w-full py-12 md:py-20 lg:py-30 bg-[#020D2D] overflow-hidden">
        <div className="w-full z-50">
          <h1 className="text-center py-6 md:py-10 font-bold text-2xl md:text-3xl lg:text-[2.2rem] tracking-wide text-white mb-4 md:mb-8 px-4">
            Meet the Founders
          </h1>
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-16 max-w-5xl mx-auto">

              {/* Founder 1 */}
              <div className="relative bg-gradient-to-br from-transparent via-transparent to-blue-950 border border-[#434343] rounded-[24px] flex flex-col aspect-square">
                <div className="flex-[2] rounded-t-3xl overflow-hidden">
                  <Image
                    src="/images/founder1.png"
                    alt="Sameer Vishnani"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-[1] flex flex-col items-start justify-center p-6 gap-3">
                  <h2 className="font-semibold text-white text-lg leading-tight">Sameer Vishnani</h2>
                  <p className="text-sm text-gray-500">Founder & CEO</p>
                  <p className="text-xs text-gray-300">
                    Retail entrepreneur with liquor and convenience stores. Brings firsthand knowledge of retail challenges and a passion for helping store owners succeed.
                  </p>
                </div>
              </div>

              {/* Founder 2 */}
              <div className="relative bg-gradient-to-br from-transparent via-transparent to-blue-950 border border-[#434343] rounded-[24px] flex flex-col aspect-square">
                <div className="flex-[2] rounded-t-3xl overflow-hidden">
                  <Image
                    src="/images/founder2.png"
                    alt="Co-Founder"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-[1] flex flex-col items-start justify-center p-6 gap-3">
                  <h2 className="font-semibold text-white text-lg leading-tight">Sameer Vishnani</h2>
                  <p className="text-sm text-gray-500">Co-Founder & CTO</p>
                  <p className="text-xs text-gray-300">
                    Technology leader with expertise in AI and retail analytics. Focused on building scalable, easy-to-use tools for independent retailers.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-12 md:py-20 lg:py-30 md:bg-none md:bg-[#020D2D]  bg-gradient-to-b from-[#020D2D] to-transparent overflow-hidden">
        <div className="w-full z-50">
          <h1 className="text-center py-6 md:py-10 font-bold text-2xl md:text-3xl lg:text-[2.2rem] tracking-wide text-white mb-8 px-4">
            Our Values
          </h1>

          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">

            {/* Desktop grid */}
            {/* Desktop grid */}
            <div className="hidden lg:flex gap-6 max-w-7xl mx-auto justify-center">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="relative w-[280px] bg-gradient-to-br from-black/20 via-[#14b8a62e]/20 to-[#14b8a62e]/50 
                 backdrop-blur-[20px] border border-[#434343] rounded-[24px] 
                 bg-black/30 p-8 flex flex-col items-start justify-start gap-8"
                >
                  {/* Gradient Circle with Tick */}
                  <div className="size-7 flex items-center justify-center rounded-full 
                      bg-gradient-to-br from-pink-500 to-purple-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={4}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h2 className="font-semibold text-xl text-white leading-tight">{benefit.title}</h2>
                    <p className="text-xs text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>


            {/* Mobile slider */}
            <div className="lg:hidden relative flex justify-center overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out w-full"
                style={{ transform: `translateX(-${activeBenefitIndex * 100}%)` }}
              >
                {benefits.map((benefit, index) => (
                  <div key={index} className="min-w-full flex justify-center px-4">
                    <div className="relative bg-gradient-to-br from-black/20 to-[#14b8a62e]/30 
                                  backdrop-blur-[20px] border border-[#434343] rounded-[24px] 
                                  bg-black/30 p-8 w-full max-w-[320px] flex flex-col 
                                  md:items-center items-start justify-center gap-8">

                      {/* Gradient Circle with Tick */}
                      <div className="w-6 h-6 flex items-center justify-center rounded-full 
                                    bg-gradient-to-br from-pink-500 to-purple-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="flex flex-col items-start gap-4">
                        <h2 className="font-semibold text-white leading-tight text-center">
                          {benefit.title}
                        </h2>
                        <p className="text-sm text-gray-300">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile dots */}
            <div className="lg:hidden mt-8 flex justify-center gap-2.5">
              {benefits.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveBenefitIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${activeBenefitIndex === index
                    ? "bg-gradient-to-r from-[#F462F3] to-[#7B50FE]"
                    : "bg-[#4F4F4F]"
                    }`}
                />
              ))}
            </div>

          </div>
        </div>
      </section>




      <section className="relative w-full py-12 md:py-20 lg:py-30 md:bg-[#020D2D] bg-gradient-to-b from-transparent via-transparent to-[#0F5F4F]/40 overflow-hidden">
        <div className="w-full z-50">
          <h1 className="text-center hidden md:flex py-4 font-bold text-2xl md:text-3xl lg:text-[2.2rem] tracking-wide text-white mb-4 md:mb-8 px-4">
            Our Partners & Integrations
          </h1>
          <h1 className="text-center md:hidden py-4 font-bold text-2xl md:text-3xl lg:text-[2.2rem] tracking-wide text-white mb-4 md:mb-8 px-4">
            Partners & Integrations
          </h1>
          <div className="mx-auto z-50 mb-12 md:mb-20 lg:mb-30 px-4 sm:px-6 lg:px-8 w-full">
            <div className="relative overflow-hidden py-6">
              <div className="flex animate-marquee-logos whitespace-nowrap gap-12 md:gap-20 lg:gap-30">
                {[...logos, ...logos].map((logo, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center justify-center flex-shrink-0 h-20 w-[160px] md:h-24 md:w-[200px] lg:h-28 lg:w-[240px]"
                  >
                    <Image
                      src={logo.image}
                      alt={logo.title}
                      height={240}
                      width={240}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <style jsx>{`
                              @keyframes marquee-logos {
                                  0% {
                                      transform: translateX(0);
                                  }
                                  100% {
                                      transform: translateX(-50%);
                                  }
                              }
                              .animate-marquee-logos {
                                  animation: marquee-logos 25s linear infinite;
                              }
                          `}</style>
        </div>
      </section>
    </>
  );
}