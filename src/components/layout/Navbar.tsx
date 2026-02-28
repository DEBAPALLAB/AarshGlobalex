"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TOP_NAV_LINKS } from '@/data/mockData';
import { CATEGORIES } from '@/data/products';
import { Search, Menu, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-[#b19470] text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between h-14">
                    <div className="flex items-center space-x-1">
                        <button className="md:hidden p-2 hover:bg-white/10 rounded-md">
                            <Menu size={20} />
                        </button>
                        <div className="hidden md:flex items-center space-x-1">
                            {TOP_NAV_LINKS.map((link) => {
                                if (link.name === 'Our Products') {
                                    return (
                                        <div
                                            key={link.href}
                                            className="relative group"
                                            onMouseEnter={() => setIsMenuOpen(true)}
                                            onMouseLeave={() => setIsMenuOpen(false)}
                                        >
                                            <button
                                                className={`px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 rounded-md flex items-center space-x-1 ${pathname === link.href ? 'bg-white/20' : ''}`}
                                            >
                                                <span>{link.name}</span>
                                                <ChevronDown size={14} className={`transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`} />
                                            </button>

                                            {/* Dropdown Menu */}
                                            <div className={`absolute top-full left-0 w-64 bg-white shadow-xl border border-gray-100 py-2 transition-all duration-200 origin-top transform ${isMenuOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                                                <div className="max-h-[70vh] overflow-y-auto custom-scrollbar">
                                                    {CATEGORIES.map((category) => (
                                                        <Link
                                                            key={category.slug}
                                                            href={`/${category.slug}.html`}
                                                            className="block px-4 py-2 text-xs text-gray-700 hover:bg-[#f08519]/10 hover:text-[#f08519] transition-colors uppercase font-semibold"
                                                            onClick={() => setIsMenuOpen(false)}
                                                        >
                                                            {category.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 rounded-md ${pathname === link.href ? 'bg-white/20' : ''}`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    <div className="relative grow max-w-xs ml-4">
                        <input
                            type="text"
                            placeholder="Enter keywords to search..."
                            className="w-full bg-white/20 text-white placeholder-white/70 border-none rounded-sm py-1.5 pl-3 pr-10 text-xs focus:ring-2 focus:ring-white/50 outline-none"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-white/70">
                            <Search size={14} />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
