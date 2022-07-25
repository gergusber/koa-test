/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => Promise.all([
    knex.schema.createTable('planets', function (table) {
        table.increments();
        table.string('name').notNullable();
        table.string('code').notNullable();
    })
]);
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('planets');
};