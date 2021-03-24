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


// To address this problem (which is not a bug in Apollo Client), either ensure all objects of type Page have an ID or a custom merge function, or define a custom merge function for the Query.Page field, so InMemoryCache can safely merge these objects:

//   existing: {"__typename":"Page","media({\"search\":\"\"})":{}}
//   incoming: {"__typename":"Page","media({\"search\":\"1997\"})":{"0":{"__ref":"Media:34085"},"1":{"__ref":"Media:91838"},"2":{"__ref":"Media:33"},"3":{"__ref":"Media:2623"},"4":{"__ref":"Media:690"},"5":{"__ref":"Media:3571"},"6":{"__ref":"Media:1325"},"7":{"__ref":"Media:30027"},"8":{"__ref":"Media:155"},"9":{"__ref":"Media:156"}}}

// For more information about these options, please refer to the documentation:

//   * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers
//   * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects
