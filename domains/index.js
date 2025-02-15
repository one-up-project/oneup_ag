import { typeDefs as userTypeDefs } from "./users/typeDefs.js";
import { resolvers as userResolvers } from "./users/resolvers.js";
import { typeDefs as storeTypeDefs } from "../domains/store/typeDefs.js";
import { resolvers as storeResolvers } from "../domains/store/resolvers.js";

import { typeDefs as authenticationTypeDefs } from "./authentication/typeDefs.js";
import { resolvers as authenticationResolvers } from "./authentication/resolvers.js";


export const typeDefs = [userTypeDefs,storeTypeDefs, authenticationTypeDefs];
export const resolvers = [userResolvers, storeResolvers, authenticationResolvers];

// import { typeDefs as userTypeDefs, resolvers as userResolvers } from "./user";
// import { typeDefs as postTypeDefs, resolvers as postResolvers } from "./post";
// import {
//   typeDefs as paymentTypeDefs,
//   resolvers as paymentResolvers,
// } from "./payment";

// export const typeDefs = [userTypeDefs, postTypeDefs, paymentTypeDefs];
// export const resolvers = [userResolvers, postResolvers, paymentResolvers];
