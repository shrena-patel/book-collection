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
  console.log('ROUTE!!!!!!!!!!!!!!!!!!!!!!!', book)
  // db.geFavourites
  // if book is already in db, don't do anything
  // else, do db.addBookToFavourites
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

// router.delete('/:id', (req, res) => {
//   const id = req.params.id
//   db.deleteBookFromFavourites(id)
//     .then(() => {
//       db.getFavourites()
//         .then(updatedBooks => {
//           res.json(updatedBooks)
//           return null
//         })
//         .catch(err => {
//           res.status(500).json({ error: err.message })
//         })
//       return null
//     })
//     .catch(err => {
//       res.status(500).json({ error: err.message })
//     })
// })

router.delete('/:id', (req, res) => {
  const id = req.params.id
  console.log('ROUTE DELETE FAVOURITES id:', id)
  db.deleteBookFromFavourites(id)
    .then(() => {
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
  db.getFavourites()
    .then(updatedBooks => {
      res.json(updatedBooks)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

// router.patch('/:id', (req, res) => {
//   // req.body is the body of the api request from the client side
//   const bookUpdate = req.body
//   const bookId = req.params.id
//   console.log(bookId)
//   console.log(bookUpdate)
//   db.updateFavouriteBook(bookId, bookUpdate)
//     .then(() => {
//       db.getFavourites()
//         .then(updatedBooks => {
//           res.json(updatedBooks)
//           return null
//         })
//         .catch(err => {
//           res.status(500).json({ error: err.message })
//         })
//       return null
//     })
//     .catch(err => {
//       res.status(500).json({ error: err.message })
//     })
// })

router.patch('/:id', (req, res) => {
  // req.body is the body of the api request from the client side
  const bookUpdate = req.body
  const bookId = req.params.id
  console.log(bookId)
  console.log(bookUpdate)
  db.updateFavouriteBook(bookId, bookUpdate)
    .then(() => {
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
  db.getFavourites()
    .then(updatedBooks => {
      res.json(updatedBooks)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
