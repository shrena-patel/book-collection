import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteBookThunk, addBookToFavouritesThunk, deleteBookFromFavouritesThunk } from '../actions'

function Book (props) {
  const book = props.data
  const dispatch = useDispatch()

  let bookCoverUrl = null
  if (book.cover === null || book.cover === '') {
    console.log(book, 'bbooook in book IF')
    bookCoverUrl = '/images/book-placeholder.jpeg'
  } else if (book.cover === 'sunset.jpg') {
    bookCoverUrl = `/images/${book.cover}`
  } else {
    console.log(book, 'bbooook in book ELSE')
    bookCoverUrl = book.cover
  }

  // Favourites TODO:
  // if the book already exists in the the favourites table, don't try and add it
  // maybe have a separate FavBook component so that a delete fav action can be dispatch from that book card
  // (currently just using the Book component, so the delete doesn't work properly - going to the wrong table)
  const handleAddBookToFavourites = () => {
    // Thunk to add book to Favourites table
    dispatch(addBookToFavouritesThunk(book))
  }

  // props.favourites ? deletefavouritethunk : deletebookthunk

  const handleDeleteBook = () => {
    props.favourites ? dispatch(deleteBookFromFavouritesThunk(book.id)) : dispatch(deleteBookThunk(book.id))
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
          <p className="card-footer-item" onClick={props.editBookFunc}>Edit</p>
          {/* <p className="card-footer-item" onClick={() => dispatch(deleteBookThunk(book.id))}>Delete</p> */}
          <p className="card-footer-item" onClick={handleDeleteBook}>Delete</p>
        </footer>
      </div>
    </>
  )
}

export default Book
