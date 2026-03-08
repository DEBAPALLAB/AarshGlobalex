"use client";

import React, { useState } from "react";
import SendEnquiryModal from "./SendEnquiryModal";
import { Mail } from "lucide-react";

interface SendEnquiryButtonProps {
    medicineName: string;
    medicineSlug: string;
    /**
     * visual style:
     *  "primary"  — solid red block button (used on medicine detail page)
     *  "outline"  — bordered blue button (used on category/listing cards)
     *  "card"     — compact, used inside ProductCard
     */
    variant?: "primary" | "outline" | "card";
    className?: string;
}

const SendEnquiryButton: React.FC<SendEnquiryButtonProps> = ({
    medicineName,
    medicineSlug,
    variant = "primary",
    className = "",
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const baseStyles: Record<string, string> = {
        primary:
            "flex-grow md:flex-grow-0 px-10 py-5 bg-[#cc0000] text-white text-xs font-black uppercase tracking-widest rounded-sm hover:bg-black transition-all transform hover:-translate-y-1 shadow-2xl shadow-red-900/20 active:scale-95",
        outline:
            "inline-flex items-center px-6 py-2 border-2 border-[#005099] text-[#005099] text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-[#005099] hover:text-white transition-all duration-300 group",
        card: "block w-full py-1.5 border border-[#cc0000] text-[#cc0000] text-[10px] font-bold rounded-sm hover:bg-[#cc0000] hover:text-white transition-colors text-center",
    };

    return (
        <>
            <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className={`${baseStyles[variant]} ${className}`}
            >
                {variant === "outline" && <Mail size={14} className="mr-2 shrink-0" />}
                {variant === "primary" ? "Send Inquiry Now" : "Send Inquiry"}
            </button>

            <SendEnquiryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                medicineName={medicineName}
                medicineSlug={medicineSlug}
            />
        </>
    );
};

export default SendEnquiryButton;
