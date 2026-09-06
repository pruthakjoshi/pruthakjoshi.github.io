// Projects page JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const toggleButtons = document.querySelectorAll('.toggle-btn');
  
  toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const isExpanded = content.classList.contains('active');
      
      if (isExpanded) {
        content.classList.remove('active');
        content.style.display = 'none';
        this.textContent = 'Learn more';
        this.classList.remove('expanded');
        this.setAttribute('aria-expanded', 'false');
      } else {
        content.style.display = 'block';
        requestAnimationFrame(() => {
          content.classList.add('active');
        });
        this.textContent = 'Show less';
        this.classList.add('expanded');
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });
  
  // Smooth scroll for TOC links
  document.querySelectorAll('#toc a').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offset = 80; // Account for sticky header
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
});
