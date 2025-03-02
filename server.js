import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs, resolvers } from "./domains/index.js";

import { Search_ms } from "./domains/users/dataSources.js";
import { StoreAPI } from "./domains/store/dataSources.js";
import { Authentication } from "./domains/authentication/dataSources.js";

import cors from "cors"; // Importa el paquete cors

// Configura el servidor Apollo
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startServer() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 8080 },
    context: async () => ({
      dataSources: {
        Search_ms: new Search_ms(),
        storeAPI: new StoreAPI(),
        Authentication: new Authentication(),
      },
    }),
    
    // Configura CORS aquí
    cors: {
      origin: "http://localhost:3000", // Permite solicitudes desde este origen
      methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
      allowedHeaders: ["Content-Type", "Authorization"], // Encabezados permitidos
      credentials: true, // Permite credenciales (cookies, tokens, etc.)
    },
  });

  console.log("El servicio inicio en el puerto: ", url);
}

startServer();
