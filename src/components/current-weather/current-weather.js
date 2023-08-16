import "./current-weather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="left-info">
        <div className="pic-gradient"></div>
        <div className="today-info">
          <h2>Friday</h2>
          <span>03 August 2023</span>
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
          {/* <i className="bx bx-sun"></i> */}
          <h1 className="weather-temp">25°C</h1>
          <h3>{data.weather[0].description}</h3>
        </div>
      </div>

      <div className="right-info">
        <div className="day-info">
          <div>
            <span className="title">FEELS LIKE</span>
            <span className="value">24°C</span>
          </div>
          <div>
            <span className="title">HUMIDITY</span>
            <span className="value">34 %</span>
          </div>
          <div>
            <span className="title">WIND SPEED</span>
            <span className="value">6 km/h</span>
          </div>
          <div>
            <span className="title">PRESSURE</span>
            <span className="value">15 hPa</span>
          </div>
        </div>

        <ul className="days-list">
          <li>
            <i className="bx bx-cloud"></i>
            <span>Sat</span>
            <span className="day-temp">23°C</span>
          </li>
          <li>
            <i className="bx bx-sun"></i>
            <span>Sun</span>
            <span className="day-temp">28°C</span>
          </li>
          <li>
            <i className="bx bx-cloud-rain"></i>
            <span>Mon</span>
            <span className="day-temp">02°C</span>
          </li>
          <li>
            <i className="bx bx-cloud-drizzle"></i>
            <span>Tue</span>
            <span className="day-temp">14°C</span>
          </li>
          <li>
            <i className="bx bx-cloud-drizzle"></i>
            <span>Tue</span>
            <span className="day-temp">14°C</span>
          </li>
          <li>
            <i className="bx bx-cloud-drizzle"></i>
            <span>Tue</span>
            <span className="day-temp">14°C</span>
          </li>
          <li>
            <i className="bx bx-cloud-drizzle"></i>
            <span>Tue</span>
            <span className="day-temp">14°C</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CurrentWeather;
