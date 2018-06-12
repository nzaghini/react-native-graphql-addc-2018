import React from 'react';
import { View, Text } from 'react-native';

const MovieDetail = ({ movie }) => {
    const { container, text } = styles;
    const { title, year } = movie;
    return (
        <View style={container}>
            <Text style={text}>{title} - {year}</Text>
        </View>
    );
};

const styles = {
    container: {
        height: 60,
        justifyContent: 'space-around',
        paddingLeft: 10,
        borderColor: '#ddd',
        borderBottomWidth: 1,
    },
    text: {
        fontSize: 18,
    }
};

export { MovieDetail };
