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

  // look at this link: https://stackoverflow.com/questions/61542337/reactjs-need-to-change-card-into-another-card-onclick
  // for how to switch out a component onclick
  // this will be need for the 'editBook' functionality
  // so when you click 'edit' on each book, it will switch to the edit card
  // and on submit it switches back to the updated card component
  return (
    <>
      <div className='bookCards'>
        {/* Put AddBook Component elsewhere so the styling doesn't impact the book cards */}
        {/* <AddBook /> */}
        {books.map((book, i) => <Book data={book} key={i} />
        )}
        <AddBook />
      </div>
    </>

  )
}

export default Books
