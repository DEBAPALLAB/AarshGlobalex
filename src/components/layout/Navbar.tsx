"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TOP_NAV_LINKS } from '@/data/mockData';
import { Search, Menu, ChevronDown, X, Phone, Mail } from 'lucide-react';

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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [categories, setCategories] = useState<Category[]>(initialCategories);
    const [isProductsExpanded, setIsProductsExpanded] = useState(false);

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

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <nav className="sticky top-0 z-50 bg-primary text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between h-14">
                    <div className="flex items-center space-x-1 w-full justify-between md:justify-start">
                        <button 
                            className="md:hidden p-2 hover:bg-white/10 rounded-md transition-colors"
                            onClick={() => setIsMobileMenuOpen(true)}
                            aria-label="Open menu"
                        >
                            <Menu size={24} />
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
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div 
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-60 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Drawer */}
            <div className={`fixed top-0 left-0 bottom-0 w-[80%] max-w-sm bg-white z-70 md:hidden transform transition-transform duration-300 ease-in-out shadow-2xl ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col h-full bg-slate-50">
                    <div className="p-4 bg-primary flex items-center justify-between shadow-md">
                        <span className="font-bold text-lg text-white">Menu</span>
                        <button 
                            className="p-1.5 hover:bg-white/10 rounded-full transition-colors text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto py-2 custom-scrollbar">
                        <div className="px-3 space-y-1">
                            {TOP_NAV_LINKS.map((link) => {
                                if (link.name === 'Our Products') {
                                    return (
                                        <div key={link.href} className="py-1">
                                            <button
                                                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left font-semibold transition-all ${pathname === '/our-products' ? 'bg-blue-600 text-white' : 'text-slate-700 bg-white shadow-sm hover:bg-blue-50'}`}
                                                onClick={() => setIsProductsExpanded(!isProductsExpanded)}
                                            >
                                                <span>{link.name}</span>
                                                <ChevronDown size={18} className={`transition-transform duration-300 ${isProductsExpanded ? 'rotate-180' : ''}`} />
                                            </button>
                                            
                                            <div className={`mt-1 ml-4 space-y-1 overflow-hidden transition-all duration-300 ${isProductsExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                                <Link
                                                    href="/our-products"
                                                    className="block px-4 py-2.5 text-sm text-slate-600 font-medium hover:text-primary rounded-lg"
                                                >
                                                    All Products
                                                </Link>
                                                {categories.map((category) => {
                                                    const isStandalone = category.slug.includes('10351473') || category.slug.includes('10351475');
                                                    const href = isStandalone ? `/${category.slug}` : `/category/${category.slug}`;
                                                    return (
                                                        <Link
                                                            key={category.slug}
                                                            href={href}
                                                            className="block px-4 py-2.5 text-sm text-slate-500 hover:text-primary transition-colors border-l-2 border-slate-100 hover:border-primary"
                                                        >
                                                            {category.name}
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    );
                                }
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`block px-4 py-4 rounded-xl font-semibold transition-all ${pathname === link.href ? 'bg-blue-600 text-white' : 'text-slate-700 bg-white shadow-sm hover:bg-blue-50'}`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Mobile Menu Footer */}
                    <div className="p-6 bg-white border-t border-slate-100">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Quick Contact</p>
                        <div className="space-y-4">
                            <a href="tel:+919270785694" className="flex items-center space-x-3 text-slate-600 hover:text-primary transition-colors">
                                <div className="p-2 bg-slate-50 rounded-lg">
                                    <Phone size={18} />
                                </div>
                                <span className="font-semibold text-sm">+91 9270785694</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
