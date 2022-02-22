// import { RECEIVE_BOOKS } from '../actions'
// const initialState = [{ id: 1, title: 'Sunset', author: 'Jessie Cave', cover: 'book-placeholder.jpeg', year_released: '2021' }]
 const initialState = []

function bookReducer (state = initialState, action) {
  switch (action.type) {
    // case comes from action file
    case 'RECEIVE_BOOKS':
      return action.books
    default:
      return state
  }
}

export default bookReducer
