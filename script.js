/* =============================================
   PROJECT DATA
   ============================================= */
const projects = {
  web: {
    title: 'Web Design Projects',
    items: [
      {
        src: '2022.png',
        title: 'Athalia Travel & Tour',
        desc: 'A landing page for a travel agency with destination discovery, services, and booking sections.',
        tags: ['HTML5', 'CSS3', 'Responsive Design']
      },
      {
        src: '2023.png',
        title: 'Tic Tac Toe Quiz Game',
        desc: 'Neon-themed game built with JavaScript. Supports custom question banks, sound toggle, and 2-player mode.',
        tags: ['JavaScript', 'Web Audio API', 'Game Logic']
      },
      {
        src: '2024.png',
        title: 'Park Wise Parking System',
        desc: 'Web portal for locating, reserving, and monitoring parking spots with animated UI feedback.',
        tags: ['HTML5', 'CSS Animations', 'UI/UX']
      },
      {
        src: '2025.png',
        title: "A3's Takoyaki & Burger POS",
        desc: 'Point-of-sale screen with menu categories, order panel, running total, and admin controls.',
        tags: ['JavaScript', 'DOM', 'CSS Grid']
      },
      {
        src: '2026.png',
        title: 'Interactive Intro Card',
        desc: 'Animated self-introduction card with glowing border and click-to-continue interaction.',
        tags: ['CSS Animations', 'JavaScript']
      },
      {
        src: '2026_1.PNG',
        title: 'Personal Portfolio',
        desc: 'This portfolio — responsive, accessible, and built from scratch with vanilla HTML, CSS, and JS.',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'Accessible']
      }
    ]
  },
  graphic: {
    title: 'Graphic Design Projects',
    items: [
      {
        src: '1.jpg',
        title: 'Bitter Sweet Cafe Logo',
        desc: 'Café logo pairing script lettering with a coffee cup and cupcake illustration, made in Canva.',
        tags: ['Canva', 'Logo Design', 'Branding']
      },
      {
        src: '2.jpg',
        title: 'SweetMonday Studio Logo',
        desc: 'Photography studio logo with dark background, spaced lettering, and camera illustration.',
        tags: ['Brand Identity', 'Minimalism']
      },
      {
        src: '3.png',
        title: 'Kaime & Co. Clothing Logo',
        desc: 'Clothing brand logo combining a serif wordmark, script tagline, and peach brush stroke.',
        tags: ['Fashion Branding', 'Typography']
      }
    ]
  },
  video: {
    title: 'Video Editing Projects',
    items: [
      {
        src: '1st.jpg',
        title: 'Jewelry Showcase Video',
        desc: 'Product video presenting a crystal pendant and earring set on satin cloth.',
        tags: ['Product Video', 'Color Grading']
      },
      {
        src: '2nd.jpg',
        title: 'Gugo Hair Care Video',
        desc: 'Commercial product video for a hairfall-defense shampoo and conditioner.',
        tags: ['CapCut', 'Transitions', 'Commercial']
      },
      {
        src: '3rd.jpg',
        title: 'Gifty Bouquet Promo',
        desc: 'Story-style promo for handmade ribbon bouquets using cutout effects.',
        tags: ['Storytelling', 'Social Media', 'Cutout FX']
      }
    ]
  }
};

/* =============================================
   PROJECT MODAL
   ============================================= */
const projectModal = document.getElementById('projectModal');
const modalBody    = document.getElementById('modalBody');
const modalClose   = projectModal.querySelector('.modal-close');

function openCategory(category) {
  const group = projects[category];
  if (!group) return;

  modalBody.innerHTML =
    `<h2>${group.title}</h2>` +
    group.items.map(item => `
      <div class="proj-item">
        <img src="${item.src}" alt="${item.title}" loading="lazy">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <div class="proj-tags">
          ${item.tags.map(t => `<span class="proj-tag-pill">${t}</span>`).join('')}
        </div>
      </div>`).join('');

  projectModal.hidden = false;
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

function closeProject() {
  projectModal.hidden = true;
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeProject);
projectModal.addEventListener('click', e => { if (e.target === projectModal) closeProject(); });

document.querySelectorAll('.proj-card[data-category]').forEach(btn => {
  btn.addEventListener('click', () => openCategory(btn.dataset.category));
});

/* =============================================
   CERTIFICATE LIGHTBOX
   ============================================= */
const certModal   = document.getElementById('certModal');
const certPreview = document.getElementById('certPreview');
const certClose   = certModal.querySelector('.cert-close');

function openCert(img) {
  certPreview.src = img.src;
  certPreview.alt = img.alt;
  certModal.hidden = false;
  document.body.style.overflow = 'hidden';
  certClose.focus();
}

function closeCert() {
  certModal.hidden = true;
  document.body.style.overflow = '';
}

document.querySelectorAll('.cert-card').forEach(card => {
  const img = card.querySelector('img');
  card.addEventListener('click', () => openCert(img));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openCert(img); }
  });
});

certClose.addEventListener('click', closeCert);
certModal.addEventListener('click', e => { if (e.target === certModal) closeCert(); });

/* =============================================
   ESCAPE KEY — close any open modal
   ============================================= */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeProject(); closeCert(); }
});

/* =============================================
   MOBILE NAV
   ============================================= */
const navBurger = document.getElementById('navBurger');
const navMenu   = document.getElementById('navMenu');

navBurger.addEventListener('click', () => {
  const open = navMenu.classList.toggle('open');
  navBurger.classList.toggle('open', open);
  navBurger.setAttribute('aria-expanded', open);
});

navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navBurger.classList.remove('open');
    navBurger.setAttribute('aria-expanded', 'false');
  });
});

/* =============================================
   ACTIVE NAV LINK — highlight current section
   ============================================= */
const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
const sections = document.querySelectorAll('section[id]');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
    });
  });
}, { rootMargin: '-45% 0px -50% 0px' });

sections.forEach(s => sectionObserver.observe(s));

/* =============================================
   SMOOTH SCROLL — account for fixed nav height
   ============================================= */
const navEl = document.getElementById('nav');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    requestAnimationFrame(() => {
      const navH = navEl.getBoundingClientRect().height;
      const y    = target.getBoundingClientRect().top + window.scrollY - navH - 16;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    });
  });
});
