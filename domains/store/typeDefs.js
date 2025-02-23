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
    username: String!  # Nuevo campo
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
    getOrdersByUser(user_id: Int!): [Order]
    getOrdersByStore(store_id: Int!): [Order]

    # getRandomBagById(random_bag_id: Int!): RandomBag
  }

  type Mutation {
    createRandomBag(input: RandomBagInput!): RandomBag
    deleteRandomBag(random_bag_id: Int!): RandomBag
    updateRandomBag(input: UpdateRandomBagInput!): RandomBag
    reserveRandomBag(user_id: Int!, random_bag_id: Int!): RandomBag
  }
`;