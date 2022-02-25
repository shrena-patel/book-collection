import { fetchBooks, addNewBook } from '../apis'

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS'
export const ADD_BOOK = 'ADD_BOOK'

export function receiveBooks (arr) {
  return {
    type: RECEIVE_BOOKS,
    books: arr || null
  }
}

export function addNewBookAction (book) {
  return {
    type: ADD_BOOK,
    book: book
  }
}

// export function receiveBooks (books) {
//     return {
//         type: RECEIVE_BOOKS,
//         books: books.map(book => book.data)
//     }
// }

// THUNK

export function getBooks () {
  return (dispatch) => {
    fetchBooks()
      .then(res => {
        console.log('res action', res)
        dispatch(receiveBooks(res))
        return null
      })
      .catch(err => {
        err.status(500).json({ err: err.message })
      })
  }
}

export function addBook (newBook) {
  return (dispatch) => {
    addNewBook(newBook)
      .then(result => {
        dispatch(receiveBooks(result))
        return null
      })
      .catch(err => {
        console.log(err.message)
      })
  }
}
