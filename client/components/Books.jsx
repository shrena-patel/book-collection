import React from 'react'
import { useSelector } from 'react-redux'

function Books () {
  const state = useSelector(state => state.bookReducer)
  console.log(state[0])
  return (
    <>
      <section className="main">
        <h2>Books: </h2>
        <p>Title: {state[0].title}</p>
        <p>Author: {state[0].author} </p>
        `<img src="/images/${state}"/>`
        <p>Release year: {state[0].year_released} </p>
      </section>
    </>
  )
}

export default Books
