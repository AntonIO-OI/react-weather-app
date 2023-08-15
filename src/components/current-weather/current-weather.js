import "./current-weather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="left-info">
        <div className="pic-gradient"></div>
        <div className="today-info">
          <h2>Friday</h2>
          <span>03 August 2023</span>
          <div>
            <i className="bx bx-current-location"></i>
            <span>Kyiv, UA</span>
          </div>
        </div>
        <div className="today-weather">
          <i className="bx bx-sun"></i>
          <h1 className="weather-temp">25°C</h1>
          <h3>Sunny</h3>
        </div>
      </div>

      <div className="right-info">
        <div className="day-info">
          <div>
            <span className="title">PRECIPITATION</span>
            <span className="value">4 %</span>
          </div>
          <div>
            <span className="title">HUMIDITY</span>
            <span className="value">34 %</span>
          </div>
          <div>
            <span className="title">WIND SPEED</span>
            <span className="value">6 km/h</span>
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

        <div className="btn-container">
          <button className="loc-button">Search Location</button>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
