import request from 'superagent'

const bookUrl = '/api/v1/books'
const favouritesUrl = '/api/v1/favourites'

export function fetchBooks () {
  return request.get(bookUrl)
    .then(res => {
      return res.body
    })
}

export function fetchFavourites () {
  return request.get(favouritesUrl)
    .then(res => {
      return res.body
    })
}

export function addBookToFavouritesApi (book) {
  return request.post(favouritesUrl)
    .send(book)
    .then(res => {
      return res.body
    })
}

export function deleteBookFromFavouritesApi (id) {
  return request.del(`${favouritesUrl}/${id}`)
    .then(res => {
      return res.body
    })
}

export function fetchBookById (bookId) {
  return request.get(`${bookUrl}//book/${bookId}`)
    .then(res => {
      return res.body
    })
}

export function addNewBook (newBook) {
  return request.post(bookUrl)
    .send(newBook)
    .then(res => {
      return res.body
    })
}

export function deleteBookApi (bookId) {
  console.log('api delete', bookId)
  return request.del(`${bookUrl}/${bookId}`)
    .then(res => {
      console.log('res in api', res)
      return res.body
    })
}

export function getBookCoverImage (isbn) {
  return request.get(`https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`)
    .then(res => {
      const url = res.req.url
      url.split(' ').join('')
      return url
    })
}

export function updateBookCoverImageApi (cover, isbn) {
  return request.patch(`${bookUrl}/${isbn}`)
    .send(cover)
    .then(res => {
      return res.body
    })
}

export function updateBookApi (id, book) {
  return request.patch(`${bookUrl}/${id}`)
    .send(book)
    .then(res => {
      return res.body
    })
}

const spans = Array.prototype.slice.call(document.querySelectorAll('.dom'))
spans.forEach(function (span) { span.innerHTML = 'HTML5 Document Object Model' })
