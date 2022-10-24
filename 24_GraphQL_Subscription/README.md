## Resume Materi GraphQL Subscription

Nama : Rizky Nurfauzi  
Kelas : React A

## GraphQL Subscription

Subscription adalah fitur GraphQL yang memungkinkan server mengirim data ke kliennya saat event tertentu terjadi. Subscription biasanya diimplementasikan dengan WebSockets. Dalam pengaturan itu, server mempertahankan koneksi yang stabil ke klien Subscriptionnya. Ketika data diubah maka klien akan mendapatkan data yang diperbarui secara langsung secara real-time.

### GraphQL Subscription Install

1. Install required libraries, with `npm install graphql-ws`
2. Initialize a GraphQLWsLink, simpan GraphQLWsLink pada file yang sama dimana kamu menyimpan `ApolloClient`

```js
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

const wsLink = new GraphQLWsLink(
  createClient({
    url: "ws://localhost:4000/subscriptions",
  })
);
```

3. Split communication by operation (recommended),

```js
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
});

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
```

4. Provide the link chain to Apollo Client,

```js
const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});
```

5. Authenticate over WebSocket (optional), add in current wsLink

```js
const wsLink = new GraphQLWsLink(
  createClient({
    url: "ws://localhost:4000/subscriptions",
    connectionParams: {
      authToken: user.authToken,
    },
  })
);
```

## Task GraphQL Subscription

![Subscription](Screenshots/GraphQL-Subscription.gif)
