import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { ValuesBackground } from './ValuesBackground';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface FAQItemProps {
    question: string;
    answer: React.ReactNode;
    isOpen: boolean;
    onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="mb-4">
            <button
                className={`w-full flex items-center justify-between p-6 text-left transition-all duration-300 rounded-2xl border ${isOpen
                    ? 'bg-white/10 border-primary/50 shadow-[0_0_20px_rgba(59,130,246,0.2)]'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                    } backdrop-blur-md`}
                onClick={onClick}
            >
                <span className={`text-lg font-bold ${isOpen ? 'text-primary-300' : 'text-white'}`}>
                    {question}
                </span>
                {isOpen ? (
                    <ChevronUp className="w-6 h-6 text-primary-300" />
                ) : (
                    <ChevronDown className="w-6 h-6 text-white/70" />
                )}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 pt-2 text-blue-100 leading-relaxed bg-white/5 backdrop-blur-md rounded-b-2xl mx-2 border-x border-b border-white/10 -mt-2">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const FAQ: React.FC = () => {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: t('faq_page.q1.question'),
            answer: t('faq_page.q1.answer')
        },
        {
            question: t('faq_page.q2.question'),
            answer: t('faq_page.q2.answer')
        },
        {
            question: t('faq_page.q3.question'),
            answer: t('faq_page.q3.answer')
        },
        {
            question: t('faq_page.q4.question'),
            answer: t('faq_page.q4.answer')
        },
        {
            question: t('faq_page.q5.question'),
            answer: (
                <>
                    <p className="mb-4">{t('faq_page.q5.answer_p1')}</p>
                    <p className="mb-4">{t('faq_page.q5.answer_p2')}</p>
                    <p className="text-sm text-blue-200 italic">{t('faq_page.q5.answer_note')}</p>
                </>
            )
        },
        {
            question: t('faq_page.q6.question'),
            answer: t('faq_page.q6.answer')
        },
        {
            question: t('faq_page.q7.question'),
            answer: (
                <>
                    <p className="mb-4">{t('faq_page.q7.answer_p1')}</p>
                    <p className="mb-4">{t('faq_page.q7.answer_p2')}</p>
                    <p>{t('faq_page.q7.answer_p3')}</p>
                </>
            )
        },
        {
            question: t('faq_page.q8.question'),
            answer: (
                <>
                    <p className="mb-4">{t('faq_page.q8.answer_intro')}</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>{t('faq_page.q8.answer_list.item1')}</li>
                        <li>{t('faq_page.q8.answer_list.item2')}</li>
                        <li>{t('faq_page.q8.answer_list.item3')}</li>
                        <li>{t('faq_page.q8.answer_list.item4')}</li>
                    </ul>
                    <p>{t('faq_page.q8.answer_outro')}</p>
                </>
            )
        },
        {
            question: t('faq_page.q9.question'),
            answer: t('faq_page.q9.answer')
        }
    ];

    return (
        <div className="relative min-h-screen">
            <ValuesBackground />

            <section className="relative z-10 py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-md border border-white/20">
                            <HelpCircle className="w-10 h-10 text-primary-300" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            {t('faq_page.hero_title')}
                        </h1>
                        <p className="text-xl text-blue-100">
                            {t('faq_page.hero_subtitle')}
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onClick={() => toggleFAQ(index)}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
