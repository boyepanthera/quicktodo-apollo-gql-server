const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: String!
    firstName: String
    lastName: String
    password: String
    email: String
    tasks: [Task!]
  }

  type LoginUser {
    token: String!
    id: String!
  }

  type Task {
    id: String!
    title: String
    userId: User
    completed: Boolean
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input UpdateTaskInput {
    id: String
    completed: Boolean
    title: String
  }

  type Query {
    task(id: String!): Task!
    getTasks(userId: String): [Task!]!
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
    loginUser(LoginInput: LoginInput!): LoginUser
    createTask(userId: String!, title: String!): Task!
    updateTask(UpdateTaskInput: UpdateTaskInput): Task!
    deleteTask(taskId: String!): Task!
  }
`;

module.exports = typeDefs;
