import React from 'react';
import { useTranslation } from 'react-i18next';
import { Building2, Home, Package, DoorClosed, Building, HomeIcon, Briefcase, Store, Warehouse, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { ValuesBackground } from './ValuesBackground';

export const AlarmsBySpace: React.FC = () => {
    const { t } = useTranslation();
    const spaceTypes = [
        {
            icon: Building2,
            title: t('alarms_space.types.business_title'),
            description: t('alarms_space.types.business_desc'),
            href: '#',
            color: 'from-blue-500 to-blue-600'
        },
        {
            icon: Home,
            title: t('alarms_space.types.flat_title'),
            description: t('alarms_space.types.flat_desc'),
            href: '#',
            color: 'from-green-500 to-green-600'
        },
        {
            icon: Package,
            title: t('alarms_space.types.storage_title'),
            description: t('alarms_space.types.storage_desc'),
            href: '#',
            color: 'from-orange-500 to-orange-600'
        },
        {
            icon: DoorClosed,
            title: t('alarms_space.types.door_title'),
            description: t('alarms_space.types.door_desc'),
            href: '#',
            color: 'from-purple-500 to-purple-600'
        },
        {
            icon: Building,
            title: t('alarms_space.types.apartment_title'),
            description: t('alarms_space.types.apartment_desc'),
            href: '#',
            color: 'from-cyan-500 to-cyan-600'
        },
        {
            icon: HomeIcon,
            title: t('alarms_space.types.second_home_title'),
            description: t('alarms_space.types.second_home_desc'),
            href: '#',
            color: 'from-pink-500 to-pink-600'
        },
        {
            icon: Briefcase,
            title: t('alarms_space.types.office_title'),
            description: t('alarms_space.types.office_desc'),
            href: '#',
            color: 'from-indigo-500 to-indigo-600'
        },
        {
            icon: Store,
            title: t('alarms_space.types.shop_title'),
            description: t('alarms_space.types.shop_desc'),
            href: '#',
            color: 'from-red-500 to-red-600'
        },
        {
            icon: Warehouse,
            title: t('alarms_space.types.industrial_title'),
            description: t('alarms_space.types.industrial_desc'),
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
                            {t('alarms_space.hero_title')}
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8">
                            {t('alarms_space.hero_subtitle')}
                        </p>
                        <p className="text-lg text-blue-100 mb-10">
                            {t('alarms_space.hero_desc')}
                        </p>
                        <Button variant="primary" size="lg" className="shadow-lg shadow-primary/30">
                            {t('alarms_space.cta_button')}
                        </Button>
                    </div>
                </div>
            </section>

            {/* Space Types Section */}
            <section className="relative z-10 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            {t('alarms_space.types_title')}
                        </h2>
                        <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                            {t('alarms_space.types_desc')}
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
                                            {t('alarms_space.more_info')}
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
                            {t('alarms_space.benefits_title')}
                        </h2>
                        <p className="text-lg text-blue-100">
                            {t('alarms_space.benefits_desc')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center group">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                                <Home className="w-8 h-8 text-primary-300 group-hover:text-primary-200" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">
                                {t('alarms_space.benefits.easy_title')}
                            </h3>
                            <p className="text-blue-100 text-sm">
                                {t('alarms_space.benefits.easy_desc')}
                            </p>
                        </div>

                        <div className="text-center group">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                                <Building2 className="w-8 h-8 text-primary-300 group-hover:text-primary-200" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">
                                {t('alarms_space.benefits.adaptable_title')}
                            </h3>
                            <p className="text-blue-100 text-sm">
                                {t('alarms_space.benefits.adaptable_desc')}
                            </p>
                        </div>

                        <div className="text-center group">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                                <Briefcase className="w-8 h-8 text-primary-300 group-hover:text-primary-200" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">
                                {t('alarms_space.benefits.no_permanence_title')}
                            </h3>
                            <p className="text-blue-100 text-sm">
                                {t('alarms_space.benefits.no_permanence_desc')}
                            </p>
                        </div>

                        <div className="text-center group">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                                <Store className="w-8 h-8 text-primary-300 group-hover:text-primary-200" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">
                                {t('alarms_space.benefits.support_title')}
                            </h3>
                            <p className="text-blue-100 text-sm">
                                {t('alarms_space.benefits.support_desc')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative z-10 py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-primary/20 backdrop-blur-md border border-primary/30 rounded-3xl p-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        {t('alarms_space.final_cta_title')}
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        {t('alarms_space.final_cta_desc')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="primary" size="lg" className="shadow-lg shadow-primary/40">
                            {t('alarms_space.final_cta_button')}
                        </Button>
                        <a href="tel:937379317">
                            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                                {t('alarms_space.final_cta_call')}
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};
