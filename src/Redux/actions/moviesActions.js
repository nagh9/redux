import { ADD_MOVIE, DELETE_MOVIE } from "../actionsTypes/moviesActions";


const addMovie = (movie) => {
    return {
        type: ADD_MOVIE,
        payload: movie,
    };
}

const deleteMovie = (id) => {
    return {
        type: DELETE_MOVIE,
        payload: id,
    };
};



export { addMovie, deleteMovie }