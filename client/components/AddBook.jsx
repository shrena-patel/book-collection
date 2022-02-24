import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function AddBook () {
  return (
    <>
      <div className="card">
        <div className="card-image add-book">
          <FontAwesomeIcon icon={faPlus} size='3x' className='icon' />
          <p className="title is-4">Add a book</p>
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
            <form className="book-form">
              <input id="title" name="title" type="text" placeholder="Title"></input>
              <input id="author" name="author" type="text" placeholder="Author"></input>
              <input id="year" name="year" type="text" placeholder="Release year"></input>
              <button className="submit-button">Submit</button>

            </form>
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
