exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        { id: 1, title: 'Sunset', author: 'Jessie Cave', cover: 'sunset.jpg', year_released: '2021' },
        { id: 2, title: 'Burnt Sugar', author: 'Avni Doshi', cover: 'burntsugar.jpg', year_released: '2020' },
        { id: 3, title: 'The Braid', author: 'Laetitia Colombani', cover: 'thebraid.jpg', year_released: '2019' }
      ])
    })
}
