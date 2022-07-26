const { gql } = require('apollo-server-koa');
const { resolvers } = require('./resolvers');

const typeDefs = gql`
    type Planet {
        id: ID!
        name: String!
        code: String!
    }

    type SpaceCenter {
        id: ID!
        uid: String!
        name: String!
        description: String!
        planets: [Planet!]!
    }

    type Flight {
        id: ID!
        code: String!
        launchSite: String!
        landingSite: String!
        departureAt: String!
        seatCount: Int!
        availableSeats: Int!
    }

    type Booking {
        id: ID!
        flight: Flight!
        seatCount: Int!
        email: String!
    }


    type PlanetSimplified {
        name: String!
    }
    
    type Site {
        name: String!
        planet: PlanetSimplified
    }

    type ScheduleFlightResponse {
        id: Int!
        code: String!
        launchSite: Site!
        landingSite: Site!
        availableSeats: Int!
        seatCount: Int!
        departureAt: String! 
    }

    type bookingResponse {
        id: ID!
        flight: Flight!
        email: String!
      }

    input BookingInfo {
        seatCount: Int!
        flightId: Int!
        email: String!
    }

    input ScheduleFlightInput {
        launchSiteId: Int!
        landingSiteId: Int!
        departureAt: String!
        seatCount: Int!
    }

    type TestData {
        text: String!
        value: Int!
    }

    type Query {
        hello(id: Int): TestData
        planets(limit: Int): [Planet]
        spaceCenters(page: Int,pageSize: Int): [SpaceCenter]
        spaceCenter(id: Int, uid: Int): SpaceCenter
        flights(from: String!,to: String!, seatCount: Int, departureDay: String,page: Int,pageSize: Int): [Flight]
        flight(id: Int!): Flight
        bookings(email: String!,page: Int,pageSize: Int): [Booking]
        booking(id: Int!): Booking
    }

    type Mutation {
        scheduleFlight(flightInfo: ScheduleFlightInput): ScheduleFlightResponse!
        bookFlight(postInput: BookingInfo): bookingResponse!
    }
    schema {
      query: Query  
      mutation: Mutation
    }
`;


const schema = {
    typeDefs,
    resolvers
}

module.exports = {
    schema,
};