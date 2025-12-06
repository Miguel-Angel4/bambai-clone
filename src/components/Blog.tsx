import React from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { ValuesBackground } from './ValuesBackground';
import { useTranslation } from 'react-i18next';

interface BlogPost {
    title: string;
    excerpt: string;
    date: string;
    author: string;
    category: string;
    imageUrl: string;
    href: string;
}

export const Blog: React.FC = () => {
    const { t } = useTranslation();

    const posts: BlogPost[] = [
        {
            title: t('blog_page.posts.1.title'),
            excerpt: t('blog_page.posts.1.excerpt'),
            date: "20 Nov 2024",
            author: t('blog_page.author'),
            category: t('blog_page.posts.1.category'),
            imageUrl: "https://images.unsplash.com/photo-1558002038-1091a166111c?auto=format&fit=crop&q=80&w=800",
            href: "https://www.bambai.es/blog/que-alarma-poner-en-casa"
        },
        {
            title: t('blog_page.posts.2.title'),
            excerpt: t('blog_page.posts.2.excerpt'),
            date: "18 Nov 2024",
            author: t('blog_page.author'),
            category: t('blog_page.posts.2.category'),
            imageUrl: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=800",
            href: "https://www.bambai.es/blog/perro-guardian"
        },
        {
            title: t('blog_page.posts.3.title'),
            excerpt: t('blog_page.posts.3.excerpt'),
            date: "15 Nov 2024",
            author: t('blog_page.author'),
            category: t('blog_page.posts.3.category'),
            imageUrl: "https://images.unsplash.com/photo-1516961642265-531546e84af2?auto=format&fit=crop&q=80&w=800",
            href: "https://www.bambai.es/blog/como-abrir-puerta-llave-dentro"
        },
        {
            title: t('blog_page.posts.4.title'),
            excerpt: t('blog_page.posts.4.excerpt'),
            date: "12 Nov 2024",
            author: t('blog_page.author'),
            category: t('blog_page.posts.4.category'),
            imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
            href: "https://www.bambai.es/blog/grados-seguridad"
        },
        {
            title: t('blog_page.posts.5.title'),
            excerpt: t('blog_page.posts.5.excerpt'),
            date: "10 Nov 2024",
            author: t('blog_page.author'),
            category: t('blog_page.posts.5.category'),
            imageUrl: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800",
            href: "https://www.bambai.es/blog/instalacion-cctv"
        },
        {
            title: t('blog_page.posts.6.title'),
            excerpt: t('blog_page.posts.6.excerpt'),
            date: "08 Nov 2024",
            author: t('blog_page.author'),
            category: t('blog_page.posts.6.category'),
            imageUrl: "https://images.unsplash.com/photo-1563770095-39d468f95742?auto=format&fit=crop&q=80&w=800",
            href: "https://www.bambai.es/blog/gprs-alarmas"
        },
        {
            title: t('blog_page.posts.7.title'),
            excerpt: t('blog_page.posts.7.excerpt'),
            date: "05 Nov 2024",
            author: t('blog_page.author'),
            category: t('blog_page.posts.7.category'),
            imageUrl: "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&q=80&w=800",
            href: "https://www.bambai.es/blog/instalacion-camara-vigilancia"
        },
        {
            title: t('blog_page.posts.8.title'),
            excerpt: t('blog_page.posts.8.excerpt'),
            date: "01 Nov 2024",
            author: t('blog_page.author'),
            category: t('blog_page.posts.8.category'),
            imageUrl: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&q=80&w=800",
            href: "https://www.bambai.es/blog/barrios-mas-peligrosos-sevilla"
        },
        {
            title: t('blog_page.posts.9.title'),
            excerpt: t('blog_page.posts.9.excerpt'),
            date: "28 Oct 2024",
            author: t('blog_page.author'),
            category: t('blog_page.posts.9.category'),
            imageUrl: "https://images.unsplash.com/photo-1514924013411-cbf25faa35ad?auto=format&fit=crop&q=80&w=800",
            href: "https://www.bambai.es/blog/barrio-mas-peligroso-valencia"
        }
    ];

    return (
        <div className="relative min-h-screen">
            <ValuesBackground />

            {/* Hero Section */}
            <section className="relative z-10 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            {t('blog_page.hero_title')}
                        </h1>
                        <p className="text-xl text-blue-100">
                            {t('blog_page.hero_subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <article
                                key={index}
                                className="group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                            >
                                {/* Image */}
                                <div className="h-48 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                                    <img
                                        src={post.imageUrl}
                                        alt={post.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-bold rounded-full uppercase tracking-wider">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-xs text-blue-200 mb-4">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User className="w-3 h-3" />
                                            {post.author}
                                        </div>
                                    </div>

                                    <h2 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-primary-300 transition-colors">
                                        {post.title}
                                    </h2>

                                    <p className="text-blue-100 text-sm mb-6 line-clamp-3 leading-relaxed">
                                        {post.excerpt}
                                    </p>

                                    <a
                                        href={post.href}
                                        className="inline-flex items-center gap-2 text-primary-300 font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                                    >
                                        {t('blog_page.read_more')}
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
