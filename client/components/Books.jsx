import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getBooks, getFavourites } from '../actions'
import Book from './Book'
import EditBook from './EditBook'

function Books () {
  const books = useSelector((state) => state.bookReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBooks())
    // Added the below in to try and get functionality working
    // where if a book already exists in the favouritesreducer, don't try and add it
    // favourites weren't showing up on the books page initially
    dispatch(getFavourites())
  }, [])

  const [isEdit, setIsEdit] = useState(null)
  const editBook = (id) => {
    // TODO: also add a smoother transition for switching of cards
    setIsEdit(id)
  }

  return (
    <>
      <div className='bookCards'>
        {/* Map over books, and for each one, check if isEdit equals the book.id - if it does, render EditBook */}
        {books.map((book, i) => {
          return isEdit === book.id ? <EditBook book={book} key={i} setIsEdit={setIsEdit} /> : <Book data={book} key={book + i} editBookFunc={() => editBook(book.id)} />
        }
        )}
      </div>
    </>

  )
}

export default Books
