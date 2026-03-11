import React from 'react';
import Link from 'next/link';
import { COMPANY_INFO } from '@/data/mockData';
import { Phone } from 'lucide-react';

const Header = () => {
    return (
        <div className="bg-white border-b py-3 px-6 md:px-12" style={{ borderColor: '#ede8e0' }}>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
                {/* Logo / Brand */}
                <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <span className="text-2xl">🛡️</span>
                    <div>
                        <h1
                            className="text-xl leading-tight tracking-wide"
                            style={{ fontFamily: "var(--font-playfair, Georgia, serif)", color: '#a07850', fontWeight: 700 }}
                        >
                            {COMPANY_INFO.name}
                        </h1>
                        <p className="text-[10px] font-medium uppercase tracking-[0.15em]" style={{ color: '#9ca3af', marginTop: '1px' }}>
                            GST : {COMPANY_INFO.gst}
                        </p>
                    </div>
                </Link>

                {/* Contact */}
                <div className="flex items-center gap-3">
                    <div
                        className="w-9 h-9 flex items-center justify-center rounded-full"
                        style={{ background: 'rgba(160,120,80,0.1)' }}
                    >
                        <Phone size={15} style={{ color: '#a07850' }} />
                    </div>
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.18em] font-semibold" style={{ color: '#9ca3af' }}>
                            Call Us Now
                        </p>
                        <p className="text-sm font-semibold" style={{ color: '#1c1c1e' }}>
                            {COMPANY_INFO.mobile}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
