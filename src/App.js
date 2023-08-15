import "./App.css";
import CurrentWeather from "./components/current-weather/current-weather";
import Search from "./components/search/search";

function App() {
  const handleOnSearchCahnge = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchCahnge} />
      <CurrentWeather />
    </div>
  );
}

export default App;
