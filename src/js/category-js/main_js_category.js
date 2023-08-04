import axios from "axios";
import Notiflix from 'notiflix';

const elements = {
    categoryList: document.querySelector(".js-category-list"),
    books_showcase: document.querySelector(".books-showcase")
}


axios.defaults.baseURL = "https://books-backend.p.goit.global/books";


async function fetchData(URL) {
    return axios.get(URL).then(response => {
        if (response.status !== 200) {
            throw new Error(response.Error);
        }
        return response.data;
    });
}

function fetchCategories() {
    return fetchData("/category-list ");
}


function createCategoriesListMarkup(arr) {
    return arr.map(({list_name}) => `
    <li>${list_name}</li>
    `).join("");
}

function categoryListRequest() {
    fetchCategories()
    .then(data => {
        elements.categoryList.innerHTML=createCategoriesListMarkup(data);
    })
    .catch((err) => {
        console.log(err)
    });
}

categoryListRequest();


function booksMarkup(arr) {
    return arr.map(({_id, book_image, list_name, author}) => `
   <li data-id = '${_id}' class = 'js-book-item'>
        <img src="${book_image}" alt="" />
        <p>${author}</p>
      </li>`)
        .join('')
}

function categoryMarkup(arr) {
    return arr.map(({ list_name, books }) => `
      <h2>${list_name}</h2> 
<div>
    <ul>`+ booksMarkup(books)+ `
    </ul>
    <button type="button">See more</button>
</div>`)
        .join('')
}

function bestSellersListRequest() {
    fetchBestSellers()
    .then(data => {
        elements.books_showcase.innerHTML=categoryMarkup(data);
    })
    .catch((err) => {
        console.log(err)
    });
}

bestSellersListRequest()


function fetchBestSellers() {
    return fetchData("/top-books");
}