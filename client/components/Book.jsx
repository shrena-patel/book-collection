import React from 'react'

function Books (props) {
  console.log('props.data', props.data)
  const book = props.data

  return (
    <>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={book.cover} alt="placeholder book image" />
          </figure>
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

            <div className="media-content">
              <p className="title is-4">{book.title}</p>
              <p className="subtitle is-6">{book.author}</p>
            </div>
          </div>

          <div className="content">
            <time dateTime="2016-1-1">
              Release year: {book.year_released}
            </time>
          </div>

        </div>
        <footer className="card-footer">
          <a href="#" className="card-footer-item">Like</a>
          <a href="#" className="card-footer-item">Edit</a>
          <a href="#" className="card-footer-item">Delete</a>
        </footer>
      </div>
    </>
  )
}

export default Books
