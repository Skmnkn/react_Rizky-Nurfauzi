import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = new HttpLink({
  uri: "https://dear-warthog-23.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "1Tb9Lk64aKVeyeoj4VDX6R4QkLH4RMeaghx9y3vDQjX7AZZC06kzBvTGh26Q3dKu",
  },
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: "wss://dear-warthog-23.hasura.app/v1/graphql",
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "1Tb9Lk64aKVeyeoj4VDX6R4QkLH4RMeaghx9y3vDQjX7AZZC06kzBvTGh26Q3dKu",
      },
    },
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
