import { signUpModal, signInModal } from './auth_modals';
import {
  logOutUser,
  signIn,
  signInWithGoogle,
  registrateUser,
} from './auth_firebase';
import {} from './auth_valid_form';

//===========================================================

document.addEventListener('click', clickHandlerAuth);

function clickHandlerAuth(e) {
  const inputs = document.querySelectorAll('.form-input');
  inputs.forEach(input => input.classList.remove('invalid'));
  if (e.target.closest('.modal-close-btn')) {
    signUpModal.close();
    signInModal.close();
  }
  if (e.target.closest('[data-sign-up]')) {
    signUpModal.show();
    signInModal.close();
  }
  if (e.target.closest('[data-sign-in]')) {
    signUpModal.close();
    signInModal.show();
  }
  if (e.target.closest('.log-out-btn')) {
    logOutUser();
  }
  if (e.target.closest('.sign-in-btn')) {
    signIn();
  }
  if (e.target.closest('[data-g-sign-in]')) {
    signInWithGoogle();
  }

  if (e.target.closest('.sign-up-btn')) {
    registrateUser();
  }
}
//document.querySelector('body').classList.add('dark-theme');
