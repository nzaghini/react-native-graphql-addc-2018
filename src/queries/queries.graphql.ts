import gql from "graphql-tag";

export const ALL_MOVIES_QUERY = gql` 
    query ALL_MOVIES_QUERY{
        movies{
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
