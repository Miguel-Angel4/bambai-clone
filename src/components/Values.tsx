import React from 'react';
import { Heart, Shield, Users, Lightbulb, Smile } from 'lucide-react';
import { ValuesBackground } from './ValuesBackground';
import { useTranslation } from 'react-i18next';

export const Values: React.FC = () => {
    const { t } = useTranslation();

    const valuesList = [
        { icon: Lightbulb, title: t('values_page.values.simplicity_title'), description: t('values_page.values.simplicity_desc') },
        { icon: Shield, title: t('values_page.values.transparency_title'), description: t('values_page.values.transparency_desc') },
        { icon: Users, title: t('values_page.values.closeness_title'), description: t('values_page.values.closeness_desc') },
        { icon: Heart, title: t('values_page.values.quality_title'), description: t('values_page.values.quality_desc') },
        { icon: Smile, title: t('values_page.values.adaptability_title'), description: t('values_page.values.adaptability_desc') },
    ];

    return (
        <div className="relative min-h-screen">
            <ValuesBackground />

            {/* Hero Section */}
            <section className="relative z-10 bg-transparent py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        {t('values_page.hero_title')}
                    </h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto">
                        {t('values_page.hero_subtitle')}
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="relative z-10 py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg mx-auto text-white leading-relaxed">
                        <p className="mb-8 text-xl font-medium text-white">
                            {t('values_page.intro')}
                        </p>

                        <p className="mb-6 text-white/90">
                            {t('values_page.p1')}
                        </p>

                        <p className="mb-6 text-white/90">
                            {t('values_page.p2')}
                        </p>

                        <p className="mb-6 text-white/90">
                            {t('values_page.p3')}
                        </p>

                        <p className="mb-12 text-white/90">
                            {t('values_page.p4')}
                        </p>

                        {/* Values Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12 not-prose">
                            {valuesList.map((value, index) => {
                                const Icon = value.icon;
                                return (
                                    <div key={index} className="group bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:border-purple-500/50 hover:bg-purple-900/20 hover:-translate-y-1">
                                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/20 transition-colors duration-500">
                                            <Icon className="w-6 h-6 text-gray-300 group-hover:text-purple-300 transition-colors duration-500" />
                                        </div>
                                        <h3 className="font-bold text-white mb-2 group-hover:text-purple-100 transition-colors duration-500">{value.title}</h3>
                                        <p className="text-sm text-gray-400 group-hover:text-purple-200/80 transition-colors duration-500">{value.description}</p>
                                    </div>
                                );
                            })}
                        </div>

                        <p className="mb-8 text-white/90">
                            {t('values_page.p5')}
                        </p>

                        <div className="mt-12 border-t border-white/20 pt-8">
                            <p className="font-bold text-white text-lg">{t('values_page.ceo_name')}</p>
                            <p className="text-white/80">{t('values_page.ceo_title')}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
