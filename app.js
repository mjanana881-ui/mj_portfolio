// =====================
// APP.JS - Interactions & Animations
// =====================

document.addEventListener('DOMContentLoaded', () => {

  // Fade in body
  document.body.classList.add('fade-in');

  // Smooth scroll for all anchor links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Animate buttons on hover
  const buttons = document.querySelectorAll('button, .btn');
  buttons.forEach(btn => {
    btn.addEventListener('mouseover', () => {
      btn.style.transform = 'scale(1.1)';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'scale(1)';
    });
  });

  // Animate images on hover (Photos Page)
  const photoCards = document.querySelectorAll('.photo-card');
  photoCards.forEach(card => {
    card.addEventListener('mouseover', () => {
      card.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
    });
  });

});