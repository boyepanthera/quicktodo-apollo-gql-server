const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: String!
    firstName: String
    lastName: String
    password: String
    email: String
    notes: [Note]
  }

  type LoginUser {
    token: String!
    id: String!
  }

  type Note {
    id: String!
    title: String
    userId: String!
    completed: Boolean
  }

  type Query {
    user(id: String!): User!
  }

  type Mutation {
    registerUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): User!

    loginUser(email: String!, password: String!): LoginUser
  }
`;

module.exports = typeDefs;