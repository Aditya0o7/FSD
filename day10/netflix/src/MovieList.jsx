import movies from './movies';
import './MovieList.css'
const MovieList = ()=>{
    return (
        <div className='movie-list'>
            {movies.map((movie)=> (
                <div key={movie.id} className='movie-card'>
                    <img src={movie.image} alt={movie.title} />
                    <h1>Title: {movie.Title}</h1>
                    <h2>Cost: {movie.cost}</h2>
                    <p>{movie.description}</p>
                </div>
            ))}
        </div>
    );
};
export default MovieList;