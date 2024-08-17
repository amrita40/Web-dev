document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation
    document.querySelectorAll('nav ul li a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Toggle mobile navigation
    const nav = document.querySelector('nav');
    const navToggle = document.querySelector('.nav-toggle');
    
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  });
  