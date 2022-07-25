/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = (knex) => Promise.all([
    knex.schema.createTable('booking', function (table) {
        table.increments();
        table.string('email').notNullable(); 
        table.integer('seat_count').notNullable(); 
        table.timestamps();
        table.integer('flight_id').references('flight.id');

    })
]);
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('booking');
};