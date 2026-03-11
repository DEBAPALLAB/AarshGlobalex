'use client';

import React from 'react';
import Link from 'next/link';

interface ProductCardProps {
    id: string;
    name: string;
    slug: string;
    image: string;
    category: string;
}

const ProductCard = ({ id, name, slug, image, category }: ProductCardProps) => {
    return (
        <div
            className="bg-white flex flex-col items-center text-center group rounded-[3px] transition-all duration-200"
            style={{
                border: '1px solid #ede8e0',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
            }}
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 28px rgba(0,0,0,0.10)';
                (e.currentTarget as HTMLDivElement).style.borderColor = '#c4a882';
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
                (e.currentTarget as HTMLDivElement).style.borderColor = '#ede8e0';
            }}
        >
            <Link href={`/${slug}`} className="w-full block">
                <div
                    className="relative w-full aspect-square overflow-hidden flex items-center justify-center p-5"
                    style={{ background: '#f9f7f4' }}
                >
                    <img
                        src={image}
                        alt={name}
                        className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.06]"
                    />
                </div>
            </Link>

            <div className="px-4 py-4 w-full flex flex-col grow">
                <Link href={`/${slug}`} className="grow">
                    <h3
                        className="text-[13px] font-semibold line-clamp-2 leading-snug mb-3 transition-colors min-h-[2.6em] group-hover:text-[#a07850]"
                        style={{ color: '#1c1c1e' }}
                    >
                        {name}
                    </h3>
                </Link>
                <Link
                    href={`/${slug}`}
                    className="block w-full py-1.5 text-[11px] font-semibold uppercase tracking-wider rounded-[3px] transition-all mt-auto hover:bg-[#a07850] hover:text-white hover:border-[#a07850]"
                    style={{ color: '#a07850', border: '1.5px solid #a07850' }}
                >
                    View More
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
