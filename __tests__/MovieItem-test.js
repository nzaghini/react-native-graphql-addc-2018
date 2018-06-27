import React from 'react';
import renderer from 'react-test-renderer';
import MovieItem from '../src/components/MovieItem';

const mockListOfMovies = [ 
    { id: 1, title: 'Interstellar', year: 2014, director: { firstName: 'Christopher', lastName: 'Nolan' } },
    { id: 2, title: 'Mad Max: Fury Road', year: 2015, director: { firstName: 'George', lastName: 'Miller' } }
];

test('renders correctly first movie', () => {
    const tree = renderer.create(<MovieItem key="1" movie={mockListOfMovies[0]} />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders correctly second movie', () => {
    const tree = renderer.create(<MovieItem key="1" movie={mockListOfMovies[1]} />).toJSON();
    expect(tree).toMatchSnapshot();
});
