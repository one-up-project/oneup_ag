
export const resolvers = {
  Query: {
    user: async (_, __, { dataSources }) => {
      try {
        const user = await dataSources.storeAPI.getUser();

        if (!user || user.length === 0) {
          throw new Error("El usuario ya existe.");
        }else{    
          console.log("Datos recibidos en el resolver:", user); 
          return user;
        }
        
      } catch (error) {
        throw new Error(`Error al obtener el usuario: ${error.message}`);
      }
    },
  },

  Query: {
    tokenUser: async (_, __, { dataSources }) => {
      try {
        const token = await dataSources.Authentication.tokenUser();
        if (!token || token.length === 0) {
          throw new Error("No se encontraron tokens.");
        }
        console.log("Datos recibidos de tokenUser:", token); 
        return token;
      } catch (error) {
        throw new Error(`Error al obtener los tokens: ${error.message}`);
      }
    },
  },

  Mutation: {
    createUser: async (_, { input }, { dataSources }) => {
      try {
        console.log("Ejecutando resolver createUser con input:", input); 
        const result = await dataSources.Authentication.createUser(input); // se envía el input al backend con la función createUser
        // se debe agregar un filtro en caso de que el usuario exista
        if (!result) {
          throw new Error("La creación del usuario falló.");
        }
        console.log("Resultado de createUser:", result);
        return result;
      } catch (error) {
        throw new Error(`Error al crear el usuario: ${error.message}`);
      }
    },

    updateUser: async (_, { input }, { dataSources }) => {
      try {
        console.log("Ejecutando resolver updateUser con input:", input); 
        const result = await dataSources.Authentication.updateUser(input); // se envía el input al backend con la función createUser
        // se debe agregar un filtro en caso de que el usuario exista
        if (!result) {
          throw new Error("La actualización del usuario falló.");
        }
        console.log("Resultado de updateUser:", result);
        return result;
      } catch (error) {
        throw new Error(`Error al actualizar el usuario: ${error.message}`);
      }
    },

    loginUser: async (_, { input }, { dataSources }) => {
      try {
        console.log("Ejecutando resolver loginUser con input:", input); 
        const result = await dataSources.Authentication.loginUser(input); // se envía el input al backend con la función createUser
        // se debe agregar un filtro en caso de que el usuario exista
        if (!result) {
          throw new Error("La consulta del usuario falló.");
        }
        console.log("Resultado de loginUser:", result);
        return result;
      } catch (error) {
        throw new Error(`Error al consultar loginUser: ${error.message}`);
      }
    },

  },
};
