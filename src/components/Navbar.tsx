import React, { useState } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setIsLangOpen(false);
    };

    const navLinks = [
        { name: t('navbar.prices'), href: '/precios' },
        {
            name: t('navbar.solutions'),
            href: '#',
            dropdown: [
                { name: t('navbar.home_alarms'), href: '/alarmas-casa' },
                { name: t('navbar.sensors'), href: '/sensores-detectores' },
                { name: t('navbar.alarms_app'), href: '/alarmas-aplicacion' },
                { name: t('navbar.alarms_space'), href: '/alarmas-espacio' },
            ]
        },
        {
            name: t('navbar.resources'),
            href: '#',
            dropdown: [
                { name: t('navbar.values'), href: '/valores' },
                { name: t('navbar.faq'), href: '/preguntas-frecuentes' },
                { name: t('navbar.blog'), href: '/blog' },
                { name: t('navbar.contact'), href: '/contacto' },
            ]
        },
    ];

    const languages = [
        { code: 'es', name: 'Español' },
        { code: 'ca', name: 'Català' },
        { code: 'en', name: 'English' },
    ];

    return (
        <nav className="bg-white border-b border-gray-100 fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <span className="text-2xl font-bold text-primary">Bambai</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative group"
                                onMouseEnter={() => setActiveDropdown(link.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <div className="flex items-center">
                                    {link.href.startsWith('/') ? (
                                        <Link
                                            to={link.href}
                                            className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1"
                                        >
                                            {link.name}
                                            {link.dropdown && <ChevronDown className="w-4 h-4" />}
                                        </Link>
                                    ) : (
                                        <a
                                            href={link.href}
                                            className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1"
                                        >
                                            {link.name}
                                            {link.dropdown && <ChevronDown className="w-4 h-4" />}
                                        </a>
                                    )}
                                </div>

                                {link.dropdown && activeDropdown === link.name && (
                                    <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-md py-2 mt-1 border border-gray-100">
                                        {link.dropdown.map((item) => (
                                            item.href.startsWith('/') ? (
                                                <Link
                                                    key={item.name}
                                                    to={item.href}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                                                >
                                                    {item.name}
                                                </Link>
                                            ) : (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                                                >
                                                    {item.name}
                                                </a>
                                            )
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Language Selector */}
                        <div className="relative">
                            <button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className="flex items-center gap-1 text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                <Globe className="w-4 h-4" />
                                {languages.find(l => l.code === i18n.language)?.name || 'Español'}
                                <ChevronDown className="w-4 h-4" />
                            </button>

                            {isLangOpen && (
                                <div className="absolute top-full right-0 w-32 bg-white shadow-lg rounded-md py-2 mt-1 border border-gray-100">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => changeLanguage(lang.code)}
                                            className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 hover:text-primary ${i18n.language === lang.code ? 'text-primary font-bold' : 'text-gray-700'}`}
                                        >
                                            {lang.name}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-600 transition-colors font-medium">
                            Calcula tu cuota
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-primary p-2"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 h-screen overflow-y-auto pb-20">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                {link.dropdown ? (
                                    <>
                                        <div className="px-3 py-2 text-base font-medium text-gray-700">
                                            {link.name}
                                        </div>
                                        <div className="pl-6 space-y-1">
                                            {link.dropdown.map((item) => (
                                                item.href.startsWith('/') ? (
                                                    <Link
                                                        key={item.name}
                                                        to={item.href}
                                                        className="block px-3 py-2 text-sm font-medium text-gray-500 hover:text-primary hover:bg-gray-50 rounded-md"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ) : (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className="block px-3 py-2 text-sm font-medium text-gray-500 hover:text-primary hover:bg-gray-50 rounded-md"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {item.name}
                                                    </a>
                                                )
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    link.href.startsWith('/') ? (
                                        <Link
                                            to={link.href}
                                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    ) : (
                                        <a
                                            href={link.href}
                                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </a>
                                    )
                                )}
                            </div>
                        ))}

                        {/* Mobile Language Selector */}
                        <div className="px-3 py-2 border-t border-gray-100 mt-4">
                            <div className="text-base font-medium text-gray-700 mb-2">Idioma</div>
                            <div className="flex gap-4">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => {
                                            changeLanguage(lang.code);
                                            setIsOpen(false);
                                        }}
                                        className={`text-sm font-medium px-3 py-1 rounded-full border ${i18n.language === lang.code ? 'bg-primary text-white border-primary' : 'text-gray-600 border-gray-200'}`}
                                    >
                                        {lang.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="px-3 py-4">
                            <button className="w-full bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-600 transition-colors font-medium">
                                Calcula tu cuota
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};
