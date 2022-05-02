import React from 'react'
import Home from './Home'
import Nav from './Nav'
import Favourites from './Favourites'
import BookInfo from './BookInfo'
import { Routes, Route } from 'react-router-dom'

function App () {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/favourites' element={<Favourites />}></Route>
        <Route path='/book/:id' element={<BookInfo />}></Route>
      </Routes>
    </>
  )
}

export default App
