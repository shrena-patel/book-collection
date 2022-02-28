import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { addBook } from '../actions'

function AddBook () {
  const dispatch = useDispatch()

  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    cover: '',
    year_released: ''
  })

  const handleResetForm = () => {
    const books = Array.from(document.querySelectorAll('input')).forEach(
      input => (input.value = '')
    )
    setNewBook(books)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    dispatch(addBook(newBook))
    handleResetForm()
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
          <FontAwesomeIcon icon={faPlus} size='3x' className='icon' />
          <p className="title is-4">Add a book</p>
        </div>
        <div className="card-content">
          <div className="media">
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
        </div>
      </div>
    </>
  )
}

export default AddBook
