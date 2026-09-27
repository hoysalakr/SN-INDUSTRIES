const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const sections = document.querySelectorAll("main section[id]");
const links = document.querySelectorAll(".nav a[href^='#']");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(link => link.classList.remove("active"));
      const current = document.querySelector(`.nav a[href="#${entry.target.id}"]`);
      if (current) current.classList.add("active");
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach(section => observer.observe(section));

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const company = document.getElementById("company").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const requirement = document.getElementById("requirement").value;
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent(`Website Enquiry - ${requirement}`);
  const body = encodeURIComponent(
`Hello SN Industries,

I would like to enquire about your services.

Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone}
Requirement: ${requirement}

Message:
${message}

Regards,
${name}`
  );

  window.location.href =
    `mailto:info@snindustriesmysuru.com?subject=${subject}&body=${body}`;
});

document.getElementById("year").textContent = new Date().getFullYear();
