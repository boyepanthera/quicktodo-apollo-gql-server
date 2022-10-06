const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const models = require('./models');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models },
});

const port = process.env.PORT || 4000;

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log('connected to db'))
  .then(() => server.listen(port))
  .then(() => console.log('server listens on ' + port));
