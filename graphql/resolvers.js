
const { 
    getPlanets,
    getSpaceCenter,
    getSpaceCenters,
    getFlights,
    getFlight,
    getBookings,
    getBooking 
} = require('../knex/queries/queries');
const scheduleFlight = async (flightInfo) => {

}
const bookFlight = async (postInput) => {

}

const getPlanetsResolver = async (filters) => {
    const data = await getPlanets(filters)
    return data;
}

const getSpaceCentersResolver = async (filters) => {
    const data = await getSpaceCenters(filters)
    return data;
}

const getSpaceCenterResolver = async (filters) => {
    const data = await getSpaceCenter(filters)
    return data;
}

const getFlightsResolver = async (filters) => {
    const data = await getFlights(filters)
    return data;
}

const getFlightResolver = async (filters) => {
    const data = await getFlight(filters)
    return data;
}

const getBookingsResolver = async (filters) => {
    const data = await getBookings(filters)
    return data;
}

const getBookingResolver = async (filters) => {
    const data = await getBooking(filters)
    return data;
}

const resolvers = () => {
    return {
        Query: {
            planets: (_, filters) => getPlanetsResolver(filters),
            spaceCenters: (filters) => getSpaceCentersResolver(filters),
            spaceCenter: (_, filters) => getSpaceCenterResolver(filters),
            flights: (_, filters) => getFlightsResolver(filters),
            flight: (_, filters) => getFlightResolver(filters),
            bookings: (_, filters) => getBookingsResolver(filters),
            booking: (_, filters) => getBookingResolver(filters),
        },
        Mutation: {
            scheduleFlight: (flightInfo) => scheduleFlight(flightInfo),
            bookFlight: (postInput) => bookFlight(postInput),
        },
    }
}
module.exports = {
    resolvers
}