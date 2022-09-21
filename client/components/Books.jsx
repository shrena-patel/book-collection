import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getBooks } from '../actions'
import Book from './Book'
import EditBook from './EditBook'

function Books () {
  const books = useSelector((state) => state.bookReducer)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBooks())
  }, [])

  const [isEdit, setIsEdit] = useState(null)
  const editBook = (id) => {
    // switch to edit component for that particular book
    // TODO: then on submit button of EditBook, it should switch back to updated component
    // TODO: also add a smoother transition for switching of cards
    setIsEdit(id)
  }

  // look at this link: https://stackoverflow.com/questions/61542337/reactjs-need-to-change-card-into-another-card-onclick

  return (
    <>
      <div className='bookCards'>
        {/* Map over books, and for each one, check if isEdit equals the book.id - if it does, render EditBook */}
        {books.map((book, i) => {
          return isEdit === book.id ? <EditBook book={book} key={i} setIsEdit={setIsEdit} /> : <Book data={book} key={i} editBookFunc={() => editBook(book.id)} />
        }
        )}
      </div>
    </>

  )
}

export default Books
