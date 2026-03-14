import Link from "next/link";
import Hero from "@/components/home/Hero";
import ProductCard from "@/components/ui/ProductCard";
import { PRODUCTS } from "@/data/products";
import { ShieldCheck, Truck, Clock, Award } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Hero />



      {/* About Section Teaser */}
      <section className="bg-texture bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2 space-y-6 text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">
              Delivering Excellence in Healthcare with Abacavir, Amlodipine, and Specialized Pharmaceutical Solutions for a Healthier Tomorrow.
            </h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto md:mx-0 rounded-full"></div>
            <p className="text-gray-600 leading-relaxed text-sm">
              Clan Numen is a leading name in the pharmaceutical industry, epitomizing excellence through our complete range of pharmaceutical formulations. We stick strictly to quality as a trader, supplier, and exporter of pharmaceutical products that are of international standards.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              We specialize in developing and improving pharmaceutical formulations through our advanced R&D activities, with specific experience in the more complex therapeutic areas such as oncology and antifungal drugs.
            </p>
            <div className="pt-4 flex justify-center md:justify-start">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all shadow-lg shadow-blue-500/30 hover:-translate-y-1 hover:shadow-xl">
                Read More
              </button>
            </div>
          </div>
          <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
            <img
              src="https://cpimg.tistatic.com/08611956/b/4/melacare.jpg"
              alt="Quality Manufacturing"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Most Popular Products */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-900 to-blue-500 tracking-tight">
            Most Popular Products
          </h2>
          <div className="h-1.5 w-24 bg-blue-500 mx-auto mt-4 rounded-full opacity-80"></div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.slice(0, 4).map((product) => (
            <ProductCard key={`${product.id}-popular`} {...product} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link href="/our-products" className="bg-white border-2 border-blue-100 text-blue-700 px-10 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-blue-50 hover:border-blue-200 transition-all shadow-sm">
            View all products
          </Link>
        </div>
      </section>

      {/* Features/Trust Section */}
      <section className="bg-linear-to-r from-blue-700 via-blue-600 to-blue-800 py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 shadow-xl">
              <ShieldCheck size={36} className="text-blue-100" />
            </div>
            <h3 className="font-bold text-xs md:text-sm uppercase tracking-wider text-blue-50">Quality Assured</h3>
            <p className="text-[11px] text-blue-200">Strict adherence to GMP standards</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 shadow-xl">
              <Truck size={36} className="text-blue-100" />
            </div>
            <h3 className="font-bold text-xs md:text-sm uppercase tracking-wider text-blue-50">Global Shipping</h3>
            <p className="text-[11px] text-blue-200">Reliable export network</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 shadow-xl">
              <Clock size={36} className="text-blue-100" />
            </div>
            <h3 className="font-bold text-xs md:text-sm uppercase tracking-wider text-blue-50">Quick Delivery</h3>
            <p className="text-[11px] text-blue-200">Efficient supply chain</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 shadow-xl">
              <Award size={36} className="text-blue-100" />
            </div>
            <h3 className="font-bold text-xs md:text-sm uppercase tracking-wider text-blue-50">Expert Support</h3>
            <p className="text-[11px] text-blue-200">Professional R&D team</p>
          </div>
        </div>
      </section>
    </div>
  );
}
