import Image from 'next/image';
import Link from 'next/link';
import { COMPANY_INFO, SOCIAL_LINKS } from '@/data/mockData';
import { Phone } from 'lucide-react';

const Header = () => {
    return (
        <div className="bg-white border-b border-gray-100 py-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
                <Link href="/" className="text-2xl font-bold text-primary flex items-center hover:opacity-80 transition-opacity">
                    <Image src="/favicon.ico" alt="Logo" width={60} height={60} className="mr-2"/>
                    <div>
                        <h1 className="leading-tight text-xl tracking-wider">{COMPANY_INFO.name}</h1>
                        <p className="text-[10px] text-muted font-normal">GST : {COMPANY_INFO.gst}</p>
                    </div>
                </Link>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
                {/* Social Media Links */}
                <div className="flex items-center space-x-3">
                    {SOCIAL_LINKS.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-all hover:scale-110"
                            aria-label={social.name}
                        >
                            <img
                                src={social.icon}
                                alt={social.name}
                                className="w-4 h-4"
                            />
                        </a>
                    ))}
                </div>

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
