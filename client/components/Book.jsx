import React from 'react'
import { useDispatch } from 'react-redux'

import { deleteBookThunk } from '../actions'

function Books (props) {
  const book = props.data
  const dispatch = useDispatch()

  let bookCoverUrl = null
  if (book.cover === null || book.cover === '') {
    bookCoverUrl = '/images/book-placeholder.jpeg'
  } else {
    bookCoverUrl = `/images/${book.cover}`
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
              <p className="title is-4">{book.title}</p>
              <p className="subtitle is-6">{book.author}</p>
            </div>
          </div>
          <div className="content">
            <time dateTime="2016-1-1">
              Release year: {book.year_released}
            </time>
          </div>
        </div>
        <footer className="card-footer">
          <a href="#" className="card-footer-item">Like</a>
          <a href="#" className="card-footer-item">Edit</a>
          <a href="#" className="card-footer-item" onClick={() => dispatch(deleteBookThunk(book.id))}>Delete</a>
        </footer>
      </div>
    </>
  )
}

export default Books
