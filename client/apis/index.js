import request from 'superagent'

export function fetchBooks () {
  return request.get('/api/v1/books')
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
