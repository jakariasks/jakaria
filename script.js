const html = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section[id]");
const progressBar = document.getElementById("scrollProgress");
const revealItems = document.querySelectorAll(".reveal");
const skillBars = document.querySelectorAll(".skill-bar span");

// Theme
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme) {
  html.setAttribute("data-theme", savedTheme);
}

themeToggle.addEventListener("click", () => {
  const current = html.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  localStorage.setItem("portfolio-theme", next);
});

// Mobile menu
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Active nav on scroll
const updateActiveNav = () => {
  let currentId = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 140;
    if (window.scrollY >= sectionTop) {
      currentId = section.getAttribute("id");
    }
  });

  navItems.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentId}`) {
      link.classList.add("active");
    }
  });
};

// Scroll progress
const updateScrollProgress = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = `${progress}%`;
};

// Reveal on scroll
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");

        if (entry.target.querySelectorAll(".skill-bar span").length) {
          const bars = entry.target.querySelectorAll(".skill-bar span");
          bars.forEach((bar) => {
            bar.style.width = bar.dataset.width;
          });
        }
      }
    });
  },
  {
    threshold: 0.14,
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

// Fallback skill animation in case cards are already visible
const animateVisibleSkillBars = () => {
  skillBars.forEach((bar) => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      bar.style.width = bar.dataset.width;
    }
  });
};

window.addEventListener("scroll", () => {
  updateActiveNav();
  updateScrollProgress();
});

window.addEventListener("load", () => {
  updateActiveNav();
  updateScrollProgress();
  animateVisibleSkillBars();
});


// Typing title
const typedTitle = document.getElementById("typedTitle");
const rotatingText = document.getElementById("rotatingText");
const heroCard = document.getElementById("heroCard");

const titleText = "Jakaria Hasan";
let titleIndex = 0;

function typeTitle() {
  if (!typedTitle) return;
  if (titleIndex < titleText.length) {
    typedTitle.textContent += titleText.charAt(titleIndex);
    titleIndex++;
    setTimeout(typeTitle, 55);
  }
}

window.addEventListener("load", () => {
  typeTitle();
});

// Rotating skills text
const rotatingWords = [
  "Web Designer",
  "Developer",
  "AI Learner",
  "CSE Student",
  "Problem Solver"
];

let rotatingIndex = 0;

function rotateWords() {
  if (!rotatingText) return;

  rotatingText.classList.add("switching");

  setTimeout(() => {
    rotatingIndex = (rotatingIndex + 1) % rotatingWords.length;
    rotatingText.textContent = rotatingWords[rotatingIndex];
    rotatingText.classList.remove("switching");
  }, 300);
}

setInterval(rotateWords, 2200);

// Glowing moving card effect
if (heroCard) {
  heroCard.addEventListener("mousemove", (e) => {
    const rect = heroCard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -10;
    const rotateY = ((x / rect.width) - 0.5) * 10;

    heroCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    heroCard.style.setProperty("--mx", `${x}px`);
    heroCard.style.setProperty("--my", `${y}px`);
  });

  heroCard.addEventListener("mouseleave", () => {
    heroCard.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    heroCard.style.setProperty("--mx", "50%");
    heroCard.style.setProperty("--my", "50%");
  });
}

// =========================
// EmailJS Contact Form
// =========================

const EMAILJS_PUBLIC_KEY = "C3D6F3affWTxc-mS1";
const EMAILJS_SERVICE_ID = "service_2im4fcp";
const EMAILJS_TEMPLATE_ID = "template_jphpgx8";

if (window.emailjs) {
  emailjs.init({
    publicKey: EMAILJS_PUBLIC_KEY,
    blockHeadless: true,
    limitRate: {
      id: "portfolio-contact-form",
      throttle: 10000,
    },
  });
}

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const sendBtn = document.getElementById("sendBtn");

if (contactForm) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    if (!window.emailjs) {
      formStatus.textContent = "Email service failed to load.";
      formStatus.className = "form-status error";
      return;
    }

    sendBtn.disabled = true;
    sendBtn.textContent = "Sending...";
    formStatus.textContent = "";
    formStatus.className = "form-status";

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        contactForm
      );

      formStatus.textContent = "Message sent successfully!";
      formStatus.className = "form-status success";
      contactForm.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      formStatus.textContent = "Failed to send message. Please try again.";
      formStatus.className = "form-status error";
    } finally {
      sendBtn.disabled = false;
      sendBtn.textContent = "Send Message";
    }
  });
}