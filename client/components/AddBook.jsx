import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { addBook } from '../actions'

function AddBook () {
  const dispatch = useDispatch()

  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    year_released: ''
  })

  const handleSubmit = (evt) => {
    evt.preventDefault()
    console.log(newBook)
    dispatch(addBook(newBook))
  }

  const handleChange = (evt) => {
    setNewBook({
      ...newBook,
      [evt.target.name]: evt.target.value
    })
  }
  return (
    <>
      <div className="card">
        <div className="card-image add-book">
          <FontAwesomeIcon icon={faPlus} size='3x' className='icon' />
          <p className="title is-4">Add a book</p>
          {/* <figure className="image is-4by3">
            <img src='images/book-placeholder.jpeg' alt="placeholder book image" width='200px' />
            <FontAwesomeIcon icon={faPlus} />
          </figure> */}
        </div>

        <div className="card-content">
          <div className="media">
            {/* <div className="media-left">
              <figure className="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder image"
                />
              </figure>
            </div> */}
            <form onSubmit={handleSubmit} className="book-form">
              <label htmlFor='title'></label>
              <input id="title" name="title" type="text" placeholder="Title" onChange={handleChange}></input>
              <label htmlFor='author'></label>
              <input id="author" name="author" type="text" placeholder="Author" onChange={handleChange}></input>
              <label htmlFor='year_released'></label>
              <input id="year_released" name="year_released" type="text" placeholder="Release year" onChange={handleChange}></input>
              <button className="submit-button">Submit</button>

            </form>
          </div>

          {/* <div className="content">
          </div> */}

        </div>
        {/* <footer className="card-footer">
          <a href="#" className="card-footer-item">Like</a>
          <a href="#" className="card-footer-item">Edit</a>
          <a href="#" className="card-footer-item">Delete</a>
        </footer> */}
      </div>
    </>
  )
}

export default AddBook
