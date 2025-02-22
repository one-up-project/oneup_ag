//import { gql } from "graphql-tag";

export const typeDefs = `#graphql

type Order{
  order_id: Int!
  user_id: Int!
  random_bag_id: Int!
  current_status: String!
  randomBag: RandomBag
}
  type RandomBag {
    random_bag_id: Int!
    store_id: Int!
    description: String!
    total_price: Float!
    discount_price: Float
    pick_up_time: String
    available: Boolean!
    created_at: String!
    updated_at: String!
    deleted_at: String
    store: Store
  }

  input RandomBagInput {
    store_id: Int!
    description: String!
    total_price: Float!
    discount_price: Float
    pick_up_time: String
    available: Boolean!
  }

  type Query {
    randomBags: [RandomBag]
    getOrdersByUser(user_id: Int!): [Order]
    getRandomBagById(random_bag_id: Int!): RandomBag
  }

  type Mutation {
    createRandomBag(input: RandomBagInput!): RandomBag
    deleteRandomBag(random_bag_id: Int!): RandomBag
    reserveRandomBag(user_id: Int!, random_bag_id: Int!): RandomBag
  }
`;
