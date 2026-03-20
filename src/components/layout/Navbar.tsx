"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TOP_NAV_LINKS } from '@/data/mockData';
import { Search, Menu, ChevronDown } from 'lucide-react';

interface Category {
    name: string;
    slug: string;
}

interface NavbarProps {
    initialCategories?: Category[];
}

const Navbar = ({ initialCategories = [] }: NavbarProps) => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [categories, setCategories] = useState<Category[]>(initialCategories);

    useEffect(() => {
        // Only fetch if not provided as props
        if (initialCategories.length === 0) {
            const fetchCategories = async () => {
                try {
                    const response = await fetch('/api/categories');
                    if (response.ok) {
                        const data = await response.json();
                        setCategories(data.categories || []);
                    }
                } catch (error) {
                    console.error("Failed to fetch categories:", error);
                }
            };
            fetchCategories();
        }
    }, [initialCategories]);

    return (
        <nav className="sticky top-0 z-50 bg-primary text-white shadow-md">
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
                                            <div className="flex items-center">
                                                <Link
                                                    href="/our-products"
                                                    className={`px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 rounded-l-md flex items-center space-x-1 ${pathname === '/our-products' ? 'bg-white/20' : ''}`}
                                                >
                                                    <span>{link.name}</span>
                                                </Link>
                                                <button
                                                    className={`pr-3 pl-1 py-3 text-sm font-medium transition-colors hover:bg-white/10 rounded-r-md ${pathname === '/our-products' ? 'bg-white/20' : ''}`}
                                                >
                                                    <ChevronDown size={14} className={`transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`} />
                                                </button>
                                            </div>

                                            {/* Dropdown Menu */}
                                            <div className={`absolute top-full left-0 w-80 bg-white shadow-2xl rounded-xl border border-blue-50 py-3 mt-1 transition-all duration-200 origin-top transform ${isMenuOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                                                <div className="max-h-[70vh] overflow-y-auto custom-scrollbar px-2 space-y-1">
                                                    {categories.map((category) => {
                                                        const isStandalone = category.slug.includes('10351473') || category.slug.includes('10351475');
                                                        const href = isStandalone ? `/${category.slug}` : `/category/${category.slug}`;

                                                        return (
                                                            <Link
                                                                key={category.slug}
                                                                href={href}
                                                                className="block px-4 py-2.5 text-sm text-slate-700 font-medium rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-all"
                                                                onClick={() => setIsMenuOpen(false)}
                                                            >
                                                                {category.name}
                                                            </Link>
                                                        );
                                                    })}
                                                    {categories.length === 0 && (
                                                        <div className="px-4 py-2 text-[10px] text-gray-400 italic text-center">No categories found</div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                                if (link.name === 'Contact Us') {
                                    return (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className={`ml-4 px-6 py-2 text-sm font-bold transition-all bg-white text-primary hover:bg-blue-50 rounded-full shadow-lg shadow-black/10 active:scale-95 ${pathname === link.href ? 'bg-blue-50' : ''}`}
                                        >
                                            {link.name}
                                        </Link>
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
