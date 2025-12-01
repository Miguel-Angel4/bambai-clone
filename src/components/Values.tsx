import React from 'react';
import { Heart, Shield, Users, Lightbulb, Smile } from 'lucide-react';
import { ValuesBackground } from './ValuesBackground';

export const Values: React.FC = () => {
    const valuesList = [
        { icon: Lightbulb, title: 'Sencillez', description: 'Sin complicaciones innecesarias.' },
        { icon: Shield, title: 'Transparencia', description: 'Hablamos claro y directo.' },
        { icon: Users, title: 'Cercanía', description: 'Siempre accesibles para ti.' },
        { icon: Heart, title: 'Calidad humana', description: 'Cuidamos de ti y de los tuyos.' },
        { icon: Smile, title: 'Adaptabilidad', description: 'Nos ajustamos a tus necesidades.' },
    ];

    return (
        <div className="bg-white relative min-h-screen overflow-hidden">
            <ValuesBackground />

            {/* Hero Section */}
            <section className="relative z-10 bg-transparent py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        Valores Bambai
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Una forma diferente de entender la seguridad
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="relative z-10 py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed">
                        <p className="mb-8 text-xl font-medium text-gray-800">
                            Nos gustaría empezar agradeciendo tu interés en nosotr@s.
                        </p>

                        <p className="mb-6">
                            Somos Bambai, una empresa joven y diferente que nace en el 2020 con el objetivo claro de
                            reinterpretar el servicio de alarmas y sistemas de seguridad. Nacemos para hablar claro,
                            directo, transparente, y siempre estar accesibles para nuestros clientes.
                        </p>

                        <p className="mb-6">
                            Nuestro servicio es diferente, ofrecemos una suscripción sin permanencia. Queremos que sigas
                            siendo cliente por la calidad de nuestro servicio y de nuestro equipo humano y no porque tienes
                            un contrato firmado. Confiamos en ti, y trabajaremos para que confíes en nosotros.
                        </p>

                        <p className="mb-6">
                            Mucho hablan las empresas tradicionales sobre las maravillas de su tecnología. La nuestra es
                            justo lo indispensable. No tiene más colores, ni más funciones, ni más luces de las necesarias.
                            Hace su trabajo y lo hace muy bien. Nos permite ofrecerte un servicio de calidad y cuidar de ti
                            y de los tuyos con precisión.
                        </p>

                        <p className="mb-12">
                            Nuestros valores nos rigen: sencillez, adaptabilidad, cercanía, transparencia, calidad humana.
                            Son miles quienes nos conocen a lo largo y ancho del país, y pueden dar fe de ello. Si aún no
                            nos conoces date la oportunidad, que si algo no te encaja siempre tendrás libertad en tus decisiones.
                        </p>

                        {/* Values Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12 not-prose">
                            {valuesList.map((value, index) => {
                                const Icon = value.icon;
                                return (
                                    <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                                        <p className="text-sm text-gray-600">{value.description}</p>
                                    </div>
                                );
                            })}
                        </div>

                        <p className="mb-8">
                            No somos gigantes, para nosotros cada cliente es imprescindible. Nos esforzamos en darte el
                            mejor servicio y estar accesibles para ti ante cualquier duda. Y si en algún momento cometemos
                            un error, lo resolveremos con toda la profesionalidad que tu esperas de nosotros.
                        </p>

                        <div className="mt-12 border-t pt-8">
                            <p className="font-bold text-gray-900 text-lg">John Correa</p>
                            <p className="text-gray-500">CEO y co-fundador de Bambai.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
