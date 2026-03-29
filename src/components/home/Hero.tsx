"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative min-h-[600px] lg:min-h-[700px] w-full flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/hero-bg-sharp.png"
                    alt="Healthcare Professionals"
                    className="absolute inset-0 object-cover object-center w-full h-full"
                />
                {/* Gradient overlay and blur specifically on the left to make text readable, fading to clear on the right */}
                <div className="absolute inset-y-0 left-0 w-full lg:w-[70%] bg-gradient-to-r from-white/95 via-white/70 to-transparent backdrop-blur-md [-webkit-mask-image:linear-gradient(to_right,white_50%,transparent_100%)] [mask-image:linear-gradient(to_right,white_50%,transparent_100%)]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
                <div className="flex flex-col space-y-6 text-left pt-10">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-3 mb-2">
                        <div className="relative w-20 h-20 bg-white rounded-full p-1 shadow-sm">
                            <Image src="/favicon.ico" alt="Logo" fill className="object-contain p-1" />
                        </div>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
                        <span className="text-[#1a365d]">Aarsh Globalex –</span><br />
                        <span className="text-[#2e7d32]">
                            Your Trusted Global<br />
                            Pharmaceutical<br />
                            Export Partner
                        </span>
                    </h1>

                    <div className="w-16 h-1 bg-[#1a365d] mt-2 mb-2"></div>

                    <p className="text-lg sm:text-xl text-gray-800 leading-relaxed font-medium max-w-lg">
                        A GMP and ISO 9001:2015 certified pharmaceutical merchant exporter delivering trusted healthcare solutions worldwide.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                        <Link href="/our-products" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-[#2b5292] hover:bg-[#1f3e70] text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-md">
                                <span>View Products</span>
                                <ArrowRight size={18} className="ml-1" />
                            </button>
                        </Link>
                        <Link href="/contact-us" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-[#437d46] hover:bg-[#325e34] text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-md">
                                <span>Contact Us</span>
                                <ArrowRight size={18} className="ml-1" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

