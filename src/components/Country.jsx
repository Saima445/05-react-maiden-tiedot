const Country = ({ country, handleShowCountry }) => {
  return (
    <li>
      <p>{country.name}</p>
      <button onClick={() => handleShowCountry(country)}>Show</button>
    </li>
  );
};

export default Country;
