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
      <h1>{bookById.title}</h1>
      <p>{bookById.author}</p>
    </>
  )
}

export default BookInfo
