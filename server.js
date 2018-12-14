const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./api/schema');
const resolvers = require('./api/resolvers');

const app = express();

const PORT = 4000;

const SERVER = new ApolloServer({
  typeDefs,
  resolvers
});

SERVER.applyMiddleware({ app });

app.get('/', (req, res) => res.send(`Apollo Server Running, access GraphQL playground at http://localhost:${PORT}/graphql`));

app.listen(PORT, () =>
  console.log(`🚀 GraphQL playground is running at http://localhost:${PORT}/graphql`)
);
