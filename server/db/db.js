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
  return db('books').select()
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

module.exports = {
  getBooks,
  addNewBook,
  deleteBook
}