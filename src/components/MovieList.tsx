import React from "react";
import { ScrollView, Text, ActivityIndicator, StyleSheet } from "react-native";
import { Query } from "react-apollo";
import { MovieItem } from ".";
import { ALL_MOVIES_QUERY } from "../queries/queries.graphql";
import { ALL_MOVIES_QUERY as AllMovies } from "../queries/models/ALL_MOVIES_QUERY";

class MovieList extends React.Component {

    render() {
        return (
            <Query query={ALL_MOVIES_QUERY}>
                {({ loading, error, data }) => {
                    
                    if (loading) {
                        return <ActivityIndicator style={styles.loadingIndicator} />;
                    }
                    if (error) {
                        return <Text>{`Error: ${error}`}</Text>;
                    }
                    return (
                        <ScrollView>
                            {this.renderMovies(data)}
                        </ScrollView>
                    );
                }}
            </Query>
        );
    }

    private renderMovies(allMovies: AllMovies) {
        if (!allMovies || !allMovies.movies) {
            return null;
        }
        return allMovies.movies.map((movie) => {
            if (!movie) { return; }
            return <MovieItem key={movie.id} movie={movie} />;
        });
    }
}

// es6 template string to crete the query
const styles = StyleSheet.create({
    loadingIndicator: {
        flex: 1,
    },
});

export default MovieList;
