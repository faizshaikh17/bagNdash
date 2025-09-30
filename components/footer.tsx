import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full text-sm border-t px-20 border-[#434343] bg-[#020D2D] ">
            {/* Wrapper */}
            <div className="max-w-[1600px] mx-auto px-12 py-16 flex flex-col gap-12">
                {/* Top Section */}
                <div className="flex flex-wrap justify-between gap-12">
                    {/* Logo & Contact */}
                    <div className="flex flex-col gap-4 max-w-[300px]">
                        <Image
                            src="/logo.png"
                            alt="Banndash Logo"
                            width={206}
                            height={38}
                            className="object-contain"
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

                    {/* Our Services */}
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

                    {/* Quick Links */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-white font-poppins font-semibold">Quick Links</h3>
                        <div className="flex flex-col gap-4">
                            <Link href="/about" className="text-[#E0E0E0] hover:text-white">About</Link>
                            <Link href="/industries" className="text-[#E0E0E0] hover:text-white">Industries</Link>
                            <Link href="/contact" className="text-[#E0E0E0] hover:text-white">Contact</Link>
                            <Link href="/pricing" className="text-[#E0E0E0] hover:text-white">Pricing</Link>
                        </div>
                    </div>

                    {/* Important Information */}
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

                    {/* App Store Buttons */}
                    <div className="flex flex-col gap-4">
                        <Image
                            src="/apple-store.png"
                            alt="Download on the Apple Store"
                            width={170}
                            height={51}
                            className="rounded-[6px] border border-[#434343] bg-black object-cover"
                        />
                        <Image
                            src="/google-play.png"
                            alt="Get it on Google Play"
                            width={170}
                            height={51}
                            className="rounded-[6px] border border-[#434343] bg-black object-cover"
                        />
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="text-center text-[#E0E0E0] text-xs font-poppins">
                    © 2025 Banndash. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
