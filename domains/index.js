import { typeDefs as userTypeDefs } from "./users/typeDefs.js";
import { resolvers as userResolvers } from "./users/resolvers.js";
import { typeDefs as storeTypeDefs } from "./store/typeDefs.js";
import { resolvers as storeResolvers } from "./store/resolvers.js";

export const typeDefs = [userTypeDefs, storeTypeDefs];
export const resolvers = [userResolvers, storeResolvers];

// import { typeDefs as userTypeDefs, resolvers as userResolvers } from "./user";
// import { typeDefs as postTypeDefs, resolvers as postResolvers } from "./post";
// import {
//   typeDefs as paymentTypeDefs,
//   resolvers as paymentResolvers,
// } from "./payment";

// export const typeDefs = [userTypeDefs, postTypeDefs, paymentTypeDefs];
// export const resolvers = [userResolvers, postResolvers, paymentResolvers];
