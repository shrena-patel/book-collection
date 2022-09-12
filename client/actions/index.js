import { fetchBooks, addNewBook, deleteBookApi, getBookCoverImage, updateBookCoverImageApi } from '../apis'

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
      .then(cover => {
        // dispatch() something instead of console.log
        console.log(cover, 'res in action')
        dispatch(receiveBookCover(cover, isbn))
        console.log('!!!res:', cover, 'isbn:', isbn)
        dispatch(updateBookCoverThunk(cover, isbn))
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
    // do getBookCoverImage here before saving the book
    // so the book is being saved with all the info including cover image
    // then maybe don't need to do an updatebook
    // can leave book cover image api where it is in bookinfo for now
    getBookCoverImage(newBook.isbn)
      .then(coverImage => {
        newBook.cover = coverImage
        addNewBook(newBook)
          .then(result => {
            dispatch(addNewBookAction(result))
            return null
          })
          .catch(err => {
            console.log(err.message)
          })
      })
      .catch(err => {
        console.log(err.message)
      })
  }
}

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

export function updateBookCoverThunk (cover, isbn) {
  console.log('updatethunk', cover, isbn)
  return (dispatch) => {
    // internal api call to api.js then to route to update the book
    // then dispatch updateBookCoverAction - might not need to do this - just do the api call to update the book
    updateBookCoverImageApi(cover, isbn)
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
