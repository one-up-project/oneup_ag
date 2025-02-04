export const resolvers = {
  Query: {
    randomBags: async (_, __, { dataSources }) => {
      try {
        console.log("Ejecutando resolver randomBags"); // Log para depuración
        const randomBags = await dataSources.storeAPI.getRandomBags();

        if (!randomBags || randomBags.length === 0) {
          throw new Error("No se encontraron random bags.");
        }

        console.log("Datos recibidos en el resolver:", randomBags); // Log para depuración
        return randomBags;
      } catch (error) {
        console.error("Error en resolver randomBags:", error.message); // Log detallado
        throw new Error(`Error al obtener random bags: ${error.message}`);
      }
    },
  },
  Mutation: {
    createRandomBag: async (_, { input }, { dataSources }) => {
      try {
        console.log("Ejecutando resolver createRandomBag con input:", input); // Log para depuración
        const result = await dataSources.storeAPI.createRandomBag(input);

        if (!result) {
          throw new Error("La creación de la random bag falló.");
        }

        console.log("Resultado de createRandomBag:", result); // Log para depuración
        return result;
      } catch (error) {
        console.error("Error en resolver createRandomBag:", error.message); // Log detallado
        throw new Error(`Error al crear la random bag: ${error.message}`);
      }
    },
    deleteRandomBag: async (_, { random_bag_id }, { dataSources }) => {
      try {
        console.log("Ejecutando resolver deleteRandomBag con random_bag_id:", random_bag_id); // Log para depuración
        const result = await dataSources.storeAPI.deleteRandomBag(random_bag_id);

        if (!result) {
          throw new Error("No se pudo eliminar la random bag.");
        }

        console.log("Resultado de deleteRandomBag:", result); // Log para depuración
        return result;
      } catch (error) {
        console.error("Error en resolver deleteRandomBag:", error.message); // Log detallado
        throw new Error(`Error al eliminar la random bag: ${error.message}`);
      }
    },
  },
};
