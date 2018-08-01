import React from "react";
import renderer from "react-test-renderer";
import MovieDetails from "../src/screens/MovieDetail";
import { mockNavigation } from "./mocks/NavigationMock";

const mockListOfMovies = [ 
    { id: "1", title: "Interstellar", year: "2014", director: { firstName: "Christopher", lastName: "Nolan" } },
    { id: "2", title: "Mad Max: Fury Road", year: "2015", director: { firstName: "George", lastName: "Miller" } },
];

describe("<MovieDetails /> with Movie provided via navigation", () => {
                      
    it("Renders correctly", () => {
        jest.spyOn(mockNavigation, "getParam").mockImplementation(({ screen }) => mockListOfMovies[0]);

        const tree = renderer.create(<MovieDetails navigation={mockNavigation} />).toJSON();
        expect(JSON.stringify(tree)).toContain(mockListOfMovies[0].title);
        expect(tree).toMatchSnapshot();
    });

});

describe("<MovieDetails /> without Movie provided via props directly", () => {    
                      
    it("Something wrong here", () => {
        jest.spyOn(mockNavigation, "getParam").mockImplementation(({ screen }) => {});
        
        const tree = renderer.create(<MovieDetails navigation={mockNavigation} movie={mockListOfMovies[1]} />).toJSON();
        expect(JSON.stringify(tree)).toContain(mockListOfMovies[1].title);
        expect(tree).toMatchSnapshot();
    });

});

describe("<MovieDetails /> without Movie provided", () => {    
                      
    it("Something wrong here", () => {
        jest.spyOn(mockNavigation, "getParam").mockImplementation(({ screen }) => {});

        const tree = renderer.create(<MovieDetails navigation={mockNavigation} />).toJSON();
        expect(JSON.stringify(tree)).toContain("Something wrong here!");
        expect(tree).toMatchSnapshot();
    });

});
