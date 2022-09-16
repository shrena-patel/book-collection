const initialState = []

function favouritesReducer (state = initialState, action) {
  // console.log(state, 'state in reducer')
  switch (action.type) {
    // case comes from action file
    case 'ADD_TO_FAVOURITES':
      return [...state, action.book]
    default:
      return state
  }
}
export default favouritesReducer
