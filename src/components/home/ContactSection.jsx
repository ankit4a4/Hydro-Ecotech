import React from 'react';
import { CheckCircle, Phone, Mail, Upload } from 'lucide-react';
import video from "../../assets/home/hydro-ecotech.mp4"

const ContactSection = () => {
    return (
        <section className="py-16 bg-[#0a2540] px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Hydro Ecotech</h1>
                    <h2 className="text-3xl text-[#a8c6e0] mb-6">Contactez-nous pour plus d'informations</h2>
                    <p className="text-xl text-[#a8c6e0] max-w-4xl mx-auto">
                        Vous avez besoin d'aide ou de renseignements au sujet de nos services ? Hydro Ecotech s'occupe de vous : Vous appelez, nous intervenons ! Ou remplissez notre formulaire de contact.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Features & Video */}
                    <div className="space-y-8">
                        {/* Video Section */}
                        <div className="rounded-xl overflow-hidden shadow-2xl">
                            <video
                                controls
                                className="w-full h-auto"
                            >
                                <source src={video} type="video/mp4" />
                                Votre navigateur ne supporte pas la lecture vidéo.
                            </video>
                        </div>

                        {/* Features List */}
                        <div className="bg-[#1a365d] p-8 rounded-xl border border-[#2a4365] shadow-lg">
                            <h3 className="text-2xl font-bold text-white mb-6">Nos engagements</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Assistance téléphonique",
                                    "Intervention sur le site",
                                    "Respect de l'environnement",
                                    "Conservé garantie constructeur",
                                    "Réactivité et accompagnement",
                                    "Qualité & sécurité",
                                    "Facturation transparente",
                                    "Livraison partout en France en moins de 48h"
                                ].map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle className="text-[#4299e1] mt-1 flex-shrink-0" size={20} />
                                        <span className="text-[#a8c6e0]">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services Tags */}
                        <div className="flex flex-wrap gap-3">
                            {["Décarbonation moteur", "Adaptateur Bioéthanol", "Baisse consommation", "Eco conduite"].map((service, idx) => (
                                <span key={idx} className="bg-[#2c5282] text-[#a8c6e0] px-4 py-2 rounded-full text-sm">
                                    {service}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="bg-[#1a365d] rounded-2xl p-8 shadow-2xl border border-[#2a4365]">
                        <h3 className="text-2xl font-bold text-white mb-2">
                            Besoin d'aide ou de renseignements sur nos services ?
                        </h3>
                        <p className="text-[#a8c6e0] mb-6">
                            Remplissez les champs ci-dessous et on vous recontactera dans les meilleurs délais.
                        </p>
                        <p className="text-sm text-[#a8c6e0] mb-6">« * » indique les champs nécessaires</p>

                        <form className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block mb-2 font-medium text-white">
                                        Prénom *
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full bg-[#2a4365] border border-[#2c5282] text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#4299e1] focus:border-transparent"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 font-medium text-white">
                                        Nom *
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full bg-[#2a4365] border border-[#2c5282] text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#4299e1] focus:border-transparent"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block mb-2 font-medium text-white">
                                        E-mail *
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full bg-[#2a4365] border border-[#2c5282] text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#4299e1] focus:border-transparent"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 font-medium text-white">
                                        Téléphone *
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full bg-[#2a4365] border border-[#2c5282] text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#4299e1] focus:border-transparent"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block mb-2 font-medium text-white">
                                    Société
                                </label>
                                <input
                                    type="text"
                                    className="w-full bg-[#2a4365] border border-[#2c5282] text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#4299e1] focus:border-transparent"
                                />
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block mb-2 font-medium text-white">
                                        Vous êtes ? *
                                    </label>
                                    <select className="w-full bg-[#2a4365] border border-[#2c5282] text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#4299e1] focus:border-transparent">
                                        <option>Franchisé</option>
                                        <option>Particulier</option>
                                        <option>Professionnel</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block mb-2 font-medium text-white">
                                        Motif de votre contact *
                                    </label>
                                    <select className="w-full bg-[#2a4365] border border-[#2c5282] text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#4299e1] focus:border-transparent">
                                        <option>Devis</option>
                                        <option>Renseignement</option>
                                        <option>Réclamation</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block mb-2 font-medium text-white">
                                    Message
                                </label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-[#2a4365] border border-[#2c5282] text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#4299e1] focus:border-transparent"
                                ></textarea>
                            </div>

                            <div>
                                <label className="block mb-2 font-medium text-white">
                                    Insérer une pièce jointe
                                </label>
                                <div className="flex items-center gap-4">
                                    <label className="cursor-pointer bg-[#2a4365] border border-[#2c5282] text-white rounded-lg px-4 py-2 hover:bg-[#2c5282] transition">
                                        <Upload size={18} className="inline mr-2" />
                                        Choisir un fichier
                                        <input type="file" className="hidden" accept=".jpg,.png,.pdf" />
                                    </label>
                                    <span className="text-sm text-[#a8c6e0]">No file chosen</span>
                                </div>
                                <p className="text-sm text-[#a8c6e0] mt-2">
                                    Types de fichiers acceptés : jpg, png, pdf. Taille max. des fichiers : 16 MB.
                                </p>
                            </div>

                            {/* CAPTCHA Placeholder */}
                            <div className="bg-[#2a4365] p-4 rounded-lg border border-[#2c5282]">
                                <p className="text-white text-center">CAPTCHA</p>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#4299e1] hover:bg-[#3182ce] text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition transform hover:-translate-y-1"
                            >
                                Envoyer
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;