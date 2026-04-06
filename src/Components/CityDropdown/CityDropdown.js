import React from "react";

const CityDropdown = ({ cities, selectedCity, onChange, disabled }) => {
  return (
    <select value={selectedCity} onChange={onChange} disabled={disabled}>
      <option key="default-city" value="">
        Select City
      </option>
      {cities.map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </select>
  );
};

export default CityDropdown;
