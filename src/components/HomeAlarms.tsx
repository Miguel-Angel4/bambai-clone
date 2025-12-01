import React from 'react';
import { Check, Shield, Clock, Smartphone, Wrench } from 'lucide-react';
import { Button } from './Button';

export const HomeAlarms: React.FC = () => {
    const pricingPlans = [
        {
            name: 'Plan 1: Básica',
            subtitle: 'Alarma básica para vivienda segura',
            price: '19,99',
            period: 'Periodo mínimo 9 meses',
            features: [
                '1 Panel central',
                '1 Detector de movimiento',
                '1 Detector de apertura',
                '1 Llave inteligente',
                '3 Pegatinas disuasorias'
            ],
            highlight: false,
            description: 'Ideal para pisos pequeños, segundas residencias o para quienes buscan una alarma para vivienda práctica y económica.'
        },
        {
            name: 'Plan 2: Estándar',
            subtitle: 'Alarma con cámara wifi y streaming en directo',
            price: '24,99',
            period: 'Periodo mínimo 9 meses',
            features: [
                '1 Panel central',
                '1 Cámara wifi con streaming en directo',
                '1 Detector de movimiento',
                '1 Detector de apertura',
                '1 Llave inteligente',
                '3 Pegatinas disuasorias'
            ],
            highlight: true,
            description: 'El plan más elegido por familias que quieren comprobar desde el móvil qué ocurre en casa, incluso cuando están fuera.'
        },
        {
            name: 'Plan 3: Avanzada',
            subtitle: 'Alarma avanzada con máxima seguridad',
            price: '34,99',
            period: 'Periodo mínimo 9 meses',
            features: [
                '1 Panel central',
                '2 Cámaras wifi con streaming',
                '2 Detectores de movimiento',
                '2 Detectores de apertura',
                '2 Llaves inteligentes',
                '3 Pegatinas disuasorias'
            ],
            highlight: false,
            description: 'La mejor elección para casas grandes, chalets o cualquier vivienda que necesite un control más exhaustivo.'
        }
    ];

    const features = [
        {
            icon: Shield,
            title: 'Asistencia 24/7 y aviso inmediato a la policía',
            description: 'El soporte funciona las 24 horas del día, los 365 días del año. Si se detecta una intrusión, recibes una notificación inmediata en la app y puedes conectar con la comisaría más cercana para que el aviso a la policía sea rápido y directo.'
        },
        {
            icon: Clock,
            title: 'Autoinstalación gratuita y en solo 10 minutos',
            description: 'En 48 a 72 horas laborables recibes el equipo en tu casa y lo montas tú mismo en apenas 10 minutos. Sin cables, sin obras y sin agujeros en las paredes. Con asistencia remota si lo necesitas. Todo incluido en el precio, sin costes adicionales.'
        },
        {
            icon: Wrench,
            title: 'Equipo completo adaptado a tu vivienda',
            description: 'Panel central como cerebro del sistema, detectores de movimiento y de apertura para cubrir puertas y ventanas, llaves inteligentes para activar y desactivar la alarma cómodamente, cámaras con streaming en directo incluidas en los planes superiores, y pegatinas disuasorias que añaden un extra de protección.'
        },
        {
            icon: Smartphone,
            title: 'Control total desde la app',
            description: 'La app de Bambai convierte tu móvil en el mando de tu alarma. Activa o desactiva la alarma en segundos, revisa los movimientos detectados, fotos y vídeos, comparte acceso con otras personas decidiendo qué permisos tiene cada una, y confirma alertas de inmediato avisando a la policía desde la misma app.'
        }
    ];

    const transparencyPoints = [
        {
            title: 'Todo incluido en tu alarma para vivienda',
            description: 'Instalación gratuita, mantenimiento, soporte 24/7 y asistencia inmediata para avisar a la policía en caso de incidencia.'
        },
        {
            title: 'Ahorro real frente a otras empresas',
            description: 'Desde 19,99 €/mes tienes cobertura total sin costes de instalación ni equipos adicionales.'
        },
        {
            title: 'Sin costes ocultos ni letra pequeña',
            description: 'Lo que ves es lo que pagas. Sin sorpresas, sin cargos extra, sin complicaciones.'
        },
        {
            title: 'La tranquilidad de pagar lo justo',
            description: 'Protege tu hogar con precios que cualquiera pueda asumir y con un servicio completo que ya lo incluye todo.'
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary/5 via-white to-primary/10 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Alarmas de seguridad para casa, hogar y vivienda
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-8">
                            Planes desde <span className="text-primary font-bold">19,99 €/mes</span>
                        </p>
                        <p className="text-lg text-gray-600 mb-10">
                            En Bambai creemos que la seguridad no tiene por qué ser cara ni esconder sorpresas. 
                            Nuestras alarmas para casa están pensadas para ser accesibles, claras y sin letra pequeña.
                        </p>
                        <Button variant="primary" size="lg">
                            Ver precios
                        </Button>
                    </div>
                </div>
            </section>

            {/* Pricing Plans Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            Planes de alarmas para casa desde 19,99 €/mes
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            En Bambai tenemos claro que la seguridad no debería costar un dineral ni obligarte a firmar 
                            contratos interminables. Eliges el nivel de seguridad que mejor encaje contigo y con tu vivienda, 
                            pagando solo por lo que de verdad necesitas.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pricingPlans.map((plan, index) => (
                            <div
                                key={index}
                                className={`relative bg-white rounded-2xl p-8 transition-all duration-300 border-2 shadow-lg hover:shadow-xl hover:-translate-y-2 ${
                                    plan.highlight
                                        ? 'border-primary shadow-primary/20'
                                        : 'border-gray-200 hover:border-primary'
                                }`}
                            >
                                {plan.highlight && (
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                                            Más popular
                                        </span>
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <p className="text-sm text-gray-600 mb-6">{plan.subtitle}</p>

                                <div className="flex items-baseline mb-2">
                                    <span className="text-5xl font-extrabold text-gray-900">{plan.price}</span>
                                    <span className="text-xl font-medium text-gray-500 ml-2">€/mes</span>
                                </div>
                                <p className="text-sm text-gray-500 mb-6">{plan.period}</p>

                                <ul className="space-y-3 mb-6">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <p className="text-sm text-gray-600 mb-6 italic">{plan.description}</p>

                                <Button
                                    variant={plan.highlight ? 'primary' : 'outline'}
                                    className="w-full justify-center"
                                    size="lg"
                                >
                                    Contratar ahora
                                </Button>
                                <p className="text-center text-xs text-gray-400 mt-4">IVA incluido</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-gray-600">
                            Todos nuestros planes incluyen instalación gratuita, mantenimiento, soporte 24/7 
                            y asistencia inmediata para que puedas avisar a la policía en caso de incidencia.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing Transparency Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            Precios justos y transparentes
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            La idea es sencilla: proteger tu hogar con precios que cualquiera pueda asumir 
                            y con un servicio completo que ya lo incluye todo.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {transparencyPoints.map((point, index) => (
                            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
                                <p className="text-gray-600">{point.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            Características de nuestras alarmas de seguridad
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            En Bambai creemos que las alarmas para casa tienen que ser fáciles, claras y accesibles. 
                            El sistema está pensado para que tengas tranquilidad desde el primer minuto, 
                            sin instalaciones invasivas ni complicaciones técnicas.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div key={index} className="flex gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                                            <Icon className="w-7 h-7 text-primary" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        ¿Listo para proteger tu hogar?
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Contrata tu alarma hoy y empieza a disfrutar de la tranquilidad que mereces
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="secondary" size="lg">
                            Ver todos los planes
                        </Button>
                        <a href="tel:937379317">
                            <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-gray-100 border-white">
                                Llamar al 937 379 317
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};
