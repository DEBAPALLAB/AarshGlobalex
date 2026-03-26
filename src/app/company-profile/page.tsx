import React from 'react';
import { COMPANY_INFO } from '@/data/mockData';
import { ShieldCheck, Award, Globe, Truck, FileCheck, Users, Target, Rocket, CheckCircle2 } from 'lucide-react';

const CompanyProfile = () => {
    const facts = [
        { label: 'Company Name', value: COMPANY_INFO.name },
        { label: 'Nature of Business', value: 'Trader, Supplier, Exporter' },
        { label: 'Contact Person', value: COMPANY_INFO.contactPerson },
        { label: 'Location', value: 'Nagpur, Maharashtra, India' },
        { label: 'Year of Establishment', value: '2022' },
        { label: 'GST Number', value: COMPANY_INFO.gst },
        { label: 'Modes of Transport', value: 'By Air, Rail, Ship' },
        { label: 'Modes of Payment', value: 'Online Payments, Cheque/DD, Cash' },
    ];

    const exportServices = [
        { icon: Globe, text: 'International Product Sourcing' },
        { icon: ShieldCheck, text: 'Quality Inspection & Assurance' },
        { icon: FileCheck, text: 'Export Documentation & Compliance' },
        { icon: Truck, text: 'Global Shipping & Logistics' },
        { icon: Users, text: 'Supplier & Manufacturer Coordination' },
    ];

    const whyChoose = [
        'Trusted International Export Partner',
        'Reliable Global Supply Chain Solutions',
        'High-Quality Products & Verified Suppliers',
        'Smooth Export Documentation Process',
        'Fast & Secure Worldwide Delivery',
        'Customer-Centric Business Approach',
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-blue-900">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-linear-to-b from-blue-900/80 via-blue-900/60 to-blue-900 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070"
                        alt="Company Profile Hero"
                        className="w-full h-full object-cover opacity-40 scale-110"
                    />
                </div>

                <div className="relative z-20 text-center px-6">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white! tracking-tighter mb-4 animate-slide-up">
                        COMPANY PROFILE
                    </h1>
                    <div className="h-2 w-24 bg-blue-500 mx-auto rounded-full" />
                </div>
            </section>

            {/* About Section */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 -mt-16 relative z-30 pb-16">
                <div className="bg-white rounded-2xl shadow-2xl border border-blue-50 p-8 md:p-12 animate-slide-up">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-[2px] w-12 bg-blue-600"></div>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">About {COMPANY_INFO.name}</h2>
                    </div>
                    <div className="space-y-5 text-gray-600 leading-relaxed text-[15px]">
                        <p>
                            <span className="font-bold text-gray-900">{COMPANY_INFO.name}</span> is a trusted international trading and export company based in India, specializing in delivering high-quality products and reliable global supply solutions. We serve businesses worldwide with a strong commitment to quality, transparency, and timely delivery.
                        </p>
                        <p>
                            As a growing global export company, we provide complete end-to-end solutions including product sourcing, quality assurance, export documentation, and international logistics. Our efficient processes and strong supplier network ensure that every shipment meets international standards and client expectations.
                        </p>
                        <p>
                            We work closely with verified manufacturers and logistics partners to deliver secure, fast, and hassle-free international shipping, helping our clients expand their business in global markets.
                        </p>
                    </div>
                </div>
            </section>

            {/* Export Services */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
                <div className="flex items-center gap-4 mb-10">
                    <div className="h-[2px] w-12 bg-blue-600"></div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">Our Export Services</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {exportServices.map((service) => (
                        <div
                            key={service.text}
                            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center space-y-4"
                        >
                            <div className="w-14 h-14 mx-auto bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                <service.icon size={26} />
                            </div>
                            <p className="text-sm font-bold text-gray-800 leading-snug">{service.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="bg-slate-50 py-20 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Mission */}
                        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-6 -mt-6 transition-transform group-hover:scale-150 duration-500"></div>
                            <div className="relative z-10">
                                <h3 className="text-xl font-extrabold text-gray-900 mb-4 tracking-tight">Our Mission</h3>
                                <p className="text-gray-600 leading-relaxed text-[15px]">
                                    To provide high-quality export products and reliable international trade solutions while building long-term trust with global clients.
                                </p>
                            </div>
                        </div>

                        {/* Vision */}
                        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-full -mr-6 -mt-6 transition-transform group-hover:scale-150 duration-500"></div>
                            <div className="relative z-10">
                                <h3 className="text-xl font-extrabold text-gray-900 mb-4 tracking-tight">Our Vision</h3>
                                <p className="text-gray-600 leading-relaxed text-[15px]">
                                    To become a leading global export company known for reliability, professionalism, and excellence in international trade.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-[2px] w-12 bg-[#cc0000]"></div>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">Why Choose {COMPANY_INFO.name}</h2>
                        </div>
                        <div className="space-y-4">
                            {whyChoose.map((item) => (
                                <div key={item} className="flex items-start gap-3 group">
                                    <div className="mt-0.5 flex-shrink-0">
                                        <CheckCircle2 size={20} className="text-green-500 group-hover:text-green-600 transition-colors" />
                                    </div>
                                    <p className="text-gray-700 font-medium text-[15px]">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications highlight */}
                    <div className="bg-blue-600 rounded-2xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden group">
                        <div className="absolute -right-6 -bottom-6 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-500">
                            <Award size={160} />
                        </div>
                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center gap-3">
                                <ShieldCheck size={32} className="text-blue-200" />
                                <h3 className="text-xl font-extrabold tracking-tight">Quality Assured</h3>
                            </div>
                            <p className="text-blue-100 leading-relaxed text-sm">
                                We are a certified pharmaceutical distributor with all necessary licenses, certifications, and compliance documentation. Our quality assurance processes ensure every product meets international standards.
                            </p>
                            <div className="flex flex-wrap gap-3 pt-2">
                                {['GST Certified', 'FDA Licensed', 'ISO 9001:2015', 'MSME Registered'].map((badge) => (
                                    <span key={badge} className="px-3 py-1.5 bg-white/15 rounded-full text-[11px] font-bold uppercase tracking-wider">
                                        {badge}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Facts Table */}
            <section className="bg-slate-50 py-20 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="h-[2px] w-12 bg-blue-600"></div>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">Key Facts</h2>
                    </div>
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                        {facts.map((fact, index) => (
                            <div
                                key={fact.label}
                                className={`grid grid-cols-1 md:grid-cols-3 border-b border-gray-50 last:border-0 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'} hover:bg-blue-50/40 transition-colors`}
                            >
                                <div className="p-5 font-bold text-gray-500 text-xs uppercase tracking-widest border-r border-gray-50 flex items-center">
                                    {fact.label}
                                </div>
                                <div className="p-5 text-gray-800 font-semibold text-sm md:col-span-2 flex items-center">
                                    {fact.value}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CompanyProfile;
