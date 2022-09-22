const initialState = []

function favouritesReducer (state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_FAVOURITES':
      return action.favourites
    case 'ADD_TO_FAVOURITES':
      return [...state, action.book]
    default:
      return state
  }
}
export default favouritesReducer
