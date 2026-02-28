import Link from "next/link";
import Hero from "@/components/home/Hero";
import ProductCard from "@/components/ui/ProductCard";
import { PRODUCTS } from "@/data/products";
import { ShieldCheck, Truck, Clock, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-12 pb-12">
      <Hero />

      {/* Hot Deals / Featured */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-12">
        <div className="border-b-2 border-primary/20 flex justify-center mb-8">
          <h2 className="bg-white px-8 -mb-[2px] border-b-2 border-primary text-xl font-bold uppercase tracking-widest text-gray-800 py-2">
            Hot Deals
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.slice(0, 4).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* About Section Teaser */}
      <section className="bg-texture bg-[#f9f7f4] py-16 mt-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2 space-y-6 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800 leading-tight">
              Delivering Excellence in Healthcare with Abacavir, Amlodipine, and Specialized Pharmaceutical Solutions for a Healthier Tomorrow.
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto md:mx-0"></div>
            <p className="text-gray-600 leading-relaxed text-sm">
              Clan Numen is a leading name in the pharmaceutical industry, epitomizing excellence through our complete range of pharmaceutical formulations. We stick strictly to quality as a trader, supplier, and exporter of pharmaceutical products that are of international standards.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              We specialize in developing and improving pharmaceutical formulations through our advanced R&D activities, with specific experience in the more complex therapeutic areas such as oncology and antifungal drugs.
            </p>
            <div className="pt-4 flex justify-center md:justify-start">
              <button className="bg-primary text-white px-8 py-2.5 rounded-sm text-sm font-bold uppercase transition-all hover:shadow-lg">
                Read More
              </button>
            </div>
          </div>
          <div className="relative aspect-4/3 rounded-sm overflow-hidden shadow-2xl">
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
        <div className="border-b-2 border-primary/20 flex justify-center mb-8">
          <h2 className="bg-white px-8 -mb-[2px] border-b-2 border-primary text-xl font-bold uppercase tracking-widest text-gray-800 py-2">
            Most Popular Products
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.slice(0, 4).map((product) => (
            <ProductCard key={`${product.id}-popular`} {...product} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link href="/our-products" className="bg-primary/10 text-primary border border-primary px-8 py-2 rounded-sm text-sm font-bold uppercase hover:bg-primary hover:text-white transition-all">
            View all products
          </Link>
        </div>
      </section>

      {/* Features/Trust Section */}
      <section className="bg-[#2d2d2d] py-12 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center space-y-3">
            <ShieldCheck size={40} className="text-primary" />
            <h3 className="font-bold text-[11px] md:text-sm uppercase">Quality Assured</h3>
            <p className="text-[10px] text-gray-400">Strict adherence to GMP standards</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-3">
            <Truck size={40} className="text-primary" />
            <h3 className="font-bold text-[11px] md:text-sm uppercase">Global Shipping</h3>
            <p className="text-[10px] text-gray-400">Reliable export network</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-3">
            <Clock size={40} className="text-primary" />
            <h3 className="font-bold text-[11px] md:text-sm uppercase">Quick Delivery</h3>
            <p className="text-[10px] text-gray-400">Efficient supply chain</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-3">
            <Award size={40} className="text-primary" />
            <h3 className="font-bold text-[11px] md:text-sm uppercase">Expert Support</h3>
            <p className="text-[10px] text-gray-400">Professional R&D team</p>
          </div>
        </div>
      </section>
    </div>
  );
}
