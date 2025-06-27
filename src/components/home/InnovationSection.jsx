import React from 'react';
import goStopImage from "../../assets/home/GSTOP-2.webp";
import hybridogenImage from "../../assets/home/HYBRIDOGEN.webp";
const InnovationSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-[#f0f9ff] text-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM1NUFBQTQiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')]"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Main Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#0f172a] to-[#55AAE4]">
            Innovation : La fusion de nos 2 technologies
          </h2>
          <div className="w-24 h-1.5 bg-[#55AAE4] mx-auto rounded-full mb-4"></div>
          <div className="flex justify-center items-center gap-8">
            <div className="flex items-center flex-col md:flex-row ">
              <img
                src={hybridogenImage}
                alt="HybridOgen"
                className="h-16 w-16 object-contain mr-3"
              />
              <p className="md:text-xl text-md font-semibold text-[#55AAE4]">HybridOgen® I.A</p>
            </div>
            <div className="flex items-center flex-col md:flex-row ">
              <img
                src={goStopImage}
                alt="GO-STOP"
                className="h-16 w-16 object-contain mr-3"
              />
              <p className="md:text-xl text-md  font-semibold text-[#55AAE4]">GO-STOP®</p>
            </div>
          </div>
        </div>

        {/* Two Main Cards with LARGE Images */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Décarboner Card - Enhanced */}
          <div className="group bg-white p-8 rounded-2xl shadow-xl border border-gray-200 hover:border-[#55AAE4]/40 transition-all duration-300 hover:-translate-y-2">
            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                {/* Glow effect */}
                <div className="absolute -inset-2 bg-[#55AAE4]/10 rounded-xl blur-md group-hover:opacity-100 opacity-70 transition-opacity"></div>
                <img
                  src={hybridogenImage}
                  alt="Décarboner"
                  className="relative h-48 w-48 object-contain z-10" // Much larger image
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Décarboner</h3>
              <p className="text-gray-600 text-center">Moteur, vanne EGR, FAP turbo, soupape etc..</p>
            </div>
          </div>

          {/* Monitoring Card - Enhanced */}
          <div className="group bg-white p-8 rounded-2xl shadow-xl border border-gray-200 hover:border-[#55AAE4]/40 transition-all duration-300 hover:-translate-y-2">
            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                <div className="absolute -inset-2 bg-[#55AAE4]/10 rounded-xl blur-md group-hover:opacity-100 opacity-70 transition-opacity"></div>
                <img
                  src={goStopImage}
                  alt="Monitoring"
                  className="relative h-48 w-48 object-contain z-10" // Much larger image
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Monitoring & Optimisation</h3>
              <p className="text-gray-600 text-center">Suivez vos flottes & restez connecté en temps réel 24/7</p>
            </div>
          </div>
        </div>

        {/* Technology Comparison Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* GO-STOP Section */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-2xl font-bold text-gray-800">GO-STOP®</h3>
            </div>
            <p className="text-gray-600 mb-5">Géolocalisation, Immobilisation, Éco-conduite et Bilan Carbone</p>
            <ul className="space-y-3">
              {[
                "Suivi en temps réel via 4G / 5G / GPS / GSM / Nb-IOT",
                "Immobilisation à distance & protection contre le vol",
                "Suivi des émissions de GES et optimisation de conduite"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-600">
                  <div className="w-2 h-2 mt-2.5 rounded-full bg-[#55AAE4]"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* HybridOgen Section */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">

              <h3 className="text-2xl font-bold text-gray-800">HybridOgen®</h3>
            </div>
            <p className="text-gray-600 mb-5">Décarbonation I.A THD* sans stockage</p>
            <ul className="space-y-3">
              {[
                "L'IA ajuste instantanément l'injection d'hydrogène",
                "Améliore la combustion et réduit les émissions",
                "Sans altération des paramètres constructeur"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-600">
                  <div className="w-2 h-2 mt-2.5 rounded-full bg-[#55AAE4]"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Synergy Section */}
        <div className="bg-gradient-to-r from-[#f0f9ff] to-white p-8 rounded-xl border border-gray-200 shadow-lg max-w-5xl mx-auto text-center">

          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            HybridOgen® & GO-STOP® : Une Synergie Technologique
          </h3>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            L'association de HybridOgen® et GO-STOP® permet une gestion intelligente et une décarbonation optimisée des moteurs thermiques —
            <span className="font-semibold text-[#55AAE4]"> durable, sécurisée et efficace</span> sans modifier ni affecter la garantie constructeur.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;