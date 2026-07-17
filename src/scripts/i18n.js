(function () {
  var translations = {
    es: {
      'nav.trabajos': 'Trabajos',
      'nav.servicios': 'Servicios',
      'nav.contacto': 'Contacto',
      'nav.empezar': 'Hablemos',
      'theme.toggle': 'Cambiar modo claro',
      'lang.toggle': 'EN',
      'hero.title': 'Tu negocio tiene problemas. <span class="text-primary-500">Los resolvemos con software</span> que funciona.',
      'hero.subtitle': '<span class="text-primary-500">Automatización</span>, <span class="text-primary-500">integración</span>, <span class="text-primary-500">digitalización</span>. Identificamos el problema, diseñamos la solución y la implementamos con <span class="text-primary-500">equipo senior</span>, <span class="text-primary-500">entregas predecibles</span> y cero sorpresas.',
      'hero.cta': 'Empezar un proyecto',
      'hero.secundario': 'Ver trabajos',
      'hero.stat1': 'Proyectos desde $25k',
      'hero.stat2': 'Respondemos en 24 hs',
      'hero.stat3': 'Sin compromiso',
      'portfolio.title': 'Trabajos seleccionados',
      'portfolio.subtitle': 'Proyectos <span class="text-primary-500">reales</span>, <span class="text-primary-500">resultados concretos</span>.',
      'portfolio.proj1.title': 'Dashboard Financiero',
      'portfolio.proj1.desc': 'Plataforma de análisis en tiempo real que procesa $50M+ en transacciones mensuales con consultas en milisegundos.',
      'portfolio.proj2.title': 'Plataforma E-commerce',
      'portfolio.proj2.desc': 'Marketplace completo con CMS personalizado, inventario en tiempo real y 99.9% de uptime en 15 países.',
      'portfolio.proj3.title': 'App de Salud',
      'portfolio.proj3.desc': 'Sistema de gestión de pacientes que atiende 200+ clínicas con manejo seguro de datos y agenda en tiempo real.',
      'services.title': '<span class="text-primary-500">Problemas</span> que resolvemos',
      'services.subtitle': 'Identificamos el <span class="text-primary-500">desafío</span>, diseñamos la <span class="text-primary-500">solución</span>, la implementamos con <span class="text-primary-500">software</span>.',
      'services.feature1.title': 'Diagnóstico y estrategia',
      'services.feature1.desc': 'Entendemos tu negocio, identificamos los cuellos de botella y definimos la solución óptima — antes de escribir una sola línea de código.',
      'services.feature2.title': 'Implementación pragmática',
      'services.feature2.desc': 'Construimos la solución con las herramientas correctas para tu problema, no con las que están de moda. Sin sobreingeniería, sin vueltas.',
      'services.feature3.title': 'Entrega y evolución',
      'services.feature3.desc': 'Lanzamos, monitoreamos y mejoramos continuamente. El software es el medio; la solución a tu problema es el fin.',
      'services.step1.title': 'Entendemos el problema',
      'services.step1.desc': 'Analizamos tu negocio, usuarios y objetivos. Definimos alcance, timeline y presupuesto antes de empezar.',
      'services.step2.title': 'Diseñamos la solución',
      'services.step2.desc': 'Sprints ágiles con demos semanales. Validamos cada decisión con vos antes de avanzar a la siguiente etapa.',
      'services.step3.title': 'Implementamos y evolucionamos',
      'services.step3.desc': 'Deploy, monitoreo y soporte continuo. La solución crece con tu negocio — no desaparecemos después del launch.',
      'services.heading2': 'De principio a fin, sin vueltas',
      'services.sub2': 'Tres fases claras desde que identificamos el problema hasta que la solución está funcionando.',
      'faq.title': 'Preguntas frecuentes',
      'faq.subtitle': 'Todo lo que necesitás saber antes de <span class="text-primary-500">empezar a hablar</span>.',
      'faq.q1': '¿Cuánto dura un proyecto típico?',
      'faq.a1': 'La mayoría de los proyectos duran entre 6 y 12 semanas, desde el inicio hasta el lanzamiento. El timeline depende de la complejidad, pero siempre establecemos una hoja de ruta clara durante la fase de Descubrimiento — y la cumplimos.',
      'faq.q2': '¿Cuánto cuesta un proyecto?',
      'faq.a2': 'Los proyectos comienzan en $25k y escalan según el alcance y la complejidad. Cada compromiso comienza con una fase de Descubrimiento donde definimos el alcance completo, el timeline y el presupuesto — sin sorpresas.',
      'faq.q3': '¿Cómo manejan los cambios de alcance?',
      'faq.a3': 'Los cambios son normales. Usamos un proceso estructurado: nos decís qué cambió, evaluamos el impacto en el timeline y presupuesto, y aprobás antes de comenzar cualquier trabajo. Sin desvíos de alcance no autorizados.',
      'faq.q4': '¿Qué tecnologías usan?',
      'faq.a4': 'Somos agnósticos en tecnología pero nos inclinamos por herramientas modernas y probadas: React, Next.js, Node.js, Python, Go, PostgreSQL e infraestructura cloud-native en AWS/GCP. Elegimos la herramienta adecuada para tu problema específico.',
      'faq.q5': '¿Qué pasa después del lanzamiento?',
      'faq.a5': 'Incluimos un período de soporte post-lanzamiento de 30 a 90 días según el plan para resolver cualquier inconveniente y capacitar a tu equipo. Luego ofrecemos mantenimiento continuo, escalado y retainers para nuevas funcionalidades.',
      'contact.title': 'Construyamos algo grande juntos',
      'contact.subtitle': '<span class="text-primary-500">Contanos</span> qué necesitás. Te respondemos en menos de 24 horas.',
      'contact.cta': 'Empezar un proyecto',
      'contact.or': 'O escribinos a',
      'contact.follow': 'Seguinos',
      'footer.description': 'Resolvemos problemas de negocio con software a medida. Automatización, integración y productos digitales con equipo senior y entregas predecibles.',
      'footer.contact': 'Navegación',
      'footer.whatsapp': 'WhatsApp',
      'footer.email': 'hello@norware.dev',
      'footer.services': 'Servicios',
      'footer.service1': 'Diagnóstico y estrategia',
      'footer.service2': 'Implementación',
      'footer.service3': 'Evolución y soporte',
      'footer.social': 'Conecta',
      'footer.copyright': '© ' + new Date().getFullYear() + ' Norware. Todos los derechos reservados.',
      'seo.title': 'Norware — Resolvemos problemas con software',
      'seo.description': 'Agencia técnica de software. Transformamos problemas complejos en soluciones robustas, escalables y mantenibles.',
      'jsonld.name': 'Norware',
      'jsonld.description': 'Agencia técnica de resolución de problemas con software.',
    },
    en: {
      'nav.trabajos': 'Work',
      'nav.servicios': 'Services',
      'nav.contacto': 'Contact',
      'nav.empezar': 'Let’s talk',
      'theme.toggle': 'Toggle light mode',
      'lang.toggle': 'ES',
      'hero.title': 'Your business has problems. <span class="text-primary-500">We solve them with software</span> that works.',
      'hero.subtitle': '<span class="text-primary-500">Automation</span>, <span class="text-primary-500">integration</span>, <span class="text-primary-500">digitalization</span>. We identify the problem, design the solution, and implement it with <span class="text-primary-500">senior team</span>, <span class="text-primary-500">predictable deliveries</span> and zero surprises.',
      'hero.cta': 'Start a project',
      'hero.secundario': 'View work',
      'hero.stat1': 'Projects from $25k',
      'hero.stat2': 'Reply in 24 hrs',
      'hero.stat3': 'No commitment',
      'portfolio.title': 'Selected work',
      'portfolio.subtitle': '<span class="text-primary-500">Real</span> projects, <span class="text-primary-500">tangible</span> results.',
      'portfolio.proj1.title': 'Financial Dashboard',
      'portfolio.proj1.desc': 'Real-time analytics platform processing $50M+ in monthly transactions with millisecond queries.',
      'portfolio.proj2.title': 'E-commerce Platform',
      'portfolio.proj2.desc': 'Full marketplace with custom CMS, real-time inventory, and 99.9% uptime across 15 countries.',
      'portfolio.proj3.title': 'Health App',
      'portfolio.proj3.desc': 'Patient management system serving 200+ clinics with secure data handling and real-time scheduling.',
      'services.title': '<span class="text-primary-500">Problems</span> we solve',
      'services.subtitle': 'We identify the <span class="text-primary-500">challenge</span>, design the <span class="text-primary-500">solution</span>, and build it with <span class="text-primary-500">software</span>.',
      'services.feature1.title': 'Diagnosis & Strategy',
      'services.feature1.desc': 'We understand your business, identify bottlenecks, and define the optimal solution — before writing a single line of code.',
      'services.feature2.title': 'Pragmatic Implementation',
      'services.feature2.desc': 'We build with the right tools for your problem, not what is trendy. No overengineering, no fluff.',
      'services.feature3.title': 'Delivery & Evolution',
      'services.feature3.desc': 'We launch, monitor, and continuously improve. Software is the means; solving your problem is the end.',
      'services.step1.title': 'Understand the problem',
      'services.step1.desc': 'We analyze your business, users, and goals. We define scope, timeline, and budget before starting.',
      'services.step2.title': 'Design the solution',
      'services.step2.desc': 'Agile sprints with weekly demos. We validate every decision with you before moving to the next stage.',
      'services.step3.title': 'Implement & evolve',
      'services.step3.desc': 'Deploy, monitoring, and continuous support. The solution grows with your business — we don\'t disappear after launch.',
      'services.heading2': 'End to end, no fluff',
      'services.sub2': 'Three clear phases from identifying the problem to having the solution running.',
      'faq.title': 'Frequently asked questions',
      'faq.subtitle': 'Everything you need to know before <span class="text-primary-500">starting a conversation</span>.',
      'faq.q1': 'How long does a typical project take?',
      'faq.a1': 'Most projects take between 6 and 12 weeks, from start to launch. Timeline depends on complexity, but we always establish a clear roadmap during the Discovery phase — and we stick to it.',
      'faq.q2': 'How much does a project cost?',
      'faq.a2': 'Projects start at $25k and scale based on scope and complexity. Every engagement begins with a Discovery phase where we define full scope, timeline, and budget — no surprises.',
      'faq.q3': 'How do you handle scope changes?',
      'faq.a3': 'Changes are normal. We use a structured process: you tell us what changed, we evaluate the impact on timeline and budget, and you approve before any work begins. No unauthorized scope creep.',
      'faq.q4': 'What technologies do you use?',
      'faq.a4': 'We are technology-agnostic but lean towards modern, proven tools: React, Next.js, Node.js, Python, Go, PostgreSQL, and cloud-native infrastructure on AWS/GCP. We choose the right tool for your specific problem.',
      'faq.q5': 'What happens after launch?',
      'faq.a5': 'We include a 30 to 90 day post-launch support period depending on the plan to resolve any issues and train your team. Then we offer ongoing maintenance, scaling, and retainers for new features.',
      'contact.title': 'Let\'s build something great together',
      'contact.subtitle': '<span class="text-primary-500">Tell us</span> what you need. We reply in under 24 hours.',
      'contact.cta': 'Start a project',
      'contact.or': 'Or email us at',
      'contact.follow': 'Follow us',
      'footer.description': 'We solve business problems with custom software. Automation, integration, and digital products with a senior team and predictable delivery.',
      'footer.contact': 'Navigation',
      'footer.whatsapp': 'WhatsApp',
      'footer.email': 'hello@norware.dev',
      'footer.services': 'Services',
      'footer.service1': 'Diagnosis & Strategy',
      'footer.service2': 'Implementation',
      'footer.service3': 'Evolution & Support',
      'footer.social': 'Connect',
      'footer.copyright': '© ' + new Date().getFullYear() + ' Norware. All rights reserved.',
      'seo.title': 'Norware — We solve problems with software',
      'seo.description': 'Technical software agency. We turn complex problems into robust, scalable, maintainable solutions.',
      'jsonld.name': 'Norware',
      'jsonld.description': 'Technical problem-solving software agency.',
    }
  };

  var currentLang = localStorage.getItem('lang') || 'es';

  function applyLang(lang) {
    var t = translations[lang];
    document.documentElement.lang = lang === 'en' ? 'en' : 'es';

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        el.textContent = t[key];
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) {
        el.placeholder = t[key];
      }
    });

    var ogTitle = document.querySelector('meta[property=\'og:title\']');
    if (ogTitle) ogTitle.setAttribute('content', t['seo.title']);

    var ogDesc = document.querySelector('meta[property=\'og:description\']');
    if (ogDesc) ogDesc.setAttribute('content', t['seo.description']);

    var metaDesc = document.querySelector('meta[name=\'description\']');
    if (metaDesc) metaDesc.setAttribute('content', t['seo.description']);

    var jsonld = document.getElementById('json-ld');
    if (jsonld) {
      try {
        var data = JSON.parse(jsonld.textContent);
        data.name = t['jsonld.name'];
        data.description = t['jsonld.description'];
        jsonld.textContent = JSON.stringify(data);
      } catch (e) {}
    }

    currentLang = lang;
    localStorage.setItem('lang', lang);
  }

  function toggleLang() {
    var next = currentLang === 'es' ? 'en' : 'es';
    applyLang(next);
  }

  applyLang(currentLang);

  window.__toggleLang = toggleLang;
  window.__currentLang = function () { return currentLang; };
})();
