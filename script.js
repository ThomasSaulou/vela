// Header: transparent over the hero, solid once scrolled (always solid with data-solid)
const header = document.getElementById('siteHeader');
const solidHeader = header.hasAttribute('data-solid');
const onScroll = () => header.classList.toggle('is-scrolled', solidHeader || window.scrollY > 40);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Scroll reveal
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Product page: gallery counter (mobile carousel) + sticky CTA
const gallery = document.getElementById('pdpGallery');
if (gallery) {
  const index = document.getElementById('pdpIndex');
  gallery.addEventListener('scroll', () => {
    index.textContent = Math.round(gallery.scrollLeft / gallery.clientWidth) + 1;
  }, { passive: true });

  const sticky = document.getElementById('pdpSticky');
  const actions = document.querySelector('.pdp-actions');
  new IntersectionObserver(([entry]) => {
    sticky.classList.toggle('is-shown', !entry.isIntersecting && entry.boundingClientRect.top < 0);
  }).observe(actions);
}
