/* eslint-disable promise/no-nesting */
const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.get('/', (req, res) => {
  db.getBooks()
    .then(books => {
      res.json(books)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  const book = req.body
  db.addNewBook(book)
    .then((ids) => {
      book.id = ids[0]
      res.json(book)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.patch('/:id', (req, res) => {
  // req.body is the body of the api request from the client side
  const bookUpdate = req.body
  const bookId = req.params.id
  console.log(bookId)
  console.log(bookUpdate)
  db.updateBook(bookId, bookUpdate)
    .then(() => {
      db.getBooks()
        .then(updatedBooks => {
          res.json(updatedBooks)
          return null
        })
        .catch(err => {
          res.status(500).json({ error: err.message })
        })
      return null
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.get('/book/:id', (req, res) => {
  const bookId = Number(req.params.id)
  db.getBookById(bookId)
    .then((book) => {
      res.json(book)
      return null
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteBook(id)
    .then(() => {
      db.getBooks()
        .then(updatedBooks => {
          res.json(updatedBooks)
          return null
        })
        .catch(err => {
          res.status(500).json({ error: err.message })
        })
      return null
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.patch('/:isbn', (req, res) => {
  const isbn = req.params.id
  const cover = req.body
  console.log(isbn, cover)
})

module.exports = router
