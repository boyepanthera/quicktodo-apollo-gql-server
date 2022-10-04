const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: String!
    firstName: String
    lastName: String
    password: String
    email: String
    tasks: [Task]
  }

  type LoginUser {
    token: String!
    id: String!
  }

  type Task {
    id: String!
    title: String
    userId: String!
    completed: Boolean
  }

  type Query {
    task(id: String!): Task!
    getTasks: [Task!]!
    user(id: String!): User!
    getUsers: [User!]!
  }

  type Mutation {
    registerUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): User!

    loginUser(email: String!, password: String!): LoginUser
    createTask(userId: String!, title: String!): Task!
  }
`;

module.exports = typeDefs;
