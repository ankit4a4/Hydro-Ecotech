import { FileText, Gauge } from 'lucide-react';
import React from 'react';
import img from "../../assets/home/Certification1.webp";
import img2 from "../../assets/home/Certification2.webp";

const CertificationSection = () => {
    return (
        <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0] relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#55AAE4] to-[#3ac6b8]"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-[#55AAE4]/10 blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                        <span className="text-[#55AAE4]">Hydro Ecotech</span> expert in decarbonization <br className="hidden lg:block" />
                        and carbon neutrality CO<sub>2</sub> certified by:
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-[#55AAE4] to-[#3ac6b8] mx-auto mb-8 rounded-full"></div>

                    {/* Certification Logos - Improved layout */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12 px-4">
                        <div className="w-full md:w-auto flex justify-center">
                            <img
                                className='h-24 sm:h-32 md:h-40 object-contain transition-transform hover:scale-105 duration-300'
                                src={img}
                                alt="Certification Logo 1"
                                loading="lazy"
                            />
                        </div>
                        <div className="w-full md:w-auto flex justify-center">
                            <img
                                className='h-24 sm:h-32 md:h-40 object-contain transition-transform hover:scale-105 duration-300'
                                src={img2}
                                alt="Certification Logo 2"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>

                {/* Two Column Layout - Enhanced cards */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column - Carbon Tax */}
                    <div className="group bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-[#55AAE4]/30 transition-all duration-300 hover:-translate-y-2">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-[#55AAE4]/10 p-3 rounded-full group-hover:bg-[#55AAE4]/20 transition-colors duration-300">
                                <Gauge size={28} className="text-[#55AAE4]" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800">Reduce your future carbon tax base</h3>
                        </div>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Prepare for a future carbon import tax (adopted by the 27 at the beginning of March 2022) and new taxes resulting from the new emission quotas decided by Europe in July 2021.
                        </p>
                        <div className="bg-gradient-to-r from-[#f8fafc] to-[#f0f9ff] p-5 rounded-lg border border-gray-200 group-hover:border-[#55AAE4]/50 transition-colors duration-300">
                            <h4 className="font-semibold text-[#55AAE4] mb-3 flex items-center gap-2">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Key Impacts:
                            </h4>
                            <ul className="space-y-2 text-gray-600">
                                {["Direct impact on operational costs", "New financial reporting requirements", "Supply chain compliance challenges"].map((item, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <svg className="w-4 h-4 mt-0.5 text-[#55AAE4] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column - Regulations */}
                    <div className="group bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-[#3ac6b8]/30 transition-all duration-300 hover:-translate-y-2">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-[#3ac6b8]/10 p-3 rounded-full group-hover:bg-[#3ac6b8]/20 transition-colors duration-300">
                                <FileText size={28} className="text-[#3ac6b8]" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800">Respect and anticipate standards and regulations</h3>
                        </div>

                        <div className="space-y-3">
                            {[
                                "2022 Finance Law",
                                "Decree 982 of July 1, 2022",
                                "Grenelle 2 Law",
                                "ISO 14064, 14067, 14083 standards",
                                "GHG Protocol Methodologies",
                                "Regulatory GHG Assessment Methodology",
                                "The CAFE law or 'Corporate Average Fuel Economy'"
                            ].map((regulation, index) => (
                                <div key={index} className="flex items-start gap-3 transition-colors duration-150 hover:text-[#3ac6b8]">
                                    <div className="w-2 h-2 mt-2.5 rounded-full bg-[#3ac6b8] flex-shrink-0 animate-pulse"></div>
                                    <p className="text-gray-600 hover:text-[#3ac6b8] transition-colors duration-150">{regulation}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CertificationSection;