/*----------------------DARCK MOD-------------------------*/

let switchMode = document.getElementById('switchMode');
let logo = document.querySelector('.logo');

logo.innerHTML = `<svg class="logo">
        <use href="./img/spryte.svg#icon-logo-light" height="28px"></use>
      </svg>`;

const body = document.querySelector('body');
let theme = document.getElementById('theme');
if (localStorage.getItem('theme') == 'true') {
  if (theme) theme.setAttribute('href', './css/dark-mode.css');
  body.classList.add('dark-theme');
  switchMode.checked = true;

  logo.innerHTML = `<svg class="logo">
        <use href="./img/spryte.svg#icon-logo-dark" height="28px"></use>
      </svg>`;
}
switchMode.onchange = function () {
  if (this.checked) {
    localStorage.setItem('theme', true);
    if (theme) theme.setAttribute('href', './css/dark-mode.css');
    body.classList.add('dark-theme');

    logo.innerHTML = `<svg class="logo">
        <use href="/img/spryte.svg#icon-logo-dark" height="28px"></use>
      </svg>`;
  } else {
    localStorage.setItem('theme', false);
    if (theme) theme.setAttribute('href', './css/light-mode.css');
    body.classList.remove('dark-theme');

    logo.innerHTML = `<svg class="logo">
        <use href="/img/spryte.svg#icon-logo-light" height="28px"></use>
      </svg>`;
  }
};

/*----------------------------OPEN LOG OUT----------------------------- */
let out = document.querySelector('.menu-btn');
let open = document.querySelector('.tupe-out');
out.addEventListener('click', outKlick);

function outKlick() {
  open.classList.toggle('tupe-out_active');
}
