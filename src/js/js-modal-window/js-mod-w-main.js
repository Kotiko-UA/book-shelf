import axios from 'axios';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { bookModalMarkup } from './js-mod-w-markup';
let text;
let btn;
let isModalOpen = false;
let modal = null;
const elements = {
  books_showcase: document.querySelector('.books-showcase'),
};
if (elements && elements.books_showcase)
  elements.books_showcase.addEventListener('click', handlerClickOpenModal);
async function handlerClickOpenModal(evt) {
  const bookItem = evt.target.closest('.js-book-item');
  if (!bookItem) {
    return;
  } else {
    const { id } = bookItem.dataset;
    try {
      const bookData = await serviceBooks(id);
      const modalMarkup = bookModalMarkup(bookData);
      openModalWithContent(modalMarkup);
      const modalWindow = document.querySelector('.modal-window-conteiner');
      modalWindow.dataset.book = JSON.stringify(bookData);
      text = modalWindow.querySelector('.added-modal-window');
      btn = modalWindow.querySelector('.add-delete-book-btn');
      const arrForBAcket = JSON.parse(localStorage.getItem('KEY')) ?? [];
      const bookId = bookData._id;
      if (checkIfBookIsAdded(bookId, arrForBAcket)) {
        text.classList.remove('after');
        btn.classList.add('small');
        btn.textContent = 'remove from the shopping list';
      } else {
        text.classList.add('after');
        btn.classList.remove('small');
        btn.textContent = 'Add to shopping list';
      }

      if (!localStorage.getItem('uid')) {
        btn.textContent = 'Sign up to add to shopping list';
        btn.classList.add('small');
        btn.setAttribute('data-sign-up', true);
      }
      modalWindow.addEventListener('click', handlerAddToBascet);
    } catch (error) {
      console.error(error);
    }
  }
}
async function serviceBooks(id) {
  const BASE_URL = 'https://books-backend.p.goit.global/books/';
  const response = await axios.get(`${BASE_URL}${id}`);
  return response.data;
}
function openModalWithContent(content) {
  modal = basicLightbox.create(content);
  const closeButton = modal.element().querySelector('.btn-close');
  closeButton.addEventListener('click', () => {
    closeModal();
  });
  modal.element().addEventListener('click', handleBackdropClick);
  modal.show();
  document.documentElement.style.overflow = 'hidden';
  isModalOpen = true;
  document.addEventListener('keydown', handleEscapeKeyPress);
}
function closeModal() {
  modal.close();
  document.documentElement.style.overflow = 'auto';
  isModalOpen = false;
  document.removeEventListener('keydown', handleEscapeKeyPress);
  modal.element().removeEventListener('click', handleBackdropClick);
}
function handleEscapeKeyPress(event) {
  if (event.key === 'Escape' && isModalOpen) {
    closeModal();
  }
}
function handleBackdropClick(event) {
  if (event.target === event.currentTarget) {
    closeModal();
  }
}
function checkIfBookIsAdded(bookId, shoppingList) {
  return shoppingList.some(item => item._id === bookId);
}
function handlerAddToBascet(event) {
  if (!event.target.classList.contains('add-delete-book-btn')) {
    return;
  }
  if (!localStorage.getItem('uid')) {
    closeModal();
    return;
  }
  const bookId = event.target.closest('.modal-window-conteiner').dataset.id;
  const arrForBAcket = JSON.parse(localStorage.getItem('KEY')) ?? [];
  const bookData = JSON.parse(
    event.target.closest('.modal-window-conteiner').dataset.book
  );
  if (checkIfBookIsAdded(bookId, arrForBAcket)) {
    const updatedList = arrForBAcket.filter(item => item._id !== bookId);
    localStorage.setItem('KEY', JSON.stringify(updatedList));
    text.classList.add('after');
    btn.classList.remove('small');
    btn.textContent = 'Add to shopping list';
  } else {
    arrForBAcket.push(bookData);
    localStorage.setItem('KEY', JSON.stringify(arrForBAcket));
    text.classList.remove('after');
    btn.classList.add('small');
    btn.textContent = 'remove from the shopping list';
  }
}
