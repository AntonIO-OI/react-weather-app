# React Weather App

Welcome to the React Weather App! This is a web application that provides real-time weather information for cities around the world. The app utilizes two APIs: GeoDB Cities API to fetch city data and OpenWeather API to retrieve weather information.

## Features

- Search for weather information of cities worldwide.
- Display current weather conditions including temperature, humidity, and weather description.
- Responsive design for optimal user experience on different devices.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- HTML and CSS: For structuring and styling the app.
- GeoDB Cities API: Provides city data and location information.
- OpenWeather API: Retrieves real-time weather data.
- Axios: A promise-based HTTP client for making API requests.
- Responsive Design: CSS media queries for ensuring the app works well on various screen sizes.

## Installation

1. Clone the repository:
```git clone https://github.com/your-username/react-weather-app.git```

2. Navigate to the project directory:
```cd react-weather-app```

3. Install dependencies using npm or yarn:
```
npm install
# or
yarn install
```

4. Obtain API Keys:
* Register on the GeoDB Cities API (https://geodb-cities-api.wirefreethought.com/) to get your GeoDB API key.
* Sign up on the OpenWeather API (https://openweathermap.org/) to obtain your OpenWeather API key.

5. Create a api.js file in the project root and add your API keys:
```
export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "you_key",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};
export const GEO_API_URL =
  "https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions";
export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/";
export const WEATHER_API_KEY = "your_key";
```

6. Start the development server:
```
npm start
# or
yarn start
```

7. Open your browser and go to http://localhost:3000 to use the app.


## License
This project is licensed under the MIT License.

## Acknowledgments
The app design and functionality were inspired by the need for a simple and clean weather application.
Thanks to GeoDB Cities API and OpenWeather API for providing the necessary data for this project.
Special thanks to the React community for the extensive resources and tutorials.
