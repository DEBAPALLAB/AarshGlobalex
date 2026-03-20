"use client"

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe, ShieldCheck, Award } from 'lucide-react';
import { COMPANY_INFO } from '@/data/mockData';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
        alert('Thank you for your message! We will get back to you soon.');
    };

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-blue-900">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-linear-to-b from-blue-900/80 via-blue-900/60 to-blue-900 z-10" />
                    <img 
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
                        alt="Contact Hero" 
                        className="w-full h-full object-cover opacity-40 scale-110" 
                    />
                </div>
                
                <div className="relative z-20 text-center px-6">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white! tracking-tighter mb-4 animate-slide-up">
                        GET IN TOUCH
                    </h1>
                    <div className="h-2 w-24 bg-blue-500 mx-auto rounded-full" />
                </div>
            </section>

            {/* Content Section */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 -mt-20 relative z-30 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    
                    {/* Contact Info Cards - Left Column */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-white p-8 rounded-2xl shadow-2xl border border-blue-50 space-y-8 animate-slide-left">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                                    Have questions about our pharmaceutical solutions? Our team of experts is here to help you.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4 group">
                                    <div className="p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">Our Office</p>
                                        <p className="text-gray-900 font-medium text-sm leading-relaxed">
                                            {COMPANY_INFO.address}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 group">
                                    <div className="p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">Call Us</p>
                                        <p className="text-gray-900 font-medium text-lg">
                                            {COMPANY_INFO.mobile}
                                        </p>
                                        <p className="text-gray-500 text-xs mt-1 italic">Mon - Sat: 9:00 AM - 6:00 PM</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 group">
                                    <div className="p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">Email Us</p>
                                        <p className="text-gray-900 font-medium">info@aarshglobalex.com</p>
                                        <p className="text-gray-500 text-xs mt-1">Direct inquiry & support</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-gray-100 flex justify-between items-center">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center overflow-hidden">
                                            <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="team" />
                                        </div>
                                    ))}
                                </div>
                                <p className="text-[10px] text-gray-400 font-medium uppercase tracking-tighter">Support team online</p>
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="bg-blue-600 rounded-2xl p-6 text-white shadow-xl flex items-center justify-between overflow-hidden relative group">
                            <div className="absolute -right-4 -bottom-4 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-500">
                                <ShieldCheck size={120} />
                            </div>
                            <div className="relative z-10">
                                <h4 className="font-bold text-lg mb-1">Quality Assured</h4>
                                <p className="text-blue-100 text-xs">Certified pharmaceutical distributor</p>
                            </div>
                            <Award className="text-white opacity-50 relative z-10" size={32} />
                        </div>
                    </div>

                    {/* Contact Form - Right Column */}
                    <div className="lg:col-span-8 animate-slide-right delay-100 overflow-visible">
                        <div className="bg-white rounded-2xl shadow-2xl border border-blue-50 overflow-hidden">
                            <div className="bg-linear-to-r from-blue-700 to-blue-600 p-8 text-white">
                                <h3 className="text-3xl font-bold mb-2">Send us a Message</h3>
                                <p className="text-blue-100 text-sm">We'll respond to your inquiry within 24 business hours.</p>
                            </div>
                            
                            <form onSubmit={handleSubmit} className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Full Name</label>
                                    <input 
                                        type="text" 
                                        required
                                        className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Email Address</label>
                                    <input 
                                        type="email" 
                                        required
                                        className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Phone Number</label>
                                    <input 
                                        type="tel" 
                                        className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                        placeholder="+91 00000 00000"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Subject</label>
                                    <div className="relative">
                                        <select 
                                            className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none"
                                            value={formData.subject}
                                            onChange={(e) => setFormData({...formData, subject: e.target.value})}
                                        >
                                            <option value="">General Inquiry</option>
                                            <option value="Product Sourcing">Product Sourcing</option>
                                            <option value="Bulk Order">Bulk Order</option>
                                            <option value="Partnership">Partnership</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                                            <Clock size={14} className="text-gray-400" />
                                        </div>
                                    </div>
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Your Message</label>
                                    <textarea 
                                        rows={5}
                                        required
                                        className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                                        placeholder="Tell us how we can help you..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    />
                                </div>
                                <div className="md:col-span-2 pt-4">
                                    <button 
                                        type="submit"
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center space-x-3 group active:scale-[0.98]"
                                    >
                                        <span>Send Message</span>
                                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ContactPage;
