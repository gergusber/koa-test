const Koa = require('koa');
const { ApolloServer } = require('apollo-server-koa');
const { schema } = require('./graphql/schema');

const server = new ApolloServer(schema);

server.start().then(res => {
    const app = new Koa();
    server.applyMiddleware({ app });
    app.listen({ port: 3003 }, () =>
        console.log('Now browse to http://localhost:3003' + server.graphqlPath)
    )
})
