import React from 'react';
import { AppRegistry, View } from 'react-native';
import { Header, MovieList } from './src/components';

const App = () => (
    <View style={{ flex: 1 }}>
        <Header />
        <MovieList />
    </View>
);

AppRegistry.registerComponent('ADDCWorkshop2018', () => App);
