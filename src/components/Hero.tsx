import React from 'react';
import { Button } from './Button';
import { Phone, Check, Star } from 'lucide-react';
import { AnimatedHeroIllustration } from './AnimatedHeroIllustration';

export const Hero: React.FC = () => {
    return (
        <section className="relative bg-white overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">

                    {/* Left Content */}
                    <div className="mb-12 lg:mb-0">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wide mb-6">
                            <Check className="w-3 h-3 mr-1" />
                            Alarma sin permanencia
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                            Y si quieres, suscríbete a tu alarma <span className="text-primary">sin permanencia</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
                            Tu alarma como siempre la has querido: sencilla, flexible y sin permanencia.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-primary/30">
                                Ver precios
                            </Button>
                            <Button variant="outline" size="lg" className="w-full sm:w-auto border-2">
                                <Phone className="w-5 h-5 mr-2" />
                                Llámanos gratis
                            </Button>
                        </div>

                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center">
                                <div className="flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>
                                <span className="ml-2 font-medium text-gray-900">4.8/5</span>
                            </div>
                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                            <span>Más de 1.000 clientes satisfechos</span>
                        </div>
                    </div>

                    {/* Right Image / Animation */}
                    <div className="relative h-full min-h-[400px] flex items-center justify-center">
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-full h-full bg-gray-50 rounded-full blur-3xl opacity-50 -z-10"></div>
                        <AnimatedHeroIllustration />
                    </div>

                </div>
            </div>
        </section>
    );
};
