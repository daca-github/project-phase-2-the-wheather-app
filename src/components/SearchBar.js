import React, { useState } from 'react';

function SearchBar({ getWeatherData, className }) {
  const [location, setLocation] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (location) {
      getWeatherData(location);
      setLocation('');
    }
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter a city..."
      />
      <button type="submit">Get Weather</button>
    </form>
  );
}

export default SearchBar;
