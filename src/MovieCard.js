import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (

      <div className="movie-card">

        <div className='imageContainer'>
            <img src={movie.imageUrl} alt={movie.title} className='img' />
        </div>
      
      <div className='infoContainer'>
        <h2>{movie.title}</h2>
        <p className='date'>{movie.date}</p>
        <p className='rating'> <span>Rating</span>: {movie.rating}</p>
      </div>
      
    </div>
    
  );
};

export default MovieCard;