(function () {
  var translations = {
    es: {
      'nav.servicios': 'Servicios',
      'nav.proceso': 'Proceso',
      'nav.contacto': 'Contacto',
      'nav.empezar': 'Hablemos',
      'theme.toggle': 'Cambiar modo claro',
      'lang.toggle': 'EN',
      'hero.title': 'Construimos lo que tu negocio necesita. <span class="text-primary-500">No lo que está de moda.</span>',
      'hero.subtitle': '<span class="text-primary-500">Automatización</span>, <span class="text-primary-500">integración</span>, <span class="text-primary-500">digitalización</span>. Analizamos dónde se frena tu operación, ordenamos el problema y construimos una solución que tu equipo pueda usar y mantener.',
      'hero.cta': 'Empezar un proyecto',
      'hero.secundario': 'Ver qué hacemos',
      'hero.stat1': 'Proyectos desde $25k',
      'hero.stat2': 'Respondemos en 24 hs',
      'hero.stat3': 'Sin compromiso',
      'services.eyebrow': 'Lo que hacemos',
      'services.title': 'Impulsamos ideas que <span>hacen la diferencia.</span>',
      'services.subtitle': 'Seis formas concretas de sacar trabajo manual del medio y convertirlo en sistemas que tu equipo pueda usar de verdad.',
      'services.feature1.title': 'Automatizaciones con IA',
      'services.feature1.desc': 'Chatbots, asistentes y flujos que resuelven tareas repetitivas sin sumar complejidad a tu equipo.',
      'services.feature2.title': 'Integraciones y procesos',
      'services.feature2.desc': 'Conectamos las herramientas que ya usás para que la información deje de viajar a mano.',
      'services.feature3.title': 'Diagnóstico y estrategia',
      'services.feature3.desc': 'Detectamos cuellos de botella y definimos qué conviene construir antes de invertir.',
      'services.feature4.title': 'Plataformas digitales',
      'services.feature4.desc': 'Productos web y SaaS sólidos, claros y preparados para crecer con tu operación.',
      'services.feature5.title': 'Software a medida',
      'services.feature5.desc': 'Construimos la herramienta que tu proceso necesita cuando las soluciones genéricas ya no alcanzan.',
      'services.feature6.title': 'Soporte y evolución',
      'services.feature6.desc': 'Mantenemos, medimos y mejoramos el sistema para que no quede obsoleto después del lanzamiento.',
      'services.closing': 'No empezamos por la tecnología. Empezamos por lo que te está frenando.',
      'services.cta': 'Contanos el problema',
      'process.eyebrow': 'Cómo trabajamos',
      'process.title': 'Nos enfocamos estratégicamente <span>en cada paso.</span>',
      'process.step1.title': 'Exploración estratégica',
      'process.step1.desc': 'Analizamos tu operación, detectamos oportunidades y definimos objetivos claros antes de proponer una solución.',
      'process.step2.title': 'Diseño de solución',
      'process.step2.desc': 'Traducimos el problema en una arquitectura clara, priorizada y lista para validar con tu equipo.',
      'process.step3.title': 'Desarrollo y entrega',
      'process.step3.desc': 'Construimos por etapas, mostramos avances y medimos cada decisión contra el objetivo definido.',
      'process.step4.title': 'Acompañamiento',
      'process.step4.desc': 'Lanzamos, monitoreamos y mejoramos para que la solución siga creciendo junto con tu negocio.',
      'contact.eyebrow': 'Empecemos',
      'contact.title': '¿Tenés algo por resolver? <span>Hablemos.</span>',
      'contact.subtitle': 'Escribinos por WhatsApp o email. Te respondemos con una primera mirada clara, sin vueltas.',
      'contact.whatsapp': 'WhatsApp',
      'contact.whatsapp-sub': 'Abrir conversación',
      'contact.email': 'Email',
      'contact.email-sub': 'neadevar@gmail.com',
      'footer.copyright': '© ' + new Date().getFullYear() + ' Neadev. Todos los derechos reservados.',
      'seo.title': 'Neadev — Resolvemos problemas con software',
      'seo.description': 'Agencia técnica de software. Transformamos problemas complejos en soluciones robustas, escalables y mantenibles.',
      'jsonld.name': 'Neadev',
      'jsonld.description': 'Agencia técnica de resolución de problemas con software.',
    },
    en: {
      'nav.servicios': 'Services',
      'nav.proceso': 'Process',
      'nav.contacto': 'Contact',
      'nav.empezar': 'Let’s talk',
      'theme.toggle': 'Toggle light mode',
      'lang.toggle': 'ES',
      'hero.title': 'We build what your business needs. <span class="text-primary-500">Not what is trending.</span>',
      'hero.subtitle': '<span class="text-primary-500">Automation</span>, <span class="text-primary-500">integration</span>, <span class="text-primary-500">digitalization</span>. We analyze where your operation slows down, structure the problem, and build a solution your team can use and maintain.',
      'hero.cta': 'Start a project',
      'hero.secundario': 'See what we do',
      'hero.stat1': 'Projects from $25k',
      'hero.stat2': 'Reply in 24 hrs',
      'hero.stat3': 'No commitment',
      'services.eyebrow': 'What we do',
      'services.title': 'We drive ideas that <span>make a difference.</span>',
      'services.subtitle': 'Six concrete ways to remove manual work and turn it into systems your team can actually use.',
      'services.feature1.title': 'AI automation',
      'services.feature1.desc': 'Chatbots, assistants, and workflows that handle repetitive tasks without adding complexity to your team.',
      'services.feature2.title': 'Integrations and processes',
      'services.feature2.desc': 'We connect the tools you already use so information no longer needs to move by hand.',
      'services.feature3.title': 'Diagnosis and strategy',
      'services.feature3.desc': 'We detect bottlenecks and define what is worth building before you invest.',
      'services.feature4.title': 'Digital platforms',
      'services.feature4.desc': 'Solid, clear web products and SaaS platforms prepared to grow with your operation.',
      'services.feature5.title': 'Custom software',
      'services.feature5.desc': 'We build the tool your process needs when generic solutions are no longer enough.',
      'services.feature6.title': 'Support and evolution',
      'services.feature6.desc': 'We maintain, measure, and improve the system so it does not become obsolete after launch.',
      'services.closing': 'We do not start with technology. We start with what is slowing you down.',
      'services.cta': 'Tell us the problem',
      'process.eyebrow': 'How we work',
      'process.title': 'We focus strategically <span>on every step.</span>',
      'process.step1.title': 'Strategic exploration',
      'process.step1.desc': 'We analyze your operation, find opportunities, and define clear goals before proposing a solution.',
      'process.step2.title': 'Solution design',
      'process.step2.desc': 'We turn the problem into a clear, prioritized architecture ready to validate with your team.',
      'process.step3.title': 'Development and delivery',
      'process.step3.desc': 'We build in stages, share progress, and measure every decision against the defined objective.',
      'process.step4.title': 'Ongoing support',
      'process.step4.desc': 'We launch, monitor, and improve so the solution keeps growing alongside your business.',
      'contact.eyebrow': 'Let’s begin',
      'contact.title': 'Something you need to solve? <span>Let’s talk.</span>',
      'contact.subtitle': 'Message us on WhatsApp or email. We will reply with a clear first perspective, no runaround.',
      'contact.whatsapp': 'WhatsApp',
      'contact.whatsapp-sub': 'Open conversation',
      'contact.email': 'Email',
      'contact.email-sub': 'neadevar@gmail.com',
      'footer.copyright': '© ' + new Date().getFullYear() + ' Neadev. All rights reserved.',
      'seo.title': 'Neadev — We solve problems with software',
      'seo.description': 'Technical software agency. We turn complex problems into robust, scalable, maintainable solutions.',
      'jsonld.name': 'Neadev',
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
