<?php
// Central Portfolio Data Configuration for Erika Dains Tambo

$personal = [
    'name' => 'Erika Dains Tambo',
    'display_name' => 'Erika Tambo',
    'degree' => 'BS Information Technology',
    'school' => 'STI College Fairview',
    'title' => 'BSIT Student · Frontend Developer · Virtual Assistant',
    'bio_p1' => "I'm Erika Tambo, currently pursuing a Bachelor of Science in Information Technology (BSIT) at STI College Fairview with a focus on web development and UI/UX design. I build responsive, accessible websites and enjoy learning new technologies that help create meaningful digital solutions.",
    'bio_p2' => "I'm a hands-on learner who values responsibility, adaptability, and clean execution.",
    'career_goal' => "To become a skilled Web Developer and UI/UX Designer — crafting responsive, user-friendly products that make a real impact. I aim to grow through industry experience and collaborative projects.",
    'email' => 'tambo.erikadains@gmail.com',
    'github' => 'https://github.com/tamboerikasia-hub',
    'canva_showcase' => 'https://erika-dainstambo.my.canva.site/project-portfolio-showcase',
    'resume_file' => 'ErikaDainsTamboResume.pdf',
    'stats' => [
        ['num' => 'BSIT', 'label' => 'STI Fairview'],
        ['num' => '5+', 'label' => 'Web Projects'],
        ['num' => '7+', 'label' => 'Certifications']
    ]
];

$education = [
    [
        'school' => 'APEC School',
        'level' => 'High School',
        'years' => '2016 – 2020',
        'active' => false
    ],
    [
        'school' => 'Eclaro Academy',
        'level' => 'Senior High School',
        'years' => '2020 – 2022',
        'active' => false
    ],
    [
        'school' => 'AMA University',
        'level' => 'Industrial Engineering',
        'years' => 'Aug – Dec 2022',
        'active' => false
    ],
    [
        'school' => 'STI College Fairview',
        'level' => 'BS Information Technology',
        'years' => '2023 – Present',
        'active' => true
    ]
];

$projects = [
    'web' => [
        'title' => 'Web Design Projects',
        'tag' => 'Frontend & UI',
        'card_img' => '2022.png',
        'summary' => 'Responsive websites and frontend builds.',
        'items' => [
            [
                'src' => '2022.png',
                'title' => 'Athalia Travel & Tour',
                'desc' => 'A landing page for a travel agency with destination discovery, services, and booking sections.',
                'tags' => ['HTML5', 'CSS3', 'Responsive Design']
            ],
            [
                'src' => '2024.png',
                'title' => 'Park Wise Parking System',
                'desc' => 'Web portal for locating, reserving, and monitoring parking spots with animated UI feedback.',
                'tags' => ['HTML5', 'CSS Animations', 'UI/UX']
            ],
            [
                'src' => '2025.png',
                'title' => "A3's Takoyaki & Burger POS",
                'desc' => 'Point-of-sale screen with menu categories, order panel, running total, and admin controls.',
                'tags' => ['JavaScript', 'DOM', 'CSS Grid']
            ],
            [
                'src' => '2026.png',
                'title' => 'Interactive Intro Card',
                'desc' => 'Animated self-introduction card with glowing border and click-to-continue interaction.',
                'tags' => ['CSS Animations', 'JavaScript']
            ],
            [
                'src' => '2026_1.PNG',
                'title' => 'Personal Portfolio',
                'desc' => 'This portfolio — responsive, accessible, and built from scratch with vanilla HTML, CSS, and JS.',
                'tags' => ['HTML5', 'CSS3', 'JavaScript', 'Accessible']
            ]
        ]
    ],
    'graphic' => [
        'title' => 'Graphic Design Projects',
        'tag' => 'Branding & Identity',
        'card_img' => '2.jpg',
        'summary' => 'Logos, brand kits, and visual content.',
        'items' => [
            [
                'src' => '1.jpg',
                'title' => 'Bitter Sweet Cafe Logo',
                'desc' => 'Café logo pairing script lettering with a coffee cup and cupcake illustration, made in Canva.',
                'tags' => ['Canva', 'Logo Design', 'Branding']
            ],
            [
                'src' => '2.jpg',
                'title' => 'SweetMonday Studio Logo',
                'desc' => 'Photography studio logo with dark background, spaced lettering, and camera illustration.',
                'tags' => ['Brand Identity', 'Minimalism']
            ],
            [
                'src' => '3.png',
                'title' => 'Kaime & Co. Clothing Logo',
                'desc' => 'Clothing brand logo combining a serif wordmark, script tagline, and peach brush stroke.',
                'tags' => ['Fashion Branding', 'Typography']
            ]
        ]
    ],
    'video' => [
        'title' => 'Video Editing Projects',
        'tag' => 'Motion & Media',
        'card_img' => '1st.jpg',
        'summary' => 'Product promos and storytelling reels.',
        'items' => [
            [
                'src' => '1st.jpg',
                'title' => 'Jewelry Showcase Video',
                'desc' => 'Product video presenting a crystal pendant and earring set on satin cloth.',
                'tags' => ['Product Video', 'Color Grading']
            ],
            [
                'src' => '2nd.jpg',
                'title' => 'Gugo Hair Care Video',
                'desc' => 'Commercial product video for a hairfall-defense shampoo and conditioner.',
                'tags' => ['CapCut', 'Transitions', 'Commercial']
            ],
            [
                'src' => '3rd.jpg',
                'title' => 'Gifty Bouquet Promo',
                'desc' => 'Story-style promo for handmade ribbon bouquets using cutout effects.',
                'tags' => ['Storytelling', 'Social Media', 'Cutout FX']
            ]
        ]
    ]
];

$skills = [
    'technical' => [
        'title' => 'Technical & Web Development',
        'sub' => 'Building functional, mobile-first web applications',
        'icon' => 'bi-code-slash',
        'pills' => [
            ['icon' => 'bi-filetype-html', 'label' => 'HTML5'],
            ['icon' => 'bi-filetype-css', 'label' => 'CSS3 / SCSS'],
            ['icon' => 'bi-filetype-js', 'label' => 'JavaScript (ES6+)'],
            ['icon' => 'bi-phone', 'label' => 'Responsive UI/UX'],
            ['icon' => 'bi-bootstrap', 'label' => 'Bootstrap'],
            ['icon' => 'bi-git', 'label' => 'Git & GitHub'],
            ['icon' => 'bi-cup-hot', 'label' => 'Java Fundamentals']
        ]
    ],
    'creative' => [
        'title' => 'Virtual Assistance & Media',
        'sub' => 'Executive operations, design & communications',
        'icon' => 'bi-briefcase',
        'pills' => [
            ['icon' => 'bi-palette', 'label' => 'Graphic & Logo Design'],
            ['icon' => 'bi-film', 'label' => 'Video Editing (CapCut/Premiere)'],
            ['icon' => 'bi-calendar-check', 'label' => 'Scheduling & Time Mgmt'],
            ['icon' => 'bi-chat-dots', 'label' => 'Client Communication'],
            ['icon' => 'bi-kanban', 'label' => 'Workflow Organization'],
            ['icon' => 'bi-translate', 'label' => 'ESL / English Tutoring'],
            ['icon' => 'bi-shield-check', 'label' => 'Professional Ethics']
        ]
    ]
];

$certificates = [
    [
        'title' => 'Basics of Finance',
        'issuer' => 'HP LIFE',
        'year' => '2024',
        'img' => 'BF.jpg'
    ],
    [
        'title' => 'Cash Flow',
        'issuer' => 'HP LIFE',
        'year' => '2024',
        'img' => 'Cash_Flow.jpg'
    ],
    [
        'title' => 'Profit and Loss',
        'issuer' => 'HP LIFE',
        'year' => '2024',
        'img' => 'Profit_and_Loss.jpg'
    ],
    [
        'title' => 'Finding Funding',
        'issuer' => 'HP LIFE',
        'year' => '2024',
        'img' => 'Finding_Funding.jpg'
    ],
    [
        'title' => 'Java Fundamentals',
        'issuer' => 'Oracle Academy',
        'year' => '2024',
        'img' => 'java_fundamental.jpg'
    ],
    [
        'title' => 'Intro to Modern AI',
        'issuer' => 'Cisco NetAcad',
        'year' => '2024',
        'img' => 'Introduction_to_Modern_AI.jpg'
    ],
    [
        'title' => 'Intro to Data Science',
        'issuer' => 'Cisco NetAcad',
        'year' => '2024',
        'img' => 'Introduction_to_Data_Science.jpg'
    ]
];

$services = [
    [
        'icon' => 'bi-laptop',
        'title' => 'Web Design',
        'desc' => 'Responsive, user-friendly website designs built for every screen.'
    ],
    [
        'icon' => 'bi-palette2',
        'title' => 'Graphic Design',
        'desc' => 'Logos, brand materials, and polished visual content.'
    ],
    [
        'icon' => 'bi-camera-video',
        'title' => 'Video Editing',
        'desc' => 'Engaging edits with transitions, effects, and storytelling.'
    ],
    [
        'icon' => 'bi-headset',
        'title' => 'Virtual Assistance',
        'desc' => 'Administrative support, scheduling, and productivity tasks.'
    ],
    [
        'icon' => 'bi-chat-text',
        'title' => 'English Tutoring',
        'desc' => 'Helping learners build confidence in communication.'
    ]
];
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <meta name="theme-color" content="#fffbf7">
  <title><?= htmlspecialchars($personal['name']) ?> — Web Developer &amp; Creative Professional</title>
  <meta name="description" content="Portfolio of <?= htmlspecialchars($personal['name']) ?> — BSIT student at <?= htmlspecialchars($personal['school']) ?>. Web developer, graphic designer, and virtual assistant.">
  <meta property="og:title" content="<?= htmlspecialchars($personal['name']) ?> — Portfolio">
  <meta property="og:description" content="<?= htmlspecialchars($personal['title']) ?>">
  <meta property="og:image" content="pic1.png">

  <link rel="icon" href="ED.png" type="image/png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- NAV -->
  <nav class="nav" id="nav">
    <div class="nav-inner">
      <a href="#home" class="nav-logo"><?= htmlspecialchars($personal['display_name']) ?></a>
      <button class="nav-burger" id="navBurger" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-menu" id="navMenu" role="list">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#certificates">Certificates</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <a href="<?= htmlspecialchars($personal['resume_file']) ?>" download class="nav-cta">
            <i class="bi bi-download"></i> Resume
          </a>
        </li>
      </ul>
    </div>
  </nav>
  <!-- dim backdrop for mobile menu -->
  <div class="nav-backdrop" id="navBackdrop" aria-hidden="true"></div>

  <!-- HERO -->
  <section id="home" class="hero">
    <div class="hero-text">
      <div class="hero-status">
        <span class="status-dot"></span> Available for Web Dev &amp; VA Opportunities
      </div>
      <p class="hero-eyebrow">Hello, I'm</p>
      <h1><?= nl2br(htmlspecialchars($personal['name'])) ?></h1>
      <p class="hero-sub"><?= htmlspecialchars($personal['title']) ?></p>
      <div class="hero-actions">
        <a href="#projects" class="btn btn-dark">View Projects <i class="bi bi-arrow-down-right"></i></a>
        <a href="<?= htmlspecialchars($personal['resume_file']) ?>" download class="btn btn-outline">
          <i class="bi bi-file-earmark-arrow-down"></i> Resume
        </a>
        <a href="#contact" class="btn btn-ghost">Contact Me</a>
      </div>
      <div class="hero-highlights">
        <?php foreach ($personal['stats'] as $index => $stat): ?>
          <?php if ($index > 0): ?>
            <div class="highlight-divider"></div>
          <?php endif; ?>
          <div class="highlight-item">
            <strong><?= htmlspecialchars($stat['num']) ?></strong>
            <span><?= htmlspecialchars($stat['label']) ?></span>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
    <div class="hero-img">
      <div class="hero-img-backdrop"></div>
      <img src="pic1.png" alt="<?= htmlspecialchars($personal['name']) ?>">
    </div>
  </section>

  <!-- ABOUT -->
  <section id="about" class="section about">
    <div class="container two-col">
      <div class="about-left">
        <span class="label">About Me</span>
        <h2>Passionate about building digital experiences.</h2>
        <p><?= htmlspecialchars($personal['bio_p1']) ?></p>
        <p><?= htmlspecialchars($personal['bio_p2']) ?></p>

        <h3 id="career-title" class="subsection-heading">Career Objective</h3>
        <p><?= htmlspecialchars($personal['career_goal']) ?></p>
      </div>
      <div class="about-right">
        <div class="id-card-wrap">
          <div class="lanyard"></div>
          <div class="id-card">
            <img src="pic2.jpg" alt="<?= htmlspecialchars($personal['name']) ?>">
            <p class="id-name">TAMBO</p>
            <p class="id-sub">ERIKA DAINS SIA</p>
            <p class="id-role"><?= htmlspecialchars($personal['degree']) ?> Student</p>
          </div>
        </div>
      </div>
    </div>

    <!-- EDUCATION TIMELINE -->
    <div id="education" class="container edu-block">
      <span class="label">Educational Background</span>
      <div class="timeline">
        <?php foreach ($education as $edu): ?>
          <div class="tl-item <?= $edu['active'] ? 'active' : '' ?>">
            <div class="tl-dot"></div>
            <div class="tl-body">
              <h4><?= htmlspecialchars($edu['school']) ?></h4>
              <p><?= htmlspecialchars($edu['level']) ?></p>
              <time><?= htmlspecialchars($edu['years']) ?></time>
            </div>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- PROJECTS -->
  <section id="projects" class="section projects bg-warm">
    <div class="container">
      <span class="label">Projects</span>
      <h2>My Work</h2>
      <p class="section-lead">Click a category to explore the projects inside.</p>

      <div class="project-grid">
        <?php foreach ($projects as $key => $group): ?>
          <button class="proj-card" data-category="<?= htmlspecialchars($key) ?>">
            <div class="proj-img">
              <img loading="lazy" src="<?= htmlspecialchars($group['card_img']) ?>" alt="<?= htmlspecialchars($group['title']) ?>">
            </div>
            <div class="proj-info">
              <span class="proj-tag"><?= htmlspecialchars($group['tag']) ?></span>
              <h3><?= htmlspecialchars($group['title']) ?></h3>
              <p><?= htmlspecialchars($group['summary']) ?></p>
              <span class="proj-arrow"><i class="bi bi-arrow-right"></i></span>
            </div>
          </button>
        <?php endforeach; ?>
      </div>

      <div class="canva-link-wrap">
        <a href="<?= htmlspecialchars($personal['canva_showcase']) ?>" target="_blank" rel="noopener" class="btn btn-outline">
          <i class="bi bi-box-arrow-up-right"></i> Full Portfolio on Canva
        </a>
      </div>
    </div>
  </section>

  <!-- PROJECT MODAL -->
  <div id="projectModal" class="modal-overlay" role="dialog" aria-modal="true" aria-label="Project details" hidden>
    <div class="modal-box">
      <button class="modal-close" aria-label="Close">&times;</button>
      <div id="modalBody" class="modal-body"></div>
    </div>
  </div>

  <!-- SKILLS -->
  <section id="skills" class="section">
    <div class="container">
      <span class="label">Skills &amp; Capabilities</span>
      <h2>Core Competencies</h2>
      <p class="section-lead">A balanced blend of engineering, creative media, and executive support proficiencies.</p>
      
      <div class="skills-grid">
        <?php foreach ($skills as $skill_group): ?>
          <div class="skill-card">
            <div class="skill-card-head">
              <i class="bi <?= htmlspecialchars($skill_group['icon']) ?>"></i>
              <div>
                <h3><?= htmlspecialchars($skill_group['title']) ?></h3>
                <p class="skill-sub"><?= htmlspecialchars($skill_group['sub']) ?></p>
              </div>
            </div>
            <div class="skill-pills">
              <?php foreach ($skill_group['pills'] as $pill): ?>
                <span class="pill">
                  <i class="bi <?= htmlspecialchars($pill['icon']) ?>"></i> <?= htmlspecialchars($pill['label']) ?>
                </span>
              <?php endforeach; ?>
            </div>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- CERTIFICATES -->
  <section id="certificates" class="section bg-warm">
    <div class="container">
      <span class="label">Certificates</span>
      <h2>Credentials</h2>
      <div class="cert-grid">
        <?php foreach ($certificates as $cert): ?>
          <div class="cert-card" tabindex="0" role="button" aria-label="View <?= htmlspecialchars($cert['title']) ?> certificate">
            <div class="cert-img">
              <img loading="lazy" src="<?= htmlspecialchars($cert['img']) ?>" alt="<?= htmlspecialchars($cert['title']) ?>">
            </div>
            <div class="cert-info">
              <h3><?= htmlspecialchars($cert['title']) ?></h3>
              <p><?= htmlspecialchars($cert['issuer']) ?> &nbsp;·&nbsp; <?= htmlspecialchars($cert['year']) ?></p>
            </div>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- CERT LIGHTBOX -->
  <div id="certModal" class="modal-overlay cert-overlay" role="dialog" aria-modal="true" aria-label="Certificate preview" hidden>
    <button class="modal-close cert-close" aria-label="Close">&times;</button>
    <img id="certPreview" src="" alt="" class="cert-preview">
  </div>

  <!-- SERVICES -->
  <section id="services" class="section">
    <div class="container">
      <span class="label">Services</span>
      <h2>How I Can Help</h2>
      <p class="section-lead">Digital and creative services combining technology, design, and communication.</p>
      
      <div class="services-grid">
        <?php foreach ($services as $svc): ?>
          <div class="svc-card">
            <i class="bi <?= htmlspecialchars($svc['icon']) ?>"></i>
            <h3><?= htmlspecialchars($svc['title']) ?></h3>
            <p><?= htmlspecialchars($svc['desc']) ?></p>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section id="contact" class="section bg-warm">
    <div class="container contact-wrap">
      <span class="label">Contact</span>
      <h2>Let's Connect</h2>
      <p class="section-lead">Open for opportunities, collaborations, and internships.</p>
      
      <div class="contact-cards">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=<?= urlencode($personal['email']) ?>&su=Portfolio%20Inquiry" target="_blank" rel="noopener" class="contact-card">
          <i class="bi bi-envelope-at"></i>
          <div>
            <strong>Email</strong>
            <span><?= htmlspecialchars($personal['email']) ?></span>
          </div>
        </a>
        <a href="<?= htmlspecialchars($personal['github']) ?>" target="_blank" rel="noopener" class="contact-card">
          <i class="bi bi-github"></i>
          <div>
            <strong>GitHub</strong>
            <span><?= htmlspecialchars(str_replace('https://github.com/', '', $personal['github'])) ?></span>
          </div>
        </a>
        <a href="<?= htmlspecialchars($personal['canva_showcase']) ?>" target="_blank" rel="noopener" class="contact-card">
          <i class="bi bi-palette"></i>
          <div>
            <strong>Design Portfolio</strong>
            <span>Canva Creative Showcase</span>
          </div>
        </a>
      </div>
      
      <a href="<?= htmlspecialchars($personal['resume_file']) ?>" download class="btn btn-dark" style="margin-top:2.5rem;">
        <i class="bi bi-file-earmark-person"></i> Download Resume
      </a>
    </div>
  </section>

  <footer class="footer">
    <div class="container footer-inner">
      <span>© <?= date('Y') ?> <?= htmlspecialchars($personal['name']) ?></span>
      <span>Designed &amp; Developed with PHP by Erika</span>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>
