"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { COMPANY_INFO, PRODUCT_CATEGORIES, TOP_NAV_LINKS } from '@/data/mockData';
import { MapPin, User, Phone, Send } from 'lucide-react';
import SendEnquiryModal from '../ui/SendEnquiryModal';

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <footer className="bg-blue-900 text-white pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* Company Column */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold border-b border-blue-400/30 pb-2 inline-block text-white!">Aarsh Globalex</h3>
                    <p className="text-blue-100 text-sm">GST : {COMPANY_INFO.gst}</p>
                    <div className="flex space-x-2">
                        <div className="bg-red-600 p-1.5 rounded-sm h-fit">
                            <span className="text-[10px] font-bold">ti</span>
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold border-b border-blue-400/30 pb-2 inline-block text-white!">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-blue-100">
                        {TOP_NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className="hover:text-white transition-colors flex items-center">
                                    <span className="mr-2 text-[10px]">➜</span> {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Our Products */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold border-b border-blue-400/30 pb-2 inline-block text-white!">Our Products</h3>
                    <ul className="space-y-2 text-sm text-blue-100">
                        {PRODUCT_CATEGORIES.slice(0, 8).map((cat) => (
                            <li key={cat}>
                                <Link href={`/our-products#${cat.toLowerCase().replace(/ /g, '-')}`} className="hover:text-white transition-colors flex items-center">
                                    <span className="mr-2 text-[10px]">➜</span> {cat}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Address */}
                <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-700 to-blue-500 p-6 rounded-md space-y-4">
                        <div className="flex items-start space-x-3">
                            <MapPin size={24} className="text-white shrink-0" />
                            <p className="text-xs text-blue-50">{COMPANY_INFO.address}</p>
                        </div>
                        <div className="border-t border-blue-400 pt-4 flex items-center space-x-3">
                            <User size={24} className="text-white shrink-0" />
                            <div>
                                <p className="text-xs font-bold text-white!">{COMPANY_INFO.contactPerson}</p>
                                <a href={`tel:${COMPANY_INFO.mobile}`} className="text-[11px] text-blue-100 hover:underline hover:text-white transition-colors">{COMPANY_INFO.mobile}</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-blue-800">
                <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-blue-200 space-y-4 md:space-y-0 text-center">
                    <p>Aarsh Globalex All Rights Reserved. (Terms of Use)</p>
                    <p>Developed and Managed by Lucide Tech.</p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;

