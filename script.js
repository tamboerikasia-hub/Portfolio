/* ---------- Project gallery ---------- */
const projects = {
  web: {
    title: "🌐 Web Design",
    items: [
      ["2022.png", "Athalia Travel and Tour Homepage", "A landing page for a travel agency recommending destinations in Asia, Europe, and North America, with service, places, and booking sections."],
      ["2023.png", "Tic Tac Toe Quiz Game", "A neon-themed Tic Tac Toe game built with JavaScript. Players can add 5 to 30 quiz questions, play with or without quizzes, and turn sound on or off."],
      ["2024.png", "Park Wise Parking Management System", "A welcome page for a parking system where users find, reserve, and monitor parking spots, with an animated car."],
      ["2025.png", "A3's Takoyaki & Burger POS", "A point-of-sale screen with menu categories, bundle promos, a dine-in and take-out order panel, a running total, and admin and sign-out controls."],
      ["2026.png", "Interactive Intro Card", "A purple and gold self-introduction card with a glowing border and a click-to-continue prompt."],
      ["2026_1.PNG", "Personal Portfolio Website", "This portfolio: a responsive site that showcases my skills, projects, certificates, and services."]
    ]
  },
  graphic: {
    title: "🎨 Graphic Design",
    items: [
      ["1.jpg", "Bitter Sweet Cafe Logo", "A café logo made in Canva, pairing script lettering with a coffee cup and cupcake illustration."],
      ["2.jpg", "SweetMonday Studio Logo", "A photography studio logo with a dark background, spaced lettering, and a camera illustration."],
      ["3.png", "Kaime & Co. Clothing Line Logo", "A clothing brand logo combining a serif wordmark, a script tagline, and a peach brush stroke."]
    ]
  },
  video: {
    title: "🎬 Video Editing",
    items: [
      ["1st.jpg", "Jewelry Showcase Video", "A product video presenting a crystal pendant and earring set on satin."],
      ["2nd.jpg", "Gugo Hair Care Video", "A product video for a hairfall-defense shampoo and conditioner."],
      ["3rd.jpg", "Gifty Bouquet Promo", "A story-style promo for handmade ribbon bouquets, made with cutout effects."]
    ]
  }
};

const projectModal = document.getElementById("projectModal");
const modalBody = document.getElementById("modalBody");
const projectClose = projectModal.querySelector(".close-btn");

function openCategory(category) {
  const group = projects[category];
  if (!group) return;
  modalBody.innerHTML =
    `<h2>${group.title}</h2>` +
    group.items.map(([src, title, text]) => `
      <div class="project-item">
        <img src="${src}" alt="${title}">
        <h3>${title}</h3>
        <p>${text}</p>
      </div>`).join("");
  projectModal.style.display = "flex";
  document.body.style.overflow = "hidden";
  projectClose.focus();
}

function closeProject() { projectModal.style.display = "none"; document.body.style.overflow = ""; }
projectClose.addEventListener("click", closeProject);
projectModal.addEventListener("click", e => { if (e.target === projectModal) closeProject(); });

/* ---------- Certificate preview ---------- */
const certModal = document.getElementById("certificateModal");
const certPreview = document.getElementById("certificatePreview");
const certClose = certModal.querySelector(".certificate-close");

function openCertificate(img) {
  certPreview.src = img.src;
  certPreview.alt = img.alt;
  certModal.style.display = "flex";
  document.body.style.overflow = "hidden";
  certClose.focus();
}
function closeCertificate() { certModal.style.display = "none"; document.body.style.overflow = ""; }

document.querySelectorAll(".certificate-card").forEach(card => {
  const img = card.querySelector("img");
  card.addEventListener("click", () => openCertificate(img));
  card.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openCertificate(img); }
  });
});
certClose.addEventListener("click", closeCertificate);
certModal.addEventListener("click", e => { if (e.target === certModal) closeCertificate(); });

document.addEventListener("keydown", e => {
  if (e.key === "Escape") { closeProject(); closeCertificate(); }
});

/* ---------- Mobile menu ---------- */
const navToggle = document.querySelector(".nav-toggle");
const navList = document.getElementById("nav-links");

navToggle.addEventListener("click", () => {
  const open = navList.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open);
  navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});
navList.addEventListener("click", e => {
  if (e.target.closest("a")) {
    navList.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

/* ---------- Highlight the current section in the nav ---------- */
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section[id]");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
    });
  });
}, { rootMargin: "-40% 0px -55% 0px" });

sections.forEach(s => observer.observe(s));

/* ---------- Nav clicks: scroll so the section's content sits in the center ---------- */
const topNav = document.querySelector(".navbar");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function getBounds(target) {
  const rect = target.getBoundingClientRect();
  let top = rect.top + window.scrollY;
  let bottom = rect.bottom + window.scrollY;
  // "Career Objective" is a small heading, so include its paragraph in the centering
  if (target.id === "career-title") {
    const text = target.nextElementSibling;
    if (text) bottom = text.getBoundingClientRect().bottom + window.scrollY;
  }
  return { top, height: bottom - top };
}

function scrollToCenter(target) {
  if (target.id === "home") {
    window.scrollTo({ top: 0, behavior: reduceMotion.matches ? "auto" : "smooth" });
    return;
  }
  const navBottom = topNav.getBoundingClientRect().bottom;
  const visible = window.innerHeight - navBottom;
  const { top, height } = getBounds(target);
  // short sections are centered in the space below the navbar; tall ones start just under it
  const gap = height < visible ? (visible - height) / 2 : 16;
  const y = Math.max(0, top - navBottom - gap);
  window.scrollTo({ top: y, behavior: reduceMotion.matches ? "auto" : "smooth" });
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    // wait a frame so the mobile menu has closed and the navbar height is final
    requestAnimationFrame(() => scrollToCenter(target));
  });
});
