const toggleBtn = document.querySelector('.header__nav-toggle');
const listContainer = document.querySelector('.header__nav-list-container');
const body = document.querySelector('body');

const icons = document.querySelectorAll('.footer__social-icon');

toggleBtn.addEventListener('click', function () {
  this.classList.toggle('open');
  listContainer.classList.toggle('open');
  body.classList.add('overflowHidden');
});

icons.forEach((icon) => {
  const use = icon.querySelector('use');
  const name = use.getAttribute('href').slice(1);
  const svg = document.getElementById(name);
  const path = svg.querySelector('path');

  icon.addEventListener('mouseenter', function () {
    path.style.fill = '#31d35c';
  });

  icon.addEventListener('mouseleave', function () {
    path.style.fill = '#fff';
  });
});
