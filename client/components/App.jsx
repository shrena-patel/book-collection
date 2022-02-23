import React from 'react'
import Home from './Home'
import Nav from './Nav'
import Favourites from './Favourites'
import { Routes, Route } from 'react-router-dom'

function App () {
  return (
    <>
    <Nav/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/favourites' element={<Favourites />}></Route>
      </Routes>
    </>
  )
}

export default App
