// import { RECEIVE_BOOKS } from '../actions'
// const initialState = [{ id: 1, title: 'Sunset', author: 'Jessie Cave', cover: 'book-placeholder.jpeg', year_released: '2021' }]
const initialState = []

function bookReducer (state = initialState, action) {
  // console.log(state, 'state in reducer')
  switch (action.type) {
    // case comes from action file
    case 'RECEIVE_BOOKS':
      return action.books
    case 'ADD_BOOK':
      return [...state, action.newBook]
    case 'DEL_BOOK':
      return state.filter((book) => book.id !== action.bookId)
    case 'UPDATE_BOOK':
      return state.map((book) => {
        // console.log(action.book, 'action.book in reducer')
        // console.log(action.id, 'action.id in reducer')
        if (book.isbn === action.book.isbn) {
          console.log('mapping')
          book = action.book
          console.log(book, 'eachbook after map')
        }
        return book
      })
    case 'RECEIVE_COVER':
      // in here need to return state, then if make book.coverimage = action.cover
      return state.map(book => {
        // if the isbn of the action matches the isbn of the book, then do the below
        if (action.isbn === book.isbn) {
          book.cover = action.cover
        }
        // Only want to return the individual book rather than the whole state
        return book
      })
    // case 'UPDATE_BOOK':
    //   return action.books
    default:
      return state
  }
}
export default bookReducer
