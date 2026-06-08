document.addEventListener('DOMContentLoaded', () => {
  const accordionButtons = document.querySelectorAll('[data-faq="button"]');
  accordionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const parentItem = btn.closest('[data-faq="item"]');
      if (!parentItem) return;
      const isActive = parentItem.classList.contains('active');
      const allItems = document.querySelectorAll('[data-faq="item"]');
      allItems.forEach(item => {
        item.classList.remove('active');
        const itemBtn = item.querySelector('[data-faq="button"]');
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
