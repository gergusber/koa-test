const knex = require('../connect');

const getPlanetsByCode = async (filters) => {
    return knex('planets')
        .select('*')
        .where(filters);
}


module.exports = {
    getPlanetsByCode
};