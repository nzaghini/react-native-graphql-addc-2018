import React from 'react';
import { SafeAreaView } from 'react-native';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Header, MovieList } from './components';

const client = new ApolloClient({
    uri: 'https://kit-qjmktkrrqo.now.sh/graphql'
});

const App = () => (
    <ApolloProvider client={client}>
        <SafeAreaView style={{ flex: 1 }}>
            <Header />
            <MovieList />
        </SafeAreaView>
    </ApolloProvider>
);

export default App;
