import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs, resolvers } from "./domains/index.js";
import { Search_ms } from "./domains/users/dataSources.js";

//server setup
//schema
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startServer() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async () => ({
      dataSources: {
        Search_ms: new Search_ms(),
      },
    }),
  });

  console.log("Server started at", url);
}

startServer();
