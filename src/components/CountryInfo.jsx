import React, { useState, useEffect } from "react";
import countryService from "../services/countries";

const CountryInfo = ({ country }) => {
  // Tilamuuttuja säätietojen tallentamiseen
  const [weatherData, setWeatherData] = useState(null);
  // Suoritetaan aina, kun 'country.capital' muuttuu
  useEffect(() => {
    // Funktio, joka hakee säätiedot maan pääkaupungista
    const fetchWeatherData = async () => {
      try {
        const data = await countryService.getWeatherByCapital(country.capital);
        // saadut säätiedot tilamuuttujaan
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    // Suoritetaan funktio 'fetchWeatherData'
    fetchWeatherData();
  }, [country.capital]); //suoritus määritetään 'country.capital' -muutoksen perusteella

  const languages = Object.values(country.languages);
  const temperature = weatherData
    ? `${Math.floor(weatherData.main.temp)}°C`
    : "";
  const wind = weatherData ? `${weatherData.wind.speed} m/s` : "";
  // Palauttaa sääikoniin URL: n
  const getWeatherIcon = (weatherCode) => {
    const iconBaseUrl = "https://openweathermap.org/img/wn/";
    return `${iconBaseUrl}${weatherCode}.png`;
  };

  return (
    <section>
      <h2>{country.name}</h2>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area} square kilometres</p>
      <p>Languages:</p>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
      <figure>
        <img src={country.flags.svg} alt={"Flag of " + country.name} />
      </figure>
      {weatherData && (
        <div>
          <h3>Weather in {country.capital}</h3>
          <p>Temperature: {temperature}</p>
          <p>Wind: {wind}</p>
          {weatherData.weather && (
            <img
              src={getWeatherIcon(weatherData.weather[0].icon)}
              alt={weatherData.weather[0].description}
            />
          )}
        </div>
      )}
    </section>
  );
};

export default CountryInfo;
