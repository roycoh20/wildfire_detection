const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector("#nav-links");
const navItems = Array.from(document.querySelectorAll(".nav-links a"));

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

const sections = navItems
  .map((item) => document.querySelector(item.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window && sections.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;

      navItems.forEach((item) => {
        item.classList.toggle("active", item.getAttribute("href") === `#${visible.target.id}`);
      });
    },
    { rootMargin: "-20% 0px -65% 0px", threshold: [0.1, 0.4, 0.7] }
  );

  sections.forEach((section) => observer.observe(section));
}

document.querySelectorAll("[data-download]").forEach(async (placeholder) => {
  const path = placeholder.getAttribute("data-download");
  if (!path) return;

  try {
    const response = await fetch(path, { method: "HEAD" });
    if (!response.ok) return;

    const link = document.createElement("a");
    link.className = "button";
    link.href = path;
    link.textContent = placeholder.getAttribute("data-ready-label") || "Download";
    placeholder.replaceWith(link);
  } catch {
    // Keep the disabled placeholder when previewing from file:// or when the PDF is absent.
  }
});
