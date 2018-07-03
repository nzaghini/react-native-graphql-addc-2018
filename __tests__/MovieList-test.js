import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import renderer from 'react-test-renderer';
import wait from 'waait';
import MovieList, { ALL_MOVIES_QUERY } from '../src/components/MovieList';

const allMoviesMock = [
    {
        request: {
            query: ALL_MOVIES_QUERY,
        },
        result: {
            data: {
                allMovies: [
                    {
                        id: '1',
                        title: 'Interstellar',
                        year: '2014',
                        director: {
                            firstName: 'Christopher',
                            lastName: 'Nolan'
                        }
                    }
                ],
            },
        },
    },
];

const noMoviesMock = [
    {
        request: {
            query: ALL_MOVIES_QUERY,
        },
        result: {
            data: {
                allMovies: [],
            },
        },
    },
];

const errorResponseMock = [
    {
        request: {
            query: ALL_MOVIES_QUERY,
        },
        error: new Error('ouch, something went wrong!'),
    },
];

test('renders correctly the loading state', () => {
    const tree = renderer.create(
      <MockedProvider mocks={allMoviesMock} addTypename={false}>
        <MovieList />
      </MockedProvider>
    );
    
    // Not waiting for the provider to return, so loading is true
    expect(tree.toJSON()).toMatchSnapshot();
});

//** Learned the from https://dev-blog.apollodata.com/testing-apollos-query-component-d575dc642e04 */
test('renders correctly the list of movies', async () => {
    const tree = renderer.create(
      <MockedProvider mocks={allMoviesMock} addTypename={false}>
        <MovieList />
      </MockedProvider>
    );
    
    await wait(0); // wait for response

    const firstMovieTitle = allMoviesMock[0].result.data.allMovies[0].title;
    expect(JSON.stringify(tree)).toContain(firstMovieTitle);
    expect(tree.toJSON()).toMatchSnapshot();
});

test('renders correctly when there are no movies', async () => {
    const tree = renderer.create(
      <MockedProvider mocks={noMoviesMock} addTypename={false}>
        <MovieList />
      </MockedProvider>
    );
    
    await wait(0); // wait for response
    expect(tree.toJSON()).toMatchSnapshot();
});

test('renders correctly when there are errors', async () => {
    const tree = renderer.create(
        <MockedProvider mocks={errorResponseMock} addTypename={false}>
          <MovieList />
        </MockedProvider>
    );
      
    await wait(0); // wait for response
    expect(JSON.stringify(tree)).toContain('ouch, something went wrong!');
    expect(tree.toJSON()).toMatchSnapshot();  
});
