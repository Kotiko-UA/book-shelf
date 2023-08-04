import * as basicLightbox from 'basiclightbox';

const openModalBtn = document.querySelector('.modal-open-btn');

openModalBtn.addEventListener('click', openModalAuth);

function openModalAuth() {
  instance.show();
}

document.addEventListener('click', clickHandlerAuth);

function clickHandlerAuth(e) {
  if (e.target.closest('.modal-close-btn')) {
    instance.close();
  }
}

const instance = basicLightbox.create(
  `<div class="modal">
    <button type="button" class="modal-close-btn">
      <svg class="icon-close" width="28" height="28">
        <use href="img/spryte.svg#icon-close"></use>
      </svg>
    </button>

    <div class="form-wraper">
      <form class="form" action="submit" autocomplete="off">
        <div class="form-field">
          <input
            id="name"
            class="form-input"
            type="text"
            name="user-name"
            minlength="2"
            required
            autofocus
            placeholder=" "
            title="Djon Smit"
          />

          <label for="name" class="form-label">Name* </label>
        </div>

        <div class="form-field">
          <input
            id="email"
            class="form-input"
            type="email"
            name="email"
            required
            placeholder=" "
          />

          <label for="email" class="form-label">Email* </label>
          <svg class="icon" width="28" height="28">
            <use href="img/spryte.svg#icon-mail"></use>
          </svg>

        </div>
        <div class="form-field">
          <input
            id="password"
            class="form-input"
            type="password"
            name="password"
            required
            placeholder=" "
            minlength="6"
          />

          <label for="password" class="form-label">Password* </label>
          <svg class="icon" width="28" height="28">
            <use href="img/spryte.svg#icon-lock"></use>
          </svg>

        </div>

        <button class="form-button">Sign up</button>
      </form>
    </div>
  </div>
`,
  {
    onShow: () => document.addEventListener('keydown', onEscKeyPress),
    onClose: () => document.removeEventListener('keydown', onEscKeyPress),
  }
);

function onEscKeyPress(evt) {
  console.log(evt.code);
  const ESC_KEY_CODE = 'Escape';
  if (evt.code === ESC_KEY_CODE) {
    instance.close();
  }
}
//========================================
// const form = document.querySelector('.js-register-form');

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();

//   const formData = new FormData(event.currentTarget);

//   console.log(formData);

//   formData.forEach((value, name) => {
//     console.log('onFormSubmit -> name', name);
//     console.log('onFormSubmit -> value', value);
//   });
// }
