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
        this.textContent = 'Expand';
      } else {
        content.style.display = 'block';
        // Use requestAnimationFrame to ensure display change happens before adding class
        requestAnimationFrame(() => {
          content.classList.add('active');
        });
        this.textContent = 'Collapse';
      }
    });
  });
});
