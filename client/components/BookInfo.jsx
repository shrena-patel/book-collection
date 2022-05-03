import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function BookInfo () {
  const dispatch = useDispatch()
  const { id } = useParams()

  const books = useSelector(globalState => globalState.bookReducer)
  const bookById = books.find(book => book.id === Number(id))
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
