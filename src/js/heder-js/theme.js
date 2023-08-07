/*----------------------DARCK MOD-------------------------*/

let switchMode = document.getElementById("switchMode")
let logo = document.querySelector(".logo")


logo.innerHTML = `<svg class="logo">
        <use href="./img/spryte.svg#icon-logo-light" height="28px"></use>
      </svg>`


if (localStorage.getItem('theme') == "true") {
  theme.setAttribute('href', './css/dark-mode.css')
  switchMode.checked = true

  logo.innerHTML = `<svg class="logo">
        <use href="./img/spryte.svg#icon-logo-dark" height="28px"></use>
      </svg>`
}
switchMode.onchange = function () {
  let theme = document.getElementById("theme")
  if (this.checked) {
    localStorage.setItem('theme', true)
    theme.setAttribute('href', './css/dark-mode.css')

    logo.innerHTML = `<svg class="logo">
        <use href="./img/spryte.svg#icon-logo-dark" height="28px"></use>
      </svg>`

  } else {
    localStorage.setItem('theme', false)
    theme.setAttribute('href', './css/light-mode.css')

    logo.innerHTML = `<svg class="logo">
        <use href="./img/spryte.svg#icon-logo-light" height="28px"></use>
      </svg>`
  }
}

/*----------------------------OPEN LOG OUT----------------------------- */
let out = document.querySelector('.menu-btn')
let open = document.querySelector('.tupe-out')
out.addEventListener('click', outKlick)

function outKlick() {

  open.classList.toggle("tupe-out_active")
}