import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Lock, Radio, Brain, Phone, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { ValuesBackground } from './ValuesBackground';

export const AlarmsByApplication: React.FC = () => {
    const { t } = useTranslation();
    const alarmTypes = [
        {
            icon: Lock,
            title: t('alarms_application.types.squatters_title'),
            description: t('alarms_application.types.squatters_desc'),
            href: '#',
            color: 'from-red-500 to-red-600'
        },
        {
            icon: Shield,
            title: t('alarms_application.types.wired_title'),
            description: t('alarms_application.types.wired_desc'),
            href: '#',
            color: 'from-blue-500 to-blue-600'
        },
        {
            icon: Radio,
            title: t('alarms_application.types.inhibitors_title'),
            description: t('alarms_application.types.inhibitors_desc'),
            href: '#',
            color: 'from-purple-500 to-purple-600'
        },
        {
            icon: Brain,
            title: t('alarms_application.types.smart_title'),
            description: t('alarms_application.types.smart_desc'),
            href: '#',
            color: 'from-green-500 to-green-600'
        },
        {
            icon: Phone,
            title: t('alarms_application.types.police_title'),
            description: t('alarms_application.types.police_desc'),
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
                            {t('alarms_application.hero_title')}
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8">
                            {t('alarms_application.hero_subtitle')}
                        </p>
                        <p className="text-lg text-blue-100 mb-10">
                            {t('alarms_application.hero_desc')}
                        </p>
                        <Button variant="primary" size="lg" className="shadow-lg shadow-primary/30">
                            {t('alarms_application.cta_button')}
                        </Button>
                    </div>
                </div>
            </section>

            {/* Alarm Types Section */}
            <section className="relative z-10 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            {t('alarms_application.types_title')}
                        </h2>
                        <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                            {t('alarms_application.types_desc')}
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
                                            {t('alarms_application.more_info')}
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
                                {t('alarms_application.features.protection_title')}
                            </h3>
                            <p className="text-blue-100">
                                {t('alarms_application.features.protection_desc')}
                            </p>
                        </div>

                        <div className="text-center group">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                                <Brain className="w-8 h-8 text-primary-300 group-hover:text-primary-200" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                {t('alarms_application.features.technology_title')}
                            </h3>
                            <p className="text-blue-100">
                                {t('alarms_application.features.technology_desc')}
                            </p>
                        </div>

                        <div className="text-center group">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                                <Phone className="w-8 h-8 text-primary-300 group-hover:text-primary-200" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                {t('alarms_application.features.support_title')}
                            </h3>
                            <p className="text-blue-100">
                                {t('alarms_application.features.support_desc')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative z-10 py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-primary/20 backdrop-blur-md border border-primary/30 rounded-3xl p-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        {t('alarms_application.final_cta_title')}
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        {t('alarms_application.final_cta_desc')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="primary" size="lg" className="shadow-lg shadow-primary/40">
                            {t('alarms_application.final_cta_button')}
                        </Button>
                        <a href="tel:937379317">
                            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                                {t('alarms_application.final_cta_call')}
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};
