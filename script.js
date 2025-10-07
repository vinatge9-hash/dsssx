// Interactive enhancements and on-scroll animations
document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for reveal-on-scroll elements
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => observer.observe(el));

  // Optional: simple on-load fade for hero (elements with js-fade-in)
  const toFade = document.querySelectorAll('.js-fade-in');
  toFade.forEach(el => {
    el.style.opacity = '0';
    requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  });
});
