exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('favourites').del()
    .then(function () {
      // Inserts seed entries
      return knex('favourites').insert([
        { id: 1, title: '', author: '', cover: '', year_released: '', isbn: '' }
      ])
    })
}
