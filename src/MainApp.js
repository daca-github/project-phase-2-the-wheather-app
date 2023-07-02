import React from 'react';
import './MainApp.css';
import App from './App';

function MainApp() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Weather App</h2>
        <p>A simple weather application that provides current weather information for any city in the world.</p>
        <App />
      </header>
    </div>
  );
}

export default MainApp;
