// ============================================================
//  Mis Eventos · SENA Distrito Capital — interacciones
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
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
    newsletterMsg.textContent = "¡Gracias! Te avisaremos del próximo evento.";
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
