// DOM Elements
const hamburgerButton = document.querySelector('#hamburger-button');
const overlay = document.querySelector('#overlay');
const navMenu = document.querySelector('#nav-menu');
const navLinks = document.querySelectorAll('.nav-links');

// Menu Button - Click
hamburgerButton.addEventListener('click', () => {
    hamburgerButton.children[0].classList.toggle('hidden');
    hamburgerButton.children[1].classList.toggle('hidden');
    navMenu.classList.toggle('translate-y-[0%]');
    overlay.classList.toggle('hidden');
});

// Nav-links - Click (Close menu when clicked & goes to link-location)
navLinks.forEach((navLink) => {
     navLink.addEventListener('click', (e) => {
          if (navMenu.classList.contains('translate-y-[0%]')) {
            hamburgerButton.children[0].classList.toggle('hidden');
            hamburgerButton.children[1].classList.toggle('hidden');
            navMenu.classList.toggle('translate-y-[0%]');
            overlay.classList.toggle('hidden');
          }
     });
});

// Overlay - Click (Close menu When clicked Outside)
overlay.addEventListener('click', (e) => {
    hamburgerButton.children[0].classList.toggle('hidden');
    hamburgerButton.children[1].classList.toggle('hidden');
    navMenu.classList.toggle('translate-y-[0%]');
    overlay.classList.toggle('hidden');
});

// Escape key - keydown (Close menu with escape Key)
document.addEventListener('keydown', (e) => {
     if (e.key === 'Escape' && navMenu.classList.contains('translate-y-[0%]')) {
        hamburgerButton.children[0].classList.toggle('hidden');
        hamburgerButton.children[1].classList.toggle('hidden');
        navMenu.classList.toggle('translate-y-[0%]');
        overlay.classList.toggle('hidden');
     }
});