import { signUpModal, signInModal } from './auth_modals';
import {
  logOutUser,
  signIn,
  signInWithGoogle,
  registrateUser,
  updateUserShopList,
  getUserShopList,
} from './auth_firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
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
    const bookId = e.target.closest('.modal-window-conteiner').dataset.id;
    updateUserShopList(bookId);
  }
}
function modalsClose() {
  signUpModal.close();
  signInModal.close();
}
//onAuthStateChanged слідкує за авторизацією (входом-виходом користовуча)
const auth = getAuth();
hideShopingList();
onAuthStateChanged(auth, user => {
  if (user) {
    const uid = user.uid;
    showUserBar(user);
    showShopingList();
  } else {
    hideUserBar();
    hideShopingList();
  }
  modalsClose();
});
function hideUserBar() {
  document.querySelector('.sing-wrap').style.display = '';
  document.querySelector('.log-out-wrap').style.display = 'none';
}
async function getBook(id) {
  const url = `https://books-backend.p.goit.global/books/${id}`;
  const resp = await fetch(url);
  if (!resp.ok) {
    console.log('Error API book');
  }
  const book = await resp.json();
  //   console.log(book);
  return book;
}

function showShopingList() {
  document.querySelector('.shop-page').style.display = '';
}
function hideShopingList() {
  document.querySelector('.shop-page').style.display = 'none';
}

function showUserBar(user) {
  const userName = document.querySelector('.user-text');
  userName.textContent = user.displayName;
  document.querySelector('.user-image img').src =
    user.photoURL ?? './img/noimage.png';
  document.querySelector('.user-image img').alt = user.displayName;

  document.querySelector('.log-out-wrap').style.display = '';
  document.querySelector('.sing-wrap').style.display = 'none';
}
