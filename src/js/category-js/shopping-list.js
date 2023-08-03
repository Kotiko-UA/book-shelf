const bookList = document.querySelector('.shopping-list');

const books = [
    {
      image: 'Example',
      title: 'Example TITLE',
      genre: 'Example GENRE',
      description: 'Example DESC',
      author: 'Example AUTHOR',
    },
  ];

function generateMovieHTML(bookData) {
  const { image, title, genre, description, author } = bookData;
  return `
  <li class="shopping-list-item">
  <img
    src="${image}"
    alt="book's image"
    class="shopping-card-img"
  />
  <div class="right-part-wrap">
    <div class="shopping-card-bin-wrap">
     <div>
        <h4 class="shopping-card-tittle">${title}</h4>

        <p class="shopping-card-genre">${genre}</p>
     </div>
      <a href="" class="shopping-card-bin-link">
        <svg class="img-bin-icon">
          <use href="../img/spryte.svg#icon-trash"></use>
        </svg>
      </a>
    </div>

    <p class="shopping-card-description">${description}
    </p>
    <div class="botton-wrap">
        <p class="shopping-card-author">${author}</p>
    <div class="shopping-card-sponsor-icons">
      <img src="#" alt="amazon"  class="icon-amazon"/>
      <img src="#" alt="apple"  class="icon-apple-book"/>
      <img
        src="#"
        alt="shop" class="icon-book-shop"
      />
    </div>
    </div>
  </div>
</li>
    `

}



books.map(book => {
  bookList.insertAdjacentHTML('beforeend', generateMovieHTML(book));
});
