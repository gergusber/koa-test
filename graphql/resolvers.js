
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
const resp = async (id) => {
    console.log('acaa')
    return { text: "Hello World", value: id }
}
const resolvers = () => {
    return {
        Query: {
            hello: (id) => resp(id),
            planets: (filters) => getPlanetsResolver(filters),
            spaceCenters: (filters) => getSpaceCentersResolver(filters),
            spaceCenter: ( filters) => getSpaceCenterResolver(filters),
            flights: (filters) => getFlightsResolver(filters),
            flight: (filters) => getFlightResolver(filters),
            bookings: (filters) => getBookingsResolver(filters),
            booking: (filters) => getBookingResolver(filters),
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