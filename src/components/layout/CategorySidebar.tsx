"use client";

import React from 'react';
import Link from 'next/link';
import { PRODUCT_CATEGORIES } from '@/data/mockData';
import { Menu, X } from 'lucide-react';

const CategorySidebar = () => {
    return (
        <div className="w-full md:w-full bg-white border border-gray-200 shadow-lg overflow-hidden flex flex-col">
            <div className="bg-[#f08519] text-white px-6 py-4 flex justify-between items-center font-bold tracking-wider text-lg">
                <span className="uppercase">Our Products</span>
                <Menu size={24} />
            </div>
            <div className="flex flex-col divide-y divide-gray-100">
                {PRODUCT_CATEGORIES.map((category) => (
                    <Link
                        key={category}
                        href={`/our-products#${category.toLowerCase().replace(/ /g, '-')}`}
                        className="px-6 py-3.5 text-[12px] text-gray-600 hover:bg-gray-50 transition-colors flex items-center group font-semibold uppercase tracking-wide"
                    >
                        <span>{category}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategorySidebar;
