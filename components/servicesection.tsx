"use client";

import React, { useState } from "react";
import Image from "next/image";

const services = [
    {
        title: "Online Order Management",
        img: "/images/heroSection.png",
        points: ["Centralize UberEats, Grubhub & more", "Track orders, sales & customer insights"],
    },
    {
        title: "Smart Inventory Tracking",
        img: "/images/heroSection.png",
        points: ["Monitor stock in real-time", "Predict shortages with AI alerts"],
    },
    {
        title: "Customer Loyalty Program",
        img: "/images/heroSection.png",
        points: ["Reward repeat buyers automatically", "Boost retention & engagement"],
    },
];

export default function ServicesSection() {
    const [active, setActive] = useState(1);

    return (
        <section className="relative space-y-8 w-full py-16 bg-[#020D2D] overflow-hidden">
            {/* Shared Radial Gradient Overlay */}
            <div
                className="absolute inset-0 pointer-events-none opacity-25"
                style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(41,92,250,0.18) 5%, rgba(2,13,45,0.5) 70%, #020D2D 100%)',
                }}
            />

            {/* Glow Effects */}
            <div
                className="absolute w-[1075px] h-[914px] opacity-25 pointer-events-none"
                style={{
                    left: 'calc(50% - 1075px/2 + 100px)',
                    top: '-100px',
                    background: '#F462F3',
                    filter: 'blur(300px)',
                }}
            />
            <div
                className="absolute w-[1075px] h-[914px] opacity-25 pointer-events-none"
                style={{
                    left: 'calc(50% - 1075px/2 + 600px)',
                    top: '200px',
                    background: '#7C50FD',
                    filter: 'blur(300px)',
                }}
            />
            <div
                className="absolute w-[1075px] h-[914px] opacity-15 pointer-events-none"
                style={{
                    left: 'calc(50% - 1075px/2 - 400px)',
                    top: '300px',
                    background: '#50FDDA',
                    filter: 'blur(300px)',
                }}
            />

            {/* Content (unchanged) */}
            <h1 className="text-center font-bold text-[2.2rem] tracking-wide text-white mb-12 px-4">
                Our Services
            </h1>
            <div className="relative flex justify-center px-4 sm:px-6 lg:px-8">
                <div
                    className="flex transition-transform duration-500 ease-in-out w-full max-w-[750px]"
                    style={{ transform: `translateX(-${active * 100}%)` }}
                >
                    {services.map((service, index) => (
                        <div key={index} className="min-w-full flex justify-center">
                            <div className={`w-full max-w-[650px] h-[580px] border border-[#333] rounded-[20px] overflow-hidden bg-black/40 backdrop-blur-[20px] transition-all duration-500 ${active === index ? "opacity-100 scale-100" : "opacity-50 scale-95"
                                }`}>
                                <div className="w-full h-[400px] overflow-hidden">
                                    <Image
                                        src={service.img}
                                        alt={service.title}
                                        width={640}
                                        height={300}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div
                                    className="w-full h-[8px]"
                                    style={{
                                        background: "linear-gradient(95.49deg, #F462F3 52.87%, #7B50FE 106.28%)",
                                    }}
                                />
                                <div className="px-6 py-6">
                                    <h2 className="font-semibold text-[24px] md:text-[30px] text-[#F2F2F2] mb-4">
                                        {service.title}
                                    </h2>
                                    <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                                        <ul className="space-y-2">
                                            {service.points.map((p, i) => (
                                                <li key={i} className="text-[14px] md:text-[15px] text-[#BDBDBD]">
                                                    {p}
                                                </li>
                                            ))}
                                        </ul>
                                        <button
                                            className="w-[122px] h-[35px] rounded-full font-semibold text-[14px] text-white hover:opacity-90 transition-opacity"
                                            style={{
                                                background: "linear-gradient(95.49deg, #F462F3 52.87%, #7B50FE 106.28%)",
                                            }}
                                        >
                                            Book a Demo
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="my-14 flex justify-center gap-3">
                {services.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActive(index)}
                        className={`w-3 h-3 rounded-full transition-all ${active === index ? "bg-gradient-to-r from-[#F462F3] to-[#7B50FE]" : "bg-[#4F4F4F]"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}