import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
// import { getBookCoverImage } from '../apis'
import { getBookImageThunk } from '../actions'

// in here,
// in useeffect, so on load, dispatch an action to get the book cover images
// in the actions folder, make an action, and a thunk - the api call goes in the thunk
// this saves everything to the global state
// then use useSelector to get the image url from global state
// make sure the url from the api is saved to the db
// take other  stuff out of book.jsx
// const getBookInfo = () => {
//   console.log('hello')
//   console.log(book.isbn)
//   getBookCoverImage(book.isbn)
// }

function BookInfo () {
  const dispatch = useDispatch()
  const { id } = useParams()
  const books = useSelector(globalState => globalState.bookReducer)
  const [thisBook, setThisBook] = useState()
  const bookById = books.find(book => book.id === Number(id))

  useEffect(() => {
    console.log(bookById, 'bookbyid')
    dispatch(getBookImageThunk(bookById.isbn))
    setThisBook(bookById)
    // dispatch(getBookImageThunk('161620818X'))
    // dispatch(getBooks())161620818X
  }, [])

  // ****************************************
  // 11/08/22 Next: need to save the cover image to the database, so when you go
  // back to the homepage after clicking on the book title, the placeholder image
  // for that book has been updated
  // ****************************************

  return (
    <>
      <div className="card infoCard">
        <div className="card-content">
          <div className="content">
            <h1 className="title is-4">{bookById?.title}</h1>
            <p className="subtitle is-6">{bookById?.author}</p>
            <img src={bookById?.cover}/>
          </div>
          <p>Reviews:</p>
          <input type="text"></input>
        </div>
      </div>
    </>
  )
}

export default BookInfo
