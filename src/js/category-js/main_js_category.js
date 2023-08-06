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
    return  `<li class="js-category-item category-hover" name="allCategories" >All categories</li>`+arr.map(({list_name}) => `
    <li class="js-category-item">${list_name}</li>
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
        <img src="${book_image}" alt="${title}" class="img-category"/>
        <p>${title}</p>
        <p>${author}</p>
      </li>`)
        .join('')
}

//class="categoryName"

function createBestSellersMarkup(arr) {
   return `<h1 class="titleCategory">Best Sellers <span class="last-word-in-catName">Books</span></h1>` + arr.map(({ list_name, books }) => `
    <h2 class="categoryName">${list_name}</h2>  
<div>
    <ul>`+ createBooksMarkup(books)+ `
    </ul>
    <button type="button" class="btnSeeMore">See more</button>
</div>`)
        .join('')
}

function getMarkupForCategoryHeader(categoryName) {
    let categoryName
    
    categoryName.split(({ list_name }).join(" ")
    .slice())
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

function fetchCategoryBooks(categoryName) {
    return fetchData(`/category?category=${categoryName}`);
}


function getCategoryMarkup(arr, categoryName) {
    return `<h2 class="titleCategory">${categoryName}</h2>` + 
`<div>
    <ul>`+ createBooksMarkup(arr)+ `</ul>
</div>`
}


elements.categoryList.addEventListener("click", clickOnCategoryList);

function clickOnCategoryList(event) {
    event.preventDefault();
    event.currentTarget.firstChild.classList.remove('category-hover');
    
    if (event.target.getAttribute("name") === "allCategories") {
        getBestSellersList()
    } else {
        getCategoryBooks(event.target.textContent);
    }
    
}
