import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { addBook } from '../actions'

function AddBook () {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    cover: '',
    year_released: '',
    isbn: ''
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
    navigate('/')
  }

  const handleChange = (evt) => {
    setNewBook({
      ...newBook,
      [evt.target.name]: evt.target.value
    })
  }

  useEffect(() => {

  }, [newBook])
  return (
    <>
      <div className="card add-book-card">
        <div className="card-image add-book">
          {/* <FontAwesomeIcon icon={faPlus} size='3x' className='icon' /> */}
          <p className="title is-4">Add a book</p>
        </div>
        <div className="card-content">
          <div className="media">
            <form onSubmit={handleSubmit} className="book-form">
              <label htmlFor='title'>Title</label>
              <input id="title" name="title" type="text" onChange={handleChange}></input>
              <label htmlFor='author'>Author</label>
              <input id="author" name="author" type="text" onChange={handleChange}></input>
              <label htmlFor='year_released'>Publication year</label>
              <input id="year_released" name="year_released" type="text" onChange={handleChange}></input>
              <label htmlFor='isbn'>ISBN</label>
              <input id="isbn" name="isbn" type="text" onChange={handleChange}></input>
              <button className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddBook
