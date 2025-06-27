import React from 'react';
import { Phone, Mail, MapPin, ArrowRight, Zap, Droplets, Video, Smartphone } from 'lucide-react';

const InfoSummarySection = () => {
    return (
        <section className="relative py-20 px-6 sm:px-8 bg-white overflow-hidden">
            {/* Background elements - more subtle for white bg */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-blue-200 filter blur-3xl"></div>
                <div className="absolute bottom-0 right-1/3 w-40 h-40 rounded-full bg-teal-200 filter blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-600 rounded-full mb-4">
                        Innovation Hydrogène
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Repenser l'énergie <span className="text-blue-600">du futur</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Des solutions révolutionnaires pour une mobilité propre et un bien-être optimal
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left column - Featured solution */}
                    <div className="lg:col-span-2">
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    title: "Décarbonisation moteur par hydrogène",
                                    description: "Réduisez vos émissions jusqu'à 80% avec notre système breveté",
                                    icon: <Zap className="w-6 h-6 text-blue-600" />,
                                    color: "bg-blue-50",
                                    border: "border-blue-100",
                                    link: "#",
                                    featured: true
                                },
                                {
                                    title: "Eau hydrogénée bien-être",
                                    description: "Une innovation 100% naturelle pour votre santé",
                                    icon: <Droplets className="w-6 h-6 text-teal-600" />,
                                    color: "bg-teal-50",
                                    border: "border-teal-100",
                                    link: "#"
                                },
                                {
                                    title: "Notre Pitch Contest",
                                    description: "Découvrez notre vision en vidéo",
                                    icon: <Video className="w-6 h-6 text-purple-600" />,
                                    color: "bg-purple-50",
                                    border: "border-purple-100",
                                    link: "#"
                                },
                                {
                                    title: "Contrôle pollution & carburant",
                                    description: "Restez connecté à vos performances",
                                    icon: <Smartphone className="w-6 h-6 text-amber-600" />,
                                    color: "bg-amber-50",
                                    border: "border-amber-100",
                                    link: "#"
                                }
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`p-6 rounded-xl border ${item.border} ${item.color} transform transition-all hover:scale-[1.02] hover:shadow-md group ${item.featured ? 'md:col-span-2' : ''}`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`p-3 rounded-lg ${item.color} border ${item.border}`}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                            <p className="text-gray-600 mb-4">{item.description}</p>
                                            <a
                                                href={item.link}
                                                className="inline-flex items-center text-blue-600 group-hover:text-blue-800 transition-colors"
                                            >
                                                En savoir plus
                                                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right column - Contact panel */}
                    <div className="bg-gray-50 rounded-xl border border-gray-200 p-8 h-fit sticky top-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span>
                            Contactez-nous
                        </h3>

                        <div className="space-y-6">
                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                                    <Phone className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-600 mb-1">Téléphone</h4>
                                    <div className="flex flex-col gap-1">
                                        <a href="tel:0604528751" className="text-gray-900 hover:text-blue-600 transition">06 04 52 87 51</a>
                                        <a href="tel:0629859373" className="text-gray-900 hover:text-blue-600 transition">06 29 85 93 73</a>
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                                    <Mail className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-600 mb-1">Email</h4>
                                    <div className="flex flex-col gap-1">
                                        <a href="mailto:contact@hydro-ecotech.com" className="text-gray-900 hover:text-blue-600 transition">contact@hydro-ecotech.com</a>
                                        <a href="mailto:info@hydro-ecotech.com" className="text-gray-900 hover:text-blue-600 transition">
                                            info@hydro-ecotech.com
                                            <span className="text-xs text-gray-500 ml-1">(Technique)</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                                    <MapPin className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-600 mb-1">Adresse</h4>
                                    <p className="text-gray-900 mb-2">
                                        Siège social :<br />
                                        Marseille Innovation – Hôtel Technoptic,<br />
                                        2 Rue Marc Donadille, 13013 Marseille
                                    </p>
                                    <a
                                        href="https://www.google.com/maps/place/Marseille+Innovation+-+H%C3%B4tel+Technoptic/@43.344921,5.4288245,17z/data=!3m2!4b1!5s0x12c9bfcdebd0df59:0xf3b0306d8b41f6ba!4m6!3m5!1s0x12c9bfcdc25b14c7:0x34a9c878b91ef928!8m2!3d43.3449171!4d5.4313994!16s%2Fg%2F11c37qzvyd?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm transition"
                                    >
                                        Voir sur la carte
                                        <ArrowRight className="ml-1 w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoSummarySection;