import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, deleteMovie } from "../Redux/actions/moviesActions";


const Movies = () => {
    const moviesList = useSelector(state => state.moviesReducers.movies)
    console.log(moviesList);
    const dispatch = useDispatch();

    const [search, setSearch] = useState("");
    const [newMovie, setNewMovie] = useState({
        name: "",
        description: "",
    });

    const handleChange = (e) => {
        setNewMovie({
            ...newMovie,
            [e.target.name]: e.target.value,
        });
    };

    const filterData = moviesList.filter((movie) => {
        return movie.name.toLowerCase().includes(search.toLowerCase());
    });
    return (
        <div>
            <input type="search" placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
            />
            {filterData.map((movie) => (

                <div key={movie.id}>
                    <button
                        onClick={() => dispatch(deleteMovie(movie.id))}
                    >x</button>
                    <h1>{movie.name}</h1>
                    <p>{movie.description}</p>
                    <Link to={`/movies/${movie.id}`}>
                        <button>View</button>
                    </Link>
                </div>

            ))
            }
            <form 
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(addMovie(newMovie));
                }}
            >
                <input type="text" name="name"
                    onChange={handleChange}
                />
                <input type="text" name="description"
                    onChange={handleChange}
                />
                <button
                    type="submit"
                >Add Movie</button>

            </form>
        </div>
    );
};

export default Movies;