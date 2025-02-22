import axios from "axios";

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

  // RandomBag: {
  //   store: async (parent) => {
  //     try {
  //       //log de test
  //       console.log(`store_id: ${parent.store_id}`);

  //       // peticion search_ms para obtener la información de la tienda por id
  //       const response = await axios.get(
  //         `http://localhost:8800/search-ms/stores/get-store-by-id/${parent.store_id}`
  //       );
  //       console.log("respuesta search_ms", response);
  //       if (!response) {
  //         throw new Error(
  //           "El campo id_store no se encuentra en la respuesta de la API."
  //         );
  //       }
  //       return response;
  //     } catch (error) {
  //       console.error(`Error al obtener la tienda: ${error.message}`);
  //       throw new Error(`Error al obtener la tienda: ${error.message}`);
  //     }
  //   },
  // },

  RandomBag: {
    store: async (parent, _, { dataSources }) => {
      if (!parent.store_id) return {};
      try {
        //log de test
        console.log(`store_id: ${parent.store_id}`);

        // peticion search_ms para obtener la información de la tienda por id
        const response = await dataSources.Search_ms.getStore(parent.store_id);
        console.log("respuesta search_ms", response);
        if (!response) {
          throw new Error(
            "El campo id_store no se encuentra en la respuesta de la API."
          );
        }
        return response;
      } catch (error) {
        console.error(`Error al obtener la tienda: ${error.message}`);
        throw new Error(`Error al obtener la tienda: ${error.message}`);
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
        const result = await dataSources.storeAPI.deleteRandomBag(
          random_bag_id
        );

        if (!result) {
          throw new Error("No se pudo eliminar la random bag.");
        }

        console.log("Resultado de deleteRandomBag:", result);
        return result;
      } catch (error) {
        throw new Error(`Error al eliminar la random bag: ${error.message}`);
      }
    },
    reserveRandomBag: async (
      _,
      { user_id, random_bag_id },
      { dataSources }
    ) => {
      try {
        const result = await dataSources.storeAPI.reserveRandomBag(
          user_id,
          random_bag_id
        );

        if (!result) {
          throw new Error("No se pudo reservar la random bag.");
        }

        console.log("Resultado de reserveRandomBag:", result);
        return result;
      } catch (error) {
        throw new Error(`Error al reservar la random bag: ${error.message}`);
      }
    },
  },
};
