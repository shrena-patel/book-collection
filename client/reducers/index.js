import { combineReducers } from 'redux'
import bookReducer from './bookReducer'
import favouritesReducer from './favouritesReducer'
// import stuff from './stuff'

export default combineReducers({
  bookReducer,
  favouritesReducer
})
