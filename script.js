// Scroll fade-in
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(
  '.product-intro, .why-card, .comparison-inner, .testimonial-card, .newsletter-inner, .recipes-content'
).forEach((el) => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Newsletter
function handleNewsletter(e) {
  e.preventDefault();
  const input = e.target.querySelector('input');
  const btn = e.target.querySelector('button');
  btn.textContent = 'Subscribed ✓';
  btn.style.background = '#7a9e7e';
  btn.style.borderColor = '#7a9e7e';
  input.value = '';
  setTimeout(() => {
    btn.textContent = 'Subscribe';
    btn.style.background = '';
    btn.style.borderColor = '';
  }, 3000);
}

// Nav scroll opacity
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav.style.borderBottomColor = 'rgba(0,0,0,0.1)';
  } else {
    nav.style.borderBottomColor = 'rgba(0,0,0,0.06)';
  }
});
