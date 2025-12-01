import React from 'react';
import { Check, Camera, Shield, Home, Building2, Warehouse, Caravan, MapPin, PawPrint, Lightbulb } from 'lucide-react';
import { Button } from './Button';

export const MotionSensors: React.FC = () => {
    const housingTypes = [
        {
            icon: Home,
            title: 'En pisos o apartamentos',
            description: 'En los pisos, donde los espacios suelen ser más reducidos, bastan unos pocos sensores de movimiento bien colocados en pasillos, entradas y zonas de paso. Los detectores de movimiento por infrarrojos (PIR) son los más habituales y funcionan genial en interiores. Detectan los cambios de temperatura corporal y son discretos, eficaces y fáciles de instalar.'
        },
        {
            icon: Building2,
            title: 'En casas con jardín o varias plantas',
            description: 'En viviendas más grandes, lo ideal es combinar varios tipos de detectores de movimiento. Los de exterior, resistentes a la lluvia y al polvo, son perfectos para vigilar accesos, terrazas y zonas traseras. Dentro de casa, los detectores duales (que combinan infrarrojos y microondas) cubren varias plantas y reducen las falsas alarmas.'
        },
        {
            icon: Warehouse,
            title: 'En locales, oficinas o almacenes',
            description: 'Estos espacios suelen ser más amplios y menos transitados, por lo que conviene usar detectores de movimiento de microondas. Suelen tener más alcance y una sensibilidad más alta. Si los combinas con cámaras, podrás verificar cualquier alerta en tiempo real sin moverte del sitio.'
        },
        {
            icon: Caravan,
            title: 'En caravanas o segundas residencias',
            description: 'Si solo necesitas proteger un espacio durante un tiempo limitado, los sensores de movimiento inalámbricos son la mejor opción. Se instalan en minutos, no requieren obra ni instalación profesional y puedes darte de baja cuando quieras si eliges una alarma sin permanencia como la nuestra.'
        }
    ];

    const placementTips = [
        'Zonas de paso: pasillos, entradas o escaleras son puntos clave. Colocar ahí los sensores de movimiento garantiza que se detecte cualquier desplazamiento.',
        'Altura adecuada: lo ideal es instalarlos entre 2 y 2,5 metros del suelo, orientados hacia la zona que quieres cubrir.',
        'Evita el calor directo: radiadores, chimeneas o luz solar intensa pueden alterar la detección.',
        'Puertas y ventanas: combina los detectores de movimiento con sensores de apertura para reforzar los puntos de entrada.',
        'Exterior protegido: si los instalas fuera, busca zonas cubiertas o bajo aleros para protegerlos de la lluvia y el sol.'
    ];

    const cameraAdvantages = [
        {
            title: 'Confirmación visual inmediata',
            description: 'Los detectores de movimiento tradicionales avisan cuando algo se mueve, pero no te muestran qué ha pasado. Con los sensores de movimiento con cámara puedes verlo en tiempo real desde tu móvil y decidir si se trata de una alarma real o de un movimiento inocente.'
        },
        {
            title: 'Menos falsas alarmas',
            description: 'La verificación visual permite evitar sustos innecesarios. Si tienes mascotas o hay corrientes de aire que podrían activar un detector, la cámara te ayuda a comprobarlo al instante.'
        },
        {
            title: 'Control total desde tu móvil',
            description: 'A través de la app de Bambai, puedes acceder a las imágenes en directo o revisar los clips grabados cada vez que se activa un sensor. Estés donde estés, sabrás qué ocurre en casa.'
        },
        {
            title: 'Pruebas en caso de intrusión',
            description: 'Si alguien intenta entrar, las cámaras registran la secuencia del suceso. De esta forma tendrás pruebas visuales que pueden serte útiles si necesitas justificar el incidente.'
        },
        {
            title: 'Integración con todo el sistema',
            description: 'En Bambai, los sensores de movimiento con cámara se comunican con el resto de dispositivos: detectores de movimiento, sensores de apertura y el panel central. Todo el sistema trabaja coordinado.'
        },
        {
            title: 'Perfectos para casas con mascotas o segundas residencias',
            description: 'Si tienes animales, sabrás de inmediato si ha sido tu perro quien ha pasado frente al sensor o si realmente hay algo más. También son una gran opción para segundas viviendas o locales que no visitas a diario.'
        }
    ];

    const systemFeatures = [
        {
            title: 'Instalación sin obras',
            description: 'Todo se monta en minutos y sin herramientas.'
        },
        {
            title: 'Aviso a la policía asistido',
            description: 'Si ocurre algo, te ayudamos a contactar con la comisaría más cercana.'
        },
        {
            title: 'Soporte real 24/7',
            description: 'Nuestro equipo está disponible siempre, sin bots ni esperas eternas.'
        },
        {
            title: 'Sin compra obligatoria',
            description: 'No tienes que pagar por la alarma, la usas mientras la necesites.'
        },
        {
            title: 'Flexibilidad total',
            description: 'Puedes cambiar de plan o darte de baja cuando quieras.'
        }
    ];

    const selectionTips = [
        {
            icon: Lightbulb,
            title: 'Piensa en tus rutinas',
            description: 'Si pasas muchas horas fuera, prioriza detectores con notificación inmediata a la app para reaccionar rápido.'
        },
        {
            icon: Lightbulb,
            title: 'Valora el entorno',
            description: 'En estancias con mucha luz o variaciones de temperatura, los detectores de microondas funcionan mejor.'
        },
        {
            icon: Lightbulb,
            title: 'Combina tecnologías',
            description: 'Un sistema que mezcle sensores PIR con cámaras te dará una protección más completa.'
        },
        {
            icon: Lightbulb,
            title: 'Busca flexibilidad',
            description: 'Si vives de alquiler o planeas mudarte, elige detectores de movimiento que puedas mover o ampliar sin depender de técnicos.'
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary/5 via-white to-primary/10 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Sensores y detectores de movimiento
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-8">
                            Protección eficaz, fácil de instalar y con aviso inmediato al móvil
                        </p>
                        <p className="text-lg text-gray-600 mb-10">
                            Las alarmas con detectores de movimiento son el corazón de cualquier sistema de seguridad moderno.
                            En Bambai nuestros detectores están pensados para reaccionar en segundos y avisarte al instante,
                            sin esperas, sin complicaciones y, por supuesto, sin permanencias.
                        </p>
                        <Button variant="primary" size="lg">
                            Ver precios
                        </Button>
                    </div>
                </div>
            </section>

            {/* Housing Types Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            Detectores de movimiento según el tipo de vivienda
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Cada tipo de vivienda necesita una distribución y una tecnología diferente.
                            No se trata de llenar la casa de sensores, sino de colocarlos donde de verdad sirven
                            y aprovechar al máximo su alcance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {housingTypes.map((type, index) => {
                            const Icon = type.icon;
                            return (
                                <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                                <Icon className="w-6 h-6 text-primary" />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900">{type.title}</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">{type.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Placement Tips Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            Dónde colocar los sensores de movimiento para proteger de verdad
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            La ubicación de los detectores de movimiento es tan importante como su calidad.
                            Un sensor bien colocado puede cubrir una habitación entera; uno mal situado puede dejar zonas sin vigilancia.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <ul className="space-y-4">
                                {placementTips.map((tip, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                        <span className="text-gray-700 leading-relaxed">{tip}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pets Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                                <PawPrint className="w-10 h-10 text-primary" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Si tienes mascotas, esto te interesa
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Las mascotas y los sensores de movimiento siempre han tenido una relación complicada,
                                pero eso es cosa del pasado. Los detectores de movimiento actuales son capaces de
                                diferenciar entre una persona y un animal pequeño (hasta unos 20 kilos).
                                Si tu perro o tu gato se mueve por casa, el sistema lo ignora.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                En Bambai, además, contamos con packs especiales para hogares con mascotas.
                                Combinamos detectores de apertura en puertas y ventanas con cámaras interiores,
                                para que, si salta una alerta, puedas comprobar en segundos si ha sido tu mascota o algo más serio.
                            </p>
                        </div>
                        <div className="flex-1">
                            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-12 text-center">
                                <PawPrint className="w-32 h-32 text-primary/30 mx-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Selection Tips Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            Consejos para acertar al elegir tus detectores de movimiento
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Antes de decidirte, hay algunos detalles que merece la pena tener en cuenta
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {selectionTips.map((tip, index) => {
                            const Icon = tip.icon;
                            return (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <Icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-2">{tip.title}</h3>
                                            <p className="text-gray-600">{tip.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Camera Sensors Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            Sensores de movimiento con cámara
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                            Los sensores de movimiento con cámara son la evolución natural de los sistemas de seguridad domésticos.
                            No solo detectan lo que pasa, sino que también te lo muestran al instante.
                        </p>
                        <div className="bg-primary/5 rounded-2xl p-8 max-w-4xl mx-auto">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Cómo funcionan los sensores de movimiento con cámara
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Un sensor de movimiento con cámara detecta cualquier cambio en el espacio que vigila y,
                                en cuanto lo percibe, activa la cámara y te envía una notificación al móvil.
                                En ese momento puedes ver en directo qué ha ocurrido y decidir cómo actuar.
                                El sistema es tan rápido que apenas pasan unos segundos desde que se detecta el movimiento
                                hasta que recibes el aviso.
                            </p>
                        </div>
                    </div>

                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                            Ventajas de los detectores de movimiento con cámara
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {cameraAdvantages.map((advantage, index) => (
                                <div key={index} className="bg-gray-50 rounded-xl p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Camera className="w-5 h-5 text-primary flex-shrink-0" />
                                        <h4 className="font-bold text-gray-900">{advantage.title}</h4>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">{advantage.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            Cuándo conviene instalar sensores de movimiento con cámara
                        </h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Los sensores de movimiento con cámara no son imprescindibles para todos los hogares,
                            pero sí muy recomendables en muchos casos. Te convienen especialmente si:
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                <span className="text-gray-700">Pasas gran parte del día fuera y quieres comprobar visualmente que todo está bien.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                <span className="text-gray-700">Tienes una casa amplia, con varias plantas o entradas.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                <span className="text-gray-700">Quieres reducir al mínimo las falsas alarmas por mascotas o movimientos ambientales.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                <span className="text-gray-700">Buscas una solución flexible y moderna, sin depender de contratos largos ni instalaciones complicadas.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* How Bambai System Works */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            Cómo funciona el sistema de Bambai
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            El sistema se basa en una idea muy sencilla: un panel central conectado con distintos
                            sensores y detectores de movimiento colocados en puntos estratégicos de la vivienda.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white rounded-xl p-8 shadow-md">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Cuando se detecta un movimiento
                            </h3>
                            <ol className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                                    <span className="text-gray-700">El panel comprueba si la alarma está activada.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                                    <span className="text-gray-700">Si lo está, te envía una notificación inmediata a la app.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                                    <span className="text-gray-700">Si hay cámaras instaladas, puedes ver en directo lo que está pasando.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                                    <span className="text-gray-700">Si confirmas que no eres tú, el sistema te guía para contactar con la policía.</span>
                                </li>
                            </ol>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-md">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Instalación sencilla
                            </h3>
                            <p className="text-gray-700 mb-4">
                                Una de las ventajas de Bambai es que todo se instala en casa sin complicaciones.
                                No necesitas técnicos ni herramientas.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Coloca el panel central en una zona con buena cobertura móvil.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Sitúa los sensores y detectores de movimiento en entradas, pasillos o zonas comunes.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Conéctalo a la app y comprueba que todo funciona correctamente.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                            Qué hace diferente a Bambai
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {systemFeatures.map((feature, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                                        <p className="text-sm text-gray-600">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Tu alarma para casa como siempre la has querido
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Sencilla, económica y sin permanencia
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
