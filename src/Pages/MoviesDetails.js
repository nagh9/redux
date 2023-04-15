import { useParams } from "react-router-dom";
import { movies } from "../data/movies";



const MoviesDetails = () => {
    const { id } = useParams();
    const findMovie = movies.find((movie) => movie.id === parseInt(id));
    return (
        <>
        <div>
            <h1>{findMovie.name}</h1>
            <p>{findMovie.description}</p>
            <p>{findMovie.price}</p>
        
        </div>
        
        </>
    );
}

export default MoviesDetails;