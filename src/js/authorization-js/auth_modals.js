import * as basicLightbox from 'basiclightbox';

const spriteImg = document.querySelector('.arrow-right-wrap use').href.baseVal;
const spriteImgPath = spriteImg.replace('#icon-arrow-right', '');

const signUpModal = basicLightbox.create(
  `<div class="modal">
    <button type="button" class="modal-close-btn">
      <svg class="icon-close" width="28" height="28">
        <use href="${spriteImgPath}#icon-close"></use>
      </svg>
    </button>

    <div class="form-wraper">
      <form class="form" id="signUpForm" autocomplete="off">
        <div class="form-field">
          <input
            id="name"
            class="form-input"
            type="text"
            name="name"
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
            <use href="${spriteImgPath}#icon-mail"></use>
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
            <use href="${spriteImgPath}#icon-lock"></use>
          </svg>

        </div>

        <button class="form-button sign-up-btn" type="button">Sign up</button>
      </form>
      <div class="wraper-min-btn">
        <button class="sign-min-btn active" type="button" data-sign-up>sign up</button>
        <button class="sign-min-btn" type="button" data-sign-in>sign in</button>
      </div>
       <button class="sign-min-btn sign-google-btn" type="button" data-g-sign-in>
            <svg class="icon-google"" width="28" height="28">
                <use href="${spriteImgPath}#icon-google"></use>
            </svg>
        Sign in with Google
       </button>
    </div>
  </div>
`,
  {
    onShow: () => {
      modalOnShow();
    },
    onClose: () => {
      modalOnClose();
    },
  }
);

const signInModal = basicLightbox.create(
  `<div class="modal">
    <button type="button" class="modal-close-btn">
      <svg class="icon-close" width="28" height="28">
        <use href="${spriteImgPath}#icon-close"></use>
      </svg>
    </button>

    <div class="form-wraper">
      <form class="form" id="signInForm" autocomplete="off">

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
            <use href="${spriteImgPath}#icon-mail"></use>
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
            <use href="${spriteImgPath}#icon-lock"></use>
          </svg>

        </div>

        <button class="form-button sign-in-btn" type="button">Sign in</button>
      </form>
      <div class="wraper-min-btn">
        <button class="sign-min-btn" type="button" data-sign-up>sign up</button>
        <button class="sign-min-btn active" type="button" data-sign-in>sign in</button>
      </div>
      <button class="sign-min-btn sign-google-btn" type="button" data-g-sign-in>
            <svg class="icon-google" width="28" height="28">
                <use href="${spriteImgPath}#icon-google"></use>
            </svg>
         Sign in with Google
       </button>

    </div>
  </div>
`,
  {
    onShow: () => {
      modalOnShow();
    },
    onClose: () => {
      modalOnClose();
    },
  }
);
function modalOnShow() {
  setTimeout(() => {
    document.querySelector('body').classList.add('no-scroll');
    document.addEventListener('keydown', onEscKeyPress);
  }, 10);
}

function modalOnClose() {
  document.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('no-scroll');
}

function onEscKeyPress(evt) {
  console.log(evt.code);
  const ESC_KEY_CODE = 'Escape';
  if (evt.code === ESC_KEY_CODE) {
    signUpModal.close();
    signInModal.close();
  }
}
export { signUpModal, signInModal };
