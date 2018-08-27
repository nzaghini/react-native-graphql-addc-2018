import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { AppNavigator } from "./common/AppNavigator";
import codePush from "react-native-code-push";

const client = new ApolloClient({
    uri: "https://kit-omgqlyfdcg.now.sh/graphql",
});

class App extends React.Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <AppNavigator />
            </ApolloProvider> 
        );
    }
}

export default codePush()(App);
