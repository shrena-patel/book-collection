/* eslint-disable indent */
const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

// module.exports = connection
// const environment = process.env.NODE_ENV || 'development'
// const config = require('./knexfile')[environment]
// const connection = require('knex')(config)

function getBooks (db = connection) {
  return db('books').select().orderBy('id')
}

function getBookById (id, db = connection) {
  return db('books')
  .select()
  .where('id', id)
}

function addNewBook (newBook, db = connection) {
  return db('books')
    .insert(newBook)
}

function deleteBook (id, db = connection) {
  return db('books')
  .delete()
  .where('id', id)
}

function updateBook (bookId, updateBook, db = connection) {
  return db('books')
  .update(updateBook)
  .where('id', bookId)
}

// FAVOURITES ************************************** //

function getFavourites (db = connection) {
  return db('favourites')
    .select()
}

function addBookToFavourites (book, db = connection) {
  return db('favourites')
    .insert(book)
}

function deleteBookFromFavourites (id, db = connection) {
  return db('favourites')
    .where('id', id)
    .delete()
}

module.exports = {
  getBooks,
  getBookById,
  addNewBook,
  deleteBook,
  updateBook,
  getFavourites,
  addBookToFavourites,
  deleteBookFromFavourites
}
