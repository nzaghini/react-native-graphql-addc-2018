import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import renderer from 'react-test-renderer';
import gql from 'graphql-tag';
import wait from 'waait';
import MovieList from '../src/components/MovieList';

const ALL_MOVIES_QUERY = gql` 
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

const mocks = [
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
                            firstName: 'test',
                            lastName: 'another'
                        }
                    }
                ],
            },
        },
    },
];

test('renders correctly the loading state', () => {
    console.log(mocks);
    const tree = renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MovieList />
      </MockedProvider>
    );
    
    // Not waiting for the provider to return, so loading is true
    expect(tree.toJSON()).toMatchSnapshot();
});

//** Learned the from https://dev-blog.apollodata.com/testing-apollos-query-component-d575dc642e04 */
test('renders correctly the list of movies', async () => {
    console.log(mocks);
    const tree = renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MovieList />
      </MockedProvider>
    );
    
    await wait(0); // wait for response

    const firstMovieTitle = mocks[0].result.data.allMovies[0].title;
    expect(JSON.stringify(tree)).toContain(firstMovieTitle);
    expect(tree.toJSON()).toMatchSnapshot();
});
