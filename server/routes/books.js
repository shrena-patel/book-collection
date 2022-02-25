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
    .then(() => {
      db.getBooks()
      return null
    })
    .catch(err => {
      console.log(err.message)
    })
})

module.exports = router
