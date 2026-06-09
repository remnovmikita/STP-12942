document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector("#loader");
  const img1 = document.querySelector('[data-img="first"]');
  const img2 = document.querySelector('[data-img="second"]');


  setTimeout(() => {
    img1.dataset.rotate = "true";
    document.body.dataset.scroll = 'disabled';
    setTimeout(() => {
      img1.dataset.active = "false";
      img2.dataset.active = "true";
      img2.dataset.rotate = "true";
    }, 1000);
  }, 100);

  setTimeout(() => {
    document.body.dataset.scroll = 'enabled';
    loader.dataset.state = "hidden";
    loader.style.opacity = "0";
    setTimeout(() => loader.style.display = "none", 100);
  }, 2000);
});
