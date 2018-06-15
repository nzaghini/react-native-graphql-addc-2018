import React from 'react';
import { View } from 'react-native';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Header, MovieList } from './components';

const client = new ApolloClient({
    uri: 'https://kit-qjmktkrrqo.now.sh/graphql'
});

const App = () => (
    <ApolloProvider client={client}>
        <View style={{ flex: 1 }}>
            <Header />
            <MovieList />
        </View>
    </ApolloProvider>
);

export default App;
