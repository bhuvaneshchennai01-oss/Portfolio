// Photo upload
function loadPhoto(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    const placeholder = document.getElementById('photoPlaceholder');
    if (placeholder) {
      const img = document.createElement('img');
      img.src = e.target.result;
      img.className = 'hero-photo';
      img.alt = 'Bhuvaneshwaran';
      placeholder.replaceWith(img);
    } else {
      const heroPhoto = document.querySelector('.hero-photo');
      if (heroPhoto) {
        heroPhoto.src = e.target.result;
      }
    }
  };
  reader.readAsDataURL(file);
}

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// API endpoint click
document.querySelectorAll('.api-endpoint').forEach(ep => {
  ep.addEventListener('click', () => {
    document.querySelectorAll('.api-endpoint').forEach(e => e.classList.remove('active'));
    ep.classList.add('active');
  });
});

// Smooth nav highlight
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 80) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current
      ? 'var(--accent)' : '';
  });
});
