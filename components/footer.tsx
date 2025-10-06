'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer className="w-full relative overflow-x-clip text-sm pt-20 bg-gradient-to-b from-transparent via-black/50 to-[#0F5F4F]/40 md:bg-none md:bg-[#020D2D] flex flex-col items-center justify-center">
      <div
        className="absolute lg:flex hidden w-[50%] h-80 opacity-60 pointer-events-none 
             right-0 bottom-80 
             bg-gradient-to-r from-green-400 via-teal-500 to-green-600 blur-[220px]"
      />
      <div className="absolute md:hidden inset-0 opacity-55 flex items-start justify-center">
        <div className="h-[20rem] min-w-5xl rounded-full bg-[radial-gradient(circle_at_center,_#033326_0%,_#064E3B_45%,_transparent_80%)] blur-[80px]" />
      </div>
      {pathname !== '/pricing' && (<div className="relative max-w-[1200px] md:mx-auto px-4 pt-20 md:px-20 overflow-y-clip md:overflow-visible mb-20 w-[calc(100%-2rem)] md:w-full border border-[#434343] rounded-3xl md:rounded-[40px] flex flex-col md:flex-row items-center md:justify-start gap-8 md:gap-16 py-8">
        {/* Background Gradient Blur */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl md:rounded-[40px]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ED61F3] via-[#ED61F3] to-[#7C3AED] blur-[80px]" />
        </div>

        {/* Image Column - Conditionally rendered */}

        <div className="relative w-full md:scale-[1.1] md:w-[280px] h-[320px] md:h-[350px] flex-shrink-0 flex items-center justify-center order-2 md:order-1">
          <Image
            src="/images/mobile1.svg"
            alt="App Preview"
            width={244}
            height={527}
            className="absolute top-4 md:-top-22 left-1/2 md:left-[19px] -translate-x-1/2 md:translate-x-0 w-[200px] md:w-full h-[431px] md:h-[450px]"
            priority
          />
          <Image
            src="/images/preFooter.png"
            alt="iPhone Background"
            width={280}
            height={560}
            className="absolute top-24 md:-top-12 left-1/2 md:left-35 -translate-x-1/2 md:-translate-x-1/2 md:ml-5 border-4 w-[10rem] md:w-[12rem] h-[12rem] md:h-[14rem] border-orange-400 rounded-2xl object-cover"
          />
          <Image
            src="/images/logo.png"
            alt="iPhone Frame"
            width={280}
            height={560}
            className="absolute scale-[0.6] top-24 md:-top-10 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 md:ml-5 w-[230px] md:w-[280px] h-[470px] md:h-[560px] object-contain"
          />
        </div>


        {/* Text Column */}
        <div className="relative flex flex-col z-50 items-start justify-start text-left max-w-[500px] w-full order-1 md:order-2 px-4 md:px-0">
          <h2 className="font-bold text-2xl md:text-[42px] leading-[1.4] text-white mb-6">
            Ready to secure your business and simplify operations?
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
            <button className="px-6 py-3 rounded-md bg-[#333333] text-white font-semibold flex-1 sm:flex-none">
              Book a Demo
            </button>
            <button className="px-6 py-3 rounded-md border border-white text-white font-semibold flex-1 sm:flex-none">
              Contact Sales
            </button>
          </div>
        </div>

        <Image
          src="/images/logoN.png"
          alt="Decoration 5"
          width={180}
          height={80}
          className="-bottom-4 md:block hidden right-3 mb-4 absolute scale-[0.6] md:scale-[1] object-contain"
        />
      </div>)}

      <div className="w-full border-t border-[#434343]" />

      <div className="w-full px-4 md:px-20">
        <div className="max-w-[1600px] mx-auto px-4 md:px-12 py-16 flex flex-col gap-12">
          <div className="md:hidden flex flex-col gap-10">
            {/* Logo + Info */}
            <div className="flex flex-col items-start gap-4">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={100}
                height={40}
                priority
                className="scale-[1.5] origin-left mb-2"
              />

              <p className="text-white text-xs leading-relaxed">
                📞 913-208-3535<br />
                📍 Kansas City, MO
              </p>

              <div className="flex justify-start gap-3 mt-1">
                <Link href="https://twitter.com/bagndash" target="_blank">
                  <Image
                    src="/images/facebook.svg"
                    alt="Facebook"
                    width={24}
                    height={24}
                    unoptimized
                  />
                </Link>
                <Link href="https://linkedin.com/company/bagndash" target="_blank">
                  <Image
                    src="/images/linkedIn.svg"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    unoptimized
                  />
                </Link>
              </div>
            </div>

            {/* Services + Quick Links */}
            <div className="w-full flex justify-between gap-12">
              <div className="flex flex-col gap-5">
                <h3 className="text-white font-poppins font-semibold text-xs">Our Services</h3>
                <div className="flex flex-col gap-3">
                  <Link href="/online-order-management" className="text-[#E0E0E0] text-nowrap hover:text-white text-xs">
                    Online Order Management
                  </Link>
                  <Link href="/video-transaction-analytics" className="text-[#E0E0E0] text-nowrap hover:text-white text-xs">
                    Video + Transaction Analytics
                  </Link>
                  <Link href="/aibased-invoice-processing" className="text-[#E0E0E0] text-nowrap hover:text-white text-xs">
                    AI-Based Invoice Processing
                  </Link>
                  <Link href="/surveillance-monitoring" className="text-[#E0E0E0] text-nowrap hover:text-white text-xs">
                    Surveillance Monitoring
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <h3 className="text-white font-poppins font-semibold text-xs">Quick Links</h3>
                <div className="flex flex-col gap-3">
                  <Link href="/about-us" className="text-[#E0E0E0] hover:text-white text-xs">About</Link>
                  <Link href="/pricing" className="text-[#E0E0E0] hover:text-white text-xs">Pricing</Link>
                  <Link href="/contact" className="text-[#E0E0E0] hover:text-white text-xs">Contact</Link>
                  <Link href="/video-transaction-analytics" className="text-[#E0E0E0] hover:text-white text-xs">Services</Link>
                </div>
              </div>
            </div>

            {/* Important Info + App Store */}
            <div className="flex justify-between gap-12">
              <div className="flex flex-col gap-5">
                <h3 className="text-white font-poppins font-semibold text-xs">Important Information</h3>
                <div className="flex flex-col gap-3">
                  <Link href="/terms-and-conditions" className="text-[#E0E0E0] text-nowrap hover:text-white text-xs">
                    Terms and Conditions
                  </Link>
                  <Link href="/privacy-policy" className="text-[#E0E0E0] text-nowrap hover:text-white text-xs">
                    Privacy Policy
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Image
                  src="/images/appStore.svg"
                  alt="Download on the Apple Store"
                  width={170}
                  height={51}
                  className="scale-[0.85] origin-left"
                />
                <Image
                  src="/images/googlePlay.svg"
                  alt="Get it on Google Play"
                  width={170}
                  height={51}
                  className="scale-[0.85] origin-left"
                />
              </div>
            </div>
          </div>


          <div className="hidden md:flex md:flex-wrap md:justify-between md:gap-12">
            <div className="md:max-w-[300px] flex flex-col items-start gap-4">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={100}
                height={40}
                priority
                className="scale-[1.5] origin-left mb-2"
              />

              <p className="text-white text-xs leading-relaxed">
                📞 913-208-3535<br />
                📍 Kansas City, MO
              </p>

              <div className="flex justify-start gap-3 mt-1">
                <Link href="https://twitter.com/bagndash" target="_blank">
                  <Image
                    src="/images/facebook.svg"
                    alt="Facebook"
                    width={24}
                    height={24}
                    unoptimized
                  />
                </Link>
                <Link href="https://linkedin.com/company/bagndash" target="_blank">
                  <Image
                    src="/images/linkedIn.svg"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    unoptimized
                  />
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h3 className="text-white font-poppins font-semibold text-sm md:text-base">Our Services</h3>
              <div className="flex flex-col gap-3">
                <Link href="/online-order-management" className="text-[#E0E0E0] hover:text-white text-xs md:text-sm">
                  Online Order Management
                </Link>
                <Link href="/video-transaction-analytics" className="text-[#E0E0E0] hover:text-white text-xs md:text-sm">
                  Video + Transaction Analytics
                </Link>
                <Link href="/aibased-invoice-processing" className="text-[#E0E0E0] hover:text-white text-xs md:text-sm">
                  AI-Based Invoice Processing
                </Link>
                <Link href="/surveillance-monitoring" className="text-[#E0E0E0] hover:text-white text-xs md:text-sm">
                  Surveillance Monitoring
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h3 className="text-white font-poppins font-semibold text-sm md:text-base">Quick Links</h3>
              <div className="flex flex-col gap-3">
                <Link href="/about-us" className="text-[#E0E0E0] hover:text-white text-xs md:text-sm">About</Link>
                <Link href="/pricing" className="text-[#E0E0E0] hover:text-white text-xs md:text-sm">Pricing</Link>
                <Link href="/contact" className="text-[#E0E0E0] hover:text-white text-xs md:text-sm">Contact</Link>
                <Link href="/video-transaction-analytics" className="text-[#E0E0E0] hover:text-white text-xs md:text-sm">Services</Link>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h3 className="text-white font-poppins font-semibold text-sm md:text-base">Important Information</h3>
              <div className="flex flex-col gap-3">
                <Link href="/terms-and-conditions" className="text-[#E0E0E0] hover:text-white text-xs md:text-sm">
                  Terms and Conditions
                </Link>
                <Link href="/privacy-policy" className="text-[#E0E0E0] hover:text-white text-xs md:text-sm">
                  Privacy Policy
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Image
                src="/images/appStore.svg"
                alt="Download on the Apple Store"
                width={170}
                height={51}
                className="scale-[0.85] origin-left"
              />
              <Image
                src="/images/googlePlay.svg"
                alt="Get it on Google Play"
                width={170}
                height={51}
                className="scale-[0.85] origin-left"
              />
            </div>
          </div>

          <div className="text-center text-[#E0E0E0] text-xs font-poppins">
            © 2025 Banndash. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}