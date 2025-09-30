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
    const [active, setActive] = useState(1);

    return (
        <section className="relative flex flex-col gap-16 w-full py-16 bg-[#020D2D] overflow-hidden">
            {/* Shared Radial Gradient Overlay */}
            <div
                className="absolute inset-0 pointer-events-none opacity-15"
                style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(41,92,250,0.18) 5%, rgba(2,13,45,0.5) 70%, #020D2D 100%)',
                }}
            />

            {/* Glow Effects */}
            <div
                className="absolute w-[1075px] h-[914px] opacity-5 pointer-events-none"
                style={{
                    left: 'calc(50% - 1075px/2 + 600px)',
                    top: '100px',
                    background: '#7C50FD',
                    filter: 'blur(300px)',
                }}
            />

            {/* Content (unchanged) */}
            <h1 className="text-center font-bold z-50 text-[2.4rem] tracking-wide text-white px-4">
                Industries We Serve
            </h1>
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
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
            </div>

            <h1 className="text-center font-bold z-50 mt-24 text-[2.4rem] tracking-wide text-white px-4">
                Why Choose Bag N Dash?
            </h1>
            <div className="mx-auto z-50 px-4 sm:px-6 lg:px-8 max-w-6xl w-full">
                <div className="grid grid-cols-6 grid-rows-6 gap-4 aspect-square w-full">
                    <div className="col-span-2 row-span-4 border border-[#434343] rounded-3xl p-6 flex flex-col justify-start shadow-2xl 
            bg-[radial-gradient(circle_at_80%_70%,rgba(20,184,166,0.18)_5%,rgba(15,15,15,0.5)_70%,#0f0f0f_100%)]">
                        <h2 className="text-2xl font-bold tracking-wider text-white">
                            Works with your existing POS & cameras
                        </h2>
                    </div>
                    <div className="col-span-4 row-span-2 border border-[#434343] rounded-3xl p-6 flex flex-col justify-start shadow-2xl 
            bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.08)_0%,rgba(15,15,15,0.95)_70%,#0f0f0f_100%)]">
                        <h2 className="text-2xl font-bold tracking-wider text-white">
                            Centralized online order dashboard
                        </h2>
                    </div>
                    <div className="col-span-2 row-span-2 border border-[#434343] rounded-3xl p-6 flex flex-col justify-start shadow-2xl 
            bg-[radial-gradient(circle_at_80%_80%,rgba(22,101,52,0.52)_0%,rgba(15,15,15,0.95)_75%,#0f0f0f_100%)]">
                        <h2 className="text-xl font-bold tracking-wider text-white">
                            Trusted by retailers & associations
                        </h2>
                    </div>
                    <div className="col-span-2 row-span-4 border border-[#434343] rounded-3xl p-6 flex flex-col justify-start shadow-2xl 
            bg-[radial-gradient(circle_at_80%_50%,rgba(100,181,246,0.25)_0%,rgba(15,15,15,0.95)_70%,#0f0f0f_100%)]">
                        <h2 className="text-2xl font-bold tracking-wider text-white">
                            AI-powered automation → less manual work
                        </h2>
                    </div>
                    <div className="col-span-4 row-span-2 border border-[#434343] rounded-3xl p-6 flex flex-col justify-start shadow-2xl 
            bg-[radial-gradient(circle_at_50%_90%,rgba(190,30,90,0.32)_0%,rgba(255,94,58,0.08)_50%,rgba(15,15,15,0.96)_70%,#0f0f0f_100%)]">
                        <h2 className="text-2xl font-bold tracking-wider text-white">
                            3 years secure cloud video/audio storage
                        </h2>
                    </div>
                </div>
            </div>

            <h1 className="text-center font-bold mt-16 z-50 text-[2.4rem] tracking-wide text-white px-4">
                Partners & Integration
            </h1>
            <div className="mx-auto z-50 mb-30 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
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
            </div>


            <div
                className="absolute inset-0 pointer-events-none opacity-25"
                style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(41,92,250,0.18) 5%, rgba(2,13,45,0.5) 70%, #020D2D 100%)',
                }}
            />

            <div
                className="absolute w-[1075px] h-[914px] opacity-25 pointer-events-none"
                style={{
                    left: 'calc(50% - 1075px/2 - 200px)',
                    top: '0px',
                    background: '#295CFA',
                    filter: 'blur(300px)',
                }}
            />
            <div
                className="absolute w-[1075px] h-[914px] opacity-25 pointer-events-none"
                style={{
                    left: 'calc(50% - 1075px/2 + 300px)',
                    top: '200px',
                    background: '#F462F3',
                    filter: 'blur(300px)',
                }}
            />

            {/* Content (unchanged) */}
            <h1 className="text-center font-bold text-[2.2rem] z-50 sm:text-[2.5rem] md:text-[2.8rem] tracking-wide text-white mb-12 px-4">
                Testimonials
            </h1>
            <div className="relative flex justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out w-full max-w-[700px]"
                    style={{ transform: `translateX(-${active * 100}%)` }}
                >
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="min-w-full flex justify-center">
                            <div className="relative w-full max-w-[650px] h-[240px] border border-[#434343]/70 rounded-3xl overflow-hidden bg-black/40 backdrop-blur-[20px] flex">
                                <div className="w-[260px] h-full flex-shrink-0 p-4">
                                    <div className="w-full h-full rounded-[10px] overflow-hidden">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            width={200}
                                            height={200}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="w-[4px] h-[228px] my-auto rounded-full bg-gradient-to-b from-[#F462F3] to-[#7B50FE]" />
                                <div className="flex-1 flex flex-col justify-center px-8">
                                    <h2 className="font-semibold text-[28px] leading-[160%] text-white mb-3">
                                        {testimonial.name}
                                    </h2>
                                    <p className="font-medium text-[16px] leading-[180%] text-[#E0E0E0]">
                                        {testimonial.review}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="my-14 flex justify-center gap-3">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActive(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${active === index ? "bg-gradient-to-r from-[#F462F3] to-[#7B50FE]" : "bg-[#4F4F4F]"
                            }`}
                    />
                ))}
            </div>

        </section>
    );
}