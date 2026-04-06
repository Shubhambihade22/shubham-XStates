import React from "react";

const CountryDropdown = ({ countries, selectedCountry, onChange }) => {
  return (
    <select value={selectedCountry} onChange={onChange}>
      <option key="default-country" value="">
        Select Country
      </option>
      {countries.map((country) => (
        <option key={country} value={country}>
          {country}
        </option>
      ))}
    </select>
  );
};

export default CountryDropdown;
