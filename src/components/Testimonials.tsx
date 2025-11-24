
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: 'Saúl St',
        role: 'Cliente verificado',
        content: 'Muy buena atención, muy flexibles, no hay gastos ocultos. Altamente recomendable',
        rating: 5,
    },
    {
        name: 'Martín J',
        role: 'Cliente verificado',
        content: 'Si este servicio fuese más conocido, sin duda se convertiría en una de las grandes, entrando a competir con las dos opciones más conocidas en España en cuanto a sistemas de seguridad y alarmas. Profesionalidad, calidad del sistema y buen servicio. A mi me ha sorprendido muy gratamente.',
        rating: 5,
    },
    {
        name: 'Luis Vasconcellos',
        role: 'Cliente verificado',
        content: 'Contraté un mes para una reforma, y me la quedé después indefinidamente. Mucho mejores que cualquier empresa de las de siempre, y todo mucho más transparente.',
        rating: 5,
    },
];

export const Testimonials: React.FC = () => {
    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        A las personas como tú les gustamos
                    </h2>
                    <div className="flex justify-center items-center space-x-2 mb-4">
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 fill-current" />
                            ))}
                        </div>
                        <span className="text-xl font-bold text-gray-900">4.8/5</span>
                    </div>
                    <p className="text-gray-500">Basado en más de 500 reseñas verificadas</p>
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
