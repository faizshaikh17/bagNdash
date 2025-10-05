import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full relative text-sm  bg-gradient-to-b from-[#0F5F4F]/40 via-black/50 to-[#0F5F4F]/40 
  md:bg-none md:bg-[#020D2D]">
            <div
                className="absolute  lg:flex hidden w-[50%] h-80 opacity-60  pointer-events-none 
             right-0 bottom-80 
             bg-gradient-to-r from-green-400 via-teal-500 to-green-600 blur-[220px]"
            />
            <div className="relative max-w-[1200px] px-4 pt-20  md:px-20 overflow-clip md:overflow-visible mb-20 mx-auto w-full border border-[#434343] rounded-3xl md:rounded-[40px] flex flex-col md:flex-row items-center justify-start gap-8 md:gap-16 py-8">
                {/* Background Gradient Blur */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl md:rounded-[40px]">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ED61F3] via-[#ED61F3] to-[#7C3AED] blur-[80px]" />
                </div>

                {/* Image Column */}
                <div className="relative w-full md:scale-[1.1] md:w-[280px] h-[300px] md:h-[350px] flex-shrink-0 flex justify-center order-2 md:order-1">
                    <Image
                        src="/images/mobile.png"
                        alt="App Preview"
                        width={244}
                        height={527}
                        className="absolute top-18 md:-top-22 left-1/2 md:left-[19px] -translate-x-1/2 md:translate-x-0 w-[200px] md:w-full h-[431px] md:h-[450px] "
                        unoptimized
                    />
                    <Image
                        src="/images/preFooter.png"
                        alt="iPhone Background"
                        width={280}
                        height={560}
                        className="absolute sm:-top-12 top-24 left-1/2 ml-4 -translate-x-1/2 border-4 w-[12rem] md:w-[12rem] h-[14rem] md:h-[16rem] border-orange-400 rounded-2xl object-cover"
                    />
                    {/* <Image
                        src="/images/iphoneframe.png"
                        alt="iPhone Frame"
                        width={280}
                        height={560}
                        className="absolute top-14 md:-top-30 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 w-[230px] md:w-[280px] h-[470px] md:h-[560px] object-contain"
                    /> */}
                    <Image
                        src="/images/logo.png"
                        alt="iPhone Frame"
                        width={280}
                        height={560}
                        className="absolute scale-[0.6] ml-4 top-78 md:top-6 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 w-[230px] md:w-[280px] h-[470px] md:h-[560px] object-contain"
                    />
                </div>

                {/* Text Column */}
                <div className="relative flex flex-col z-50 items-start justify-start text-left max-w-[500px] w-full md:mt-0 order-1 md:order-2">
                    <h2 className="font-bold text-2xl md:text-[42px] leading-[1.4] text-white">
                        Ready to secure your business and simplify operations?
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 w-full">
                        <button className="px-6 py-2 rounded-md bg-[#333333] text-white font-semibold flex-1 sm:flex-none">
                            Book a Demo
                        </button>
                        <button className="px-6 py-2 rounded-md border border-white text-white font-semibold flex-1 sm:flex-none">
                            Contact Sales
                        </button>
                    </div>
                </div>

                <Image
                    src="/images/logoN.png"
                    alt="Decoration 5"
                    width={180}
                    height={80}
                    className="-bottom-4 right-3 mb-4 absolute scale-[0.6] md:scale-[1] object-contain"
                />
            </div>

            <div className="border-t border-[#434343]" />

            <div className="w-full px-4  md:px-20 ">
                <div className="max-w-[1600px] mx-auto px-4 md:px-12 py-16 flex flex-col gap-12">
                    <div className="grid grid-cols-2 gap-8 md:flex md:flex-wrap md:justify-between md:gap-12">
                        <div className="col-span-2 md:max-w-[300px] flex flex-col items-start gap-4">
                            <Image
                                src="/images/logo.png"
                                alt="Logo"
                                width={100}
                                height={40}
                                priority
                                className="scale-[1.5] origin-left"
                            />

                            <p className="text-white text-xs">
                                📞 913-208-3535  📍 Kansas City, MO
                            </p>

                            <div className="flex justify-start gap-3">
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



                        <div className="flex flex-col gap-6">
                            <h3 className="text-white font-poppins font-semibold">Our Services</h3>
                            <div className="flex flex-col gap-4">
                                <Link href="/online-order-management" className="text-[#E0E0E0] hover:text-white">
                                    Online Order Management
                                </Link>
                                <Link href="/video-transaction-analytics" className="text-[#E0E0E0] hover:text-white">
                                    Video + Transaction Analytics
                                </Link>
                                <Link href="/aibased-invoice-processing" className="text-[#E0E0E0] hover:text-white">
                                    AI-Based Invoice Processing
                                </Link>
                                <Link href="/surveillance-monitoring" className="text-[#E0E0E0] hover:text-white">
                                    Surveillance Monitoring
                                </Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <h3 className="text-white font-poppins font-semibold">Quick Links</h3>
                            <div className="flex flex-col gap-4">
                                <Link href="/about-us" className="text-[#E0E0E0] hover:text-white">About</Link>
                                <Link href="/pricing" className="text-[#E0E0E0] hover:text-white">Pricing</Link>
                                <Link href="/contact" className="text-[#E0E0E0] hover:text-white">Contact</Link>
                                <Link href="/video-transaction-analytics" className="text-[#E0E0E0] hover:text-white">Services</Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <h3 className="text-white font-poppins font-semibold">Important Information</h3>
                            <div className="flex flex-col gap-4">
                                <Link href="/terms-and-conditions" className="text-[#E0E0E0] hover:text-white">
                                    Terms and Conditions
                                </Link>
                                <Link href="/privacy-policy" className="text-[#E0E0E0] hover:text-white">
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
                                className="scale-[0.85]"
                            />
                            <Image
                                src="/images/googlePlay.svg"
                                alt="Get it on Google Play"
                                width={170}
                                height={51}
                                className="scale-[0.85]"
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
