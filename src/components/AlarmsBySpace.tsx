import React from 'react';
import { Building2, Home, Package, DoorClosed, Building, HomeIcon, Briefcase, Store, Warehouse, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { ValuesBackground } from './ValuesBackground';

export const AlarmsBySpace: React.FC = () => {
    const spaceTypes = [
        {
            icon: Building2,
            title: 'Alarmas para negocio, local comercial y empresas',
            description: 'Protección profesional para tu negocio. Sistemas adaptados a locales comerciales con control de accesos, cámaras de vigilancia y conexión directa con seguridad.',
            href: '#',
            color: 'from-blue-500 to-blue-600'
        },
        {
            icon: Home,
            title: 'Alarmas para piso',
            description: 'Seguridad completa para tu piso. Instalación sencilla sin obras, detectores de movimiento y apertura, control desde tu móvil.',
            href: '#',
            color: 'from-green-500 to-green-600'
        },
        {
            icon: Package,
            title: 'Alarmas para trastero',
            description: 'Protege tus pertenencias almacenadas. Sistema inalámbrico fácil de instalar, alertas instantáneas ante cualquier acceso no autorizado.',
            href: '#',
            color: 'from-orange-500 to-orange-600'
        },
        {
            icon: DoorClosed,
            title: 'Sistemas de seguridad para puertas de entrada',
            description: 'Refuerza la seguridad de tu puerta principal. Detectores de apertura, cámaras con visión nocturna y notificaciones en tiempo real.',
            href: '#',
            color: 'from-purple-500 to-purple-600'
        },
        {
            icon: Building,
            title: 'Alarmas de seguridad para apartamentos',
            description: 'Soluciones compactas para apartamentos. Sistemas discretos y eficaces que se adaptan a espacios reducidos sin perder funcionalidad.',
            href: '#',
            color: 'from-cyan-500 to-cyan-600'
        },
        {
            icon: HomeIcon,
            title: 'Alarmas segunda residencia',
            description: 'Vigila tu segunda vivienda estés donde estés. Control remoto total, alertas inmediatas y verificación visual desde tu smartphone.',
            href: '#',
            color: 'from-pink-500 to-pink-600'
        },
        {
            icon: Briefcase,
            title: 'Alarmas oficina',
            description: 'Protección para tu espacio de trabajo. Sistemas que protegen equipos, documentos y garantizan la seguridad de tus empleados.',
            href: '#',
            color: 'from-indigo-500 to-indigo-600'
        },
        {
            icon: Store,
            title: 'Alarmas tienda',
            description: 'Seguridad especializada para comercios. Prevención de robos, control de inventario y protección durante y fuera del horario comercial.',
            href: '#',
            color: 'from-red-500 to-red-600'
        },
        {
            icon: Warehouse,
            title: 'Alarmas para naves industriales',
            description: 'Protección de grandes espacios industriales. Sistemas con amplio alcance, resistentes y adaptados a entornos exigentes.',
            href: '#',
            color: 'from-yellow-500 to-yellow-600'
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
                            Alarmas según su espacio
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8">
                            La solución perfecta para cada tipo de espacio
                        </p>
                        <p className="text-lg text-blue-100 mb-10">
                            Tu alarma como siempre la has querido: sencilla, económica y sin permanencia.
                            Bambai te ofrece seguridad honesta y con valores.
                        </p>
                        <Button variant="primary" size="lg" className="shadow-lg shadow-primary/30">
                            Ver precios
                        </Button>
                    </div>
                </div>
            </section>

            {/* Space Types Section */}
            <section className="relative z-10 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Tipos de alarmas según su espacio
                        </h2>
                        <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                            Cada espacio tiene necesidades únicas de seguridad. Encuentra la alarma perfecta
                            para tu hogar, negocio o propiedad.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {spaceTypes.map((space, index) => {
                            const Icon = space.icon;
                            return (
                                <div
                                    key={index}
                                    className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all duration-500 border border-white/10 hover:border-primary/50 overflow-hidden hover:-translate-y-2 hover:bg-white/10"
                                >
                                    {/* Gradient Background on Hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${space.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                    {/* Icon */}
                                    <div className="relative mb-6">
                                        <div className={`w-16 h-16 bg-gradient-to-br ${space.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative">
                                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors leading-tight">
                                            {space.title}
                                        </h3>
                                        <p className="text-blue-100 leading-relaxed mb-6 text-sm">
                                            {space.description}
                                        </p>

                                        {/* CTA Link */}
                                        <a
                                            href={space.href}
                                            className="inline-flex items-center gap-2 text-primary-300 font-semibold group-hover:gap-4 group-hover:text-primary-200 transition-all duration-300 text-sm"
                                        >
                                            Más información
                                            <ArrowRight className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="relative z-10 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ventajas de nuestras alarmas
                        </h2>
                        <p className="text-lg text-blue-100">
                            Sin importar el espacio, todas nuestras alarmas comparten estas características
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center group">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                                <Home className="w-8 h-8 text-primary-300 group-hover:text-primary-200" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">
                                Instalación fácil
                            </h3>
                            <p className="text-blue-100 text-sm">
                                Sin obras ni complicaciones, lista en minutos
                            </p>
                        </div>

                        <div className="text-center group">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                                <Building2 className="w-8 h-8 text-primary-300 group-hover:text-primary-200" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">
                                Adaptable
                            </h3>
                            <p className="text-blue-100 text-sm">
                                Se ajusta a cualquier tipo de espacio
                            </p>
                        </div>

                        <div className="text-center group">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                                <Briefcase className="w-8 h-8 text-primary-300 group-hover:text-primary-200" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">
                                Sin permanencia
                            </h3>
                            <p className="text-blue-100 text-sm">
                                Flexibilidad total, cancela cuando quieras
                            </p>
                        </div>

                        <div className="text-center group">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                                <Store className="w-8 h-8 text-primary-300 group-hover:text-primary-200" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">
                                Soporte 24/7
                            </h3>
                            <p className="text-blue-100 text-sm">
                                Asistencia continua cuando la necesites
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative z-10 py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-primary/20 backdrop-blur-md border border-primary/30 rounded-3xl p-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        ¿Necesitas ayuda para elegir?
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Nuestro equipo te asesorará para encontrar la alarma perfecta para tu espacio
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
