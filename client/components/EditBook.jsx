import { useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { updateBookAction } from '../actions'

// for the edit functionality
// when you click on the edit button, it should display an edit book card in same place
// where book is rendered in Books.jsx, could have a ternary
// that check if state of 'editbook' is set to true or false,
// if it's true, set display the Book.jsx component, otherwise display the EditBook.jsx component in it's place

function EditBook (props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const bookToEdit = props.book

  const [newBook, setNewBook] = useState({
    title: bookToEdit.title,
    author: bookToEdit.author,
    cover: bookToEdit.cover,
    year_released: bookToEdit.year_released,
    isbn: bookToEdit.isbn
  })

  // const handleResetForm = () => {
  //   const books = Array.from(document.querySelectorAll('input')).forEach(
  //     input => (input.value = '')
  //   )
  //   setNewBook(books)
  // }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    // dispatch(addBook(newBook))
    // handleResetForm()
    // navigate('/')
    console.log(newBook, 'newBook in editbook')
    dispatch(updateBookAction(bookToEdit.id, newBook))
    navigate('/')
  }

  const handleChange = (evt) => {
    setNewBook({
      ...newBook,
      [evt.target.name]: evt.target.value
    })
  }
  // when redux state changes (i/e when the form is submitted), clear the form
  // use useSelector and useEffect
  useEffect(() => {

  }, [newBook])
  return (
    <>
      <div className="card">
        <div className="card-image add-book">
          {/* <FontAwesomeIcon icon={faPlus} size='3x' className='icon' /> */}
          <p className="title is-4">Edit a book</p>
        </div>
        <div className="card-content">
          <div className="media">
            <form onSubmit={handleSubmit} className="book-form">
              <label htmlFor='title'></label>
              <input
                id="title"
                name="title"
                type="text"
                placeholder="Title"
                onChange={handleChange}
                value={newBook.title}
              />
              <label htmlFor='author'></label>
              <input
                id="author"
                name="author"
                type="text"
                placeholder="Author"
                onChange={handleChange}
                value={newBook.author}
              />
              <label htmlFor='year_released'></label>
              <input
                id="year_released"
                name="year_released"
                type="text"
                placeholder="Release year"
                onChange={handleChange}
                value={newBook.year_released}
              />
              <label htmlFor='isbn'></label>
              <input
                id="isbn"
                name="isbn"
                type="text"
                placeholder="ISBN"
                onChange={handleChange}
                value={newBook.isbn}
              />
              <button className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditBook
