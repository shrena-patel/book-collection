import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getBooks } from '../actions'
import Book from './Book'
import AddBook from './AddBook'

function Books () {
  const books = useSelector((state) => state.bookReducer)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBooks())
  }, [])

  return (
    <>
      <div className='bookCards'>
        <AddBook />
        {books.map((book, i) => <Book data={book} key={i} />
        )}
      </div>
    </>

  )
}

export default Books
