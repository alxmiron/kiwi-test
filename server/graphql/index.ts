import { ApolloServer } from "apollo-server-micro";
import { resolvers } from "./resolvers";
import typeDefs from "./schema.graphql";

const apolloServer = new ApolloServer({
	typeDefs,
	resolvers,
});

export const handler = apolloServer.createHandler({ path: "/api/graphql" });
