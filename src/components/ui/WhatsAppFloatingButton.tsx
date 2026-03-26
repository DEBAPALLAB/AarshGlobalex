"use client";

import React from 'react';
import { COMPANY_INFO } from '@/data/mockData';

const WhatsAppFloatingButton = () => {
    return (
        <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hi, I would like to know more about your products.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-green-900/20 hover:bg-[#128C7E] transition-all duration-300 hover:scale-110 flex items-center justify-center group"
            aria-label="Contact us on WhatsApp"
        >
            <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="28"
                height="28"
                fill="currentColor"
                className="relative z-10"
            >
                <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 0 0 1.333 4.993L2 22l5.233-1.237a9.994 9.994 0 0 0 4.779 1.217h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.037-5.176-2.922-7.062A9.935 9.935 0 0 0 12.012 2zm5.884 14.148c-.249.702-1.43 1.33-1.996 1.416-.52.08-1.18.12-3.354-.78-2.617-1.08-4.303-3.793-4.433-3.966-.13-.173-1.06-1.41-1.06-2.689 0-1.28.665-1.912.903-2.17.237-.258.514-.323.687-.323.172 0 .344.004.492.01.162.008.38-.063.594.453.228.547.74 1.802.805 1.932.064.13.107.28.02.453-.086.173-.13.28-.26.432-.13.15-.27.323-.385.45-.13.142-.268.296-.112.566.155.27.69 1.144 1.481 1.848.914.814 1.761 1.065 2.032 1.196.27.13.43.107.59-.074.156-.183.676-.78.857-1.047.18-.268.362-.224.608-.13.245.093 1.554.73 1.82 1.04-.15.22-.38.64-.13.88.94.46z" />
            </svg>
        </a>
    );
};

export default WhatsAppFloatingButton;
