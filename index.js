const Koa = require('koa');
const { ApolloServer } = require('apollo-server-koa');
const { schema } = require('./graphql/schema');

const server = new ApolloServer(schema);

const app = new Koa();

server.applyMiddleware({ app });

app.listen({ port: 3000 }, () =>
    console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`),
);
