/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = (knex) => Promise.all([
    knex.schema.createTable('space-center', function (table) {
        table.increments();
        table.string('uid').notNullable();
        table.string('name').notNullable();
        table.string('description').notNullable();
        table.float('latitude').notNullable();
        table.float('longitude').notNullable();
        table.timestamps();
        table.integer('planets_id').references('planets.id');
        // table.integer('planets_code').references('planets.code');
    })
]);
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('space-center');
};