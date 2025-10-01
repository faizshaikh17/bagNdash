import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full text-sm px-4  md:px-20 bg-[#020D2D]">
            <div className="relative max-w-[1200px] mb-20 mx-auto w-full h-auto lg:min-h-[400px] min-h-[600px] border border-[#434343] rounded-[40px] flex flex-col md:flex-row items-cente overflow-clip justify-start gap-8 md:gap-16 px-4 md:px-12 py-8 md:py-0">
                <div className="absolute inset-0 overflow-hidden rounded-[40px]">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ED61F3] via-[#ED61F3] to-[#7C3AED] blur-[100px]" />
                </div>

                <div className="relative w-full md:w-[280px] h-auto md:h-[500px] flex-shrink-0 flex justify-center">
                    <Image
                        src="/images/iphoneBg1.png"
                        alt="App Preview"
                        width={244}
                        height={527}
                        className="absolute top-74 md:top-10 left-1/2 md:left-[19px] -translate-x-1/2 md:translate-x-0 w-[200px] md:w-[244px] h-[431px] md:h-[527px] object-cover rounded-[35px]"
                    />

                    <Image
                        src="/images/preFooter.png"
                        alt="iPhone Background"
                        width={280}
                        height={560}
                        className="absolute sm:top-26 top-80 left-1/2 md:left-5 -translate-x-1/2 md:translate-x-0 border-4 w-[12rem] md:w-[15rem] h-[14rem] md:h-[18rem] border-orange-400 rounded-2xl object-cover"
                    />

                    <Image
                        src="/images/iphoneframe.png"
                        alt="iPhone Frame"
                        width={280}
                        height={560}
                        className="absolute top-70 md:top-8 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 w-[230px] md:w-[280px] h-[470px] md:h-[560px] object-contain"
                    />
                </div>

                <div className="relative flex flex-col z-50 items-start justify-center text-left max-w-[500px] w-full">
                    <h2 className="font-bold text-3xl md:text-[42px] leading-[1.4] text-white text-left md:text-left">
                        Ready to secure your business and simplify operations?
                    </h2>

                    <div className="flex gap-6 mt-8 w-full justify-center md:justify-start">
                        <button className="px-6 h-[38px] rounded-md bg-[#333333] text-white font-semibold flex-1 md:flex-none">
                            Book a Demo
                        </button>
                        <button className="px-6 h-[38px] rounded-md border border-white text-white font-semibold flex-1 md:flex-none">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full border-t border-[#434343]">
                <div className="max-w-[1600px] mx-auto px-4 md:px-12 py-16 flex flex-col gap-12">
                    <div className="grid grid-cols-2 gap-8 md:flex md:flex-wrap md:justify-between md:gap-12">
                        <div className="col-span-2 md:max-w-[300px] flex flex-col gap-4">
                            <Image
                                src="/logo.png"
                                alt="Banndash Logo"
                                width={206}
                                height={38}
                                className="w-full max-w-[206px] h-auto object-contain"
                            />
                            <p className="text-white text-xs font-poppins">
                                📞 913-208-3535  📍 Kansas City, MO
                            </p>
                            <div className="flex gap-4 mt-2">
                                <Link href="https://twitter.com/banndash">
                                    <Image
                                        src="/twitter-icon.png"
                                        alt="Twitter"
                                        width={36}
                                        height={36}
                                        className="rounded-full"
                                    />
                                </Link>
                                <Link href="https://linkedin.com/company/banndash">
                                    <Image
                                        src="/linkedin-icon.png"
                                        alt="LinkedIn"
                                        width={36}
                                        height={36}
                                        className="rounded-full"
                                    />
                                </Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <h3 className="text-white font-poppins font-semibold">Our Services</h3>
                            <div className="flex flex-col gap-4">
                                <Link href="/services/online-order-management" className="text-[#E0E0E0] hover:text-white">
                                    Online Order Management
                                </Link>
                                <Link href="/services/video-transaction-analytics" className="text-[#E0E0E0] hover:text-white">
                                    Video + Transaction Analytics
                                </Link>
                                <Link href="/services/ai-invoice-processing" className="text-[#E0E0E0] hover:text-white">
                                    AI-Based Invoice Processing
                                </Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <h3 className="text-white font-poppins font-semibold">Quick Links</h3>
                            <div className="flex flex-col gap-4">
                                <Link href="/about" className="text-[#E0E0E0] hover:text-white">About</Link>
                                <Link href="/industries" className="text-[#E0E0E0] hover:text-white">Industries</Link>
                                <Link href="/contact" className="text-[#E0E0E0] hover:text-white">Contact</Link>
                                <Link href="/pricing" className="text-[#E0E0E0] hover:text-white">Pricing</Link>
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
                                src="/apple-store.png"
                                alt="Download on the Apple Store"
                                width={170}
                                height={51}
                                className="w-full max-w-[170px] h-auto rounded-[6px] border border-[#434343] bg-black object-contain"
                            />
                            <Image
                                src="/google-play.png"
                                alt="Get it on Google Play"
                                width={170}
                                height={51}
                                className="w-full max-w-[170px] h-auto rounded-[6px] border border-[#434343] bg-black object-contain"
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