import React from 'react';
import { Flame, TrendingUp, ShieldCheck, Leaf, Fuel, CheckCircle } from 'lucide-react';
import img from "../../assets/home/HYDROSCHEMA-scaled.webp";
import explosionImg from "../../assets/home/Explosion_and_implosion.webp"; // ✅ Replace with your image
import videoSrc from "../../assets/home/HydrogenSystem.mp4"; // ✅ Replace with your video

const SchématisationSection = () => {
    return (
        <section className="py-20 px-6 bg-[#253745] text-white">
            <div className="max-w-7xl mx-auto">
                {/* Main Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#40E0D0] to-[#00B4D8] animate-gradient">
                        Schématisation du procédé
                    </h2>
                    <div className="mt-4 h-1 w-24 bg-gradient-to-r from-[#40E0D0] to-[#00B4D8] mx-auto rounded-full"></div>
                </div>

                {/* Schematic Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-16 group">
                    <img
                        src={img}
                        alt="Schématisation du procédé"
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#253745]/90 to-[#253745]/30 flex items-end p-8"></div>
                </div>

                {/* Grid of Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="relative bg-[#2D4254] rounded-2xl p-6 border border-[#40E0D0]/20 hover:border-[#40E0D0]/50 transition-all duration-300 group overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#40E0D0]/10 to-[#40E0D0]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-2 bg-[#40E0D0]/10 rounded-lg">
                                    <TrendingUp className="text-[#40E0D0]" size={28} />
                                </div>
                                <h3 className="text-xl font-semibold">Puissance retrouvée</h3>
                            </div>
                            <p className="text-[#E0E0E0]">Retrouvez vos performances d'origine moteur jusqu'à <span className="text-[#40E0D0] font-bold">+65%</span>.</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="relative bg-[#2D4254] rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-2 bg-[#40E0D0]/10 rounded-lg">
                                <ShieldCheck className="text-[#40E0D0]" size={28} />
                            </div>
                            <h3 className="text-xl font-semibold">Économies réalisées</h3>
                        </div>
                        <p className="text-[#E0E0E0]">Réduisez les réparations et remplacements coûteux. <span className="text-[#40E0D0] font-bold">-50%</span> de consommation d'AD BLUE.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="relative bg-[#2D4254] rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(64,224,208,0.3)] transition-all duration-300">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-2 bg-[#40E0D0]/10 rounded-lg">
                                <Flame className="text-[#40E0D0]" size={28} />
                            </div>
                            <h3 className="text-xl font-semibold">Combustion augmentée</h3>
                        </div>
                        <p className="text-[#E0E0E0]">La combustion atteint <span className="text-[#40E0D0] font-bold">97%</span> grâce à une vitesse de flamme 9x supérieure à celle des hydrocarbures.</p>
                    </div>

                    {/* Card 4 */}
                    <div className="relative bg-[#2D4254] rounded-2xl p-6 overflow-hidden">
                        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,...')]"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-2 bg-[#40E0D0]/10 rounded-lg">
                                    <Leaf className="text-[#40E0D0]" size={28} />
                                </div>
                                <h3 className="text-xl font-semibold">Pollution diminuée</h3>
                            </div>
                            <p className="text-[#E0E0E0]">Réduction de <span className="text-[#40E0D0] font-bold">-30% à -65%</span> des émissions nocives et CO₂.</p>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="relative bg-[#2D4254] rounded-2xl p-6">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-2 bg-[#40E0D0]/10 rounded-lg">
                                <Fuel className="text-[#40E0D0]" size={28} />
                            </div>
                            <h3 className="text-xl font-semibold">Consommation abaissée</h3>
                        </div>
                        <p className="text-[#E0E0E0] mb-3">Économie garantie entre <span className="text-[#40E0D0] font-bold">-20% et -40%</span> de carburant.</p>
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span>Éco-conduite</span>
                                <span className="font-medium">-8%</span>
                            </div>
                            <div className="h-2 bg-[#3A4E5F] rounded-full overflow-hidden">
                                <div className="h-full bg-[#40E0D0] rounded-full" style={{ width: '8%' }}></div>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Additifs</span>
                                <span className="font-medium">-10%</span>
                            </div>
                            <div className="h-2 bg-[#3A4E5F] rounded-full overflow-hidden">
                                <div className="h-full bg-[#40E0D0] rounded-full" style={{ width: '10%' }}></div>
                            </div>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="relative bg-[#2D4254] rounded-2xl p-6 border border-[#40E0D0]/30">
                        <div className="absolute -top-3 -right-3 bg-[#40E0D0] text-[#253745] px-3 py-1 rounded-full text-xs font-bold shadow-md">
                            CERTIFIED
                        </div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-2 bg-[#40E0D0]/10 rounded-lg">
                                <CheckCircle className="text-[#40E0D0]" size={28} />
                            </div>
                            <h3 className="text-xl font-semibold">Bilan carbone certifié</h3>
                        </div>
                        <p className="text-[#E0E0E0]">Obtenez un <span className="text-[#40E0D0] font-bold">bilan carbone certifié</span> pour vos crédits CO₂. Objectifs de décarbonation atteints.</p>
                    </div>
                </div>

                {/* Footer Note */}
                <div className="mt-16 text-center">
                    <div className="inline-block px-6 py-3 bg-[#2D4254] rounded-full border border-[#40E0D0]/30">
                        <p className="text-sm text-[#E0E0E0]">
                            *Vidéo réalisée avec caméra thermique infrarouge 1200°C. Aucun risque d'explosion. Garantie constructeur conservée.
                        </p>
                    </div>
                </div>

                {/* ✅ EXTRA SECTION: Explosion / Implosion */}
                <div className="mt-24 grid lg:grid-cols-2 gap-10 items-center">
                    {/* Video */}
                    <div className="rounded-2xl overflow-hidden shadow-xl relative group">
                        <video
                            src={videoSrc}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-500" />
                    </div>

                    {/* Text + Image */}
                    <div className="space-y-6">
                        <h3 className="text-3xl md:text-4xl font-bold text-[#40E0D0]">Explosion / Implosion</h3>
                        <p className="text-[#E0E0E0]">
                            ♻️ <strong>HybridOgen®</strong> utilise l’excédent d’énergie produit par la batterie du véhicule
                            pour générer de l’hydrogène, qui alimente l’admission d’air du moteur afin d’améliorer la combustion.
                            <br />
                            Aucun risque d’explosion et <strong>garantie constructeur</strong> conservée car aucune modification moteur n’est effectuée.
                        </p>
                        <img
                            src={explosionImg}
                            alt="Explosion Implosion"
                            className="rounded-xl shadow-md w-full h-[100px] object-contain pb-5"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SchématisationSection;
