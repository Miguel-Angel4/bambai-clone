
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Testimonials: React.FC = () => {
    const { t } = useTranslation();

    const testimonials = [
        {
            name: 'Saúl St',
            role: t('testimonials.verified_client'),
            content: t('testimonials.review_1'),
            rating: 5,
        },
        {
            name: 'Martín J',
            role: t('testimonials.verified_client'),
            content: t('testimonials.review_2'),
            rating: 5,
        },
        {
            name: 'Luis Vasconcellos',
            role: t('testimonials.verified_client'),
            content: t('testimonials.review_3'),
            rating: 5,
        },
    ];

    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {t('testimonials.title')}
                    </h2>
                    <div className="flex justify-center items-center space-x-2 mb-4">
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 fill-current" />
                            ))}
                        </div>
                        <span className="text-xl font-bold text-gray-900">4.8/5</span>
                    </div>
                    <p className="text-gray-500">{t('testimonials.subtitle')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                            <div className="flex text-yellow-400 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                            <div>
                                <p className="font-bold text-gray-900">{testimonial.name}</p>
                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
