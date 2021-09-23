import { ApolloClient, InMemoryCache } from '@apollo/client';

export const api = new ApolloClient({
  uri: 'https://studio.apollographql.com/sandbox/explorer',
  cache: new InMemoryCache(),
});
