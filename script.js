/**********************************************
 * Portfolio Data (EDIT THIS SECTION ONLY)
 * --------------------------------------------
 * Replace placeholder values with your own.
 *********************************************/
const portfolioData = {
  hero: {
    name: "UDAY SHRIVASTAVA",
    roles: [
      "Frontend Developer",
      "UI / UX Enthusiast",
      "JavaScript Developer",
      "Web Animator",
    ],
    tagline:
      "I build fast, modern, and animated web experiences that feel smooth and delightful on every device.",
    cvLink: "#", // Put Google Drive / direct CV URL here
    socials: [
      {
        label: "GitHub",
        icon: "fa-brands fa-github",
        url: "https://github.com/",
      },
      {
        label: "LinkedIn",
        icon: "fa-brands fa-linkedin-in",
        url: "https://www.linkedin.com/in/uday-shrivastava-b427233a9/",
      },
      {
        label: "Twitter",
        icon: "fa-brands fa-x-twitter",
        url: "https://twitter.com/",
      },
    ],
  },

  about: {
    bio: "I’m a passionate front-end developer who enjoys turning complex ideas into beautiful, responsive, and animated interfaces. I love working with modern JavaScript, clean UI design, and interactive experiences that make users say ‘wow’.",
    info: {
      Name: "Uday Shrivastava",
      Role: "Web Developer",
      Location: "Jaipur, India",
      Email: "srivuday05@gmail.com",
      Phone: "+91-9627509033",
      Languages: "English, Hindi",
    },
  },

  skills: [
    {
      name: "HTML",
      level: "Advanced",
      percent: 90,
      icon: "fa-brands fa-html5",
      description: "Semantic, accessible, SEO-friendly markup.",
    },
    {
      name: "CSS / Tailwind",
      level: "Advanced",
      percent: 88,
      icon: "fa-brands fa-css3-alt",
      description: "Responsive layouts, animations, and modern UI.",
    },
    {
      name: "JavaScript",
      level: "Advanced",
      percent: 85,
      icon: "fa-brands fa-js",
      description: "Clean, modular JS with focus on UX & performance.",
    },
    {
      name: "React (optional)",
      level: "Intermediate",
      percent: 70,
      icon: "fa-brands fa-react",
      description: "SPA development, hooks, and component design.",
    },
    {
      name: "Node.js (optional)",
      level: "Intermediate",
      percent: 60,
      icon: "fa-brands fa-node-js",
      description: "Basic APIs, backend integration, and tooling.",
    },
    {
      name: "UI / UX",
      level: "Intermediate",
      percent: 65,
      icon: "fa-solid fa-palette",
      description: "Modern design trends and user-centric thinking.",
    },
  ],

  projects: [
    {
      title: "Animated Portfolio Website",
      badge: "Featured",
      description:
        "A fully responsive, animated portfolio with smooth scroll, interactive cards, and dynamic data loading.",
      tech: ["HTML", "CSS", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
      overlayText: "Custom-built portfolio focused on microinteractions.",
    },
    {
      title: "Landing Page UI",
      badge: "UI Design",
      description:
        "Modern SaaS landing page with gradient layers, glassmorphism cards, and call-to-action sections.",
      tech: ["HTML", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      overlayText: "Pixel-perfect, mobile-first responsive layout.",
    },
    {
      title: "Dashboard Concept",
      badge: "Concept",
      description:
        "Analytics dashboard concept with cards, charts mocks, and dark/neon visual style.",
      tech: ["HTML", "CSS", "JS"],
      liveUrl: "#",
      githubUrl: "#",
      overlayText: "Focus on data hierarchy and visual clarity.",
    },
    {
      title: "Mini JS Games",
      badge: "Fun Project",
      description:
        "Collection of small browser games built with vanilla JavaScript and simple animations.",
      tech: ["JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
      overlayText: "Experiments with game loops and event handling.",
    },
  ],

  certificates: [
    {
      title: "Frontend Web Development",
      issuer: "Coursera",
      date: "2023",
      description:
        "Covered HTML5, CSS3, JavaScript fundamentals, and responsive design best practices.",
    },
    {
      title: "Modern JavaScript (ES6+)",
      issuer: "Udemy",
      date: "2022",
      description:
        "Deep dive into ES6+ features, asynchronous JS, and real-world projects.",
    },
    {
      title: "Introduction to UI / UX Design",
      issuer: "Google / Coursera",
      date: "2022",
      description:
        "Fundamentals of user research, wireframing, and accessibility-first design.",
    },
  ],

  experience: [
    {
      title: "Frontend Developer Intern",
      organization: "ABC Tech",
      date: "2023 - Present",
      location: "Remote",
      type: "Internship",
      description:
        "Worked on responsive components, bug fixes, and UI polishing for real client projects.",
    },
    {
      title: "Freelance Web Developer",
      organization: "Self-employed",
      date: "2022 - Present",
      location: "Remote",
      type: "Freelance",
      description:
        "Designed and developed custom landing pages, portfolios, and small business websites.",
    },
  ],

  education: [
    {
      title: "B.Tech in Computer Science",
      organization: "XYZ University",
      date: "2020 - 2024",
      location: "City, Country",
      type: "Education",
      description:
        "Focused on software development, algorithms, and web technologies.",
    },
  ],

  contact: {
    intro:
      "I’m open to freelance projects, internships, and collaboration. Tell me a bit about your idea and I’ll get back to you.",
    email: "srivuday05@gmail.com",
    phone: "+91-9627509033",
    location: "Jaipur, India",
  },
};

/**********************************************
 * DOM Helpers
 *********************************************/

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

/**********************************************
 * Populate Content from portfolioData
 *********************************************/

function populateHero() {
  const { name, roles, tagline, cvLink, socials } = portfolioData.hero;

  const heroName = $("#hero-name");
  const heroIntro = $("#hero-intro");
  const downloadCv = $("#download-cv");
  const heroSocials = $("#hero-socials");

  if (heroName) heroName.textContent = name;
  if (heroIntro) heroIntro.textContent = tagline;
  if (downloadCv) downloadCv.href = cvLink || "#";

  // Socials
  if (heroSocials && Array.isArray(socials)) {
    heroSocials.innerHTML = socials
      .map(
        (s) => `
      <a class="social-pill" href="${s.url}" target="_blank" rel="noopener">
        <i class="${s.icon}"></i>
        <span>${s.label}</span>
      </a>
    `
      )
      .join("");
  }

  // Typed roles
  if (roles && roles.length) {
    initTypingEffect(roles);
  }
}

function populateAbout() {
  const { bio, info } = portfolioData.about;
  const aboutDescription = $("#about-description");
  const aboutInfoList = $("#about-info-list");

  if (aboutDescription) aboutDescription.textContent = bio;

  if (aboutInfoList && info) {
    aboutInfoList.innerHTML = Object.entries(info)
      .map(
        ([label, value]) => `
      <li class="info-item">
        <span class="info-label">${label}</span>
        <span class="info-value">${value}</span>
      </li>
    `
      )
      .join("");
  }
}

function populateSkills() {
  const skillsGrid = $("#skills-grid");
  if (!skillsGrid) return;

  skillsGrid.innerHTML = portfolioData.skills
    .map(
      (skill) => `
    <article class="skill-card reveal">
      <div class="skill-icon">
        <i class="${skill.icon}"></i>
      </div>
      <div class="skill-title-row">
        <h3 class="skill-name">${skill.name}</h3>
        <span class="skill-level">${skill.level}</span>
      </div>
      <p class="skill-desc">${skill.description}</p>
      <div class="skill-bar">
        <div class="skill-bar-fill" data-percent="${skill.percent}"></div>
      </div>
    </article>
  `
    )
    .join("");
}

function populateProjects() {
  const projectsGrid = $("#projects-grid");
  if (!projectsGrid) return;

  projectsGrid.innerHTML = portfolioData.projects
    .map(
      (project) => `
    <article class="project-card reveal">
      <div class="project-badge">${project.badge || "Project"}</div>
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <div class="project-tech">
        ${project.tech
          .map((t) => `<span>${t}</span>`)
          .join("")}
      </div>
      <div class="project-actions">
        <a class="btn btn-outline project-link" href="${project.liveUrl}" target="_blank" rel="noopener">
          Live Demo
        </a>
        <a class="btn btn-outline project-link" href="${project.githubUrl}" target="_blank" rel="noopener">
          GitHub
        </a>
      </div>
      <div class="project-overlay">
        <div class="project-overlay-content">
          ${project.overlayText || "Hover to see more details."}
        </div>
      </div>
    </article>
  `
    )
    .join("");
}

function populateCertificates() {
  const timeline = $("#certificates-timeline");
  if (!timeline) return;

  timeline.innerHTML = portfolioData.certificates
    .map(
      (cert) => `
    <article class="timeline-item reveal">
      <div class="timeline-dot"></div>
      <div class="timeline-heading">
        <h3 class="timeline-title">${cert.title}</h3>
        <span class="timeline-badge">${cert.issuer}</span>
      </div>
      <div class="timeline-meta">
        <span>${cert.date}</span>
      </div>
      <p class="timeline-description">${cert.description}</p>
    </article>
  `
    )
    .join("");
}

function populateExperienceAndEducation() {
  const timeline = $("#experience-timeline");
  if (!timeline) return;

  const experienceItems = portfolioData.experience.map((exp) => ({
    ...exp,
    category: "Experience",
  }));
  const educationItems = portfolioData.education.map((edu) => ({
    ...edu,
    category: "Education",
  }));

  const allItems = [...experienceItems, ...educationItems];

  timeline.innerHTML = allItems
    .map(
      (item) => `
    <article class="timeline-item reveal">
      <div class="timeline-dot"></div>
      <div class="timeline-heading">
        <h3 class="timeline-title">${item.title}</h3>
        <span class="timeline-badge">${item.category}</span>
      </div>
      <div class="timeline-meta">
        <span>${item.organization}</span>
        <span>${item.date}</span>
        <span>${item.location}</span>
      </div>
      <p class="timeline-description">${item.description}</p>
    </article>
  `
    )
    .join("");
}

function populateContact() {
  const contactInfo = $("#contact-info");
  if (!contactInfo) return;

  const { intro, email, phone, location } = portfolioData.contact;

  contactInfo.innerHTML = `
    <p>${intro}</p>
    <ul class="contact-list">
      <li class="contact-item">
        <i class="fa-solid fa-location-dot"></i>
        <span>${location}</span>
      </li>
      <li class="contact-item">
        <i class="fa-solid fa-envelope"></i>
        <span>${email}</span>
      </li>
      <li class="contact-item">
        <i class="fa-solid fa-phone"></i>
        <span>${phone}</span>
      </li>
    </ul>
  `;
}

function populateFooterSocials() {
  const footerSocials = $("#footer-socials");
  if (!footerSocials) return;
  const socials = portfolioData.hero.socials || [];

  footerSocials.innerHTML = socials
    .map(
      (s) => `
    <a href="${s.url}" target="_blank" rel="noopener">
      <i class="${s.icon}"></i>
    </a>
  `
    )
    .join("");
}

function setFooterYearAndName() {
  const yearEl = $("#footer-year");
  const footerText = $("#footer-text");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  if (footerText) {
    footerText.innerHTML = `© <span id="footer-year">${new Date().getFullYear()}</span> ${
      portfolioData.hero.name
    }. All rights reserved.`;
  }
}

/**********************************************
 * Typing Effect for Roles
 *********************************************/

function initTypingEffect(roles) {
  const typedEl = $("#typed-role");
  if (!typedEl) return;

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typeSpeed = 80;
  const deleteSpeed = 40;
  const delayBetweenRoles = 1500;

  function type() {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
      // Typing
      typedEl.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(type, delayBetweenRoles);
        return;
      }

      setTimeout(type, typeSpeed);
    } else {
      // Deleting
      typedEl.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, 250);
        return;
      }

      setTimeout(type, deleteSpeed);
    }
  }

  type();
}

/**********************************************
 * Scroll Reveal + Skill Bar Animation
 *********************************************/

function initScrollReveal() {
  const revealEls = $$(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");

          // If it's a skill card, animate its bar
          if (entry.target.classList.contains("skill-card")) {
            const bar = entry.target.querySelector(".skill-bar-fill");
            if (bar) {
              const percent = bar.getAttribute("data-percent") || 0;
              requestAnimationFrame(() => {
                bar.style.width = `${percent}%`;
              });
            }
          }

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.28,
    }
  );

  revealEls.forEach((el) => observer.observe(el));
}

/**********************************************
 * Navigation: Active link on scroll + mobile menu
 *********************************************/

function initNav() {
  const navLinks = $$(".nav-link");
  const sections = [...navLinks]
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const navToggle = $("#nav-toggle");
  const nav = $("#nav");

  // Click to scroll & close mobile menu
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (nav.classList.contains("open")) {
        nav.classList.remove("open");
      }
    });
  });

  // Mobile toggle
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  // Active section
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        if (!id) return;

        const matchingLink = document.querySelector(`.nav-link[href="#${id}"]`);
        if (!matchingLink) return;

        if (entry.isIntersecting) {
          navLinks.forEach((l) => l.classList.remove("active"));
          matchingLink.classList.add("active");
        }
      });
    },
    {
      threshold: 0.45,
    }
  );

  sections.forEach((section) => observer.observe(section));
}

/**********************************************
 * Contact Form Validation (front-end only)
 *********************************************/

function initContactForm() {
  const form = $("#contact-form");
  if (!form) return;

  const statusEl = $("#form-status");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = $("#name");
    const emailInput = $("#email");
    const messageInput = $("#message");

    let isValid = true;

    // Reset messages
    $$(".error-message").forEach((el) => (el.textContent = ""));
    if (statusEl) statusEl.textContent = "";

    // Name validation
    if (!nameInput.value.trim()) {
      showError(nameInput, "Please enter your name.");
      isValid = false;
    }

    // Email validation
    if (!emailInput.value.trim()) {
      showError(emailInput, "Please enter your email.");
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(emailInput.value.trim())) {
      showError(emailInput, "Please enter a valid email.");
      isValid = false;
    }

    // Message validation
    if (!messageInput.value.trim()) {
      showError(messageInput, "Please enter a message.");
      isValid = false;
    } else if (messageInput.value.trim().length < 10) {
      showError(messageInput, "Message should be at least 10 characters.");
      isValid = false;
    }

    if (!isValid) return;

    // Fake submit animation
    const submitBtn = form.querySelector(".btn-submit");
    if (submitBtn) {
      submitBtn.classList.add("btn-submitting");
      submitBtn.disabled = true;
    }

    setTimeout(() => {
      if (submitBtn) {
        submitBtn.classList.remove("btn-submitting");
        submitBtn.disabled = false;
      }

      form.reset();
      if (statusEl) {
        statusEl.textContent =
          "Thanks for reaching out! This is a demo form – connect via email or social links.";
      }
    }, 1200);
  });

  function showError(input, message) {
    const group = input.closest(".form-group");
    if (!group) return;
    const errorEl = group.querySelector(".error-message");
    if (errorEl) errorEl.textContent = message;
  }
}

/**********************************************
 * Hover effects for skill cards (pointer glow)
 *********************************************/

function initSkillCardHover() {
  const cards = $$(".skill-card");
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--x", `${x}%`);
      card.style.setProperty("--y", `${y}%`);
    });
  });
}

/**********************************************
 * Init
 *********************************************/

document.addEventListener("DOMContentLoaded", () => {
  populateHero();
  populateAbout();
  populateSkills();
  populateProjects();
  populateCertificates();
  populateExperienceAndEducation();
  populateContact();
  populateFooterSocials();
  setFooterYearAndName();

  initScrollReveal();
  initNav();
  initContactForm();

  // After skills are inserted into DOM, init hover effect
  // (small delay ensures elements exist)
  setTimeout(initSkillCardHover, 100);

  // Optional: smooth scroll for all anchor links (extra safety)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId.length > 1) {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });
});