const initialState = []

function favouritesReducer (state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_FAVOURITES':
      return action.favourites
    case 'ADD_TO_FAVOURITES':
      return [...state, action.book]
    case 'DEL_FROM_FAVOURITES':
      return state.filter((book) => book.id !== action.id)
    default:
      return state
  }
}
export default favouritesReducer
