import React from 'react';
import ProductCard from '@/components/ui/ProductCard';
import { PRODUCTS, CATEGORIES } from '@/data/products';

const ProductsPage = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
            <h1 className="text-3xl font-bold text-gray-800 border-l-4 border-primary pl-4 uppercase tracking-tighter mb-12">Our Products</h1>

            <div className="space-y-16">
                {CATEGORIES.map((category) => {
                    const categoryProducts = PRODUCTS.filter(p => p.categorySlug === category.slug);
                    return (
                        <section key={category.slug} id={category.slug} className="space-y-8">
                            <div className="flex items-center space-x-4">
                                <h2 className="text-xl font-bold text-gray-800 shrink-0">{category.name}</h2>
                                <div className="h-px bg-gray-200 grow"></div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {categoryProducts.map((product) => (
                                    <ProductCard key={`${category.slug}-${product.id}`} {...product} />
                                ))}
                                {categoryProducts.length === 0 && (
                                    <p className="text-gray-400 text-xs italic">Products coming soon...</p>
                                )}
                            </div>

                            {categoryProducts.length > 0 && (
                                <div className="flex justify-end pt-4">
                                    <button className="bg-primary text-white px-6 py-2 rounded-sm text-xs font-bold uppercase transition-all hover:bg-primary/90">
                                        View More {category.name}
                                    </button>
                                </div>
                            )}
                        </section>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductsPage;
