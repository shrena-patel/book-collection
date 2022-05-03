import { fetchBooks, addNewBook, deleteBookApi, getBookCoverImage } from '../apis'

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS'
export const ADD_BOOK = 'ADD_BOOK'
export const DEL_BOOK = 'DEL_BOOK'

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

export function deleteBookAction (bookId) {
  return {
    type: DEL_BOOK,
    bookId
  }
}

// THUNK

export function getBooks () {
  return (dispatch) => {
    fetchBooks()
      .then(res => {
        dispatch(receiveBooks(res))
        return null
      })
      .catch(err => {
        console.log(err.message)
      })
  }
}

export function getBookImageThunk (isbn) {
  return (dispatch) => {
    getBookCoverImage()
      .then(res => {
        console.log(res.text)
        return null
      })
      .catch(err => {
        console.log(err.message)
      })
  }
}

export function addBook (newBook) {
  return (dispatch) => {
    addNewBook(newBook)
      .then(result => {
        dispatch(addNewBookAction(result))
        return null
      })
      .catch(err => {
        console.log(err.message)
      })
  }
}

export function deleteBookThunk (bookId) {
  console.log('thunk 1', bookId)
  return (dispatch) => {
    deleteBookApi(bookId)
      .then(result => {
        console.log('thunk2', result)
        dispatch(receiveBooks(result))
        return null
      })
      .catch(err => {
        console.log(err.message)
      })
  }
}