import axios from "axios";
import Notiflix from 'notiflix';

const elements = {
    categoryList: document.querySelector(".js-category-list"),
    books_showcase: document.querySelector(".books-showcase"),
    btnSeeMore: document.querySelector(".btnSeeMore")
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
    `).sort((a, b) => a.localeCompare(b))
        .join("");
    
}

function getCategoryList() {
    fetchCategories()
    .then(data => {
        elements.categoryList.innerHTML=createCategoriesListMarkup(data);
    })
    .catch((err) => {
        console.log(err)
    });
}

getCategoryList();


function createBooksMarkup(arr) {
    return arr.map(({_id, book_image, title, author}) => `
   <li data-id = '${_id}' class = 'js-book-item'>
        <img src="${book_image}" alt="" />
        <p>${title}</p>
        <p>${author}</p>
      </li>`)
        .join('')
}

function createBestSellersMarkup(arr) {
    return `<h1>Best Sellers Books</h1>` + arr.map(({ list_name, books }) => `
    <h2>${list_name}</h2> 
<div>
    <ul>`+ createBooksMarkup(books)+ `
    </ul>
    <button type="button" class="btnSeeMore">See more</button>
</div>`)
        .join('')
}

function getBestSellersList() {
    fetchBestSellers()
    .then(data => {
        elements.books_showcase.innerHTML=createBestSellersMarkup(data);
    })
    .catch((err) => {
        console.log(err)
    });
}

getBestSellersList()


function fetchBestSellers() {
    return fetchData("/top-books");
}


function getCategoryBooks(categoryName) {
    fetchCategoryBooks(categoryName)
    .then(data => {
        elements.books_showcase.innerHTML=getCategoryMarkup(data, categoryName);
    })
    .catch((err) => {
        console.log(err)
    });
}

//getCategoryBooks("Hardcover Nonfiction")


function fetchCategoryBooks(categoryName) {
    return fetchData(`/category?category=${categoryName}`);
}


function getCategoryMarkup(arr, categoryName) {
    return `<h1>${categoryName}</h1>` + 
`<div>
    <ul>`+ createBooksMarkup(arr)+ `</ul>
</div>`
}


elements.categoryList.addEventListener("click", clickOnCategoryList);

function clickOnCategoryList(event) {
    event.preventDefault();
    getCategoryBooks(event.target.textContent);
}
