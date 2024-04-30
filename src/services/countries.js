import axios from "axios";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => {
    // Käsitellään maatiedot täällä
    const countries = response.data.map((country) => {
      // Tarkista, onko maan nimi saatavilla useilla kielillä
      const name = country.name.common || country.name.official || "";
      // Haetaan maan pääkaupunki
      const capital = country.capital;
      // Haetaan lipun URL-osoite
      const flagUrl = country.flags ? country.flags.svg || "" : "";
      // Haetaan maassa puhutut kielet
      const languages = Object.values(country.languages || {});
      return { ...country, name, capital, flagUrl, languages };
    });
    return countries;
  });
};

const getWeatherByCapital = async (capital) => {
  const apiKey = import.meta.env.VITE_openweathermap_KEY;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}&units=metric`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

export default { getAll, getWeatherByCapital };
