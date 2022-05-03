import React, { useEffect } from 'react'
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
  const bookById = books.find(book => book.id === Number(id))

  useEffect(() => {
    console.log('use effect bby')
    getBookImageThunk(bookById.isbn)
    // dispatch(getBooks())
  }, [])

  
  console.log(bookById)
  return (
    <>
      <div className="card infoCard">
        <div className="card-content">
          <div className="content">
            <h1 className="title is-4">{bookById.title}</h1>
            <p className="subtitle is-6">{bookById.author}</p>
          </div>
          <p>Reviews:</p>
        <input type="text"></input>
        </div>
        
      </div>
    </>
  )
}

export default BookInfo
