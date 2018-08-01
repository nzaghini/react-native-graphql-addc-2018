import { MovieList, MovieDetail } from "../screens";
import { createStackNavigator } from "react-navigation"; 

export const Screens = {
    MovieList: "MovieList",
    MovieDetails: "MovieDetails",
};

export const AppNavigator = createStackNavigator(
    {
        MovieList: MovieList,
        MovieDetails: MovieDetail,
    },
    {
        initialRouteName: Screens.MovieList,
    },
);
