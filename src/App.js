import React, { useState } from 'react';
import './MainApp.css';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  function getWeatherData(location) {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(location)}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert("City not found");
        } else {
          setWeatherData(data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="App">
      <SearchBar getWeatherData={getWeatherData} className="search-bar" />
      {weatherData && <WeatherDisplay data={weatherData} className="weather-display" />}
    </div>
  );
}

export default App;
