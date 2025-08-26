// Scroll reveal animations
document.addEventListener('DOMContentLoaded', function() {
  const reveals = document.querySelectorAll('.reveal');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });
  
  reveals.forEach(section => {
    observer.observe(section);
  });
  
  // Initialize zoom functionality
  initZoom();
});

// Zoom functionality for portfolio images
function initZoom() {
  const images = document.querySelectorAll('.portfolio-gallery img');
  images.forEach(img => {
    img.addEventListener('click', function() {
      // Remove zoom from all images first
      images.forEach(otherImg => {
        if (otherImg !== this) {
          otherImg.classList.remove('zoomed');
        }
      });
      
      // Toggle zoom for clicked image
      this.classList.toggle('zoomed');
    });
  });
}

// Close zoom when clicking outside
document.addEventListener('click', function(e) {
  if (!e.target.closest('.portfolio-gallery img')) {
    document.querySelectorAll('.portfolio-gallery img.zoomed').forEach(img => {
      img.classList.remove('zoomed');
    });
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});