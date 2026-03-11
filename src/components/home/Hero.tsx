import React from 'react';
import Link from 'next/link';

const Hero = () => {
    return (
        <div className="relative w-full overflow-hidden" style={{ minHeight: '440px', background: '#1a1410' }}>
            {/* Background texture overlay */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
                        radial-gradient(ellipse 80% 60% at 60% 50%, rgba(160,120,80,0.18) 0%, transparent 60%),
                        radial-gradient(circle at 1px 1px, rgba(255,255,255,0.025) 1px, transparent 0)
                    `,
                    backgroundSize: 'auto, 32px 32px',
                }}
            />
            {/* Warm accent glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[400px] opacity-20 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at top right, #a07850, transparent 70%)' }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex items-center" style={{ minHeight: '440px' }}>
                <div className="py-16 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                    {/* Text Content */}
                    <div className="space-y-6 text-center lg:text-left">
                        <p
                            className="text-xs font-semibold uppercase tracking-[0.25em]"
                            style={{ color: '#c4a882', letterSpacing: '0.22em' }}
                        >
                            Trader · Supplier · Exporter
                        </p>
                        <h1
                            className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-[1.1] text-white"
                            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                        >
                            Anti Cancer
                            <br />
                            <span style={{ color: '#c4a882' }}>Tablets</span>
                        </h1>
                        <div className="w-12 h-[2px] mx-auto lg:mx-0" style={{ background: '#a07850' }} />
                        <p className="text-base md:text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '460px' }}>
                            Customer Faith Well‑Kept For Lifetime. Pharmaceutical formulations trusted by healthcare professionals worldwide.
                        </p>
                        <div className="pt-2 flex flex-wrap gap-3 justify-center lg:justify-start">
                            <Link href="/our-products">
                                <button
                                    className="text-white text-sm font-semibold px-7 py-3 rounded-[3px] uppercase tracking-wider transition-all hover:scale-[1.02] active:scale-[0.98]"
                                    style={{ background: '#a07850', boxShadow: '0 4px 16px rgba(160,120,80,0.4)' }}
                                >
                                    Explore Products
                                </button>
                            </Link>
                            <Link href="/company-profile">
                                <button
                                    className="text-sm font-semibold px-7 py-3 rounded-[3px] uppercase tracking-wider transition-all hover:bg-white/10"
                                    style={{ color: 'rgba(255,255,255,0.90)', border: '1.5px solid rgba(255,255,255,0.35)' }}
                                >
                                    About Us
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Product Highlight Card */}
                    <div className="hidden lg:flex items-center justify-end">
                        <div
                            className="relative rounded-[4px] overflow-hidden"
                            style={{
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                backdropFilter: 'blur(12px)',
                                boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
                                padding: '2rem',
                                width: '260px',
                            }}
                        >
                            <div
                                className="absolute top-0 left-0 w-full h-[2px]"
                                style={{ background: 'linear-gradient(90deg, #a07850, transparent)' }}
                            />
                            <img
                                src="/images/40-mg-azilsartan-medoxomil-tablets-10351207.jpg"
                                alt="Featured Product"
                                className="w-36 h-36 object-contain mx-auto"
                            />
                            <div className="mt-5 text-center space-y-1">
                                <p
                                    className="text-[9px] font-bold uppercase tracking-[0.2em]"
                                    style={{ color: '#a07850' }}
                                >
                                    Featured
                                </p>
                                <p className="text-sm font-semibold text-white/90">Pharmaceutical Solutions</p>
                                <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
                                    GMP Certified · Export Quality
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
