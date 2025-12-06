import React from 'react';
import { Button } from './Button';
import { Phone, Check, Star } from 'lucide-react';
import { AnimatedHeroIllustration } from './AnimatedHeroIllustration';
import { useTranslation } from 'react-i18next';

export const Hero: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="relative bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">

                    {/* Left Content */}
                    <div className="mb-12 lg:mb-0">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-xs font-bold uppercase tracking-wide mb-6 animate-fade-in shadow-sm">
                            <Check className="w-3 h-3 mr-1" />
                            {t('hero.badge')}
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 animate-fade-in delay-100">
                            {t('hero.title')} <span className="text-primary bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">{t('hero.title_highlight')}</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg animate-fade-in delay-200">
                            {t('hero.subtitle')}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in delay-300">
                            <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300">
                                {t('hero.cta_prices')}
                            </Button>
                            <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 hover:border-primary hover:bg-primary/5 transition-all duration-300">
                                <Phone className="w-5 h-5 mr-2" />
                                {t('hero.cta_call')}
                            </Button>
                        </div>

                        <div className="flex items-center space-x-4 text-sm text-gray-500 animate-fade-in delay-400">
                            <div className="flex items-center">
                                <div className="flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-current drop-shadow-sm" />
                                    ))}
                                </div>
                                <span className="ml-2 font-medium text-gray-900">4.8/5</span>
                            </div>
                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                            <span>{t('hero.rating_text')}</span>
                        </div>
                    </div>

                    {/* Right Image / Animation */}
                    <div className="relative h-full min-h-[400px] flex items-center justify-center animate-scale-in delay-200">
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-full h-full bg-gradient-to-br from-primary/10 via-purple-100/50 to-pink-100/30 rounded-full blur-3xl opacity-60 -z-10 animate-pulse"></div>
                        <AnimatedHeroIllustration />
                    </div>

                </div>
            </div>
        </section>
    );
};
