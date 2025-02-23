export const typeDefs = `#graphql
  type RandomBag {
    random_bag_id: Int!
    store_id: Int!
    username: String!  # Nuevo campo
    description: String!
    total_price: Float!
    discount_price: Float
    pick_up_time: String
    available: Boolean!
    created_at: String!
    updated_at: String!
    deleted_at: String
  }

  input RandomBagInput {
    store_id: Int!
    username: String!  # Nuevo campo
    description: String!
    total_price: Float!
    discount_price: Float
    pick_up_time: String
    available: Boolean!
  }
    
  input UpdateRandomBagInput {
    random_bag_id: Int!
    store_id: Int!
    username: String!
    description: String!
    total_price: Float!
    discount_price: Float
    pick_up_time: String
    available: Boolean!
  }
  type Query {
    randomBags: [RandomBag]
  }

  type Mutation {
    createRandomBag(input: RandomBagInput!): RandomBag
    deleteRandomBag(random_bag_id: Int!): RandomBag
    updateRandomBag(input: UpdateRandomBagInput!): RandomBag
  }
`;