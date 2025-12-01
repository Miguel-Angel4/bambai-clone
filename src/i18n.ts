import i18n from 'i18next'; // i18n configuration
import { initReactI18next } from 'react-i18next';

const resources = {
    es: {
        translation: {
            "navbar": {
                "prices": "Precios",
                "solutions": "Soluciones",
                "resources": "Recursos",
                "home_alarms": "Alarmas para casa",
                "sensors": "Sensores y detectores de movimiento",
                "alarms_app": "Alarmas según su aplicación",
                "alarms_space": "Alarmas según su espacio",
                "values": "Valores",
                "faq": "Preguntas frecuentes",
                "blog": "Blog",
                "contact": "Contacto"
            }
        }
    },
    ca: {
        translation: {
            "navbar": {
                "prices": "Preus",
                "solutions": "Solucions",
                "resources": "Recursos",
                "home_alarms": "Alarmes per a casa",
                "sensors": "Sensors i detectors de moviment",
                "alarms_app": "Alarmes segons la seva aplicació",
                "alarms_space": "Alarmes segons el seu espai",
                "values": "Valors",
                "faq": "Preguntes freqüents",
                "blog": "Blog",
                "contact": "Contacte"
            }
        }
    },
    en: {
        translation: {
            "navbar": {
                "prices": "Prices",
                "solutions": "Solutions",
                "resources": "Resources",
                "home_alarms": "Home Alarms",
                "sensors": "Motion Sensors & Detectors",
                "alarms_app": "Alarms by Application",
                "alarms_space": "Alarms by Space",
                "values": "Values",
                "faq": "FAQ",
                "blog": "Blog",
                "contact": "Contact"
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "es", // default language
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
