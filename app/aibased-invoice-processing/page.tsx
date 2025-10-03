'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Plus, Minus } from 'lucide-react';

const HeroAndHowItWorks = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [activeBenefitIndex, setActiveBenefitIndex] = useState(0);
    const [currentFaqImage, setCurrentFaqImage] = useState("/images/preFooter.png");

    const faqs = [
        { question: "What is your service?", answer: "We provide comprehensive solutions tailored to your needs." },
        { question: "How does pricing work?", answer: "Our pricing is flexible and based on your specific requirements." },
        { question: "Is there a free trial?", answer: "Yes, we offer a 14-day free trial with full access to all features." },
        { question: "How do I get started?", answer: "Simply sign up and follow our onboarding process to get started in minutes." },
        { question: "What support do you offer?", answer: "We provide 24/7 customer support via chat, email, and phone." }
    ];

    const faqImages = [
        "/images/faqImage1.png",
        "/images/faqImage2.png",
        "/images/faqImage3.png",
        "/images/faqImage4.png",
        "/images/faqImage5.png"
    ];

    useEffect(() => {
        if (openIndex !== null) {
            setCurrentFaqImage(faqImages[openIndex]);
        } else {
            setCurrentFaqImage("/images/preFooter.png");
        }
    }, [openIndex]);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const benefits = [
        {
            title: "Save time",
            description: "No more bouncing between tablets and apps.",
            image: "/images/benefitIcon1.png",
        },
        {
            title: "Increase accuracy",
            description: "Fewer missed, duplicated, or mispriced items.",
            image: "/images/benefitIcon2.png",
        },
        {
            title: "Grow profits",
            description: "Optimize menus and pricing with real-time insights.",
            image: "/images/benefitIcon3.png",
        },
        {
            title: "Simplify reporting",
            description: "Faster reconciliation with fewer errors.",
            image: "/images/benefitIcon4.png",
        },
        {
            title: "Customer satisfaction",
            description: "Faster service and fewer mistakes.",
            image: "/images/benefitIcon5.png",
        }
    ];

    const industries = [
        {
            title: "Liquor Stores",
            description: "Manage compliance-friendly alcohol delivery.",
            image: "/images/industrythatbenefit1.png",
        },
        {
            title: "Convenience Stores",
            description: "Handle snacks, essentials, and everyday orders with ease.",
            image: "/images/industrythatbenefit2.png",
        },
        {
            title: "Gas Stations",
            description: "Capture extra revenue by selling food, drinks, and convenience items online.",
            image: "/images/industrythatbenefit3.png",
        },
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
            <section className="relative flex flex-col justify-end w-full min-h-screen bg-[#010B29] overflow-hidden">
                <div className="lg:hidden rounded-2xl my-4 mx-auto relative w-[90%] aspect-square">
                    <Image
                        src="/images/onlineOrderHero.png"
                        alt="Online Orders Background"
                        fill
                        priority
                        className="object-cover rounded-2xl object-right"
                    />
                </div>

                <div className="absolute inset-0 z-0 hidden lg:block">
                    <Image
                        src="/images/onlineOrderHero.png"
                        alt="Online Orders Background"
                        fill
                        priority
                        className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(1,11,41,0.9)_80%,#010B29_100%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,#010314_40.24%,rgba(1,3,20,0)_100%),radial-gradient(85.05%_65.08%_at_50%_50%,#7B50FE_37.41%,#F462F3_69.27%,#FFFFFF_100%)] opacity-40 blur-[160px]" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#020D2D] z-[5] hidden lg:block" />

                <div className="relative z-10 container mx-auto px-6 md:px-18 h-full lg:flex lg:flex-col lg:justify-end">
                    <div className="flex flex-col gap-6 lg:gap-8 items-start lg:pt-20 max-w-7xl">
                        <h1 className="font-extrabold text-3xl md:text-5xl lg:text-6xl leading-[1.5] text-white max-w-4xl">
                            Centralize and Simplify All Your Online Orders
                        </h1>
                        <p className="text-white text-sm lg:text-base max-w-3xl">
                            Manage UberEats, Grubhub, and DoorDash in one easy dashboard — built for <br className="hidden lg:block" />
                            liquor stores, convenience stores, and gas stations.
                        </p>
                        <button className="w-full md:w-auto rounded-full px-6 lg:px-4 py-3 lg:py-2 mb-8 lg:mt-6 tracking-wide text-sm font-semibold text-white transition-opacity hover:opacity-90 bg-gradient-to-r from-[#F462F3] via-[#F462F3] to-[#7B50FE]">
                            Book a Demo
                        </button>
                    </div>
                </div>
            </section>

            <section className="relative w-full py-12 md:py-20 lg:py-30 bg-[#020D2D] overflow-hidden">
                <div className="relative z-10 container mx-auto px-6 md:px-12">
                    <h2 className="text-3xl md:text-[2.4rem] py-6 md:py-10 font-extrabold text-white mb-6 md:mb-12 text-center">
                        How it Works
                    </h2>
                    <div className="flex justify-center px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl w-full">
                            <div className="w-full aspect-square max-w-md mx-auto lg:max-w-none lg:hidden">
                                <Image
                                    src={currentFaqImage}
                                    alt="How it works illustration"
                                    width={400}
                                    height={300}
                                    className="object-cover w-full h-full border border-gray-600 rounded-3xl"
                                />
                            </div>
                            <div className="rounded-2xl p-4 md:p-8 flex flex-col justify-center lg:aspect-square">
                                {faqs.map((faq, index) => (
                                    <div
                                        key={index}
                                        className="border-b w-full lg:w-[80%] border-gray-700 last:border-none py-4 md:py-6"
                                    >
                                        <button
                                            onClick={() => toggleFAQ(index)}
                                            className="flex items-center justify-between w-full text-left gap-4"
                                        >
                                            <span className="text-white font-semibold text-base md:text-lg">
                                                {faq.question}
                                            </span>
                                            <div className="flex-shrink-0">
                                                {openIndex === index ? (
                                                    <Minus size={22} className="text-purple-400" strokeWidth={3} />
                                                ) : (
                                                    <Plus size={22} className="text-purple-400" strokeWidth={3} />
                                                )}
                                            </div>
                                        </button>
                                        {openIndex === index && (
                                            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="aspect-square hidden lg:block">
                                <Image
                                    src={currentFaqImage}
                                    alt="How it works illustration"
                                    width={400}
                                    height={300}
                                    className="object-cover w-full h-full border border-gray-600 rounded-3xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative w-full py-12 md:py-20 lg:py-30 bg-[#020D2D] overflow-hidden">
                <div className="w-full z-50">
                    <h1 className="text-center py-6 md:py-10 font-bold text-2xl md:text-3xl lg:text-[2.2rem] tracking-wide text-white mb-4 md:mb-8 px-4">
                        Benefits
                    </h1>
                    <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="hidden lg:grid grid-cols-5 gap-6 max-w-7xl mx-auto">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="relative bg-gradient-to-br from-black/20 via-[#14b8a62e]/80 to-[#14b8a62e]/50 backdrop-blur-[20px] border border-[#434343] rounded-[24px] bg-black/30 p-6 flex flex-col items-start justify-center gap-3"
                                >
                                    <Image
                                        src={benefit.image}
                                        alt={benefit.title}
                                        width={50}
                                        height={50}
                                        className="object-contain mb-3"
                                    />
                                    <h2 className="font-semibold text-white mb-2 text-center leading-tight">
                                        {benefit.title}
                                    </h2>
                                    <p className="text-sm">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="lg:hidden relative flex justify-center overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-in-out w-full"
                                style={{ transform: `translateX(-${activeBenefitIndex * 100}%)` }}
                            >
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="min-w-full mb-6 z-50 flex justify-center px-4">
                                        <div className="relative bg-gradient-to-br from-black/20 via-[#14b8a62e]/80 to-[#14b8a62e]/50 backdrop-blur-[20px] border border-[#434343] rounded-[24px] bg-black/30 p-6 w-full max-w-[320px] flex flex-col items-start justify-center gap-3">
                                            <Image
                                                src={benefit.image}
                                                alt={benefit.title}
                                                width={50}
                                                height={50}
                                                className="object-contain mb-3"
                                            />
                                            <h2 className="font-semibold text-white mb-2 leading-tight">
                                                {benefit.title}
                                            </h2>
                                            <p className="text-sm">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:hidden my-6 flex justify-center gap-2.5">
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

            <section className="relative w-full py-12 md:py-20 lg:py-30 bg-[#020D2D] overflow-hidden">
                <div className="w-full z-50">
                    <h1 className="text-center py-6 md:py-10 font-bold text-2xl md:text-3xl lg:text-[2.2rem] tracking-wide text-white mb-4 md:mb-8 px-4">
                        Industries That Benefit
                    </h1>
                    <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                            {industries.map((industry, index) => (
                                <div
                                    key={index}
                                    className="relative bg-gradient-to-br from-transparent via-transparent to-blue-950 border border-[#434343] rounded-[24px] flex flex-col aspect-square"
                                >
                                    <div className="flex-[2] rounded-t-3xl overflow-hidden">
                                        <Image
                                            src={industry.image}
                                            alt={industry.title}
                                            width={400}
                                            height={400}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div className="flex-[1] flex flex-col items-start justify-center p-6 gap-3">
                                        <h2 className="font-semibold text-white text-lg leading-tight">
                                            {industry.title}
                                        </h2>
                                        <p className="text-sm text-gray-300 line-clamp-2">
                                            {industry.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative w-full py-12 md:py-20 lg:py-30 bg-[#020D2D] overflow-hidden">
                <div className="w-full z-50">
                    <h1 className="text-center py-4 font-bold text-2xl md:text-3xl lg:text-[2.2rem] tracking-wide text-white mb-4 md:mb-8 px-4">
                        Integration Strip
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
};

export default HeroAndHowItWorks;