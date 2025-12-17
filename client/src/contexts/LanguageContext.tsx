import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'es'

type Translations = {
  // Header/Nav
  'nav.projects': string
  'nav.techStack': string
  'nav.contact': string
  'nav.about': string
  'nav.cv': string
  
  // Hero
  'hero.title': string
  'hero.subtitle': string
  'hero.cta.projects': string
  'hero.cta.stack': string
  
  // About
  'about.title': string
  'about.subtitle': string
  'about.profile.title': string
  'about.profile.description': string
  'about.work.title': string
  'about.work.vetty.role': string
  'about.work.vetty.period': string
  'about.work.vetty.company': string
  'about.work.vetty.point1': string
  'about.work.vetty.point2': string
  'about.work.vetty.point3': string
  'about.work.vetty.point4': string
  'about.work.accenture.role': string
  'about.work.accenture.period': string
  'about.work.accenture.company': string
  'about.work.accenture.point1': string
  'about.work.accenture.point2': string
  'about.work.accenture.point3': string
  'about.work.accenture.point4': string
  'about.education.title': string
  'about.education.architecture.degree': string
  'about.education.architecture.school': string
  'about.education.architecture.period': string
  'about.education.music.degree': string
  'about.education.music.school': string
  'about.education.music.period': string
  'about.education.electronics.degree': string
  'about.education.electronics.school': string
  'about.education.electronics.period': string
  'about.education.epic.degree': string
  'about.education.epic.school': string
  'about.education.epic.period': string
  'about.interests.title': string
  'about.interests.reading.title': string
  'about.interests.reading.description': string
  'about.interests.writing.title': string
  'about.interests.writing.description': string
  'about.interests.gaming.title': string
  'about.interests.gaming.description': string
  'about.interests.music.title': string
  'about.interests.music.description': string
  'about.interests.roleplay.title': string
  'about.interests.roleplay.description': string
  'about.interests.cooking.title': string
  'about.interests.cooking.description': string
  'about.interests.exploreCreative': string
  
  // Services
  'services.title': string
  'services.subtitle': string
  'services.whatIDo': string
  'services.whatIDontDo': string
  'services.webApps': string
  'services.webAppsDesc': string
  'services.dashboards': string
  'services.dashboardsDesc': string
  'services.mobileApps': string
  'services.mobileAppsDesc': string
  'services.saas': string
  'services.saasDesc': string
  'services.portfolios': string
  'services.portfoliosDesc': string
  'services.backend': string
  'services.backendDesc': string
  'services.andMore': string
  'services.andMoreDesc': string
  'services.uxui': string
  'services.uxuiDesc': string
  'services.branding': string
  'services.brandingDesc': string
  'services.illustration': string
  'services.illustrationDesc': string
  'services.animation': string
  'services.animationDesc': string
  
  // Tech Stack
  'stack.title': string
  'stack.learningNow': string
  'stack.backend': string
  'stack.authSecurity': string
  'stack.tools': string
  'stack.practices': string
  'stack.languages': string
  
  // Contact
  'contact.title': string
  'contact.description': string
  'contact.form.name': string
  'contact.form.email': string
  'contact.form.message': string
  'contact.form.send': string
  
  // Contact Form
  'contact.quickContact': string
  'contact.orFillForm': string
  'contact.advancedQuote': string
  'contact.stepper.back': string
  'contact.stepper.next': string
  'contact.step1.title': string
  'contact.step1.nameLabel': string
  'contact.step1.namePlaceholder': string
  'contact.step1.emailLabel': string
  'contact.step1.emailPlaceholder': string
  'contact.step2.title': string
  'contact.step2.selectOption': string
  'contact.step2.website': string
  'contact.step2.webApp': string
  'contact.step2.mobileApp': string
  'contact.step2.apiBackend': string
  'contact.step2.ecommerce': string
  'contact.step2.other': string
  'contact.step3.title': string
  'contact.step3.webDesktop': string
  'contact.step3.webMobile': string
  'contact.step3.ios': string
  'contact.step3.android': string
  'contact.step3.multiplatform': string
  'contact.step4.title': string
  'contact.step4.selectOption': string
  'contact.step4.yesComplete': string
  'contact.step4.yesPartial': string
  'contact.step4.noNeedDesign': string
  'contact.step4.noUseTemplate': string
  'contact.step5.title': string
  'contact.step5.placeholder': string
  'contact.step6.title': string
  'contact.step6.selectOption': string
  'contact.step6.no': string
  'contact.step6.basic': string
  'contact.step6.social': string
  'contact.step6.advanced': string
  'contact.step7.title': string
  'contact.step7.selectOption': string
  'contact.step7.no': string
  'contact.step7.occasional': string
  'contact.step7.monthly': string
  'contact.step7.full': string
  'contact.step8.title': string
  'contact.step8.placeholder': string
  'contact.step9.title': string
  'contact.step9.subtitle': string
  'contact.step9.placeholder': string
  'contact.sent.title': string
  'contact.sent.message': string
  'contact.sending': string
  
  // Legacy Budget Form (keep for compatibility)
  'contact.budget.intro': string
  'contact.budget.selectOption': string
  'contact.budget.projectTypes.webApp': string
  'contact.budget.projectTypes.api': string
  'contact.budget.projectTypes.migration': string
  'contact.budget.projectTypes.consulting': string
  'contact.budget.projectTypes.maintenance': string
  'contact.budget.projectTypes.other': string
  'contact.budget.budgetRanges.under1k': string
  'contact.budget.budgetRanges.range1k3k': string
  'contact.budget.budgetRanges.range3k5k': string
  'contact.budget.budgetRanges.range5k10k': string
  'contact.budget.budgetRanges.over10k': string
  
  // Footer
  'footer.builtWith': string
  'footer.copyright': string
  'footer.creativeRights': string
}

const translations: Record<Language, Translations> = {
  en: {
    'nav.projects': 'Projects',
    'nav.techStack': 'Tech Stack',
    'nav.contact': 'Contact',
    'nav.about': 'About',
    'nav.cv': 'Download my Resume',
    
    'hero.title': 'Sol Serki',
    'hero.subtitle': 'Over six years building reliable web backends (.NET, Java/Spring). Now expanding into Node.js, React, Tailwind, and UI animations.',
    'hero.cta.projects': 'View Projects',
    'hero.cta.stack': 'My Tech Stack',
    
    'about.title': 'About Me',
    'about.subtitle': 'Sol Serki',
    'about.profile.title': 'Profile',
    'about.profile.description': 'Back-End Developer with 6+ years of experience building scalable web applications, specializing in .NET and Java Spring Boot. Proven track record delivering high-quality, maintainable code with focus on best practices including unit testing, scalability, and reliability. Experienced in leading development teams and facilitating international collaboration.',
    'about.work.title': 'Work Experience',
    'about.work.vetty.role': 'Full-Stack Lead Developer',
    'about.work.vetty.period': 'Nov 2023 - Present',
    'about.work.vetty.company': 'Vetty Startup - Rosario',
    'about.work.vetty.point1': 'Lead end-to-end development of a comprehensive veterinary clinic management application using Java with Spring Boot.',
    'about.work.vetty.point2': 'Designed scalable architecture to support business growth and ensure long-term maintainability.',
    'about.work.vetty.point3': 'Implemented key functionalities focused on delivering a seamless user experience.',
    'about.work.vetty.point4': 'Coordinated with stakeholders to align technical solutions with specific client requirements.',
    'about.work.accenture.role': 'Back-End Developer',
    'about.work.accenture.period': 'Jan 2018 - July 2023',
    'about.work.accenture.company': 'Accenture - Rosario',
    'about.work.accenture.point1': 'Developed robust web components and REST APIs for system integration, achieving high client satisfaction rates.',
    'about.work.accenture.point2': 'Optimized design patterns, reducing unit test execution time by 85% and increasing development cycle efficiency.',
    'about.work.accenture.point3': 'Led technical communication as English referent, facilitating coordination between international teams and clients.',
    'about.work.accenture.point4': 'Identified and resolved bugs and design flaws, improving application stability and maintainability.',
    'about.education.title': 'Education',
    'about.education.architecture.degree': 'Honours Bachelor Degree in Architecture',
    'about.education.architecture.school': 'Buenos Aires University',
    'about.education.architecture.period': '2005 - 2014',
    'about.education.music.degree': 'Music Teacher - Singing Specialization',
    'about.education.music.school': 'School of Popular Music',
    'about.education.music.period': '2011 - 2014',
    'about.education.electronics.degree': 'Certificate in Electronics and Robotics',
    'about.education.electronics.school': 'School in Technical Education',
    'about.education.electronics.period': '2001 - 2004',
    'about.education.epic.degree': 'Employment and Training for Immigrants',
    'about.education.epic.school': 'The EPIC Programme - BITC',
    'about.education.epic.period': '2018',
    'about.interests.title': 'Interests & Hobbies',
    'about.interests.reading.title': 'Reading',
    'about.interests.reading.description': 'I love reading from fantasy novels to books about writing.',
    'about.interests.writing.title': 'Writing',
    'about.interests.writing.description': 'I write novels and poetry, and I\'m planning to continue developing my skills.',
    'about.interests.gaming.title': 'Gaming',
    'about.interests.gaming.description': 'I enjoy playing games on PC and Magic the Gathering with my friends.',
    'about.interests.music.title': 'Music',
    'about.interests.music.description': 'I adore singing and I\'m currently taking lessons.',
    'about.interests.roleplay.title': 'Role-Play',
    'about.interests.roleplay.description': 'I\'ve been playing role-play games for over 15 years and have DMed several campaigns.',
    'about.interests.cooking.title': 'Cooking',
    'about.interests.cooking.description': 'Great cook, nothing beats preparing your own delicious meal!',
    'about.interests.exploreCreative': 'Explore Creative Section',
    
    'services.title': 'Services',
    'services.subtitle': 'What I can help you with',
    'services.whatIDo': 'What I Do',
    'services.whatIDontDo': 'What I Don\'t Do',
    'services.webApps': 'Web Applications',
    'services.webAppsDesc': 'Full-stack web apps with robust backend and modern frontend',
    'services.dashboards': 'Dashboards',
    'services.dashboardsDesc': 'Data visualization and admin panels with real-time updates',
    'services.mobileApps': 'Mobile Apps',
    'services.mobileAppsDesc': 'Cross-platform mobile applications with React Native',
    'services.saas': 'SaaS Products',
    'services.saasDesc': 'Scalable software-as-a-service platforms',
    'services.portfolios': 'Portfolios',
    'services.portfoliosDesc': 'Professional portfolio websites with custom animations',
    'services.backend': 'Backend Development',
    'services.backendDesc': 'REST APIs, databases, authentication, and server architecture',
    'services.andMore': 'And more...',
    'services.andMoreDesc': 'Have something in mind? Let\'s talk about your project. If you can dream it, we can build it!',
    'services.uxui': 'UX/UI Design',
    'services.uxuiDesc': 'I focus on development, not design work',
    'services.branding': 'Branding',
    'services.brandingDesc': 'Logo design, brand identity, and visual systems',
    'services.illustration': 'Illustration',
    'services.illustrationDesc': 'Custom illustrations and graphic design',
    'services.animation': 'Complex Animations',
    'services.animationDesc': 'Advanced motion graphics and video production',
    
    'stack.title': 'Tech Stack',
    'stack.learningNow': 'Learning Now',
    'stack.backend': 'Backend',
    'stack.authSecurity': 'Auth/Security',
    'stack.tools': 'Tools',
    'stack.practices': 'Practices',
    'stack.languages': 'Languages',
    
    'contact.title': 'Contact',
    'contact.description': 'No backend needed — this uses your email client.',
    'contact.form.name': 'Your name',
    'contact.form.email': 'Your email',
    'contact.form.message': 'Your message',
    'contact.form.send': 'Send',
    
    'contact.quickContact': 'Send me a direct email',
    'contact.orFillForm': 'Or fill out the required information for a personalized quote',
    'contact.advancedQuote': 'Advanced Quote',
    'contact.stepper.back': 'Back',
    'contact.stepper.next': 'Next',
    'contact.step1.title': 'Contact Information',
    'contact.step1.nameLabel': 'Name/Company *',
    'contact.step1.namePlaceholder': 'Your name or company',
    'contact.step1.emailLabel': 'Email *',
    'contact.step1.emailPlaceholder': 'you@email.com',
    'contact.step2.title': 'What type of service do you need?',
    'contact.step2.selectOption': 'Select an option',
    'contact.step2.website': 'Website',
    'contact.step2.webApp': 'Web Application',
    'contact.step2.mobileApp': 'Mobile Application',
    'contact.step2.apiBackend': 'API/Backend',
    'contact.step2.ecommerce': 'E-commerce',
    'contact.step2.other': 'Other',
    'contact.step3.title': 'Which platforms should it work on?',
    'contact.step3.webDesktop': 'Web (desktop)',
    'contact.step3.webMobile': 'Web (mobile)',
    'contact.step3.ios': 'iOS',
    'contact.step3.android': 'Android',
    'contact.step3.multiplatform': 'Multi-platform',
    'contact.step4.title': 'Do you already have a design?',
    'contact.step4.selectOption': 'Select an option',
    'contact.step4.yesComplete': 'Yes, I have complete design (Figma/Adobe XD)',
    'contact.step4.yesPartial': 'I have some ideas/sketches',
    'contact.step4.noNeedDesign': 'No, I need complete design',
    'contact.step4.noUseTemplate': 'No, I can use a template',
    'contact.step5.title': 'What main features do you need?',
    'contact.step5.placeholder': 'E.g.: Login system, shopping cart, admin panel, real-time chat, etc.',
    'contact.step6.title': 'Do you need user/authentication system?',
    'contact.step6.selectOption': 'Select an option',
    'contact.step6.no': 'No need',
    'contact.step6.basic': 'Yes, basic login (email/password)',
    'contact.step6.social': 'Yes, with social media (Google, Facebook, etc.)',
    'contact.step6.advanced': 'Yes, with advanced roles and permissions',
    'contact.step7.title': 'Will you need ongoing maintenance?',
    'contact.step7.selectOption': 'Select an option',
    'contact.step7.no': 'No, just initial development',
    'contact.step7.occasional': 'Occasional (specific updates)',
    'contact.step7.monthly': 'Monthly (regular support and maintenance)',
    'contact.step7.full': 'Full (ongoing development)',
    'contact.step8.title': 'Do you need integrations with other services?',
    'contact.step8.placeholder': 'E.g.: Payment gateways (Stripe, PayPal), external APIs, email services, etc.',
    'contact.step9.title': 'Additional information',
    'contact.step9.subtitle': 'Is there anything else I should know about your project?',
    'contact.step9.placeholder': 'References, inspirations, special requirements, etc.',
    'contact.sent.title': 'Sent!',
    'contact.sent.message': 'Thank you for your interest. I\'ll get back to you soon with a personalized quote.',
    'contact.sending': 'Sending...',
    'contact.budget.intro': 'Tell me about your project and I\'ll get back to you with a personalized quote.',
    'contact.budget.selectOption': 'Select an option',
    'contact.budget.projectTypes.webApp': 'Web Application',
    'contact.budget.projectTypes.api': 'REST API / Backend',
    'contact.budget.projectTypes.migration': 'Migration / Modernization',
    'contact.budget.projectTypes.consulting': 'Consulting / Code Review',
    'contact.budget.projectTypes.maintenance': 'Maintenance / Support',
    'contact.budget.projectTypes.other': 'Other',
    'contact.budget.budgetRanges.under1k': 'Less than $1,000',
    'contact.budget.budgetRanges.range1k3k': '$1,000 - $3,000',
    'contact.budget.budgetRanges.range3k5k': '$3,000 - $5,000',
    'contact.budget.budgetRanges.range5k10k': '$5,000 - $10,000',
    'contact.budget.budgetRanges.over10k': 'More than $10,000',
    
    'footer.builtWith': 'Built with React, Tailwind, Anime.js.',
    'footer.copyright': '© {year} Sol Serki. All rights reserved.',
    'footer.creativeRights': 'All creative works, including poems, stories, and tarot designs, are protected by intellectual property rights.'
  },
  es: {
    'nav.projects': 'Proyectos',
    'nav.techStack': 'Stack Técnico',
    'nav.contact': 'Contacto',
    'nav.about': 'Sobre Mí',
    'nav.cv': 'Descarga mi CV',
    
    'hero.title': 'Sol Serki',
    'hero.subtitle': 'Más de seis años construyendo backends web confiables (.NET, Java/Spring). Ahora expandiéndome a Node.js, React, Tailwind y animaciones UI.',
    'hero.cta.projects': 'Ver Proyectos',
    'hero.cta.stack': 'Mi Stack Técnico',
    
    'about.title': 'Sobre Mí',
    'about.subtitle': 'Sol Serki',
    'about.profile.title': 'Perfil',
    'about.profile.description': 'Desarrolladora Back-End con 6+ años de experiencia construyendo aplicaciones web escalables, especializada en .NET y Java Spring Boot. Historial comprobado entregando código de alta calidad y mantenible con enfoque en mejores prácticas incluyendo unit testing, escalabilidad y confiabilidad. Experiencia liderando equipos de desarrollo y facilitando colaboración internacional.',
    'about.work.title': 'Experiencia Laboral',
    'about.work.vetty.role': 'Full-Stack Lead Developer',
    'about.work.vetty.period': 'Nov 2023 - Presente',
    'about.work.vetty.company': 'Vetty Startup - Rosario',
    'about.work.vetty.point1': 'Lidero el desarrollo end-to-end de una aplicación integral de gestión para clínica veterinaria usando Java con Spring Boot.',
    'about.work.vetty.point2': 'Diseñé arquitectura escalable para soportar el crecimiento del negocio y asegurar mantenibilidad a largo plazo.',
    'about.work.vetty.point3': 'Implementé funcionalidades clave enfocadas en entregar una experiencia de usuario fluida.',
    'about.work.vetty.point4': 'Coordiné con stakeholders para alinear soluciones técnicas con requerimientos específicos del cliente.',
    'about.work.accenture.role': 'Desarrolladora Back-End',
    'about.work.accenture.period': 'Ene 2018 - Jul 2023',
    'about.work.accenture.company': 'Accenture - Rosario',
    'about.work.accenture.point1': 'Desarrollé componentes web robustos y APIs REST para integración de sistemas, logrando altas tasas de satisfacción del cliente.',
    'about.work.accenture.point2': 'Optimicé patrones de diseño, reduciendo el tiempo de ejecución de unit tests en un 85% e incrementando la eficiencia del ciclo de desarrollo.',
    'about.work.accenture.point3': 'Lideré comunicación técnica como referente de inglés, facilitando coordinación entre equipos internacionales y clientes.',
    'about.work.accenture.point4': 'Identifiqué y resolví bugs y fallas de diseño, mejorando la estabilidad y mantenibilidad de las aplicaciones.',
    'about.education.title': 'Educación',
    'about.education.architecture.degree': 'Licenciatura con Honores en Arquitectura',
    'about.education.architecture.school': 'Universidad de Buenos Aires',
    'about.education.architecture.period': '2005 - 2014',
    'about.education.music.degree': 'Profesora de Música - Especialización en Canto',
    'about.education.music.school': 'Escuela de Música Popular',
    'about.education.music.period': '2011 - 2014',
    'about.education.electronics.degree': 'Certificado en Electrónica y Robótica',
    'about.education.electronics.school': 'Escuela de Educación Técnica',
    'about.education.electronics.period': '2001 - 2004',
    'about.education.epic.degree': 'Empleo y Capacitación para Inmigrantes',
    'about.education.epic.school': 'The EPIC Programme - BITC',
    'about.education.epic.period': '2018',
    'about.interests.title': 'Intereses y Hobbies',
    'about.interests.reading.title': 'Lectura',
    'about.interests.reading.description': 'Me encanta leer desde novelas de fantasía hasta libros sobre escritura.',
    'about.interests.writing.title': 'Escritura',
    'about.interests.writing.description': 'Escribo novelas y poesía, y planeo seguir desarrollando mis habilidades.',
    'about.interests.gaming.title': 'Gaming',
    'about.interests.gaming.description': 'Disfruto jugar juegos en PC y Magic the Gathering con mis amigos.',
    'about.interests.music.title': 'Música',
    'about.interests.music.description': 'Adoro cantar y actualmente estoy tomando clases.',
    'about.interests.roleplay.title': 'Rol',
    'about.interests.roleplay.description': 'Llevo más de 15 años jugando juegos de rol y he dirigido varias campañas como DM.',
    'about.interests.cooking.title': 'Cocina',
    'about.interests.cooking.description': 'Excelente cocinera, ¡nada supera preparar tu propia comida deliciosa!',
    'about.interests.exploreCreative': 'Explorar Sección Creativa',
    
    'services.title': 'Servicios',
    'services.subtitle': 'En qué puedo ayudarte',
    'services.whatIDo': 'Lo Que Hago',
    'services.whatIDontDo': 'Lo Que NO Hago',
    'services.webApps': 'Aplicaciones Web',
    'services.webAppsDesc': 'Apps web full-stack con backend robusto y frontend moderno',
    'services.dashboards': 'Dashboards',
    'services.dashboardsDesc': 'Visualización de datos y paneles admin con actualizaciones en tiempo real',
    'services.mobileApps': 'Aplicaciones Móviles',
    'services.mobileAppsDesc': 'Aplicaciones móviles multiplataforma con React Native',
    'services.saas': 'Productos SaaS',
    'services.saasDesc': 'Plataformas software-as-a-service escalables',
    'services.portfolios': 'Portfolios',
    'services.portfoliosDesc': 'Sitios web de portfolio profesionales con animaciones personalizadas',
    'services.backend': 'Desarrollo Backend',
    'services.backendDesc': 'APIs REST, bases de datos, autenticación y arquitectura de servidor',
    'services.andMore': 'Y más...',
    'services.andMoreDesc': '¿Tenés algo en mente? ¡Contame sobre tu proyecto y veamos cómo lo hacemos realidad!',
    'services.uxui': 'Diseño UX/UI',
    'services.uxuiDesc': 'Me enfoco en desarrollo, no en trabajo de diseño',
    'services.branding': 'Branding',
    'services.brandingDesc': 'Diseño de logos, identidad de marca y sistemas visuales',
    'services.illustration': 'Ilustración',
    'services.illustrationDesc': 'Ilustraciones personalizadas y diseño gráfico',
    'services.animation': 'Animaciones Complejas',
    'services.animationDesc': 'Motion graphics avanzados y producción de video',
    
    'stack.title': 'Stack Técnico',
    'stack.learningNow': 'Aprendiendo Ahora',
    'stack.backend': 'Backend',
    'stack.authSecurity': 'Auth/Seguridad',
    'stack.tools': 'Herramientas',
    'stack.practices': 'Prácticas',
    'stack.languages': 'Idiomas',
    
    'contact.title': 'Contacto',
    'contact.description': 'Sin backend necesario — esto usa tu cliente de correo.',
    'contact.form.name': 'Tu nombre',
    'contact.form.email': 'Tu correo',
    'contact.form.message': 'Tu mensaje',
    'contact.form.send': 'Enviar',
    
    'contact.quickContact': 'Envíame un mail directo',
    'contact.orFillForm': 'O completá la información requerida para una cotización personalizada',
    'contact.advancedQuote': 'Cotización Avanzada',
    'contact.stepper.back': 'Atrás',
    'contact.stepper.next': 'Siguiente',
    'contact.step1.title': 'Información de Contacto',
    'contact.step1.nameLabel': 'Nombre/Empresa *',
    'contact.step1.namePlaceholder': 'Tu nombre o empresa',
    'contact.step1.emailLabel': 'Email *',
    'contact.step1.emailPlaceholder': 'tu@email.com',
    'contact.step2.title': '¿Qué tipo de servicio necesitas?',
    'contact.step2.selectOption': 'Selecciona una opción',
    'contact.step2.website': 'Sitio Web',
    'contact.step2.webApp': 'Aplicación Web',
    'contact.step2.mobileApp': 'Aplicación Móvil',
    'contact.step2.apiBackend': 'API/Backend',
    'contact.step2.ecommerce': 'E-commerce',
    'contact.step2.other': 'Otro',
    'contact.step3.title': '¿En qué plataformas debe funcionar?',
    'contact.step3.webDesktop': 'Web (desktop)',
    'contact.step3.webMobile': 'Web (mobile)',
    'contact.step3.ios': 'iOS',
    'contact.step3.android': 'Android',
    'contact.step3.multiplatform': 'Multiplataforma',
    'contact.step4.title': '¿Ya tienes un diseño?',
    'contact.step4.selectOption': 'Selecciona una opción',
    'contact.step4.yesComplete': 'Sí, tengo diseño completo (Figma/Adobe XD)',
    'contact.step4.yesPartial': 'Tengo algunas ideas/bocetos',
    'contact.step4.noNeedDesign': 'No, necesito diseño completo',
    'contact.step4.noUseTemplate': 'No, puedo usar una plantilla',
    'contact.step5.title': '¿Qué funcionalidades principales necesitas?',
    'contact.step5.placeholder': 'Ej: Sistema de login, carrito de compras, panel de administración, chat en tiempo real, etc.',
    'contact.step6.title': '¿Necesitas sistema de usuarios/autenticación?',
    'contact.step6.selectOption': 'Selecciona una opción',
    'contact.step6.no': 'No necesito',
    'contact.step6.basic': 'Sí, login básico (email/contraseña)',
    'contact.step6.social': 'Sí, con redes sociales (Google, Facebook, etc.)',
    'contact.step6.advanced': 'Sí, con roles y permisos avanzados',
    'contact.step7.title': '¿Necesitarás mantenimiento continuo?',
    'contact.step7.selectOption': 'Selecciona una opción',
    'contact.step7.no': 'No, solo desarrollo inicial',
    'contact.step7.occasional': 'Ocasional (actualizaciones puntuales)',
    'contact.step7.monthly': 'Mensual (soporte y mantenimiento regular)',
    'contact.step7.full': 'Completo (desarrollo continuo)',
    'contact.step8.title': '¿Necesitas integraciones con otros servicios?',
    'contact.step8.placeholder': 'Ej: Pasarelas de pago (Stripe, PayPal), APIs externas, servicios de email, etc.',
    'contact.step9.title': 'Información adicional',
    'contact.step9.subtitle': '¿Hay algo más que deba saber sobre tu proyecto?',
    'contact.step9.placeholder': 'Referencias, inspiraciones, requisitos especiales, etc.',
    'contact.sent.title': '¡Enviado!',
    'contact.sent.message': 'Gracias por tu interés. Te responderé pronto con una cotización personalizada.',
    'contact.sending': 'Enviando...',
    'contact.budget.intro': 'Cuéntame sobre tu proyecto y te responderé con un presupuesto personalizado.',
    'contact.budget.selectOption': 'Selecciona una opción',
    'contact.budget.projectTypes.webApp': 'Aplicación Web',
    'contact.budget.projectTypes.api': 'REST API / Backend',
    'contact.budget.projectTypes.migration': 'Migración / Modernización',
    'contact.budget.projectTypes.consulting': 'Consultoría / Revisión de Código',
    'contact.budget.projectTypes.maintenance': 'Mantenimiento / Soporte',
    'contact.budget.projectTypes.other': 'Otro',
    'contact.budget.budgetRanges.under1k': 'Menos de $1,000',
    'contact.budget.budgetRanges.range1k3k': '$1,000 - $3,000',
    'contact.budget.budgetRanges.range3k5k': '$3,000 - $5,000',
    'contact.budget.budgetRanges.range5k10k': '$5,000 - $10,000',
    'contact.budget.budgetRanges.over10k': 'Más de $10,000',
    
    'footer.builtWith': 'Construido con React, Tailwind, Anime.js.',
    'footer.copyright': '© {year} Sol Serki. Todos los derechos reservados.',
    'footer.creativeRights': 'Todas las obras creativas, incluyendo poemas, historias y diseños de tarot, están protegidas por derechos de propiedad intelectual.'
  }
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: keyof Translations) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Try to get saved language from localStorage, default to browser language or 'en'
    const saved = localStorage.getItem('language') as Language | null
    if (saved && (saved === 'en' || saved === 'es')) return saved
    
    const browserLang = navigator.language.toLowerCase()
    return browserLang.startsWith('es') ? 'es' : 'en'
  })

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: keyof Translations): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
