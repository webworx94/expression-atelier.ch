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
