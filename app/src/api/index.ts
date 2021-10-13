import fetch from 'cross-fetch';
import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';

export const api = new ApolloClient({
  link: createHttpLink({
    uri: 'http://10.0.2.2:4000/graphql',
    fetch,
  }),
  cache: new InMemoryCache(),
});
