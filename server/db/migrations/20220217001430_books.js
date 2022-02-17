exports.up = function (knex) {
  return knex.schema.createTable('books', function (table) {
    table.increments('id').primary()
    table.string('title')
    table.string('author')
    table.string('cover')
    table.string('year_released')
  })
}

exports.down = function (knex) {
  return knex.schemea.dropTable('books')
}
