const CountryInfo = ({ country }) => {
  return (
    <section>
      <h2>{country.name}</h2>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>
      <p>Languages:</p>
      <ul>
        {country.languages.map((language) => (
          <li key={language.id} language={language} />
        ))}
      </ul>
      <figure>
        <img>{country.flag}</img>
      </figure>
    </section>
  );
};

export default CountryInfo;
