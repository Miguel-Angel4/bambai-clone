import React, { useState } from 'react';
import { Check, Info } from 'lucide-react';
import { Button } from './Button';
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
        <div className="bg-gray-50 min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Precios justos
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Elige el plan que mejor se adapte a ti. Sin permanencia, sin letra pequeña.
                    </p>

                    {/* Toggle */}
                    <div className="inline-flex bg-white p-1 rounded-full border border-gray-200 mb-8">
                        <button
                            onClick={() => setSelectedPlan('sinPermanencia')}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${selectedPlan === 'sinPermanencia'
                                ? 'bg-primary text-white shadow-sm'
                                : 'text-gray-600 hover:bg-gray-50'
                                }`}
                        >
                            Alarma Sin Permanencia
                        </button>
                        <button
                            onClick={() => setSelectedPlan('indefinida')}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${selectedPlan === 'indefinida'
                                ? 'bg-primary text-white shadow-sm'
                                : 'text-gray-600 hover:bg-gray-50'
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
                            className="group relative bg-white rounded-2xl p-8 transition-all duration-300 border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-2 hover:border-2 hover:border-primary hover:shadow-primary/10"
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                                        Más popular
                                    </span>
                                </div>
                            )}

                            {plan.badge && (
                                <div className="absolute -top-3 -right-3">
                                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                        {plan.badge}
                                    </span>
                                </div>
                            )}

                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>

                            <div className="flex items-baseline mb-8">
                                <span className="text-5xl font-extrabold text-gray-900">{plan.price}</span>
                                <span className="text-xl font-medium text-gray-500 ml-2">€/mes</span>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start">
                                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-600">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto">
                                <Button
                                    variant="outline"
                                    className="w-full justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary"
                                    size="lg"
                                >
                                    Contratar ahora
                                </Button>
                                <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center">
                                    <Info className="w-3 h-3 mr-1" />
                                    IVA incluido
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-600">
                        ¿Necesitas una configuración personalizada?
                        <a href="tel:937379317" className="text-primary font-bold ml-2 hover:underline">
                            Llámanos al 937 379 317
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};
