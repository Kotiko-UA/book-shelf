// import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
// import { KEY } from '../js-modal-window/js-mod-w-main';
// console.log(KEY);

const bookList = document.querySelector('.shopping-list');

let arrForBacket = JSON.parse(localStorage.getItem('KEY')) ?? [];
console.log(arrForBacket);
const emptyShopList = document.querySelector('.empty-shopping-list-wrap');

generatePage();

//вимальовує пустий або повний шопінг ліст
function generatePage() {
  let arrForBacket = JSON.parse(localStorage.getItem('KEY')) ?? [];

  if (!arrForBacket.length) {
    if (emptyShopList) emptyShopList.style.display = 'block';
  } else {
    if (emptyShopList) emptyShopList.style.display = 'none';
  }
}

if (bookList)
  bookList.insertAdjacentHTML('beforeend', createMarkupBook(arrForBacket));

function createMarkupBook(arr) {
  return arr
    .map(
      ({
        _id,
        book_image,
        title,
        list_name,
        author,
        description,
        buy_links: [amazon, Bookshop, Apple],
      }) => `
  <li class="shopping-list-item" data-id=${_id} >
  <img
    src="${book_image}"
    alt="book's image"
    class="shopping-card-img"
  />
  <div class="right-part-wrap">
    <div class="shopping-card-bin-wrap">
     <div>
        <h4 class="shopping-card-tittle">${title}</h4>

        <p class="shopping-card-genre">${list_name}</p>
     </div>
     <button type="button" class="shopping-card-bin-link">
          <svg class="img-bin-icon">
            <use href="../img/spryte.svg#icon-trash"></use>
          </svg>
      </button>
    </div>

    <p class="shopping-card-description">${description}
    </p>
    <div class="botton-wrap">
        <p class="shopping-card-author">${author}</p>


              <ul class="markets-list-modal-window">
              <li>
                <a href="${amazon.url}" class="icon-amazon">
                  <img src="../../img/amazon.png" alt="${list_name}">
                </a>
              </li>
              <li>
                <a href="${Bookshop.url}" class="icon-apple-book">
                  <img src="../../img/book-market.png" alt="${list_name}">
                </a>
              </li>
              <li>
                <a href="${Apple.url}"  class="icon-book-shop">
                <img src="/img/book-shelf.png" alt="${list_name}">
                </a>
    </div>
  </div>
</li> `
    )
    .join(' ');
}

const shoppingBinBtns = document.querySelectorAll('.shopping-card-bin-link');

shoppingBinBtns.forEach(function (shoppingBinBtn) {
  shoppingBinBtn.addEventListener('click', onButtonDeleteClick);
});

function onButtonDeleteClick(event) {
  const { id } = event.target.closest('.shopping-list-item').dataset;
  const removeIndexFromLocalStorage = arrForBacket.findIndex(
    item => item._id === id
  );

  arrForBacket.splice(removeIndexFromLocalStorage, 1);
  localStorage.setItem('KEY', JSON.stringify(arrForBacket));
  const liEl = event.target.closest('.shopping-list-item');
  liEl.remove();
  generatePage();
}
