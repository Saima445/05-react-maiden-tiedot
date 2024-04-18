import { useState, useEffect } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Countries from "./components/Countries";
// import Country from "./components/Country";
import countryService from "./services/countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    console.log("effect");
    countryService.getAll().then((initialCountries) => {
      console.log("promise fulfilled");
      setCountries(initialCountries);
    });
  }, []);

  const handleFilterChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredCountries = countries.filter((country) => {
    return country.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <>
      <h1>Countries informations</h1>
      <Filter value={searchValue} onChange={handleFilterChange} />
      <h2>List of countries</h2>
      <Countries countries={filteredCountries} />
    </>
  );
};

export default App;
