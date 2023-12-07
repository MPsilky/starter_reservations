exports.up = function (knex) {
  return knex.schema.hasTable('tables').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('tables', function(table) {
        table.increments('table_id').primary();
        table.string('table_name');
        table.integer('capacity');
        table.string('status').defaultTo('free');
        table.integer('reservation_id')
             .references('reservation_id')
             .inTable('reservations')
             .onDelete('set null');
        table.timestamps(true, true);
      });
    }
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('tables');
};
