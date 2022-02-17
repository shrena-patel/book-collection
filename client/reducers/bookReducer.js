const initialState = [{ id: 1, title: 'Sunset', author: 'Jessie Cave', cover: 'book-placeholder.jpeg', year_released: '2021' }]

function bookReducer (state = initialState, action) {
  switch (action.type) {
    case 'GET_BOOKS':
      return state
    default:
      return state
  }
}

export default bookReducer
