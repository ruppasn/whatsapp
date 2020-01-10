import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import resolvers from './resolvers'
import typeDefs from './models'


export default () => {
  const server = new ApolloServer({ typeDefs, resolvers });
  const app = express();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at localhost:4000/${server.graphqlPath}`)
  );

}