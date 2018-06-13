import React from 'react';
import { View, Text } from 'react-native';

const MovieDetail = ({ movie }) => {
    const { container, titleStyle, subTitleStyle } = styles;
    const { title, year, director } = movie;
    return (
        <View style={container}>
            <Text style={titleStyle}>{title} - {year}</Text>
            <Text style={subTitleStyle}>{director}</Text>
        </View>
    );
};

const styles = {
    container: {
        height: 60,
        justifyContent: 'center',
        paddingLeft: 10,
        borderColor: '#ddd',
        borderBottomWidth: 1,
    },
    titleStyle: {
        fontSize: 18,
    },
    subTitleStyle: {
        fontSize: 12,
    }
};

export { MovieDetail };
