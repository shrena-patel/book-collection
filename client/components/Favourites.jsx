import React from 'react'
import { useSelector } from 'react-redux'
import { getFavouritesList } from '../actions'

function Favourites () {

  const favouritesList = useSelector(state => state)
  console.log(favouritesList)

  // useEffect(() => {
  //   dispatch(getFavouritesList())
  // }, [])
  return (
    <p>Favourites</p>
  )
}

export default Favourites
