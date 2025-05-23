// script.js
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
const language = document.querySelector('.language');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('show');
  language.classList.toggle('show');
  document.body.classList.toggle('nav-open'); // wichtig!
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 1000) {
      navToggle.classList.remove('open');
      navLinks.classList.remove('show');
      language.classList.remove('show');
      document.body.classList.remove('nav-open');
    }
  });
});