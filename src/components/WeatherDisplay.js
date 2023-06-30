import React from 'react';

function WeatherDisplay({ data }) {
  return (
    <div>
      <h2>Weather in {data.location.name}</h2>
      <h3>{data.current.condition.text}</h3>
      <img src={data.current.condition.icon} alt="weather icon" />
      <p>Temperature: {data.current.temp_f}°F</p>
      <p>Feels like: {data.current.feelslike_f}°F</p>
      <p>Wind: {data.current.wind_kph} kph direction {data.current.wind_dir}</p>
      <p>Humidity: {data.current.humidity}%</p>
    </div>
  );
}

export default WeatherDisplay;
