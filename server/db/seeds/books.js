exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        { id: 1, title: 'Sunset', author: 'Jessie Cave', cover: 'sunset.jpg', year_released: '2021', isbn: '9781787395299' }
      ])
    })
}
