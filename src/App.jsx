import { useState, useEffect } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Countries from "./components/Countries";
// import Country from "./components/Country";
import countryService from "./services/countries";
import CountryInfo from "./components/CountryInfo";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    console.log("effect");
    countryService.getAll().then((initialCountries) => {
      console.log("promise fulfilled");
      setCountries(initialCountries);
    });
  }, []);

  const handleShowCountry = (country) => {
    setSelectedCountry(country);
  };

  const handleFilterChange = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    if (searchValue.length > 0) {
      const matches = countries.filter((country) =>
        country.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      if (matches.length <= 10) {
        setFilteredCountries(matches);
        if (matches.length === 1) {
          setSelectedCountry(matches[0]);
        } else {
          setSelectedCountry(null);
        }
      } else {
        setFilteredCountries([]);
        setSelectedCountry(null);
      }
    } else {
      setFilteredCountries([]);
      setSelectedCountry(null);
    }
  }, [searchValue, countries]);

  return (
    <>
      <header>
        <h1>Countries Information</h1>
      </header>
      <main>
        <Filter value={searchValue} onChange={handleFilterChange} />
        {selectedCountry ? ( // Jos valittu maa, näytä sen tiedot
          <CountryInfo country={selectedCountry} />
        ) : filteredCountries.length > 0 ? (
          <>
            <h2>List of countries</h2>
            <Countries
              countries={filteredCountries}
              handleShowCountry={handleShowCountry}
            />
          </>
        ) : (
          <p>
            {searchValue.length > 0 &&
              "Too many matches, specify another filter"}
          </p>
        )}
      </main>
    </>
  );
};

export default App;
