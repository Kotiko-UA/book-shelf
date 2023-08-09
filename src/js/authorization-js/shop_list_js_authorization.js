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
import { generatePage } from '../shoping-js/main-shopping-list';

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
  if (e.target.closest('.shopping-card-bin-link')) {
    const bookId = e.target.closest('.shopping-list-item').dataset.id;
    updateUserShopList(bookId);
  }
}
//onAuthStateChanged слідкує за авторизацією (входом-виходом користовуча)
const auth = getAuth();
//отримуемо з локал сторадж список книг
let arrForBacket = JSON.parse(localStorage.getItem('KEY')) ?? [];
onAuthStateChanged(auth, user => {
  if (user) {
    const uid = user.uid;
    showUserBar(user);
    //generatePage([]);
    syncShopingList(user).then(() => {});
  } else {
    hideUserBar();
    hideShopingList();
  }
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

  return book;
}

async function syncShopingList(user) {
  getUserShopList(user.uid)
    .then(list => {
      // видаляємо книги що немає в списку з БД
      arrForBacket = arrForBacket.filter(book => {
        return list.includes(book._id);
      });

      // додаємо книги що є в БД, але немає в списку локал сторадж
      list.forEach(id => {
        const inList = arrForBacket.find(({ _id }) => _id == id);
        if (!inList) {
          getBook(id)
            .then(book => {
              arrForBacket.push(book);

              localStorage.setItem('KEY', JSON.stringify(arrForBacket));
              generatePage(arrForBacket);
            })
            .catch(error => console.log(error.message));
        }
      });
    })
    .catch(error => {
      console.dir(error);
    });
}
function showShopingList() {
  document.querySelector('.shop-page').style.display = '';
}
console.log(location.pathname);
let pathArr = location.pathname.split('/');

function hideShopingList() {
  document.querySelector('.shop-page').style.display = 'none';
  let pathArr = location.pathname.split('/');
  console.log(pathArr);
  if ('shopping-list.html' === pathArr[pathArr.length - 1]) {
    pathArr[pathArr.length - 1] = 'index.html';
    console.log(pathArr);
    location.href = pathArr.join('/');
  }
}

function showUserBar(user) {
  const userName = document.querySelector('.user-text');
  userName.textContent = user.displayName;
  document.querySelector('.user-image img').src =
    user.photoURL ?? '/img/noimage.png';
  document.querySelector('.user-image img').alt = user.displayName;

  document.querySelector('.log-out-wrap').style.display = '';
  document.querySelector('.sing-wrap').style.display = 'none';
}
