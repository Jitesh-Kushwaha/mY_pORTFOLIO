// Jitesh Kushwaha — Engineer, Roboticist, DevOps & Embedded Systems Portfolio
// All dynamic data (projects, blogs, photos) lives here. No frameworks, pure ES6.

// --------------------------- DATA DEFINITIONS ---------------------------

const projects = [
  {
    name: "Mars Autonomous Drone",
    description:
      "Conceptual autonomous drone designed for the thin atmosphere of Mars with robust guidance, navigation and control and edge compute for perception.",
    tech: ["C++", "ROS2", "PX4", "NVIDIA Jetson", "Gazebo", "Ubuntu"],
    status: "In Progress",
    statusClass: "status-progress",
    github: "https://github.com/JiteshKushwaha",
  },
  {
    name: "Rocket Flight Computer",
    description:
      "Custom flight computer for amateur rocketry with sensor fusion, ignition logic, staging control, logging and real-time telemetry uplink.",
    tech: ["STM32", "C", "FreeRTOS", "LoRa", "IMU", "Barometer"],
    status: "In Progress",
    statusClass: "status-progress",
    github: "https://github.com/JiteshKushwaha",
  },
  {
    name: "BalloonSat High Altitude Platform",
    description:
      "High-altitude BalloonSat payload for atmospheric sensing, GPS logging, camera capture and telemetry for near-space experiments.",
    tech: ["ESP32", "C++", "GPS", "Camera", "RF Telemetry"],
    status: "Completed",
    statusClass: "status-completed",
    github: "https://github.com/JiteshKushwaha",
  },
  {
    name: "LoRa Telemetry Network",
    description:
      "Long-range, low-power telemetry network for drones and rockets with redundant links, acknowledgements and ground-station dashboards.",
    tech: ["LoRa", "MQTT", "Python", "Grafana", "Linux"],
    status: "Completed",
    statusClass: "status-completed",
    github: "https://github.com/JiteshKushwaha",
  },
  {
    name: "DevOps CI/CD for Embedded",
    description:
      "End-to-end CI/CD pipelines for firmware and infrastructure including builds, unit tests, static analysis, packaging and artifact promotion.",
    tech: ["GitHub Actions", "Docker", "CMake", "Python", "Shell"],
    status: "Completed",
    statusClass: "status-completed",
    github: "https://github.com/JiteshKushwaha",
  },
  {
    name: "Python Automation Toolkit",
    description:
      "Collection of Python tools that automate lab workflows, telemetry parsing, log analysis and hardware-in-the-loop test orchestration.",
    tech: ["Python", "Pandas", "Click", "Linux"],
    status: "Completed",
    statusClass: "status-completed",
    github: "https://github.com/JiteshKushwaha",
  },
  {
    name: "Java DSA & Systems Practice",
    description:
      "Java implementations of data structures, algorithms and systems primitives with a focus on performance and clarity.",
    tech: ["Java", "DSA", "JUnit"],
    status: "Completed",
    statusClass: "status-completed",
    github: "https://github.com/JiteshKushwaha",
  },
];

const blogs = [
  {
    title: "Designing a Rocket Flight Computer That Doesn't Panic at Max-Q",
    date: "Dec 2025",
    summary:
      "Notes on building a resilient flight computer for amateur rocketry — from sensor fusion to failure modes and telemetry.",
    content:
      "Rockets are hostile environments. Vibration, temperature swings and RF noise conspire to break your assumptions. In this write-up I cover how I approached the flight computer design: splitting responsibilities between a deterministic control core and a more flexible logging/telemetry layer, implementing watchdogs, validating sensor data with plausibility checks instead of blind trust, and treating every single I/O line as a potential failure source. I also share how CI/CD and simulation runs feed into launch rehearsals so the stack is boring by the time the rocket hits the pad.",
  },
  {
    title: "LoRa Telemetry: When Every Bit Counts",
    date: "Oct 2025",
    summary:
      "Building a LoRa-based telemetry network for drones and high-altitude experiments where bandwidth and power are tight.",
    content:
      "LoRa gives you range, not free bandwidth. The trick is to pick what absolutely must cross the RF link and what can be reconstructed from context. I walk through my packet design for drones and BalloonSat payloads, including compact binary encodings, forward-error-correction trade-offs, acknowledgment strategies and ground-station layouts. The DevOps angle appears in the form of replayable telemetry — every byte that arrives can be fed into simulations and analysis pipelines automatically.",
  },
  {
    title: "CI/CD for Firmware: Treating Boards Like Microservices",
    date: "Aug 2025",
    summary:
      "How I wired GitHub Actions, hardware-in-the-loop test rigs and simulation to keep embedded firmware shippable.",
    content:
      "Firmware projects deserve the same rigor as backend services. I describe my approach to CI/CD for embedded systems: reproducible Docker-based build images, deterministic toolchain pinning, staged pipelines (lint, unit tests, integration tests, HIL), and automatic artifact promotion. The result is the ability to answer the question ‘What is flying on that airframe?’ with a commit hash and a build log instead of guesswork.",
  },
];

const photos = [
  {
    src: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=900&q=80",
    alt: "Quadcopter drone in a dimly lit lab with tools and scopes.",
    caption: "Autonomous quad in the lab — ESC tuning and sensor calibration.",
  },
  {
    src: "https://images.unsplash.com/photo-1551817958-20204d6ab8f4?auto=format&fit=crop&w=900&q=80",
    alt: "Rocket stage being assembled on a workbench.",
    caption: "Rocket avionics bay wiring before integration.",
  },
  {
    src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=900&q=80",
    alt: "Engineer working at a terminal with many monitors.",
    caption: "Mission control terminal — telemetry dashboards and log streams.",
  },
  {
    src: "https://images.unsplash.com/photo-1517055729445-fa7d27394bce?auto=format&fit=crop&w=900&q=80",
    alt: "Circuit board under probe with oscilloscope in the background.",
    caption: "Embedded board bring-up and signal integrity checks.",
  },
  {
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
    alt: "High altitude view of Earth from a balloon.",
    caption: "BalloonSat experiment — recovered footage from near-space.",
  },
];

// This is a static approximation of public repos; can be tuned.
const githubMeta = {
  repoCount: 42,
};

// Typing animation phrases
const typingPhrases = [
  "deploying autonomous drones with real telemetry...",
  "designing rocket avionics that survive max-q...",
  "wiring LoRa networks between sky, ground and cloud...",
  "shipping firmware through CI/CD like backend code...",
  "debugging systems with Linux, observability and rigor...",
];

// --------------------------- UTILITIES ---------------------------

const THEME_STORAGE_KEY = "jk-portfolio-theme";

function throttle(fn, wait) {
  let last = 0;
  let timeoutId;
  return function throttled(...args) {
    const now = Date.now();
    const remaining = wait - (now - last);
    if (remaining <= 0) {
      clearTimeout(timeoutId);
      last = now;
      fn.apply(this, args);
    } else if (!timeoutId) {
      timeoutId = setTimeout(() => {
        last = Date.now();
        timeoutId = null;
        fn.apply(this, args);
      }, remaining);
    }
  };
}

// --------------------------- THEME TOGGLER ---------------------------

function applyTheme(theme) {
  const body = document.body;
  body.classList.toggle("theme-light", theme === "light");
  body.classList.toggle("theme-dark", theme === "dark");

  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.setAttribute(
      "aria-label",
      theme === "light" ? "Switch to dark theme" : "Switch to light theme"
    );
  }
}

function initTheme() {
  let theme = "dark";
  try {
    const fromStorage = localStorage.getItem(THEME_STORAGE_KEY);
    if (fromStorage === "light" || fromStorage === "dark") {
      theme = fromStorage;
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      theme = "light";
    }
  } catch {
    // localStorage not available; default dark
  }

  applyTheme(theme);

  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const nextTheme = document.body.classList.contains("theme-light")
        ? "dark"
        : "light";
      applyTheme(nextTheme);
      try {
        localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
      } catch {
        // ignore
      }
    });
  }
}

// --------------------------- NAVBAR & SCROLL ---------------------------

function initNav() {
  const navLinks = Array.from(document.querySelectorAll(".nav-link"));
  const sections = Array.from(document.querySelectorAll("section[id]"));
  const navbar = document.querySelector(".navbar");

  // Smooth scroll for nav links
  navLinks.forEach((link) => {
    const targetId = link.getAttribute("href");
    if (!targetId || !targetId.startsWith("#")) return;

    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  const updateActiveLink = () => {
    const scrollPos = window.scrollY + 120;
    let currentId = sections[0]?.id;

    for (const section of sections) {
      if (section.offsetTop <= scrollPos) {
        currentId = section.id;
      }
    }

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      const targetId = href && href.startsWith("#") ? href.slice(1) : null;
      const isActive = targetId === currentId;
      link.classList.toggle("active", isActive);
    });

    if (navbar) {
      navbar.classList.toggle("scrolled", window.scrollY > 10);
    }
  };

  window.addEventListener("scroll", throttle(updateActiveLink, 80));
  updateActiveLink();
}

// --------------------------- REVEAL ON SCROLL ---------------------------

function initRevealOnScroll() {
  const revealEls = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || revealEls.length === 0) {
    revealEls.forEach((el) => el.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  revealEls.forEach((el) => observer.observe(el));
}

// --------------------------- TYPING ANIMATION ---------------------------

function initTypingAnimation() {
  const target = document.getElementById("typing-text");
  if (!target) return;

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const type = () => {
    const phrase = typingPhrases[phraseIndex];
    if (!phrase) return;

    if (isDeleting) {
      charIndex -= 1;
    } else {
      charIndex += 1;
    }

    const partial = phrase.slice(0, charIndex);
    target.textContent = partial;

    let delta = 70;

    if (!isDeleting && charIndex === phrase.length) {
      delta = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % typingPhrases.length;
      delta = 500;
    }

    setTimeout(type, delta);
  };

  type();
}

// --------------------------- RENDER PROJECTS ---------------------------

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "card project-card reveal";

    const techHtml = project.tech.map((t) => `<li>${t}</li>`).join("");

    card.innerHTML = `
      <div class="card-header">
        <h3 class="card-title monospace">${project.name}</h3>
        <span class="status-badge ${project.statusClass}">${
      project.status
    }</span>
      </div>
      <p class="card-body-text">${project.description}</p>
      <ul class="tech-list">
        ${techHtml}
      </ul>
      <div class="card-footer">
        <span class="monospace" style="font-size:0.76rem; color:var(--color-text-soft);">
          github://${new URL(project.github).hostname.replace("www.", "")}
        </span>
        <a href="${
          project.github
        }" class="btn tiny btn-ghost" target="_blank" rel="noopener noreferrer">
          Open Repo
        </a>
      </div>
    `;

    grid.appendChild(card);
  });
}

// --------------------------- RENDER BLOGS ---------------------------

function renderBlogs() {
  const list = document.getElementById("blogs-list");
  if (!list) return;

  blogs.forEach((blog) => {
    const card = document.createElement("article");
    card.className = "blog-card reveal";

    card.innerHTML = `
      <header class="blog-header">
        <h3 class="blog-title monospace">${blog.title}</h3>
        <span class="blog-meta">${blog.date}</span>
      </header>
      <p class="blog-summary">${blog.summary}</p>
      <div class="blog-body">
        <p>${blog.content}</p>
      </div>
      <div class="blog-toggle monospace">
        <span>Read more</span>
        <span class="blog-toggle-icon"></span>
      </div>
    `;

    card.addEventListener("click", (event) => {
      // Avoid toggling when clicking a link (if ever added)
      if (event.target.tagName.toLowerCase() === "a") return;
      card.classList.toggle("expanded");
    });

    list.appendChild(card);
  });
}

// --------------------------- RENDER PHOTOS & MODAL ---------------------------

let photoModal;
let photoModalImg;
let photoModalCaption;

function openPhotoModal(src, alt, caption) {
  if (!photoModal || !photoModalImg) return;
  photoModalImg.src = src;
  photoModalImg.alt = alt || caption || "Photo";
  if (photoModalCaption) {
    photoModalCaption.textContent = caption || alt || "";
  }
  photoModal.classList.add("open");
  photoModal.setAttribute("aria-hidden", "false");
}

function closePhotoModal() {
  if (!photoModal || !photoModalImg) return;
  photoModal.classList.remove("open");
  photoModal.setAttribute("aria-hidden", "true");
  photoModalImg.src = "";
}

function renderPhotos() {
  const grid = document.getElementById("photos-grid");
  if (!grid) return;

  photos.forEach((photo) => {
    const item = document.createElement("figure");
    item.className = "photo-item reveal";

    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = photo.alt;
    img.loading = "lazy";

    const caption = document.createElement("figcaption");
    caption.className = "photo-item-caption monospace";
    caption.textContent = photo.caption;

    item.appendChild(img);
    item.appendChild(caption);

    item.addEventListener("click", () => {
      openPhotoModal(photo.src, photo.alt, photo.caption);
    });

    grid.appendChild(item);
  });
}

function initPhotoModal() {
  photoModal = document.getElementById("photo-modal");
  photoModalImg = document.getElementById("photo-modal-image");
  photoModalCaption = document.getElementById("photo-modal-caption");
  const closeBtn = document.getElementById("photo-modal-close");

  if (!photoModal || !photoModalImg) return;

  const closeTargets = [photoModal, closeBtn];
  closeTargets.forEach((el) => {
    if (!el) return;
    el.addEventListener("click", (e) => {
      const target = e.target;
      if (
        target === closeBtn ||
        (target instanceof HTMLElement &&
          target.dataset.closeModal === "true") ||
        target === photoModal
      ) {
        closePhotoModal();
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && photoModal.classList.contains("open")) {
      closePhotoModal();
    }
  });
}

function initPhotoDropzone() {
  const dropzone = document.getElementById("photo-dropzone");
  const grid = document.getElementById("photos-grid");
  if (!dropzone || !grid) return;

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
    dropzone.classList.add("dragover");
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    dropzone.classList.remove("dragover");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    dropzone.classList.remove("dragover");
    const files = Array.from(e.dataTransfer.files || []);
    files
      .filter((file) => file.type.startsWith("image/"))
      .forEach((file) => {
        const url = URL.createObjectURL(file);
        const item = document.createElement("figure");
        item.className = "photo-item reveal";

        const img = document.createElement("img");
        img.src = url;
        img.alt = file.name;
        img.loading = "lazy";

        const caption = document.createElement("figcaption");
        caption.className = "photo-item-caption monospace";
        caption.textContent = `Local: ${file.name}`;

        item.appendChild(img);
        item.appendChild(caption);

        item.addEventListener("click", () => {
          openPhotoModal(url, file.name, `Local: ${file.name}`);
        });

        grid.prepend(item);
      });
  };

  ["dragenter", "dragover"].forEach((evt) =>
    dropzone.addEventListener(evt, handleDragOver)
  );
  ["dragleave", "dragend"].forEach((evt) =>
    dropzone.addEventListener(evt, handleDragLeave)
  );
  dropzone.addEventListener("drop", handleDrop);
}

// --------------------------- GITHUB GRAPH ---------------------------

function initGitHubSection() {
  const repoCountEl = document.getElementById("github-repo-count");
  if (repoCountEl) {
    repoCountEl.textContent = githubMeta.repoCount.toString();
  }

  const grid = document.getElementById("contrib-grid");
  if (!grid) return;

  const cells = 7 * 32; // 7 rows x 32 columns
  for (let i = 0; i < cells; i += 1) {
    const cell = document.createElement("div");
    cell.className = "contrib-cell";
    const level = Math.floor(Math.random() * 5);
    let color;
    switch (level) {
      case 0:
        color = "#0e4429";
        break;
      case 1:
        color = "#006d32";
        break;
      case 2:
        color = "#26a641";
        break;
      case 3:
        color = "#39d353";
        break;
      default:
        color = "#0d1117";
        break;
    }
    cell.style.backgroundColor = color;
    cell.style.animationDelay = `${Math.random() * 4}s`;
    grid.appendChild(cell);
  }
}

// --------------------------- CONTACT FORM ---------------------------

function initContactForm() {
  const form = document.getElementById("contact-form");
  const statusEl = document.getElementById("contact-status");
  if (!form || !statusEl) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      statusEl.textContent = "Please complete all fields before transmitting.";
      statusEl.style.color = "var(--color-danger)";
      return;
    }

    statusEl.style.color = "var(--color-text-soft)";
    statusEl.textContent = "Simulating secure uplink to ground station...";

    setTimeout(() => {
      statusEl.style.color = "var(--color-accent)";
      statusEl.textContent =
        "Message queued in the flight computer. (Frontend only — no backend transmission yet.)";
      form.reset();
    }, 800);
  });
}

// --------------------------- FOOTER YEAR ---------------------------

function initFooterYear() {
  const yearSpan = document.getElementById("footer-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }
}

// --------------------------- INITIALIZATION ---------------------------

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNav();
  renderProjects();
  renderBlogs();
  renderPhotos();
  initPhotoModal();
  initPhotoDropzone();
  initGitHubSection();
  initContactForm();
  initFooterYear();
  initTypingAnimation();
  initRevealOnScroll();

  // Allow transitions after initial layout
  document.body.classList.remove("preload");
});
