import React from 'react';
import { Shield, Lock, Radio, Brain, Phone, ArrowRight } from 'lucide-react';
import { Button } from './Button';

export const AlarmsByApplication: React.FC = () => {
    const alarmTypes = [
        {
            icon: Lock,
            title: 'Alarmas anti okupas',
            description: 'Protección específica contra ocupaciones ilegales. Sistema de detección temprana que te avisa ante cualquier intento de acceso no autorizado a tu propiedad.',
            href: '#',
            color: 'from-red-500 to-red-600'
        },
        {
            icon: Shield,
            title: 'Alarmas cableadas sin cuotas',
            description: 'Sistemas de seguridad con conexión por cable, sin necesidad de pagar cuotas mensuales. Instalación profesional y control total de tu sistema.',
            href: '#',
            color: 'from-blue-500 to-blue-600'
        },
        {
            icon: Radio,
            title: 'Alarmas anti inhibidores',
            description: 'Tecnología avanzada que detecta y neutraliza intentos de inhibición de señal. Protección garantizada incluso ante ataques sofisticados.',
            href: '#',
            color: 'from-purple-500 to-purple-600'
        },
        {
            icon: Brain,
            title: 'Alarmas inteligentes',
            description: 'Sistemas conectados con inteligencia artificial que aprenden de tus rutinas. Control total desde tu smartphone con notificaciones en tiempo real.',
            href: '#',
            color: 'from-green-500 to-green-600'
        },
        {
            icon: Phone,
            title: 'Alarmas conectadas a la policía',
            description: 'Conexión directa con las autoridades para una respuesta rápida. Sistema verificado que garantiza la intervención policial cuando más lo necesitas.',
            href: '#',
            color: 'from-orange-500 to-orange-600'
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary/5 via-white to-primary/10 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Alarmas según su aplicación
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-8">
                            Tu alarma como siempre la has querido
                        </p>
                        <p className="text-lg text-gray-600 mb-10">
                            Sencilla, económica y sin permanencia. Bambai te ofrece seguridad honesta y con valores.
                        </p>
                        <Button variant="primary" size="lg">
                            Ver precios
                        </Button>
                    </div>
                </div>
            </section>

            {/* Alarm Types Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            Tipos de alarmas según su aplicación
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Encuentra la solución de seguridad perfecta para tus necesidades específicas
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {alarmTypes.map((alarm, index) => {
                            const Icon = alarm.icon;
                            return (
                                <div
                                    key={index}
                                    className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-primary overflow-hidden"
                                >
                                    {/* Gradient Background on Hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${alarm.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                                    {/* Icon */}
                                    <div className="relative mb-6">
                                        <div className={`w-16 h-16 bg-gradient-to-br ${alarm.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                                            {alarm.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed mb-6">
                                            {alarm.description}
                                        </p>

                                        {/* CTA Link */}
                                        <a
                                            href={alarm.href}
                                            className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all duration-300"
                                        >
                                            Más información
                                            <ArrowRight className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Protección completa
                            </h3>
                            <p className="text-gray-600">
                                Sistemas diseñados para cada necesidad específica de seguridad
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Brain className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Tecnología avanzada
                            </h3>
                            <p className="text-gray-600">
                                Soluciones inteligentes con las últimas innovaciones en seguridad
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Phone className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Soporte 24/7
                            </h3>
                            <p className="text-gray-600">
                                Asistencia continua y conexión con autoridades cuando lo necesites
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        ¿No sabes qué alarma elegir?
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Nuestro equipo te ayudará a encontrar la solución perfecta para tu hogar o negocio
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
