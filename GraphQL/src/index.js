import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      hello: String
      hi: String
      id: ID
      name: String
      age: Int
      average: Float
      truly: Boolean!
      list: [String!]!
    }
  `,
  resolvers: {
    Query: {
      hello: () => {
        return 'Hello again';
      },
      hi: () => {
        return 'Hi';
      },
      id: () => {
        return '45611-645a44';
      },
      name: () => 'João Cícero Vicente Sousa',
      age: () => 27,
      average: () => 53.4,
      truly: () => true,
      list: () => ['João', 'Cícero', 'Vicente', 'Sousa'],
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on ${url}`);
});
