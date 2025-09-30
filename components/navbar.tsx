import React from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="navbar fixed flex px-10 py-4 justify-between items-center top-0 left-0 w-full bg-transparent z-100">
            {/* Glow Effects */}
            {/* <div
                className="absolute w-[1075px] h-[914px] opacity-5 pointer-events-none"
                style={{
                    left: 'calc(50% - 1075px/2 - 200px)',
                    top: '-200px',
                    background: '#295CFA',
                    filter: 'blur(300px)',
                }}
            /> */}
            <div
                className="absolute w-[1075px] h-[914px] opacity-15 pointer-events-none"
                style={{
                    left: 'calc(50% - 1075px/2 + 300px)',
                    top: '-100px',
                    background: '#F462F3',
                    filter: 'blur(300px)',
                }}
            />

            {/* Content (unchanged) */}
            <div>LOGO</div>
            <nav className="flex flex-row gap-16 items-center justify-center">
                <div className="flex gap-16 items-center text-white text-sm font-semibold tracking-wider">
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <Link href="/">Services</Link>
                        <ChevronDown
                            size={18}
                            className="transition-transform duration-300 group-hover:rotate-180"
                            style={{ strokeWidth: 2 }}
                        />
                    </div>
                    <Link href="/">Pricing</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
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
        </header>
    );
}