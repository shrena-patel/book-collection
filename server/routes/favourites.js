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
      res.status(500).send(err.message)
    })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  db.deleteBookFromFavourites(id)
    .then(() => {
      // this db.getFavourites() needs to be inside the .then
      // otherwise both the db function will run at the same time creating a race condition
      // so we want to do the delete, THEN the getFavourites
      return db.getFavourites()
    })
    .then(updatedBooks => {
      res.json(updatedBooks)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
