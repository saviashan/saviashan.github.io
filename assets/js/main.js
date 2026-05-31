// main.js

document.addEventListener('DOMContentLoaded', function() {
  // --- Sticky Header ---
  const header = document.getElementById('header');
  const hero = document.getElementById('top');
  const headerHeight = header.offsetHeight;

  window.addEventListener('scroll', function() {
    if (window.scrollY > hero.offsetHeight - headerHeight) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });

  // --- Experience Tabs ---
  const tabButtons = document.querySelectorAll('.tab-button');
  const jobDetails = document.querySelectorAll('.job-details');

  // Show the first tab by default
  if (tabButtons.length > 0) {
    tabButtons[0].classList.add('active');
    jobDetails[0].classList.add('active');
  }

  tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // Deactivate all buttons and details
      tabButtons.forEach(btn => btn.classList.remove('active'));
      jobDetails.forEach(detail => detail.classList.remove('active'));

      // Activate the clicked button and corresponding details
      button.classList.add('active');
      jobDetails[index].classList.add('active');
    });
  });

  // --- Smooth Scrolling ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // --- Project Modals ---
  const openModalButtons = document.querySelectorAll('[data-modal-open]');
  const closeModalButtons = document.querySelectorAll('[data-modal-close]');

  openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modalId = button.getAttribute('data-modal-open');
      const modal = document.getElementById(modalId);
      modal.style.display = 'block';
    });
  });

  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal');
      modal.style.display = 'none';
    });
  });

  window.addEventListener('click', event => {
    if (event.target.classList.contains('modal')) {
      event.target.style.display = 'none';
    }
  });
});
