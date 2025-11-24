
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand */}
                    <div>
                        <a href="/" className="text-3xl font-bold text-white tracking-tighter mb-6 block">
                            bambai
                        </a>
                        <p className="text-gray-400 mb-6">
                            La alarma inteligente, sin permanencia y fácil de usar que protege lo que más te importa.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Producto</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Hogar</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Negocio</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cómo funciona</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Precios</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Compañía</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre nosotros</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Trabaja con nosotros</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Contacto</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-gray-400">Teléfono:</span>
                                <a href="tel:900831671" className="ml-2 text-white hover:text-primary transition-colors">900 831 671</a>
                            </li>
                            <li className="flex items-start">
                                <span className="text-gray-400">Email:</span>
                                <a href="mailto:hola@bambai.es" className="ml-2 text-white hover:text-primary transition-colors">hola@bambai.es</a>
                            </li>
                            <li className="text-gray-400 mt-4">
                                Calle de la Tecnología, 123<br />
                                28000 Madrid, España
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Bambai. Todos los derechos reservados.
                    </p>
                    <div className="flex space-x-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
                        <a href="#" className="hover:text-white transition-colors">Privacidad</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
