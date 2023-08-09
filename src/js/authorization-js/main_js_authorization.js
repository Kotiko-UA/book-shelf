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
//onAuthStateChanged слідкує за авторизацією (входом-виходом користовуча)
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

async function getBook(id) {
  const url = `https://books-backend.p.goit.global/books/${id}`;
  const resp = await fetch(url);
  if (!resp.ok) {
    console.log('Error API book');
  }
  const book = await resp.json();

  return book;
}

function showShopingList() {
  document.querySelector('.shop-page').style.display = '';
}
function hideShopingList() {
  document.querySelector('.shop-page').style.display = 'none';
}

function hideUserBar() {
  document.querySelector('.sing-wrap').style.display = '';
  document.querySelector('.but-sing-mob').style.display = 'flex';
  document.querySelectorAll('.log-out-wrap').forEach(el => {
    el.style.display = 'none';
  });
}
const noimageLink = document.querySelector('.user-image img').src;
// 'https://firebasestorage.googleapis.com/v0/b/lets-do-it-bookshelf.appspot.com/o/noimage.png?alt=media&token=308aa6e1-f846-460a-9510-1b4e6e04082b';
function showUserBar(user) {
  document.querySelectorAll('.user-text').forEach(el => {
    el.textContent = user.displayName;
  });
  document.querySelectorAll('.user-image img').forEach(el => {
    el.src = user.photoURL ?? noimageLink;
    el.alt = user.displayName;
  });

  document.querySelectorAll('.log-out-wrap').forEach(el => {
    el.style.display = '';
  });
  document.querySelector('.but-sing-mob').style.display = 'none';
  document.querySelector('.sing-wrap').style.display = 'none';
}
