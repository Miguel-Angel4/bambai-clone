import React from 'react';
import { useTranslation } from 'react-i18next';
import { Check, Camera, Shield, Home, Building2, Warehouse, Caravan, MapPin, PawPrint, Lightbulb } from 'lucide-react';
import { Button } from './Button';
import { ValuesBackground } from './ValuesBackground';

export const MotionSensors: React.FC = () => {
    const { t } = useTranslation();
    
    const housingTypes = [
        {
            icon: Home,
            title: t('motion_sensors.housing_types.1_title'),
            description: t('motion_sensors.housing_types.1_desc')
        },
        {
            icon: Building2,
            title: t('motion_sensors.housing_types.2_title'),
            description: t('motion_sensors.housing_types.2_desc')
        },
        {
            icon: Warehouse,
            title: t('motion_sensors.housing_types.3_title'),
            description: t('motion_sensors.housing_types.3_desc')
        },
        {
            icon: Caravan,
            title: t('motion_sensors.housing_types.4_title'),
            description: t('motion_sensors.housing_types.4_desc')
        }
    ];

    const placementTips = [
        t('motion_sensors.placement_tips.1'),
        t('motion_sensors.placement_tips.2'),
        t('motion_sensors.placement_tips.3'),
        t('motion_sensors.placement_tips.4'),
        t('motion_sensors.placement_tips.5')
    ];

    const cameraAdvantages = [
        {
            title: t('motion_sensors.advantages_list.1_title'),
            description: t('motion_sensors.advantages_list.1_desc')
        },
        {
            title: t('motion_sensors.advantages_list.2_title'),
            description: t('motion_sensors.advantages_list.2_desc')
        },
        {
            title: t('motion_sensors.advantages_list.3_title'),
            description: t('motion_sensors.advantages_list.3_desc')
        },
        {
            title: t('motion_sensors.advantages_list.4_title'),
            description: t('motion_sensors.advantages_list.4_desc')
        },
        {
            title: t('motion_sensors.advantages_list.5_title'),
            description: t('motion_sensors.advantages_list.5_desc')
        },
        {
            title: t('motion_sensors.advantages_list.6_title'),
            description: t('motion_sensors.advantages_list.6_desc')
        }
    ];

    const systemFeatures = [
        {
            title: t('motion_sensors.different_list.1_title'),
            description: t('motion_sensors.different_list.1_desc')
        },
        {
            title: t('motion_sensors.different_list.2_title'),
            description: t('motion_sensors.different_list.2_desc')
        },
        {
            title: t('motion_sensors.different_list.3_title'),
            description: t('motion_sensors.different_list.3_desc')
        },
        {
            title: t('motion_sensors.different_list.4_title'),
            description: t('motion_sensors.different_list.4_desc')
        },
        {
            title: t('motion_sensors.different_list.5_title'),
            description: t('motion_sensors.different_list.5_desc')
        }
    ];

    const selectionTips = [
        {
            icon: Lightbulb,
            title: t('motion_sensors.selection_tips.1_title'),
            description: t('motion_sensors.selection_tips.1_desc')
        },
        {
            icon: Lightbulb,
            title: t('motion_sensors.selection_tips.2_title'),
            description: t('motion_sensors.selection_tips.2_desc')
        },
        {
            icon: Lightbulb,
            title: t('motion_sensors.selection_tips.3_title'),
            description: t('motion_sensors.selection_tips.3_desc')
        },
        {
            icon: Lightbulb,
            title: t('motion_sensors.selection_tips.4_title'),
            description: t('motion_sensors.selection_tips.4_desc')
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
                            {t('motion_sensors.hero_title')}
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8">
                            {t('motion_sensors.hero_subtitle')}
                        </p>
                        <p className="text-lg text-blue-100 mb-10">
                            {t('motion_sensors.hero_desc')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Housing Types Section */}
            <section className="relative z-10 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            {t('motion_sensors.housing_title')}
                        </h2>
                        <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                            {t('motion_sensors.housing_desc')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {housingTypes.map((type, index) => {
                            const Icon = type.icon;
                            return (
                                <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                                                <Icon className="w-6 h-6 text-primary-300" />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-white">{type.title}</h3>
                                    </div>
                                    <p className="text-blue-100 leading-relaxed">{type.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Placement Tips Section */}
            <section className="relative z-10 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            {t('motion_sensors.placement_title')}
                        </h2>
                        <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                            {t('motion_sensors.placement_desc')}
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl">
                            <ul className="space-y-4">
                                {placementTips.map((tip, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <MapPin className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
                                        <span className="text-blue-100 leading-relaxed">{tip}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pets Section */}
            <section className="relative z-10 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-12 text-center">
                                <PawPrint className="w-32 h-32 text-primary-300/50 mx-auto" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                {t('motion_sensors.pets_title')}
                            </h2>
                            <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                                {t('motion_sensors.pets_desc_1')}
                            </p>
                            <p className="text-lg text-blue-100 leading-relaxed">
                                {t('motion_sensors.pets_desc_2')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Selection Tips Section */}
            <section className="relative z-10 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            {t('motion_sensors.selection_title')}
                        </h2>
                        <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                            {t('motion_sensors.selection_desc')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {selectionTips.map((tip, index) => {
                            const Icon = tip.icon;
                            return (
                                <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                                    <div className="flex items-start gap-4">
                                        <Icon className="w-6 h-6 text-primary-300 flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-2">{tip.title}</h3>
                                            <p className="text-blue-100">{tip.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Camera Section */}
            <section className="relative z-10 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            {t('motion_sensors.camera_title')}
                        </h2>
                        <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                            {t('motion_sensors.camera_desc')}
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 mb-16">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-white mb-6">
                                    {t('motion_sensors.camera_box_title')}
                                </h3>
                                <p className="text-blue-100 leading-relaxed">
                                    {t('motion_sensors.camera_box_desc')}
                                </p>
                            </div>
                            <div className="flex-1 w-full">
                                <div className="bg-black/30 rounded-xl p-6 border border-white/10">
                                    <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden group">
                                        <Camera className="w-16 h-16 text-white/20 group-hover:text-white/40 transition-colors" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <div className="flex items-center gap-2 text-red-500 mb-1">
                                                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                                <span className="text-xs font-bold uppercase tracking-wider">REC</span>
                                            </div>
                                            <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                                                <div className="h-full w-2/3 bg-red-500"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-white mb-8 text-center">
                            {t('motion_sensors.advantages_title')}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {cameraAdvantages.map((advantage, index) => (
                                <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Camera className="w-5 h-5 text-primary-300 flex-shrink-0" />
                                        <h4 className="font-bold text-white">{advantage.title}</h4>
                                    </div>
                                    <p className="text-sm text-blue-100 leading-relaxed">{advantage.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-white mb-6">
                            {t('motion_sensors.when_title')}
                        </h3>
                        <p className="text-blue-100 mb-6 leading-relaxed">
                            {t('motion_sensors.when_desc')}
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary-400 flex-shrink-0 mt-1" />
                                <span className="text-blue-100">{t('motion_sensors.when_list.1')}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary-400 flex-shrink-0 mt-1" />
                                <span className="text-blue-100">{t('motion_sensors.when_list.2')}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary-400 flex-shrink-0 mt-1" />
                                <span className="text-blue-100">{t('motion_sensors.when_list.3')}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary-400 flex-shrink-0 mt-1" />
                                <span className="text-blue-100">{t('motion_sensors.when_list.4')}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* How it works Section */}
            <section className="relative z-10 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            {t('motion_sensors.how_title')}
                        </h2>
                        <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                            {t('motion_sensors.how_desc')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 shadow-md">
                            <h3 className="text-xl font-bold text-white mb-4">
                                {t('motion_sensors.how_steps.title')}
                            </h3>
                            <ol className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg shadow-primary/30">1</span>
                                    <span className="text-blue-100">{t('motion_sensors.how_steps.1')}</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg shadow-primary/30">2</span>
                                    <span className="text-blue-100">{t('motion_sensors.how_steps.2')}</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg shadow-primary/30">3</span>
                                    <span className="text-blue-100">{t('motion_sensors.how_steps.3')}</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg shadow-primary/30">4</span>
                                    <span className="text-blue-100">{t('motion_sensors.how_steps.4')}</span>
                                </li>
                            </ol>
                        </div>

                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 shadow-md">
                            <h3 className="text-xl font-bold text-white mb-4">
                                {t('motion_sensors.install_title')}
                            </h3>
                            <p className="text-blue-100 mb-4">
                                {t('motion_sensors.install_desc')}
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-blue-100">{t('motion_sensors.install_steps.1')}</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-blue-100">{t('motion_sensors.install_steps.2')}</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-blue-100">{t('motion_sensors.install_steps.3')}</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 shadow-lg mt-12">
                        <h3 className="text-2xl font-bold text-white mb-8 text-center">
                            {t('motion_sensors.different_title')}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {systemFeatures.map((feature, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <Shield className="w-6 h-6 text-primary-300 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-white mb-1">{feature.title}</h4>
                                        <p className="text-sm text-blue-100">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative z-10 py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-primary/20 backdrop-blur-md border border-primary/30 rounded-3xl p-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        {t('motion_sensors.cta_title')}
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        {t('motion_sensors.cta_desc')}
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
