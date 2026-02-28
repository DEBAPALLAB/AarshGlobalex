import React from 'react';
import { notFound } from 'next/navigation';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import MainLayout from '@/components/layout/MainLayout';

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function DynamicPage({ params }: PageProps) {
    const { slug } = await params;

    // Check if it's a category page (remove .html if present)
    const cleanSlug = slug.replace('.html', '');

    const category = CATEGORIES.find(c => c.slug === cleanSlug);
    if (category) {
        const categoryProducts = PRODUCTS.filter(p => p.categorySlug === category.slug);
        return (
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
                <header className="mb-12">
                    <h1 className="text-3xl font-bold text-gray-800 border-l-4 border-primary pl-4 uppercase tracking-tighter">
                        {category.name}
                    </h1>
                </header>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {categoryProducts.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                    {categoryProducts.length === 0 && (
                        <p className="col-span-full text-gray-500 text-center py-12">No products found in this category.</p>
                    )}
                </div>
            </div>
        );
    }

    // Check if it's a product detail page
    // Pattern: [slug]-[id].html (or just [slug])
    const product = PRODUCTS.find(p => {
        const productFullSlug = `${p.slug}-${p.id}`;
        return p.slug === cleanSlug || productFullSlug === cleanSlug;
    });

    if (product) {
        return (
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-gray-50 p-8 rounded-sm overflow-hidden flex items-center justify-center min-h-[400px]">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    <div className="space-y-6">
                        <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
                        <p className="text-primary font-bold uppercase tracking-widest text-xs">{product.category}</p>

                        <div className="border-t border-b border-gray-100 py-6">
                            <h2 className="text-lg font-bold mb-4 uppercase text-gray-700">Product Specifications</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {Object.entries(product.specifications).map(([key, value]) => (
                                    <div key={key} className="flex flex-col">
                                        <span className="text-[10px] text-gray-400 uppercase font-bold">{key}</span>
                                        <span className="text-sm font-medium text-gray-700">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-lg font-bold uppercase text-gray-700">Product Description</h2>
                            <p className="text-gray-600 leading-relaxed">{product.description}</p>
                        </div>

                        <button className="bg-primary text-white px-10 py-4 rounded-sm font-bold uppercase shadow-lg hover:shadow-xl transition-shadow">
                            Get Best Quote
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return notFound();
}

export async function generateStaticParams() {
    const categoryParams = CATEGORIES.map(c => ({ slug: `${c.slug}.html` }));
    const productParams = PRODUCTS.map(p => ({ slug: `${p.slug}-${p.id}.html` }));

    return [
        ...categoryParams,
        ...productParams
    ];
}
