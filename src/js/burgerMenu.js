document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.querySelector('.burger-menu');
  const closeBtn = document.querySelector('.btn-close');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (openBtn && mobileMenu) {
    openBtn.addEventListener('click', () => {
      mobileMenu.setAttribute('data-visible', 'open');
    });
  }

  if (closeBtn && mobileMenu) {
    closeBtn.addEventListener('click', () => {
      mobileMenu.setAttribute('data-visible', 'close');
    });
  }
});