
import { Shield, Smartphone, Zap, Clock, Lock, Wifi } from 'lucide-react';

const features = [
    {
        icon: <Clock className="w-8 h-8 text-primary" />,
        title: 'Alarmas sin permanencia',
        description: 'Eres libre. Date de baja cuando quieras sin penalizaciones ni explicaciones.',
    },
    {
        icon: <Shield className="w-8 h-8 text-primary" />,
        title: 'Asistencia en el aviso a policía',
        description: 'Protección total con aviso inmediato a las fuerzas de seguridad en caso de intrusión.',
    },
    {
        icon: <Smartphone className="w-8 h-8 text-primary" />,
        title: 'Flexibilidad real',
        description: 'Adapta tu sistema de seguridad a lo que realmente necesitas, sin pagar por lo que no usas.',
    },
    {
        icon: <Zap className="w-8 h-8 text-primary" />,
        title: 'Sencillez',
        description: 'Tecnología avanzada hecha fácil. Sin complicaciones, sin obras y sin cables.',
    },
    {
        icon: <Lock className="w-8 h-8 text-primary" />,
        title: 'Ciberseguridad incluida',
        description: 'Protegemos no solo tu espacio físico, sino también tu red digital contra ataques.',
    },
    {
        icon: <Wifi className="w-8 h-8 text-primary" />,
        title: 'Siempre conectado',
        description: 'Sistema anti-inhibición con doble vía de comunicación para máxima seguridad.',
    },
];

export const FeaturesGrid: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Lo difícil es hacerlo fácil
                    </h2>
                    <p className="text-xl text-gray-600">
                        Reinventamos la seguridad para hacerla más fácil, transparente y accesible para todos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                        >
                            <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
