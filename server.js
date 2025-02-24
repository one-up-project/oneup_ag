import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs, resolvers } from "./domains/index.js";
import { Search_ms } from "./domains/users/dataSources.js";
import { StoreAPI } from "./domains/store/dataSources.js";
//server setup
//schema
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const PORT = process.env.PORT || 4000;

async function startServer() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: PORT },
    context: async () => ({
      dataSources: {
        Search_ms: new Search_ms(),
        storeAPI: new StoreAPI(),
      },
    }),
  });

  console.log("Server started at", url);
}

startServer();
