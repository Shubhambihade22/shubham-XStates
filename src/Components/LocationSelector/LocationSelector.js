import React, { useEffect, useState } from "react";
import CountryDropdown from "../CountryDropdown/CountryDropdown";
import StateDropdown from "../StateDropdown/StateDropdown";
import CityDropdown from "../CityDropdown/CityDropdown";
import SelectedLocation from "../SelectedLocation/SelectedLocation";

const LocationSelector = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // Fetch countries
  useEffect(() => {
    fetch("https://location-selector.labs.crio.do/countries")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.log(err));
  }, []);

  // Fetch states
  useEffect(() => {
    if (selectedCountry) {
      fetch(
        `https://location-selector.labs.crio.do/country=${selectedCountry}/states`,
      )
        .then((res) => res.json())
        .then((data) => setStates(data))
        .catch((err) => console.log(err));
    }

    setSelectedState("");
    setSelectedCity("");
    setCities([]);
  }, [selectedCountry]);

  // Fetch cities
  useEffect(() => {
    if (selectedCountry && selectedState) {
      fetch(
        `https://location-selector.labs.crio.do/country=${selectedCountry}/state=${selectedState}/cities`,
      )
        .then((res) => res.json())
        .then((data) => setCities(data))
        .catch((err) => console.log(err));
    }

    setSelectedCity("");
  }, [selectedState]);

  return (
    <>
      <div className="dropdowns">
        <CountryDropdown
          countries={countries}
          selectedCountry={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        />

        <StateDropdown
          states={states}
          selectedState={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          disabled={!selectedCountry}
        />

        <CityDropdown
          cities={cities}
          selectedCity={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          disabled={!selectedState}
        />
      </div>

      <SelectedLocation
        country={selectedCountry}
        state={selectedState}
        city={selectedCity}
      />
    </>
  );
};

export default LocationSelector;
