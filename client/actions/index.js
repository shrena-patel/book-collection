import { fetchBooks } from '../apis/index'

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS'

export function receiveBooks (arr) {
  return {
    type: RECEIVE_BOOKS,
    books: arr || null
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
        err.status(500).json({err: err.message})
      })
  }
}
