import iconClose from '../../img/spryte.svg#icon-close';
import amazon from '../../img/amazon.png';
import bookMarket from '../../img/book-market.png';
import bookShelf from '../../img/book-shelf.png';
export function bookModalMarkup({
  _id,
  book_image,
  title,
  author,
  description,
  buy_links: [amazon, Bookshop, Apple, Barnes, IndieBound],
} = {}) {
  const markup = `
    <div data-id=${_id} class="modal-window-conteiner">
      <button class = "btn-close">
        <svg class="icon-close">
          <use href="${iconClose}">
        </svg>
      </button>
      <div class="mw-content-conteiner">
        <div class="mw-image-conteiner">
          <img class="book-img-modal-window" src="${book_image}" alt="" />
        </div>
        <div class="mw-data-conteiner">
          <h2 class="book-title-modal">${title}</h2>
          <p class="author-modal-window">${author}</p>
          <p class="desc-modal-window">${description}</p>
          <ul class="markets-list-modal-window">
            <li>
              <a href="${amazon.url}">
                <img class = "img-market"src="${amazon}" alt="${title}">
              </a>
            </li>
            <li>
              <a href="${Bookshop.url}">
                <img class = "img-market" src="${bookMarket}" alt="${title}">
              </a>
            </li>
            <li>
              <a href="${Apple.url}">
                <img class = "img-market" src="${bookShelf}" alt="${title}">
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
        Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.
      </p></div>
    </div>
  `;
  return markup;
}
