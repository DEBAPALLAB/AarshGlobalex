"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Activity, Globe } from 'lucide-react';
import SendEnquiryModal from '../ui/SendEnquiryModal';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="relative min-h-[600px] lg:min-h-[700px] w-full bg-[#f8fafc] flex items-center overflow-hidden">
            {/* Abstract Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-linear-to-b from-blue-400/30 to-blue-200/5 blur-3xl" />
                <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-linear-to-tr from-indigo-300/20 to-blue-300/20 blur-3xl" />
                <div className="absolute bottom-[10%] right-[20%] w-[30%] h-[30%] rounded-full bg-linear-to-t from-blue-600/10 to-transparent blur-2xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
                {/* Left: Text Content */}
                <div className="flex flex-col space-y-8 text-center lg:text-left pt-10 lg:pt-0">
                    <div className="inline-flex items-center mx-auto lg:mx-0 bg-blue-50 border border-blue-100/80 rounded-full px-4 py-1.5 w-max shadow-sm shadow-blue-500/5">
                        <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
                        <span className="text-blue-700 font-bold tracking-[0.15em] uppercase text-[10px] sm:text-xs">
                            Trusted Trader, Supplier & Exporter
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.15] text-slate-900 tracking-tight">
                        Advancing Life With <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-700 via-blue-600 to-indigo-600">
                            Anti Cancer Tablets
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                        Delivering world-class pharmaceutical solutions across the globe. Customer faith well-kept for a lifetime with uncompromised quality standards.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                        <Link href="/our-products" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-blue-600 text-white hover:bg-blue-700 px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-blue-600/25 transition-all transform hover:-translate-y-0.5">
                                <span>Explore Products</span>
                                <ArrowRight size={18} className="ml-1" />
                            </button>
                        </Link>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white text-slate-700 hover:text-blue-600 border border-slate-200 hover:border-blue-200 hover:bg-blue-50/50 px-8 py-3.5 rounded-full font-semibold transition-all shadow-sm active:scale-95"
                        >
                            <span>Contact Sales</span>
                        </button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-6 border-t border-slate-200/60 mt-8">
                        <div className="flex items-center space-x-2 text-slate-500">
                            <ShieldCheck size={18} className="text-blue-500" />
                            <span className="text-xs font-semibold uppercase tracking-wider">GMP Certified</span>
                        </div>
                        <div className="flex items-center space-x-2 text-slate-500">
                            <Globe size={18} className="text-blue-500" />
                            <span className="text-xs font-semibold uppercase tracking-wider">Global Export</span>
                        </div>
                    </div>
                </div>

                {/* Right: Glassmorphism Visuals */}
                <div className="hidden lg:flex relative h-full w-full items-center justify-center min-h-[400px]">
                    {/* Main floating card */}
                    <div className="relative z-20 bg-white/70 backdrop-blur-xl border border-white p-6 rounded-3xl shadow-2xl shadow-blue-500/10 w-80 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                        <div className="absolute -top-4 -right-4 bg-linear-to-br from-blue-600 to-indigo-600 text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg">
                            Featured Deal
                        </div>
                        <div className="bg-slate-50/50 rounded-2xl p-6 mb-6 flex justify-center items-center h-48 border border-white">
                            <img
                                src="/images/40-mg-azilsartan-medoxomil-tablets-10351207.jpg"
                                alt="Featured Product"
                                className="w-full h-full object-contain filter drop-shadow-md"
                            />
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-bold text-slate-900 leading-tight">Azilsartan Medoxomil</h3>
                                    <p className="text-xs text-blue-600 font-medium mt-1">Pharmaceutical Solutions</p>
                                </div>
                                <div className="bg-blue-50 p-2 rounded-xl text-blue-600">
                                    <Activity size={18} />
                                </div>
                            </div>
                            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-blue-500 h-full w-3/4 rounded-full" />
                            </div>
                            <p className="text-[10px] text-slate-400 font-medium">High purity clinical grade formulation</p>
                        </div>
                    </div>

                    {/* Secondary floating accent card */}
                    <div className="absolute z-10 bottom-8 -left-12 bg-white/60 backdrop-blur-md border border-white/80 p-5 rounded-2xl shadow-xl shadow-slate-200/50 w-64 transform rotate-3 hover:-rotate-1 transition-transform duration-500">
                        <div className="flex items-center space-x-4">
                            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                                <ShieldCheck size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800 text-sm">Quality Assured</h4>
                                <p className="text-[11px] text-slate-500 leading-tight mt-0.5">Tested for compliance and efficacy.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SendEnquiryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                medicineName="General Inquiry"
                medicineSlug="general-inquiry"
            />
        </div>
    );
};

export default Hero;

