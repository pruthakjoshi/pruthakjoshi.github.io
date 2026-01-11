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
        this.textContent = 'Learn More';
        this.classList.remove('expanded');
      } else {
        content.style.display = 'block';
        // Use requestAnimationFrame to ensure display change happens before adding class
        requestAnimationFrame(() => {
          content.classList.add('active');
        });
        this.textContent = 'Show Less';
        this.classList.add('expanded');
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
