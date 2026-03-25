import React from 'react';
import Link from 'next/link';
import fs from 'fs/promises';
import path from 'path';

// Define types for our data
interface Medicine {
    name: string;
    slug: string;
}

interface Category {
    name: string;
    slug: string;
}

interface CategoryData {
    title: string;
    slug: string;
    medicines: Medicine[];
    isStandalone?: boolean;
}

async function getCategories(): Promise<Category[]> {
    try {
        const filePath = path.join(process.cwd(), 'src/z-data/categories.json');
        const fileContents = await fs.readFile(filePath, 'utf8');
        const data = JSON.parse(fileContents);
        return data.categories || [];
    } catch (error) {
        console.error("DEBUG: Error reading categories.json:", error);
        return [];
    }
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

        if (!data.medicines) {
            data.medicines = [];
        }

        return data;
    } catch (error) {
        console.error(`DEBUG: Error reading/parsing category data for ${slug}:`, error);
        return null;
    }
}

async function getStandaloneMedicine(slug: string, title: string): Promise<CategoryData | null> {
    try {
        const filePath = path.join(process.cwd(), `src/z-data/medicines/${slug}.json`);
        try {
            await fs.access(filePath);
        } catch {
            return null;
        }

        const fileContents = await fs.readFile(filePath, 'utf8');
        const data = JSON.parse(fileContents);

        return {
            title: title,
            slug: slug,
            isStandalone: true,
            medicines: [
                { name: data.name, slug: data.slug }
            ]
        };
    } catch (error) {
        console.error(`DEBUG: Error reading standalone medicine ${slug}:`, error);
        return null;
    }
}

const ProductsPage = async () => {
    const categoriesList = await getCategories();

    // Fetch all category data in parallel
    const allCategoriesData = await Promise.all(
        categoriesList.map(async (cat) => {
            return await getCategoryData(cat.slug);
        })
    );

    // Filter out any nulls
    let categories = allCategoriesData.filter((c): c is CategoryData => c !== null);

    // Fetch standalone medicines
    const standaloneSlugs = [
        { slug: "5-mg-dapagliflozin-tablets-10351473", title: "Forxiga Tablet" },
        { slug: "moov-pain-relief-spray-10351475", title: "Pain Relief Spray" }
    ];

    const standaloneData = await Promise.all(
        standaloneSlugs.map(async (item) => {
            return await getStandaloneMedicine(item.slug, item.title);
        })
    );

    // Append standalone medicines to categories
    const validStandalone = standaloneData.filter((s): s is CategoryData => s !== null);
    categories = [...categories, ...validStandalone];

    if (categories.length === 0) {
        return (
            <div className="flex items-center justify-center min-h-[50vh]">
                <p className="text-gray-500">No product categories found.</p>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50/50 py-3 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 md:px-8 text-[11px] font-medium text-gray-400 uppercase tracking-widest">
                    <Link href="/" className="hover:text-primary transition-colors">Home Page</Link>
                    <span className="mx-2 text-gray-300">/</span>
                    <span className="text-gray-600">Our Products</span>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
                <header className="mb-14 relative">
                    <h1 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter">
                        Our Products
                    </h1>
                    <div className="absolute -bottom-4 left-0 w-20 h-1.5 bg-primary"></div>
                </header>

                <div className="space-y-24">
                    {categories.map((category) => {
                        const medicinesList = category.medicines || [];
                        const displayedMedicines = medicinesList.slice(0, 14);
                        const featuredMedicine = medicinesList.length > 0 ? medicinesList[0] : null;
                        const medicineCount = medicinesList.length;
                        const viewMoreLink = category.isStandalone ? `/${category.slug}` : `/category/${category.slug}`;

                        return (
                            <section key={category.slug} className="group scroll-mt-20" id={category.slug}>
                                <div className="flex items-center mb-8">
                                    <Link href={viewMoreLink} className="hover:text-[#cc0000] transition-colors">
                                        <h2 className="text-xl md:text-2xl font-bold text-gray-800 uppercase tracking-tight mr-6">
                                            {category.title || category.slug}
                                        </h2>
                                    </Link>
                                    <div className="flex-grow h-px bg-gray-100"></div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
                                    <div className="md:col-span-3 lg:col-span-3 flex flex-col items-center">
                                        <div className="w-full relative group/img cursor-pointer">
                                            <div className="absolute inset-0 bg-primary/5 -translate-x-2 translate-y-2 rounded-sm transition-transform group-hover/img:translate-x-0 group-hover/img:translate-y-0"></div>
                                            <div className="relative aspect-square border-2 border-gray-100 p-6 bg-white shadow-sm flex items-center justify-center overflow-hidden rounded-sm ring-1 ring-black/5">
                                                {featuredMedicine ? (
                                                    <img
                                                        src={`/images/${featuredMedicine.slug}.jpg`}
                                                        alt={featuredMedicine.name}
                                                        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover/img:scale-110"
                                                    />
                                                ) : (
                                                    <div className="text-gray-200 uppercase font-black text-[10px] tracking-widest text-center">No Image</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="mt-4 px-4 py-1.5 bg-gray-50 rounded-full border border-gray-100 shadow-sm">
                                            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                                                {category.isStandalone ? "1 Item Listed" : `${medicineCount} Items Listed`}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="md:col-span-9 lg:col-span-9">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10">
                                            {displayedMedicines.map((medicine) => (
                                                <Link
                                                    key={medicine.slug}
                                                    href={`/${medicine.slug}`}
                                                    className="flex items-center group/link py-1"
                                                >
                                                    <div className="mr-3 flex-shrink-0 w-2 h-2 rounded-full border border-gray-200 bg-gray-50 group-hover/link:bg-[#cc0000] group-hover/link:border-[#cc0000] transition-all duration-300"></div>
                                                    <span className="text-sm font-semibold text-[#005099] border-b border-transparent group-hover/link:text-[#cc0000] group-hover/link:border-[#cc0000] transition-all duration-300 leading-tight">
                                                        {medicine.name}
                                                    </span>
                                                </Link>
                                            ))}
                                            {medicineCount === 0 && (
                                                <div className="col-span-full py-8 text-center bg-gray-50/50 rounded-sm italic text-gray-400 text-sm border border-dashed">
                                                    Check back soon for additions.
                                                </div>
                                            )}
                                        </div>

                                        <div className="mt-12 flex items-center gap-4">
                                            <div className="h-px flex-grow bg-gradient-to-r from-transparent to-gray-50"></div>
                                            <Link href={viewMoreLink}>
                                                <button className="group/btn relative inline-flex items-center justify-center px-10 py-3 font-bold text-white transition-all duration-200 bg-[#cc0000] rounded-sm shadow-lg active:scale-95 uppercase text-[10px] tracking-[0.2em]">
                                                    {category.isStandalone ? "View Details" : "...More"}
                                                    <span className="ml-2 transition-transform group-hover/btn:translate-x-1">&raquo;</span>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        );
                    })}
                </div>
            </main>
        </div>
    );
};
export default ProductsPage;