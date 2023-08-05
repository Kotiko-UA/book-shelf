import axios from 'axios';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css'


const elements = {
    categoryList: document.querySelector(".js-category-list"),
    books_showcase: document.querySelector(".books-showcase")
}

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

function bookModalMarkup({ book_image, list_name, author, description } = {}) {
  const markup = `
  <div class = "modal-window-conteiner">
    <div class = "mw-content-conteiner">
      <div>
        <img class = "book-img-modal-window" src="${book_image}" alt="" />
      </div>
      <div>
        <h2 class = "book-title-modal">${list_name}</h2>
        <p class = "author-modal-window">${author}</p>
        <p class = "desc-modal-window">${description}</p>
      </div>
    </div>
    <button class = "add-btn-modal-window">ADD TO SHOPPING LIST</button>
  </div>
 `;
  return markup;
}
