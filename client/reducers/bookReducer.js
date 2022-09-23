const initialState = []

function bookReducer (state = initialState, action) {
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
        if (book.isbn === action.book.isbn) {
          book = action.book
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
    default:
      return state
  }
}
export default bookReducer
