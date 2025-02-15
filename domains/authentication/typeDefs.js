
export const typeDefs = `#graphql

  type TokenUser {
    id: String!
  }

  type User {
    username: String!
    email: String!
    password: String!
    phone: String!
    rol: String!
    lat: Float
    long: Float
  }

  input UserInput { 
    username: String!
    email: String!
    password: String!
    phone: String!
    rol: String!
    lat: Float
    long: Float
  }

  input UserLogin { 
    email: String!
    password: String!
  }

  type Query {
    user: [User],
    tokenUser: [TokenUser]
  }

  type Mutation {
    createUser(input: UserInput!): User
    loginUser(input: UserLogin!): User
  }

  `;

