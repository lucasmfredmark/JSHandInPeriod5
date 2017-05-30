import { observable } from "mobx"
import axios from 'axios'
const backendURL = "http://localhost:7777/api/"
const booksURL = `${backendURL}books`

// useStrict(true);

//DataStore for this Demo
class BookStore {

  @observable _books = [];


  constructor() {
    this.fetchBooks();
  }


  get books() {
    return this._books;
  }


  getBook(id) {
    if (this._books == null) {
      return null
    }
    var returnBook;
    this._books.forEach((book, index) => {
      if (book._id == id) {
        returnBook = this._books[index]
      }
    })
    console.log("Here is Your book " + returnBook.title)
    return returnBook;
  }


  changeBooks(id) {
    this._books.replace(id);
  }


  editBook(book) {
    var config = {}

    if(book.id == null) throw Error("no Id!")
    axios.put(`${backendURL}books`,{book}, config)
    .then((response) =>{
      console.log(response)
      this.fetchBooks()
    })
    .catch((error) =>{
      console.log(error)
    })
  }


  addBook(book) {

    var config = {}

    axios.post(`${backendURL}books`, { book }, config)
      .then((response) => {
        console.log(response)
        this.fetchBooks()
      })
      .catch((error) => {
        console.log(error)
      })

  }


  deleteBook(book_id) {

    var config = {}

    axios.delete(`${booksURL}/${book_id}`, config)
      .then((response) =>{
        console.log(response)
        this.fetchBooks()
      })
      .catch((error) =>{
        console.log(error)
      })
    }


  //this is asynchronous
  fetchBooks = () => {
    fetch(booksURL)
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        this.changeBooks(response);
        // this._books.replace(response);
        console.log("Got books from server");
      })
  }
}

//this shows how cool MobX is ;)
let store = new BookStore();

//global object in the browser, store has my books array
window.store = store;

export default store;