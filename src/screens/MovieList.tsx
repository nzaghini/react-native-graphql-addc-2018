import React from "react";
import { ScrollView, Text, ActivityIndicator, StyleSheet } from "react-native";
import { Query } from "react-apollo";
import { MovieItem } from "../components";
import { ALL_MOVIES_QUERY } from "../queries/queries.graphql";
import { ALL_MOVIES_QUERY as AllMovies, 
         ALL_MOVIES_QUERY_movies as Movie } from "../queries/models/ALL_MOVIES_QUERY";
import { ScreenProps } from "../common/ScreenProps";
import { Screens } from "../common/AppNavigator";
import { i18n } from "../../i18n/I18n";

class MovieList extends React.Component<ScreenProps> {

    static navigationOptions = {
        title: i18n("movieList.title"),
    };

    constructor(props: ScreenProps) {
        super(props);
    }

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

    private navigateTo = (movie: Movie) => {
        this.props.navigation.navigate(Screens.MovieDetails, { movie });
    }

    private renderMovies(allMovies: AllMovies) {
        if (!allMovies || !allMovies.movies) {
            return null;
        }
        return allMovies.movies.map((movie) => {
            return <MovieItem key={movie.id} movie={movie} action={this.navigateTo}/>;
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
