import "./current-weather.css";

const CurrentWeather = ({ data, forecast }) => {
  return (
    <div className="weather">
      <div className="left-info">
        <div className="pic-gradient"></div>
        <div className="today-info">
          <h2>{data.day}</h2>
          <span>{data.date}</span>
          <div>
            <i className="bx bx-current-location"></i>
            <span>{data.city}</span>
          </div>
        </div>
        <div className="today-weather">
          <img
            alt="weather-icon"
            className="weather-icon"
            src={`icons/${data.weather[0].icon}.svg`}
          />
          <h1 className="weather-temp">{Math.round(data.main.temp)}°C</h1>
          <h3>
            {data.weather[0].description.charAt(0).toUpperCase() +
              data.weather[0].description.slice(1)}
          </h3>
        </div>
      </div>

      <div className="right-info">
        <div className="day-info">
          <div>
            <span className="title">FEELS LIKE</span>
            <span className="value">{Math.round(data.main.feels_like)}°C</span>
          </div>
          <div>
            <span className="title">HUMIDITY</span>
            <span className="value">{data.main.humidity} %</span>
          </div>
          <div>
            <span className="title">WIND SPEED</span>
            <span className="value">{Math.round(data.wind.speed)} m/s</span>
          </div>
          <div>
            <span className="title">PRESSURE</span>
            <span className="value">
              {Math.round(data.main.pressure, 2)} Pa
            </span>
          </div>
        </div>

        <ul className="days-list">
          {forecast.list.splice(0, 7).map((item, idx) => (
            <li key={idx}>
              <img
                alt="forecast-icon"
                className="forecast-icon"
                src={`icons/${item.weather[0].icon}.svg`}
              />
              <span>
                {forecast.days[idx].substring(0, 1).toUpperCase() +
                  forecast.days[idx].substring(1, 3)}
              </span>
              <span className="day-temp">{Math.round(item.main.temp)}°C</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CurrentWeather;
