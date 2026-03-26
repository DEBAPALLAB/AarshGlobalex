import Link from "next/link";
import Hero from "@/components/home/Hero";
import ProductCard from "@/components/ui/ProductCard";
import { PRODUCTS } from "@/data/products";
import { ShieldCheck, Truck, Clock, Award, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Hero />



      {/* About Section Teaser */}
      <section className="bg-texture bg-slate-50 py-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-40 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Text Information */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a365d] leading-tight">
                Trusted Global Exporter of High-Quality Pharmaceutical Products
              </h2>
              <div className="h-1.5 w-24 bg-[#2e7d32] rounded-full"></div>
              <p className="text-slate-700 leading-relaxed text-lg font-medium">
                <span className="font-bold text-[#1a365d]">Aarsh Globalex</span> is a trusted international trading and export company based in India, specializing in delivering high-quality products and reliable global supply solutions. We serve businesses worldwide with a strong commitment to quality, transparency, and timely delivery.
              </p>
              <p className="text-slate-600 leading-relaxed">
                As a growing global export company, we provide complete end-to-end solutions including product sourcing, quality assurance, export documentation, and international logistics. Our efficient processes and strong supplier network ensure that every shipment meets international standards and client expectations.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We work closely with verified manufacturers and logistics partners to deliver secure, fast, and hassle-free international shipping, helping our clients expand their business in global markets.
              </p>
              
              <div className="pt-6">
                <Link href="/company-profile">
                  <button className="bg-[#1a365d] text-white px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all shadow-lg hover:bg-[#2e7d32] hover:-translate-y-1 hover:shadow-xl flex items-center space-x-2">
                    <span>Read More</span>
                    <ArrowRight size={16} />
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Column: Grid Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
              {/* Mission */}
              <div className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100/80 transform transition-all hover:-translate-y-1 hover:shadow-2xl space-y-4 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                <h3 className="font-extrabold text-[#1a365d] text-xl relative z-10">Our Mission</h3>
                <p className="text-[15px] text-slate-700 leading-relaxed relative z-10">
                  To provide high-quality export products and reliable international trade solutions while building long-term trust with global clients.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100/80 transform transition-all hover:-translate-y-1 hover:shadow-2xl space-y-4 mt-0 sm:mt-10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-green-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                <h3 className="font-extrabold text-[#1a365d] text-xl relative z-10">Our Vision</h3>
                <p className="text-[15px] text-slate-700 leading-relaxed relative z-10">
                  To become a leading global export company known for reliability, professionalism, and excellence in international trade.
                </p>
              </div>
              
              {/* Services */}
              <div className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100/80 transform transition-all hover:-translate-y-1 hover:shadow-2xl space-y-4 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                <h3 className="font-extrabold text-[#1a365d] text-xl relative z-10">Export Services</h3>
                <ul className="text-[15px] text-slate-700 font-medium space-y-3 relative z-10 pl-1">
                  <li className="flex items-start"><span className="text-[#2e7d32] mr-2">✓</span> International Product Sourcing</li>
                  <li className="flex items-start"><span className="text-[#2e7d32] mr-2">✓</span> Quality Inspection & Assurance</li>
                  <li className="flex items-start"><span className="text-[#2e7d32] mr-2">✓</span> Export Documentation & Compliance</li>
                  <li className="flex items-start"><span className="text-[#2e7d32] mr-2">✓</span> Global Shipping & Logistics</li>
                  <li className="flex items-start"><span className="text-[#2e7d32] mr-2">✓</span> Supplier & Manufacturer Coordination</li>
                </ul>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100/80 transform transition-all hover:-translate-y-1 hover:shadow-2xl space-y-4 mt-0 sm:mt-10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-amber-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                <h3 className="font-extrabold text-[#1a365d] text-xl relative z-10">Why Choose Us</h3>
                <ul className="text-[15px] text-slate-700 font-medium space-y-3 relative z-10 pl-1">
                  <li className="flex items-start"><span className="text-[#2e7d32] mr-2">✓</span> Trusted International Export Partner</li>
                  <li className="flex items-start"><span className="text-[#2e7d32] mr-2">✓</span> Reliable Global Supply Chain Solutions</li>
                  <li className="flex items-start"><span className="text-[#2e7d32] mr-2">✓</span> High-Quality Products & Verified Suppliers</li>
                  <li className="flex items-start"><span className="text-[#2e7d32] mr-2">✓</span> Smooth Export Documentation Process</li>
                  <li className="flex items-start"><span className="text-[#2e7d32] mr-2">✓</span> Fast & Secure Worldwide Delivery</li>
                  <li className="flex items-start"><span className="text-[#2e7d32] mr-2">✓</span> Customer-Centric Business Approach</li>
                </ul>
              </div>
            </div>
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

      {/* Our Certifications */}
      <section className="bg-slate-50 py-16 md:py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
          
          {/* Left Title Area */}
          <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left shrink-0">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a365d] leading-tight font-sans tracking-tight">
              Our<br className="hidden md:block" />
              Certifications
            </h2>
            <div className="h-1.5 w-16 bg-red-600 mt-6 rounded-full"></div>
          </div>

          {/* Right Logos Grid */}
          <div className="md:w-2/3 w-full grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 items-center justify-items-center">
            <img src="/images/certifications/c1.webp" alt="GST Council" className="h-20 sm:h-24 md:h-28 object-contain hover:scale-105 transition-transform duration-300 drop-shadow-sm" />
            <img src="/images/certifications/c2.jpeg" alt="FDA Maharashtra" className="h-20 sm:h-24 md:h-28 object-contain hover:scale-105 transition-transform duration-300 drop-shadow-sm" />
            <img src="/images/certifications/c3.webp" alt="MSME" className="h-20 sm:h-24 md:h-28 object-contain hover:scale-105 transition-transform duration-300 drop-shadow-sm" />
            <img src="/images/certifications/c4.jpeg" alt="Pharmexcil" className="h-16 sm:h-20 md:h-24 object-contain hover:scale-105 transition-transform duration-300 drop-shadow-sm" />
            <img src="/images/certifications/c5.webp" alt="Directorate General of Foreign Trade" className="h-20 sm:h-24 md:h-28 object-contain hover:scale-105 transition-transform duration-300 drop-shadow-sm" />
            <img src="/images/certifications/c6.png" alt="ISO 9001:2015" className="h-20 sm:h-24 md:h-28 object-contain hover:scale-105 transition-transform duration-300 drop-shadow-sm" />
            <img src="/images/certifications/c7.jpeg" alt="Certification 7" className="h-20 sm:h-24 md:h-28 object-contain hover:scale-105 transition-transform duration-300 drop-shadow-sm" />
            <img src="/images/certifications/c8.jpeg" alt="Certification 8" className="h-20 sm:h-24 md:h-28 object-contain hover:scale-105 transition-transform duration-300 drop-shadow-sm" />
          </div>

        </div>
      </section>
    </div>
  );
}
