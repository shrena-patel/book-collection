import { fetchBooks, addNewBook, deleteBookApi, getBookCoverImage, updateBookCoverImage } from '../apis'

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS'
export const ADD_BOOK = 'ADD_BOOK'
export const DEL_BOOK = 'DEL_BOOK'
export const RECEIVE_COVER = 'RECEIVE_COVER'
export const UPDATE_COVER = 'UPDATE_COVER'

export function receiveBooks (arr) {
  return {
    type: RECEIVE_BOOKS,
    books: arr || null
  }
}

export function receiveBookCover (cover, isbn) {
  return {
    type: RECEIVE_COVER,
    cover: cover || null,
    isbn: isbn
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

export function updateBookCoverAction (id, cover) {
  return {
    type: UPDATE_COVER,
    id: id,
    cover: cover || null
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
    getBookCoverImage(isbn)
      .then(res => {
        // dispatch() something instead of console.log
        console.log(res, 'res in action')
        dispatch(receiveBookCover(res, isbn))
        console.log('!!!res:', res, 'isbn:', isbn)
        // res is the cover url, use that to save to the db where the isbn matches
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

export function updateBookCoverThunk (id, url) {
  console.log('updatethunk', id, url)
  return (dispatch) => {
    // api
    //then dispatch updateBookCoverAction
  }
}
