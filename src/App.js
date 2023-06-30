import React, { useState } from 'react';
import './MainApp.css';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';



function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  function getWeatherData(location) {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(location)}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert("City not found");
        } else {
          setWeatherData(data);
          saveWeatherData(data); // Save weather data to the JSON Server
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function saveWeatherData(data) {
    fetch('http://localhost:3001/weather', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((savedData) => {
        console.log('Weather data saved:', savedData);
      })
      .catch((error) => {
        console.error('Error saving weather data:', error);
      });
  }

  function handleDarkModeToggle() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className="App">
      <SearchBar getWeatherData={getWeatherData} className="search-bar" />
      {weatherData && (
        <WeatherDisplay data={weatherData} className="weather-display" />
      )}
    </div>
  );
}

export default App;
