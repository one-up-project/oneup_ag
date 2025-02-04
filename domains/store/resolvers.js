export const resolvers = {
  Query: {
    randomBags: async (_, __, { dataSources }) => {
      try {
        const randomBags = await dataSources.storeAPI.getRandomBags();

        if (!randomBags || randomBags.length === 0) {
          throw new Error("No se encontraron random bags.");
        }

        console.log("Datos recibidos en el resolver:", randomBags); 
        return randomBags;
      } catch (error) {
        throw new Error(`Error al obtener random bags: ${error.message}`);
      }
    },
  },
  Mutation: {
    createRandomBag: async (_, { input }, { dataSources }) => {
      try {
        console.log("Ejecutando resolver createRandomBag con input:", input); 
        const result = await dataSources.storeAPI.createRandomBag(input);

        if (!result) {
          throw new Error("La creación de la random bag falló.");
        }

        console.log("Resultado de createRandomBag:", result);
        return result;
      } catch (error) {
        throw new Error(`Error al crear la random bag: ${error.message}`);
      }
    },
    deleteRandomBag: async (_, { random_bag_id }, { dataSources }) => {
      try {
        const result = await dataSources.storeAPI.deleteRandomBag(random_bag_id);

        if (!result) {
          throw new Error("No se pudo eliminar la random bag.");
        }

        console.log("Resultado de deleteRandomBag:", result); 
        return result;
      } catch (error) {
        throw new Error(`Error al eliminar la random bag: ${error.message}`);
      }
    },
  },
};
