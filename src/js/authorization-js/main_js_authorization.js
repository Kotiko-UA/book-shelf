import { signUpModal, signInModal } from './auth_modals';
import {
  logOutUser,
  signIn,
  signInWithGoogle,
  registrateUser,
  updateUserShopList,
} from './auth_firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { hideUserBar, showUserBar } from './auth_user_bar';
//===========================================================

document.addEventListener('click', clickHandlerAuth);

function clickHandlerAuth(e) {
  const inputs = document.querySelectorAll('.form-input');
  inputs.forEach(input => input.classList.remove('invalid'));
  if (e.target.closest('.modal-close-btn')) {
    modalsClose();
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
  if (e.target.closest('.add-delete-book-btn')) {
    if (!localStorage.getItem('uid')) return;
    const bookId = e.target.closest('.modal-window-conteiner').dataset.id;
    updateUserShopList(bookId);
  }
  if (e.target.closest('.js-book-item')) {
    setTimeout(() => {}, 10);
  }
}
function modalsClose() {
  signUpModal.close();
  signInModal.close();
}
const auth = getAuth();
hideShopingList();
onAuthStateChanged(auth, user => {
  if (user) {
    const uid = user.uid;
    localStorage.setItem('uid', uid);
    showUserBar(user);
    showShopingList();
  } else {
    localStorage.removeItem('uid');
    hideUserBar();
    hideShopingList();
  }
  modalsClose();
});

function showShopingList() {
  document.querySelector('.shop-page').style.display = '';
}
function hideShopingList() {
  document.querySelector('.shop-page').style.display = 'none';
}
