/**
 * INSPIRE - Kidney Transplant Resources
 * Artist Engineer: Where code meets empathy
 * Design is empathy made visible
 */

// ========================================
// SCROLL PROGRESS INDICATOR
// ========================================
window.addEventListener('scroll', () => {
  const scrollProgress = document.getElementById('scrollProgress');
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercentage = (scrollTop / scrollHeight) * 100;
  
  if (scrollProgress) {
    scrollProgress.style.transform = `scaleX(${scrollPercentage / 100})`;
  }
});

// ========================================
// LANGUAGE SWITCHER - Multilingual Empathy
// ========================================
const translations = {
  en: {
    // Navigation
    'Home': 'Home',
    'About': 'About',
    'CKD Info': 'CKD Info',
    'Kidney Diseases': 'Kidney Diseases',
    'Resources': 'Resources',
    'Recursos en Español': 'Spanish Resources',
    'Get Help': 'Get Help',
    
    // Hero Section
    'INSPIRE': 'INSPIRE',
    'Empowering Communities': 'Empowering Communities',
    'NAVIGATING THE MAZE OF KIDNEY TRANSPLANTS TOGETHER': 'NAVIGATING THE MAZE OF KIDNEY TRANSPLANTS TOGETHER',
    'Breaking down barriers for underserved communities through education, support, and advocacy.': 'Breaking down barriers for underserved communities through education, support, and advocacy.',
    'Explore Resources': 'Explore Resources',
    'Learn More': 'Learn More',

    // About Section
    'About Us': 'About Us',
    'Breaking Down Barriers to Kidney Care': 'Breaking Down Barriers to Kidney Care',
    'We\'re dedicated to ensuring everyone has fair access to life-saving kidney transplants, regardless of background, income, or circumstances.': 'We\'re dedicated to ensuring everyone has fair access to life-saving kidney transplants, regardless of background, income, or circumstances.',
    'Our Mission': 'Our Mission',
    'We provide comprehensive education, personalized patient support, and strong community partnerships to empower people with the tools and knowledge they need to navigate the transplant process with confidence.': 'We provide comprehensive education, personalized patient support, and strong community partnerships to empower people with the tools and knowledge they need to navigate the transplant process with confidence.',
    'The Challenge We Face': 'The Challenge We Face',
    'Many people from underserved communities face serious obstacles when trying to access kidney care, creating disparities in healthcare outcomes.': 'Many people from underserved communities face serious obstacles when trying to access kidney care, creating disparities in healthcare outcomes.',
    'Healthcare Access': 'Healthcare Access',
    'Limited access to specialized medical care and providers': 'Limited access to specialized medical care and providers',
    'Financial Barriers': 'Financial Barriers',
    'High costs of treatment, medications, and transportation': 'High costs of treatment, medications, and transportation',
    'Transportation': 'Transportation',
    'Lack of reliable transportation to medical appointments': 'Lack of reliable transportation to medical appointments',
    'Basic Needs': 'Basic Needs',
    'Food and housing insecurity affecting health outcomes': 'Food and housing insecurity affecting health outcomes',
    'Information Access': 'Information Access',
    'Limited access to clear, understandable medical information': 'Limited access to clear, understandable medical information',
    'How We\'re Making a Difference': 'How We\'re Making a Difference',
    'We work with trusted doctors, hospitals, and community organizations to design programs that make kidney transplant access more fair and equal for everyone.': 'We work with trusted doctors, hospitals, and community organizations to design programs that make kidney transplant access more fair and equal for everyone.',
    'Our Comprehensive Support Services': 'Our Comprehensive Support Services',
    'Screening for Barriers': 'Screening for Barriers',
    'Helping patients identify challenges they may face in getting a transplant': 'Helping patients identify challenges they may face in getting a transplant',
    'Early Detection': 'Early Detection',
    'Resource Connection': 'Resource Connection',
    'Access to food programs, affordable housing, and financial aid': 'Access to food programs, affordable housing, and financial aid',
    'Community Support': 'Community Support',
    'Healthcare Navigation': 'Healthcare Navigation',
    'Guiding through paperwork, transplant referrals, and insurance': 'Guiding through paperwork, transplant referrals, and insurance',
    'Expert Guidance': 'Expert Guidance',
    'Advocacy & Equity': 'Advocacy & Equity',
    'Identifying unfair treatment and advocating for equal opportunities': 'Identifying unfair treatment and advocating for equal opportunities',
    'Fair Treatment': 'Fair Treatment',
    'Transportation & Medication': 'Transportation & Medication',
    'Ensuring access to appointments and affordable medications': 'Ensuring access to appointments and affordable medications',
    'Practical Support': 'Practical Support',
    'Community Health Workers': 'Community Health Workers',
    'Personalized one-on-one support throughout your entire journey': 'Personalized one-on-one support throughout your entire journey',
    'Personal Care': 'Personal Care',
    'You Don\'t Have to Face This Alone': 'You Don\'t Have to Face This Alone',
    'We understand that the journey to a kidney transplant can feel overwhelming, but you do not have to go through it alone. Whether you need guidance, resources, or just someone to answer your questions, we are here to help.': 'We understand that the journey to a kidney transplant can feel overwhelming, but you do not have to go through it alone. Whether you need guidance, resources, or just someone to answer your questions, we are here to help.',
    'Get Started Today': 'Get Started Today',
    'Contact Our Team': 'Contact Our Team',
    
    // CKD Education
    'Knowledge is Power': 'Knowledge is Power',
    'Understanding Kidney Health': 'Understanding Kidney Health',
    'Knowledge empowers you to take control of your health journey. Whether you\'re newly diagnosed or have been managing kidney disease for years, understanding your condition is the foundation for making informed decisions and living your best life.': 'Knowledge empowers you to take control of your health journey. Whether you\'re newly diagnosed or have been managing kidney disease for years, understanding your condition is the foundation for making informed decisions and living your best life.',
    'You Are Not Alone': 'You Are Not Alone',
    'Millions of people live full, active lives with kidney disease. With proper care, treatment, and support, you can too. Every day brings new advances in treatment and care.': 'Millions of people live full, active lives with kidney disease. With proper care, treatment, and support, you can too. Every day brings new advances in treatment and care.',
    'What Are Your Kidneys?': 'What Are Your Kidneys?',
    'Your kidneys are like your body\'s natural filters. They clean your blood, remove waste, and help control your blood pressure. Think of them as your body\'s water treatment plant - keeping everything clean and balanced.': 'Your kidneys are like your body\'s natural filters. They clean your blood, remove waste, and help control your blood pressure. Think of them as your body\'s water treatment plant - keeping everything clean and balanced.',
    'The 5 Stages of Kidney Disease': 'The 5 Stages of Kidney Disease',
    'Understanding where you are helps you know what to expect and how to prepare': 'Understanding where you are helps you know what to expect and how to prepare',
    'Common Types of Kidney Disease': 'Common Types of Kidney Disease',
    'Understanding your specific condition helps you get the right care': 'Understanding your specific condition helps you get the right care',
    'Chronic Kidney Disease (CKD)': 'Chronic Kidney Disease (CKD)',
    'Most common type, often caused by diabetes or high blood pressure. Highly manageable with proper care!': 'Most common type, often caused by diabetes or high blood pressure. Highly manageable with proper care!',
    'Diabetic Kidney Disease': 'Diabetic Kidney Disease',
    'Kidney damage from diabetes. Great news: controlling your blood sugar can protect your kidneys!': 'Kidney damage from diabetes. Great news: controlling your blood sugar can protect your kidneys!',
    'Polycystic Kidney Disease (PKD)': 'Polycystic Kidney Disease (PKD)',
    'Genetic condition with fluid-filled cysts. Research is advancing rapidly with new treatments being developed.': 'Genetic condition with fluid-filled cysts. Research is advancing rapidly with new treatments being developed.',
    'Glomerulonephritis': 'Glomerulonephritis',
    'Inflammation of kidney filters. Many types are treatable with medications and lifestyle changes.': 'Inflammation of kidney filters. Many types are treatable with medications and lifestyle changes.',
    'Lupus Nephritis': 'Lupus Nephritis',
    'Kidney inflammation from lupus. Treatment has improved dramatically in recent years.': 'Kidney inflammation from lupus. Treatment has improved dramatically in recent years.',
    'Acute Kidney Injury': 'Acute Kidney Injury',
    'Sudden kidney damage, often temporary. Most people recover fully with proper treatment.': 'Sudden kidney damage, often temporary. Most people recover fully with proper treatment.',
    
    // Other
    'Ready to Get Started?': 'Ready to Get Started?',
    'Access Resources': 'Access Resources',

    // Resources Section
    'Patient Resources & Education': 'Patient Resources & Education',
    'Discover our carefully curated collection of trusted resources, guides, and educational materials to help you understand and navigate the kidney transplant journey with confidence.': 'Discover our carefully curated collection of trusted resources, guides, and educational materials to help you understand and navigate the kidney transplant journey with confidence.',
    'Explore Transplant': 'Explore Transplant',
    'Comprehensive guide for becoming a living donor': 'Comprehensive guide for becoming a living donor',
    'Living Donor Toolkit': 'Living Donor Toolkit',
    'Essential tools and information for living donors': 'Essential tools and information for living donors',
    'Transplant Living': 'Transplant Living',
    'UNOS guide to living donor transplants': 'UNOS guide to living donor transplants',
    'Living Donor Resources & Information': 'Living Donor Resources & Information',
    'Financial assistance and additional support for living donors': 'Financial assistance and additional support for living donors',
    'FindHelp.org': 'FindHelp.org',
    'Connect with local resources and support services': 'Connect with local resources and support services',
    'Learn More →': 'Learn More →',

    // AKF Toolkit
    'AKF Toolkit': 'AKF Toolkit',
    'Your Complete Guide to Kidney Transplant': 'Your Complete Guide to Kidney Transplant',
    'What is a Kidney Transplant?': 'What is a Kidney Transplant?',
    'A kidney transplant is a treatment option for kidney failure. It\'s surgery to give someone with kidney failure a healthy kidney from someone else (a donor).': 'A kidney transplant is a treatment option for kidney failure. It\'s surgery to give someone with kidney failure a healthy kidney from someone else (a donor).',
    'Benefits:': 'Benefits:',
    'Live longer than dialysis patients': 'Live longer than dialysis patients',
    'Better quality of life': 'Better quality of life',
    'No more dialysis needed': 'No more dialysis needed',
    'Fewer food and drink restrictions': 'Fewer food and drink restrictions',
    'Your Transplant Options': 'Your Transplant Options',
    'Living Donor Transplant:': 'Living Donor Transplant:',
    'Kidney from someone alive - family, friend, or stranger. Usually lasts 15-20 years.': 'Kidney from someone alive - family, friend, or stranger. Usually lasts 15-20 years.',
    'Deceased Donor Transplant:': 'Deceased Donor Transplant:',
    'Kidney from someone who has died. Usually lasts 10-15 years. Wait time: 3-5 years.': 'Kidney from someone who has died. Usually lasts 10-15 years. Wait time: 3-5 years.',
    'The Transplant Process': 'The Transplant Process',
    'Talk to Your Doctor': 'Talk to Your Doctor',
    'Start the conversation early, ideally when eGFR is 30 or less': 'Start the conversation early, ideally when eGFR is 30 or less',
    'Get Referred': 'Get Referred',
    'Your doctor refers you to a transplant center for evaluation': 'Your doctor refers you to a transplant center for evaluation',
    'Evaluation': 'Evaluation',
    'Complete tests to see if you\'re a good candidate': 'Complete tests to see if you\'re a good candidate',
    'Wait for Surgery': 'Wait for Surgery',
    'Stay healthy while waiting for your kidney': 'Stay healthy while waiting for your kidney',
    'Eligibility Requirements': 'Eligibility Requirements',
    'Medical Requirements:': 'Medical Requirements:',
    'eGFR 20 or below OR on dialysis': 'eGFR 20 or below OR on dialysis',
    'Healthy heart and lungs': 'Healthy heart and lungs',
    'No active cancer or infections': 'No active cancer or infections',
    'Support Requirements:': 'Support Requirements:',
    'Reliable transportation': 'Reliable transportation',
    'Support person to help': 'Support person to help',
    'Stable housing and phone': 'Stable housing and phone',
    'Insurance coverage': 'Insurance coverage',
    'Finding a Living Donor': 'Finding a Living Donor',
    'Living donor transplants have many benefits - shorter wait times, longer-lasting kidneys, and better outcomes.': 'Living donor transplants have many benefits - shorter wait times, longer-lasting kidneys, and better outcomes.',
    'How to Find a Donor:': 'How to Find a Donor:',
    'Share your story with family and friends': 'Share your story with family and friends',
    'Use social media to spread the word': 'Use social media to spread the word',
    'Ask others to help spread the word': 'Ask others to help spread the word',
    'Leave brochures at gatherings': 'Leave brochures at gatherings',
    'Caregiver Support': 'Caregiver Support',
    'You\'ll need support throughout your transplant journey. Your caregiver can be anyone you choose - family, friend, or neighbor.': 'You\'ll need support throughout your transplant journey. Your caregiver can be anyone you choose - family, friend, or neighbor.',
    'Caregiver Helps With:': 'Caregiver Helps With:',
    'Driving to appointments': 'Driving to appointments',
    'Managing medicines': 'Managing medicines',
    'Household tasks': 'Household tasks',
    'Emotional support': 'Emotional support',
    'Questions to Ask Your Transplant Team': 'Questions to Ask Your Transplant Team',
    'Am I a good candidate for transplant?': 'Am I a good candidate for transplant?',
    'What are this center\'s eligibility requirements?': 'What are this center\'s eligibility requirements?',
    'How long is the waitlist here?': 'How long is the waitlist here?',
    'Do you participate in paired exchange programs?': 'Do you participate in paired exchange programs?',
    'What support resources are available?': 'What support resources are available?',
    'Myths vs Facts': 'Myths vs Facts',
    'Myth:': 'Myth:',
    'You must start dialysis before getting a transplant': 'You must start dialysis before getting a transplant',
    'Fact:': 'Fact:',
    'The best time is actually BEFORE dialysis (preemptive transplant)': 'The best time is actually BEFORE dialysis (preemptive transplant)',
    'It\'s very hard to qualify for a kidney transplant': 'It\'s very hard to qualify for a kidney transplant',
    'Most people who apply are accepted onto the waitlist': 'Most people who apply are accepted onto the waitlist',
    'Remember: You Are Not Alone': 'Remember: You Are Not Alone',
    'The transplant process can feel overwhelming, but you don\'t have to go through it alone. Your transplant team is there to help guide you through every step. Start the conversation with your doctor today about whether a kidney transplant might be right for you.': 'The transplant process can feel overwhelming, but you don\'t have to go through it alone. Your transplant team is there to help guide you through every step. Start the conversation with your doctor today about whether a kidney transplant might be right for you.'
  },
  es: {
    // Navigation
    'Home': 'Inicio',
    'About': 'Acerca de',
    'CKD Info': 'Info de ERC',
    'Kidney Diseases': 'Enfermedades Renales',
    'Resources': 'Recursos',
    'Recursos en Español': 'Recursos en Español',
    'Get Help': 'Obtener Ayuda',
    
    // Hero Section
    'INSPIRE': 'INSPIRE',
    'Empowering Communities': 'Empoderando Comunidades',
    'NAVIGATING THE MAZE OF KIDNEY TRANSPLANTS TOGETHER': 'NAVEGANDO EL LABERINTO DE TRASPLANTES DE RIÑÓN JUNTOS',
    'Breaking down barriers for underserved communities through education, support, and advocacy.': 'Derribando barreras para comunidades desatendidas a través de educación, apoyo y defensa.',
    'Explore Resources': 'Explorar Recursos',
    'Learn More': 'Aprender Más',

    // About Section
    'About Us': 'Acerca de Nosotros',
    'Breaking Down Barriers to Kidney Care': 'Derribando Barreras al Cuidado Renal',
    'We\'re dedicated to ensuring everyone has fair access to life-saving kidney transplants, regardless of background, income, or circumstances.': 'Estamos dedicados a asegurar que todos tengan acceso justo a trasplantes de riñón que salvan vidas, independientemente de su origen, ingresos o circunstancias.',
    'Our Mission': 'Nuestra Misión',
    'We provide comprehensive education, personalized patient support, and strong community partnerships to empower people with the tools and knowledge they need to navigate the transplant process with confidence.': 'Proporcionamos educación integral, apoyo personalizado al paciente y sólidas asociaciones comunitarias para empoderar a las personas con las herramientas y conocimientos que necesitan para navegar el proceso de trasplante con confianza.',
    'The Challenge We Face': 'El Desafío que Enfrentamos',
    'Many people from underserved communities face serious obstacles when trying to access kidney care, creating disparities in healthcare outcomes.': 'Muchas personas de comunidades desatendidas enfrentan obstáculos serios al intentar acceder al cuidado renal, creando disparidades en los resultados de salud.',
    'Healthcare Access': 'Acceso a la Salud',
    'Limited access to specialized medical care and providers': 'Acceso limitado a atención médica especializada y proveedores',
    'Financial Barriers': 'Barreras Financieras',
    'High costs of treatment, medications, and transportation': 'Altos costos de tratamiento, medicamentos y transporte',
    'Transportation': 'Transporte',
    'Lack of reliable transportation to medical appointments': 'Falta de transporte confiable a citas médicas',
    'Basic Needs': 'Necesidades Básicas',
    'Food and housing insecurity affecting health outcomes': 'Inseguridad alimentaria y de vivienda que afecta los resultados de salud',
    'Information Access': 'Acceso a la Información',
    'Limited access to clear, understandable medical information': 'Acceso limitado a información médica clara y comprensible',
    'How We\'re Making a Difference': 'Cómo Estamos Marcando la Diferencia',
    'We work with trusted doctors, hospitals, and community organizations to design programs that make kidney transplant access more fair and equal for everyone.': 'Trabajamos con médicos, hospitales y organizaciones comunitarias de confianza para diseñar programas que hagan el acceso al trasplante de riñón más justo e igualitario para todos.',
    'Our Comprehensive Support Services': 'Nuestros Servicios Integrales de Apoyo',
    'Screening for Barriers': 'Detección de Barreras',
    'Helping patients identify challenges they may face in getting a transplant': 'Ayudando a los pacientes a identificar desafíos que pueden enfrentar al obtener un trasplante',
    'Early Detection': 'Detección Temprana',
    'Resource Connection': 'Conexión de Recursos',
    'Access to food programs, affordable housing, and financial aid': 'Acceso a programas de alimentos, vivienda asequible y ayuda financiera',
    'Community Support': 'Apoyo Comunitario',
    'Healthcare Navigation': 'Navegación de Salud',
    'Guiding through paperwork, transplant referrals, and insurance': 'Guiando a través de papeleo, referencias de trasplante y seguro',
    'Expert Guidance': 'Orientación Experta',
    'Advocacy & Equity': 'Defensa e Igualdad',
    'Identifying unfair treatment and advocating for equal opportunities': 'Identificando tratamiento injusto y defendiendo oportunidades iguales',
    'Fair Treatment': 'Tratamiento Justo',
    'Transportation & Medication': 'Transporte y Medicamentos',
    'Ensuring access to appointments and affordable medications': 'Asegurando acceso a citas y medicamentos asequibles',
    'Practical Support': 'Apoyo Práctico',
    'Community Health Workers': 'Trabajadores de Salud Comunitaria',
    'Personalized one-on-one support throughout your entire journey': 'Apoyo personalizado uno a uno durante todo tu viaje',
    'Personal Care': 'Cuidado Personal',
    'You Don\'t Have to Face This Alone': 'No Tienes que Enfrentar Esto Solo',
    'We understand that the journey to a kidney transplant can feel overwhelming, but you do not have to go through it alone. Whether you need guidance, resources, or just someone to answer your questions, we are here to help.': 'Entendemos que el viaje hacia un trasplante de riñón puede sentirse abrumador, pero no tienes que pasar por esto solo. Ya sea que necesites orientación, recursos, o simplemente alguien que responda tus preguntas, estamos aquí para ayudar.',
    'Get Started Today': 'Comienza Hoy',
    'Contact Our Team': 'Contacta Nuestro Equipo',
    
    // CKD Education
    'Knowledge is Power': 'El Conocimiento es Poder',
    'Understanding Kidney Health': 'Entendiendo la Salud Renal',
    'Knowledge empowers you to take control of your health journey. Whether you\'re newly diagnosed or have been managing kidney disease for years, understanding your condition is the foundation for making informed decisions and living your best life.': 'El conocimiento te empodera para tomar control de tu viaje de salud. Ya sea que hayas sido recientemente diagnosticado o hayas estado manejando la enfermedad renal por años, entender tu condición es la base para tomar decisiones informadas y vivir tu mejor vida.',
    'You Are Not Alone': 'No Estás Solo',
    'Millions of people live full, active lives with kidney disease. With proper care, treatment, and support, you can too. Every day brings new advances in treatment and care.': 'Millones de personas viven vidas plenas y activas con enfermedad renal. Con el cuidado, tratamiento y apoyo adecuados, tú también puedes. Cada día trae nuevos avances en tratamiento y cuidado.',
    'What Are Your Kidneys?': '¿Qué Son Tus Riñones?',
    'Your kidneys are like your body\'s natural filters. They clean your blood, remove waste, and help control your blood pressure. Think of them as your body\'s water treatment plant - keeping everything clean and balanced.': 'Tus riñones son como los filtros naturales de tu cuerpo. Limpian tu sangre, eliminan desechos y ayudan a controlar tu presión arterial. Piensa en ellos como la planta de tratamiento de agua de tu cuerpo - manteniendo todo limpio y equilibrado.',
    'The 5 Stages of Kidney Disease': 'Las 5 Etapas de la Enfermedad Renal',
    'Understanding where you are helps you know what to expect and how to prepare': 'Entender dónde estás te ayuda a saber qué esperar y cómo prepararte',
    'Common Types of Kidney Disease': 'Tipos Comunes de Enfermedad Renal',
    'Understanding your specific condition helps you get the right care': 'Entender tu condición específica te ayuda a obtener el cuidado correcto',
    'Chronic Kidney Disease (CKD)': 'Enfermedad Renal Crónica (ERC)',
    'Most common type, often caused by diabetes or high blood pressure. Highly manageable with proper care!': 'Tipo más común, a menudo causado por diabetes o presión arterial alta. ¡Altamente manejable con cuidado adecuado!',
    'Diabetic Kidney Disease': 'Enfermedad Renal Diabética',
    'Kidney damage from diabetes. Great news: controlling your blood sugar can protect your kidneys!': 'Daño renal por diabetes. ¡Buenas noticias: controlar tu azúcar en la sangre puede proteger tus riñones!',
    'Polycystic Kidney Disease (PKD)': 'Enfermedad Renal Poliquística (ERP)',
    'Genetic condition with fluid-filled cysts. Research is advancing rapidly with new treatments being developed.': 'Condición genética con quistes llenos de líquido. La investigación avanza rápidamente con nuevos tratamientos en desarrollo.',
    'Glomerulonephritis': 'Glomerulonefritis',
    'Inflammation of kidney filters. Many types are treatable with medications and lifestyle changes.': 'Inflamación de los filtros renales. Muchos tipos son tratables con medicamentos y cambios en el estilo de vida.',
    'Lupus Nephritis': 'Nefritis por Lupus',
    'Kidney inflammation from lupus. Treatment has improved dramatically in recent years.': 'Inflamación renal por lupus. El tratamiento ha mejorado dramáticamente en los últimos años.',
    'Acute Kidney Injury': 'Lesión Renal Aguda',
    'Sudden kidney damage, often temporary. Most people recover fully with proper treatment.': 'Daño renal súbito, a menudo temporal. La mayoría de las personas se recuperan completamente con tratamiento adecuado.',
    
    // Other
    'Ready to Get Started?': '¿Listo para Comenzar?',
    'Access Resources': 'Acceder a Recursos',

    // Resources Section
    'Patient Resources & Education': 'Recursos y Educación para Pacientes',
    'Discover our carefully curated collection of trusted resources, guides, and educational materials to help you understand and navigate the kidney transplant journey with confidence.': 'Descubre nuestra colección cuidadosamente seleccionada de recursos confiables, guías y materiales educativos para ayudarte a entender y navegar el viaje del trasplante de riñón con confianza.',
    'Explore Transplant': 'Explorar Trasplante',
    'Comprehensive guide for becoming a living donor': 'Guía completa para convertirse en donante vivo',
    'Living Donor Toolkit': 'Kit de Herramientas para Donantes Vivos',
    'Essential tools and information for living donors': 'Herramientas e información esencial para donantes vivos',
    'Transplant Living': 'Trasplante Viviente',
    'UNOS guide to living donor transplants': 'Guía de UNOS para trasplantes de donante vivo',
    'Living Donor Resources & Information': 'Recursos e Información para Donantes Vivos',
    'Financial assistance and additional support for living donors': 'Asistencia financiera y apoyo adicional para donantes vivos',
    'FindHelp.org': 'FindHelp.org',
    'Connect with local resources and support services': 'Conéctate con recursos locales y servicios de apoyo',
    'Learn More →': 'Aprender Más →',

    // AKF Toolkit
    'AKF Toolkit': 'Kit de Herramientas AKF',
    'Your Complete Guide to Kidney Transplant': 'Tu Guía Completa para Trasplante de Riñón',
    'What is a Kidney Transplant?': '¿Qué es un Trasplante de Riñón?',
    'A kidney transplant is a treatment option for kidney failure. It\'s surgery to give someone with kidney failure a healthy kidney from someone else (a donor).': 'Un trasplante de riñón es una opción de tratamiento para la insuficiencia renal. Es una cirugía para dar a alguien con insuficiencia renal un riñón sano de otra persona (un donante).',
    'Benefits:': 'Beneficios:',
    'Live longer than dialysis patients': 'Vivir más tiempo que los pacientes en diálisis',
    'Better quality of life': 'Mejor calidad de vida',
    'No more dialysis needed': 'Ya no se necesita diálisis',
    'Fewer food and drink restrictions': 'Menos restricciones de alimentos y bebidas',
    'Your Transplant Options': 'Tus Opciones de Trasplante',
    'Living Donor Transplant:': 'Trasplante de Donante Vivo:',
    'Kidney from someone alive - family, friend, or stranger. Usually lasts 15-20 years.': 'Riñón de alguien vivo - familiar, amigo o extraño. Generalmente dura 15-20 años.',
    'Deceased Donor Transplant:': 'Trasplante de Donante Fallecido:',
    'Kidney from someone who has died. Usually lasts 10-15 years. Wait time: 3-5 years.': 'Riñón de alguien que ha fallecido. Generalmente dura 10-15 años. Tiempo de espera: 3-5 años.',
    'The Transplant Process': 'El Proceso de Trasplante',
    'Talk to Your Doctor': 'Habla con Tu Médico',
    'Start the conversation early, ideally when eGFR is 30 or less': 'Inicia la conversación temprano, idealmente cuando el eGFR es 30 o menos',
    'Get Referred': 'Obtén una Referencia',
    'Your doctor refers you to a transplant center for evaluation': 'Tu médico te refiere a un centro de trasplante para evaluación',
    'Evaluation': 'Evaluación',
    'Complete tests to see if you\'re a good candidate': 'Completa pruebas para ver si eres un buen candidato',
    'Wait for Surgery': 'Espera la Cirugía',
    'Stay healthy while waiting for your kidney': 'Mantente saludable mientras esperas tu riñón',
    'Eligibility Requirements': 'Requisitos de Elegibilidad',
    'Medical Requirements:': 'Requisitos Médicos:',
    'eGFR 20 or below OR on dialysis': 'eGFR 20 o menos O en diálisis',
    'Healthy heart and lungs': 'Corazón y pulmones saludables',
    'No active cancer or infections': 'Sin cáncer activo o infecciones',
    'Support Requirements:': 'Requisitos de Apoyo:',
    'Reliable transportation': 'Transporte confiable',
    'Support person to help': 'Persona de apoyo para ayudar',
    'Stable housing and phone': 'Vivienda estable y teléfono',
    'Insurance coverage': 'Cobertura de seguro',
    'Finding a Living Donor': 'Encontrar un Donante Vivo',
    'Living donor transplants have many benefits - shorter wait times, longer-lasting kidneys, and better outcomes.': 'Los trasplantes de donante vivo tienen muchos beneficios: tiempos de espera más cortos, riñones que duran más tiempo y mejores resultados.',
    'How to Find a Donor:': 'Cómo Encontrar un Donante:',
    'Share your story with family and friends': 'Comparte tu historia con familia y amigos',
    'Use social media to spread the word': 'Usa las redes sociales para difundir la información',
    'Ask others to help spread the word': 'Pide a otros que ayuden a difundir la información',
    'Leave brochures at gatherings': 'Deja folletos en reuniones',
    'Caregiver Support': 'Apoyo del Cuidador',
    'You\'ll need support throughout your transplant journey. Your caregiver can be anyone you choose - family, friend, or neighbor.': 'Necesitarás apoyo durante todo tu viaje de trasplante. Tu cuidador puede ser cualquiera que elijas - familiar, amigo o vecino.',
    'Caregiver Helps With:': 'El Cuidador Ayuda Con:',
    'Driving to appointments': 'Llevar a citas',
    'Managing medicines': 'Gestionar medicamentos',
    'Household tasks': 'Tareas del hogar',
    'Emotional support': 'Apoyo emocional',
    'Questions to Ask Your Transplant Team': 'Preguntas para Hacer a Tu Equipo de Trasplante',
    'Am I a good candidate for transplant?': '¿Soy un buen candidato para trasplante?',
    'What are this center\'s eligibility requirements?': '¿Cuáles son los requisitos de elegibilidad de este centro?',
    'How long is the waitlist here?': '¿Cuánto tiempo dura la lista de espera aquí?',
    'Do you participate in paired exchange programs?': '¿Participan en programas de intercambio emparejado?',
    'What support resources are available?': '¿Qué recursos de apoyo están disponibles?',
    'Myths vs Facts': 'Mitos vs Hechos',
    'Myth:': 'Mito:',
    'You must start dialysis before getting a transplant': 'Debes comenzar diálisis antes de obtener un trasplante',
    'Fact:': 'Hecho:',
    'The best time is actually BEFORE dialysis (preemptive transplant)': 'El mejor momento es en realidad ANTES de la diálisis (trasplante preventivo)',
    'It\'s very hard to qualify for a kidney transplant': 'Es muy difícil calificar para un trasplante de riñón',
    'Most people who apply are accepted onto the waitlist': 'La mayoría de las personas que solicitan son aceptadas en la lista de espera',
    'Remember: You Are Not Alone': 'Recuerda: No Estás Solo',
    'The transplant process can feel overwhelming, but you don\'t have to go through it alone. Your transplant team is there to help guide you through every step. Start the conversation with your doctor today about whether a kidney transplant might be right for you.': 'El proceso de trasplante puede sentirse abrumador, pero no tienes que pasar por esto solo. Tu equipo de trasplante está ahí para ayudarte a guiarte en cada paso. Inicia la conversación con tu médico hoy sobre si un trasplante de riñón podría ser adecuado para ti.'
  }
};

let currentLang = localStorage.getItem('language') || 'en';

function switchLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('language', lang);
  
  // Update all translatable elements
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      // Check if element is an input, textarea, or img
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.value = translations[lang][key];
      } else if (element.tagName === 'IMG') {
        element.alt = translations[lang][key];
      } else {
      element.textContent = translations[lang][key];
      }
    }
  });
  
  // Update button states
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    }
  });
  
  // Update HTML lang attribute
  document.documentElement.lang = lang;

  console.log(`Language switched to: ${lang}`);
}

// ========================================
// INITIALIZE ON DOM READY
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  console.log('Initializing language switcher...');

  // Language switcher setup
  const langButtons = document.querySelectorAll('.lang-btn');
  console.log(`Found ${langButtons.length} language buttons`);

  langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = btn.getAttribute('data-lang');
      console.log(`Language button clicked: ${lang}`);
      switchLanguage(lang);
    });
  });
  
  // Initialize with saved language
  console.log(`Initializing with language: ${currentLang}`);
  switchLanguage(currentLang);
  
  // External links open in new tab
  const anchors = document.querySelectorAll('a');
  anchors.forEach(anchor => {
    const href = anchor.getAttribute('href');
    
    if (href && !href.startsWith('#')) {
      anchor.setAttribute('target', '_blank');
      anchor.setAttribute('rel', 'noopener noreferrer');
    }
    
    // Smooth scroll for internal links
    if (href && href.startsWith('#')) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    }
  });
  
  // Fade in sections on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
      }
    });
  }, observerOptions);
  
  // Observe all sections
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
  });
  
  // Observe stage cards
  document.querySelectorAll('.stage-card, .disease-card').forEach(card => {
    card.classList.add('fade-in');
    observer.observe(card);
  });
});

// ========================================
// BUTTON RIPPLE EFFECT
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');
      
      this.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    });
  });
});

console.log('%c🎨 Designed with empathy. Built with intention.', 'color: #0066cc; font-size: 14px; font-weight: bold;');
console.log('%c💙 INSPIRE - Every pixel tells a story', 'color: #06d6a0; font-size: 12px;');
