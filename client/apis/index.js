import request from 'superagent'

export function fetchBooks () {
  return request.get('/api/v1/books')
    .then(res => {
      return res.body
    })
}
