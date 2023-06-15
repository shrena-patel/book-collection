import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addBookReview, getBookById } from '../actions'

// THIS COMPONENT:
// Renders a view of individual books, their info, and eventually their reviews

function BookInfo() {
  const dispatch = useDispatch()
  const { id } = useParams()

  const [review, setReview] = useState('')
  const books = useSelector((globalState) => globalState.bookReducer)
  console.log(books, 'books')
  const bookById = books.find((book) => book.id === Number(id))
  console.log(bookById, 'bookbyid')

  useEffect(() => {
    console.log(bookById, 'bookbyid')
    // dispatch(getBookImageThunk(bookById.isbn))
    dispatch(getBookById(bookById.id))
  }, [])

  const handleChange = (e) => {
    setReview(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addBookReview(bookById.id, review))
  }

  return (
    <>
      <div className="infoCard">
        {/* <div className="card-content"> */}
        {/* <div className="content"> */}
        <h1 className="title is-4">{bookById?.title}</h1>
        <p className="subtitle is-6">By {bookById?.author}</p>
        <img src={bookById?.cover} />
        {/* </div> */}
        {/* <label htmlFor={`${bookById.title}-review`} className="infoCardText">Add a review:</label> */}
        <p className="infoCardText">Add a review:</p>
        <input
          id={`${bookById.title}-review`}
          type="text"
          onChange={handleChange}
        ></input>
        <button className="submitButton" type="submit" onSubmit={handleSubmit}>
          Submit
        </button>
        <p>{review}</p>
        {/* </div> */}
      </div>
    </>
  )
}

export default BookInfo
