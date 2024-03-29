import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { deleteBookThunk } from '../actions/books'
import { addBookToFavouritesThunk, deleteBookFromFavouritesThunk } from '../actions/favourites'

function Book (props) {
  const book = props.data
  const dispatch = useDispatch()

  const allFavouriteBooks = useSelector(state => state.favouritesReducer)

  let bookCoverUrl = null
  if (book.cover === null || book.cover === '') {
    bookCoverUrl = '/images/book-placeholder.jpeg'
  } else if (book.cover === 'sunset.jpg') {
    bookCoverUrl = `/images/${book.cover}`
  } else {
    bookCoverUrl = book.cover
  }

  // Check if the book already exist in the favouritesReducer
  const handleAddBookToFavourites = () => {
    let matchFound = false
    allFavouriteBooks.forEach(favBook => {
      if (favBook.title === book.title) {
        matchFound = true
      }
      return matchFound
    })
    if (!matchFound) {
      dispatch(addBookToFavouritesThunk(book))
    }
  }
  // if the book already is in favourites:
  // either have a popup saying book is already in favourites
  // OR disable the like button (grey it out or remove the link) if it already exists

  const handleDeleteBook = () => {
    // if Book component is being rendered by <Favourites/>, do deleteFromFavourites, otherwise do deleteBook
    props.favourites ? dispatch(deleteBookFromFavouritesThunk(book.id)) : dispatch(deleteBookThunk(book.id))
  }

  return (
    <>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <Link to={`/book/${book.id}`}><img src={bookCoverUrl} alt="book cover" /></Link>
          </figure>
          {
            !props.favourites ? <span className="icon" onClick={handleAddBookToFavourites}>
              <FontAwesomeIcon icon={faHeart} />
            </span>
              : null
          }
        </div>
        {bookCoverUrl.includes('no image found') &&
         <div className="card-content">
           <div className="media">
             <div className="media-content">
               <Link to={`/book/${book.id}`}> <p className="title is-4">{book.title}</p></Link>
               <p className="subtitle is-6">{book.author}</p>
             </div>
           </div>
           {/* <div className="content">
            <time dateTime="2016-1-1">
              Release year: {book.year_released}
            </time>
          </div> */}
         </div>
        }
        <div className="hidden-title">
          <p className="title is-4">{book.title}</p>
          <p className="subtitle is-6">{book.author}</p>
        </div>
        <footer className="card-footer">
          {
            props.favourites === true
              ? <p className="card-footer-item" onClick={handleDeleteBook}>Delete</p>
              : <>
                {/* <p className="card-footer-item" onClick={handleAddBookToFavourites}>Like</p> */}
                <p className="card-footer-item" onClick={props.editBookFunc}>Edit</p>
                <p className="card-footer-item" onClick={handleDeleteBook}>Delete</p>
              </>
          }
        </footer>
      </div>
    </>
  )
}

export default Book
