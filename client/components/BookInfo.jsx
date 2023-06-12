import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getBookImageThunk } from '../actions'

// THIS COMPONENT:
// Renders a view of individual books, their info, and eventually their reviews

function BookInfo () {
  const dispatch = useDispatch()
  const { id } = useParams()

  const books = useSelector(globalState => globalState.bookReducer)
  const bookById = books.find(book => book.id === Number(id))

  useEffect(() => {
    console.log(bookById, 'bookbyid')
    dispatch(getBookImageThunk(bookById.isbn))
  }, [])

  return (
    <>
      <div className="infoCard">
        {/* <div className="card-content"> */}
        {/* <div className="content"> */}
        <h1 className="title is-4">{bookById?.title}</h1>
        <p className="subtitle is-6">By {bookById?.author}</p>
        <img src={bookById?.cover}/>
        {/* </div> */}
        <p className="infoCardText">Add a review:</p>
        <input type="text"></input><button className="submitButton" type="submit">Submit</button>
        {/* </div> */}
      </div>
    </>
  )
}

export default BookInfo
