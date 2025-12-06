
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
    const { t } = useTranslation();

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
                            {t('footer.description')}
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
                        <h4 className="text-lg font-bold mb-6">{t('footer.product')}</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('navbar.home_alarms')}</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('navbar.sensors')}</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('navbar.alarms_app')}</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('navbar.prices')}</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">{t('footer.company')}</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('navbar.values')}</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('navbar.faq')}</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('navbar.blog')}</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('navbar.contact')}</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">{t('footer.contact')}</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-gray-400">{t('footer.phone')}:</span>
                                <a href="tel:937379317" className="ml-2 text-white hover:text-primary transition-colors">937 379 317</a>
                            </li>
                            <li className="flex items-start">
                                <span className="text-gray-400">{t('footer.email')}:</span>
                                <a href="mailto:hola@bambai.es" className="ml-2 text-white hover:text-primary transition-colors">hola@bambai.es</a>
                            </li>
                            <li className="text-gray-400 mt-4 whitespace-pre-line">
                                {t('footer.address')}
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} {t('footer.rights')}
                    </p>
                    <div className="flex space-x-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">{t('footer.legal')}</a>
                        <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
                        <a href="#" className="hover:text-white transition-colors">{t('footer.cookies')}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
