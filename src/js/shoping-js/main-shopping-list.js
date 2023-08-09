import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import '../authorization-js/shop_list_js_authorization';
import '../heder-js/theme';
import '../footer/footerTeam';
import '../support-js/support';
import { doc } from 'firebase/firestore/lite';
import iconTrash from '../../img/spryte.svg#icon-trash';
import amazonI from '../../img/amazon.png';
import amazonBlack from '../../img/amazon-black-theme.png';
import bookMarket from '../../img/book-market.png';
import bookShelf from '../../img/book-shelf.png';

const bookList = document.querySelector('.shopping-list');
const titleShoopingList = document.querySelector('.shopping-title');
const emptyShopList = document.querySelector('.empty-shopping-list-wrap');
const paginationContainer = document.querySelector('#tui-pagination-container');
const supportEl = document.querySelector('.support-ukr-shopping-list');

let arrForBacket = JSON.parse(localStorage.getItem('KEY')) ?? [];
let itemsPerPage = 3;
let currentPage = 1;
let startIdx = (currentPage - 1) * itemsPerPage;
let endIdx = startIdx + itemsPerPage;
let curData = arrForBacket.slice(startIdx, endIdx);

///// get значение визибл для пагинации...\\\\
let span = document.querySelector('.visible');
let vis = getVisible();
function getVisible() {
  const log = window.matchMedia('(min-width: 768px)');
  if (log.matches) {
    span.textContent = '3';
  } else {
    span.textContent = '2';
  }
  return Number(span.textContent);
}

let options = {
  totalItems: arrForBacket.length,
  itemsPerPage: itemsPerPage,
  visiblePages: vis,
  page: currentPage,
  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
};

let pagination = new Pagination(paginationContainer, options);

generatePage(curData);
getVisible();

function generatePage(curData) {
  // не видаляти цю строчку, бо міняється дінамічно arrForBacket !!!!!!
  let arrForBacket = JSON.parse(localStorage.getItem('KEY')) ?? [];
  pagination.reset(arrForBacket.length);
  // не видаляти!!!!!!
  bookList.innerHTML = '';
  if (!arrForBacket.length) {
    emptyShopList.style.display = 'block';
    paginationContainer.style.display = 'none';
    supportEl.style.marginBottom = '184px';
    titleShoopingList.classList.replace(
      'full-title-margin',
      'empty-title-margin'
    );
  } else {
    emptyShopList.style.display = 'none';
    paginationContainer.style.display = 'block';
    supportEl.style.marginBottom = '337px';
    titleShoopingList.classList.replace(
      'empty-title-margin',
      'full-title-margin'
    );
    bookList.insertAdjacentHTML('beforeend', createMarkupBook(curData));
  }
}

pagination.on('beforeMove', e => {
  // не видаляти цю строчку, бо міняється дінамічно arrForBacket !!!!!!
  let arrForBacket = JSON.parse(localStorage.getItem('KEY')) ?? [];
  // не видаляти!!!!!!
  currentPage = e.page;
  startIdx = (currentPage - 1) * itemsPerPage;
  endIdx = startIdx + itemsPerPage;
  const curData = arrForBacket.slice(startIdx, endIdx);
  generatePage(curData);
});

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
            <use class="img-bin-use" href="${iconTrash}"></use>
          </svg>
      </button>
    </div>
    <p class="shopping-card-description">${description}
    </p>
    <div class="botton-wrap">
        <p class="shopping-card-author">${author}</p>
              <ul class="markets-list-shopping">
              <li>
                <a href="${amazon.url}">
                  <img src="${amazonI} alt="${list_name}" class="icon-amazon light-theme-amazon">
                  <img src="${amazonBlack}" alt="${list_name}" class="icon-amazon dark-theme-amazon">

                </a>
              </li>
              <li>
                <a href="${Bookshop.url}">
                  <img src="${bookMarket}" alt="${list_name}" class="icon-apple-book">
                </a>
              </li>
              <li>
                <a href="${Apple.url}">
                <img src="${bookShelf}" alt="${list_name}" class="icon-book-shop">
                </a>
    </div>
  </div>
</li>`
    )
    .join('');
}

bookList.addEventListener('click', e => {
  if (
    e.target.classList.contains('shopping-card-bin-link') ||
    e.target.classList.contains('img-bin-icon') ||
    e.target.classList.contains('img-bin-use')
  ) {
    onButtonDeleteClick(e);
  }
});

function onButtonDeleteClick(event) {
  let arrForBacket = JSON.parse(localStorage.getItem('KEY')) ?? [];
  const { id } = event.target.closest('.shopping-list-item').dataset;
  const removeIndexFromLocalStorage = arrForBacket.findIndex(
    item => item._id === id
  );
  arrForBacket.splice(removeIndexFromLocalStorage, 1);
  localStorage.setItem('KEY', JSON.stringify(arrForBacket));

  curData = arrForBacket.slice(startIdx, endIdx);
  generatePage(curData);
}
export { generatePage };
