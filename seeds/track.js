
// exports.seed = function(knex, Promise) {
//   // Deletes ALL existing entries
//   return knex('table_name').del()
//     .then(function () {
//       return Promise.all([
//         // Inserts seed entries
//         knex('table_name').insert({id: 1, colName: 'rowValue1'}),
//         knex('table_name').insert({id: 2, colName: 'rowValue2'}),
//         knex('table_name').insert({id: 3, colName: 'rowValue3'})
//       ]);
//     });
// };

exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('track').del(),

    // Inserts seed entries
    knex('track').insert({id: 1, name: 'Strawberry Fields', artist_id: 1}),
    knex('track').insert({id: 2, name: 'Soft Bulletin', artist_id: 2})
  );
};