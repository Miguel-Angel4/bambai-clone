import React from 'react';
import { Shield, Lock, Radio, Brain, Phone, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { ValuesBackground } from './ValuesBackground';

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
        <div className="relative min-h-screen">
            <ValuesBackground />

            {/* Hero Section */}
            <section className="relative z-10 bg-transparent py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Alarmas según su aplicación
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8">
                            Tu alarma como siempre la has querido
                        </p>
                        <p className="text-lg text-blue-100 mb-10">
                            Sencilla, económica y sin permanencia. Bambai te ofrece seguridad honesta y con valores.
                        </p>
                        <Button variant="primary" size="lg" className="shadow-lg shadow-primary/30">
                            Ver precios
                        </Button>
                    </div>
                </div>
            </section>

            {/* Alarm Types Section */}
            <section className="relative z-10 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Tipos de alarmas según su aplicación
                        </h2>
                        <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                            Encuentra la solución de seguridad perfecta para tus necesidades específicas
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {alarmTypes.map((alarm, index) => {
                            const Icon = alarm.icon;
                            return (
                                <div
                                    key={index}
                                    className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all duration-500 border border-white/10 hover:border-primary/50 overflow-hidden hover:-translate-y-2 hover:bg-white/10"
                                >
                                    {/* Gradient Background on Hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${alarm.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                    {/* Icon */}
                                    <div className="relative mb-6">
                                        <div className={`w-16 h-16 bg-gradient-to-br ${alarm.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative">
                                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors">
                                            {alarm.title}
                                        </h3>
                                        <p className="text-blue-100 leading-relaxed mb-6">
                                            {alarm.description}
                                        </p>

                                        {/* CTA Link */}
                                        <a
                                            href={alarm.href}
                                            className="inline-flex items-center gap-2 text-primary-300 font-semibold group-hover:gap-4 group-hover:text-primary-200 transition-all duration-300"
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
            <section className="relative z-10 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center group">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                                <Shield className="w-8 h-8 text-primary-300 group-hover:text-primary-200" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                Protección completa
                            </h3>
                            <p className="text-blue-100">
                                Sistemas diseñados para cada necesidad específica de seguridad
                            </p>
                        </div>

                        <div className="text-center group">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                                <Brain className="w-8 h-8 text-primary-300 group-hover:text-primary-200" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                Tecnología avanzada
                            </h3>
                            <p className="text-blue-100">
                                Soluciones inteligentes con las últimas innovaciones en seguridad
                            </p>
                        </div>

                        <div className="text-center group">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                                <Phone className="w-8 h-8 text-primary-300 group-hover:text-primary-200" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                Soporte 24/7
                            </h3>
                            <p className="text-blue-100">
                                Asistencia continua y conexión con autoridades cuando lo necesites
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative z-10 py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-primary/20 backdrop-blur-md border border-primary/30 rounded-3xl p-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        ¿No sabes qué alarma elegir?
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Nuestro equipo te ayudará a encontrar la solución perfecta para tu hogar o negocio
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="primary" size="lg" className="shadow-lg shadow-primary/40">
                            Ver todos los planes
                        </Button>
                        <a href="tel:937379317">
                            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                                Llamar al 937 379 317
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};
