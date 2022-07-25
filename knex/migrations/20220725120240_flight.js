/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = (knex) => Promise.all([
    knex.schema.createTable('flight', function (table) {
        table.increments();
        table.string('code').notNullable();
        table.dateTime('departure_at').notNullable();
        table.integer('seat_count').notNullable(); 
        table.timestamps();
        table.integer('lauching_site_id').references('space-center.id');
        table.integer('landing_site_id').references('space-center.id');
    })
]);
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('flight');
};