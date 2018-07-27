import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ALL_MOVIES_QUERY_movies as Movie } from "../queries/models/ALL_MOVIES_QUERY";

interface MovieProp {
    movie: Movie;
    key: string;
}

const MovieItem = (props: MovieProp) => {
    const { container, titleStyle, subTitleStyle } = styles;
    const { title, year, director } = props.movie;
    return (
        <View style={container}>
            <Text style={titleStyle}>{title} - {year}</Text>
            <Text style={subTitleStyle}>{director.firstName} {director.lastName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 60,
        justifyContent: "center",
        paddingLeft: 10,
        borderColor: "#ddd",
        borderBottomWidth: 1,
    },
    titleStyle: {
        fontSize: 18,
    },
    subTitleStyle: {
        fontSize: 12,
    },
});

export default MovieItem;
