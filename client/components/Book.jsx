import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteBookThunk, addBookToFavouritesThunk } from '../actions'

// for the edit functionality
// when you click on the edit button, it should display an edit book card in same place
// where book is rendered in Books.jsx, could have a ternary
// that check if state of 'editbook' is set to true or false,
// if it's true, set display the Book.jsx component, otherwise display the EditBook.jsx component in it's place

function Book (props) {
  const book = props.data
  const dispatch = useDispatch()

  let bookCoverUrl = null
  if (book.cover === null || book.cover === '') {
    console.log(book, 'bbooook in book')
    bookCoverUrl = '/images/book-placeholder.jpeg'
  } else {
    console.log(book, 'bbooook in book')
    bookCoverUrl = book.cover
  }

  const editBook = () => {
    // switch to edit component for that particular book
    // then in the edit book component, when the submit button is clicked, it switches back to
    // this component.

    console.log('edit this book!')
  }

  // Favourites TODO: 
  // if the book already exists in the the favourites table, don't try and add it
  // maybe have a separate FavBook component so that a delete fav action can be dispatch from that book card
  // (currently just using the Book component, so the delete doesn't work properly - going to the wrong table)
  const handleAddBookToFavourites = () => {
    console.log('bokfavs', book)
    // this should be a thunk to add the book to a favourites table
    dispatch(addBookToFavouritesThunk(book))
  }

  return (
    <>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={bookCoverUrl} alt="placeholder book image" />
          </figure>
        </div>
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
        <footer className="card-footer">
          <p className="card-footer-item" onClick={handleAddBookToFavourites}>Like</p>
          <p className="card-footer-item" onClick={() => editBook()}>Edit</p>
          <p className="card-footer-item" onClick={() => dispatch(deleteBookThunk(book.id))}>Delete</p>
        </footer>
      </div>
    </>
  )
}

export default Book
