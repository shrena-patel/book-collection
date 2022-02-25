import { fetchBooks, addNewBook } from '../apis'

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS'
export const ADD_BOOK = 'ADD_BOOK'

export function receiveBooks (arr) {
  return {
    type: RECEIVE_BOOKS,
    books: arr || null
  }
}

export function addNewBookAction (newBook) {
  return {
    type: ADD_BOOK,
    newBook
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
        console.log('res in getBooks', res)
        dispatch(receiveBooks(res))
        return null
      })
      .catch(err => {
        console.log(err.message)
      })
  }
}

export function addBook (newBook) {
  return (dispatch) => {
    console.log('THUNK', newBook)
    addNewBook(newBook)
      .then(result => {
        console.log('res in addBook', result)
        dispatch(addNewBookAction(result))
        return null
      })
      .catch(err => {
        console.log(err.message)
      })
  }
}
