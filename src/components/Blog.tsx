import React from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { ValuesBackground } from './ValuesBackground';

interface BlogPost {
    title: string;
    excerpt: string;
    date: string;
    author: string;
    category: string;
    imageUrl: string;
    href: string;
}

export const Blog: React.FC = () => {
    const posts: BlogPost[] = [
        {
            title: "Qué alarma poner en casa",
            excerpt: "Si quieres saber la respuesta adecuada a qué alarma poner en casa, en Bambai, como empresa experta en este tipo de sistema de seguridad...",
            date: "20 Nov 2024",
            author: "Equipo Bambai",
            category: "Alarma para casa",
            imageUrl: "https://images.unsplash.com/photo-1558002038-1091a166111c?auto=format&fit=crop&q=80&w=800",
            href: "https://www.bambai.es/blog/que-alarma-poner-en-casa"
        },
        {
            title: "Los mejores perros guardianes: descubre la raza ideal para ti",
            excerpt: "Descubre cuáles son las mejores razas de perros guardianes para proteger tu hogar y a tu familia. Una guía completa para elegir...",
            date: "18 Nov 2024",
            author: "Equipo Bambai",
            category: "Seguridad",
            imageUrl: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=800",
            href: "https://www.bambai.es/blog/perro-guardian"
        },
        {
            title: "Cómo abrir una puerta con la llave dentro: trucos que funcionan",
            excerpt: "¿Te has dejado las llaves dentro? No entres en pánico. Te explicamos algunos trucos seguros y efectivos para abrir tu puerta...",
            date: "15 Nov 2024",
            author: "Equipo Bambai",
            category: "Consejos",
            imageUrl: "https://images.unsplash.com/photo-1516961642265-531546e84af2?auto=format&fit=crop&q=80&w=800",
            href: "https://www.bambai.es/blog/como-abrir-puerta-llave-dentro"
        },
        {
            title: "Grados de seguridad: niveles, usos y normativas aplicables",
            excerpt: "Entiende los diferentes grados de seguridad en alarmas y sistemas de protección. ¿Qué nivel necesita realmente tu vivienda o negocio?",
            date: "12 Nov 2024",
            author: "Equipo Bambai",
            category: "Normativa",
            imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
            href: "https://www.bambai.es/blog/grados-seguridad"
        },
        {
            title: "Instalación de CCTV: pasos, consejos y normativa básica",
            excerpt: "Guía paso a paso para la instalación de un sistema de CCTV. Conoce la normativa vigente y los mejores consejos para una instalación...",
            date: "10 Nov 2024",
            author: "Equipo Bambai",
            category: "Tecnología",
            imageUrl: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800",
            href: "https://www.bambai.es/blog/instalacion-cctv"
        },
        {
            title: "Alarmas GPRS: todo sobre su funcionamiento y ventajas",
            excerpt: "Las alarmas GPRS ofrecen una seguridad superior al no depender de la línea telefónica fija. Descubre cómo funcionan y sus ventajas...",
            date: "08 Nov 2024",
            author: "Equipo Bambai",
            category: "Tecnología",
            imageUrl: "https://images.unsplash.com/photo-1563770095-39d468f95742?auto=format&fit=crop&q=80&w=800",
            href: "https://www.bambai.es/blog/gprs-alarmas"
        },
        {
            title: "Instalación de una cámara de vigilancia: guía completa",
            excerpt: "Aprende a instalar tu propia cámara de vigilancia con esta guía completa. Consejos de ubicación, configuración y mantenimiento...",
            date: "05 Nov 2024",
            author: "Equipo Bambai",
            category: "Guías",
            imageUrl: "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&q=80&w=800",
            href: "https://www.bambai.es/blog/instalacion-camara-vigilancia"
        },
        {
            title: "Barrios más peligrosos de Sevilla",
            excerpt: "Un análisis de las zonas con mayor índice de incidencias en Sevilla. Información útil para conocer la seguridad de los diferentes barrios...",
            date: "01 Nov 2024",
            author: "Equipo Bambai",
            category: "Seguridad Local",
            imageUrl: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&q=80&w=800",
            href: "https://www.bambai.es/blog/barrios-mas-peligrosos-sevilla"
        },
        {
            title: "Barrio más peligroso de Valencia",
            excerpt: "Descubre qué zonas de Valencia requieren mayor precaución y qué medidas de seguridad son recomendables si vives en ellas...",
            date: "28 Oct 2024",
            author: "Equipo Bambai",
            category: "Seguridad Local",
            imageUrl: "https://images.unsplash.com/photo-1514924013411-cbf25faa35ad?auto=format&fit=crop&q=80&w=800",
            href: "https://www.bambai.es/blog/barrio-mas-peligroso-valencia"
        }
    ];

    return (
        <div className="relative min-h-screen">
            <ValuesBackground />

            {/* Hero Section */}
            <section className="relative z-10 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Blog Bambai
                        </h1>
                        <p className="text-xl text-blue-100">
                            Consejos de seguridad, guías y novedades para proteger lo que más importa
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <article
                                key={index}
                                className="group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                            >
                                {/* Image */}
                                <div className="h-48 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                                    <img
                                        src={post.imageUrl}
                                        alt={post.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-bold rounded-full uppercase tracking-wider">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-xs text-blue-200 mb-4">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User className="w-3 h-3" />
                                            {post.author}
                                        </div>
                                    </div>

                                    <h2 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-primary-300 transition-colors">
                                        {post.title}
                                    </h2>

                                    <p className="text-blue-100 text-sm mb-6 line-clamp-3 leading-relaxed">
                                        {post.excerpt}
                                    </p>

                                    <a
                                        href={post.href}
                                        className="inline-flex items-center gap-2 text-primary-300 font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                                    >
                                        Leer más
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
