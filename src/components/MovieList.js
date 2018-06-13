import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { MovieDetail } from './';

class MovieList extends Component {

    constructor() {
        super();
        // Fist iteration: Static Version of the App
        this.state = { movies: [{ id: 1, title: 'Interstellar', year: '2014', director: 'Christopher Nolan' }, 
                       { id: 2, title: 'Mad Max: Fury Road', year: '2015', director: 'George Miller' }] };
    }

    renderMovies() {
        // Bad performance for large list. Just example of props vs state
        return this.state.movies.map(movie => {
            return <MovieDetail key={movie.id} movie={movie} />;
        });
    }

    render() {
        return (
            <ScrollView>
                {this.renderMovies()}
            </ScrollView>
        );
    }

}

export { MovieList };
