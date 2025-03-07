const allImgEl = document.querySelectorAll('#img');

window.addEventListener('scroll', () => {
  allImgEl.forEach((el) => {
    if (window.scrollY > 1) {
      el.classList.add('fixed');
    } else {
      el.classList.remove('fixed');
    }
  });
});
