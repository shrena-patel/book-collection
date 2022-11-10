import request from 'superagent'

export function fetchBooks () {
  return request.get('/api/v1/books')
    .then(res => {
      return res.body
    })
}

export function fetchFavourites () {
  return request.get('/api/v1/favourites')
    .then(res => {
      return res.body
    })
}

export function addBookToFavouritesApi (book) {
  return request.post('/api/v1/favourites')
    .send(book)
    .then(res => {
      return res.body
    })
}

export function deleteBookFromFavouritesApi (id) {
  return request.del(`/api/v1/favourites/${id}`)
    .then(res => {
      return res.body
    })
}

export function updateFavouriteApi (id, book) {
  return request.patch(`/api/v1/favourites/${id}`)
    .send(book)
    .then(res => {
      return res.body
    })
}

export function fetchBookById (bookId) {
  return request.get(`/api/v1/books/book/${bookId}`)
    .then(res => {
      return res.body
    })
}

export function addNewBook (newBook) {
  return request.post('/api/v1/books')
    .send(newBook)
    .then(res => {
      return res.body
    })
}

export function deleteBookApi (bookId) {
  console.log('api delete', bookId)
  return request.del(`/api/v1/books/${bookId}`)
    .then(res => {
      console.log('res in api', res)
      return res.body
    })
}

export function getBookCoverImage (isbn) {
  return request.get(`https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`)
    .then(res => {
      console.log('book cover res in api', typeof res.req.url)
      const url = res.req.url
      url.split(' ').join('')
      console.log('the edited url in api', url)
      return url
    })
}

export function updateBookCoverImageApi (cover, isbn) {
  return request.patch(`/api/v1/books/${isbn}`)
    .send(cover)
    .then(res => {
      return res.body
    })
}

export function updateBookApi (id, book) {
  return request.patch(`/api/v1/books/${id}`)
    .send(book)
    .then(res => {
      return res.body
    })
}

const spans = Array.prototype.slice.call(document.querySelectorAll('.dom'))
spans.forEach(function (span) { span.innerHTML = 'HTML5 Document Object Model' })
