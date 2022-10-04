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

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log('connected to db'))
  .then(() => server.listen(4000))
  .then(() => console.log('server listens on 4000'));
