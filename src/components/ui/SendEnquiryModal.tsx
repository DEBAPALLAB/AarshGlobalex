"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, ChevronDown, Phone } from "lucide-react";

interface SendEnquiryModalProps {
    isOpen: boolean;
    onClose: () => void;
    medicineName: string;
    medicineSlug: string;
}

const QUANTITY_PRESETS = [100, 200, 350, 550, 800, 1100];

const UNIT_OPTIONS = [
    "Pack/Packs",
    "Box/Boxes",
    "Strip/Strips",
    "Bottle/Bottles",
    "Piece/Pieces",
    "Kg",
    "Gram",
    "Litre",
    "ml",
];

const COUNTRY_CODES = [
    { code: "+91", flag: "🇮🇳", label: "IN" },
    { code: "+1", flag: "🇺🇸", label: "US" },
    { code: "+44", flag: "🇬🇧", label: "GB" },
    { code: "+971", flag: "🇦🇪", label: "AE" },
    { code: "+60", flag: "🇲🇾", label: "MY" },
    { code: "+65", flag: "🇸🇬", label: "SG" },
];

const SendEnquiryModal: React.FC<SendEnquiryModalProps> = ({
    isOpen,
    onClose,
    medicineName,
    medicineSlug,
}) => {
    const [quantity, setQuantity] = useState("50");
    const [unit, setUnit] = useState("Pack/Packs");
    const [isUnitOpen, setIsUnitOpen] = useState(false);
    const [additionalDetail, setAdditionalDetail] = useState("");
    const [countryCode, setCountryCode] = useState("+91");
    const [isCountryOpen, setIsCountryOpen] = useState(false);
    const [mobile, setMobile] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // Close on Escape key
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [isOpen, onClose]);

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) onClose();
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!mobile.trim()) return;
        setIsSubmitting(true);
        // Simulate async submit
        await new Promise((r) => setTimeout(r, 1200));
        setIsSubmitting(false);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            onClose();
            // Reset form
            setQuantity("50");
            setUnit("Pack/Packs");
            setAdditionalDetail("");
            setMobile("");
        }, 2000);
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-[2px] px-4"
            onClick={handleBackdropClick}
        >
            <div
                ref={modalRef}
                className="relative bg-white w-full max-w-[540px] rounded-lg shadow-2xl overflow-hidden animate-modal-in"
                style={{ animation: "modalIn 0.22s cubic-bezier(0.4,0,0.2,1) both" }}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-gray-100">
                    <h2 className="text-[15px] font-black text-gray-900 tracking-tight">
                        Tell us about your requirement
                    </h2>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-900"
                        aria-label="Close modal"
                    >
                        <X size={18} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
                    {/* Medicine Name + Image Banner */}
                    <div className="flex items-center gap-4 bg-red-50 border border-red-100 rounded-md px-4 py-3">
                        <div className="w-12 h-12 flex-shrink-0 bg-white border border-gray-100 rounded-md flex items-center justify-center overflow-hidden shadow-sm">
                            <img
                                src={`/images/${medicineSlug}.jpg`}
                                alt={medicineName}
                                className="max-w-full max-h-full object-contain"
                                onError={(e) => {
                                    (e.currentTarget as HTMLImageElement).src =
                                        "https://placehold.co/100x100?text=Rx";
                                }}
                            />
                        </div>
                        <span className="text-sm font-bold text-gray-800 leading-snug">
                            {medicineName}
                        </span>
                    </div>

                    {/* Quantity + Unit Row */}
                    <div className="flex gap-3">
                        {/* Quantity Input */}
                        <div className="flex-1 relative">
                            <label className="absolute -top-2 left-3 bg-white px-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                Quantity
                            </label>
                            <input
                                type="number"
                                min="1"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                className="w-full border border-gray-200 rounded-md px-3 pt-3 pb-2 text-sm font-semibold text-gray-800 focus:outline-none focus:border-[#cc0000] focus:ring-1 focus:ring-[#cc0000]/20 transition-all"
                            />
                        </div>

                        {/* Unit Dropdown */}
                        <div className="flex-1 relative">
                            <label className="absolute -top-2 left-3 bg-white px-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest z-10">
                                Select Unit
                            </label>
                            <button
                                type="button"
                                onClick={() => setIsUnitOpen((v) => !v)}
                                className="w-full border border-gray-200 rounded-md px-3 pt-3 pb-2 text-sm font-semibold text-gray-800 text-left flex items-center justify-between focus:outline-none focus:border-[#cc0000] focus:ring-1 focus:ring-[#cc0000]/20 transition-all bg-white"
                            >
                                <span>{unit}</span>
                                <ChevronDown
                                    size={14}
                                    className={`text-gray-400 transition-transform ${isUnitOpen ? "rotate-180" : ""}`}
                                />
                            </button>
                            {isUnitOpen && (
                                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-48 overflow-y-auto">
                                    {UNIT_OPTIONS.map((u) => (
                                        <button
                                            key={u}
                                            type="button"
                                            onClick={() => {
                                                setUnit(u);
                                                setIsUnitOpen(false);
                                            }}
                                            className={`w-full text-left px-4 py-2 text-sm hover:bg-red-50 hover:text-[#cc0000] transition-colors font-medium ${unit === u ? "text-[#cc0000] bg-red-50" : "text-gray-700"
                                                }`}
                                        >
                                            {u}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Quick Quantity Presets */}
                    <div className="flex flex-wrap gap-2">
                        {QUANTITY_PRESETS.map((q) => (
                            <button
                                key={q}
                                type="button"
                                onClick={() => setQuantity(String(q))}
                                className={`px-3 py-1 rounded border text-xs font-bold transition-all ${quantity === String(q)
                                        ? "bg-[#cc0000] text-white border-[#cc0000]"
                                        : "bg-white text-gray-600 border-gray-200 hover:border-[#cc0000] hover:text-[#cc0000]"
                                    }`}
                            >
                                {q}
                            </button>
                        ))}
                    </div>

                    {/* Additional Detail */}
                    <div className="relative">
                        <label className="absolute -top-2 left-3 bg-white px-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                            Additional detail
                        </label>
                        <textarea
                            value={additionalDetail}
                            onChange={(e) => setAdditionalDetail(e.target.value)}
                            rows={2}
                            placeholder="e.g. brand preference, delivery timeline..."
                            className="w-full border border-gray-200 rounded-md px-3 pt-3 pb-2 text-sm text-gray-700 resize-none focus:outline-none focus:border-[#cc0000] focus:ring-1 focus:ring-[#cc0000]/20 transition-all placeholder:text-gray-300"
                        />
                    </div>

                    {/* Mobile Number */}
                    <div className="flex gap-2">
                        {/* Country Code Dropdown */}
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => setIsCountryOpen((v) => !v)}
                                className="h-full border border-gray-200 rounded-md px-3 flex items-center gap-1.5 text-sm font-semibold text-gray-700 bg-white hover:border-[#cc0000] transition-colors focus:outline-none whitespace-nowrap"
                            >
                                <span>
                                    {COUNTRY_CODES.find((c) => c.code === countryCode)?.flag}
                                </span>
                                <span>{countryCode}</span>
                                <ChevronDown size={12} className="text-gray-400" />
                            </button>
                            {isCountryOpen && (
                                <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 w-40">
                                    {COUNTRY_CODES.map((c) => (
                                        <button
                                            key={c.code}
                                            type="button"
                                            onClick={() => {
                                                setCountryCode(c.code);
                                                setIsCountryOpen(false);
                                            }}
                                            className={`w-full text-left px-3 py-2 text-sm flex items-center gap-2 hover:bg-red-50 hover:text-[#cc0000] transition-colors font-medium ${countryCode === c.code
                                                    ? "text-[#cc0000] bg-red-50"
                                                    : "text-gray-700"
                                                }`}
                                        >
                                            <span>{c.flag}</span>
                                            <span>{c.code}</span>
                                            <span className="text-xs text-gray-400">{c.label}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Mobile Input */}
                        <div className="flex-1 relative">
                            <input
                                type="tel"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                placeholder="Mobile number"
                                required
                                className="w-full border border-gray-200 rounded-md px-3 py-3 text-sm font-semibold text-gray-800 focus:outline-none focus:border-[#cc0000] focus:ring-1 focus:ring-[#cc0000]/20 transition-all placeholder:text-gray-300"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting || submitted}
                        className={`w-full py-4 rounded-md text-white text-sm font-black uppercase tracking-[0.15em] transition-all duration-300 shadow-md active:scale-[0.98] ${submitted
                                ? "bg-green-500 shadow-green-200"
                                : isSubmitting
                                    ? "bg-[#cc0000]/70 cursor-wait"
                                    : "bg-[#cc0000] hover:bg-black shadow-red-200"
                            }`}
                    >
                        {submitted
                            ? "✓ Inquiry Sent!"
                            : isSubmitting
                                ? "Submitting..."
                                : "Submit Now"}
                    </button>
                </form>
            </div>

            <style jsx>{`
        @keyframes modalIn {
          from {
            opacity: 0;
            transform: scale(0.94) translateY(12px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
        </div>
    );
};

export default SendEnquiryModal;
