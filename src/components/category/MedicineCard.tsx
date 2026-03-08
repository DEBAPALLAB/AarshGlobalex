"use client";

import React from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import SafeImage from '@/components/ui/SafeImage';

interface MedicineCardProps {
    medicine: {
        name: string;
        slug: string;
        'card-info'?: Record<string, string>;
    };
}

const MedicineCard: React.FC<MedicineCardProps> = ({ medicine }) => {
    const cardInfo = medicine['card-info'] || {};
    const specs = Object.entries(cardInfo);

    return (
        <div className="bg-white border border-gray-100 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col md:flex-row mb-6">
            {/* Image Section */}
            <div className="md:w-1/4 bg-white p-4 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-50">
                <div className="relative aspect-square w-full max-w-[200px] flex items-center justify-center overflow-hidden group">
                    <SafeImage
                        src={`/images/${medicine.slug}.jpg`}
                        alt={medicine.name}
                        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                        fallbackSrc="https://placehold.co/400x400?text=No+Image"
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className="flex-grow p-6 flex flex-col">
                <div className="mb-4">
                    <Link href={`/${medicine.slug}`}>
                        <h3 className="text-xl font-bold text-[#005099] hover:text-[#cc0000] transition-colors leading-tight mb-2 uppercase">
                            {medicine.name}
                        </h3>
                    </Link>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
                    {specs.map(([key, value]) => (
                        <div key={key} className="flex text-[13px] border-b border-gray-50 pb-1">
                            <span className="font-bold text-gray-500 min-w-[120px] shrink-0">{key}:</span>
                            <span className="text-gray-700 font-semibold ml-2">{value}</span>
                        </div>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-auto flex flex-wrap gap-4">
                    <Link href={`/${medicine.slug}`} className="inline-flex items-center px-6 py-2 bg-[#cc0000] text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-black transition-colors duration-300">
                        View Details
                    </Link>
                    <button className="inline-flex items-center px-6 py-2 border-2 border-[#005099] text-[#005099] text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-[#005099] hover:text-white transition-all duration-300 group">
                        <Mail size={14} className="mr-2" />
                        Send Inquiry
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MedicineCard;
