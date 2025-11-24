
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: 'María García',
        role: 'Propietaria de negocio',
        content: 'La mejor decisión que he tomado para mi tienda. La instalación fue rapidísima y la app es super intuitiva.',
        rating: 5,
    },
    {
        name: 'Carlos Ruiz',
        role: 'Cliente particular',
        content: 'Me encanta que no tenga permanencia. Te da una tranquilidad increíble saber que estás porque quieres, no porque te obligan.',
        rating: 5,
    },
    {
        name: 'Ana López',
        role: 'Cliente particular',
        content: 'El servicio de atención al cliente es de diez. Siempre amables y resolutivos. 100% recomendable.',
        rating: 5,
    },
];

export const Testimonials: React.FC = () => {
    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Lo que dicen nuestros clientes
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
