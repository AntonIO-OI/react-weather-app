import "./App.css";
import Search from "./components/search/search";

function App() {
  const handleOnSearchCahnge = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchCahnge} />
    </div>
  );
}

export default App;
