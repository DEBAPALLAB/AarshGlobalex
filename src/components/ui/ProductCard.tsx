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
        <div className="bg-white border border-gray-100 p-4 rounded-sm hover:shadow-lg transition-shadow group flex flex-col items-center text-center">
            <Link href={`/${slug}-${id}.html`} className="w-full">
                <div className="relative w-full aspect-square mb-4 overflow-hidden bg-gray-50 flex items-center justify-center p-4">
                    <img
                        src={image}
                        alt={name}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </Link>
            <div className="grow">
                <Link href={`/${slug}-${id}.html`}>
                    <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 min-h-10 mb-2 hover:text-primary transition-colors">{name}</h3>
                </Link>
            </div>
            <div className="w-full space-y-2 mt-auto">
                <Link
                    href={`/${slug}-${id}.html`}
                    className="block w-full py-1.5 border border-primary text-primary text-[10px] font-bold rounded-sm hover:bg-primary hover:text-white transition-colors"
                >
                    View More
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
