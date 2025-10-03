"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const services = [
    {
        title: "Online Order Management",
        img: "/images/heroSection.png",
        points: [
            "Centralize UberEats, Grubhub & more",
            "Track orders, sales & customer insights",
        ],
    },
    {
        title: "Smart Inventory Tracking",
        img: "/images/heroSection.png",
        points: ["Monitor stock in real-time", "Predict shortages with AI alerts"],
    },
    {
        title: "Customer Loyalty Program",
        img: "/images/heroSection.png",
        points: [
            "Reward repeat buyers automatically",
            "Boost retention & engagement",
        ],
    },
];

export default function ServicesSection() {
    const [active, setActive] = useState(1);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const check = () => {
            const desktop = window.innerWidth >= 1024; // lg breakpoint
            setIsDesktop(desktop);
            if (!desktop) setActive(0);
        };
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const currentActive = isDesktop ? active : 0;

    return (
        <section
            className="relative overflow-hidden w-full py-12 md:py-16 
  bg-gradient-to-b from-transparent via-[#020D2D] to-black/50 
  md:bg-none md:bg-[#020D2D]"
        >
            

            <div
                className="absolute lg:flex hidden w-88 h-60  top-0 pointer-events-none 
             left-[calc(35%-1075px/2+600px)]
             bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 blur-[220px]"
            />

            <div
                className="absolute lg:flex hidden z-50 w-88 h-40 pointer-events-none 
             left-20 bottom-100 
             bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 blur-[220px]"
            />

            <div
                className="absolute lg:hidden block  w-full h-[50%] opacity-70 pointer-events-none left-0 bottom-80 bg-gradient-to-r from-green-900 to-green-950 blur-[220px]" />

            {/* Title */}
            <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-[2.2rem] tracking-wide text-white mb-8 md:mb-12 px-4">
                Our Services
            </h1>

            {/* Cards */}
            <div className="relative flex justify-center px-4 lg:px-8">
                <div
                    className={`flex transition-transform duration-500 ease-in-out ${isDesktop
                        ? "flex-row gap-10 w-full max-w-[750px]"
                        : "flex-col gap-10 w-full max-w-[600px]"
                        }`}
                    style={
                        isDesktop
                            ? { transform: `translateX(-${currentActive * 100}%)` }
                            : {}
                    }
                >
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`${isDesktop ? "min-w-full" : "w-full"} flex justify-center`}
                        >
                            <div
                                className={`w-full max-w-[650px] lg:max-w-[750px] 
                  h-auto lg:h-[630px] 
                  border border-[#333] rounded-xl lg:rounded-[20px] 
                  overflow-hidden bg-black/40 backdrop-blur-[20px] 
                  transition-all duration-500 
                  ${isDesktop
                                        ? active === index
                                            ? "opacity-100 scale-100"
                                            : "opacity-50 scale-95"
                                        : "opacity-100 scale-100"
                                    }`}
                            >
                                {/* Image */}
                                <div className="w-full h-[200px] md:h-[250px] lg:h-[400px] overflow-hidden">
                                    <Image
                                        src={service.img}
                                        alt={service.title}
                                        width={640}
                                        height={300}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Divider */}
                                <div
                                    className="w-full h-1 lg:h-[8px]"
                                    style={{
                                        background:
                                            "linear-gradient(95.49deg, #F462F3 52.87%, #7B50FE 106.28%)",
                                    }}
                                />

                                {/* Text + CTA */}
                                <div className="px-4 md:px-6 py-4 md:py-6">
                                    <h2 className="font-semibold text-lg md:text-2xl lg:text-[30px] text-[#F2F2F2] mb-3 md:mb-4">
                                        {service.title}
                                    </h2>
                                    <div className="flex flex-col gap-3 md:gap-4">
                                        <ul className="space-y-1.5 md:space-y-2">
                                            {service.points.map((p, i) => (
                                                <li
                                                    key={i}
                                                    className="text-xs md:text-base text-[#BDBDBD]"
                                                >
                                                    {p}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="flex justify-start gap-3">
                                            {/* Book a Demo */}
                                            <button
                                                className="px-4 h-8 md:px-6 md:h-10 rounded-full font-semibold text-xs md:text-sm text-white hover:opacity-90 transition-opacity"
                                                style={{
                                                    background:
                                                        "linear-gradient(95.49deg, #F462F3 52.87%, #7B50FE 106.28%)",
                                                }}
                                            >
                                                Book a Demo
                                            </button>

                                            {/* Learn More (only mobile) */}
                                            {!isDesktop && (
                                                <button className="px-4 h-8 rounded-full font-semibold text-xs text-white border border-purple-400 hover:opacity-90 transition-opacity">
                                                    Learn More
                                                </button>
                                            )}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination (desktop only) */}
            {isDesktop && (
                <div className="my-10 lg:my-14 flex justify-center gap-3">
                    {services.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActive(index)}
                            className={`w-3 h-3 rounded-full transition-all ${active === index
                                ? "bg-gradient-to-r from-[#F462F3] to-[#7B50FE]"
                                : "bg-[#4F4F4F]"
                                }`}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}