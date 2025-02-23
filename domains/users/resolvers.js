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
    getStore: async (_, { id }, { dataSources }) => {
      const response = await dataSources.Search_ms.getStore(id);
      console.log("response search_ms", response);
      return response;
    },
  },
};
