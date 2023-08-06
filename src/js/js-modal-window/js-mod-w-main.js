// app.js
import axios from 'axios';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';


const elements = {
  categoryList: document.querySelector(".js-category-list"),
  books_showcase: document.querySelector(".books-showcase"),
};

elements.books_showcase.addEventListener('click', handlerClickOpenModal);
let text;
let btn;

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

      // Save book data to the modal window
      const modalWindow = document.querySelector('.modal-window-conteiner');
      modalWindow.dataset.book = JSON.stringify(bookData);

      text = modalWindow.querySelector('.added-modal-window');
      btn = modalWindow.querySelector('.add-delete-book-btn');

      const arrForBAcket = JSON.parse(localStorage.getItem('KEY')) ?? [];
      const bookId = bookData._id;
      if (checkIfBookIsAdded(bookId, arrForBAcket)) {
        text.classList.remove('after');
        btn.classList.add('small')
        btn.textContent = 'remove from the shopping list';
      } else {
        text.classList.add('after');
        btn.classList.remove('small')
        btn.textContent = 'Add to shopping list';
      }

      modalWindow.addEventListener('click', handlerAddToBascet);
    } catch (error) {
      console.error(error);
    }
  }
}

function openModalWithContent(content) {
  const modal = basicLightbox.create(content);
  modal.show();
}

async function serviceBooks(id) {
  const BASE_URL = 'https://books-backend.p.goit.global/books/';
  const response = await axios.get(`${BASE_URL}${id}`);
  return response.data;
}

function bookModalMarkup({ _id, book_image, list_name, author, description, buy_links: [amazon, Bookshop, Apple, Barnes, IndieBound] } = {}) {
  const markup = `
    <div data-id=${_id} class="modal-window-conteiner">
      <div class="mw-content-conteiner">
        <div class="mw-image-conteiner">
          <img class="book-img-modal-window" src="${book_image}" alt="" />
        </div>
        <div class="mw-data-conteiner">
          <h2 class="book-title-modal">${list_name}</h2>
          <p class="author-modal-window">${author}</p>
          <p class="desc-modal-window">${description}</p>
          <ul class="markets-list-modal-window">
            <li>
              <a href="${amazon.url}">
                <img src="/img/amazon.png" alt="${list_name}">
              </a>
            </li>
            <li>
              <a href="${Bookshop.url}">
                <img src="/img/book-market.png" alt="${list_name}">
              </a>
            </li>
            <li>
              <a href="${Apple.url}">
                <img src="/img/book-shelf.png" alt="${list_name}">
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class = "add-shopping">
        <button class="add-delete-book-btn">Add to shopping list</button>
      </div>
      <div class = "text-conteiner">
      <p class="added-modal-window after">
        Сongratulations! You have added the book to the shopping list. To delete,
        press the button “Remove from the shopping list”.
      </p></div>
    </div>
  `;
  return markup;
}


function checkIfBookIsAdded(bookId, shoppingList) {
  return shoppingList.some((item) => item._id === bookId);
}

function handlerAddToBascet(event) {
  if (!event.target.classList.contains('add-delete-book-btn')) {
    return;
  }

  const bookId = event.target.closest('.modal-window-conteiner').dataset.id;
  const arrForBAcket = JSON.parse(localStorage.getItem('KEY')) ?? [];
  const bookData = JSON.parse(event.target.closest('.modal-window-conteiner').dataset.book);

  if (checkIfBookIsAdded(bookId, arrForBAcket)) {
    // Remove book from the shopping list
    const updatedList = arrForBAcket.filter((item) => item._id !== bookId);
    localStorage.setItem('KEY', JSON.stringify(updatedList));
    text.classList.add('after');
    btn.classList.remove('small')
    btn.textContent = 'Add to shopping list';
  } else {
    // Add book to the shopping list
    arrForBAcket.push(bookData);
    localStorage.setItem('KEY', JSON.stringify(arrForBAcket));
    text.classList.remove('after');
    btn.classList.add('small')
    btn.textContent = 'remove from the shopping list';
  }
}