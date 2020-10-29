import React from 'react';
import MovieControls from './MovieControls';

const MovieCard = ({movie, type}) => {
    <div className="movie-card">
        <div className="overlay"></div>

            {movie.poster_path ? (
                <img src={`https://image.tmdb.org/t/p/w200`} alt={`${movie.title} Poster`} />
            ) : (
                <div className="filler-poster"></div>
            )}
            <MovieControls type="type" movie={movie} />
    </div>
}   

export default MovieCard;
