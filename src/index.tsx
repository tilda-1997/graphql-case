import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const cache = new InMemoryCache({
  typePolicies: {
    Page: {
      keyFields:[["id"],["id"]],
      // fields: {
      //   media: {
      //     merge(existing, incoming) {
      //       return { ...existing, ...incoming };
      //     },
      //   }
      // }
    },
    // media: {
    //   keyFields: ["id"],
    // }
  },
});

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: cache
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
