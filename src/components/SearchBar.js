import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ getWeatherData, className, isDarkMode }) {
  const [location, setLocation] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (location) {
      getWeatherData(location);
      setLocation('');
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`${className} ${isDarkMode ? 'DarkMode' : ''}`}>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter a city..."
        className="search-input"
      />
      <button type="submit" className="search-button">
        Get Weather
      </button>
    </form>
  );
}

export default SearchBar;
