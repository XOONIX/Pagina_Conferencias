// ============================================================
//  Mis Eventos · SENA Distrito Capital — interacciones
// ============================================================

/* ============================================================
   Internacionalización (Español / Inglés)
   ============================================================ */
const I18N = {
  es: {
    /* ----- Navegación / marca ----- */
    brand_title: "Conferencias",
    nav_home: "Inicio",
    nav_events: "Eventos",
    nav_Colombia: "Colombia 5.0",
    nav_createx: "Createx",
    nav_contact: "Contacto",
    lang_label: "EN",
    lang_aria: "Cambiar idioma a inglés",

    /* ----- Pie de página (común) ----- */
    ft_about: "Página de exposición de las conferencias Colombia 5.0 y Createx 2026, creada como evidencia de formación del SENA Distrito Capital.",
    ft_nav_title: "Navegación",
    ft_nav_home: "Inicio",
    ft_nav_events: "Eventos",
    ft_nav_Colombia: "Colombia 5.0",
    ft_nav_createx: "Createx 2026",
    ft_contact_title: "Contacto",
    ft_newsletter_title: "Boletín",
    ft_newsletter_text: "Recibe novedades de próximos eventos.",
    ft_email_ph: "Tu correo electrónico",
    ft_copyright: "Conferencias · SENA Distrito Capital. Todos los derechos reservados.",
    ft_made_1: "Hecho con",
    ft_made_2: "para mi formación.",
    js_newsletter_thanks: "¡Gracias! Te avisaremos del próximo evento.",

    /* ----- Pie de página · contacto (índice) ----- */
    ix_hours: "Lun a Vie · 7:00 a.m. - 6:00 p.m. via Whatsapp",
    /* ----- Pie de página · contacto (artículos) ----- */
    ar_hours: "Lun a Vie · 7:00 a.m. - 6:00 p.m.",

    /* ----- index.html ----- */
    page_title_index: "Conferencias · SENA Distrito Capital",
    hero_eyebrow: "Bogotá D.C. · Colombia",
    hero_title: 'Dos conferencias, una misma <span>pasión por aprender</span>',
    hero_subtitle: 'Una bitácora visual de las dos conferencias que viví como aprendiz del SENA en Corferias: <strong>Colombia 5.0</strong> (tecnología e innovación) y <strong>Createx 2026</strong> (el sistema moda). Conoce los momentos, aprendizajes y la energía de cada encuentro.',
    hero_btn_events: "Ver eventos",
    hero_btn_contact: "Contáctame",
    stat_events: "Eventos",
    stat_hours: "Horas vividas",
    stat_people: "Personas conocidas",
    ev_pill: "Galería de experiencias",
    ev_title: "Las conferencias a las que asistí",
    ev_lead: 'El SENA ha participado en varias conferencias de tecnología, innovación y emprendimiento. Estas son las dos que viví. Haz clic en “Ver más” para leer la crónica completa.',
    card_btn_more: "Ver más",
    card_co_tag: "Tecnología",
    card_date: "Corferias, Bogotá D.C.",
    card_co_text: 'Tecnología con corazón: el encuentro nacional donde la innovación se encuentra con el propósito social. IA, ciberseguridad, Web3 y hackatones bajo la premisa de la “Sociedad 5.0”.',
    card_co_place: "Innovación y emprendimiento",
    co_chip1: "IA",
    co_chip2: "Ciberseguridad",
    co_chip3: "Web3",
    co_chip4: "Hackatones",
    card_cx_tag: "Sistema Moda",
    card_cx_text: "Más allá de las pasarelas: cómo se construye la moda desde el hilo. Sportswear, maquinaria, impresión DTF y automatización en la cadena de suministro del sistema moda colombiano.",
    card_cx_place: "8.ª edición · Sistema Moda",
    cx_chip1: "Sportswear",
    cx_chip2: "DTF",
    cx_chip3: "Textil",
    cx_chip4: "Automatización",
    strip1_h: "Aprendizaje",
    strip1_p: "Apliqué lo visto en clase en escenarios reales.",
    strip2_h: "Networking",
    strip2_p: "Conocí aprendices, instructores y empresas.",
    strip3_h: "Recuerdos",
    strip3_p: "Momentos que quedan para la bitácora.",
    strip4_h: "Crecimiento",
    strip4_p: "Más motivación para seguir formándome.",

    /* ----- common breadcrumb / nav ----- */
    breadcrumb_home: "Inicio",

    /* ----- Colombia.html ----- */
    page_title_colombia: "Colombia 5.0 · Conferencias SENA",
    co_breadcrumb: "Colombia 5.0",
    co_h1: "Tecnología con corazón",
    co_h2: "Lo que viví en Colombia 5.0 y el futuro digital del país",
    co_meta1: "Corferias, Bogotá D.C.",
    co_meta2: "Tecnología e innovación",
    co_meta3: "Sociedad 5.0",
    co_lead: 'Asistir al encuentro nacional de Colombia 5.0 en Corferias cambia por completo la perspectiva sobre la tecnología. Este no es un evento corporativo frío; es un espacio donde la innovación se encuentra con el propósito social. Bajo la premisa de la "Sociedad 5.0", me quedó claro que el verdadero avance digital de Colombia no se mide solo en la velocidad de la red, sino en cómo transforma vidas y genera soberanía tecnológica.',
    co_fig1: "Recorrido por los espacios del encuentro Colombia 5.0 en Corferias.",
    co_h3_1: "Inteligencia Artificial y Ciberseguridad en el día a día",
    co_p1: "Uno de los ejes más fuertes del evento fue la descentralización del conocimiento en IA y la seguridad digital. Pude presenciar paneles increíbles que abordaron desde el uso ético de algoritmos hasta estrategias prácticas para blindar nuestra identidad en la red. Espacios como la iniciativa de CiberPaz demostraron que la alfabetización digital y la creación de entornos virtuales seguros son prioridades urgentes para los ciudadanos del país.",
    co_fig2: "La iniciativa CiberPaz: alfabetización digital y entornos virtuales seguros.",
    co_h3_2: "El despliegue de las tecnologías Web3 y el software libre",
    co_p2: "Para quienes seguimos de cerca el desarrollo de internet, la zona de tecnologías emergentes fue una mina de oro. El evento puso sobre la mesa la importancia del software libre como pilar fundamental para construir una verdadera soberanía tecnológica. Además, las discusiones sobre Web3 evidenciaron que el ecosistema digital colombiano está madurando rápidamente hacia modelos de economía digital más transparentes y colaborativos.",
    co_fig3: "Charlas sobre Web3, software libre y soberanía tecnológica.",
    co_h3_3: "El poder de las Hackatones y el Talento Regional",
    co_p3: "Lo más emocionante de recorrer el evento fue ver la vibrante energía de las Hackatones de Colombia 5.0. Equipos de jóvenes programadores, estudiantes y creativos compitiendo en vivo para diseñar soluciones tecnológicas destinadas a resolver problemáticas reales de los territorios, desde alertas tempranas ambientales hasta conectividad comunitaria. Esto demostró que el talento digital colombiano está listo para competir globalmente.",
    co_fig4: "Equipos compitiendo en vivo en las hackatones del evento.",
    co_closing: "Colombia 5.0 me dejó una gran lección: el futuro digital de nuestro país ya no se espera, se construye con sentido humano. Salí de la feria con la certeza de que la tecnología en Colombia dejó de ser un lujo de pocos para convertirse en la herramienta más poderosa de equidad, productividad y transformación social. Y mucho más.",
    co_nav_back: "Volver al inicio",
    co_nav_next: "Ver Createx 2026",
    ph_event_img: "Imagen del evento",
    ph_ciberpaz: "Iniciativa CiberPaz",
    ph_conference: "Conferencia",
    ph_hackathon: "Hackatón",

    /* ----- createx.html ----- */
    page_title_createx: "Createx 2026 · Conferencias SENA",
    cx_breadcrumb: "Createx 2026",
    cx_h1: "Más allá de las pasarelas",
    cx_h2: "Lo que Createx 2026 nos enseñó sobre el futuro del Sistema Moda",
    cx_meta1: "Corferias, Bogotá D.C.",
    cx_meta2: "Sistema Moda · 8.ª edición",
    cx_meta3: "Cadena de suministro",
    cx_lead: "Asistir a Createx 2026 no se trata solo de ver prendas terminadas, sino de entender cómo se construye la moda desde el hilo. En su octava edición en Corferias, la feria consolidó a Bogotá como el epicentro de la cadena de suministro del país. Esta experiencia me dejó claro que el verdadero motor de la industria textil está en la tecnología y la optimización de los procesos.",
    cx_fig1: "Createx 2026 en Corferias, epicentro del sistema moda.",
    cx_video1: '"Es la hora": recorrido en video por la feria.',
    cx_video_fallback: "Tu navegador no soporta la reproducción de video.",
    cx_h3_1: "El auge del Sportswear y el fenómeno global",
    cx_p1: "Una de las sorpresas más grandes del evento fue el protagonismo absoluto de la ropa deportiva. Con el mercado de sportswear disparado y la cercanía de la Copa Mundial 2026, las marcas locales están apostando fuertemente por textiles de alto rendimiento. Pude ver de primera mano innovaciones en procesos de sublimación y tecnologías de estampación avanzada orientadas a tendencias masivas como el blokecore.",
    cx_fig2: "Desfile de propuestas de sportswear y textiles de alto rendimiento.",
    cx_video2: "Video de la pasarela durante Createx 2026.",
    cx_h3_2: "Maquinaria, DTF y Automatización",
    cx_p2: "Para los creadores y confeccionistas, el corazón del evento estuvo en las demostraciones en vivo de impresión industrial. La tecnología de impresión directa a film (DTF) avanzada y los sistemas de bordado automatizado prometen democratizar la producción, permitiendo que marcas emergentes compitan en calidad con grandes superficies.",
    cx_fig3: "Demostraciones en vivo de impresión DTF y bordado automatizado.",
    cx_p3: "Createx 2026 me demostró que para diseñar el futuro de la moda no basta con tener una buena idea estética; es obligatorio aliarse con la técnica y el desarrollo sostenible. El sistema moda colombiano está más fuerte, integrado y automatizado que nunca.",
    cx_fig4: "El sistema moda colombiano: integrado, automatizado y sostenible.",
    cx_closing: "Y mucho más.",
    cx_nav_back: "Ver Colombia 5.0",
    cx_nav_next: "Volver al inicio",
    ph_fair: "Feria Createx",
    ph_video: "Video del evento",
    ph_runway: "Pasarela",
    ph_runway_video: "Video de la pasarela",
    ph_machinery: "Stand de maquinaria",
    ph_fashion_stand: "Stand de moda",
  },

  en: {
    /* ----- Navigation / brand ----- */
    brand_title: "Conferences",
    nav_home: "Home",
    nav_events: "Events",
    nav_colombia: "Colombia 5.0",
    nav_createx: "Createx",
    nav_contact: "Contact",
    lang_label: "ES",
    lang_aria: "Switch language to Spanish",

    /* ----- Footer (shared) ----- */
    ft_about: "A showcase page for the Colombia 5.0 and Createx 2026 conferences, created as training evidence for SENA Distrito Capital.",
    ft_nav_title: "Navigation",
    ft_nav_home: "Home",
    ft_nav_events: "Events",
    ft_nav_colombia: "Colombia 5.0",
    ft_nav_createx: "Createx 2026",
    ft_contact_title: "Contact",
    ft_newsletter_title: "Newsletter",
    ft_newsletter_text: "Get news about upcoming events.",
    ft_email_ph: "Your email address",
    ft_copyright: "Conferences · SENA Distrito Capital. All rights reserved.",
    ft_made_1: "Made with",
    ft_made_2: "for my training.",
    js_newsletter_thanks: "Thank you! We'll let you know about the next event.",

    /* ----- Footer · contact (index) ----- */
    ix_hours: "Mon to Fri · 7:00 a.m. - 6:00 p.m. via WhatsApp",
    /* ----- Footer · contact (articles) ----- */
    ar_hours: "Mon to Fri · 7:00 a.m. - 6:00 p.m.",

    /* ----- index.html ----- */
    page_title_index: "Conferences · SENA Distrito Capital",
    hero_eyebrow: "Bogotá D.C. · Colombia",
    hero_title: 'Two conferences, one shared <span>passion for learning</span>',
    hero_subtitle: 'A visual logbook of the two conferences I attended as a SENA apprentice at Corferias: <strong>Colombia 5.0</strong> (technology and innovation) and <strong>Createx 2026</strong> (the fashion system). Discover the moments, lessons and energy of each event.',
    hero_btn_events: "View events",
    hero_btn_contact: "Contact me",
    stat_events: "Events",
    stat_hours: "Hours lived",
    stat_people: "People met",
    ev_pill: "Experience gallery",
    ev_title: "The conferences I attended",
    ev_lead: 'SENA has taken part in several technology, innovation and entrepreneurship conferences. These are the two I experienced. Click “Read more” to read the full story.',
    card_btn_more: "Read more",
    card_co_tag: "Technology",
    card_date: "Corferias, Bogotá D.C.",
    card_co_text: 'Technology with heart: the national gathering where innovation meets social purpose. AI, cybersecurity, Web3 and hackathons under the premise of "Society 5.0".',
    card_co_place: "Innovation and entrepreneurship",
    co_chip1: "AI",
    co_chip2: "Cybersecurity",
    co_chip3: "Web3",
    co_chip4: "Hackathons",
    card_cx_tag: "Fashion System",
    card_cx_text: "Beyond the runways: how fashion is built from the thread up. Sportswear, machinery, DTF printing and automation across the supply chain of the Colombian fashion system.",
    card_cx_place: "8th edition · Fashion System",
    cx_chip1: "Sportswear",
    cx_chip2: "DTF",
    cx_chip3: "Textile",
    cx_chip4: "Automation",
    strip1_h: "Learning",
    strip1_p: "I applied what I learned in class to real-world scenarios.",
    strip2_h: "Networking",
    strip2_p: "I met apprentices, instructors and companies.",
    strip3_h: "Memories",
    strip3_p: "Moments saved for the logbook.",
    strip4_h: "Growth",
    strip4_p: "More motivation to keep training.",

    /* ----- common breadcrumb / nav ----- */
    breadcrumb_home: "Home",

    /* ----- Colombia.html ----- */
    page_title_colombia: "Colombia 5.0 · SENA Conferences",
    co_breadcrumb: "Colombia 5.0",
    co_h1: "Technology with heart",
    co_h2: "What I experienced at Colombia 5.0 and the country's digital future",
    co_meta1: "Corferias, Bogotá D.C.",
    co_meta2: "Technology and innovation",
    co_meta3: "Society 5.0",
    co_lead: 'Attending the national Colombia 5.0 gathering at Corferias completely changes your perspective on technology. This is not a cold corporate event; it is a space where innovation meets social purpose. Under the premise of "Society 5.0", it became clear to me that Colombia\'s true digital progress is not measured only by network speed, but by how it transforms lives and builds technological sovereignty.',
    co_fig1: "A tour through the spaces of the Colombia 5.0 gathering at Corferias.",
    co_h3_1: "Artificial Intelligence and Cybersecurity in everyday life",
    co_p1: "One of the strongest themes of the event was the decentralization of knowledge in AI and digital security. I witnessed incredible panels that ranged from the ethical use of algorithms to practical strategies for protecting our identity online. Spaces like the CiberPaz initiative showed that digital literacy and the creation of safe virtual environments are urgent priorities for the country's citizens.",
    co_fig2: "The CiberPaz initiative: digital literacy and safe virtual environments.",
    co_h3_2: "The rollout of Web3 technologies and free software",
    co_p2: "For those of us who closely follow the development of the internet, the emerging technologies zone was a gold mine. The event highlighted the importance of free software as a fundamental pillar for building true technological sovereignty. In addition, the discussions about Web3 showed that the Colombian digital ecosystem is maturing rapidly toward more transparent and collaborative digital economy models.",
    co_fig3: "Talks on Web3, free software and technological sovereignty.",
    co_h3_3: "The power of Hackathons and regional talent",
    co_p3: "The most exciting part of touring the event was seeing the vibrant energy of the Colombia 5.0 Hackathons. Teams of young programmers, students and creatives competing live to design technological solutions to solve real problems in the regions, from early environmental warnings to community connectivity. This showed that Colombian digital talent is ready to compete globally.",
    co_fig4: "Teams competing live in the event's hackathons.",
    co_closing: "Colombia 5.0 left me with a great lesson: our country's digital future is no longer something to wait for, it is built with a human sense. I left the fair certain that technology in Colombia is no longer a luxury for the few but has become the most powerful tool for equity, productivity and social transformation. And much more.",
    co_nav_back: "Back to home",
    co_nav_next: "View Createx 2026",
    ph_event_img: "Event image",
    ph_ciberpaz: "CiberPaz initiative",
    ph_conference: "Conference",
    ph_hackathon: "Hackathon",

    /* ----- createx.html ----- */
    page_title_createx: "Createx 2026 · SENA Conferences",
    cx_breadcrumb: "Createx 2026",
    cx_h1: "Beyond the runways",
    cx_h2: "What Createx 2026 taught us about the future of the Fashion System",
    cx_meta1: "Corferias, Bogotá D.C.",
    cx_meta2: "Fashion System · 8th edition",
    cx_meta3: "Supply chain",
    cx_lead: "Attending Createx 2026 is not just about seeing finished garments, but about understanding how fashion is built from the thread up. In its eighth edition at Corferias, the fair established Bogotá as the epicenter of the country's supply chain. This experience made it clear to me that the real engine of the textile industry lies in technology and process optimization.",
    cx_fig1: "Createx 2026 at Corferias, the epicenter of the fashion system.",
    cx_video1: '"It\'s time": a video tour of the fair.',
    cx_video_fallback: "Your browser does not support video playback.",
    cx_h3_1: "The rise of Sportswear and the global phenomenon",
    cx_p1: "One of the biggest surprises of the event was the absolute prominence of sportswear. With the sportswear market booming and the 2026 World Cup approaching, local brands are betting heavily on high-performance textiles. I saw firsthand innovations in sublimation processes and advanced printing technologies aimed at mass trends such as blokecore.",
    cx_fig2: "A showcase of sportswear proposals and high-performance textiles.",
    cx_video2: "Video of the runway during Createx 2026.",
    cx_h3_2: "Machinery, DTF and Automation",
    cx_p2: "For creators and garment makers, the heart of the event was the live demonstrations of industrial printing. Advanced direct-to-film (DTF) printing technology and automated embroidery systems promise to democratize production, allowing emerging brands to compete on quality with large retailers.",
    cx_fig3: "Live demonstrations of DTF printing and automated embroidery.",
    cx_p3: "Createx 2026 showed me that to design the future of fashion, having a good aesthetic idea is not enough; it is essential to partner with technique and sustainable development. The Colombian fashion system is stronger, more integrated and more automated than ever.",
    cx_fig4: "The Colombian fashion system: integrated, automated and sustainable.",
    cx_closing: "And much more.",
    cx_nav_back: "View Colombia 5.0",
    cx_nav_next: "Back to home",
    ph_fair: "Createx fair",
    ph_video: "Event video",
    ph_runway: "Runway",
    ph_runway_video: "Runway video",
    ph_machinery: "Machinery stand",
    ph_fashion_stand: "Fashion stand",
  },
};

const LANG_STORAGE_KEY = "site-lang";

function getStoredLang() {
  const stored = localStorage.getItem(LANG_STORAGE_KEY);
  return stored === "en" || stored === "es" ? stored : "es";
}

let currentLang = getStoredLang();

function applyLang(lang) {
  const dict = I18N[lang] || I18N.es;
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria-label");
    if (dict[key] !== undefined) el.setAttribute("aria-label", dict[key]);
  });

  localStorage.setItem(LANG_STORAGE_KEY, lang);
}

function t(key) {
  const dict = I18N[currentLang] || I18N.es;
  return dict[key] !== undefined ? dict[key] : key;
}

document.addEventListener("DOMContentLoaded", () => {
  /* ---------- Selector de idioma ---------- */
  applyLang(currentLang);
  const langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      applyLang(currentLang === "es" ? "en" : "es");
    });
  }

  /* ---------- Menú móvil ---------- */
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  const closeMenu = () => {
    navMenu.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.querySelectorAll(".nav-link").forEach((link) =>
    link.addEventListener("click", closeMenu)
  );

  /* ---------- Header sticky + botón "subir" ---------- */
  const toTop = document.getElementById("toTop");
  const onScroll = () => {
    document.body.classList.toggle("scrolled", window.scrollY > 30);
    toTop.classList.toggle("show", window.scrollY > 400);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  toTop.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );

  /* ---------- Resaltar enlace activo según sección ---------- */
  const sections = document.querySelectorAll("section[id], header[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  const linkFor = (id) =>
    document.querySelector(`.nav-link[href="#${id}"]`);

  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((l) => l.classList.remove("active"));
          const link = linkFor(entry.target.id);
          if (link) link.classList.add("active");
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => spy.observe(s));

  /* ---------- Reveal al hacer scroll ---------- */
  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  /* ---------- Contador animado en las estadísticas ---------- */
  const counters = document.querySelectorAll(".hero__stats .num");
  const animateCount = (el) => {
    const target = Number(el.dataset.count) || 0;
    const duration = 1400;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const countObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );
  counters.forEach((c) => countObserver.observe(c));

  /* ---------- Modales ---------- */
  const openModal = (id) => {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };
  const closeModal = (modal) => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  document.querySelectorAll("[data-modal]").forEach((btn) =>
    btn.addEventListener("click", () => openModal(btn.dataset.modal))
  );
  document.querySelectorAll(".modal [data-close]").forEach((el) =>
    el.addEventListener("click", () => closeModal(el.closest(".modal")))
  );
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal.open").forEach(closeModal);
    }
  });

  /* ---------- Boletín ---------- */
  const newsletter = document.getElementById("newsletter");
  const newsletterMsg = document.getElementById("newsletterMsg");
  if (newsletter) newsletter.addEventListener("submit", (e) => {
    e.preventDefault();
    newsletterMsg.textContent = t("js_newsletter_thanks");
    newsletter.reset();
    setTimeout(() => (newsletterMsg.textContent = ""), 5000);
  });

  /* ---------- Fallback de imágenes/videos faltantes ---------- */
  document.querySelectorAll(".figure > img, .figure > video").forEach((media) => {
    const markMissing = () => media.closest(".figure")?.classList.add("is-missing");
    media.addEventListener("error", markMissing, true);
    if (media.tagName === "IMG" && media.complete && media.naturalWidth === 0) markMissing();
  });

  /* ---------- Año dinámico en el footer ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
