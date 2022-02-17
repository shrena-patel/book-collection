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

module.exports = router
