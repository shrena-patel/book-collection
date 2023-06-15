import { fetchFavourites, addBookToFavouritesApi, deleteBookFromFavouritesApi } from '../apis'

export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES'
export const RECEIVE_FAVOURITES = 'RECEIVE_FAVOURITES'
export const DEL_FROM_FAVOURITES = 'DEL_FROM_FAVOURITES'
export const UPDATE_FAVOURITES = 'UPDATE_FAVOURITES'

// ACTIONS ****************************************** //

export function receiveFavourites (arr) {
  return {
    type: RECEIVE_FAVOURITES,
    favourites: arr || null
  }
}
export function addBookToFavourites (book) {
  return {
    type: ADD_TO_FAVOURITES,
    book
  }
}

export function deleteBookFromFavourites (id) {
  return {
    type: DEL_FROM_FAVOURITES,
    id
  }
}

// THUNKS ************************************************** //

export function getFavourites () {
  return (dispatch) => {
    fetchFavourites()
      .then(res => {
        dispatch(receiveFavourites(res))
        return null
      })
      .catch(err => {
        return err.status(500).send(err.message)
      })
  }
}

export function addBookToFavouritesThunk (book) {
  return (dispatch) => {
    addBookToFavouritesApi(book)
      .then(result => {
        dispatch(addBookToFavourites(result))
        return null
      })
      .catch(err => {
        return err.status(500).send(err.message)
      })
  }
}

export function deleteBookFromFavouritesThunk (id) {
  return (dispatch) => {
    deleteBookFromFavouritesApi(id)
      .then(results => {
        dispatch(receiveFavourites(results))
        return null
      })
      .catch(err => {
        return err.status(500).send(err.message)
      })
  }
}
