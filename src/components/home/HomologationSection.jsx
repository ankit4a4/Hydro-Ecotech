import React from 'react';
import marianneLogo from "../../assets/home/Marianne_logo.webp";
import boshLogo from "../../assets/home/bosh.webp";
import veritasLogo from "../../assets/home/veritas.webp";
import poleMerLogo from "../../assets/home/Logo-pole-mer.webp";
import ifsttarLogo from "../../assets/home/ifsttar.webp";

const HomologationSection = () => {
    const partnerLogos = [
        { src: boshLogo, alt: "Bosh Partner Logo" },
        { src: veritasLogo, alt: "Veritas Certification Logo" },
        { src: poleMerLogo, alt: "Pôle Mer Méditerranée Logo" },
        { src: ifsttarLogo, alt: "IFSTTAR Research Institute Logo" }
    ];

    return (
        <section className="py-12 md:py-20 px-4 bg-[#EDF1F6]">
            <div className="max-w-6xl mx-auto">
                {/* 1. Centered Header with Decorative Line */}
                <header className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">HOMOLOGATION</h2>
                    <div className="w-20 h-1 mx-auto bg-gray-300 rounded-full"></div>
                </header>

                {/* 2. Asymmetric Layout (Image Left, Text Right) */}
                <div className="flex flex-col lg:flex-row gap-8 items-start mb-16">
                    {/* Image (40% width on desktop) */}
                    <div className="w-full lg:w-2/5 rounded-xl overflow-hidden shadow-lg">
                        <img
                            src={marianneLogo}
                            alt="Marianne Logo"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Text (60% width) - Staggered Content Blocks */}
                    <div className="w-full lg:w-3/5 space-y-6">
                        <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                            <p>Il n'existe pas de texte législatif interdisant l'utilisation des générateurs d'hydrogène pour l'automobile en France.</p>
                        </div>

                        <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-green-500">
                            <p>Nos dispositifs ne nécessitent pas d'agrément, d'homologation, ni d'accord d'un assureur ou constructeur.</p>
                        </div>

                        <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-purple-500">
                            <p>Ils sont classés comme dispositifs antipollution et économiseurs de carburant selon l'arrêté du 26 février 1976.</p>
                        </div>
                    </div>
                </div>

                {/* 3. Partners Grid (Masonry-style Layout) */}
                <div className="mt-8">
                    <h3 className="text-center text-xl font-medium mb-8">Nos partenaires et certifications</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {partnerLogos.map((logo, i) => (
                            <div
                                key={i}
                                className={`p-4 rounded-lg flex items-center justify-center 
                                    ${i === 0 ? 'bg-blue-50' : ''}
                                    ${i === 1 ? 'bg-green-50' : ''}
                                    ${i === 2 ? 'bg-purple-50' : ''}
                                    ${i === 3 ? 'bg-yellow-50' : ''}
                                `}
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="max-h-16 w-auto"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomologationSection;