import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://dear-warthog-23.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "1Tb9Lk64aKVeyeoj4VDX6R4QkLH4RMeaghx9y3vDQjX7AZZC06kzBvTGh26Q3dKu",
  },
});

export default client;
