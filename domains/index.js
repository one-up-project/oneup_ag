import { typeDefs as userTypeDefs } from "./users/typeDefs.js";
import { resolvers as userResolvers } from "./users/resolvers.js";

export const typeDefs = [userTypeDefs];
export const resolvers = [userResolvers];

// import { typeDefs as userTypeDefs, resolvers as userResolvers } from "./user";
// import { typeDefs as postTypeDefs, resolvers as postResolvers } from "./post";
// import {
//   typeDefs as paymentTypeDefs,
//   resolvers as paymentResolvers,
// } from "./payment";

// export const typeDefs = [userTypeDefs, postTypeDefs, paymentTypeDefs];
// export const resolvers = [userResolvers, postResolvers, paymentResolvers];
