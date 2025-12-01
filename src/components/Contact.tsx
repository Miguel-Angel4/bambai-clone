import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { ValuesBackground } from './ValuesBackground';

export const Contact: React.FC = () => {
    return (
        <div className="relative min-h-screen">
            <ValuesBackground />

            <section className="relative z-10 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Contacto
                        </h1>
                        <p className="text-xl text-blue-100 mb-8">
                            ¿Hablamos? Estamos aquí para ayudarte con lo que necesites.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Email Card */}
                        <a
                            href="mailto:info@bambai.es"
                            className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-8 text-center border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:bg-white/10"
                        >
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                                <Mail className="w-8 h-8 text-primary-300 group-hover:text-primary-200" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                            <p className="text-blue-100 group-hover:text-white transition-colors">
                                info@bambai.es
                            </p>
                        </a>

                        {/* Phone Card */}
                        <a
                            href="tel:+34937379317"
                            className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-8 text-center border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:bg-white/10"
                        >
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                                <Phone className="w-8 h-8 text-primary-300 group-hover:text-primary-200" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Teléfono</h3>
                            <p className="text-blue-100 group-hover:text-white transition-colors">
                                937 379 317
                            </p>
                        </a>

                        {/* WhatsApp Card */}
                        <a
                            href="https://api.whatsapp.com/send?phone=34937379317&text=%F0%9F%91%8B"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-8 text-center border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:bg-white/10"
                        >
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                                <MessageCircle className="w-8 h-8 text-primary-300 group-hover:text-primary-200" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
                            <p className="text-blue-100 group-hover:text-white transition-colors">
                                937 379 317
                            </p>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};
