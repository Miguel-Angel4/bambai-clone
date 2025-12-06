import React from 'react';
import { useTranslation } from 'react-i18next';
import { Check, Shield, Clock, Smartphone, Wrench } from 'lucide-react';
import { Button } from './Button';
import { ValuesBackground } from './ValuesBackground';

export const HomeAlarms: React.FC = () => {
    const { t } = useTranslation();
    const pricingPlans = [
        {
            name: t('home_alarms.plans.plan_1_name'),
            subtitle: t('home_alarms.plan_1_subtitle'),
            price: '19,99',
            period: t('prices_page.plans.features.min_period'),
            features: [
                t('home_alarms.plans.features.panel'),
                t('home_alarms.plans.features.motion_1'),
                t('home_alarms.plans.features.opening_1'),
                t('home_alarms.plans.features.key_1'),
                t('home_alarms.plans.features.stickers')
            ],
            highlight: false,
            description: t('home_alarms.plan_1_desc')
        },
        {
            name: t('home_alarms.plans.plan_2_name'),
            subtitle: t('home_alarms.plan_2_subtitle'),
            price: '24,99',
            period: t('prices_page.plans.features.min_period'),
            features: [
                t('home_alarms.plans.features.panel'),
                t('home_alarms.plans.features.camera_1'),
                t('home_alarms.plans.features.motion_1'),
                t('home_alarms.plans.features.opening_1'),
                t('home_alarms.plans.features.key_1'),
                t('home_alarms.plans.features.stickers')
            ],
            highlight: true,
            description: t('home_alarms.plan_2_desc')
        },
        {
            name: t('home_alarms.plans.plan_3_name'),
            subtitle: t('home_alarms.plan_3_subtitle'),
            price: '34,99',
            period: t('prices_page.plans.features.min_period'),
            features: [
                t('home_alarms.plans.features.panel'),
                t('home_alarms.plans.features.camera_2'),
                t('home_alarms.plans.features.motion_2'),
                t('home_alarms.plans.features.opening_2'),
                t('home_alarms.plans.features.key_2'),
                t('home_alarms.plans.features.stickers')
            ],
            highlight: false,
            description: t('home_alarms.plan_3_desc')
        }
    ];

    const features = [
        {
            icon: Shield,
            title: t('home_alarms.features_list.1_title'),
            description: t('home_alarms.features_list.1_desc')
        },
        {
            icon: Clock,
            title: t('home_alarms.features_list.2_title'),
            description: t('home_alarms.features_list.2_desc')
        },
        {
            icon: Wrench,
            title: t('home_alarms.features_list.3_title'),
            description: t('home_alarms.features_list.3_desc')
        },
        {
            icon: Smartphone,
            title: t('home_alarms.features_list.4_title'),
            description: t('home_alarms.features_list.4_desc')
        }
    ];

    const transparencyPoints = [
        {
            title: t('home_alarms.transparency_points.1_title'),
            description: t('home_alarms.transparency_points.1_desc')
        },
        {
            title: t('home_alarms.transparency_points.2_title'),
            description: t('home_alarms.transparency_points.2_desc')
        },
        {
            title: t('home_alarms.transparency_points.3_title'),
            description: t('home_alarms.transparency_points.3_desc')
        },
        {
            title: t('home_alarms.transparency_points.4_title'),
            description: t('home_alarms.transparency_points.4_desc')
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
                            {t('home_alarms.hero_title')}
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8">
                            {t('home_alarms.hero_subtitle_prefix')} <span className="text-primary-300 font-bold">19,99 €/mes</span>
                        </p>
                        <p className="text-lg text-blue-100 mb-10">
                            {t('home_alarms.hero_desc')}
                        </p>
                        <Button variant="primary" size="lg" className="shadow-lg shadow-primary/30">
                            {t('home_alarms.cta_button')}
                        </Button>
                    </div>
                </div>
            </section>

            {/* Pricing Plans Section */}
            <section className="relative z-10 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            {t('home_alarms.pricing_title')}
                        </h2>
                        <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                            {t('home_alarms.pricing_desc')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pricingPlans.map((plan, index) => (
                            <div
                                key={index}
                                className={`relative bg-white/5 backdrop-blur-md rounded-2xl p-8 transition-all duration-500 border shadow-xl hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:-translate-y-2 hover:bg-white/10 ${plan.highlight
                                    ? 'border-primary/50 shadow-primary/20 ring-2 ring-primary/30'
                                    : 'border-white/10 hover:border-primary/50'
                                    }`}
                            >
                                {plan.highlight && (
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg shadow-primary/40">
                                            {t('prices_page.popular_badge')}
                                        </span>
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">{plan.name}</h3>
                                <p className="text-sm text-blue-200 mb-6">{plan.subtitle}</p>

                                <div className="flex items-baseline mb-2">
                                    <span className="text-5xl font-extrabold text-white">{plan.price}</span>
                                    <span className="text-xl font-medium text-blue-200 ml-2">€/mes</span>
                                </div>
                                <p className="text-sm text-blue-300 mb-6">{plan.period}</p>

                                <ul className="space-y-3 mb-6">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <Check className="w-5 h-5 text-primary-400 mr-3 flex-shrink-0 mt-0.5" />
                                            <span className="text-blue-100">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <p className="text-sm text-blue-200 mb-6 italic">{plan.description}</p>

                                <Button
                                    variant={plan.highlight ? 'primary' : 'outline'}
                                    className={`w-full justify-center ${!plan.highlight ? 'border-white/20 text-white hover:bg-primary hover:text-white hover:border-primary' : ''}`}
                                    size="lg"
                                >
                                    {t('prices_page.cta_contract')}
                                </Button>
                                <p className="text-center text-xs text-blue-300/60 mt-4">{t('prices_page.vat_included')}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-blue-200">
                            {t('home_alarms.all_included')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing Transparency Section */}
            <section className="relative z-10 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            {t('home_alarms.transparency_title')}
                        </h2>
                        <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                            {t('home_alarms.transparency_desc')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {transparencyPoints.map((point, index) => (
                            <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                                <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
                                <p className="text-blue-100">{point.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="relative z-10 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            {t('home_alarms.features_title')}
                        </h2>
                        <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                            {t('home_alarms.features_desc')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div key={index} className="flex gap-6 group">
                                    <div className="flex-shrink-0">
                                        <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                            <Icon className="w-7 h-7 text-primary-300 group-hover:text-primary-200" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                        <p className="text-blue-100 leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative z-10 py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-primary/20 backdrop-blur-md border border-primary/30 rounded-3xl p-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        {t('home_alarms.cta_title')}
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        {t('home_alarms.cta_desc')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="primary" size="lg" className="shadow-lg shadow-primary/40">
                            {t('home_alarms.cta_button')}
                        </Button>
                        <a href="tel:937379317">
                            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                                {t('home_alarms.cta_call')}
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};
