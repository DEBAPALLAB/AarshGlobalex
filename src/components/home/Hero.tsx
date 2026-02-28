import React from 'react';
import Link from 'next/link';
import { COMPANY_INFO } from '@/data/mockData';

const Hero = () => {
    return (
        <div className="relative h-[400px] w-full bg-cover bg-center flex items-center overflow-hidden" style={{ backgroundImage: 'url("https://cpimg.tistatic.com/08611956/b/4/hero-bg.jpg")' }}>
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-white text-center md:text-left">
                <div className="max-w-2xl space-y-4">
                    <p className="text-primary font-bold tracking-[0.2em] uppercase text-xs md:text-sm drop-shadow-md">TRADER, SUPPLIER, EXPORTER</p>
                    <h1 className="text-3xl md:text-6xl font-extrabold leading-tight drop-shadow-xl">
                        ANTI CANCER TABLETS
                    </h1>
                    <p className="text-lg md:text-xl font-medium tracking-wide drop-shadow-md text-gray-100">
                        Customer Faith Well-Kept For Lifetime.
                    </p>
                    <div className="pt-4">
                        <Link href="/our-products">
                            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-sm font-bold transition-all transform hover:translate-x-1">
                                Know More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Product Highlight Overlay */}
            <div className="absolute right-12 bottom-12 hidden lg:block">
                <div className="bg-white/95 p-6 rounded-sm shadow-2xl border-l-4 border-primary">
                    <img
                        src="https://cpimg.tistatic.com/08611959/b/4/Vildagliptin-And-Metformin-HCL-Tablets.jpg"
                        alt="Featured Product"
                        className="w-40 h-40 object-contain mx-auto"
                    />
                    <div className="mt-4 text-center">
                        <p className="text-[10px] text-primary font-bold uppercase tracking-widest">Hot Deal</p>
                        <p className="text-xs font-bold text-gray-800">Pharmaceutical Solutions</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
