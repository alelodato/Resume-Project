// Mobile-only carousel for .p1 and .p2 inside .mobile-layout
// Leaves desktop layout untouched.

document.addEventListener("DOMContentLoaded", () => {
  const mobileLayout = document.querySelector(".mobile-layout");
  if (!mobileLayout) return;

  const sections = mobileLayout.querySelectorAll(".p1, .p2");

  sections.forEach((section) => {
    const slides = Array.from(section.querySelectorAll("a")); // keep your <a> as-is
    if (slides.length <= 1) return;

    let current = 0;
    let startX = 0;
    let isDragging = false;

    // Indicators
    const indicators = document.createElement("div");
    indicators.classList.add("mobile-carousel-indicators");
    slides.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => showSlide(i));
      indicators.appendChild(dot);
    });
    section.appendChild(indicators);
    const dots = indicators.querySelectorAll(".dot");

    // Init
    slides.forEach((el, i) => {
      el.style.display = i === 0 ? "block" : "none";
    });

    function showSlide(idx) {
      slides[current].style.display = "none";
      dots[current].classList.remove("active");
      current = (idx + slides.length) % slides.length;
      slides[current].style.display = "block";
      dots[current].classList.add("active");
    }

    // Touch swipe
    section.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    });
    section.addEventListener("touchend", (e) => {
      if (!isDragging) return;
      const diff = e.changedTouches[0].clientX - startX;
      if (Math.abs(diff) > 50) {
        showSlide(current + (diff < 0 ? 1 : -1));
      }
      isDragging = false;
    });

    // Auto-rotate (pause on touch)
    let interval = setInterval(() => showSlide(current + 1), 6000);
    section.addEventListener("touchstart", () => clearInterval(interval));
    section.addEventListener("touchend", () => {
      interval = setInterval(() => showSlide(current + 1), 6000);
    });
  });
});
