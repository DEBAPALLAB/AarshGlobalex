import React from 'react';
import fs from 'fs/promises';
import path from 'path';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Share2, ArrowRight } from 'lucide-react';
import InquiryStickyFooter from '@/components/ui/InquiryStickyFooter';
import SafeImage from '@/components/ui/SafeImage';
import ProductImageZoom from '@/components/ui/ProductImageZoom';
import SendEnquiryButton from '@/components/ui/SendEnquiryButton';

interface MedicineData {
    name: string;
    slug: string;
    description: string[]; // Some use list, some use string. Let's handle both.
    about?: string;
    specifications: Record<string, string>;
    information: Record<string, string>;
    faq: { q: string; a: string }[];
    image_url: string;
}

async function getMedicineData(slug: string): Promise<MedicineData | null> {
    try {
        // Remove .html if present
        const cleanSlug = slug.replace('.html', '');
        const filePath = path.join(process.cwd(), `src/z-data/medicines/${cleanSlug}.json`);

        try {
            await fs.access(filePath);
        } catch {
            return null;
        }

        const fileContents = await fs.readFile(filePath, 'utf8');
        const data = JSON.parse(fileContents);

        return data;
    } catch (error) {
        console.error(`DEBUG: Error reading medicine data for ${slug}:`, error);
        return null;
    }
}

export default async function MedicinePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const medicine = await getMedicineData(slug);

    if (!medicine) {
        // If it's not a medicine, maybe it's a legacy route or error
        // But for now, just 404
        notFound();
    }

    const specs = Object.entries(medicine.specifications || {});
    const tradeInfo = Object.entries(medicine.information || {});

    return (
        <div className="bg-white min-h-screen pb-24">
            {/* Breadcrumbs */}
            <div className="bg-[#f8f9fa] py-2.5 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 md:px-8 text-[11px] font-medium text-gray-400 uppercase tracking-widest flex items-center gap-2">
                    <Link href="/" className="hover:text-[#cc0000] transition-colors">Home Page</Link>
                    <span className="text-gray-300">/</span>
                    <Link href="/our-products" className="hover:text-[#cc0000] transition-colors">Our Products</Link>
                    <span className="text-gray-300">/</span>
                    <span className="text-gray-600 truncate">{medicine.name}</span>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row gap-12 mb-16">
                    {/* Left: Product Images with Zoom */}
                    <div className="lg:w-1/2 flex gap-4">
                        {/* Thumbnails (Simulated for UI richness) */}
                        <div className="hidden sm:flex flex-col gap-3 shrink-0">
                            {[1].map((i) => (
                                <div key={i} className="w-16 h-16 border border-[#cc0000] p-1 rounded-sm bg-white cursor-pointer shadow-sm">
                                    <SafeImage
                                        src={`/images/${medicine.slug}.jpg`}
                                        alt={medicine.name}
                                        className="w-full h-full object-contain"
                                        fallbackSrc="https://placehold.co/100x100?text=No+Image"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Main Image with Progressive Zoom */}
                        <ProductImageZoom
                            src={`/images/${medicine.slug}.jpg`}
                            alt={medicine.name}
                        />
                    </div>

                    {/* Right: Summary & Quick Link Actions */}
                    <div className="lg:w-1/2 flex flex-col justify-start">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-8 bg-[#cc0000]"></div>
                            <span className="text-[10px] font-bold text-[#cc0000] uppercase tracking-widest leading-none pt-0.5">Premium Pharmaceutical</span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter mb-8 leading-[1.1]">
                            {medicine.name}
                        </h1>

                        <div className="space-y-6 mb-12">
                            <div className="flex items-center gap-10">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Drug Type</span>
                                    <span className="font-black text-gray-900 text-sm uppercase">{medicine.specifications?.['Drug Type'] || 'General Medicines'}</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Category</span>
                                    <span className="font-black text-gray-900 text-sm uppercase">{medicine.specifications?.['Physical Form'] || 'Tablets'}</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto flex flex-wrap gap-4">
                            <SendEnquiryButton
                                medicineName={medicine.name}
                                medicineSlug={medicine.slug}
                                variant="primary"
                            />
                            <button className="flex-grow md:flex-grow-0 px-10 py-5 border-2 border-[#005099] text-[#005099] text-xs font-black uppercase tracking-widest rounded-sm hover:bg-[#005099] hover:text-white transition-all transform hover:-translate-y-1 active:scale-95">
                                WhatsApp Us
                            </button>
                        </div>
                    </div>
                </div>

                {/* Grid Sections: Specifications and Trade Information */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Specifications */}
                    <section>
                        <h2 className="bg-[#005099] text-white px-6 py-3.5 text-sm font-bold uppercase tracking-[0.2em] rounded-t-sm shadow-md">
                            {medicine.name} Specification
                        </h2>
                        <div className="border border-gray-100 border-t-0 rounded-b-sm overflow-hidden bg-white">
                            {specs.map(([key, value], idx) => (
                                <div key={key} className={`flex p-4 text-sm ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                                    <span className="w-1/3 font-bold text-gray-500 uppercase text-[11px] tracking-wider">{key}</span>
                                    <span className="w-2/3 font-semibold text-gray-800">{value}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Trade Information */}
                    <section>
                        <h2 className="bg-[#cc0000] text-white px-6 py-3.5 text-sm font-bold uppercase tracking-[0.2em] rounded-t-sm shadow-md">
                            {medicine.name} Trade Information
                        </h2>
                        <div className="border border-gray-100 border-t-0 rounded-b-sm overflow-hidden bg-white">
                            {tradeInfo.map(([key, value], idx) => (
                                <div key={key} className={`flex p-4 text-sm ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                                    <span className="w-1/3 font-bold text-gray-500 uppercase text-[11px] tracking-wider">{key}</span>
                                    <span className="w-2/3 font-semibold text-gray-800">{value}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* About / Long Description */}
                {(medicine.about || medicine.description) && (
                    <section className="mb-16">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-[2px] w-12 bg-[#b19470]"></div>
                            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter">About {medicine.name}</h2>
                        </div>
                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed italic bg-gray-50/30 p-8 rounded-sm border border-gray-100 border-l-8 border-l-[#b19470] shadow-sm">
                            {medicine.about || (Array.isArray(medicine.description) ? medicine.description.join(' ') : medicine.description)}
                        </div>
                    </section>
                )}

                {/* FAQ Section */}
                {medicine.faq && medicine.faq.length > 0 && (
                    <section className="mb-16">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="h-[2px] w-12 bg-[#005099]"></div>
                            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter">FAQs of {medicine.name}</h2>
                        </div>
                        <div className="space-y-8">
                            {medicine.faq.map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-sm border border-gray-50 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="flex items-start gap-4 text-gray-900 font-bold mb-3">
                                        <span className="shrink-0 w-8 h-8 bg-gray-100 flex items-center justify-center rounded-sm text-xs font-black text-gray-400">Q</span>
                                        <span className="pt-1">{item.q}</span>
                                    </h3>
                                    <p className="flex items-start gap-4 text-gray-600 leading-relaxed">
                                        <span className="shrink-0 w-8 h-8 bg-[#005099]/5 flex items-center justify-center rounded-sm text-xs font-black text-[#005099]">A</span>
                                        <span className="pt-1">{item.a}</span>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
}
