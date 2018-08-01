

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ALL_MOVIES_QUERY
// ====================================================

export interface ALL_MOVIES_QUERY_movies_director {
  firstName: string;
  lastName: string;
}

export interface ALL_MOVIES_QUERY_movies {
  id: string;
  title: string;
  year: string;
  director: ALL_MOVIES_QUERY_movies_director;
}

export interface ALL_MOVIES_QUERY {
  movies: ALL_MOVIES_QUERY_movies[] | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================