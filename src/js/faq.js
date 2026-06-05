document.addEventListener('DOMContentLoaded', () => {
  const accordionButtons = document.querySelectorAll('.faq-question-btn');

  accordionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const parentItem = btn.closest('.faq-item');
      if (!parentItem) return;

      const isActive = parentItem.classList.contains('active');

      // Close all other accordion items
      const allItems = document.querySelectorAll('.faq-item');
      allItems.forEach(item => {
        item.classList.remove('active');
        const itemBtn = item.querySelector('.faq-question-btn');
        if (itemBtn) {
          itemBtn.setAttribute('aria-expanded', 'false');
        }
      });

      if (!isActive) {
        parentItem.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
      } else {
        parentItem.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  });
});
