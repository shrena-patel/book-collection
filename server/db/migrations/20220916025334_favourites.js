exports.up = function (knex) {
  return knex.schema.createTable('favourites', function (table) {
    table.increments('id').primary()
    table.string('title')
    table.string('author')
    table.string('cover')
    table.string('year_released')
    table.string('isbn')
  })
}

exports.down = function (knex) {
  return knex.schemea.dropTable('favourites')
}
