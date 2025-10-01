"use client";
import React, { useState } from "react";
import Image from "next/image";

const industries = [
    {
        title: "Quick Service Restaurant",
        image: "/images/cardIcon1.png",
        points: ["POS, cameras, delivery apps, invoices", "Real-time order tracking and management"],
    },
    {
        title: "Convenience Stores",
        image: "/images/cardIcon2.png",
        points: ["Inventory management and stock alerts", "Multi-location tracking and analytics"],
    },
    {
        title: "Gas Stations",
        image: "/images/cardIcon3.png",
        points: ["Fuel management and pump monitoring", "Convenience store integration"],
    },
];

const logos = [
    { title: "Grubhub", image: "/images/grubhubLogo.png" },
    { title: "Doordash", image: "/images/doordashLogo.png" },
    { title: "Uber Eats", image: "/images/ubereatsLogo.png" },
];

const whyChooseItems = [
    { text: "Works with your existing POS & cameras", gradient: "bg-[radial-gradient(circle_at_80%_70%,rgba(20,184,166,0.18)_5%,rgba(15,15,15,0.5)_70%,#0f0f0f_100%)]" },
    { text: "Centralized online order dashboard", gradient: "bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.08)_0%,rgba(15,15,15,0.95)_70%,#0f0f0f_100%)]" },
    { text: "Trusted by retailers & associations", gradient: "bg-[radial-gradient(circle_at_80%_80%,rgba(22,101,52,0.52)_0%,rgba(15,15,15,0.95)_75%,#0f0f0f_100%)]" },
    { text: "AI-powered automation → less manual work", gradient: "bg-[radial-gradient(circle_at_80%_50%,rgba(100,181,246,0.25)_0%,rgba(15,15,15,0.95)_70%,#0f0f0f_100%)]" },
    { text: "3 years secure cloud video/audio storage", gradient: "bg-[radial-gradient(circle_at_50%_90%,rgba(190,30,90,0.32)_0%,rgba(255,94,58,0.08)_50%,rgba(15,15,15,0.96)_70%,#0f0f0f_100%)]" },
];

const testimonials = [
    {
        name: "Harriet Brown",
        review: "Bag n Dash cut our shrinkage by 30% and saved us hours on invoices every week.",
        image: "/images/heroSection.png",
    },
    {
        name: "John Smith",
        review: "The inventory tracking system has completely transformed how we manage our stock.",
        image: "/images/heroSection.png",
    },
    {
        name: "Sarah Johnson",
        review: "Customer loyalty program helped us retain 45% more customers in just 3 months.",
        image: "/images/heroSection.png",
    },
];

export default function IndustriesSection() {
    const [activeIndustry, setActiveIndustry] = useState(0);
    const [activeWhy, setActiveWhy] = useState(0);
    const [activeTestimonial, setActiveTestimonial] = useState(1);

    return (
        <section className="relative flex flex-col items-center gap-20 md:gap-24 lg:gap-32 w-full py-12 md:py-16 bg-gradient-to-b from-0% to-[#020D2D] overflow-hidden">
            <div
                className="absolute lg:flex hidden inset-0 pointer-events-none opacity-15"
                style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(41,92,250,0.18) 5%, rgba(2,13,45,0.5) 70%, #020D2D 100%)',
                }}
            />

            <div
                className="absolute lg:flex hidden w-[1075px] h-[914px] opacity-5 pointer-events-none"
                style={{
                    left: 'calc(50% - 1075px/2 + 600px)',
                    top: '100px',
                    background: '#7C50FD',
                    filter: 'blur(300px)',
                }}
            />

            <div className="w-full z-50">
                <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-[2.2rem] tracking-wide text-white mb-4 md:mb-8 px-4">
                    Industries We Serve
                </h1>

                <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
                        {industries.map((industry, index) => (
                            <div
                                key={index}
                                className="relative bg-gradient-to-br z-50 from-black/20 to-[#14b8a62e]/50 backdrop-blur-[20px] border border-[#434343] rounded-[30px] bg-black/30 p-10"
                            >
                                <Image
                                    src={industry.image}
                                    alt={industry.title}
                                    width={60}
                                    height={60}
                                    className="object-contain flex items-center justify-center mb-8"
                                />
                                <h2 className="font-semibold text-2xl text-white mb-6 leading-tight">
                                    {industry.title}
                                </h2>
                                <ul className="space-y-3">
                                    {industry.points.map((point, i) => (
                                        <li key={i} className="text-sm text-[#BDBDBD] leading-relaxed">
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="lg:hidden relative flex justify-center overflow-hidden">
                        <div className="flex transition-transform duration-500 ease-in-out w-full max-w-[600px]" style={{ transform: `translateX(-${activeIndustry * 100}%)` }}>
                            {industries.map((industry, index) => (
                                <div key={index} className="min-w-full mb-6 z-50 flex justify-center px-4">
                                    <div className="relative bg-gradient-to-br from-black/10 via-[#14b8a62e]/50 to-[#14b8a62e]/80 backdrop-blur-[20px] border border-[#434343] rounded-[24px] bg-black/30 p-8 w-full max-w-[340px]">
                                        <Image
                                            src={industry.image}
                                            alt={industry.title}
                                            width={50}
                                            height={50}
                                            className="object-contain flex items-center justify-center mb-6"
                                        />
                                        <h2 className="font-semibold text-xl text-white mb-5 leading-tight">
                                            {industry.title}
                                        </h2>
                                        <ul className="space-y-2.5">
                                            {industry.points.map((point, i) => (
                                                <li key={i} className="text-sm text-[#BDBDBD] leading-relaxed">
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:hidden my-6 flex justify-center gap-2.5">
                        {industries.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndustry(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-all ${activeIndustry === index ? "bg-gradient-to-r from-[#F462F3] to-[#7B50FE]" : "bg-[#4F4F4F]"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full z-50">
                <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-[2.2rem] tracking-wide text-white mb-4 md:mb-8 px-4">
                    Why Choose Bag N Dash?
                </h1>

                <div className="mx-auto z-50 px-4 sm:px-6 lg:px-8 max-w-6xl w-full">
                    <div className="hidden lg:grid grid-cols-6 grid-rows-6 gap-4 aspect-square w-full">
                        <div className="col-span-2 row-span-4 border border-[#434343] rounded-3xl p-6 flex flex-col justify-start shadow-2xl bg-[radial-gradient(circle_at_80%_70%,rgba(20,184,166,0.18)_5%,rgba(15,15,15,0.5)_70%,#0f0f0f_100%)]">
                            <h2 className="text-2xl font-bold tracking-wider text-white">
                                Works with your existing POS & cameras
                            </h2>
                        </div>
                        <div className="col-span-4 row-span-2 border border-[#434343] rounded-3xl p-6 flex flex-col justify-start shadow-2xl bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.08)_0%,rgba(15,15,15,0.95)_70%,#0f0f0f_100%)]">
                            <h2 className="text-2xl font-bold tracking-wider text-white">
                                Centralized online order dashboard
                            </h2>
                        </div>
                        <div className="col-span-2 row-span-2 border border-[#434343] rounded-3xl p-6 flex flex-col justify-start shadow-2xl bg-[radial-gradient(circle_at_80%_80%,rgba(22,101,52,0.52)_0%,rgba(15,15,15,0.95)_75%,#0f0f0f_100%)]">
                            <h2 className="text-xl font-bold tracking-wider text-white">
                                Trusted by retailers & associations
                            </h2>
                        </div>
                        <div className="col-span-2 row-span-4 border border-[#434343] rounded-3xl p-6 flex flex-col justify-start shadow-2xl bg-[radial-gradient(circle_at_80%_50%,rgba(100,181,246,0.25)_0%,rgba(15,15,15,0.95)_70%,#0f0f0f_100%)]">
                            <h2 className="text-2xl font-bold tracking-wider text-white">
                                AI-powered automation → less manual work
                            </h2>
                        </div>
                        <div className="col-span-4 row-span-2 border border-[#434343] rounded-3xl p-6 flex flex-col justify-start shadow-2xl bg-[radial-gradient(circle_at_50%_90%,rgba(190,30,90,0.32)_0%,rgba(255,94,58,0.08)_50%,rgba(15,15,15,0.96)_70%,#0f0f0f_100%)]">
                            <h2 className="text-2xl font-bold tracking-wider text-white">
                                3 years secure cloud video/audio storage
                            </h2>
                        </div>
                    </div>

                    <div className="lg:hidden relative flex justify-center overflow-hidden">
                        <div className="flex transition-transform duration-500 ease-in-out w-full max-w-[600px]" style={{ transform: `translateX(-${activeWhy * 100}%)` }}>
                            {whyChooseItems.map((item, index) => (
                                <div key={index} className="min-w-full flex justify-center px-4">
                                    <div className={`border border-[#434343] rounded-[24px] w-full max-w-[340px] h-[500px] relative backdrop-blur-[20px] ${item.gradient}`}>
                                        <div className="absolute top-8 left-6 right-6">
                                            <h2 className="font-bold text-xl leading-[140%] text-white">
                                                {item.text}
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:hidden my-6 flex justify-center gap-2.5">
                        {whyChooseItems.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveWhy(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-all ${activeWhy === index ? "bg-gradient-to-r from-[#F462F3] to-[#7B50FE]" : "bg-[#4F4F4F]"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full z-50">
                <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-[2.2rem] tracking-wide text-white mb-4 md:mb-8 px-4">
                    Partners & Integration
                </h1>

                <div className="mx-auto z-50 mb-30 px-4 sm:px-6 lg:px-8 w-full">
                    {/* Desktop Grid */}
                    <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
                        {logos.map((logo, index) => (
                            <div
                                key={index}
                                className="relative border h-28 border-[#434343] rounded-[30px] bg-gradient-to-br from-black/20 to-[#14b8a62e]/50 backdrop-blur-[20px] py-6 px-20 flex items-center justify-center"
                            >
                                <Image
                                    src={logo.image}
                                    alt={logo.title}
                                    height={240}
                                    width={240}
                                    className="object-contain text-white"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Mobile Marquee */}
                    <div className="lg:hidden relative overflow-hidden py-6">
                        <div className="flex animate-marquee-logos whitespace-nowrap gap-6">
                            {[...logos, ...logos].map((logo, index) => (
                                <div
                                    key={index}
                                    className="inline-flex items-center justify-center flex-shrink-0 w-[120px] h-[80px]"
                                >
                                    <Image
                                        src={logo.image}
                                        alt={logo.title}
                                        height={80}
                                        width={120}
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
      display: flex;
      animation: marquee-logos 20s linear infinite;
    }
  `}</style>
            </div>


            <div
                className="absolute lg:flex hidden inset-0 pointer-events-none opacity-25"
                style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(41,92,250,0.18) 5%, rgba(2,13,45,0.5) 70%, #020D2D 100%)',
                }}
            />

            <div
                className="absolute lg:flex hidden w-[1075px] h-[914px] opacity-25 pointer-events-none"
                style={{
                    left: 'calc(50% - 1075px/2 - 200px)',
                    top: '0px',
                    background: '#295CFA',
                    filter: 'blur(300px)',
                }}
            />
            <div
                className="absolute lg:flex hidden w-[1075px] h-[914px] opacity-25 pointer-events-none"
                style={{
                    left: 'calc(50% - 1075px/2 + 300px)',
                    top: '200px',
                    background: '#F462F3',
                    filter: 'blur(300px)',
                }}
            />

            <div className="w-full z-50">
                <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-[2.2rem] tracking-wide text-white mb-4 md:mb-8 px-4">
                    Testimonials
                </h1>

                <div className="relative flex justify-center px-4 sm:px-6 lg:px-8 w-full">
                    <div
                        className="flex transition-transform duration-500 ease-in-out w-full max-w-[700px]"
                        style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="min-w-full flex justify-center px-2">
                                <div className="relative w-full max-w-[320px] lg:max-w-[650px] min-h-[500px] lg:min-h-[240px] lg:h-[240px] border border-[#434343]/70 rounded-[24px] lg:rounded-[30px] overflow-hidden bg-black/40 backdrop-blur-[20px] flex flex-col lg:flex-row">
                                    <div className="w-full lg:w-[260px] h-[240px] lg:h-full flex-shrink-0 p-4 lg:p-4">
                                        <div className="w-full h-full rounded-[12px] overflow-hidden">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                width={260}
                                                height={240}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="hidden lg:block w-[4px] h-[228px] my-auto rounded-full bg-gradient-to-b from-[#F462F3] to-[#7B50FE]" />
                                    <div className="lg:hidden w-[280px] h-[3px] mx-auto rounded-full bg-gradient-to-r from-[#F462F3] to-[#7B50FE]" />
                                    <div className="flex-1 flex flex-col justify-start lg:justify-center px-6 lg:px-8 pt-6 pb-6 lg:pb-0">
                                        <h2 className="font-semibold text-xl lg:text-[28px] leading-[140%] lg:leading-[160%] text-white mb-3 lg:mb-3">
                                            {testimonial.name}
                                        </h2>
                                        <p className="font-normal lg:font-medium text-sm lg:text-[16px] leading-[160%] lg:leading-[180%] text-[#E0E0E0]">
                                            {testimonial.review}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="my-8 md:my-14 flex justify-center gap-2.5">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTestimonial(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-all ${activeTestimonial === index ? "bg-gradient-to-r from-[#F462F3] to-[#7B50FE]" : "bg-[#4F4F4F]"}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}