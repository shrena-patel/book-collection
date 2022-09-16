const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.get('/', (req, res) => {
  db.getFavourites()
    .then(favourites => {
      res.json(favourites)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  const book = req.body
  db.addBookToFavourites(book)
    .then((ids) => {
      book.id = ids[0]
      res.json(book)
      return null
    })
    .catch(err => {
      console.log(err.message)
    })
})

module.exports = router
