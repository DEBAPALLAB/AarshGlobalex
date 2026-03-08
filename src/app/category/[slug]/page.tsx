import React from 'react';
import Link from 'next/link';
import fs from 'fs/promises';
import path from 'path';
import { notFound } from 'next/navigation';
import MedicineCard from '@/components/category/MedicineCard';

interface Medicine {
    name: string;
    slug: string;
    'card-info'?: Record<string, string>;
}

interface CategoryData {
    title: string;
    slug: string;
    description: string[];
    medicines: Medicine[];
}

async function getCategoryData(slug: string): Promise<CategoryData | null> {
    try {
        const filePath = path.join(process.cwd(), `src/z-data/category/${slug}.json`);
        try {
            await fs.access(filePath);
        } catch {
            return null;
        }

        const fileContents = await fs.readFile(filePath, 'utf8');
        const data = JSON.parse(fileContents);

        return data;
    } catch (error) {
        console.error(`DEBUG: Error reading category data for ${slug}:`, error);
        return null;
    }
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const category = await getCategoryData(slug);

    if (!category) {
        notFound();
    }

    const medicinesList = category.medicines || [];
    const descriptionParagraphs = category.description || [];

    return (
        <div className="bg-white min-h-screen">
            {/* Breadcrumbs */}
            <div className="bg-gray-50/50 py-3 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 md:px-8 text-[11px] font-medium text-gray-400 uppercase tracking-widest">
                    <Link href="/" className="hover:text-[#cc0000] transition-colors">Home Page</Link>
                    <span className="mx-2 text-gray-300">/</span>
                    <Link href="/our-products" className="hover:text-[#cc0000] transition-colors">Our Products</Link>
                    <span className="mx-2 text-gray-300">/</span>
                    <span className="text-gray-600">{category.title}</span>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-12">
                <header className="mb-10">
                    <h1 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter mb-4">
                        {category.title}
                    </h1>
                    <div className="w-20 h-1.5 bg-[#b19470]"></div>
                </header>

                {/* About Section */}
                {descriptionParagraphs.length > 0 && (
                    <section className="mb-12 bg-gray-50/30 p-6 md:p-8 rounded-sm border border-gray-100 italic text-gray-700 leading-relaxed shadow-sm">
                        <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wider mb-4 not-italic">About {category.title}</h2>
                        {descriptionParagraphs.map((para, idx) => (
                            <p key={idx} className={idx < descriptionParagraphs.length - 1 ? "mb-4" : ""}>
                                {para}
                            </p>
                        ))}
                    </section>
                )}

                {/* Product List */}
                <div className="space-y-6">
                    {medicinesList.map((medicine) => (
                        <MedicineCard key={medicine.slug} medicine={medicine} />
                    ))}

                    {medicinesList.length === 0 && (
                        <div className="py-20 text-center bg-gray-50/50 rounded-sm italic text-gray-400 border border-dashed">
                            No products found in this category.
                        </div>
                    )}
                </div>

                <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
                    <Link href="/our-products">
                        <button className="group inline-flex items-center text-sm font-bold text-[#005099] hover:text-[#cc0000] transition-colors uppercase tracking-widest">
                            <span className="mr-2 transition-transform group-hover:-translate-x-1">&lsaquo;</span>
                            Back to All Products
                        </button>
                    </Link>
                    <div className="flex items-center space-x-1">
                        <div className="h-px w-8 bg-gray-200"></div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">{medicinesList.length} Items Listed</span>
                        <div className="h-px w-8 bg-gray-200"></div>
                    </div>
                </div>
            </main>
        </div>
    );
}
