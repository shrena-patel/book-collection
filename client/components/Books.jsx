import React from 'react'
import { useSelector } from 'react-redux'

function Books () {
  const state = useSelector(state => state.Books)
  console.log(state)
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">
        <h2>Books:</h2>
        <p>Title:</p>
        <p>Author:</p>
        <img src="images/book-placeholder.jpeg"/>
        <p>Release year:</p>
      </section>
    </>
  )
}

export default Books
