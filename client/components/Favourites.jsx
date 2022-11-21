import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFavourites } from '../actions'
import Book from '../components/Book'

function Favourites () {
  const dispatch = useDispatch()
  const favouritesList = useSelector(state => state.favouritesReducer)

  useEffect(() => {
    dispatch(getFavourites())
    console.log(favouritesList)
  }, [])

  return (
    <div className='bookCards'>
      {favouritesList?.map((book, i) => <Book data={book} key={book + i} favourites={true} />
      )}
    </div>
  )
}

export default Favourites
