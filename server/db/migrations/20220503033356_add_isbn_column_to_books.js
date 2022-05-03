exports.up = function (knex) {
  return knex.schema.alterTable('books', function (table) {
    table.string('isbn')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('books', table => {
    table.dropColumn('isbn')
  })
}
