const knex = require('../connect');

const getPlanets = async (filters) => {
    return knex('planets')
        .select('*')
        .where(filters);
}

const getSpaceCenters = async (filters) => {
    return knex('space-center')
        .select('*')
        .where(filters);
}
const getSpaceCenter = async (filters) => {
    return knex('space-center')
        .select('*')
        .where(filters);
}
const getFlights = async (filters) => {
    return knex('flight')
        .select('*')
        .where(filters);
}
const getFlight = async (filters) => {
    return knex('flight')
        .select('*')
        .where(filters);
}
const getBookings = async (filters) => {
    return knex('booking')
        .select('*')
        .where(filters);
}
const getBooking = async (filters) => {
    return knex('booking')
        .select('*')
        .where(filters);
}

module.exports = {
    getPlanets,
    getSpaceCenter,
    getSpaceCenters,
    getFlights,
    getFlight,
    getBookings,
    getBooking
};