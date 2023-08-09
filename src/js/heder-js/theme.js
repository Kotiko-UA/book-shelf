import spryteUrl from '../../img/spryte.svg';
/*----------------------DARCK MOD-------------------------*/

let switchMode = document.getElementById('switchMode');
let logo = document.querySelector('.logo');

logo.innerHTML = `<svg class="logo">
        <use href="${spryteUrl}#icon-logo-light" height="28px"></use>
      </svg>`;

const body = document.querySelector('body');

if (localStorage.getItem('theme') == 'true') {
  body.classList.add('dark-theme');
  switchMode.checked = true;

  logo.innerHTML = `<svg class="logo">
        <use href="${spryteUrl}#icon-logo-dark" height="28px"></use>
      </svg>`;
}
switchMode.onchange = function () {
  if (this.checked) {
    localStorage.setItem('theme', true);

    body.classList.add('dark-theme');

    logo.innerHTML = `<svg class="logo">
        <use href="${spryteUrl}#icon-logo-dark" height="28px"></use>
      </svg>`;
  } else {
    localStorage.setItem('theme', false);

    body.classList.remove('dark-theme');

    logo.innerHTML = `<svg class="logo">
        <use href="${spryteUrl}#icon-logo-light" height="28px"></use>
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

// _______________________BURGER_____________________________
let oupenBurger = document.querySelector('.burger-open-mob');
let closeBurger = document.querySelector('.burger-close-mob');
let burger = document.querySelector('.burger-section');
oupenBurger.addEventListener('click', oupenBur);
closeBurger.addEventListener('click', closeBur);
function oupenBur() {
  document.body.classList.toggle('no-scroll');
  oupenBurger.classList.toggle('oupenBur');
  burger.classList.toggle('burgActiv');
  closeBurger.classList.toggle('closeBur');
}
function closeBur() {
  document.body.classList.toggle('no-scroll');
  oupenBurger.classList.toggle('oupenBur');
  burger.classList.toggle('burgActiv');
  closeBurger.classList.toggle('closeBur');
}
