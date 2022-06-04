import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    from,
} from "@apollo/client";

import {onError} from '@apollo/client/link/error';
import {setContext} from '@apollo/client/link/context'

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:4000/" }),
]);

const authLink = setContext((_, {header}) => {
    return {
        headers: {
            ...header,
            authorization: localStorage.getItem("token") || ""
        }
    }
})

const client = new ApolloClient({
    link: authLink.concat(link),
    cache: new InMemoryCache(),
});

export default client;