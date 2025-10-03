"use client";

import React, { useState, useEffect } from "react";

const services = [
    {
        title: "Online Order Management",
        video: "/images/heroSection.mp4",
        points: [
            "Centralize UberEats, Grubhub & more",
            "Track orders, sales & customer insights",
        ],
    },
    {
        title: "Smart Inventory Tracking",
        video: "/images/heroSection.mp4",
        points: ["Monitor stock in real-time", "Predict shortages with AI alerts"],
    },
    {
        title: "Customer Loyalty Program",
        video: "/images/heroSection.mp4",
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
            const desktop = window.innerWidth >= 1024;
            setIsDesktop(desktop);
            if (!desktop) setActive(0);
        };
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const currentActive = isDesktop ? active : 0;

    return (
        <section className="relative overflow-hidden w-full py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-b from-transparent via-[#020D2D] to-transparent lg:bg-none lg:bg-[#020D2D]">
            <div className="absolute lg:flex hidden w-88 h-60 top-0 pointer-events-none left-[calc(35%-1075px/2+600px)] bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 blur-[220px]" />

            <div className="absolute lg:flex hidden z-50 w-88 h-40 pointer-events-none left-20 bottom-100 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 blur-[220px]" />

            <div className="absolute top-0 opacity-40 md:hidden inset-0 flex items-center justify-center pointer-events-none">
                <div className="h-[20%] min-w-5xl rounded-full bg-[radial-gradient(circle_at_top,_#60A5FA_0%,_#A78BFA_35%,_transparent_70%)] blur-[200px]" />
            </div>

            <div className="absolute bottom-0 opacity-70 md:hidden inset-0 flex items-center justify-center pointer-events-none">
                <div className="h-[20%] min-w-5xl rounded-full bg-[radial-gradient(circle_at_bottom,_#064E3B_0%,_transparent_75%)] blur-[70px]" />
            </div>

            <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-3xl lg:text-[2.2rem] tracking-wide text-white mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4 relative z-10">
                Our Services
            </h1>

            <div className="relative flex justify-center px-4 sm:px-6 lg:px-8 z-10">
                <div
                    className={`flex transition-transform duration-500 ease-in-out ${isDesktop
                            ? "flex-row gap-10 w-full max-w-[650px]"
                            : "flex-col gap-6 sm:gap-8 md:gap-10 w-full max-w-[600px]"
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
                                className={`w-full max-w-[650px] border border-[#333] rounded-xl lg:rounded-[20px] overflow-hidden bg-black/40 backdrop-blur-[20px] transition-all duration-500 flex flex-col ${isDesktop
                                        ? active === index
                                            ? "opacity-100 scale-100"
                                            : "opacity-50 scale-95"
                                        : "opacity-100 scale-100"
                                    }`}
                            >
                                <div className="w-full h-[180px] sm:h-[220px] md:h-[280px] lg:h-[350px] overflow-hidden flex-shrink-0">
                                    <video
                                        src={service.video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div
                                    className="w-full h-1 lg:h-[8px] flex-shrink-0"
                                    style={{
                                        background:
                                            "linear-gradient(95.49deg, #F462F3 52.87%, #7B50FE 106.28%)",
                                    }}
                                />

                                <div className="px-4 sm:px-5 md:px-6 lg:px-6 py-4 sm:py-5 md:py-6 lg:py-6 flex flex-col flex-grow">
                                    <h2 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-[30px] text-[#F2F2F2] mb-3 md:mb-4">
                                        {service.title}
                                    </h2>
                                    <ul className="space-y-1.5 md:space-y-2 lg:space-y-2 list-disc list-inside mb-auto">
                                        {service.points.map((p, i) => (
                                            <li
                                                key={i}
                                                className="text-xs sm:text-sm md:text-base lg:text-base text-[#BDBDBD]"
                                            >
                                                {p}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className={`flex gap-3 mt-4 ${isDesktop ? 'justify-end' : 'justify-start'}`}>
                                        <button
                                            className="px-4 h-8 sm:h-9 md:px-6 md:h-10 lg:px-6 lg:h-10 rounded-full font-semibold text-xs md:text-sm lg:text-sm text-white hover:opacity-90 transition-opacity"
                                            style={{
                                                background:
                                                    "linear-gradient(95.49deg, #F462F3 52.87%, #7B50FE 106.28%)",
                                            }}
                                        >
                                            Book a Demo
                                        </button>

                                        {!isDesktop && (
                                            <button className="px-4 h-8 sm:h-9 md:h-10 rounded-full font-semibold text-xs md:text-sm text-white border border-purple-400 hover:opacity-90 transition-opacity">
                                                Learn More
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {isDesktop && (
                <div className="my-10 lg:my-14 flex justify-center gap-3 relative z-10">
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