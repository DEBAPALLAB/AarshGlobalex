"use client";

import React, { useState } from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '@/data/mockData';
import SendEnquiryModal from './SendEnquiryModal';

interface InquiryStickyFooterProps {
    productName: string;
    productSlug: string;
}

const InquiryStickyFooter: React.FC<InquiryStickyFooterProps> = ({ productName, productSlug }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_15px_rgba(0,0,0,0.08)] border-t border-gray-100 py-3 px-4 md:px-8 z-50 transition-all duration-300 transform translate-y-0">
                <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                    {/* Product Info - Hidden on very small screens */}
                    <div className="hidden sm:flex items-center gap-4">
                        <div className="w-10 h-10 bg-gray-50 flex items-center justify-center rounded-sm overflow-hidden border border-gray-100">
                            <img
                                src={`/images/${productSlug}.jpg`}
                                alt={productName}
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                    (e.currentTarget as HTMLImageElement).src =
                                        "https://placehold.co/100x100?text=Rx";
                                }}
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Inquiry For</span>
                            <h4 className="text-xs font-black text-gray-900 truncate max-w-[200px] uppercase leading-none">{productName}</h4>
                        </div>
                    </div>

                    {/* Primary Action */}
                    <div className="grow sm:grow-0 flex items-center gap-3">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="grow sm:grow-0 py-3 px-8 bg-[#cc0000] text-white text-[11px] font-black uppercase tracking-[0.15em] rounded-sm hover:bg-black transition-colors duration-300 shadow-lg shadow-red-900/10"
                        >
                            Request To Call Back
                        </button>

                        <a
                            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(`Hi, I'd like to enquire about ${productName}. Please share more details.`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-[#25D366] text-white rounded-sm hover:bg-[#128C7E] transition-colors duration-300 shadow-lg shadow-green-900/10 flex items-center justify-center"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="18"
                                height="18"
                                fill="currentColor"
                            >
                                <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 0 0 1.333 4.993L2 22l5.233-1.237a9.994 9.994 0 0 0 4.779 1.217h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.037-5.176-2.922-7.062A9.935 9.935 0 0 0 12.012 2zm5.884 14.148c-.249.702-1.43 1.33-1.996 1.416-.52.08-1.18.12-3.354-.78-2.617-1.08-4.303-3.793-4.433-3.966-.13-.173-1.06-1.41-1.06-2.689 0-1.28.665-1.912.903-2.17.237-.258.514-.323.687-.323.172 0 .344.004.492.01.162.008.38-.063.594.453.228.547.74 1.802.805 1.932.064.13.107.28.02.453-.086.173-.13.28-.26.432-.13.15-.27.323-.385.45-.13.142-.268.296-.112.566.155.27.69 1.144 1.481 1.848.914.814 1.761 1.065 2.032 1.196.27.13.43.107.59-.074.156-.183.676-.78.857-1.047.18-.268.362-.224.608-.13.245.093 1.554.73 1.82 1.04-.15.22-.38.64-.13.88.94.46z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <SendEnquiryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                medicineName={productName}
                medicineSlug={productSlug}
            />
        </>
    );
};

export default InquiryStickyFooter;

