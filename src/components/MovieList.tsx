import React from "react";
import { ScrollView, Text, ActivityIndicator, StyleSheet } from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { MovieItem } from ".";

class MovieList extends React.Component {

    private renderMovies({ allMovies }) {
        // Bad performance for large list. Example only.
        return allMovies.map(movie => {
            return <MovieItem key={movie.id} movie={movie} />;
        });
    }

    render() {
        return (
            <Query query={ALL_MOVIES_QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return <ActivityIndicator style={styles.loadingIndicator} />;
                    if (error) return <Text>{`Error: ${error}`}</Text>;
                    return (
                        <ScrollView>
                            {this.renderMovies(data)}
                        </ScrollView>
                    );
                }}
            </Query>
        );
    }
}

// es6 template string to crete the query
export const ALL_MOVIES_QUERY = gql` 
    {
        allMovies{
            id
            title
            year
            director{
                firstName
                lastName
            }
        }
    }
`;


const styles = StyleSheet.create({
    loadingIndicator: {
        flex: 1,
    },
});

export default MovieList;
