
import { Shield, Smartphone, Zap, Clock, Lock, Wifi } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const FeaturesGrid: React.FC = () => {
    const { t } = useTranslation();

    const features = [
        {
            icon: <Clock className="w-8 h-8 text-primary" />,
            title: t('features.no_permanence_title'),
            description: t('features.no_permanence_desc'),
        },
        {
            icon: <Shield className="w-8 h-8 text-primary" />,
            title: t('features.police_title'),
            description: t('features.police_desc'),
        },
        {
            icon: <Smartphone className="w-8 h-8 text-primary" />,
            title: t('features.flexibility_title'),
            description: t('features.flexibility_desc'),
        },
        {
            icon: <Zap className="w-8 h-8 text-primary" />,
            title: t('features.simplicity_title'),
            description: t('features.simplicity_desc'),
        },
        {
            icon: <Lock className="w-8 h-8 text-primary" />,
            title: t('features.cybersecurity_title'),
            description: t('features.cybersecurity_desc'),
        },
        {
            icon: <Wifi className="w-8 h-8 text-primary" />,
            title: t('features.connected_title'),
            description: t('features.connected_desc'),
        },
    ];

    const delayClasses = ['', 'delay-100', 'delay-200', 'delay-100', 'delay-200', 'delay-300'];

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {t('features.title')}
                    </h2>
                    <p className="text-xl text-gray-600">
                        {t('features.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`bg-white p-8 rounded-2xl shadow-sm transition-all duration-300 border border-gray-100 hover:border-primary/50 hover:shadow-glow hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white hover:to-primary/5 animate-fade-in-up ${delayClasses[index]}`}
                        >
                            <div className="bg-gradient-to-br from-primary/10 to-purple-100/50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
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
