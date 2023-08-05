
import axios from 'axios';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css'


const elements = {
    categoryList: document.querySelector(".js-category-list"),
    books_showcase: document.querySelector(".books-showcase")
}

elements.books_showcase.addEventListener('click', handlerClickOpenModal);
let text;
let btn; 
let modalWindow;

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
      text = modalWindow.querySelector('.added-modal-window');
      btn = modalWindow.querySelector('.add-delete-book')
      text.classList.add('after');
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
  return response.data; // Повертайте тільки дані з response, а не увесь об'єкт response
}


function bookModalMarkup({ _id, book_image, list_name, author, description, buy_links: [amazon, Bookshop, Apple, Barnes, IndieBound]} = {}) {
  const markup = `
  <div data-id=${_id} class = "modal-window-conteiner">
    <div  class = "mw-content-conteiner">
      <div class ="mw-image-conteiner">
        <img class = "book-img-modal-window" src="${book_image}" alt="" />
      </div>
      <div class ="mw-data-conteiner">
        <h2 class = "book-title-modal">${list_name}</h2>
        <p class = "author-modal-window">${author}</p>
        <p class = "desc-modal-window">${description}</p>
        <ul class= "markets-list-modal-window">
        <li  class="">
          <a href="${amazon.url}" class="">
            <img src="/img/amazon.png" alt="${list_name}">
          </a>
        </li>
        <li class="">
          <a href="${Bookshop.url}" class="">
            <img src="/img/book-market.png" alt="${list_name}">
          </a>
        </li>
        <li class="">
          <a href="${Apple.url}" class="">
            <img src="/img/book-shelf.png" alt="${list_name}">
          </a>
        </li>
      </ul>
      </div>
    </div>
    <button class = "add-delete-book">ADD TO SHOPPING LIST</button>
    <p class="added-modal-window">
      Сongratulations! You have added the book to the shopping list. To delete,
      press the button “Remove from the shopping list”.
    </p>
  </div>
 `;
  return markup;
}

function handlerAddToBascet(event) {
  if (!event.target.classList.contains('add-delete-book')) {
    return;
  }

  const bookId = event.target.closest('.modal-window-conteiner').dataset.id;
  const arrForBAcket = JSON.parse(localStorage.getItem('KEY')) ?? [];

  if (checkIfBookIsAdded(bookId, arrForBAcket)) {
    // Видалити книгу зі списку покупок
    const updatedList = arrForBAcket.filter((item) => item.id !== bookId);
    localStorage.setItem('KEY', JSON.stringify(updatedList));
    text.classList.add('after');
    btn.textContent = 'ADD TO SHOPPING LIST';
  } else {
    // Додати книгу до списку покупок
    arrForBAcket.push({ id: bookId });
    localStorage.setItem('KEY', JSON.stringify(arrForBAcket));
    text.classList.remove('after');
    btn.textContent = 'remove from the shopping list';
  }
}

function checkIfBookIsAdded(bookId, shoppingList) {
  return shoppingList.some((item) => item.id === bookId);
}