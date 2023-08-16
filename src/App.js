import { useState } from "react";
import "./App.css";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";
import CurrentWeather from "./components/current-weather/current-weather";
import Search from "./components/search/search";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchCahnge = (searchData) => {
    const [latitude, longitude] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        // Create a new Date object for the current date
        const currentDate = new Date();

        // Define arrays for the day names and month names
        const dayNames = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        const monthNames = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];

        // Get the day of the week (0-6) and month (0-11) from the Date object
        const dayOfWeek = currentDate.getDay();
        const month = currentDate.getMonth();

        // Format the date and day strings
        const formattedDate = `${currentDate
          .getDate()
          .toString()
          .padStart(2, "0")} ${monthNames[month]} ${currentDate.getFullYear()}`;
        const formattedDay = dayNames[dayOfWeek];

        const days = dayNames
          .slice(dayOfWeek, dayNames.length)
          .concat(dayNames.slice(0, dayOfWeek));

        setCurrentWeather({
          city: searchData.label,
          date: formattedDate,
          day: formattedDay,
          ...weatherResponse,
        });
        setForecast({
          city: searchData.label,
          days: days,
          ...forecastResponse,
        });
      })
      .catch((err) => console.log(err));
  };

  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchCahnge} />
      {currentWeather && (
        <CurrentWeather data={currentWeather} forecast={forecast} />
      )}
    </div>
  );
}

export default App;
