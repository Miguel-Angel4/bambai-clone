import React, { useState } from 'react';
import { Check, Info } from 'lucide-react';
import { Button } from './Button';
import { ValuesBackground } from './ValuesBackground';
// v1.1 - Toggle funcional entre planes

type Plan = {
    name: string;
    price: string;
    features: string[];
    highlight: boolean;
    badge?: string;
};

const plansData: Record<'sinPermanencia' | 'indefinida', Plan[]> = {
    sinPermanencia: [
        {
            name: 'Básica',
            price: '39,99',
            features: [
                '1 Panel central',
                '1 Detector de movimiento',
                '1 Detector de apertura',
                '1 Mando a distancia',
                'Carteles disuasorios',
                'App móvil ilimitada',
                'Conexión 24h a CRA',
                'Aviso a Policía'
            ],
            highlight: false
        },
        {
            name: 'Estándar y 1 cámara',
            price: '44,99',
            features: [
                '1 Panel central',
                '1 Cámara Wifi con streaming',
                '1 Detector de movimiento',
                '1 Detector de apertura',
                '1 Mando a distancia',
                'Carteles disuasorios',
                'App móvil ilimitada',
                'Conexión 24h a CRA',
                'Aviso a Policía'
            ],
            highlight: true
        },
        {
            name: 'Estándar y dos cámaras',
            price: '54,99',
            features: [
                '1 Panel central',
                '2 Cámaras Wifi con streaming',
                '2 Detectores de movimiento',
                '1 Detector de apertura',
                '1 Mando a distancia',
                'Carteles disuasorios',
                'App móvil ilimitada',
                'Conexión 24h a CRA',
                'Aviso a Policía'
            ],
            highlight: false
        }
    ],
    indefinida: [
        {
            name: 'Básica',
            price: '19,99',
            features: [
                '1 Panel central',
                '1 Detector de movimiento',
                '1 Detector de apertura',
                '1 Mando a distancia',
                'Carteles disuasorios',
                'App móvil ilimitada',
                'Conexión 24h a CRA',
                'Aviso a Policía',
                'Periodo mínimo 9 meses'
            ],
            highlight: false,
            badge: '¡Ahórrate 20€ al mes!'
        },
        {
            name: 'Estándar y 1 cámara',
            price: '24,99',
            features: [
                '1 Panel central',
                '1 Cámara Wifi con streaming',
                '1 Detector de movimiento',
                '1 Detector de apertura',
                '1 Mando a distancia',
                'Carteles disuasorios',
                'App móvil ilimitada',
                'Conexión 24h a CRA',
                'Aviso a Policía',
                'Periodo mínimo 9 meses'
            ],
            highlight: true,
            badge: '¡Ahórrate 20€ al mes!'
        },
        {
            name: 'Estándar y dos cámaras',
            price: '34,99',
            features: [
                '1 Panel central',
                '2 Cámaras Wifi con streaming',
                '2 Detectores de movimiento',
                '1 Detector de apertura',
                '1 Mando a distancia',
                'Carteles disuasorios',
                'App móvil ilimitada',
                'Conexión 24h a CRA',
                'Aviso a Policía',
                'Periodo mínimo 9 meses'
            ],
            highlight: false,
            badge: '¡Ahórrate 20€ al mes!'
        }
    ]
};

export const Prices: React.FC = () => {
    const [selectedPlan, setSelectedPlan] = useState<'sinPermanencia' | 'indefinida'>('sinPermanencia');
    const plans = plansData[selectedPlan];

    return (
        <div className="relative min-h-screen py-20">
            <ValuesBackground />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Precios justos
                    </h1>
                    <p className="text-xl text-blue-100 mb-8">
                        Elige el plan que mejor se adapte a ti. Sin permanencia, sin letra pequeña.
                    </p>

                    {/* Toggle */}
                    <div className="inline-flex bg-white/10 backdrop-blur-md p-1 rounded-full border border-white/20 mb-8">
                        <button
                            onClick={() => setSelectedPlan('sinPermanencia')}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${selectedPlan === 'sinPermanencia'
                                ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                : 'text-blue-200 hover:bg-white/5 hover:text-white'
                                }`}
                        >
                            Alarma Sin Permanencia
                        </button>
                        <button
                            onClick={() => setSelectedPlan('indefinida')}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${selectedPlan === 'indefinida'
                                ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                : 'text-blue-200 hover:bg-white/5 hover:text-white'
                                }`}
                        >
                            Alarma Indefinida
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`group relative bg-white/5 backdrop-blur-md rounded-2xl p-8 transition-all duration-500 border border-white/10 shadow-xl hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:-translate-y-2 hover:border-primary/50 hover:bg-white/10 ${plan.highlight ? 'ring-2 ring-primary/50' : ''
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg shadow-primary/40">
                                        Más popular
                                    </span>
                                </div>
                            )}

                            {plan.badge && (
                                <div className="absolute -top-3 -right-3">
                                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg shadow-green-500/30">
                                        {plan.badge}
                                    </span>
                                </div>
                            )}

                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors">{plan.name}</h3>

                            <div className="flex items-baseline mb-8">
                                <span className="text-5xl font-extrabold text-white">{plan.price}</span>
                                <span className="text-xl font-medium text-blue-200 ml-2">€/mes</span>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start">
                                        <Check className="w-5 h-5 text-primary-400 mr-3 flex-shrink-0 mt-0.5" />
                                        <span className="text-blue-100">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto">
                                <Button
                                    variant="outline"
                                    className="w-full justify-center border-white/20 text-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                                    size="lg"
                                >
                                    Contratar ahora
                                </Button>
                                <p className="text-center text-xs text-blue-300/60 mt-4 flex items-center justify-center">
                                    <Info className="w-3 h-3 mr-1" />
                                    IVA incluido
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-blue-200">
                        ¿Necesitas una configuración personalizada?
                        <a href="tel:937379317" className="text-white font-bold ml-2 hover:text-primary-300 transition-colors">
                            Llámanos al 937 379 317
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};
