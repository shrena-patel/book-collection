// import { RECEIVE_BOOKS } from '../actions'
// const initialState = [{ id: 1, title: 'Sunset', author: 'Jessie Cave', cover: 'book-placeholder.jpeg', year_released: '2021' }]
const initialState = []

function bookReducer (state = initialState, action) {
  console.log(state, 'state in reducer')
  switch (action.type) {
    // case comes from action file
    case 'RECEIVE_BOOKS':
      return action.books
    case 'ADD_BOOK':
      return [...state, action.newBook]
    case 'DEL_BOOK':
      return state.filter((book) => book.id !== action.bookId)
    case 'RECEIVE_COVER':
      // in here need to return state, then if make book.coverimage = action.cover
      return state.map(book => {
        book.cover = action.cover
        console.log(state, 'statei in reducer2')
        return state
      })
    default:
      return state
  }
}
export default bookReducer
