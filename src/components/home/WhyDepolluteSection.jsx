import React from 'react';
import {
    Leaf,
    Gauge,
    CheckCircle,
    Zap,
    DollarSign,
    ThumbsUp,
} from 'lucide-react';
import image from '../../assets/home/hydrogen.jpg';

const WhyDepolluteSection = () => {
    return (
        <section className="py-28 bg-gradient-to-b from-white to-[#fff] px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">

                {/* Left Content */}
                <div className="w-full lg:w-3/5 space-y-10 relative">
                    {/* Decorative Circles */}
                    <div className="absolute -top-8 -left-8 w-28 h-28 bg-[#c4ecf9] rounded-full opacity-40 blur-2xl -z-10"></div>
                    <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-[#d3f1fd] rounded-full opacity-40 blur-2xl -z-10"></div>

                    <div className="space-y-6 relative">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Pourquoi{' '}
                            <span className="text-[#76bde5] relative inline-block">
                                dépolluer
                                <span className="absolute left-0 bottom-0 w-full h-1 bg-[#76bde5] opacity-30 animate-pulse"></span>
                            </span>{' '}
                            votre moteur ?
                        </h2>

                        <p className="text-xl text-gray-600 font-medium border-l-4 border-[#76bde5] pl-4 py-1">
                            Retrouvez les performances de votre véhicule
                        </p>

                        <div className="text-gray-600 space-y-5 leading-relaxed">
                            <p className="relative pl-5 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-[#76bde5]">
                                Lorsque vous utilisez votre véhicule, il laisse des dépôts d'oxydation noirâtres (calamine) dans des endroits stratégiques du moteur et de l'échappement.
                            </p>
                            <p className="relative pl-5 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-[#76bde5]">
                                L'encrassement est dû aux démarrages fréquents, limitations de vitesse, normes anti-pollution et conduite urbaine.
                            </p>
                            <p className="relative pl-5 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-[#76bde5]">
                                Privilégier les conduites à bas régime pour limiter la consommation.
                            </p>
                        </div>

                        {/* Bullet Points */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                            <Bullet icon={<CheckCircle />} label="Scientifiquement prouvé" />
                            <Bullet icon={<DollarSign />} label="Économiquement validé" />
                            <Bullet icon={<Leaf />} label="Écologiquement responsable" />
                            <Bullet icon={<Zap />} label="Performance prouvée" />
                            <Bullet icon={<Gauge />} label="Consommation réduite" />
                            <Bullet icon={<ThumbsUp />} label="864 moteurs nettoyés" />
                        </div>

                        {/* CTA Button */}
                        <button className="mt-6 px-8 py-4 bg-gradient-to-r from-[#76bde5] to-[#5c9ecf] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03] group relative overflow-hidden">
                            <span className="relative z-10 flex items-center gap-2">
                                En savoir plus
                                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </span>
                            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-500"></span>
                        </button>
                    </div>
                </div>

                {/* Right Image + Content */}
                <div className="w-full lg:w-2/5 relative group transition duration-500 space-y-6">
                    {/* Glow Background */}
                    <div className="absolute -inset-5 bg-gradient-to-br from-[#cceafc] to-[#e6f6fd] rounded-3xl opacity-50 group-hover:opacity-80 blur-2xl transition duration-700 group-hover:blur-lg -z-10"></div>

                    {/* Image */}
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
                        <img
                            src={image}
                            alt="Moteur décalaminé"
                            className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* Extra Content Under Image */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-[#444] space-y-2">
                        <h4 className="text-lg font-semibold text-[#5c9ecf]">
                            Une solution simple, rapide et efficace
                        </h4>
                        <p className="text-sm">
                            Le nettoyage par hydrogène ne nécessite aucune modification du moteur et améliore les performances dès la première utilisation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Bullet Point Box With BG
const Bullet = ({ icon, label }) => (
    <div className="flex items-start space-x-3 p-4 bg-[#f0faff] rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 border border-gray-100">
        <div className="mt-0.5 bg-[#e6f6fd] p-1.5 rounded-full">
            {React.cloneElement(icon, { className: "w-5 h-5 text-[#76bde5]" })}
        </div>
        <span className="text-gray-800 font-medium">{label}</span>
    </div>
);

export default WhyDepolluteSection;
