import React from 'react';
import Link from 'next/link';
import { COMPANY_INFO } from '@/data/mockData';
import { Phone, MapPin } from 'lucide-react';

const Header = () => {
    return (
        <div className="bg-white border-b border-gray-100 py-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
                <Link href="/" className="text-2xl font-bold text-primary flex items-center hover:opacity-80 transition-opacity">
                    <span className="mr-2">🛡️</span>
                    <div>
                        <h1 className="leading-tight text-xl tracking-wider">{COMPANY_INFO.name}</h1>
                        <p className="text-[10px] text-muted font-normal">GST : {COMPANY_INFO.gst}</p>
                    </div>
                </Link>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
                <div className="flex items-center space-x-2 text-sm">
                    <div className="bg-primary/10 p-2 rounded-full">
                        <Phone size={16} className="text-primary" />
                    </div>
                    <div>
                        <p className="text-[10px] text-muted uppercase font-bold">Call us now</p>
                        <p className="font-semibold">{COMPANY_INFO.mobile}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
