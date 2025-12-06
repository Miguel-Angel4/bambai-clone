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
                "contact": "Contacto",
                "calculate_quote": "Calcula tu cuota",
                "language": "Idioma"
            },
            "hero": {
                "badge": "Alarma sin permanencia",
                "title": "Y si quieres, suscríbete a tu alarma",
                "title_highlight": "sin permanencia",
                "subtitle": "Tu alarma como siempre la has querido: sencilla, flexible y sin permanencia.",
                "cta_prices": "Ver precios",
                "cta_call": "Llámanos gratis",
                "rating_text": "Más de 1.000 clientes satisfechos"
            },
            "features": {
                "title": "Lo difícil es hacerlo fácil",
                "subtitle": "Reinventamos la seguridad para hacerla más fácil, transparente y accesible para todos.",
                "no_permanence_title": "Alarmas sin permanencia",
                "no_permanence_desc": "Eres libre. Date de baja cuando quieras sin penalizaciones ni explicaciones.",
                "police_title": "Asistencia en el aviso a policía",
                "police_desc": "Protección total con aviso inmediato a las fuerzas de seguridad en caso de intrusión.",
                "flexibility_title": "Flexibilidad real",
                "flexibility_desc": "Adapta tu sistema de seguridad a lo que realmente necesitas, sin pagar por lo que no usas.",
                "simplicity_title": "Sencillez",
                "simplicity_desc": "Tecnología avanzada hecha fácil. Sin complicaciones, sin obras y sin cables.",
                "cybersecurity_title": "Ciberseguridad incluida",
                "cybersecurity_desc": "Protegemos no solo tu espacio físico, sino también tu red digital contra ataques.",
                "connected_title": "Siempre conectado",
                "connected_desc": "Sistema anti-inhibición con doble vía de comunicación para máxima seguridad."
            },
            "testimonials": {
                "title": "A las personas como tú les gustamos",
                "subtitle": "Basado en más de 500 reseñas verificadas",
                "verified_client": "Cliente verificado",
                "review_1": "Muy buena atención, muy flexibles, no hay gastos ocultos. Altamente recomendable",
                "review_2": "Si este servicio fuese más conocido, sin duda se convertiría en una de las grandes, entrando a competir con las dos opciones más conocidas en España en cuanto a sistemas de seguridad y alarmas. Profesionalidad, calidad del sistema y buen servicio. A mi me ha sorprendido muy gratamente.",
                "review_3": "Contraté un mes para una reforma, y me la quedé después indefinidamente. Mucho mejores que cualquier empresa de las de siempre, y todo mucho más transparente."
            },
            "footer": {
                "description": "La alarma inteligente, sin permanencia y fácil de usar que protege lo que más te importa.",
                "product": "Producto",
                "company": "Compañía",
                "contact": "Contacto",
                "phone": "Teléfono",
                "email": "Email",
                "address": "Carrer de Pascual i Vila, Les Corts\n08028 Barcelona",
                "rights": "Bambai. Todos los derechos reservados.",
                "legal": "Aviso Legal",
                "privacy": "Privacidad",
                "cookies": "Cookies"
            },
            "prices_page": {
                "title": "Precios justos",
                "subtitle": "Elige el plan que mejor se adapte a ti. Sin permanencia, sin letra pequeña.",
                "toggle_no_permanence": "Alarma Sin Permanencia",
                "toggle_indefinite": "Alarma Indefinida",
                "popular_badge": "Más popular",
                "save_badge": "¡Ahórrate 20€ al mes!",
                "cta_contract": "Contratar ahora",
                "vat_included": "IVA incluido",
                "custom_config": "¿Necesitas una configuración personalizada?",
                "call_us": "Llámanos al 937 379 317",
                "plans": {
                    "basic_name": "Básica",
                    "standard_1_name": "Estándar y 1 cámara",
                    "standard_2_name": "Estándar y dos cámaras",
                    "features": {
                        "panel": "1 Panel central",
                        "motion_1": "1 Detector de movimiento",
                        "motion_2": "2 Detectores de movimiento",
                        "opening_1": "1 Detector de apertura",
                        "remote": "1 Mando a distancia",
                        "stickers": "Carteles disuasorios",
                        "app": "App móvil ilimitada",
                        "cra": "Conexión 24h a CRA",
                        "police": "Aviso a Policía",
                        "camera_1": "1 Cámara Wifi con streaming",
                        "camera_2": "2 Cámaras Wifi con streaming",
                        "min_period": "Periodo mínimo 9 meses"
                    },
                    "badge_save": "¡Ahórrate 20€ al mes!"
                },

            },
            "home_alarms": {
                "hero_title": "Alarmas de seguridad para casa, hogar y vivienda",
                "hero_subtitle_prefix": "Planes desde",
                "hero_desc": "En Bambai creemos que la seguridad no tiene por qué ser cara ni esconder sorpresas. Nuestras alarmas para casa están pensadas para ser accesibles, claras y sin letra pequeña.",
                "pricing_title": "Planes de alarmas para casa desde 19,99 €/mes",
                "pricing_desc": "En Bambai tenemos claro que la seguridad no debería costar un dineral ni obligarte a firmar contratos interminables. Eliges el nivel de seguridad que mejor encaje contigo y con tu vivienda, pagando solo por lo que de verdad necesitas.",
                "plan_1_subtitle": "Alarma básica para vivienda segura",
                "plan_1_desc": "Ideal para pisos pequeños, segundas residencias o para quienes buscan una alarma para vivienda práctica y económica.",
                "plan_2_subtitle": "Alarma con cámara wifi y streaming en directo",
                "plan_2_desc": "El plan más elegido por familias que quieren comprobar desde el móvil qué ocurre en casa, incluso cuando están fuera.",
                "plan_3_subtitle": "Alarma avanzada con máxima seguridad",
                "plan_3_desc": "La mejor elección para casas grandes, chalets o cualquier vivienda que necesite un control más exhaustivo.",
                "plans": {
                    "plan_1_name": "Plan 1: Básica",
                    "plan_2_name": "Plan 2: Estándar",
                    "plan_3_name": "Plan 3: Avanzada",
                    "features": {
                        "panel": "1 Panel central",
                        "motion_1": "1 Detector de movimiento",
                        "motion_2": "2 Detectores de movimiento",
                        "opening_1": "1 Detector de apertura",
                        "opening_2": "2 Detectores de apertura",
                        "key_1": "1 Llave inteligente",
                        "key_2": "2 Llaves inteligentes",
                        "stickers": "3 Pegatinas disuasorias",
                        "camera_1": "1 Cámara wifi con streaming en directo",
                        "camera_2": "2 Cámaras wifi con streaming"
                    }
                },
                "all_included": "Todos nuestros planes incluyen instalación gratuita, mantenimiento, soporte 24/7 y asistencia inmediata para que puedas avisar a la policía en caso de incidencia.",
                "transparency_title": "Precios justos y transparentes",
                "transparency_desc": "La idea es sencilla: proteger tu hogar con precios que cualquiera pueda asumir y con un servicio completo que ya lo incluye todo.",
                "transparency_points": {
                    "1_title": "Todo incluido en tu alarma para vivienda",
                    "1_desc": "Instalación gratuita, mantenimiento, soporte 24/7 y asistencia inmediata para avisar a la policía en caso de incidencia.",
                    "2_title": "Ahorro real frente a otras empresas",
                    "2_desc": "Desde 19,99 €/mes tienes cobertura total sin costes de instalación ni equipos adicionales.",
                    "3_title": "Sin costes ocultos ni letra pequeña",
                    "3_desc": "Lo que ves es lo que pagas. Sin sorpresas, sin cargos extra, sin complicaciones.",
                    "4_title": "La tranquilidad de pagar lo justo",
                    "4_desc": "Protege tu hogar con precios que cualquiera pueda asumir y con un servicio completo que ya lo incluye todo."
                },
                "features_title": "Características de nuestras alarmas de seguridad",
                "features_desc": "En Bambai creemos que las alarmas para casa tienen que ser fáciles, claras y accesibles. El sistema está pensado para que tengas tranquilidad desde el primer minuto, sin instalaciones invasivas ni complicaciones técnicas.",
                "features_list": {
                    "1_title": "Asistencia 24/7 y aviso inmediato a la policía",
                    "1_desc": "El soporte funciona las 24 horas del día, los 365 días del año. Si se detecta una intrusión, recibes una notificación inmediata en la app y puedes conectar con la comisaría más cercana para que el aviso a la policía sea rápido y directo.",
                    "2_title": "Autoinstalación gratuita y en solo 10 minutos",
                    "2_desc": "En 48 a 72 horas laborables recibes el equipo en tu casa y lo montas tú mismo en apenas 10 minutos. Sin cables, sin obras y sin agujeros en las paredes. Con asistencia remota si lo necesitas. Todo incluido en el precio, sin costes adicionales.",
                    "3_title": "Equipo completo adaptado a tu vivienda",
                    "3_desc": "Panel central como cerebro del sistema, detectores de movimiento y de apertura para cubrir puertas y ventanas, llaves inteligentes para activar y desactivar la alarma cómodamente, cámaras con streaming en directo incluidas en los planes superiores, y pegatinas disuasorias que añaden un extra de protección.",
                    "4_title": "Control total desde la app",
                    "4_desc": "La app de Bambai convierte tu móvil en el mando de tu alarma. Activa o desactiva la alarma en segundos, revisa los movimientos detectados, fotos y vídeos, comparte acceso con otras personas decidiendo qué permisos tiene cada una, y confirma alertas de inmediato avisando a la policía desde la misma app."
                },
                "cta_title": "¿Listo para proteger tu hogar?",
                "cta_desc": "Contrata tu alarma hoy y empieza a disfrutar de la tranquilidad que mereces",
                "cta_button": "Ver todos los planes",
                "cta_call": "Llamar al 937 379 317"
            },
            "motion_sensors": {
                "hero_title": "Sensores y detectores de movimiento",
                "hero_subtitle": "Protección eficaz, fácil de instalar y con aviso inmediato al móvil",
                "hero_desc": "Las alarmas con detectores de movimiento son el corazón de cualquier sistema de seguridad moderno. En Bambai nuestros detectores están pensados para reaccionar en segundos y avisarte al instante, sin esperas, sin complicaciones y, por supuesto, sin permanencias.",
                "housing_title": "Detectores de movimiento según el tipo de vivienda",
                "housing_desc": "Cada tipo de vivienda necesita una distribución y una tecnología diferente. No se trata de llenar la casa de sensores, sino de colocarlos donde de verdad sirven y aprovechar al máximo su alcance.",
                "housing_types": {
                    "1_title": "En pisos o apartamentos",
                    "1_desc": "En los pisos, donde los espacios suelen ser más reducidos, bastan unos pocos sensores de movimiento bien colocados en pasillos, entradas y zonas de paso. Los detectores de movimiento por infrarrojos (PIR) son los más habituales y funcionan genial en interiores. Detectan los cambios de temperatura corporal y son discretos, eficaces y fáciles de instalar.",
                    "2_title": "En casas con jardín o varias plantas",
                    "2_desc": "En viviendas más grandes, lo ideal es combinar varios tipos de detectores de movimiento. Los de exterior, resistentes a la lluvia y al polvo, son perfectos para vigilar accesos, terrazas y zonas traseras. Dentro de casa, los detectores duales (que combinan infrarrojos y microondas) cubren varias plantas y reducen las falsas alarmas.",
                    "3_title": "En locales, oficinas o almacenes",
                    "3_desc": "Estos espacios suelen ser más amplios y menos transitados, por lo que conviene usar detectores de movimiento de microondas. Suelen tener más alcance y una sensibilidad más alta. Si los combinas con cámaras, podrás verificar cualquier alerta en tiempo real sin moverte del sitio.",
                    "4_title": "En caravanas o segundas residencias",
                    "4_desc": "Si solo necesitas proteger un espacio durante un tiempo limitado, los sensores de movimiento inalámbricos son la mejor opción. Se instalan en minutos, no requieren obra ni instalación profesional y puedes darte de baja cuando quieras si eliges una alarma sin permanencia como la nuestra."
                },
                "placement_title": "Dónde colocar los sensores de movimiento para proteger de verdad",
                "placement_desc": "La ubicación de los detectores de movimiento es tan importante como su calidad. Un sensor bien colocado puede cubrir una habitación entera; uno mal situado puede dejar zonas sin vigilancia.",
                "placement_tips": {
                    "1": "Zonas de paso: pasillos, entradas o escaleras son puntos clave. Colocar ahí los sensores de movimiento garantiza que se detecte cualquier desplazamiento.",
                    "2": "Altura adecuada: lo ideal es instalarlos entre 2 y 2,5 metros del suelo, orientados hacia la zona que quieres cubrir.",
                    "3": "Evita el calor directo: radiadores, chimeneas o luz solar intensa pueden alterar la detección.",
                    "4": "Puertas y ventanas: combina los detectores de movimiento con sensores de apertura para reforzar los puntos de entrada.",
                    "5": "Exterior protegido: si los instalas fuera, busca zonas cubiertas o bajo aleros para protegerlos de la lluvia y el sol."
                },
                "pets_title": "Si tienes mascotas, esto te interesa",
                "pets_desc_1": "Las mascotas y los sensores de movimiento siempre han tenido una relación complicada, pero eso es cosa del pasado. Los detectores de movimiento actuales son capaces de diferenciar entre una persona y un animal pequeño (hasta unos 20 kilos). Si tu perro o tu gato se mueve por casa, el sistema lo ignora.",
                "pets_desc_2": "En Bambai, además, contamos con packs especiales para hogares con mascotas. Combinamos detectores de apertura en puertas y ventanas con cámaras interiores, para que, si salta una alerta, puedas comprobar en segundos si ha sido tu mascota o algo más serio.",
                "selection_title": "Consejos para acertar al elegir tus detectores de movimiento",
                "selection_desc": "Antes de decidirte, hay algunos detalles que merece la pena tener en cuenta",
                "selection_tips": {
                    "1_title": "Piensa en tus rutinas",
                    "1_desc": "Si pasas muchas horas fuera, prioriza detectores con notificación inmediata a la app para reaccionar rápido.",
                    "2_title": "Valora el entorno",
                    "2_desc": "En estancias con mucha luz o variaciones de temperatura, los detectores de microondas funcionan mejor.",
                    "3_title": "Combina tecnologías",
                    "3_desc": "Un sistema que mezcle sensores PIR con cámaras te dará una protección más completa.",
                    "4_title": "Busca flexibilidad",
                    "4_desc": "Si vives de alquiler o planeas mudarte, elige detectores de movimiento que puedas mover o ampliar sin depender de técnicos."
                },
                "camera_title": "Sensores de movimiento con cámara",
                "camera_desc": "Los sensores de movimiento con cámara son la evolución natural de los sistemas de seguridad domésticos. No solo detectan lo que pasa, sino que también te lo muestran al instante.",
                "camera_box_title": "Cómo funcionan los sensores de movimiento con cámara",
                "camera_box_desc": "Un sensor de movimiento con cámara detecta cualquier cambio en el espacio que vigila y, en cuanto lo percibe, activa la cámara y te envía una notificación al móvil. En ese momento puedes ver en directo qué ha ocurrido y decidir cómo actuar. El sistema es tan rápido que apenas pasan unos segundos desde que se detecta el movimiento hasta que recibes el aviso.",
                "advantages_title": "Ventajas de los detectores de movimiento con cámara",
                "advantages_list": {
                    "1_title": "Confirmación visual inmediata",
                    "1_desc": "Los detectores de movimiento tradicionales avisan cuando algo se mueve, pero no te muestran qué ha pasado. Con los sensores de movimiento con cámara puedes verlo en tiempo real desde tu móvil y decidir si se trata de una alarma real o de un movimiento inocente.",
                    "2_title": "Menos falsas alarmas",
                    "2_desc": "La verificación visual permite evitar sustos innecesarios. Si tienes mascotas o hay corrientes de aire que podrían activar un detector, la cámara te ayuda a comprobarlo al instante.",
                    "3_title": "Control total desde tu móvil",
                    "3_desc": "A través de la app de Bambai, puedes acceder a las imágenes en directo o revisar los clips grabados cada vez que se activa un sensor. Estés donde estés, sabrás qué ocurre en casa.",
                    "4_title": "Pruebas en caso de intrusión",
                    "4_desc": "Si alguien intenta entrar, las cámaras registran la secuencia del suceso. De esta forma tendrás pruebas visuales que pueden serte útiles si necesitas justificar el incidente.",
                    "5_title": "Integración con todo el sistema",
                    "5_desc": "En Bambai, los sensores de movimiento con cámara se comunican con el resto de dispositivos: detectores de movimiento, sensores de apertura y el panel central. Todo el sistema trabaja coordinado.",
                    "6_title": "Perfectos para casas con mascotas o segundas residencias",
                    "6_desc": "Si tienes animales, sabrás de inmediato si ha sido tu perro quien ha pasado frente al sensor o si realmente hay algo más. También son una gran opción para segundas viviendas o locales que no visitas a diario."
                },
                "when_title": "Cuándo conviene instalar sensores de movimiento con cámara",
                "when_desc": "Los sensores de movimiento con cámara no son imprescindibles para todos los hogares, pero sí muy recomendables en muchos casos. Te convienen especialmente si:",
                "when_list": {
                    "1": "Pasas gran parte del día fuera y quieres comprobar visualmente que todo está bien.",
                    "2": "Tienes una casa amplia, con varias plantas o entradas.",
                    "3": "Quieres reducir al mínimo las falsas alarmas por mascotas o movimientos ambientales.",
                    "4": "Buscas una solución flexible y moderna, sin depender de contratos largos ni instalaciones complicadas."
                },
                "how_title": "Cómo funciona el sistema de Bambai",
                "how_desc": "El sistema se basa en una idea muy sencilla: un panel central conectado con distintos sensores y detectores de movimiento colocados en puntos estratégicos de la vivienda.",
                "how_steps": {
                    "title": "Cuando se detecta un movimiento",
                    "1": "El panel comprueba si la alarma está activada.",
                    "2": "Si lo está, te envía una notificación inmediata a la app.",
                    "3": "Si hay cámaras instaladas, puedes ver en directo lo que está pasando.",
                    "4": "Si confirmas que no eres tú, el sistema te guía para contactar con la policía."
                },
                "install_title": "Instalación sencilla",
                "install_desc": "Una de las ventajas de Bambai es que todo se instala en casa sin complicaciones. No necesitas técnicos ni herramientas.",
                "install_steps": {
                    "1": "Coloca el panel central en una zona con buena cobertura móvil.",
                    "2": "Sitúa los sensores y detectores de movimiento en entradas, pasillos o zonas comunes.",
                    "3": "Conéctalo a la app y comprueba que todo funciona correctamente."
                },
                "different_title": "Qué hace diferente a Bambai",
                "different_list": {
                    "1_title": "Instalación sin obras",
                    "1_desc": "Todo se monta en minutos y sin herramientas.",
                    "2_title": "Aviso a la policía asistido",
                    "2_desc": "Si ocurre algo, te ayudamos a contactar con la comisaría más cercana.",
                    "3_title": "Soporte real 24/7",
                    "3_desc": "Nuestro equipo está disponible siempre, sin bots ni esperas eternas.",
                    "4_title": "Sin compra obligatoria",
                    "4_desc": "No tienes que pagar por la alarma, la usas mientras la necesites.",
                    "5_title": "Flexibilidad total",
                    "5_desc": "Puedes cambiar de plan o darte de baja cuando quieras."
                },
                "cta_title": "Tu alarma para casa como siempre la has querido",
                "cta_desc": "Sencilla, económica y sin permanencia"
            },
            "alarms_application": {
                "hero_title": "Alarmas según su aplicación",
                "hero_subtitle": "Tu alarma como siempre la has querido",
                "hero_desc": "Sencilla, económica y sin permanencia. Bambai te ofrece seguridad honesta y con valores.",
                "cta_prices": "Ver precios",
                "types_title": "Tipos de alarmas según su aplicación",
                "types_desc": "Encuentra la solución de seguridad perfecta para tus necesidades específicas",
                "types": {
                    "squatters_title": "Alarmas anti okupas",
                    "squatters_desc": "Protección específica contra ocupaciones ilegales. Sistema de detección temprana que te avisa ante cualquier intento de acceso no autorizado a tu propiedad.",
                    "wired_title": "Alarmas cableadas sin cuotas",
                    "wired_desc": "Sistemas de seguridad con conexión por cable, sin necesidad de pagar cuotas mensuales. Instalación profesional y control total de tu sistema.",
                    "inhibitors_title": "Alarmas anti inhibidores",
                    "inhibitors_desc": "Tecnología avanzada que detecta y neutraliza intentos de inhibición de señal. Protección garantizada incluso ante ataques sofisticados.",
                    "smart_title": "Alarmas inteligentes",
                    "smart_desc": "Sistemas conectados con inteligencia artificial que aprenden de tus rutinas. Control total desde tu smartphone con notificaciones en tiempo real.",
                    "police_title": "Alarmas conectadas a la policía",
                    "police_desc": "Conexión directa con las autoridades para una respuesta rápida. Sistema verificado que garantiza la intervención policial cuando más lo necesitas."
                },
                "more_info": "Más información",
                "features": {
                    "protection_title": "Protección completa",
                    "protection_desc": "Sistemas diseñados para cada necesidad específica de seguridad",
                    "technology_title": "Tecnología avanzada",
                    "technology_desc": "Soluciones inteligentes con las últimas innovaciones en seguridad",
                    "support_title": "Soporte 24/7",
                    "support_desc": "Asistencia continua y conexión con autoridades cuando lo necesites"
                },
                "cta_title": "¿No sabes qué alarma elegir?",
                "cta_desc": "Nuestro equipo te ayudará a encontrar la solución perfecta para tu hogar o negocio",
                "cta_button": "Ver todos los planes",
                "cta_call": "Llamar al 937 379 317"
            },
            "alarms_space": {
                "hero_title": "Alarmas según su espacio",
                "hero_subtitle": "La solución perfecta para cada tipo de espacio",
                "hero_desc": "Tu alarma como siempre la has querido: sencilla, económica y sin permanencia. Bambai te ofrece seguridad honesta y con valores.",
                "cta_prices": "Ver precios",
                "types_title": "Tipos de alarmas según su espacio",
                "types_desc": "Cada espacio tiene necesidades únicas de seguridad. Encuentra la alarma perfecta para tu hogar, negocio o propiedad.",
                "types": {
                    "business_title": "Alarmas para negocio, local comercial y empresas",
                    "business_desc": "Protección profesional para tu negocio. Sistemas adaptados a locales comerciales con control de accesos, cámaras de vigilancia y conexión directa con seguridad.",
                    "flat_title": "Alarmas para piso",
                    "flat_desc": "Seguridad completa para tu piso. Instalación sencilla sin obras, detectores de movimiento y apertura, control desde tu móvil.",
                    "storage_title": "Alarmas para trastero",
                    "storage_desc": "Protege tus pertenencias almacenadas. Sistema inalámbrico fácil de instalar, alertas instantáneas ante cualquier acceso no autorizado.",
                    "door_title": "Sistemas de seguridad para puertas de entrada",
                    "door_desc": "Refuerza la seguridad de tu puerta principal. Detectores de apertura, cámaras con visión nocturna y notificaciones en tiempo real.",
                    "apartment_title": "Alarmas de seguridad para apartamentos",
                    "apartment_desc": "Soluciones compactas para apartamentos. Sistemas discretos y eficaces que se adaptan a espacios reducidos sin perder funcionalidad.",
                    "second_home_title": "Alarmas segunda residencia",
                    "second_home_desc": "Vigila tu segunda vivienda estés donde estés. Control remoto total, alertas inmediatas y verificación visual desde tu smartphone.",
                    "office_title": "Alarmas oficina",
                    "office_desc": "Protección para tu espacio de trabajo. Sistemas que protegen equipos, documentos y garantizan la seguridad de tus empleados.",
                    "shop_title": "Alarmas tienda",
                    "shop_desc": "Seguridad especializada para comercios. Prevención de robos, control de inventario y protección durante y fuera del horario comercial.",
                    "industrial_title": "Alarmas para naves industriales",
                    "industrial_desc": "Protección de grandes espacios industriales. Sistemas con amplio alcance, resistentes y adaptados a entornos exigentes."
                },
                "more_info": "Más información",
                "benefits_title": "Ventajas de nuestras alarmas",
                "benefits_desc": "Sin importar el espacio, todas nuestras alarmas comparten estas características",
                "benefits": {
                    "easy_title": "Instalación fácil",
                    "easy_desc": "Sin obras ni complicaciones, lista en minutos",
                    "adaptable_title": "Adaptable",
                    "adaptable_desc": "Se ajusta a cualquier tipo de espacio",
                    "no_contract_title": "Sin permanencia",
                    "no_contract_desc": "Flexibilidad total, cancela cuando quieras",
                    "support_title": "Soporte 24/7",
                    "support_desc": "Asistencia continua cuando la necesites"
                },
                "cta_title": "¿Necesitas ayuda para elegir?",
                "cta_desc": "Nuestro equipo te asesorará para encontrar la alarma perfecta para tu espacio",
                "cta_button": "Ver todos los planes",
                "cta_call": "Llamar al 937 379 317"
            },
            "values_page": {
                "hero_title": "Valores Bambai",
                "hero_subtitle": "Una forma diferente de entender la seguridad",
                "intro": "Nos gustaría empezar agradeciendo tu interés en nosotr@s.",
                "p1": "Somos Bambai, una empresa joven y diferente que nace en el 2020 con el objetivo claro de reinterpretar el servicio de alarmas y sistemas de seguridad. Nacemos para hablar claro, directo, transparente, y siempre estar accesibles para nuestros clientes.",
                "p2": "Nuestro servicio es diferente, ofrecemos una suscripción sin permanencia. Queremos que sigas siendo cliente por la calidad de nuestro servicio y de nuestro equipo humano y no porque tienes un contrato firmado. Confiamos en ti, y trabajaremos para que confíes en nosotros.",
                "p3": "Mucho hablan las empresas tradicionales sobre las maravillas de su tecnología. La nuestra es justo lo indispensable. No tiene más colores, ni más funciones, ni más luces de las necesarias. Hace su trabajo y lo hace muy bien. Nos permite ofrecerte un servicio de calidad y cuidar de ti y de los tuyos con precisión.",
                "p4": "Nuestros valores nos rigen: sencillez, adaptabilidad, cercanía, transparencia, calidad humana. Son miles quienes nos conocen a lo largo y ancho del país, y pueden dar fe de ello. Si aún no nos conoces date la oportunidad, que si algo no te encaja siempre tendrás libertad en tus decisiones.",
                "values": {
                    "simplicity_title": "Sencillez",
                    "simplicity_desc": "Sin complicaciones innecesarias.",
                    "transparency_title": "Transparencia",
                    "transparency_desc": "Hablamos claro y directo.",
                    "closeness_title": "Cercanía",
                    "closeness_desc": "Siempre accesibles para ti.",
                    "quality_title": "Calidad humana",
                    "quality_desc": "Cuidamos de ti y de los tuyos.",
                    "adaptability_title": "Adaptabilidad",
                    "adaptability_desc": "Nos ajustamos a tus necesidades."
                },
                "p5": "No somos gigantes, para nosotros cada cliente es imprescindible. Nos esforzamos en darte el mejor servicio y estar accesibles para ti ante cualquier duda. Y si en algún momento cometemos un error, lo resolveremos con toda la profesionalidad que tu esperas de nosotros.",
                "ceo_name": "John Correa",
                "ceo_title": "CEO y co-fundador de Bambai."
            },
            "faq_page": {
                "hero_title": "Preguntas frecuentes",
                "hero_subtitle": "Resolvemos tus dudas sobre nuestras alarmas y servicios",
                "q1": "¿Puedo tener una alarma si tengo mascota?",
                "a1": "Aunque los detectores de movimiento están preparados para obviar a mascotas de menos de 20kg, hay veces en las que se producen errores y hay falsas alertas. Te recomendamos que nos llames para que podamos ofrecerte un pack especial para mascotas que incluye más detectores de apertura y cámaras. Estos detectores se colocarán en todos los accesos (puertas y ventanas) de tu casa, mientras dentro situaremos cámaras. De esta forma, si detectamos movimiento, podrás comprobar si ha sido tu mascota o si es una intrusión real.",
                "q2": "¿Cómo se hace la suscripción y se paga?",
                "a2": "¡Es muy fácil! Debes entrar en nuestra web y hacer clic en el botón \"suscribirme\" del plan que has elegido. Esto te permitirá ver y aceptar los términos y condiciones, rellenar el formulario con los datos de tu suscripción y realizar el pago con el método prefieras. Si decides seguir con tu suscripción, los siguientes pagos se realizarán automáticamente cada mes.",
                "q3": "¿Para qué tipo de vivienda sirve?",
                "a3": "Para todas, siempre que haya cobertura de móvil de algún operador y luz. Pisos, casas, locales, almacenes, caravanas y otros. Elige el plan que mejor te encaje o déjate aconsejar por nosotros.",
                "q4": "¿Cuál es la diferencia con las empresas tradicionales de alarmas?",
                "a4": "La principal diferencia es que nuestra alarma es autoinstalable y no intrusiva (no vamos a tu vivienda a hacer agujeros). Todo es mucho más transparente, fácil, flexible y claro. Tampoco tienes que comprar la alarma. No queremos complicarte con equipos de alarma que tal vez en un tiempo ya no necesites, por eso te prestamos los nuestros.",
                "q5": "¿En la alarma sin permanencia, realmente no hay permanencia? ¿Puedo contratar para unas semanas o meses?",
                "a5_p1": "Repetimos alto y claro: sí y sí. El servicio de alarma sin permanencia NO TIENE PERMANENCIA*. Puedes quedarte con nosotros si lo necesitas y además estás a gusto con el servicio. Si algo de esto no se cumple, no tiene sentido que estés en la obligación de tener una alarma durante un tiempo que no la quieres tener.",
                "a5_p2": "Si la necesitas solo por unas semanas o meses no hay problema, puedes hacerlo. Por ejemplo, algunos de nuestros clientes utilizan el pack básico (que no necesita Wi-Fi) para proteger durante unas semanas o meses viviendas vacías que están en reformas, o que están a la espera de alquiler o venta.",
                "a5_note": "*No confundir con el servicio de alarma indefinida, con periodo mínimo de servicio de 9 meses.",
                "q6": "¿Qué es el soporte 24/7?",
                "a6": "Se trata de un servicio incluido por defecto en todos los planes, en el que nuestro equipo de soporte está disponible para ayudarte a aclarar cualquier duda con la actividad o funcionamiento de tu alarma.",
                "q7": "¿Qué pasa si alguien entra en mi casa? ¿Avisáis a la Policía?",
                "a7_p1": "Te asistimos para que puedas hacer el aviso a la policía a través de nuestra funcionalidad en la app, que te permitirá contactar inmediatamente con la comisaría de policía más cercana.",
                "a7_p2": "Nuestro equipo de soporte está 24/7 disponible para ayudarte a aclarar cualquier duda con la actividad o funcionamiento de tu alarma. En caso de que se active un detector, recibirás una notificación automática a través de tu app.",
                "a7_p3": "Si se activan dos o más detectores, y/o la cámara en menos de 30 minutos, recibirás una notificación en tu app donde podrás confirmar si has sido tú o no. De manera complementaria recibirás una llamada automática avisándote de la incidencia. Si no has sido tú, podrás acceder al teléfono de la comisaría policial más cercana a través de tu app, y además, recibirás en tu email el historial de actividad de tu alarma para que puedas utilizarlo en caso de ser necesario.",
                "q8": "¿Para qué sirve la app?",
                "a8_intro": "La App de Bambai se utiliza para controlar tu alarma y ver toda la actividad que generan los sensores y las cámaras. Estas son algunas de las cosas que podrás hacer a través de la app:",
                "a8_li1": "Activar y desactivar la alarma.",
                "a8_li2": "Ver todos los registros de movimiento, imágenes y vídeos que registre la cámara.",
                "a8_li3": "Si sois varios en casa, podrás dar acceso al control de tu alarma a otros usuarios, dando más o menos permisos de control según necesites.",
                "a8_li4": "También servirá para confirmar alertas. En caso de que se active un detector recibirás una notificación automática a través de tu app.",
                "a8_outro": "La podrás descargar del App Store, Google Play Store y Huawei App Gallery.",
                "q9": "¿Cómo se hace y cuánto tarda la instalación?",
                "a9": "Después de contratar, te enviaremos el equipo de alarma por mensajería a tu casa y lo recibirás en 48-72 horas laborables (península). La instalación es super sencilla y se hace en 10 min, por eso la puedes hacer tu mism@ y es gratuita. Si necesitas asistencia, nuestro equipo de soporte estará disponible para ayudarte."
            },
            "blog_page": {
                "hero_title": "Blog Bambai",
                "hero_subtitle": "Consejos de seguridad, guías y novedades para proteger lo que más importa",
                "read_more": "Leer más",
                "author": "Equipo Bambai",
                "posts": {
                    "1": {
                        "title": "Qué alarma poner en casa",
                        "excerpt": "Si quieres saber la respuesta adecuada a qué alarma poner en casa, en Bambai, como empresa experta en este tipo de sistema de seguridad...",
                        "category": "Alarma para casa"
                    },
                    "2": {
                        "title": "Los mejores perros guardianes: descubre la raza ideal para ti",
                        "excerpt": "Descubre cuáles son las mejores razas de perros guardianes para proteger tu hogar y a tu familia. Una guía completa para elegir...",
                        "category": "Seguridad"
                    },
                    "3": {
                        "title": "Cómo abrir una puerta con la llave dentro: trucos que funcionan",
                        "excerpt": "¿Te has dejado las llaves dentro? No entres en pánico. Te explicamos algunos trucos seguros y efectivos para abrir tu puerta...",
                        "category": "Consejos"
                    },
                    "4": {
                        "title": "Grados de seguridad: niveles, usos y normativas aplicables",
                        "excerpt": "Entiende los diferentes grados de seguridad en alarmas y sistemas de protección. ¿Qué nivel necesita realmente tu vivienda o negocio?",
                        "category": "Normativa"
                    },
                    "5": {
                        "title": "Instalación de CCTV: pasos, consejos y normativa básica",
                        "excerpt": "Guía paso a paso para la instalación de un sistema de CCTV. Conoce la normativa vigente y los mejores consejos para una instalación...",
                        "category": "Tecnología"
                    },
                    "6": {
                        "title": "Alarmas GPRS: todo sobre su funcionamiento y ventajas",
                        "excerpt": "Las alarmas GPRS ofrecen una seguridad superior al no depender de la línea telefónica fija. Descubre cómo funcionan y sus ventajas...",
                        "category": "Tecnología"
                    },
                    "7": {
                        "title": "Instalación de una cámara de vigilancia: guía completa",
                        "excerpt": "Aprende a instalar tu propia cámara de vigilancia con esta guía completa. Consejos de ubicación, configuración y mantenimiento...",
                        "category": "Guías"
                    },
                    "8": {
                        "title": "Barrios más peligrosos de Sevilla",
                        "excerpt": "Un análisis de las zonas con mayor índice de incidencias en Sevilla. Información útil para conocer la seguridad de los diferentes barrios...",
                        "category": "Seguridad Local"
                    },
                    "9": {
                        "title": "Barrio más peligroso de Valencia",
                        "excerpt": "Descubre qué zonas de Valencia requieren mayor precaución y qué medidas de seguridad son recomendables si vives en ellas...",
                        "category": "Seguridad Local"
                    }
                }
            },
            "contact_page": {
                "hero_title": "Contacto",
                "hero_subtitle": "¿Hablamos? Estamos aquí para ayudarte con lo que necesites.",
                "email_title": "Email",
                "phone_title": "Teléfono",
                "whatsapp_title": "WhatsApp"
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
                "contact": "Contacte",
                "calculate_quote": "Calcula la teva quota",
                "language": "Idioma"
            },
            "hero": {
                "badge": "Alarma sense permanència",
                "title": "I si vols, subscriu-te a la teva alarma",
                "title_highlight": "sense permanència",
                "subtitle": "La teva alarma com sempre l'has volgut: senzilla, flexible i sense permanència.",
                "cta_prices": "Veure preus",
                "cta_call": "Truca'ns gratis",
                "rating_text": "Més de 1.000 clients satisfets"
            },
            "features": {
                "title": "El difícil és fer-ho fàcil",
                "subtitle": "Reinventem la seguretat per fer-la més fàcil, transparent i accessible per a tothom.",
                "no_permanence_title": "Alarmes sense permanència",
                "no_permanence_desc": "Ets lliure. Dona't de baixa quan vulguis sense penalitzacions ni explicacions.",
                "police_title": "Assistència en l'avís a policia",
                "police_desc": "Protecció total amb avís immediat a les forces de seguretat en cas d'intrusió.",
                "flexibility_title": "Flexibilitat real",
                "flexibility_desc": "Adapta el teu sistema de seguretat al que realment necessites, sense pagar pel que no fas servir.",
                "simplicity_title": "Senzillesa",
                "simplicity_desc": "Tecnologia avançada feta fàcil. Sense complicacions, sense obres i sense cables.",
                "cybersecurity_title": "Ciberseguretat inclosa",
                "cybersecurity_desc": "Protegim no només el teu espai físic, sinó també la teva xarxa digital contra atacs.",
                "connected_title": "Sempre connectat",
                "connected_desc": "Sistema anti-inhibició amb doble via de comunicació per a màxima seguretat."
            },
            "testimonials": {
                "title": "A les persones com tu els agradem",
                "subtitle": "Basat en més de 500 ressenyes verificades",
                "verified_client": "Client verificat",
                "review_1": "Molt bona atenció, molt flexibles, no hi ha despeses ocultes. Altament recomanable",
                "review_2": "Si aquest servei fos més conegut, sens dubte es convertiria en una de les grans, entrant a competir amb les dues opcions més conegudes a Espanya pel que fa a sistemes de seguretat i alarmes. Professionalitat, qualitat del sistema i bon servei. A mi m'ha sorprès molt gratament.",
                "review_3": "Vaig contractar un mes per a una reforma, i me la vaig quedar després indefinidament. Molt millors que qualsevol empresa de les de sempre, i tot molt més transparent."
            },
            "footer": {
                "description": "L'alarma intel·ligent, sense permanència i fàcil d'usar que protegeix el que més t'importa.",
                "product": "Producte",
                "company": "Companyia",
                "contact": "Contacte",
                "phone": "Telèfon",
                "email": "Email",
                "address": "Carrer de Pascual i Vila, Les Corts\n08028 Barcelona",
                "rights": "Bambai. Tots els drets reservats.",
                "legal": "Avís Legal",
                "privacy": "Privacitat",
                "cookies": "Cookies"
            },
            "prices_page": {
                "title": "Preus justos",
                "subtitle": "Tria el pla que millor s'adapti a tu. Sense permanència, sense lletra petita.",
                "toggle_no_permanence": "Alarma Sense Permanència",
                "toggle_indefinite": "Alarma Indefinida",
                "popular_badge": "Més popular",
                "save_badge": "Estalvia't 20€ al mes!",
                "cta_contract": "Contractar ara",
                "vat_included": "IVA inclòs",
                "custom_config": "¿Necessites una configuració personalitzada?",
                "call_us": "Truca'ns al 937 379 317",
                "plans": {
                    "basic_name": "Bàsica",
                    "standard_1_name": "Estàndard i 1 càmera",
                    "standard_2_name": "Estàndard i dues càmeres",
                    "features": {
                        "panel": "1 Panell central",
                        "motion_1": "1 Detector de moviment",
                        "motion_2": "2 Detectors de moviment",
                        "opening_1": "1 Detector d'obertura",
                        "remote": "1 Comandament a distància",
                        "stickers": "Cartells dissuasius",
                        "app": "App mòbil il·limitada",
                        "cra": "Connexió 24h a CRA",
                        "police": "Avís a Policia",
                        "camera_1": "1 Càmera Wifi amb streaming",
                        "camera_2": "2 Càmeres Wifi amb streaming",
                        "min_period": "Període mínim 9 mesos"
                    },
                    "badge_save": "Estalvia't 20€ al mes!"
                },

            },
            "home_alarms": {
                "hero_title": "Alarmes de seguretat per a casa, llar i habitatge",
                "hero_subtitle_prefix": "Plans des de",
                "hero_desc": "A Bambai creiem que la seguretat no té per què ser cara ni amagar sorpreses. Les nostres alarmes per a casa estan pensades per ser accessibles, clares i sense lletra petita.",
                "pricing_title": "Plans d'alarmes per a casa des de 19,99 €/mes",
                "pricing_desc": "A Bambai tenim clar que la seguretat no hauria de costar un dineral ni obligar-te a signar contractes interminables. Tries el nivell de seguretat que millor encaixi amb tu i amb el teu habitatge, pagant només pel que de veritat necessites.",
                "plan_1_subtitle": "Alarma bàsica per a habitatge segur",
                "plan_1_desc": "Ideal per a pisos petits, segones residències o per als qui busquen una alarma per a habitatge pràctica i econòmica.",
                "plan_2_subtitle": "Alarma amb càmera wifi i streaming en directe",
                "plan_2_desc": "El pla més triat per famílies que volen comprovar des del mòbil què passa a casa, fins i tot quan són fora.",
                "plan_3_subtitle": "Alarma avançada amb màxima seguretat",
                "plan_3_desc": "La millor elecció per a cases grans, xalets o qualsevol habitatge que necessiti un control més exhaustiu.",
                "plans": {
                    "plan_1_name": "Pla 1: Bàsica",
                    "plan_2_name": "Pla 2: Estàndard",
                    "plan_3_name": "Pla 3: Avançada",
                    "features": {
                        "panel": "1 Panell central",
                        "motion_1": "1 Detector de moviment",
                        "motion_2": "2 Detectors de moviment",
                        "opening_1": "1 Detector d'obertura",
                        "opening_2": "2 Detectors d'obertura",
                        "key_1": "1 Clau intel·ligent",
                        "key_2": "2 Claus intel·ligents",
                        "stickers": "3 Adhesius dissuasius",
                        "camera_1": "1 Càmera wifi amb streaming en directe",
                        "camera_2": "2 Càmeres wifi amb streaming"
                    }
                },
                "all_included": "Tots els nostres plans inclouen instal·lació gratuïta, manteniment, suport 24/7 i assistència immediata per a avisar a la policia en cas d'incidència.",
                "transparency_title": "Preus justos i transparents",
                "transparency_desc": "La idea és senzilla: protegir la teva llar amb preus que qualsevol pugui assumir i amb un servei complet que ja ho inclou tot.",
                "transparency_points": {
                    "1_title": "Tot inclòs en la teva alarma per a habitatge",
                    "1_desc": "Instal·lació gratuïta, manteniment, suport 24/7 i assistència immediata per avisar a la policia en cas d'incidència.",
                    "2_title": "Estalvi real enfront d'altres empreses",
                    "2_desc": "Des de 19,99 €/mes tens cobertura total sense costos d'instal·lació ni equips addicionals.",
                    "3_title": "Sense costos ocults ni lletra petita",
                    "3_desc": "El que veus és el que pagues. Sense sorpreses, sense càrrecs extra, sense complicacions.",
                    "4_title": "La tranquil·litat de pagar el just",
                    "4_desc": "Protegeix la teva llar amb preus que qualsevol pugui assumir i amb un servei complet que ja ho inclou tot."
                },
                "features_title": "Característiques de les nostres alarmes de seguretat",
                "features_desc": "A Bambai creiem que les alarmes per a casa han de ser fàcils, clares i accessibles. El sistema està pensat perquè tinguis tranquil·litat des del primer minut, sense instal·lacions invasives ni complicacions tècniques.",
                "features_list": {
                    "1_title": "Assistència 24/7 i avís immediat a la policia",
                    "1_desc": "El suport funciona les 24 hores del dia, els 365 dies de l'any. Si es detecta una intrusió, reps una notificació immediata a l'app i pots connectar amb la comissaria més propera perquè l'avís a la policia sigui ràpid i directe.",
                    "2_title": "Autoinstal·lació gratuïta i en només 10 minuts",
                    "2_desc": "En 48 a 72 hores laborables reps l'equip a casa teva i el muntes tu mateix en només 10 minuts. Sense cables, sense obres i sense forats a les parets. Amb assistència remota si ho necessites. Tot inclòs en el preu, sense costos addicionals.",
                    "3_title": "Equip complet adaptat al teu habitatge",
                    "3_desc": "Panell central com a cervell del sistema, detectors de moviment i d'obertura per cobrir portes i finestres, claus intel·ligents per activar i desactivar l'alarma còmodament, càmeres amb streaming en directe incloses en els plans superiors, i adhesius dissuasius que afegeixen un extra de protecció.",
                    "4_title": "Control total des de l'app",
                    "4_desc": "L'app de Bambai converteix el teu mòbil en el comandament de la teva alarma. Activa o desactiva l'alarma en segons, revisa els moviments detectats, fotos i vídeos, comparteix accés amb altres persones decidint quins permisos té cadascuna, i confirma alertes immediatament avisant a la policia des de la mateixa app."
                },
                "cta_title": "¿Llest per protegir la teva llar?",
                "cta_desc": "Contracta la teva alarma avui i comença a gaudir de la tranquil·litat que mereixes",
                "cta_button": "Veure tots els plans",
                "cta_call": "Trucar al 937 379 317"
            },
            "motion_sensors": {
                "hero_title": "Sensors i detectors de moviment",
                "hero_subtitle": "Protecció eficaç, fàcil d'instal·lar i amb avís immediat al mòbil",
                "hero_desc": "Les alarmes amb detectors de moviment són el cor de qualsevol sistema de seguretat modern. A Bambai els nostres detectors estan pensats per reaccionar en segons i avisar-te a l'instant, sense esperes, sense complicacions i, per descomptat, sense permanències.",
                "housing_title": "Detectors de moviment segons el tipus d'habitatge",
                "housing_desc": "Cada tipus d'habitatge necessita una distribució i una tecnologia diferent. No es tracta d'omplir la casa de sensors, sinó de col·locar-los on de veritat serveixen i aprofitar al màxim el seu abast.",
                "housing_types": {
                    "1_title": "En pisos o apartaments",
                    "1_desc": "Als pisos, on els espais solen ser més reduïts, n'hi ha prou amb uns pocs sensors de moviment ben col·locats en passadissos, entrades i zones de pas. Els detectors de moviment per infrarojos (PIR) són els més habituals i funcionen genial en interiors. Detecten els canvis de temperatura corporal i són discrets, eficaços i fàcils d'instal·lar.",
                    "2_title": "En cases amb jardí o diverses plantes",
                    "2_desc": "En habitatges més grans, l'ideal és combinar diversos tipus de detectors de moviment. Els d'exterior, resistents a la pluja i a la pols, són perfectes per vigilar accessos, terrasses i zones posteriors. Dins de casa, els detectors duals (que combinen infrarojos i microones) cobreixen diverses plantes i redueixen les falses alarmes.",
                    "3_title": "En locals, oficines o magatzems",
                    "3_desc": "Aquests espais solen ser més amplis i menys transitats, per la qual cosa convé fer servir detectors de moviment de microones. Solen tenir més abast i una sensibilitat més alta. Si els combines amb càmeres, podràs verificar qualsevol alerta en temps real sense moure't del lloc.",
                    "4_title": "En caravanes o segones residències",
                    "4_desc": "Si només necessites protegir un espai durant un temps limitat, els sensors de moviment sense fils són la millor opció. S'instal·len en minuts, no requereixen obra ni instal·lació professional i pots donar-te de baixa quan vulguis si tries una alarma sense permanència com la nostra."
                },
                "placement_title": "On col·locar els sensors de moviment per protegir de veritat",
                "placement_desc": "La ubicació dels detectors de moviment és tan important com la seva qualitat. Un sensor ben col·locat pot cobrir una habitació sencera; un mal situat pot deixar zones sense vigilància.",
                "placement_tips": {
                    "1": "Zones de pas: passadissos, entrades o escales són punts clau. Col·locar-hi els sensors de moviment garanteix que es detecti qualsevol desplaçament.",
                    "2": "Alçada adequada: l'ideal és instal·lar-los entre 2 i 2,5 metres del terra, orientats cap a la zona que vols cobrir.",
                    "3": "Evita la calor directa: radiadors, xemeneies o llum solar intensa poden alterar la detecció.",
                    "4": "Portes i finestres: combina els detectors de moviment amb sensors d'obertura per reforçar els punts d'entrada.",
                    "5": "Exterior protegit: si els instal·les fora, busca zones cobertes o sota ràfecs per protegir-los de la pluja i el sol."
                },
                "pets_title": "Si tens mascotes, això t'interessa",
                "pets_desc_1": "Les mascotes i els sensors de moviment sempre han tingut una relació complicada, però això és cosa del passat. Els detectors de moviment actuals són capaços de diferenciar entre una persona i un animal petit (fins a uns 20 quilos). Si el teu gos o el teu gat es mou per casa, el sistema l'ignora.",
                "pets_desc_2": "A Bambai, a més, comptem amb packs especials per a llars amb mascotes. Combinem detectors d'obertura en portes i finestres amb càmeres interiors, perquè, si salta una alerta, puguis comprovar en segons si ha estat la teva mascota o alguna cosa més seriosa.",
                "selection_title": "Consells per encertar en triar els teus detectors de moviment",
                "selection_desc": "Abans de decidir-te, hi ha alguns detalls que val la pena tenir en compte",
                "selection_tips": {
                    "1_title": "Pensa en les teves rutines",
                    "1_desc": "Si passes moltes hores fora, prioritza detectors amb notificació immediata a l'app per reaccionar ràpid.",
                    "2_title": "Valora l'entorn",
                    "2_desc": "En estades amb molta llum o variacions de temperatura, els detectors de microones funcionen millor.",
                    "3_title": "Combina tecnologies",
                    "3_desc": "Un sistema que barregi sensors PIR amb càmeres et donarà una protecció més completa.",
                    "4_title": "Busca flexibilitat",
                    "4_desc": "Si vius de lloguer o planeges mudar-te, tria detectors de moviment que puguis moure o ampliar sense dependre de tècnics."
                },
                "camera_title": "Sensors de moviment amb càmera",
                "camera_desc": "Els sensors de moviment amb càmera són l'evolució natural dels sistemes de seguretat domèstics. No només detecten el que passa, sinó que també t'ho mostren a l'instant.",
                "camera_box_title": "Com funcionen els sensors de moviment amb càmera",
                "camera_box_desc": "Un sensor de moviment amb càmera detecta qualsevol canvi en l'espai que vigila i, així que el percep, activa la càmera i t'envia una notificació al mòbil. En aquest moment pots veure en directe què ha passat i decidir com actuar. El sistema és tan ràpid que amb prou feines passen uns segons des que es detecta el moviment fins que reps l'avís.",
                "advantages_title": "Avantatges dels detectors de moviment amb càmera",
                "advantages_list": {
                    "1_title": "Confirmació visual immediata",
                    "1_desc": "Els detectors de moviment tradicionals avisen quan alguna cosa es mou, però no et mostren què ha passat. Amb els sensors de moviment amb càmera pots veure-ho en temps real des del teu mòbil i decidir si es tracta d'una alarma real o d'un moviment innocent.",
                    "2_title": "Menys falses alarmes",
                    "2_desc": "La verificació visual permet evitar ensurts innecessaris. Si tens mascotes o hi ha corrents d'aire que podrien activar un detector, la càmera t'ajuda a comprovar-ho a l'instant.",
                    "3_title": "Control total des del teu mòbil",
                    "3_desc": "A través de l'app de Bambai, pots accedir a les imatges en directe o revisar els clips gravats cada vegada que s'activa un sensor. Siguis on siguis, sabràs què passa a casa.",
                    "4_title": "Proves en cas d'intrusió",
                    "4_desc": "Si algú intenta entrar, les càmeres registren la seqüència del succés. D'aquesta manera tindràs proves visuals que poden ser-te útils si necessites justificar l'incident.",
                    "5_title": "Integració amb tot el sistema",
                    "5_desc": "A Bambai, els sensors de moviment amb càmera es comuniquen amb la resta de dispositius: detectors de moviment, sensors d'obertura i el panell central. Tot el sistema treballa coordinat.",
                    "6_title": "Perfectes per a cases amb mascotes o segones residències",
                    "6_desc": "Si tens animals, sabràs immediatament si ha estat el teu gos qui ha passat davant del sensor o si realment hi ha alguna cosa més. També són una gran opció per a segones vivendes o locals que no visites diàriament."
                },
                "when_title": "Quan convé instal·lar sensors de moviment amb càmera",
                "when_desc": "Els sensors de moviment amb càmera no són imprescindibles per a totes les llars, però sí molt recomanables en molts casos. Et convenen especialment si:",
                "when_list": {
                    "1": "Passes gran part del dia fora i vols comprovar visualment que tot està bé.",
                    "2": "Tens una casa àmplia, amb diverses plantes o entrades.",
                    "3": "Vols reduir al mínim les falses alarmes per mascotes o moviments ambientals.",
                    "4": "Busques una solució flexible i moderna, sense dependre de contractes llargs ni instal·lacions complicades."
                },
                "how_title": "Com funciona el sistema de Bambai",
                "how_desc": "El sistema es basa en una idea molt senzilla: un panell central connectat amb diferents sensors i detectors de moviment col·locats en punts estratègics de l'habitatge.",
                "how_steps": {
                    "title": "Quan es detecta un moviment",
                    "1": "El panell comprova si l'alarma està activada.",
                    "2": "Si ho està, t'envia una notificació immediata a l'app.",
                    "3": "Si hi ha càmeres instal·lades, pots veure en directe el que està passant.",
                    "4": "Si confirmes que no ets tu, el sistema et guia per contactar amb la policia."
                },
                "install_title": "Instal·lació senzilla",
                "install_desc": "Un dels avantatges de Bambai és que tot s'instal·la a casa sense complicacions. No necessites tècnics ni eines.",
                "install_steps": {
                    "1": "Col·loca el panell central en una zona amb bona cobertura mòbil.",
                    "2": "Situa els sensors i detectors de moviment en entrades, passadissos o zones comunes.",
                    "3": "Connecta'l a l'app i comprova que tot funciona correctament."
                },
                "different_title": "Què fa diferent a Bambai",
                "different_list": {
                    "1_title": "Instal·lació sense obres",
                    "1_desc": "Tot es munta en minuts i sense eines.",
                    "2_title": "Avís a la policia assistit",
                    "2_desc": "Si passa alguna cosa, t'ajudem a contactar amb la comissaria més propera.",
                    "3_title": "Suport real 24/7",
                    "3_desc": "El nostre equip està disponible sempre, sense bots ni esperes eternes.",
                    "4_title": "Sense compra obligatòria",
                    "4_desc": "No has de pagar per l'alarma, la fas servir mentre la necessitis.",
                    "5_title": "Flexibilitat total",
                    "5_desc": "Pots canviar de pla o donar-te de baixa quan vulguis."
                },
                "cta_title": "La teva alarma per a casa com sempre l'has volgut",
                "cta_desc": "Senzilla, econòmica i sense permanència"
            },
            "alarms_application": {
                "hero_title": "Alarmes segons la seva aplicació",
                "hero_subtitle": "La teva alarma com sempre l'has volgut",
                "hero_desc": "Senzilla, econòmica i sense permanència. Bambai t'ofereix seguretat honesta i amb valors.",
                "cta_prices": "Veure preus",
                "types_title": "Tipus d'alarmes segons la seva aplicació",
                "types_desc": "Troba la solució de seguretat perfecta per a les teves necessitats específiques",
                "types": {
                    "squatters_title": "Alarmes anti okupes",
                    "squatters_desc": "Protecció específica contra ocupacions il·legals. Sistema de detecció primerenca que t'avisa davant qualsevol intent d'accés no autoritzat a la teva propietat.",
                    "wired_title": "Alarmes cablejades sense quotes",
                    "wired_desc": "Sistemes de seguretat amb connexió per cable, sense necessitat de pagar quotes mensuals. Instal·lació professional i control total del teu sistema.",
                    "inhibitors_title": "Alarmes anti inhibidors",
                    "inhibitors_desc": "Tecnologia avançada que detecta i neutralitza intents d'inhibició de senyal. Protecció garantida fins i tot davant atacs sofisticats.",
                    "smart_title": "Alarmes intel·ligents",
                    "smart_desc": "Sistemes connectats amb intel·ligència artificial que aprenen de les teves rutines. Control total des del teu telèfon intel·ligent amb notificacions en temps real.",
                    "police_title": "Alarmes connectades a la policia",
                    "police_desc": "Connexió directa amb les autoritats per a una resposta ràpida. Sistema verificat que garanteix la intervenció policial quan més ho necessites."
                },
                "more_info": "Més informació",
                "features": {
                    "protection_title": "Protecció completa",
                    "protection_desc": "Sistemes dissenyats per a cada necessitat específica de seguretat",
                    "technology_title": "Tecnologia avançada",
                    "technology_desc": "Solucions intel·ligents amb les últimes innovacions en seguretat",
                    "support_title": "Suport 24/7",
                    "support_desc": "Assistència contínua i connexió amb autoritats quan ho necessitis"
                },
                "cta_title": "¿No saps quina alarma triar?",
                "cta_desc": "El nostre equip t'ajudarà a trobar la solució perfecta per a la teva llar o negoci",
                "cta_button": "Veure tots els plans",
                "cta_call": "Trucar al 937 379 317"
            },
            "alarms_space": {
                "hero_title": "Alarmes segons el seu espai",
                "hero_subtitle": "La solució perfecta per a cada tipus d'espai",
                "hero_desc": "La teva alarma com sempre l'has volgut: senzilla, econòmica i sense permanència. Bambai t'ofereix seguretat honesta i amb valors.",
                "cta_prices": "Veure preus",
                "types_title": "Tipus d'alarmes segons el seu espai",
                "types_desc": "Cada espai té necessitats úniques de seguretat. Troba l'alarma perfecta per a la teva llar, negoci o propietat.",
                "types": {
                    "business_title": "Alarmes per a negoci, local comercial i empreses",
                    "business_desc": "Protecció professional per al teu negoci. Sistemes adaptats a locals comercials amb control d'accessos, càmeres de vigilància i connexió directa amb seguretat.",
                    "flat_title": "Alarmes per a pis",
                    "flat_desc": "Seguretat completa per al teu pis. Instal·lació senzilla sense obres, detectors de moviment i obertura, control des del teu mòbil.",
                    "storage_title": "Alarmes per a traster",
                    "storage_desc": "Protegeix les teves pertinences emmagatzemades. Sistema sense fils fàcil d'instal·lar, alertes instantànies davant qualsevol accés no autoritzat.",
                    "door_title": "Sistemes de seguretat per a portes d'entrada",
                    "door_desc": "Reforça la seguretat de la teva porta principal. Detectors d'obertura, càmeres amb visió nocturna i notificacions en temps real.",
                    "apartment_title": "Alarmes de seguretat per a apartaments",
                    "apartment_desc": "Solucions compactes per a apartaments. Sistemes discrets i eficaços que s'adapten a espais reduïts sense perdre funcionalitat.",
                    "second_home_title": "Alarmes segona residència",
                    "second_home_desc": "Vigila el teu segon habitatge siguis on siguis. Control remot total, alertes immediates i verificació visual des del teu telèfon intel·ligent.",
                    "office_title": "Alarmes oficina",
                    "office_desc": "Protecció per al teu espai de treball. Sistemes que protegeixen equips, documents i garanteixen la seguretat dels teus empleats.",
                    "shop_title": "Alarmes botiga",
                    "shop_desc": "Seguretat especialitzada per a comerços. Prevenció de robatoris, control d'inventari i protecció durant i fora de l'horari comercial.",
                    "industrial_title": "Alarmes per a naus industrials",
                    "industrial_desc": "Protecció de grans espais industrials. Sistemes amb ampli abast, resistents i adaptats a entorns exigents."
                },
                "more_info": "Més informació",
                "benefits_title": "Avantatges de les nostres alarmes",
                "benefits_desc": "Sense importar l'espai, totes les nostres alarmes comparteixen aquestes característiques",
                "benefits": {
                    "easy_title": "Instal·lació fàcil",
                    "easy_desc": "Sense obres ni complicacions, llista en minuts",
                    "adaptable_title": "Adaptable",
                    "adaptable_desc": "S'ajusta a qualsevol tipus d'espai",
                    "no_contract_title": "Sense permanència",
                    "no_contract_desc": "Flexibilitat total, cancel·la quan vulguis",
                    "support_title": "Suport 24/7",
                    "support_desc": "Assistència contínua quan la necessitis"
                },
                "cta_title": "¿Necessites ajuda per triar?",
                "cta_desc": "El nostre equip t'assessorarà per trobar l'alarma perfecta per al teu espai",
                "cta_button": "Veure tots els plans",
                "cta_call": "Trucar al 937 379 317"
            },
            "values_page": {
                "hero_title": "Valors Bambai",
                "hero_subtitle": "Una forma diferent d'entendre la seguretat",
                "intro": "Ens agradaria començar agraint el teu interès en nosaltres.",
                "p1": "Som Bambai, una empresa jove i diferent que neix el 2020 amb l'objectiu clar de reinterpretar el servei d'alarmes i sistemes de seguretat. Naixem per parlar clar, directe, transparent, i sempre estar accessibles per als nostres clients.",
                "p2": "El nostre servei és diferent, oferim una subscripció sense permanència. Volem que segueixis sent client per la qualitat del nostre servei i del nostre equip humà i no perquè tens un contracte signat. Confiem en tu, i treballarem perquè confiïs en nosaltres.",
                "p3": "Molt parlen les empreses tradicionals sobre les meravelles de la seva tecnologia. La nostra és just l'indispensable. No té més colors, ni més funcions, ni més llums de les necessàries. Fa la seva feina i ho fa molt bé. Ens permet oferir-te un servei de qualitat i cuidar de tu i dels teus amb precisió.",
                "p4": "Els nostres valors ens regeixen: senzillesa, adaptabilitat, proximitat, transparència, qualitat humana. Són milers els qui ens coneixen a tot el país, i poden donar fe d'això. Si encara no ens coneixes dona't l'oportunitat, que si alguna cosa no t'encaixa sempre tindràs llibertat en les teves decisions.",
                "values": {
                    "simplicity_title": "Senzillesa",
                    "simplicity_desc": "Sense complicacions innecessàries.",
                    "transparency_title": "Transparència",
                    "transparency_desc": "Parlem clar i directe.",
                    "closeness_title": "Proximitat",
                    "closeness_desc": "Sempre accessibles per a tu.",
                    "quality_title": "Qualitat humana",
                    "quality_desc": "Cuidem de tu i dels teus.",
                    "adaptability_title": "Adaptabilitat",
                    "adaptability_desc": "Ens ajustem a les teves necessitats."
                },
                "p5": "No som gegants, per a nosaltres cada client és imprescindible. Ens esforcem a donar-te el millor servei i estar accessibles per a tu davant qualsevol dubte. I si en algun moment cometem un error, ho resoldrem amb tota la professionalitat que esperes de nosaltres.",
                "ceo_name": "John Correa",
                "ceo_title": "CEO i co-fundador de Bambai."
            },
            "faq_page": {
                "hero_title": "Preguntes freqüents",
                "hero_subtitle": "Resolem els teus dubtes sobre les nostres alarmes i serveis",
                "q1": "¿Puc tenir una alarma si tinc mascota?",
                "a1": "Encara que els detectors de moviment estan preparats per obviar mascotes de menys de 20kg, hi ha vegades en què es produeixen errors i hi ha falses alertes. Et recomanem que ens truquis perquè puguem oferir-te un pack especial per a mascotes que inclou més detectors d'obertura i càmeres. Aquests detectors es col·locaran en tots els accessos (portes i finestres) de casa teva, mentre dins situarem càmeres. D'aquesta manera, si detectem moviment, podràs comprovar si ha estat la teva mascota o si és una intrusió real.",
                "q2": "¿Com es fa la subscripció i es paga?",
                "a2": "És molt fàcil! Has d'entrar al nostre web i fer clic al botó \"subscriure'm\" del pla que has triat. Això et permetrà veure i acceptar els termes i condicions, emplenar el formulari amb les dades de la teva subscripció i realitzar el pagament amb el mètode que prefereixis. Si decideixes seguir amb la teva subscripció, els següents pagaments es realitzaran automàticament cada mes.",
                "q3": "¿Per a quin tipus d'habitatge serveix?",
                "a3": "Per a tots, sempre que hi hagi cobertura de mòbil d'algun operador i llum. Pisos, cases, locals, magatzems, caravanes i altres. Tria el pla que millor t'encaixi o deixa't aconsellar per nosaltres.",
                "q4": "¿Quina és la diferència amb les empreses tradicionals d'alarmes?",
                "a4": "La principal diferència és que la nostra alarma és autoinstal·lable i no intrusiva (no anem al teu habitatge a fer forats). Tot és molt més transparent, fàcil, flexible i clar. Tampoc has de comprar l'alarma. No volem complicar-te amb equips d'alarma que potser d'aquí un temps ja no necessitis, per això et prestem els nostres.",
                "q5": "¿A l'alarma sense permanència, realment no hi ha permanència? ¿Puc contractar per unes setmanes o mesos?",
                "a5_p1": "Repetim alt i clar: sí i sí. El servei d'alarma sense permanència NO TÉ PERMANÈNCIA*. Pots quedar-te amb nosaltres si ho necessites i a més estàs a gust amb el servei. Si alguna cosa d'això no es compleix, no té sentit que estiguis en l'obligació de tenir una alarma durant un temps que no la vols tenir.",
                "a5_p2": "Si la necessites només per unes setmanes o mesos no hi ha problema, pots fer-ho. Per exemple, alguns dels nostres clients utilitzen el pack bàsic (que no necessita Wi-Fi) per protegir durant unes setmanes o mesos habitatges buits que estan en reformes, o que estan a l'espera de lloguer o venda.",
                "a5_note": "*No confondre amb el servei d'alarma indefinida, amb període mínim de servei de 9 mesos.",
                "q6": "¿Què és el suport 24/7?",
                "a6": "Es tracta d'un servei inclòs per defecte en tots els plans, en què el nostre equip de suport està disponible per ajudar-te a aclarir qualsevol dubte amb l'activitat o funcionament de la teva alarma.",
                "q7": "¿Què passa si algú entra a casa meva? ¿Aviseu a la Policia?",
                "a7_p1": "T'assistim perquè puguis fer l'avís a la policia a través de la nostra funcionalitat a l'app, que et permetrà contactar immediatament amb la comissaria de policia més propera.",
                "a7_p2": "El nostre equip de suport està 24/7 disponible per ajudar-te a aclarir qualsevol dubte amb l'activitat o funcionament de la teva alarma. En cas que s'activi un detector, rebràs una notificació automàtica a través de la teva app.",
                "a7_p3": "Si s'activen dos o més detectors, i/o la càmera en menys de 30 minuts, rebràs una notificació a la teva app on podràs confirmar si has estat tu o no. De manera complementària rebràs una trucada automàtica avisant-te de la incidència. Si no has estat tu, podràs accedir al telèfon de la comissaria policial més propera a través de la teva app, i a més, rebràs al teu email l'historial d'activitat de la teva alarma perquè puguis utilitzar-lo en cas de ser necessari.",
                "q8": "¿Per a què serveix l'app?",
                "a8_intro": "L'App de Bambai s'utilitza per controlar la teva alarma i veure tota l'activitat que generen els sensors i les càmeres. Aquestes són algunes de les coses que podràs fer a través de l'app:",
                "a8_li1": "Activar i desactivar l'alarma.",
                "a8_li2": "Veure tots els registres de moviment, imatges i vídeos que registri la càmera.",
                "a8_li3": "Si sou diversos a casa, podràs donar accés al control de la teva alarma a altres usuaris, donant més o menys permisos de control segons necessitis.",
                "a8_li4": "També servirà per confirmar alertes. En cas que s'activi un detector rebràs una notificació automàtica a través de la teva app.",
                "a8_outro": "La podràs descarregar de l'App Store, Google Play Store i Huawei App Gallery.",
                "q9": "¿Com es fa i quant tarda la instal·lació?",
                "a9": "Després de contractar, t'enviarem l'equip d'alarma per missatgeria a casa teva i el rebràs en 48-72 hores laborables (península). La instal·lació és súper senzilla i es fa en 10 min, per això la pots fer tu mateix/a i és gratuïta. Si necessites assistència, el nostre equip de suport estarà disponible per ajudar-te."
            },
            "blog_page": {
                "hero_title": "Blog Bambai",
                "hero_subtitle": "Consells de seguretat, guies i novetats per protegir el que més importa",
                "read_more": "Llegir més",
                "author": "Equip Bambai",
                "posts": {
                    "1": {
                        "title": "Quina alarma posar a casa",
                        "excerpt": "Si vols saber la resposta adequada a quina alarma posar a casa, a Bambai, com a empresa experta en aquest tipus de sistema de seguretat...",
                        "category": "Alarma per a casa"
                    },
                    "2": {
                        "title": "Els millors gossos guardians: descobreix la raça ideal per a tu",
                        "excerpt": "Descobreix quines són les millors races de gossos guardians per protegir la teva llar i la teva família. Una guia completa per triar...",
                        "category": "Seguretat"
                    },
                    "3": {
                        "title": "Com obrir una porta amb la clau a dins: trucs que funcionen",
                        "excerpt": "T'has deixat les claus a dins? No entris en pànic. T'expliquem alguns trucs segurs i efectius per obrir la teva porta...",
                        "category": "Consells"
                    },
                    "4": {
                        "title": "Graus de seguretat: nivells, usos i normatives aplicables",
                        "excerpt": "Entén els diferents graus de seguretat en alarmes i sistemes de protecció. Quin nivell necessita realment el teu habitatge o negoci?",
                        "category": "Normativa"
                    },
                    "5": {
                        "title": "Instal·lació de CCTV: passos, consells i normativa bàsica",
                        "excerpt": "Guia pas a pas per a la instal·lació d'un sistema de CCTV. Coneix la normativa vigent i els millors consells per a una instal·lació...",
                        "category": "Tecnologia"
                    },
                    "6": {
                        "title": "Alarmes GPRS: tot sobre el seu funcionament i avantatges",
                        "excerpt": "Les alarmes GPRS ofereixen una seguretat superior al no dependre de la línia telefònica fixa. Descobreix com funcionen i els seus avantatges...",
                        "category": "Tecnologia"
                    },
                    "7": {
                        "title": "Instal·lació d'una càmera de vigilància: guia completa",
                        "excerpt": "Aprèn a instal·lar la teva pròpia càmera de vigilància amb aquesta guia completa. Consells d'ubicació, configuració i manteniment...",
                        "category": "Guies"
                    },
                    "8": {
                        "title": "Barris més perillosos de Sevilla",
                        "excerpt": "Una anàlisi de les zones amb major índex d'incidències a Sevilla. Informació útil per conèixer la seguretat dels diferents barris...",
                        "category": "Seguretat Local"
                    },
                    "9": {
                        "title": "Barri més perillós de València",
                        "excerpt": "Descobreix quines zones de València requereixen major precaució i quines mesures de seguretat són recomanables si hi vius...",
                        "category": "Seguretat Local"
                    }
                }
            },
            "contact_page": {
                "hero_title": "Contacte",
                "hero_subtitle": "¿Parlem? Estem aquí per ajudar-te amb el que necessitis.",
                "email_title": "Email",
                "phone_title": "Telèfon",
                "whatsapp_title": "WhatsApp"
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
                "contact": "Contact",
                "calculate_quote": "Calculate your quote",
                "language": "Language"
            },
            "hero": {
                "badge": "No-contract Alarm",
                "title": "And if you want, subscribe to your alarm",
                "title_highlight": "contract-free",
                "subtitle": "Your alarm as you've always wanted it: simple, flexible, and contract-free.",
                "cta_prices": "See prices",
                "cta_call": "Call us for free",
                "rating_text": "More than 1,000 satisfied customers"
            },
            "features": {
                "title": "The hard part is making it easy",
                "subtitle": "We reinvent security to make it easier, more transparent, and accessible to everyone.",
                "no_permanence_title": "No-contract Alarms",
                "no_permanence_desc": "You are free. Cancel whenever you want without penalties or explanations.",
                "police_title": "Police Notification Assistance",
                "police_desc": "Total protection with immediate notification to security forces in case of intrusion.",
                "flexibility_title": "Real Flexibility",
                "flexibility_desc": "Adapt your security system to what you really need, without paying for what you don't use.",
                "simplicity_title": "Simplicity",
                "simplicity_desc": "Advanced technology made easy. No complications, no construction work, and no cables.",
                "cybersecurity_title": "Cybersecurity Included",
                "cybersecurity_desc": "We protect not only your physical space but also your digital network against attacks.",
                "connected_title": "Always Connected",
                "connected_desc": "Anti-inhibition system with dual communication channels for maximum security."
            },
            "testimonials": {
                "title": "People like you like us",
                "subtitle": "Based on over 500 verified reviews",
                "verified_client": "Verified Client",
                "review_1": "Very good service, very flexible, no hidden costs. Highly recommended",
                "review_2": "If this service were better known, it would undoubtedly become one of the big ones, competing with the two most well-known options in Spain regarding security systems and alarms. Professionalism, system quality, and good service. I was very pleasantly surprised.",
                "review_3": "I hired it for a month for a renovation, and I kept it indefinitely afterwards. Much better than any of the usual companies, and everything much more transparent."
            },
            "footer": {
                "description": "The smart, contract-free, and easy-to-use alarm that protects what matters most to you.",
                "product": "Product",
                "company": "Company",
                "contact": "Contact",
                "phone": "Phone",
                "email": "Email",
                "address": "Carrer de Pascual i Vila, Les Corts\n08028 Barcelona",
                "rights": "Bambai. All rights reserved.",
                "legal": "Legal Notice",
                "privacy": "Privacy",
                "cookies": "Cookies"
            },
            "prices_page": {
                "title": "Fair Prices",
                "subtitle": "Choose the plan that best suits you. No contract, no fine print.",
                "toggle_no_permanence": "No-contract Alarm",
                "toggle_indefinite": "Indefinite Alarm",
                "popular_badge": "Most Popular",
                "save_badge": "Save €20/month!",
                "cta_contract": "Hire Now",
                "vat_included": "VAT included",

                "custom_config": "Do you need a custom configuration?",
                "call_us": "Call us at 937 379 317",
                "plans": {
                    "basic_name": "Basic",
                    "standard_1_name": "Standard & 1 Camera",
                    "standard_2_name": "Standard & 2 Cameras",
                    "features": {
                        "panel": "1 Central Panel",
                        "motion_1": "1 Motion Detector",
                        "motion_2": "2 Motion Detectors",
                        "opening_1": "1 Opening Detector",
                        "remote": "1 Remote Control",
                        "stickers": "Deterrent Signs",
                        "app": "Unlimited Mobile App",
                        "cra": "24h CRA Connection",
                        "police": "Police Notification",
                        "camera_1": "1 Wifi Camera with Streaming",
                        "camera_2": "2 Wifi Cameras with Streaming",
                        "min_period": "Minimum period 9 months"
                    },
                    "badge_save": "Save €20/month!"
                }
            },
            "home_alarms": {
                "hero_title": "Security Alarms for Home and Housing",
                "hero_subtitle_prefix": "Plans from",
                "hero_desc": "At Bambai we believe that security doesn't have to be expensive or hide surprises. Our home alarms are designed to be accessible, clear, and without fine print.",
                "pricing_title": "Home Alarm Plans from €19.99/month",
                "pricing_desc": "At Bambai we are clear that security shouldn't cost a fortune or force you to sign endless contracts. You choose the security level that best fits you and your home, paying only for what you really need.",
                "plan_1_subtitle": "Basic alarm for a safe home",
                "plan_1_desc": "Ideal for small apartments, second homes, or for those looking for a practical and economical home alarm.",
                "plan_2_subtitle": "Alarm with wifi camera and live streaming",
                "plan_2_desc": "The most chosen plan by families who want to check from their mobile what is happening at home, even when they are away.",
                "plan_3_subtitle": "Advanced alarm with maximum security",
                "plan_3_desc": "The best choice for large houses, chalets, or any home that needs more exhaustive control.",
                "plans": {
                    "plan_1_name": "Plan 1: Basic",
                    "plan_2_name": "Plan 2: Standard",
                    "plan_3_name": "Plan 3: Advanced",
                    "features": {
                        "panel": "1 Central Panel",
                        "motion_1": "1 Motion Detector",
                        "motion_2": "2 Motion Detectors",
                        "opening_1": "1 Opening Detector",
                        "opening_2": "2 Opening Detectors",
                        "key_1": "1 Smart Key",
                        "key_2": "2 Smart Keys",
                        "stickers": "3 Deterrent Stickers",
                        "camera_1": "1 Wifi Camera with Live Streaming",
                        "camera_2": "2 Wifi Cameras with Streaming"
                    }
                },
                "all_included": "All our plans include free installation, maintenance, 24/7 support, and immediate assistance to notify the police in case of an incident.",
                "transparency_title": "Fair and Transparent Prices",
                "transparency_desc": "The idea is simple: protect your home with prices that anyone can afford and with a complete service that already includes everything.",
                "transparency_points": {
                    "1_title": "All included in your home alarm",
                    "1_desc": "Free installation, maintenance, 24/7 support, and immediate assistance to notify the police in case of an incident.",
                    "2_title": "Real savings compared to other companies",
                    "2_desc": "From €19.99/month you have total coverage without installation costs or additional equipment.",
                    "3_title": "No hidden costs or fine print",
                    "3_desc": "What you see is what you pay. No surprises, no extra charges, no complications.",
                    "4_title": "The peace of mind of paying what's fair",
                    "4_desc": "Protect your home with prices that anyone can afford and with a complete service that already includes everything."
                },
                "features_title": "Features of our Security Alarms",
                "features_desc": "At Bambai we believe that home alarms have to be easy, clear, and accessible. The system is designed so you have peace of mind from the first minute, without invasive installations or technical complications.",
                "features_list": {
                    "1_title": "24/7 Assistance and immediate police notification",
                    "1_desc": "Support works 24 hours a day, 365 days a year. If an intrusion is detected, you receive an immediate notification in the app and can connect with the nearest police station so that the police notification is fast and direct.",
                    "2_title": "Free self-installation in just 10 minutes",
                    "2_desc": "In 48 to 72 working hours you receive the equipment at your home and assemble it yourself in just 10 minutes. No cables, no construction work, and no holes in the walls. With remote assistance if you need it. All included in the price, no additional costs.",
                    "3_title": "Complete equipment adapted to your home",
                    "3_desc": "Central panel as the brain of the system, motion and opening detectors to cover doors and windows, smart keys to activate and deactivate the alarm comfortably, cameras with live streaming included in the higher plans, and deterrent stickers that add extra protection.",
                    "4_title": "Total control from the app",
                    "4_desc": "The Bambai app turns your mobile into your alarm remote. Activate or deactivate the alarm in seconds, review detected movements, photos and videos, share access with other people deciding what permissions each one has, and confirm alerts immediately notifying the police from the same app."
                },
                "cta_title": "Ready to protect your home?",
                "cta_desc": "Hire your alarm today and start enjoying the peace of mind you deserve",
                "cta_button": "See all plans",
                "cta_call": "Call 937 379 317"
            },
            "motion_sensors": {
                "hero_title": "Motion Sensors and Detectors",
                "hero_subtitle": "Effective protection, easy to install, and with immediate mobile notification",
                "hero_desc": "Alarms with motion detectors are the heart of any modern security system. At Bambai our detectors are designed to react in seconds and notify you instantly, without waiting, without complications, and of course, without contracts.",
                "housing_title": "Motion detectors according to housing type",
                "housing_desc": "Each type of housing needs a different distribution and technology. It's not about filling the house with sensors, but placing them where they really serve and maximizing their range.",
                "housing_types": {
                    "1_title": "In apartments or flats",
                    "1_desc": "In apartments, where spaces are usually smaller, a few well-placed motion sensors in hallways, entrances, and passageways are enough. Infrared motion detectors (PIR) are the most common and work great indoors. They detect body temperature changes and are discreet, effective, and easy to install.",
                    "2_title": "In houses with gardens or multiple floors",
                    "2_desc": "In larger homes, the ideal is to combine several types of motion detectors. Outdoor ones, resistant to rain and dust, are perfect for monitoring entrances, terraces, and back areas. Inside the house, dual detectors (combining infrared and microwave) cover multiple floors and reduce false alarms.",
                    "3_title": "In premises, offices, or warehouses",
                    "3_desc": "These spaces are usually larger and less traveled, so it is advisable to use microwave motion detectors. They usually have more range and higher sensitivity. If you combine them with cameras, you can verify any alert in real time without moving from the spot.",
                    "4_title": "In caravans or second homes",
                    "4_desc": "If you only need to protect a space for a limited time, wireless motion sensors are the best option. They are installed in minutes, require no construction or professional installation, and you can cancel whenever you want if you choose a no-contract alarm like ours."
                },
                "placement_title": "Where to place motion sensors to really protect",
                "placement_desc": "The location of motion detectors is as important as their quality. A well-placed sensor can cover an entire room; a poorly placed one can leave areas unguarded.",
                "placement_tips": {
                    "1": "Passageways: hallways, entrances, or stairs are key points. Placing motion sensors there guarantees that any movement is detected.",
                    "2": "Proper height: ideally install them between 2 and 2.5 meters from the floor, oriented towards the area you want to cover.",
                    "3": "Avoid direct heat: radiators, fireplaces, or intense sunlight can alter detection.",
                    "4": "Doors and windows: combine motion detectors with opening sensors to reinforce entry points.",
                    "5": "Protected exterior: if you install them outside, look for covered areas or under eaves to protect them from rain and sun."
                },
                "pets_title": "If you have pets, this interests you",
                "pets_desc_1": "Pets and motion sensors have always had a complicated relationship, but that is a thing of the past. Current motion detectors are capable of differentiating between a person and a small animal (up to about 20 kilos). If your dog or cat moves around the house, the system ignores it.",
                "pets_desc_2": "At Bambai, we also have special packs for homes with pets. We combine opening detectors on doors and windows with indoor cameras, so that if an alert goes off, you can check in seconds if it was your pet or something more serious.",
                "selection_title": "Tips for choosing the right motion detectors",
                "selection_desc": "Before deciding, there are some details worth keeping in mind",
                "selection_tips": {
                    "1_title": "Think about your routines",
                    "1_desc": "If you spend many hours away, prioritize detectors with immediate notification to the app to react quickly.",
                    "2_title": "Assess the environment",
                    "2_desc": "In rooms with a lot of light or temperature variations, microwave detectors work better.",
                    "3_title": "Combine technologies",
                    "3_desc": "A system that mixes PIR sensors with cameras will give you more complete protection.",
                    "4_title": "Look for flexibility",
                    "4_desc": "If you rent or plan to move, choose motion detectors that you can move or expand without depending on technicians."
                },
                "camera_title": "Motion sensors with camera",
                "camera_desc": "Motion sensors with cameras are the natural evolution of home security systems. They not only detect what is happening, but also show it to you instantly.",
                "camera_box_title": "How motion sensors with cameras work",
                "camera_box_desc": "A motion sensor with a camera detects any change in the space it monitors and, as soon as it perceives it, activates the camera and sends you a notification to your mobile. At that moment you can see live what has happened and decide how to act. The system is so fast that barely a few seconds pass from when the movement is detected until you receive the warning.",
                "advantages_title": "Advantages of motion detectors with cameras",
                "advantages_list": {
                    "1_title": "Immediate visual confirmation",
                    "1_desc": "Traditional motion detectors warn when something moves, but they don't show you what happened. With motion sensors with cameras you can see it in real time from your mobile and decide if it is a real alarm or an innocent movement.",
                    "2_title": "Fewer false alarms",
                    "2_desc": "Visual verification allows avoiding unnecessary scares. If you have pets or there are drafts that could activate a detector, the camera helps you check it instantly.",
                    "3_title": "Total control from your mobile",
                    "3_desc": "Through the Bambai app, you can access live images or review recorded clips every time a sensor is activated. Wherever you are, you will know what is happening at home.",
                    "4_title": "Evidence in case of intrusion",
                    "4_desc": "If someone tries to enter, the cameras record the sequence of the event. This way you will have visual evidence that can be useful if you need to justify the incident.",
                    "5_title": "Integration with the entire system",
                    "5_desc": "At Bambai, motion sensors with cameras communicate with the rest of the devices: motion detectors, opening sensors, and the central panel. The whole system works coordinated.",
                    "6_title": "Perfect for homes with pets or second homes",
                    "6_desc": "If you have animals, you will know immediately if it was your dog that passed in front of the sensor or if there is really something else. They are also a great option for second homes or premises that you do not visit daily."
                },
                "when_title": "When to install motion sensors with camera",
                "when_desc": "Motion sensors with cameras are not essential for all homes, but highly recommended in many cases. They suit you especially if:",
                "when_list": {
                    "1": "You spend a large part of the day away and want to visually check that everything is fine.",
                    "2": "You have a large house, with several floors or entrances.",
                    "3": "You want to minimize false alarms due to pets or environmental movements.",
                    "4": "You are looking for a flexible and modern solution, without depending on long contracts or complicated installations."
                },
                "how_title": "How the Bambai system works",
                "how_desc": "The system is based on a very simple idea: a central panel connected with different sensors and motion detectors placed in strategic points of the home.",
                "how_steps": {
                    "title": "When a movement is detected",
                    "1": "The panel checks if the alarm is activated.",
                    "2": "If it is, it sends you an immediate notification to the app.",
                    "3": "If cameras are installed, you can see live what is happening.",
                    "4": "If you confirm it's not you, the system guides you to contact the police."
                },
                "install_title": "Simple installation",
                "install_desc": "One of the advantages of Bambai is that everything is installed at home without complications. You don't need technicians or tools.",
                "install_steps": {
                    "1": "Place the central panel in an area with good mobile coverage.",
                    "2": "Place motion sensors and detectors in entrances, hallways, or common areas.",
                    "3": "Connect it to the app and check that everything works correctly."
                },
                "different_title": "What makes Bambai different",
                "different_list": {
                    "1_title": "Installation without construction",
                    "1_desc": "Everything is assembled in minutes and without tools.",
                    "2_title": "Assisted police notification",
                    "2_desc": "If something happens, we help you contact the nearest police station.",
                    "3_title": "Real 24/7 support",
                    "3_desc": "Our team is always available, no bots or eternal waits.",
                    "4_title": "No mandatory purchase",
                    "4_desc": "You don't have to pay for the alarm, you use it as long as you need it.",
                    "5_title": "Total flexibility",
                    "5_desc": "You can change plans or cancel whenever you want."
                },
                "cta_title": "Your home alarm as you've always wanted it",
                "cta_desc": "Simple, affordable, and contract-free"
            },
            "alarms_application": {
                "hero_title": "Alarms by Application",
                "hero_subtitle": "Your alarm as you've always wanted it",
                "hero_desc": "Simple, affordable, and contract-free. Bambai offers you honest security with values.",
                "cta_prices": "See prices",
                "types_title": "Types of alarms by application",
                "types_desc": "Find the perfect security solution for your specific needs",
                "types": {
                    "squatters_title": "Anti-squatter alarms",
                    "squatters_desc": "Specific protection against illegal occupations. Early detection system that warns you of any unauthorized access attempt to your property.",
                    "wired_title": "Wired alarms without monthly fees",
                    "wired_desc": "Security systems with wired connection, without the need to pay monthly fees. Professional installation and total control of your system.",
                    "inhibitors_title": "Anti-inhibitor alarms",
                    "inhibitors_desc": "Advanced technology that detects and neutralizes signal inhibition attempts. Guaranteed protection even against sophisticated attacks.",
                    "smart_title": "Smart alarms",
                    "smart_desc": "Systems connected with artificial intelligence that learn from your routines. Total control from your smartphone with real-time notifications.",
                    "police_title": "Alarms connected to the police",
                    "police_desc": "Direct connection with the authorities for a quick response. Verified system that guarantees police intervention when you need it most."
                },
                "more_info": "More information",
                "features": {
                    "protection_title": "Complete protection",
                    "protection_desc": "Systems designed for every specific security need",
                    "technology_title": "Advanced technology",
                    "technology_desc": "Smart solutions with the latest innovations in security",
                    "support_title": "24/7 Support",
                    "support_desc": "Continuous assistance and connection with authorities when you need it"
                },
                "cta_title": "Don't know which alarm to choose?",
                "cta_desc": "Our team will help you find the perfect solution for your home or business",
                "cta_button": "See all plans",
                "cta_call": "Call 937 379 317"
            },
            "alarms_space": {
                "hero_title": "Alarms by Space",
                "hero_subtitle": "The perfect solution for every type of space",
                "hero_desc": "Your alarm as you've always wanted it: simple, affordable, and contract-free. Bambai offers you honest security with values.",
                "cta_prices": "See prices",
                "types_title": "Types of alarms by space",
                "types_desc": "Each space has unique security needs. Find the perfect alarm for your home, business, or property.",
                "types": {
                    "business_title": "Alarms for business, commercial premises, and companies",
                    "business_desc": "Professional protection for your business. Systems adapted to commercial premises with access control, surveillance cameras, and direct connection with security.",
                    "flat_title": "Apartment alarms",
                    "flat_desc": "Complete security for your apartment. Simple installation without construction, motion and opening detectors, control from your mobile.",
                    "storage_title": "Storage room alarms",
                    "storage_desc": "Protect your stored belongings. Wireless system easy to install, instant alerts for any unauthorized access.",
                    "door_title": "Security systems for entrance doors",
                    "door_desc": "Reinforce the security of your main door. Opening detectors, cameras with night vision, and real-time notifications.",
                    "apartment_title": "Security alarms for apartments",
                    "apartment_desc": "Compact solutions for apartments. Discreet and effective systems that adapt to small spaces without losing functionality.",
                    "second_home_title": "Second home alarms",
                    "second_home_desc": "Monitor your second home wherever you are. Total remote control, immediate alerts, and visual verification from your smartphone.",
                    "office_title": "Office alarms",
                    "office_desc": "Protection for your workspace. Systems that protect equipment, documents, and guarantee the safety of your employees.",
                    "shop_title": "Shop alarms",
                    "shop_desc": "Specialized security for shops. Theft prevention, inventory control, and protection during and outside business hours.",
                    "industrial_title": "Alarms for industrial warehouses",
                    "industrial_desc": "Protection of large industrial spaces. Systems with wide range, resistant, and adapted to demanding environments."
                },
                "more_info": "More information",
                "benefits_title": "Advantages of our alarms",
                "benefits_desc": "Regardless of the space, all our alarms share these characteristics",
                "benefits": {
                    "easy_title": "Easy installation",
                    "easy_desc": "No construction or complications, ready in minutes",
                    "adaptable_title": "Adaptable",
                    "adaptable_desc": "Adjusts to any type of space",
                    "no_contract_title": "No contract",
                    "no_contract_desc": "Total flexibility, cancel whenever you want",
                    "support_title": "24/7 Support",
                    "support_desc": "Continuous assistance when you need it"
                },
                "cta_title": "Need help choosing?",
                "cta_desc": "Our team will advise you to find the perfect alarm for your space",
                "cta_button": "See all plans",
                "cta_call": "Call 937 379 317"
            },
            "values_page": {
                "hero_title": "Bambai Values",
                "hero_subtitle": "A different way of understanding security",
                "intro": "We would like to start by thanking you for your interest in us.",
                "p1": "We are Bambai, a young and different company born in 2020 with the clear objective of reinterpreting the alarm and security systems service. We were born to speak clearly, directly, transparently, and always be accessible to our customers.",
                "p2": "Our service is different, we offer a subscription without permanence. We want you to continue being a customer because of the quality of our service and our human team and not because you have a signed contract. We trust you, and we will work so that you trust us.",
                "p3": "Traditional companies talk a lot about the wonders of their technology. Ours is just what is essential. It doesn't have more colors, more functions, or more lights than necessary. It does its job and does it very well. It allows us to offer you a quality service and take care of you and yours with precision.",
                "p4": "Our values govern us: simplicity, adaptability, closeness, transparency, human quality. There are thousands who know us throughout the country, and can attest to this. If you don't know us yet, give yourself the opportunity, because if something doesn't fit you will always have freedom in your decisions.",
                "values": {
                    "simplicity_title": "Simplicity",
                    "simplicity_desc": "Without unnecessary complications.",
                    "transparency_title": "Transparency",
                    "transparency_desc": "We speak clearly and directly.",
                    "closeness_title": "Closeness",
                    "closeness_desc": "Always accessible to you.",
                    "quality_title": "Human quality",
                    "quality_desc": "We take care of you and yours.",
                    "adaptability_title": "Adaptability",
                    "adaptability_desc": "We adjust to your needs."
                },
                "p5": "We are not giants, for us each customer is essential. We strive to give you the best service and be accessible to you for any questions. And if at any time we make a mistake, we will resolve it with all the professionalism you expect from us.",
                "ceo_name": "John Correa",
                "ceo_title": "CEO and co-founder of Bambai."
            },
            "faq_page": {
                "hero_title": "Frequently Asked Questions",
                "hero_subtitle": "We answer your questions about our alarms and services",
                "q1": "Can I have an alarm if I have a pet?",
                "a1": "Although motion detectors are prepared to ignore pets under 20kg, there are times when errors occur and there are false alerts. We recommend that you call us so we can offer you a special pet pack that includes more opening detectors and cameras. These detectors will be placed at all entrances (doors and windows) of your house, while inside we will place cameras. This way, if we detect movement, you can check if it was your pet or if it is a real intrusion.",
                "q2": "How is the subscription made and paid?",
                "a2": "It's very easy! You must enter our website and click on the \"subscribe\" button of the plan you have chosen. This will allow you to view and accept the terms and conditions, fill out the form with your subscription data and make the payment with the method you prefer. If you decide to continue with your subscription, subsequent payments will be made automatically each month.",
                "q3": "What type of housing does it work for?",
                "a3": "For all, as long as there is mobile coverage from some operator and electricity. Apartments, houses, premises, warehouses, caravans and others. Choose the plan that best suits you or let us advise you.",
                "q4": "What is the difference with traditional alarm companies?",
                "a4": "The main difference is that our alarm is self-installable and non-intrusive (we don't go to your home to make holes). Everything is much more transparent, easy, flexible and clear. You also don't have to buy the alarm. We don't want to complicate you with alarm equipment that you may not need in a while, that's why we lend you ours.",
                "q5": "In the alarm without permanence, is there really no permanence? Can I contract for a few weeks or months?",
                "a5_p1": "We repeat loud and clear: yes and yes. The alarm service without permanence HAS NO PERMANENCE*. You can stay with us if you need it and you are also comfortable with the service. If any of this is not met, it doesn't make sense for you to be obliged to have an alarm for a time you don't want to have it.",
                "a5_p2": "If you need it only for a few weeks or months there is no problem, you can do it. For example, some of our customers use the basic pack (which doesn't need Wi-Fi) to protect for a few weeks or months empty homes that are being renovated, or that are waiting for rent or sale.",
                "a5_note": "*Not to be confused with the indefinite alarm service, with a minimum service period of 9 months.",
                "q6": "What is 24/7 support?",
                "a6": "It is a service included by default in all plans, in which our support team is available to help you clarify any questions about the activity or operation of your alarm.",
                "q7": "What happens if someone enters my house? Do you notify the Police?",
                "a7_p1": "We assist you so you can notify the police through our functionality in the app, which will allow you to immediately contact the nearest police station.",
                "a7_p2": "Our support team is available 24/7 to help you clarify any questions about the activity or operation of your alarm. If a detector is activated, you will receive an automatic notification through your app.",
                "a7_p3": "If two or more detectors are activated, and/or the camera in less than 30 minutes, you will receive a notification in your app where you can confirm if it was you or not. In addition, you will receive an automatic call notifying you of the incident. If it wasn't you, you can access the phone of the nearest police station through your app, and in addition, you will receive in your email the activity history of your alarm so you can use it if necessary.",
                "q8": "What is the app for?",
                "a8_intro": "The Bambai App is used to control your alarm and see all the activity generated by the sensors and cameras. These are some of the things you can do through the app:",
                "a8_li1": "Activate and deactivate the alarm.",
                "a8_li2": "See all movement records, images and videos recorded by the camera.",
                "a8_li3": "If there are several of you at home, you can give access to control your alarm to other users, giving more or less control permissions as needed.",
                "a8_li4": "It will also serve to confirm alerts. If a detector is activated you will receive an automatic notification through your app.",
                "a8_outro": "You can download it from the App Store, Google Play Store and Huawei App Gallery.",
                "q9": "How is the installation done and how long does it take?",
                "a9": "After contracting, we will send you the alarm equipment by courier to your home and you will receive it in 48-72 working hours (peninsula). The installation is super simple and is done in 10 min, so you can do it yourself and it is free. If you need assistance, our support team will be available to help you."
            },
            "blog_page": {
                "hero_title": "Bambai Blog",
                "hero_subtitle": "Security tips, guides and news to protect what matters most",
                "read_more": "Read more",
                "author": "Bambai Team",
                "posts": {
                    "1": {
                        "title": "What alarm to install at home",
                        "excerpt": "If you want to know the right answer to what alarm to install at home, at Bambai, as an expert company in this type of security system...",
                        "category": "Home Alarm"
                    },
                    "2": {
                        "title": "The best guard dogs: discover the ideal breed for you",
                        "excerpt": "Discover which are the best guard dog breeds to protect your home and family. A complete guide to choosing...",
                        "category": "Security"
                    },
                    "3": {
                        "title": "How to open a door with the key inside: tricks that work",
                        "excerpt": "Did you leave your keys inside? Don't panic. We explain some safe and effective tricks to open your door...",
                        "category": "Tips"
                    },
                    "4": {
                        "title": "Security grades: levels, uses and applicable regulations",
                        "excerpt": "Understand the different security grades in alarms and protection systems. What level does your home or business really need?",
                        "category": "Regulations"
                    },
                    "5": {
                        "title": "CCTV installation: steps, tips and basic regulations",
                        "excerpt": "Step-by-step guide for installing a CCTV system. Know the current regulations and the best tips for installation...",
                        "category": "Technology"
                    },
                    "6": {
                        "title": "GPRS alarms: everything about their operation and advantages",
                        "excerpt": "GPRS alarms offer superior security by not depending on the landline. Discover how they work and their advantages...",
                        "category": "Technology"
                    },
                    "7": {
                        "title": "Installing a surveillance camera: complete guide",
                        "excerpt": "Learn to install your own surveillance camera with this complete guide. Location, configuration and maintenance tips...",
                        "category": "Guides"
                    },
                    "8": {
                        "title": "Most dangerous neighborhoods in Seville",
                        "excerpt": "An analysis of the areas with the highest incident rate in Seville. Useful information to know the safety of different neighborhoods...",
                        "category": "Local Security"
                    },
                    "9": {
                        "title": "Most dangerous neighborhood in Valencia",
                        "excerpt": "Discover which areas of Valencia require greater caution and what security measures are recommended if you live there...",
                        "category": "Local Security"
                    }
                }
            },
            "contact_page": {
                "hero_title": "Contact",
                "hero_subtitle": "Shall we talk? We are here to help you with whatever you need.",
                "email_title": "Email",
                "phone_title": "Phone",
                "whatsapp_title": "WhatsApp"
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
