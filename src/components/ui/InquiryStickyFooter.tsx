"use client";

import React, { useState } from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';
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

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="p-3 bg-[#005099] text-white rounded-sm hover:bg-black transition-colors duration-300 shadow-lg shadow-blue-900/10 hidden md:block"
                        >
                            <Mail size={18} />
                        </button>

                        <a
                            href="https://wa.me/9107971891554"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-[#25D366] text-white rounded-sm hover:bg-[#128C7E] transition-colors duration-300 shadow-lg shadow-green-900/10"
                        >
                            <MessageSquare size={18} />
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

