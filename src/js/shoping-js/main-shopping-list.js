// // import Pagination from 'tui-pagination';
// // import 'tui-pagination/dist/tui-pagination.css';

// // const BOOK_ID_INFO = 'book-id-info' - взяти від Ані
// const bookList = document.querySelector('.shopping-list');

// const choosedBooksArray = JSON.parse(localStorage.getItem(BOOK_ID_INFO)) || [];
// console.log('choosedBooks', choosedBooks);
// //прилітає масив доданих у кошик книг

// choosedBooksArray.map(book => {
//   bookList.insertAdjacentHTML('beforeend', generateMovieHTML(book));
// });
// function generateMovieHTML(bookData) {
//   const { book_image, list_name, author, description } = bookData;
//   return `
//   <li class="shopping-list-item">
//   <img
//     src="${book_image}"
//     alt="book's image"
//     class="shopping-card-img"
//   />
//   <div class="right-part-wrap">
//     <div class="shopping-card-bin-wrap">
//      <div>
//         <h4 class="shopping-card-tittle">${list_name}</h4>

//         <p class="shopping-card-genre">${book_id_genre}</p>
//      </div>
//       <a href="" class="shopping-card-bin-link">
//         <button type="button" class ="btn-png-bin">
//           <svg class="img-bin-icon">
//             <use href="../img/spryte.svg#icon-trash"></use>
//           </svg>
//       </button>

//       </a>
//     </div>

//     <p class="shopping-card-description">${description}
//     </p>
//     <div class="botton-wrap">
//         <p class="shopping-card-author">${author}</p>
//     <div class="shopping-card-sponsor-icons">
//       <img src="#" alt="amazon"  class="icon-amazon"/>
//       <img src="#" alt="apple"  class="icon-apple-book"/>
//       <img
//         src="#"
//         alt="shop" class="icon-book-shop"
//       />
//     </div>
//     </div>
//   </div>
// </li> `;
// }

// /////////////приклад масив для тесту, надалі видалити
// // const books = [
// //   {
// //     image: 'Example',
// //     title: 'Example TITLE',
// //     genre: 'Example GENRE',
// //     description: 'Example DESC',
// //     author: 'Example AUTHOR',
// //   },
// // ];


// //////////// додавання книг в локал сторидж, та повернення книг з локалу

// // function saveToLocalStorage({ book_image, title, author, description }) {
// //   const cartBooks = JSON.parse(localStorage.getItem(BOOK_ID_INFO)) || [];
// //   cartBooks.push({

// //     book_image:book_image.textContent,
// //     title,
// //     author,
// //     description,
// //   });

// //   localStorage.setItem(BOOK_ID_INFO, JSON.stringify(cartBooks));

// //   const choosedBooks = JSON.parse(localStorage.getItem(BOOK_ID_INFO)) || [];
// // console.log("choosedBooks", choosedBooks)
// // }

// // функція для видалення книги при нажиманні смітника
// const shoppingBin = document.querySelector('.btn-png-bin');

// shoppingBin.addEventListener('click', onButtonDeletClick);
// function onButtonDeletClick(event) {
//   if (!event.target.classList.contains('btn-png-bin')) {
//     return;
//   } else {
//     const { id } = Number(
//       event.target.closest('класс родителя кнопки').dataset
//     );
//     // const page = pagination.getCurrentPage();
//     const removeIndexFromLocalStorage = choosedBooksArray.findIndex(
//       item => item.id === id
//     );
//     choosedBooksArray.splice(removeIndexFromLocalStorage, 1);
//     localStorage.setItem('ключ', 'массив первоначальный');
//   }
// }
