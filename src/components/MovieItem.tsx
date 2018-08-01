import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { ALL_MOVIES_QUERY_movies as Movie } from "../queries/models/ALL_MOVIES_QUERY";

interface MovieProp {
    movie: Movie;
    key: string;
    action: (movie: Movie) => void;
}

class MovieItem extends React.Component<MovieProp> {

    onPress = () => {
        this.props.action(this.props.movie);
    }

    render() {
        const { container, titleStyle, subTitleStyle } = styles;
        const { title, year, director } = this.props.movie;

        return (
            <TouchableHighlight onPress={this.onPress} activeOpacity={0.4} underlayColor={"white"}>
                <View style={container}>
                    <Text style={titleStyle}>{title} - {year}</Text>
                    <Text style={subTitleStyle}>{director.firstName} {director.lastName}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

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
