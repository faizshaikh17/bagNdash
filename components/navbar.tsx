'use client'
import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const handleContactClick = () => {
    setIsContactOpen(true)
  }

  const closeContact = () => {
    setIsContactOpen(false)
  }

  const dropdownRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close menu on navigation
  const handleMobileNavClose = () => {
    setIsServicesOpen(false)
    setIsMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] md:backdrop-blur-xs transition-colors duration-300 ${pathname === '/' ? 'md:bg-black/30' : 'bg-transparent'
          }`}
      >
        {/* Background Glow */}
        <div
          className="absolute w-full md:w-[1075px] h-[600px] md:h-[914px] top-[-100px] left-0 md:left-[calc(50%_-_537.5px_+_300px)] opacity-15 pointer-events-none"
          style={{ background: '#F462F3', filter: 'blur(300px)' }}
        />

        {/* Mobile Navbar */}
        <div className="flex md:hidden items-center justify-between px-4 py-4 relative z-10 h-[70px]">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:opacity-80 transition-opacity"
              aria-label="Toggle menu"
            >
              <Menu size={22} />
            </button>
            <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={120}
                height={40}
                priority
                className="h-auto scale-[1.15] w-auto"
              />
            </Link>
          </div>
          <button
            className="rounded-full px-4 py-1.5 tracking-wide text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{
              background: 'linear-gradient(95.49deg, #F462F3 52.87%, #7B50FE 106.28%)',
            }}
            onClick={() => {
              handleContactClick()
              setIsMenuOpen(false)
            }}
          >
            Book a Demo
          </button>
        </div>

        {/* Mobile Menu (Slide Animation) */}
        <div
          className={`fixed inset-0 z-[99] md:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
            }`}
        >
          {/* Dark Overlay */}
          <div
            className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'
              }`}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Sliding Menu Panel */}
          <div
            className={`absolute inset-x-0 top-0 bg-[#1b2542] py-6 px-4 z-[100] max-h-screen overflow-y-auto transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'
              }`}
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center mb-6">
                <Link href="/" className="flex items-center" onClick={handleMobileNavClose}>
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

              <nav className="flex flex-col gap-4 text-white text-sm font-semibold tracking-wider flex-1 pointer-events-auto">
                <div className="relative">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center gap-2 w-full text-left px-3 py-2 rounded-md hover:bg-[#2b3655] transition pointer-events-auto"
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
                    <div className="flex flex-col mt-2 space-y-1.5 bg-[#1b2542] border border-white/20 rounded-2xl shadow-xl p-2 pointer-events-auto">
                      <Link
                        href="/online-order-management"
                        className="block text-left px-4 py-2 rounded-lg hover:bg-[#2b3655] transition pointer-events-auto"
                        onClick={handleMobileNavClose}
                      >
                        Online Order Management
                      </Link>
                      <Link
                        href="/video-transaction-analytics"
                        className="block text-left px-4 py-2 rounded-lg hover:bg-[#2b3655] transition pointer-events-auto"
                        onClick={handleMobileNavClose}
                      >
                        Video + Transaction Analytics
                      </Link>
                      <Link
                        href="/aibased-invoice-processing"
                        className="block text-left px-4 py-2 rounded-lg hover:bg-[#2b3655] transition pointer-events-auto"
                        onClick={handleMobileNavClose}
                      >
                        AI-Based Invoice Processing
                      </Link>
                      <Link
                        href="/surveillance-monitoring"
                        className="block text-left px-4 py-2 rounded-lg hover:bg-[#2b3655] transition pointer-events-auto"
                        onClick={handleMobileNavClose}
                      >
                        Surveillance Monitoring
                      </Link>
                    </div>
                  )}
                </div>
                <Link
                  href="/pricing"
                  className="hover:opacity-80 px-3 py-2 rounded-md transition-opacity text-left pointer-events-auto"
                  onClick={handleMobileNavClose}
                >
                  Pricing
                </Link>
                <Link
                  href="/about-us"
                  className="hover:opacity-80 px-3 py-2 rounded-md transition-opacity text-left pointer-events-auto"
                  onClick={handleMobileNavClose}
                >
                  About
                </Link>
                <button
                  onClick={() => {
                    handleContactClick()
                    setIsMenuOpen(false)
                  }}
                  className="hover:opacity-80 px-3 py-2 rounded-md transition-opacity text-left pointer-events-auto"
                >
                  Contact
                </button>
              </nav>

              <button
                className="mt-6 w-full rounded-full py-2.5 tracking-wide text-sm font-semibold text-white transition-opacity hover:opacity-90 pointer-events-auto"
                style={{
                  background: 'linear-gradient(95.49deg, #F462F3 52.87%, #7B50FE 106.28%)',
                }}
                onClick={() => {
                  handleContactClick()
                  setIsMenuOpen(false)
                }}
              >
                Book a Demo
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center justify-between px-6 lg:px-12 py-4 relative z-10">
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
          <nav className="flex gap-8 lg:gap-16 items-center relative">
            <div className="flex gap-6 lg:gap-10 items-center text-white text-sm font-semibold tracking-wider">
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center gap-2 cursor-pointer text-sm px-3 py-2"
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
                  <div
                    className="absolute top-full py-3 px-2 left-0 mt-2 w-72 bg-[#1b2542]
            border border-white/20 rounded-2xl shadow-xl space-y-1.5
            transition-all duration-300 z-20"
                  >
                    <Link
                      href="/online-order-management"
                      className="block px-4 py-2 rounded-lg hover:bg-[#2b3655] transition"
                    >
                      Online Order Management
                    </Link>
                    <Link
                      href="/video-transaction-analytics"
                      className="block px-4 py-2 rounded-lg hover:bg-[#2b3655] transition"
                    >
                      Video + Transaction Analytics
                    </Link>
                    <Link
                      href="/aibased-invoice-processing"
                      className="block px-4 py-2 rounded-lg hover:bg-[#2b3655] transition"
                    >
                      AI-Based Invoice Processing
                    </Link>
                    <Link
                      href="/surveillance-monitoring"
                      className="block px-4 py-2 rounded-lg hover:bg-[#2b3655] transition"
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
              <button
                onClick={handleContactClick}
                className="hover:opacity-80 px-3 transition-opacity text-sm font-semibold tracking-wider"
              >
                Contact
              </button>
            </div>
            <button
              className="rounded-full px-5 py-2.5 tracking-wide text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{
                background: 'linear-gradient(95.49deg, #F462F3 52.87%, #7B50FE 106.28%)',
              }}
              onClick={handleContactClick}
            >
              Book a Demo
            </button>
          </nav>
        </div>
      </header>

      {/* Contact Modal */}
      {isContactOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-[101]" onClick={closeContact} />
          <div className="fixed inset-0 flex items-center justify-center z-[102] pointer-events-none">
            <div className="bg-[#1b2542] border border-white/50 text-white rounded-2xl p-8 max-w-xl w-full shadow-2xl mx-4 pointer-events-auto">
              <div className="flex justify-between items-center mb-4 ">
                <h2 className="text-xl font-semibold">Contact Us</h2>
                <button
                  onClick={closeContact}
                  className="text-white/50 p-2 hover:opacity-80 transition-opacity"
                  aria-label="Close contact form"
                >
                  <X size={24} />
                </button>
              </div>

              <form className="space-y-8">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full py-2 text-sm bg-transparent text-white placeholder-white border-b border-white focus:outline-none focus:border-white/50 transition"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full py-2 text-sm bg-transparent text-white placeholder-white border-b border-white focus:outline-none focus:border-white/50 transition"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full py-2 text-sm bg-transparent text-white placeholder-white border-b border-white focus:outline-none focus:border-white/50 transition"
                />
                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full py-2 text-sm bg-transparent text-white placeholder-white border-b border-white focus:outline-none focus:border-white/50 transition"
                />
                <textarea
                  placeholder="Your message"
                  rows={4}
                  className="w-full py-2 text-sm bg-transparent text-white placeholder-white border-b border-white focus:outline-none focus:border-white/50 transition"
                ></textarea>
                <button
                  type="submit"
                  className="w-full rounded-full py-3 tracking-wide text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{
                    background: 'linear-gradient(95.49deg, #F462F3 52.87%, #7B50FE 106.28%)',
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  )
}