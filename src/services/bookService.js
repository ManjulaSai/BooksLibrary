import * as genresAPI from "./genreService";

const books = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Life of Pi",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action and Adventure" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "The Three Musketeers",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action and Adventure" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Little Women",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Classics" },
    numberInStock: 8,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "The Boy",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comics" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Watchmen",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comics" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "The Walking Dead",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comics" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Beloved",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Classics" },
    numberInStock: 7,
    dailyRentalRate: 4.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "To Kill A Mockingbird",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Classics" },
    numberInStock: 4,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "The Call of the Wild",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action and Adventure" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471840",
    title: "Carrie",
    genre: { _id: "5b21ca3eeb7f6fbccd471567", name: "Horror" },
    numberInStock: 2,
    dailyRentalRate: 3,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471841",
    title: "Bird Box",
    genre: { _id: "5b21ca3eeb7f6fbccd471567", name: "Horror" },
    numberInStock: 5,
    dailyRentalRate: 2,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471842",
    title: "Hill House",
    genre: { _id: "5b21ca3eeb7f6fbccd471567", name: "Horror" },
    numberInStock: 5,
    dailyRentalRate: 2,
  },
];

export function getBooks() {
  return books;
}

export function getBook(id) {
  return books.find(m => m._id === id);
}

export function saveBook(book) {
  let bookInDB = books.find(b => b._id === book._id) || {};
  bookInDB.title = book.title;
  bookInDB.genre = genresAPI.genres.find(g => g._id === book.genreId);
  bookInDB.numberInStock = book.numberInStock;
  bookInDB.dailyRentalRate = book.dailyRentalRate;

  if (!bookInDB._id) {
    bookInDB._id = Date.now().toString();
    books.push(bookInDB);
  }

  return bookInDB;
}

export function deleteBook(id) {
  let bookInDB = books.find(m => m._id === id);
  books.splice(books.indexOf(bookInDB), 1);
  return bookInDB;
}
