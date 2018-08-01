import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { ScreenProps } from "../common/ScreenProps";
import { ALL_MOVIES_QUERY_movies as Movie } from "../queries/models/ALL_MOVIES_QUERY";

interface MovieDetailsProps extends ScreenProps {
    movie?: Movie;
}

class MovieDetails extends React.Component<MovieDetailsProps> {
    
    static navigationOptions = {
        title: "Movie Detail",
    };

    render() {
        const movie: Movie = this.props.movie || this.props.navigation.getParam("movie");
        console.log(movie);
        if (!movie) { return <Text>Something wrong here!</Text>; }
        const { title, container, director, year } = styles;
        return (
            <View style={container}>
                <Text style={title}>{movie.title}</Text>
                <Text style={director}>{movie.director.firstName} {movie.director.lastName}</Text>
                <Text style={year}>{movie.year}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 60,
        textAlign: "center",
        padding: 5,
    },
    director: {
        fontSize: 20,
        textAlign: "center",
        padding: 5,
        color: "#a9a9a9",
    },
    year: {
        fontSize: 10,
        textAlign: "center",
        padding: 5,
        color: "#a9a9a9",
    },
});

export default MovieDetails;
