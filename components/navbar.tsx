'use client'
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [scrollDir, setScrollDir] = useState<'up' | 'down'>('up');
    const lastScrollY = useRef(0);

    const toggleServices = () => setIsServicesOpen(!isServicesOpen);

    // Scroll detection
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                setScrollDir('down');
            } else if (currentScrollY < lastScrollY.current) {
                setScrollDir('up');
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full bg-transparent z-[100] transition-transform duration-300 ${scrollDir === 'down' ? '-translate-y-full' : 'translate-y-0'
                }`}
        >
            <div
                className="absolute w-full lg:w-[1075px] h-[914px] top-[-100px] left-0 lg:left-[calc(50%_-_537.5px_+_300px)] opacity-15 pointer-events-none"
                style={{
                    background: '#F462F3',
                    filter: 'blur(300px)',
                }}
            />

            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between px-4 py-4 relative z-10 h-[70px]">
                {/* Left: Menu + Logo */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white hover:opacity-80 transition-opacity"
                        aria-label="Toggle menu"
                    >
                        <Menu size={22} />
                    </button>
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/images/logo.png"
                            alt="Logo"
                            width={120}
                            height={40}
                            priority
                            className="h-auto w-auto"
                        />
                    </Link>
                </div>

                {/* Right: Book a Demo */}
                <button
                    className="rounded-full px-4 py-1.5 tracking-wide text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    style={{
                        background:
                            'linear-gradient(95.49deg, #F462F3 52.87%, #7B50FE 106.28%)',
                    }}
                >
                    Book a Demo
                </button>
            </div>


            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[99]"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div
                    className="md:hidden w-full top-0 absolute bg-[#1b2542] py-6 px-4 z-[100]"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex flex-col h-full">
                        <div className="flex justify-between items-center mb-6">
                            <Link href="/" className="flex items-center">
                                <Image
                                    src="/images/logo.png"
                                    alt="Logo"
                                    width={120}
                                    height={40}
                                    priority
                                    className="h-auto w-auto"
                                />
                            </Link>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="text-white p-2 hover:opacity-80 transition-opacity"
                                aria-label="Close menu"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Mobile Nav Links */}
                        <nav className="flex flex-col gap-4 text-white text-sm font-semibold tracking-wider flex-1">
                            <div className="relative">
                                <button
                                    onClick={toggleServices}
                                    className="flex items-center gap-2 w-full text-left text-white font-semibold text-sm px-3 rounded-md hover:bg-[#2b3655] transition"
                                >
                                    <span>Services</span>
                                    <ChevronDown
                                        size={18}
                                        className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''
                                            }`}
                                        style={{ strokeWidth: 2 }}
                                    />
                                </button>

                                {isServicesOpen && (
                                    <div className="flex flex-col mt-2 space-y-1.5 bg-[#1b2542] border border-white/20 rounded-2xl shadow-xl p-2">
                                        <Link
                                            href="/online-order-management"
                                            className="block px-4 py-2 text-white rounded-lg hover:bg-[#2b3655] transition"
                                        >
                                            Online Order Management
                                        </Link>
                                        <Link
                                            href="/video-transaction-analytics"
                                            className="block px-4 py-2 text-white rounded-lg hover:bg-[#2b3655] transition"
                                        >
                                            Video + Transaction Analytics
                                        </Link>
                                        <Link
                                            href="/aibased-invoice-processing"
                                            className="block px-4 py-2 text-white rounded-lg hover:bg-[#2b3655] transition"
                                        >
                                            AI-Based Invoice Processing
                                        </Link>
                                        <Link
                                            href="/surveillance-monitoring"
                                            className="block px-4 py-2 text-white rounded-lg hover:bg-[#2b3655] transition"
                                        >
                                            Surveillance Monitoring
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <Link href="/pricing" className="hover:opacity-80 px-3 transition-opacity">
                                Pricing
                            </Link>
                            <Link href="/about-us" className="hover:opacity-80 px-3 transition-opacity">
                                About
                            </Link>
                            <Link href="/" className="hover:opacity-80 px-3 transition-opacity">
                                Contact
                            </Link>
                        </nav>

                        <button
                            className="mt-6 w-full rounded-full py-2.5 tracking-wide text-sm font-semibold text-white transition-opacity hover:opacity-90"
                            style={{
                                background:
                                    'linear-gradient(95.49deg, #F462F3 52.87%, #7B50FE 106.28%)',
                            }}
                        >
                            Book a Demo
                        </button>
                    </div>
                </div>
            )}

            {/* Desktop Header */}
            <div className="hidden md:flex items-center justify-between px-12 py-4 relative z-10">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/images/logo.png"
                        alt="Logo"
                        width={160}
                        height={45}
                        priority
                        className="scale-[1.05]"
                    />
                </Link>
                <nav className="flex gap-16 items-center relative">
                    <div className="flex gap-16 items-center text-white text-sm font-semibold tracking-wider">
                        <div className="relative group">
                            <button className="flex items-center gap-2 cursor-pointer text-white font-semibold text-sm px-3 py-2 rounded-md hover:bg-[#2b3655] transition">
                                <span>Services</span>
                                <ChevronDown
                                    size={18}
                                    className="transition-transform duration-300 group-hover:rotate-180"
                                    style={{ strokeWidth: 2 }}
                                />
                            </button>

                            <div className="absolute top-full py-3 px-2 left-0 mt-2 w-76 bg-[#1b2542] border border-white/20 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible space-y-1.5 transition-all duration-300 z-20">
                                <Link
                                    href="/online-order-management"
                                    className="block px-4 py-2 text-white rounded-lg hover:bg-[#2b3655] transition"
                                >
                                    Online Order Management
                                </Link>
                                <Link
                                    href="/video-transaction-analytics"
                                    className="block px-4 py-2 text-white rounded-lg hover:bg-[#2b3655] transition"
                                >
                                    Video + Transaction Analytics
                                </Link>
                                <Link
                                    href="/aibased-invoice-processing"
                                    className="block px-4 py-2 text-white rounded-lg hover:bg-[#2b3655] transition"
                                >
                                    AI-Based Invoice Processing
                                </Link>
                                <Link
                                    href="/surveillance-monitoring"
                                    className="block px-4 py-2 text-white rounded-lg hover:bg-[#2b3655] transition"
                                >
                                    Surveillance Monitoring
                                </Link>
                            </div>
                        </div>

                        <Link href="/pricing" className="hover:opacity-80 transition-opacity">
                            Pricing
                        </Link>
                        <Link href="/about-us" className="hover:opacity-80 transition-opacity">
                            About
                        </Link>
                        <Link href="/" className="hover:opacity-80 transition-opacity">
                            Contact
                        </Link>
                    </div>

                    <button
                        className="rounded-full px-5 py-2.5 tracking-wide text-sm font-semibold text-white transition-opacity hover:opacity-90"
                        style={{
                            background:
                                'linear-gradient(95.49deg, #F462F3 52.87%, #7B50FE 106.28%)',
                        }}
                    >
                        Book a Demo
                    </button>
                </nav>
            </div>
        </header>
    );
}
