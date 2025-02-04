export const resolvers = {
    Query: {
      randomBags: async (_, __, { dataSources }) => {
        return await dataSources.storeAPI.getRandomBags();
      },
    },
    Mutation: {
      createRandomBag: async (_, { input }, { dataSources }) => {
          return await dataSources.storeAPI.createRandomBag(input);
        },
    },
  };
  