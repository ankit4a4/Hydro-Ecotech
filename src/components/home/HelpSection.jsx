import React from 'react';
import { Phone, PlayCircle, Mail, MessageSquare } from 'lucide-react';
import video from "../../assets/home/IMG_6201.mp4"

const HelpSection = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-blue-50 to-cyan-50 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
                {/* Left: Support Text */}
                <div className="space-y-6">
                    <span className="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full mb-4">
                        Support 24/7
                    </span>

                    <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Besoin d'aide? <span className="text-blue-600">Nous sommes là</span>
                    </h3>

                    <p className="text-xl text-gray-600">
                        Notre équipe dédiée est disponible pour répondre à toutes vos questions et vous accompagner.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Appelez-nous</p>
                                <p className="text-lg font-semibold text-blue-600">06 04 52 87 51</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="p-3 bg-cyan-100 text-cyan-600 rounded-full">
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Envoyez un email</p>
                                <p className="text-lg font-semibold text-cyan-600">support@votresite.com</p>
                            </div>
                        </div>
                    </div>

                    <button className="mt-6 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-xl transition-all duration-300 w-fit flex items-center gap-2 shadow-lg hover:shadow-xl">
                        <MessageSquare size={20} />
                        Discuter avec un expert
                    </button>
                </div>

                {/* Right: Video Preview */}
                <div className="relative group">
                    <div className="overflow-hidden rounded-3xl shadow-2xl border-4 border-white transform group-hover:-translate-y-2 transition-transform duration-300">
                        <div className="relative aspect-video">
                            <video
                                controls
                                className="w-full h-full object-cover"
                            >
                                <source src={video} />
                                Votre navigateur ne supporte pas la lecture vidéo.
                            </video>

                            {/* Play button overlay */}
                          
                        </div>
                    </div>

                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500 rounded-full opacity-10 z-0"></div>
                </div>
            </div>
        </section>
    );
};

export default HelpSection;