import { useState } from 'react';
import { Menu, X, Phone, User } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Precios', href: '#' },
        { name: 'Soluciones', href: '#' },
        { name: 'Recursos', href: '#' },
        { name: 'Contacto', href: '#' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <a href="/" className="text-3xl font-bold text-primary tracking-tighter">
                            bambai
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-600 hover:text-primary font-medium text-sm transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Desktop Right Actions */}
                    <div className="hidden lg:flex items-center space-x-6">
                        <a href="tel:937379317" className="flex items-center text-primary font-bold">
                            <Phone className="w-4 h-4 mr-2" />
                            937 379 317
                        </a>
                        <a href="#" className="flex items-center text-gray-600 hover:text-primary font-medium">
                            <User className="w-4 h-4 mr-2" />
                            Área clientes
                        </a>
                        <Button variant="primary" size="md">
                            Ver precios
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-gray-900 focus:outline-none"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-white border-t">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <a href="tel:937379317" className="block px-3 py-2 text-primary font-bold">
                                <Phone className="w-4 h-4 inline mr-2" />
                                937 379 317
                            </a>
                            <a href="#" className="block px-3 py-2 text-gray-600 font-medium">
                                <User className="w-4 h-4 inline mr-2" />
                                Área clientes
                            </a>
                            <div className="px-3 py-2">
                                <Button variant="primary" className="w-full">
                                    Ver precios
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};
