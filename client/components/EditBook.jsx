import { useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react'
import { updateBookThunk } from '../actions'

function EditBook (props) {
  const dispatch = useDispatch()
  const bookToEdit = props.book

  // TODO: have the submit button on editbook either say 'close' or submit
  // const submitButtonRef = useRef(null)

  const [newBook, setNewBook] = useState({
    title: bookToEdit.title,
    author: bookToEdit.author,
    cover: bookToEdit.cover,
    year_released: bookToEdit.year_released,
    isbn: bookToEdit.isbn
  })

  const handleSubmit = (evt) => {
    evt.preventDefault()
    console.log(newBook, 'newBook in editbook')
    dispatch(updateBookThunk(bookToEdit.id, newBook))
    // Set the isEdit state from Books.jsx to be null (it's expecting the isEdit to be a number, so if it's null,
    // isEdit will be false, and therefore Book.jsx will show again)
    props.setIsEdit(null)
  }

  const handleChange = (evt) => {
    setNewBook({
      ...newBook,
      [evt.target.name]: evt.target.value
    })
  }

  useEffect(() => {
  }, [newBook])

  // const handleButtonTitle = () => {
  //   if (bookToEdit === newBook) {
  //     console.log('thesame')
  //     //submitButtonRef.current = 'close'
  //   } else {
  //     console.log('different')
  //   }
  // }

  return (
    <>
      <div className="card">
        <div className="card-image add-book">
          {/* <FontAwesomeIcon icon={faPlus} size='3x' className='icon' /> */}
          {/* <p className="title is-4">Edit book</p> */}
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
