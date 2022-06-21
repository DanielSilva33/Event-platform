import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o4v75g0kis01xxc8q37g3a/master",
  cache: new InMemoryCache(),
});
