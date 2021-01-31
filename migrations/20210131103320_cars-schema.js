
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments('id');
      tbl.string('vin', 20).unique().notNullable();
      tbl.string('make').notNullable();
      tbl.string('model').unique().notNullable();
      tbl.decimal('mileage').notNullable();
      tbl.string('transmission').notNullable();
      tbl.string('title').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
