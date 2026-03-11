import React from 'react';
import Link from 'next/link';
import { COMPANY_INFO, PRODUCT_CATEGORIES, TOP_NAV_LINKS } from '@/data/mockData';
import { MapPin, User, Phone, Send } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ background: '#1a1410', color: '#e5e0d8' }} className="pt-16 pb-6">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* Company Column */}
                <div className="space-y-5">
                    <div>
                        <h3
                            className="text-lg font-bold text-white tracking-wide"
                            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                        >
                            Aarsh Globalex
                        </h3>
                        <div className="mt-2 h-[2px] w-8" style={{ background: '#a07850' }} />
                    </div>
                    <p className="text-sm" style={{ color: 'rgba(229,224,216,0.6)' }}>
                        GST : <span className="text-white/80">{COMPANY_INFO.gst}</span>
                    </p>
                    <p className="text-[13px] leading-relaxed" style={{ color: 'rgba(229,224,216,0.55)' }}>
                        Trusted pharmaceutical trader, supplier, and exporter committed to global healthcare quality.
                    </p>
                    <div className="flex space-x-2">
                        <div className="bg-red-600 p-1.5 rounded-[2px] h-fit">
                            <span className="text-[10px] font-bold text-white">ti</span>
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-5">
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Quick Links</h3>
                        <div className="mt-2 h-[2px] w-8" style={{ background: '#a07850' }} />
                    </div>
                    <ul className="space-y-2.5">
                        {TOP_NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="text-sm flex items-center gap-2 transition-colors hover:text-[#c4a882]"
                                    style={{ color: 'rgba(229,224,216,0.6)' }}
                                >
                                    <span style={{ color: '#a07850', fontSize: '10px' }}>➜</span> {link.name}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                href="/sitemap"
                                className="text-sm flex items-center gap-2 transition-colors hover:text-[#c4a882]"
                                style={{ color: 'rgba(229,224,216,0.6)' }}
                            >
                                <span style={{ color: '#a07850', fontSize: '10px' }}>➜</span> Sitemap
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Our Products */}
                <div className="space-y-5">
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Our Products</h3>
                        <div className="mt-2 h-[2px] w-8" style={{ background: '#a07850' }} />
                    </div>
                    <ul className="space-y-2.5">
                        {PRODUCT_CATEGORIES.slice(0, 8).map((cat) => (
                            <li key={cat}>
                                <Link
                                    href={`/our-products#${cat.toLowerCase().replace(/ /g, '-')}`}
                                    className="text-sm flex items-center gap-2 transition-colors hover:text-[#c4a882]"
                                    style={{ color: 'rgba(229,224,216,0.6)' }}
                                >
                                    <span style={{ color: '#a07850', fontSize: '10px' }}>➜</span> {cat}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Address */}
                <div className="space-y-5">
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Contact</h3>
                        <div className="mt-2 h-[2px] w-8" style={{ background: '#a07850' }} />
                    </div>
                    <div
                        className="rounded-[3px] p-5 space-y-4"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                    >
                        <div className="flex items-start space-x-3">
                            <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: '#a07850' }} />
                            <p className="text-xs leading-relaxed" style={{ color: 'rgba(229,224,216,0.65)' }}>
                                {COMPANY_INFO.address}
                            </p>
                        </div>
                        <div className="border-t pt-4 flex items-center space-x-3" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                            <User size={16} className="shrink-0" style={{ color: '#a07850' }} />
                            <div>
                                <p className="text-xs font-semibold text-white/80">{COMPANY_INFO.contactPerson}</p>
                                <button
                                    className="text-[10px] mt-0.5 transition-colors hover:text-[#c4a882]"
                                    style={{ color: '#a07850' }}
                                >
                                    View Number
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 mt-14 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="flex flex-col md:flex-row justify-between items-center text-[11px] space-y-3 md:space-y-0 text-center" style={{ color: 'rgba(229,224,216,0.35)' }}>
                    <p>© {new Date().getFullYear()} Aarsh Globalex · All Rights Reserved · Terms of Use</p>
                    <p>Developed and Managed by <span style={{ color: 'rgba(196,168,130,0.7)' }}>Lucide Tech</span></p>
                </div>
            </div>

            {/* Floating Action Buttons */}
            <div className="fixed bottom-0 inset-x-0 md:relative md:inset-x-auto md:mt-10 flex justify-center space-x-2 z-40 bg-white md:bg-transparent p-2 md:p-0 border-t md:border-t-0 shadow-lg md:shadow-none">
                <button
                    className="flex-1 md:flex-none flex items-center justify-center space-x-2 text-white px-6 py-2.5 rounded-[3px] text-xs font-semibold uppercase tracking-wider transition-all active:scale-95 hover:opacity-90"
                    style={{ background: '#e07020' }}
                >
                    <Send size={14} />
                    <span>Send Inquiry</span>
                </button>
                <button
                    className="flex-1 md:flex-none flex items-center justify-center space-x-2 text-white px-6 py-2.5 rounded-[3px] text-xs font-semibold uppercase tracking-wider transition-all active:scale-95 hover:opacity-90"
                    style={{ background: '#a07850' }}
                >
                    <Phone size={14} />
                    <span>Send SMS</span>
                </button>
            </div>
        </footer>
    );
};

export default Footer;
