import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const httpLink = createHttpLink({
  uri: "https://graphql.pokeapi.co/v1beta2",
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});