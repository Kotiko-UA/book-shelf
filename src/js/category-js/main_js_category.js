import axios from 'axios';
import '../heder-js/theme';
import Notiflix from 'notiflix';

const elements = {
  categoryList: document.querySelector('.js-category-list'),
  books_showcase: document.querySelector('.books-showcase'),
  loader: document.querySelector('.loader'),
};

axios.defaults.baseURL = 'https://books-backend.p.goit.global/books';

async function fetchData(URL) {
  elements.loader.style.display = 'inline-block';
  return axios.get(URL).then(response => {
    if (response.status !== 200) {
      throw new Error(response.Error);
    }
    return response.data;
  });
}

function fetchCategories() {
  return fetchData('/category-list ');
}

function createCategoriesListMarkup(arr) {
  return (
    `<li class="js-category-item dark-theme" id="allCategories">All categories</li>` +
    arr
      .map(
        ({ list_name }) => `
    <li class="js-category-item">${list_name}</li>
    `
      )
      .sort((a, b) => a.localeCompare(b))
      .join('')
  );
}

function getCategoryList() {
  fetchCategories()
    .then(data => {
      elements.categoryList.innerHTML = createCategoriesListMarkup(data);
    })
    .catch(err => {
      console.log(err);
    });
}

getCategoryList();

function createBooksMarkup(arr) {
  return arr
    .map(
      ({ _id, book_image, title, author }) => `
   <li data-id = '${_id}' class = 'js-book-item'>
 <div class="wrapper">
   <div class="thumb-category">
        <img src="${book_image}" alt="${title}" class="img-category" loading="lazy"/>
        </div>
        <p class="catalogue-book-title">${title}</p>
        <p class="catalogue-book-author">${author}</p>
   </div>
      </li>`
    )
    .join('');
}

function createBestSellersMarkup(arr) {
  return (
    getMarkupForCategoryHeader('Best Sellers Books') +
    arr
      .map(
        ({ list_name, books }) =>
          `
     <h2 class="categoryName">${list_name}</h2>
     <div class="wrapper-for-catList">
     <ul class="category-list">` +
          createBooksMarkup(books) +
          `</ul>
    </div>
    <button type="button" class="btnSeeMore" id="${list_name}">See more</button>`
      )
      .join('')
  );
}

function getMarkupForCategoryHeader(categoryName) {
  elements.loader.style.display = 'none';
  let categoryNameSplited = categoryName.split(' ');
  let originalColor = categoryNameSplited
    .slice(0, categoryNameSplited.length - 1)
    .join(' ');
  let violetColor = categoryNameSplited[categoryNameSplited.length - 1];
  return `<h2 class="titleCategory">${originalColor} <span class="last-word-in-catName">${violetColor}</span></h2>`;
}

function getBestSellersList() {
  fetchBestSellers()
    .then(data => {
      elements.books_showcase.innerHTML = createBestSellersMarkup(data);
      let buttons = elements.books_showcase.querySelectorAll('.btnSeeMore');
      for (let button of buttons) {
        button.addEventListener('click', clickOnBtnSeeMore);
      }
      if (data.length === 0) {
        throw "Sorry, this category doesn't contain any book";
      }
    })
    .catch(err => {
      console.log(err);
      Notiflix.Notify.failure(err);
    });
}

getBestSellersList();
function fetchBestSellers() {
  return fetchData('/top-books');
}

function getCategoryBooks(categoryName) {
  fetchCategoryBooks(categoryName)
    .then(data => {
      elements.books_showcase.innerHTML = getCategoryMarkup(data, categoryName);
      if (data.length === 0) {
        throw "Sorry, this category doesn't contain any book";
      }
    })
    .catch(err => {
      console.log(err);
      Notiflix.Notify.failure(err);
    });
}

function fetchCategoryBooks(categoryName) {
  return fetchData(`/category?category=${categoryName}`);
}

function getCategoryMarkup(arr, categoryName) {
  return (
    getMarkupForCategoryHeader(categoryName) +
    `<div class="category-book-wrapper">
    <ul class="category-book-list">` +
    createBooksMarkup(arr) +
    `</ul>
</div>`
  );
}
if (elements && elements.categoryList)
  elements.categoryList.addEventListener('click', clickOnCategoryList);

function clickOnCategoryList(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
  for (let element of event.currentTarget.children) {
    element.classList.remove('category-hover');
  }
  event.target.classList.add('category-hover');
  if (event.target.getAttribute('id') === 'allCategories') {
    getBestSellersList();
  } else {
    getCategoryBooks(event.target.textContent);
  }
}

function clickOnBtnSeeMore(evt) {
  evt.preventDefault();

  for (let element of elements.categoryList.children) {
    if (element.textContent == evt.target.getAttribute('id')) {
      element.classList.add('category-hover');
    } else {
      element.classList.remove('category-hover');
    }
  }
  getCategoryBooks(evt.target.getAttribute('id'));
}
