export interface Product {
    id: string;
    name: string;
    slug: string;
    category: string;
    categorySlug: string;
    image: string;
    specifications: Record<string, string>;
    description: string;
}

export const PRODUCTS: Product[] = [
    {
        id: "10351204",
        name: "300 MG Abacavir Tablets IP",
        slug: "300-mg-abacavir-tablets-ip",
        category: "Pharmaceutical Tablets",
        categorySlug: "pharmaceutical-tablets",
        image: "https://cpimg.tistatic.com/08611956/b/4/300-mg-abacavir-tablets-ip.jpg", // Example URL based on pattern
        specifications: {
            "Dosage": "300 mg",
            "Drug Type": "General Medicines",
            "Packaging": "30 tablet",
            "Origin": "India"
        },
        description: "Used for the treatment of HIV infection by slowing down the growth of the virus."
    },
    {
        id: "10351293",
        name: "250 MG Abiraterone Acetate Tablets",
        slug: "250-mg-abiraterone-acetate-tablets",
        category: "Anti Cancer Tablets",
        categorySlug: "anti-cancer-tablets",
        image: "https://cpimg.tistatic.com/08611959/b/4/250-mg-abiraterone-acetate-tablets.jpg",
        specifications: {
            "Fermentation Smell": "Normal Smell",
            "Origin": "India",
            "Shelf Life": "12-24 Months",
            "Storage": "Dry place"
        },
        description: "A highly effective medication used for the treatment of prostate cancer by blocking testosterone production."
    },
    {
        id: "10351294",
        name: "Memantine Hydrochloride Tablets IP",
        slug: "memantine-hydrochloride-tablets-ip",
        category: "Anti Cancer Tablets",
        categorySlug: "anti-cancer-tablets",
        image: "https://cpimg.tistatic.com/08611957/b/4/memantine.jpg",
        specifications: {
            "Dosage Form": "Tablet",
            "Origin": "India",
            "Shelf Life": "12-24 Months"
        },
        description: "Used for the treatment of moderate to severe Alzheimer's type dementia."
    },
    {
        id: "10351295",
        name: "2 MG Melphalan Tablets IP",
        slug: "2-mg-melphalan-tablets-ip",
        category: "Anti Cancer Tablets",
        categorySlug: "anti-cancer-tablets",
        image: "https://cpimg.tistatic.com/08611958/b/4/melphalan.jpg",
        specifications: {
            "Dosage Form": "Tablet",
            "Storage": "Dry place",
            "Origin": "India"
        },
        description: "Used for the treatment of multiple myeloma and certain types of ovarian cancer."
    },
    {
        id: "10351296",
        name: "Anastrozole Tablets",
        slug: "anastrozole-tablets",
        category: "Anti Cancer Tablets",
        categorySlug: "anti-cancer-tablets",
        image: "https://cpimg.tistatic.com/08611960/b/4/anastrozole.jpg",
        specifications: {
            "Drug Type": "General Medicines",
            "Storage": "Cool & Dry Place",
            "Shelf Life": "12-24 Months"
        },
        description: "Used for the treatment of breast cancer in postmenopausal women."
    }
];

export const CATEGORIES = [
    { name: "Pharmaceutical Tablets", slug: "pharmaceutical-tablets" },
    { name: "Anti Cancer Tablets", slug: "anti-cancer-tablets" },
    { name: "Pharmaceutical Injections", slug: "pharmaceutical-injections" },
    { name: "Pharmaceutical Capsules", slug: "pharmaceutical-capsules" },
    { name: "Hypertension Medicine", slug: "hypertension-medicine" },
    { name: "Anti Depressant Tablets", slug: "anti-depressant-tablets" },
    { name: "Eye Drops", slug: "eye-drops" },
    { name: "Antidiabetic Medicine", slug: "antidiabetic-medicine" },
    { name: "Skin Ointment", slug: "skin-ointment" },
    { name: "Veterinary Medicines", slug: "veterinary-medicines" },
    { name: "Pain Killers", slug: "pain-killers" },
    { name: "Erectile Dysfunction Medicine", slug: "erectile-dysfunction-medicine" },
    { name: "Nasal Spray", slug: "nasal-spray" },
    { name: "Antibiotic Tablets", slug: "antibiotic-tablets" },
    { name: "Cardiac Medicines", slug: "cardiac-medicines" },
    { name: "Pharmaceutical Cream", slug: "pharmaceutical-cream" },
    { name: "Minoxidil Topical Solution", slug: "minoxidil-topical-solution" },
    { name: "Kwik Pen", slug: "kwik-pen" },
    { name: "Pharmaceutical Gel", slug: "pharmaceutical-gel" },
    { name: "Asthma Inhaler", slug: "asthma-inhaler" },
    { name: "Pain Relief Oil", slug: "pain-relief-oil" },
    { name: "Antihypertensive Tablet", slug: "antihypertensive-tablet" },
    { name: "Weight Loss Medicine", slug: "weight-loss-medicine" },
];
