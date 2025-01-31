export const typeDefs = `#graphql

  type User {
    id: ID!,
    name: String!,
    email: String!,
    rol: String!,
    available: Boolean!,

  }
  
  type Store {
    id_store: ID!,
    store_name: String!,
    description: String,
    category: String,
    manager_email: String,
    phone_number: String,
    rol: String,
    available: Boolean,
    location: Location!  
  }

  type Location {
  lat: Float!,
  lon: Float!
}

  type Query{
    # user queries
    getUsers: [User],
    getUser(id: ID!): User,
    # store queries
    getStores: [Store],
    getStore(id: ID!): Store,
    # get near stores using user coordinates
    getNearStores(lat: Float!, lon: Float!): [Store],
    # get stores by name or category
    getStoresByName(name: String, category:String ): [Store],

  }

  `;
