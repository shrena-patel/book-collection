const express = require('express')
const path = require('path')
const books = require('./routes/books')
const favourites = require('./routes/favourites')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/books', books)
server.use('/api/v1/favourites', favourites)

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})
module.exports = server
