import Link from "next/link";
import Hero from "@/components/home/Hero";
import ProductCard from "@/components/ui/ProductCard";
import { PRODUCTS } from "@/data/products";
import { ShieldCheck, Truck, Clock, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-0 pb-16">
      <Hero />

      {/* Hot Deals / Featured */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-4">
        <div className="heading-divider">
          <h2>Hot Deals</h2>
          <div className="divider-line" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {PRODUCTS.slice(0, 4).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* About Section Teaser */}
      <section className="bg-texture py-20 mt-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-14 items-center">
          <div className="lg:col-span-2 space-y-6 text-center md:text-left">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#a07850' }}>
              About Us
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold leading-snug text-gray-900"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
            >
              Delivering Excellence in Healthcare with Specialized Pharmaceutical Solutions
            </h2>
            <div className="h-[2px] w-10 mx-auto md:mx-0" style={{ background: '#a07850' }} />
            <p className="text-gray-600 leading-relaxed text-sm md:text-[15px]">
              Aarsh Globalex is a leading name in the pharmaceutical industry, epitomizing excellence through our complete range of pharmaceutical formulations. We stick strictly to quality as a trader, supplier, and exporter of pharmaceutical products that are of international standards.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm md:text-[15px]">
              We specialize in developing and improving pharmaceutical formulations through advanced R&D, with specific experience in complex therapeutic areas such as oncology and antifungal drugs.
            </p>
            <div className="pt-2 flex justify-center md:justify-start">
              <Link href="/company-profile">
                <button
                  className="text-white text-sm font-semibold px-7 py-2.5 rounded-[3px] uppercase tracking-wider transition-all hover:opacity-90"
                  style={{ background: '#a07850' }}
                >
                  Read More
                </button>
              </Link>
            </div>
          </div>
          <div className="relative aspect-4/3 rounded-[3px] overflow-hidden shadow-2xl">
            <img
              src="https://cpimg.tistatic.com/08611956/b/4/melacare.jpg"
              alt="Quality Manufacturing"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Most Popular Products */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="heading-divider">
          <h2>Most Popular Products</h2>
          <div className="divider-line" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {PRODUCTS.slice(0, 4).map((product) => (
            <ProductCard key={`${product.id}-popular`} {...product} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link
            href="/our-products"
            className="text-sm font-semibold px-8 py-2.5 rounded-[3px] uppercase tracking-wider transition-all hover:bg-[#a07850] hover:text-white"
            style={{ color: '#a07850', border: '1.5px solid #a07850' }}
          >
            View All Products
          </Link>
        </div>
      </section>

      {/* Features / Trust Bar */}
      <section className="py-14" style={{ background: '#1a1410' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              Icon: ShieldCheck,
              title: 'Quality Assured',
              desc: 'Strict adherence to GMP standards',
            },
            {
              Icon: Truck,
              title: 'Global Shipping',
              desc: 'Reliable worldwide export network',
            },
            {
              Icon: Clock,
              title: 'Quick Delivery',
              desc: 'Efficient & timely supply chain',
            },
            {
              Icon: Award,
              title: 'Expert Support',
              desc: 'Professional R&D team on hand',
            },
          ].map(({ Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center text-center space-y-3">
              <div
                className="w-12 h-12 flex items-center justify-center rounded-full"
                style={{ background: 'rgba(160,120,80,0.15)', border: '1px solid rgba(160,120,80,0.25)' }}
              >
                <Icon size={22} style={{ color: '#c4a882' }} />
              </div>
              <h3 className="font-semibold text-xs uppercase tracking-widest text-white">
                {title}
              </h3>
              <p className="text-[11px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
