import React from "react";
import Country from "./Country";

const Countries = ({ countries, handleShowCountry }) => {
  return (
    <ul>
      {countries.map((country) => (
        <Country
          key={country.name}
          country={country}
          handleShowCountry={handleShowCountry}
        />
      ))}
    </ul>
  );
};

export default Countries;
