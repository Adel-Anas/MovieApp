import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import Onepiece from './images/One piece.jpg';
import BlueBeetle from './images/Blue Beetle.jpg'
import SpiderMan from './images/SpiderMan.jpg';
import TalkToMe from './images/talk to me.jpg';
import './App.css'

const App = () => {
  const [movies, setMovies] = useState([
    {
        title : "One piece",
        date : "2023",
        rating : 8.4,
        genre : "Action, Adventure, Comedy",
        imageUrl : Onepiece,
    },

    {
        title : "Blue Beetle",
        date : "2023",
        rating : 6.3,
        genre : "Sci-Fi, Adventure, Action",
        imageUrl : BlueBeetle,
    },

    {
        title : "Spider-Man: Across the Spider-Verse",
        date : "2023",
        rating : 8.7,
        genre : "Animation, Adventure, Action",
        imageUrl : SpiderMan,
    },
    {
      title : "Talk to me",
      date : "2023",
      rating : 7.2,
      genre : "Thriller, Horror",
      imageUrl: TalkToMe,
    } 
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleFilterChange = (value, filterType) => {
    if (filterType === 'title') {
      const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredMovies(filtered);
    } else if (filterType === 'rating') {
      const filtered = movies.filter((movie) => movie.rating >= parseFloat(value));
      setFilteredMovies(filtered);
    }
  };

  return (
    <div className="app">
      <h1>Zmovies Streaming</h1>
      <Filter handleFilterChange={handleFilterChange} />
      <button className='button_add' onClick={() => handleAddMovie({ title: 'New Movie', imageUrl: '', rating: 0 })}>
        Add Movie
      </button>
      <div className='container'>
        <MovieList movies={filteredMovies} />
      </div>
      
    </div>
  );
};

export default App;
