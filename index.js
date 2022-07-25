const Koa = require('koa');
const { ApolloServer, gql } = require('apollo-server-koa');
const queries = require('./knex/queries/queries.js');



const typeDefs = gql`
  type Cast {
    firstName: String
    lastName: String
    Food: String
  }
  type Query {
    cast(firstName: String, lastName: String, Food: String): [Cast]
  }
`;





const schema = {
    typeDefs,
    resolvers: {
        // Prototypes for GET 
        Query: {
            cast: (_, filters) => queries.getCast(filters),
        }
    }
}


const server = new ApolloServer(schema);

const app = new Koa();
server.applyMiddleware({ app });

app.listen({ port: 3000 }, () =>
    console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`),
);
