import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFavourites } from '../actions'
import Book from '../components/Book'

function Favourites () {
  const dispatch = useDispatch()
  const favouritesList = useSelector(state => state.favouritesReducer)
  console.log(typeof favouritesList)

  useEffect(() => {
    dispatch(getFavourites())
    console.log(favouritesList)
  }, [])

  return (
    <div className='bookCards'>
      {/* Put AddBook Component elsewhere so the styling doesn't impact the book cards */}
      {/* <AddBook /> */}
      {favouritesList?.map((book, i) => <Book data={book} key={i} />
      )}
    </div>
  )
}

export default Favourites
