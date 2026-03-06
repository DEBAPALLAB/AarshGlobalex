import React from 'react';
import Link from 'next/link';
import { COMPANY_INFO, PRODUCT_CATEGORIES, TOP_NAV_LINKS } from '@/data/mockData';
import { MapPin, User, Phone, Send } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#b19470] text-white pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* Company Column */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold border-b border-primary/30 pb-2 inline-block">Aarsh Globalex</h3>
                    <p className="text-white text-sm">GST : {COMPANY_INFO.gst}</p>
                    <div className="flex space-x-2">
                        <div className="bg-red-600 p-1.5 rounded-sm h-fit">
                            <span className="text-[10px] font-bold">ti</span>
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold border-b border-primary/30 pb-2 inline-block">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-white">
                        {TOP_NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className="hover:text-primary transition-colors flex items-center">
                                    <span className="mr-2 text-[10px]">➜</span> {link.name}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="/sitemap" className="hover:text-primary transition-colors flex items-center">
                                <span className="mr-2 text-[10px]">➜</span> Sitemap
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Our Products */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold border-b border-primary/30 pb-2 inline-block">Our Products</h3>
                    <ul className="space-y-2 text-sm text-white">
                        {PRODUCT_CATEGORIES.slice(0, 8).map((cat) => (
                            <li key={cat}>
                                <Link href={`/our-products#${cat.toLowerCase().replace(/ /g, '-')}`} className="hover:text-primary transition-colors flex items-center">
                                    <span className="mr-2 text-[10px]">➜</span> {cat}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Address */}
                <div className="space-y-4">
                    <div className="bg-[#4d4d4d] p-6 rounded-md space-y-4">
                        <div className="flex items-start space-x-3">
                            <MapPin size={24} className="text-white shrink-0" />
                            <p className="text-xs">{COMPANY_INFO.address}</p>
                        </div>
                        <div className="border-t border-gray-500 pt-4 flex items-center space-x-3">
                            <User size={24} className="text-white shrink-0" />
                            <div>
                                <p className="text-xs font-bold text-white">{COMPANY_INFO.contactPerson}</p>
                                <button className="text-[10px] text-primary hover:underline">View Number</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-gray-600">
                <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-white space-y-4 md:space-y-0 text-center">
                    <p>Aarsh Globalex All Rights Reserved. (Terms of Use)</p>
                    <p>Developed and Managed by Lucide Tech.</p>
                </div>
            </div>

            {/* Floating Action Buttons */}
            <div className="fixed bottom-0 inset-x-0 md:relative md:inset-x-auto md:mt-8 flex justify-center space-x-2 md:pb-0 z-40 bg-white md:bg-transparent p-2 md:p-0 border-t md:border-t-0 shadow-lg md:shadow-none">
                <button className="flex-1 md:flex-none flex items-center justify-center space-x-2 bg-[#ff7700] hover:bg-[#e66b00] text-white px-6 py-2 rounded-sm text-xs font-bold uppercase transition-transform active:scale-95">
                    <Send size={14} />
                    <span>Send Inquiry</span>
                </button>
                <button className="flex-1 md:flex-none flex items-center justify-center space-x-2 bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-sm text-xs font-bold uppercase transition-transform active:scale-95">
                    <Phone size={14} />
                    <span>Send SMS</span>
                </button>
            </div>
        </footer>
    );
};

export default Footer;
