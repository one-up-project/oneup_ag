import { Search_ms } from "./dataSources.js";

export const resolvers = {
  // getUsers
  // getUser
  // getStore
  // getStores
  // getStoresByName

  Query: {
    getNearStores: async (_, { lat, lon }, { dataSources }) => {
      return dataSources.Search_ms.getNearStores(lat, lon);
    },
    getStoresByName: async (_, { name, category }, { dataSources }) => {
      return dataSources.Search_ms.getStoresByName(name, category);
    },
  },
};
