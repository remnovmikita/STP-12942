document.addEventListener('DOMContentLoaded', () => {
  const accordionButtons = document.querySelectorAll('[data-faq="button"]');
  accordionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const parentItem = btn.closest('[data-faq="item"]');
      if (!parentItem) return;
      const isActive = parentItem.getAttribute('data-state') === 'active';
      const allItems = document.querySelectorAll('[data-faq="item"]');
      allItems.forEach(item => {
        item.removeAttribute('data-state');
        const itemBtn = item.querySelector('[data-faq="button"]');
        if (itemBtn) {
          itemBtn.setAttribute('aria-expanded', 'false');
        }
      });
      if (!isActive) {
        parentItem.setAttribute('data-state', 'active');
        btn.setAttribute('aria-expanded', 'true');
      } else {
        parentItem.removeAttribute('data-state');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  });
});
