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
        <section className="relative flex flex-col items-center gap-12 sm:gap-16 md:gap-20 lg:gap-32 w-full py-8 sm:py-12 md:py-16 bg-gradient-to-b from-transparent via-transparent to-[#0F5F4F]/40 md:bg-none md:bg-[#020D2D] overflow-hidden">
            <div
                className="absolute lg:flex hidden inset-0 pointer-events-none opacity-15"
                style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(41,92,250,0.18) 5%, rgba(2,13,45,0.5) 70%, #020D2D 100%)',
                }}
            />

            <div className="absolute top-10 md:hidden inset-0 flex items-center justify-center pointer-events-none">
                <div className="h-[20%] min-w-5xl rounded-full bg-[radial-gradient(circle_at_top,_#4B2FFF_0%,_#7B50FE_35%,_transparent_70%)] blur-[200px]" />
            </div>

            <div className="absolute bottom-10 opacity-40 md:hidden inset-0 flex items-center justify-center pointer-events-none">
                <div className="h-[60%] min-w-5xl rounded-full bg-[radial-gradient(circle_at_top,_#260E26_0%,_#5C1D4B_35%,_transparent_70%)] blur-[200px]" />
            </div>

            <div className="w-full z-10">
                <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-3xl lg:text-[2.2rem] tracking-wide text-white mb-6 sm:mb-8 md:mb-8 px-4">
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
                                <div key={index} className="min-w-full flex justify-center px-4">
                                    <div className="relative bg-gradient-to-br from-black/10 via-[#14b8a62e]/50 to-[#14b8a62e]/80 backdrop-blur-[20px] border border-[#434343] rounded-[24px] bg-black/30 p-6 sm:p-8 w-full max-w-[340px]">
                                        <Image
                                            src={industry.image}
                                            alt={industry.title}
                                            width={50}
                                            height={50}
                                            className="object-contain flex items-center justify-center mb-4 sm:mb-6"
                                        />
                                        <h2 className="font-semibold text-lg sm:text-xl text-white mb-4 sm:mb-5 leading-tight">
                                            {industry.title}
                                        </h2>
                                        <ul className="space-y-2 sm:space-y-2.5">
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

            <div className="w-full z-10">
                <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-3xl lg:text-[2.2rem] tracking-wide text-white mb-6 sm:mb-8 md:mb-8 px-4">
                    Why Choose Bag N Dash?
                </h1>

                <div className="mx-auto z-10 px-4 sm:px-6 lg:px-8 max-w-6xl w-full">
                    <div className="block lg:hidden">
                        <div className="relative w-full mb-6 overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${activeWhy * 100}%)` }}
                            >
                                <div className="w-full flex-shrink-0 px-2">
                                    <div className="relative border border-[#434343] rounded-3xl p-4 flex flex-col items-start justify-start shadow-2xl bg-[radial-gradient(circle_at_80%_70%,rgba(20,184,166,0.18)_5%,rgba(15,15,15,0.5)_70%,#0f0f0f_100%)] h-[28rem] sm:h-[30rem]">
                                        <Image
                                            src="/images/cctv.svg"
                                            alt="Decoration 1"
                                            width={120}
                                            height={120}
                                            className="object-contain absolute top-28 sm:top-30 w-16 h-16 scale-[2.5] sm:scale-[3] left-12 sm:left-16 mb-4"
                                        />
                                        <h2 className="text-lg sm:text-xl font-semibold leading-[1.7] tracking-wider text-white text-left mt-auto px-2">
                                            Works with your existing POS & cameras
                                        </h2>
                                    </div>
                                </div>

                                <div className="w-full flex-shrink-0 px-2">
                                    <div className="relative border border-[#434343] rounded-3xl p-4 flex flex-col items-start justify-start shadow-2xl bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.08)_0%,rgba(15,15,15,0.95)_70%,#0f0f0f_100%)] h-[28rem] sm:h-[30rem]">
                                        <Image
                                            src="/images/atm1.svg"
                                            alt="Decoration 2"
                                            width={180}
                                            height={80}
                                            className="object-contain top-32 sm:top-38 right-5 absolute mb-4 scale-90 sm:scale-100"
                                        />
                                        <Image
                                            src="/images/atm2.svg"
                                            alt="Decoration 2"
                                            width={180}
                                            height={80}
                                            className="object-contain top-64 sm:top-74 right-20 sm:right-24 absolute mb-4 scale-90 sm:scale-100"
                                        />
                                        <h2 className="text-lg sm:text-xl font-semibold leading-[1.7] tracking-wider text-white text-left px-2">
                                            Centralized online <br /> order dashboard
                                        </h2>
                                    </div>
                                </div>

                                <div className="w-full flex-shrink-0 px-2">
                                    <div className="relative border border-[#434343] rounded-3xl p-4 flex flex-col items-start justify-end shadow-2xl bg-[radial-gradient(circle_at_80%_80%,rgba(22,101,52,0.52)_0%,rgba(15,15,15,0.95)_75%,#0f0f0f_100%)] h-[28rem] sm:h-[30rem]">
                                        <Image
                                            src="/images/shield.svg"
                                            alt="Decoration 3"
                                            width={100}
                                            height={100}
                                            className="object-contain scale-[1.8] sm:scale-[2] top-32 sm:top-36 left-12 sm:left-14 w-16 h-16 mb-3 absolute"
                                        />
                                        <h2 className="text-lg sm:text-xl font-semibold leading-[1.7] tracking-wider text-white text-left mt-auto px-2">
                                            Trusted by retailers & associations
                                        </h2>
                                    </div>
                                </div>

                                <div className="w-full flex-shrink-0 px-2">
                                    <div className="relative border border-[#434343] rounded-3xl p-4 flex flex-col items-start justify-end shadow-2xl bg-[radial-gradient(circle_at_80%_50%,rgba(100,181,246,0.25)_0%,rgba(15,15,15,0.95)_70%,#0f0f0f_100%)] h-[28rem] sm:h-[30rem]">
                                        <Image
                                            src="/images/human.svg"
                                            alt="Decoration 4"
                                            width={140}
                                            height={140}
                                            className="object-contain right-8 sm:right-9 top-28 sm:top-30 w-20 h-20 scale-[3] sm:scale-[3.5] absolute mb-4"
                                        />
                                        <h2 className="text-lg sm:text-xl font-semibold leading-[1.7] tracking-wider text-white text-left mt-auto px-2">
                                            AI-powered automation → less manual work
                                        </h2>
                                    </div>
                                </div>

                                <div className="w-full flex-shrink-0 px-2">
                                    <div className="relative overflow-hidden border border-[#434343] rounded-3xl p-4 flex flex-col items-start justify-start shadow-2xl bg-[radial-gradient(circle_at_50%_90%,rgba(190,30,90,0.32)_0%,rgba(255,94,58,0.08)_50%,rgba(15,15,15,0.96)_70%,#0f0f0f_100%)] h-[28rem] sm:h-[30rem]">
                                        <Image
                                            src="/images/lock.svg"
                                            alt="Decoration 5"
                                            width={180}
                                            height={80}
                                            className="object-contain z-20 scale-[1.3] sm:scale-[1.5] -bottom-8 left-4 absolute mb-4 w-24 h-12"
                                        />
                                        <Image
                                            src="/images/lockShield.svg"
                                            alt="Decoration 5"
                                            width={180}
                                            height={80}
                                            className="object-contain -bottom-4 scale-[1.3] sm:scale-[1.5] z-10 left-4 absolute mb-4 w-24 h-12"
                                        />
                                        <Image
                                            src="/images/cloud.svg"
                                            alt="Decoration 5"
                                            width={180}
                                            height={80}
                                            className="object-contain bottom-4 left-10 sm:left-12 scale-[1.6] sm:scale-[1.8] absolute mb-4 w-24 h-12"
                                        />
                                        <Image
                                            src="/images/logoN.png"
                                            alt="Decoration 5"
                                            width={180}
                                            height={80}
                                            className="object-contain bottom-0 right-0 scale-[1.8] sm:scale-[2] opacity-20 absolute mb-4 w-24 h-12"
                                        />
                                        <h2 className="text-lg sm:text-xl font-semibold leading-[1.7] tracking-wider text-white text-left px-2">
                                            3 years secure cloud video/audio storage
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="my-6 flex justify-center gap-2.5">
                            {[0, 1, 2, 3, 4].map((index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveWhy(index)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all ${activeWhy === index ? "bg-gradient-to-r from-[#F462F3] to-[#7B50FE]" : "bg-[#4F4F4F]"}`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="hidden lg:grid grid-cols-6 grid-rows-6 gap-4 aspect-square w-full">
                        <div className="col-span-2 relative row-span-4 border border-[#434343] rounded-3xl p-8 flex flex-col items-center justify-start shadow-2xl bg-[radial-gradient(circle_at_80%_70%,rgba(20,184,166,0.18)_5%,rgba(15,15,15,0.5)_70%,#0f0f0f_100%)]">
                            <Image
                                src="/images/cctv.svg"
                                alt="Decoration 1"
                                width={120}
                                height={120}
                                className="object-contain absolute bottom-24 scale-[2.6] left-24 mb-4"
                            />
                            <h2 className="text-2xl font-semibold leading-[1.7] tracking-wider text-white text-left">
                                Works with your existing POS & cameras
                            </h2>
                        </div>

                        <div className="col-span-4 relative row-span-2 border border-[#434343] rounded-3xl p-8 flex flex-col items-start justify-start shadow-2xl bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.08)_0%,rgba(15,15,15,0.95)_70%,#0f0f0f_100%)]">
                            <Image
                                src="/images/atm1.svg"
                                alt="Decoration 2"
                                width={180}
                                height={80}
                                className="object-contain top-18 scale-[1.4] right-16 absolute mb-4"
                            />
                            <Image
                                src="/images/atm2.svg"
                                alt="Decoration 2"
                                width={180}
                                height={80}
                                className="object-contain bottom-1 scale-[1.4] right-50 absolute mb-4"
                            />
                            <h2 className="text-2xl font-semibold leading-[1.7] tracking-wider text-white text-left">
                                Centralized online <br /> order dashboard
                            </h2>
                        </div>

                        <div className="col-span-2 relative row-span-2 border border-[#434343] rounded-3xl p-8 flex flex-col items-start justify-end shadow-2xl bg-[radial-gradient(circle_at_80%_80%,rgba(22,101,52,0.52)_0%,rgba(15,15,15,0.95)_75%,#0f0f0f_100%)]">
                            <Image
                                src="/images/shield.svg"
                                alt="Decoration 3"
                                width={100}
                                height={100}
                                className="object-contain top-15 absolute mb-3"
                            />
                            <h2 className="text-2xl font-semibold leading-[1.7] tracking-wider text-white text-left">
                                Trusted by retailers & associations
                            </h2>
                        </div>

                        <div className="col-span-2 relative row-span-4 border border-[#434343] rounded-3xl p-6 flex flex-col items-start justify-end shadow-2xl bg-[radial-gradient(circle_at_80%_50%,rgba(100,181,246,0.25)_0%,rgba(15,15,15,0.95)_70%,#0f0f0f_100%)]">
                            <Image
                                src="/images/human.svg"
                                alt="Decoration 4"
                                width={140}
                                height={140}
                                className="object-contain right-9 top-28 scale-[1.5] absolute mb-4"
                            />
                            <h2 className="text-2xl font-semibold leading-[1.7] tracking-wider text-white text-left">
                                AI-powered automation → less manual work
                            </h2>
                        </div>

                        <div className="col-span-4 relative row-span-2 overflow-hidden border border-[#434343] rounded-3xl p-6 flex flex-col items-start justify-start shadow-2xl bg-[radial-gradient(circle_at_50%_90%,rgba(190,30,90,0.32)_0%,rgba(255,94,58,0.08)_50%,rgba(15,15,15,0.96)_70%,#0f0f0f_100%)]">
                            <Image
                                src="/images/lock.png"
                                alt="Decoration 5"
                                width={180}
                                height={80}
                                className="object-contain scale-[0.4] z-20 -bottom-20 left-20 absolute mb-4"
                            />
                            <Image
                                src="/images/lockShield.png"
                                alt="Decoration 5"
                                width={180}
                                height={80}
                                className="object-contain scale-[0.95] -bottom-8 z-10 left-20 absolute mb-4"
                            />
                            <Image
                                src="/images/cloud.png"
                                alt="Decoration 5"
                                width={180}
                                height={80}
                                className="object-contain bottom-6 left-40 scale-[1.5] absolute mb-4"
                            />
                            <Image
                                src="/images/logoN.png"
                                alt="Decoration 5"
                                width={180}
                                height={80}
                                className="object-contain -bottom-12 -right-5 scale-[0.8] opacity-20 absolute mb-4"
                            />
                            <h2 className="text-2xl font-semibold leading-[1.7] tracking-wider text-white text-left">
                                3 years secure cloud video/audio storage
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full z-10">
                <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-3xl lg:text-[2.2rem] tracking-wide text-white mb-6 sm:mb-8 md:mb-8 px-4">
                    Partners & Integration
                </h1>

                <div className="mx-auto z-10 mb-16 sm:mb-20 md:mb-30 px-4 sm:px-6 lg:px-8 w-full">
                    <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
                        {logos.map((logo, index) => (
                            <div
                                key={index}
                                className="relative border h-36 border-[#434343] rounded-[30px] bg-gradient-to-br from-black/20 to-[#14b8a62e]/50 backdrop-blur-[20px] py-8 px-24 flex items-center justify-center"
                            >
                                <Image
                                    src={logo.image}
                                    alt={logo.title}
                                    height={280}
                                    width={280}
                                    className="object-contain text-white"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="lg:hidden relative overflow-hidden py-6">
                        <div className="flex animate-marquee-logos whitespace-nowrap gap-6">
                            {[...logos, ...logos].map((logo, index) => (
                                <div
                                    key={index}
                                    className="inline-flex items-center justify-center flex-shrink-0 w-[140px] sm:w-[160px] h-[90px] sm:h-[100px]"
                                >
                                    <Image
                                        src={logo.image}
                                        alt={logo.title}
                                        height={100}
                                        width={160}
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

            <div className="absolute lg:flex z-50 hidden w-88 h-60 pointer-events-none left-20 bottom-70 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 blur-[220px]" />

            <div className="w-full z-10">
                <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-3xl lg:text-[2.2rem] tracking-wide text-white mb-6 sm:mb-8 md:mb-8 px-4">
                    Testimonials
                </h1>

                <div className="relative flex justify-center px-4 sm:px-6 lg:px-8 w-full">
                    <div
                        className="flex transition-transform duration-500 ease-in-out w-full max-w-[800px]"
                        style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="min-w-full flex justify-center px-2">
                                <div className="relative w-full max-w-[260px] sm:max-w-[400px] lg:max-w-[750px] min-h-[440px] sm:min-h-[480px] lg:min-h-[280px] lg:h-[280px] border border-[#434343]/70 rounded-[24px] lg:rounded-[30px] overflow-hidden bg-black/40 backdrop-blur-[20px] flex flex-col lg:flex-row">
                                    <div className="w-full lg:w-[280px] h-[220px] sm:h-[240px] lg:h-full flex-shrink-0 p-4 sm:p-4 lg:p-4">
                                        <div className="w-full h-full rounded-[12px] overflow-hidden">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                width={280}
                                                height={280}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="hidden lg:block w-[4px] h-[268px] my-auto rounded-full bg-gradient-to-b from-[#F462F3] to-[#7B50FE]" />
                                    <div className="lg:hidden w-[300px] sm:w-[340px] h-[3px] mx-auto rounded-full bg-gradient-to-r from-[#F462F3] to-[#7B50FE]" />
                                    <div className="flex-1 flex flex-col justify-start lg:justify-center px-6 sm:px-7 lg:px-10 pt-5 sm:pt-6 pb-6 sm:pb-7 lg:pb-0">
                                        <h2 className="font-semibold text-xl sm:text-2xl lg:text-[32px] leading-[140%] lg:leading-[160%] text-white mb-3 sm:mb-4 lg:mb-4">
                                            {testimonial.name}
                                        </h2>
                                        <p className="font-normal lg:font-medium text-sm sm:text-base lg:text-[18px] leading-[160%] lg:leading-[180%] text-[#E0E0E0]">
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