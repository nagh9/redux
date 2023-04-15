import { ADD_MOVIE, DELETE_MOVIE } from "../actionsTypes/moviesActions";

const initialState = {
    movies: [
        { id : 1,
            name:"Dr house",
            description:"An antisocial maverick doctor who specializes in diagnostic medicine does whatever it takes to solve puzzling cases that come his way using his crack team of doctors and his wits.", 
            poster: "",
            rating:"8.7/10",
            },
            {
            id : 2,
            name: "Encanto",
            description:"",
            poster: "",
            rating: "7/10",
            
    
            },
            {
            id : 3,
            name:"Turning Red",
            description:"",
            poster:"",
            rating:"7/10",
                
            }],
};

            export const moviesReducers = (state = initialState, action) => {
                switch (action.type) {
                    case ADD_MOVIE:
                        return {
                            ...state,
                            movies: [...state.movies, action.payload],
                        };
                    case DELETE_MOVIE:
                        return {
                            ...state,
                            movies: state.movies.filter((movie) => movie.id !== action.payload),
                        };
                    default:
                        return state;
            
                }
            }



