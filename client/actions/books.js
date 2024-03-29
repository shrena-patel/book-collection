import { fetchBooks, addNewBook, deleteBookApi, getBookCoverImage, updateBookApi, fetchBookById } from '../apis'

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS'
export const RECEIVE_BOOK = 'RECEIVE_BOOK'
export const ADD_BOOK = 'ADD_BOOK'
export const DEL_BOOK = 'DEL_BOOK'
export const UPDATE_BOOK = 'UPDATE_BOOK'
export const RECEIVE_COVER = 'RECEIVE_COVER'
export const UPDATE_COVER = 'UPDATE_COVER'
export const ADD_REVIEW = 'ADD_REVIEW'

// ACTIONS ****************************************** //

export function receiveBooks (arr) {
  return {
    type: RECEIVE_BOOKS,
    books: arr || null
  }
}

export function receiveBook (oneBook) {
  return {
    type: RECEIVE_BOOK,
    book: oneBook || null
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

export function updateBookAction (id, book) {
  return {
    type: UPDATE_BOOK,
    id,
    book
  }
}

export function updateBookCoverAction (id, cover) {
  return {
    type: UPDATE_COVER,
    id: id,
    cover: cover || null
  }
}

export function addBookReview (id, review) {
  return {
    type: ADD_REVIEW,
    id: id,
    review: review || null
  }
}

// THUNKS ************************************************** //

export function getBooks () {
  return (dispatch) => {
    fetchBooks()
      .then(res => {
        dispatch(receiveBooks(res))
        return null
      })
      .catch(err => {
        return err.status(500).send(err.message)
      })
  }
}

export function getBookById (id) {
  return (dispatch) => {
    fetchBookById(id)
      .then(res => {
        return dispatch(receiveBook(res))
      })
      .catch(err => {
        return err.status(500).send(err.message)
      })
  }
}

export function getBookImageThunk (isbn) {
  return (dispatch) => {
    getBookCoverImage(isbn)
      .then(cover => {
        dispatch(receiveBookCover(cover, isbn))
        return null
      })
      .catch(err => {
        return err.status(500).send(err.message)
      })
  }
}

export function addBook (newBook) {
  return (dispatch) => {
    // do getBookCoverImage here before saving the book
    // so the book is being saved with all the info including cover image
    // then maybe don't need to do an updatebook
    // can leave book cover image api where it is in bookinfo for now
    getBookCoverImage(newBook.isbn)
      .then(coverImage => {
        newBook.cover = coverImage
        return addNewBook(newBook)
          .then(result => {
            dispatch(addNewBookAction(result))
            return null
          })
          .catch(err => {
            return err.status(500).send(err.message)
          })
      })
      .catch(err => {
        return err.status(500).send(err.message)
      })
  }
}

// async version of addBook - not sure if it works
// export function addBook (newBook) {
//   return async (dispatch) => {
//     // do getBookCoverImage here before saving the book
//     // so the book is being saved with all the info including cover image
//     // then maybe don't need to do an updatebook
//     // can leave book cover image api where it is in bookinfo for now
//     const coverImage = await getBookCoverImage(newBook.isbn)
//     newBook.cover = coverImage
//     addNewBook(newBook)
//       .then(result => {
//         dispatch(addNewBookAction(result))
//         return null
//       })
//       .catch(err => {
//         console.log(err.message)
//       })
//   }
// }

export function deleteBookThunk (bookId) {
  return (dispatch) => {
    deleteBookApi(bookId)
      .then(result => {
        dispatch(receiveBooks(result))
        return null
      })
      .catch(err => {
        return err.status(500).send(err.message)
      })
  }
}

export function updateBookThunk (id, book) {
  return (dispatch) => {
    updateBookApi(id, book)
      .then(res => {
        console.log(res)
        dispatch(receiveBooks(res))
        return null
      })
      .catch(err => {
        return err.status(500).send(err.message)
      })
  }
}
