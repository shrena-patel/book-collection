import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function AddBook () {
  return (
    <>
      <div className="card">
        <div className="card-image add-book">
          <FontAwesomeIcon icon={faPlus} size='3x' />
          <p className="title is-3">Add a book</p>
          {/* <figure className="image is-4by3">
            <img src='images/book-placeholder.jpeg' alt="placeholder book image" width='200px' />
            <FontAwesomeIcon icon={faPlus} />
          </figure> */}
        </div>

        <div className="card-content">
          <div className="media">
            {/* <div className="media-left">
              <figure className="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder image"
                />
              </figure>
            </div> */}
            <div className="book-form">
              <p className="subtitle is-6">Title: <input type="text"></input></p>
              <p className="subtitle is-6">Author: <input type="text"></input></p>
              <p className="subtitle is-6">Release year: <input type="text"></input></p>
            </div>
          </div>

          {/* <div className="content">
          </div> */}

        </div>
        {/* <footer className="card-footer">
          <a href="#" className="card-footer-item">Like</a>
          <a href="#" className="card-footer-item">Edit</a>
          <a href="#" className="card-footer-item">Delete</a>
        </footer> */}
      </div>
    </>
  )
}

export default AddBook
