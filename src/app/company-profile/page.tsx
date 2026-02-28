import React from 'react';
import { COMPANY_INFO } from '@/data/mockData';

const CompanyProfile = () => {
    const facts = [
        { label: 'Nature of Business', value: 'Trader, Supplier, Exporter' },
        { label: 'Location', value: 'Nagpur, Maharashtra, India' },
        { label: 'Year of Establishment', value: '2022' },
        { label: 'Number of Employees', value: '02' },
        { label: 'GST Number', value: COMPANY_INFO.gst },
        { label: 'Supply Ability', value: '1000 per month' },
        { label: 'Modes of Transport', value: 'By Air, Rail, Ship' },
        { label: 'Modes of Payment', value: 'Online Payments, Cheque/DD, Cash' },
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-12">
            <div className="space-y-6">
                <h1 className="text-3xl font-bold text-gray-800 border-l-4 border-primary pl-4 uppercase tracking-tighter">Company Profile</h1>
                <p className="text-gray-600 leading-relaxed">
                    Clan Numen was established in the year 2022 in Nagpur, Maharashtra, India as it stands out for the leadership chosen in the world of pharma as well as the quality and reliability parameters set. We are one of the renowned tradings, supplying, and exporting organizations that specialize in producing a high-end portfolio of drugs, ranging from specialized formulations, for example, Abacavir Tablets IP, Amlodipine Tablets IP, Atomoxetine Hydrochloride Tablets, Clomiphene Citrate Tablets IP, Caspofungin Acetate For Injection, Diclofenac And Paracetamol Tablets, Cyclophosphamide Injection IP, and Abiraterone Acetate Tablets.
                </p>
                <p className="text-gray-600 leading-relaxed">
                    Under the dynamic leadership of our CEO, Mr. Mangesh Daware, we have so far set up a solid infrastructure and acquired a team of able professionals dedicated to excellence. Our credentials also include prestigious certificates such as a Drug License Certificate and an IEC Certificate, which talk about maintaining the best quality standards.
                </p>
            </div>

            <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-800 uppercase tracking-widest">Key Facts of Clan Numen:</h2>
                <div className="border border-gray-200 rounded-sm overflow-hidden">
                    {facts.map((fact, index) => (
                        <div key={fact.label} className={`grid grid-cols-1 md:grid-cols-3 border-b border-gray-100 last:border-0 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                            <div className="p-4 font-bold text-gray-700 text-sm border-r border-gray-100">{fact.label}</div>
                            <div className="p-4 text-gray-600 text-sm md:col-span-2">{fact.value}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CompanyProfile;
