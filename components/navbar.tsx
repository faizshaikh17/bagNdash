'use client'
import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-transparent z-[100]">
            <div
                className="absolute w-full lg:w-[1075px] h-[914px] top-[-100px] left-0 lg:left-[calc(50%_-_537.5px_+_300px)] opacity-15 pointer-events-none"
                style={{
                    background: '#F462F3',
                    filter: 'blur(300px)',
                }}
            />
            
            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between px-4 py-4 relative z-10">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white p-2 hover:opacity-80 transition-opacity"
                        aria-label="Toggle menu"
                    >
                        <Menu size={24} />
                    </button>
                    <div className="text-white font-bold">LOGO</div>
                </div>
                
                <button
                    className="rounded-full px-4 lg:py-2 py-1.5 tracking-wide text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    style={{
                        background: 'linear-gradient(95.49deg, #F462F3 52.87%, #7B50FE 106.28%)',
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
                    
                >
                    <div className="flex flex-col h-full" onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-between items-center mb-6">
                            <div className="text-white font-bold">LOGO</div>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="text-white p-2 hover:opacity-80 transition-opacity"
                                aria-label="Close menu"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        <nav className="flex flex-col gap-6 text-white text-sm font-semibold tracking-wider flex-1">
                            <div className="flex items-center gap-2 group cursor-pointer">
                                <span>Services</span>
                                <ChevronDown
                                    size={18}
                                    className="transition-transform duration-300 group-hover:rotate-180"
                                    style={{ strokeWidth: 2 }}
                                />
                            </div>
                            <Link href="/" className="hover:opacity-80 transition-opacity">Pricing</Link>
                            <Link href="/" className="hover:opacity-80 transition-opacity">About</Link>
                            <Link href="/" className="hover:opacity-80 transition-opacity">Contact</Link>
                        </nav>
                        <button
                            className="mt-6 w-full rounded-full py-2.5 tracking-wide text-sm font-semibold text-white transition-opacity hover:opacity-90"
                            style={{
                                background: 'linear-gradient(95.49deg, #F462F3 52.87%, #7B50FE 106.28%)',
                            }}
                        >
                            Book a Demo
                        </button>
                    </div>
                </div>
            )}

            {/* Desktop Header */}
            <div className="hidden md:flex items-center justify-between px-10 py-4 relative z-10">
                <div className="text-white font-bold">LOGO</div>
                <nav className="flex gap-16 items-center">
                    <div className="flex gap-16 items-center text-white text-sm font-semibold tracking-wider">
                        <div className="flex items-center gap-2 group cursor-pointer">
                            <Link href="/">Services</Link>
                            <ChevronDown
                                size={18}
                                className="transition-transform duration-300 group-hover:rotate-180"
                                style={{ strokeWidth: 2 }}
                            />
                        </div>
                        <Link href="/" className="hover:opacity-80 transition-opacity">Pricing</Link>
                        <Link href="/" className="hover:opacity-80 transition-opacity">About</Link>
                        <Link href="/" className="hover:opacity-80 transition-opacity">Contact</Link>
                    </div>
                    <button
                        className="rounded-full px-5 py-2.5 tracking-wide text-sm font-semibold text-white transition-opacity hover:opacity-90"
                        style={{
                            background: 'linear-gradient(95.49deg, #F462F3 52.87%, #7B50FE 106.28%)',
                        }}
                    >
                        Book a Demo
                    </button>
                </nav>
            </div>
        </header>
    );
}