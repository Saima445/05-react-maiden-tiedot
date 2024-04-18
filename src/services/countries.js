import axios from "axios";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => {
    // Käsitellään maatiedot täällä
    const countries = response.data.map((country) => {
      // Tarkista, onko maan nimi saatavilla useilla kielillä
      const name = country.name.common || country.name.official || "";
      // Haetaan lipun URL-osoite
      const flagUrl = country.flags ? country.flags.svg || "" : "";
      // Haetaan maassa puhutut kielet
      const languages = Object.values(country.languages || {});
      return { ...country, name, flagUrl, languages };
    });
    return countries;
  });
};

export default { getAll };
