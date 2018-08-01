import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { AppNavigator } from "./common/AppNavigator";

const client = new ApolloClient({
    uri: "https://kit-omgqlyfdcg.now.sh/graphql",
});

const App = () => (
    <ApolloProvider client={client}>
        <AppNavigator />
    </ApolloProvider> 
);

export default App;
