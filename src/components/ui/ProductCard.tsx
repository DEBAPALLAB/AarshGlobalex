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
        <div className="bg-white border border-blue-50/50 p-4 rounded-2xl hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group flex flex-col items-center text-center">
            <Link href={`/${slug}`} className="w-full">
                <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-xl bg-linear-to-br from-blue-50 to-white flex items-center justify-center p-4">
                    <img
                        src={image}
                        alt={name}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </Link>
            <div className="grow">
                <Link href={`/${slug}`}>
                    <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 min-h-10 mb-2 group-hover:text-blue-600 transition-colors">{name}</h3>
                </Link>
            </div>
            <div className="w-full space-y-2 mt-auto">
                <Link
                    href={`/${slug}`}
                    className="block w-full py-2 bg-blue-50 text-blue-700 text-[11px] font-bold rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                >
                    View More
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
