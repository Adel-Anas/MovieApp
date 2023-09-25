import React from 'react';
import './Filter.css'

const Filter = ({ handleFilterChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        onChange={(e) => handleFilterChange(e.target.value, 'title')}
        className='movie_filter'
      />
      <input
        type="number"
        placeholder="Filter by rating"
        onChange={(e) => handleFilterChange(e.target.value, 'rating')}
        className='movie_filter'
      />
    </div>
  );
};

export default Filter;