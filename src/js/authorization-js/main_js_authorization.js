import { signUpModal, signInModal } from './auth_modals';
import {
  logOutUser,
  signIn,
  signInWithGoogle,
  registrateUser,
} from './auth_firebase';

//===========================================================

document.addEventListener('click', clickHandlerAuth);

function clickHandlerAuth(e) {
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
