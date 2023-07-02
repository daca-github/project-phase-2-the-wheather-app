# Weather App

This is a simple weather app that allows you to get the current weather information for a specific location.

## Features

- Search for weather by city name
- Display current temperature, condition, wind, and humidity
- Dark mode functionality

## Technologies Used

- React.js
- HTML
- CSS

## Live Demo

Check out the live demo of the Weather App: [Weather App Demo](https://benevolent-biscotti-ad35c9.netlify.app/)

## Getting Started

To get started with the weather app, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## Usage

1. Enter a city name in the search bar.
2. Click on the "Get Weather" button to fetch and display the current weather information for the specified location.
3. Optionally, toggle the dark mode switch to enable or disable dark mode.
4. As you type in the search bar, the app will provide suggestions for cities with similar names.
5. Click on a suggestion to populate the search bar with the selected city name.
6. The app will automatically save the weather data to a local JSON server using a POST request to the `db.json` file.

## Saving Weather Data

The weather data is saved using a POST request to a local JSON server. Here are the steps to set up the JSON server and make the POST request:

1. Install JSON server globally: `npm install -g json-server`
2. Start the JSON server: `json-server --watch db.json`
3. When you search for weather data using the app, the data will be saved to the `db.json` file.

## License

This project is licensed under the [MIT License](LICENSE).

## Backend Link
https://github.com/daca-github/TheWeatherApp-json-server
