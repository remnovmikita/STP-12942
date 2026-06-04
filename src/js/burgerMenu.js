const openBtnEl = document.querySelector('[data-action="open"]');
const closeBtnEl = document.querySelector('[data-action="close"]');
const burgerMenu = document.querySelector('[data-visible]');

openBtnEl.addEventListener('click', () =>{
  burgerMenu.dataset.visible = 'open';
  document.body.dataset.scroll = "disabled";
});
closeBtnEl.addEventListener('click', () =>{
  burgerMenu.dataset.visible = 'close';
  document.body.dataset.scroll = "enabled";
});

burgerMenu.querySelectorAll('a[href*="#"]').forEach(anchor =>{
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    burgerMenu.dataset.visible = "close";
    document.body.dataset.scroll = "enabled";

    const id = anchor.getAttribute("href").substring(1);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({behavior: "smooth"});
    }
  });
});