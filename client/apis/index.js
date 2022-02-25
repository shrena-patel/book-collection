import request from 'superagent'

export function fetchBooks () {
  return request.get('/api/v1/books')
    .then(res => {
      return res.body
    })
}

export function addNewBook (newBook) {
  console.log('api', newBook)
  return request.post('/api/v1/books')
    .send(newBook)
    .then(res => {
      return res.body
    })
}
