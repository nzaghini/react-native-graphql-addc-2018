import React, { Component } from 'react';
import { ScrollView, Text, ActivityIndicator } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { MovieDetail } from './';

class MovieList extends Component {

    renderMovies({ allMovies }) {
        // Bad performance for large list. Example only.
        return allMovies.map(movie => {
            return <MovieDetail key={movie.id} movie={movie} />;
        });
    }

    render() {
        return (
            <Query query={query}>
                {({ loading, error, data }) => {
                    if (loading) return <ActivityIndicator style={styles.loadingIndicator} />;
                    if (error) return <Text>{`Error: ${error}`}</Text>;
                    console.log(data);
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
const query = gql` 
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

const styles = {
    loadingIndicator: {
        flex: 1,
    },
};

export default MovieList;
