import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { ValuesBackground } from './ValuesBackground';
import { motion, AnimatePresence } from 'framer-motion';

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
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "¿Puedo tener una alarma si tengo mascota?",
            answer: "Aunque los detectores de movimiento están preparados para obviar a mascotas de menos de 20kg, hay veces en las que se producen errores y hay falsas alertas. Te recomendamos que nos llames para que podamos ofrecerte un pack especial para mascotas que incluye más detectores de apertura y cámaras. Estos detectores se colocarán en todos los accesos (puertas y ventanas) de tu casa, mientras dentro situaremos cámaras. De esta forma, si detectamos movimiento, podrás comprobar si ha sido tu mascota o si es una intrusión real."
        },
        {
            question: "¿Cómo se hace la suscripción y se paga?",
            answer: "¡Es muy fácil! Debes entrar en nuestra web y hacer clic en el botón \"suscribirme\" del plan que has elegido. Esto te permitirá ver y aceptar los términos y condiciones, rellenar el formulario con los datos de tu suscripción y realizar el pago con el método prefieras. Si decides seguir con tu suscripción, los siguientes pagos se realizarán automáticamente cada mes."
        },
        {
            question: "¿Para qué tipo de vivienda sirve?",
            answer: "Para todas, siempre que haya cobertura de móvil de algún operador y luz. Pisos, casas, locales, almacenes, caravanas y otros. Elige el plan que mejor te encaje o déjate aconsejar por nosotros."
        },
        {
            question: "¿Cuál es la diferencia con las empresas tradicionales de alarmas?",
            answer: "La principal diferencia es que nuestra alarma es autoinstalable y no intrusiva (no vamos a tu vivienda a hacer agujeros). Todo es mucho más transparente, fácil, flexible y claro. Tampoco tienes que comprar la alarma. No queremos complicarte con equipos de alarma que tal vez en un tiempo ya no necesites, por eso te prestamos los nuestros."
        },
        {
            question: "¿En la alarma sin permanencia, realmente no hay permanencia? ¿Puedo contratar para unas semanas o meses?",
            answer: (
                <>
                    <p className="mb-4">Repetimos alto y claro: sí y sí. El servicio de alarma sin permanencia NO TIENE PERMANENCIA*. Puedes quedarte con nosotros si lo necesitas y además estás a gusto con el servicio. Si algo de esto no se cumple, no tiene sentido que estés en la obligación de tener una alarma durante un tiempo que no la quieres tener.</p>
                    <p className="mb-4">Si la necesitas solo por unas semanas o meses no hay problema, puedes hacerlo. Por ejemplo, algunos de nuestros clientes utilizan el pack básico (que no necesita Wi-Fi) para proteger durante unas semanas o meses viviendas vacías que están en reformas, o que están a la espera de alquiler o venta.</p>
                    <p className="text-sm text-blue-200 italic">*No confundir con el servicio de alarma indefinida, con periodo mínimo de servicio de 9 meses.</p>
                </>
            )
        },
        {
            question: "¿Qué es el soporte 24/7?",
            answer: "Se trata de un servicio incluido por defecto en todos los planes, en el que nuestro equipo de soporte está disponible para ayudarte a aclarar cualquier duda con la actividad o funcionamiento de tu alarma."
        },
        {
            question: "¿Qué pasa si alguien entra en mi casa? ¿Avisáis a la Policía?",
            answer: (
                <>
                    <p className="mb-4">Te asistimos para que puedas hacer el aviso a la policía a través de nuestra funcionalidad en la app, que te permitirá contactar inmediatamente con la comisaría de policía más cercana.</p>
                    <p className="mb-4">Nuestro equipo de soporte está 24/7 disponible para ayudarte a aclarar cualquier duda con la actividad o funcionamiento de tu alarma. En caso de que se active un detector, recibirás una notificación automática a través de tu app.</p>
                    <p>Si se activan dos o más detectores, y/o la cámara en menos de 30 minutos, recibirás una notificación en tu app donde podrás confirmar si has sido tú o no. De manera complementaria recibirás una llamada automática avisándote de la incidencia. Si no has sido tú, podrás acceder al teléfono de la comisaría policial más cercana a través de tu app, y además, recibirás en tu email el historial de actividad de tu alarma para que puedas utilizarlo en caso de ser necesario.</p>
                </>
            )
        },
        {
            question: "¿Para qué sirve la app?",
            answer: (
                <>
                    <p className="mb-4">La App de Bambai se utiliza para controlar tu alarma y ver toda la actividad que generan los sensores y las cámaras. Estas son algunas de las cosas que podrás hacer a través de la app:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Activar y desactivar la alarma.</li>
                        <li>Ver todos los registros de movimiento, imágenes y vídeos que registre la cámara.</li>
                        <li>Si sois varios en casa, podrás dar acceso al control de tu alarma a otros usuarios, dando más o menos permisos de control según necesites.</li>
                        <li>También servirá para confirmar alertas. En caso de que se active un detector recibirás una notificación automática a través de tu app.</li>
                    </ul>
                    <p>La podrás descargar del App Store, Google Play Store y Huawei App Gallery.</p>
                </>
            )
        },
        {
            question: "¿Cómo se hace y cuánto tarda la instalación?",
            answer: "Después de contratar, te enviaremos el equipo de alarma por mensajería a tu casa y lo recibirás en 48-72 horas laborables (península). La instalación es super sencilla y se hace en 10 min, por eso la puedes hacer tu mism@ y es gratuita. Si necesitas asistencia, nuestro equipo de soporte estará disponible para ayudarte."
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
                            Preguntas frecuentes
                        </h1>
                        <p className="text-xl text-blue-100">
                            Resolvemos tus dudas sobre nuestras alarmas y servicios
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
