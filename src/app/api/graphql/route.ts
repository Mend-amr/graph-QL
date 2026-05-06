import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

const server = new ApolloServer({
  typeDefs: `
  type Query {
    hello: String
  }
`,
  resolvers: { Query: { hello: () => "Hello, world!" } },
});
const handler = startServerAndCreateNextHandler(server);
export { handler as GET, handler as POST };
