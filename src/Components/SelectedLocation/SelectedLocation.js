import React from "react";

const SelectedLocation = ({ country, state, city }) => {
  if (!city) return null;

  return (
    <h2 className="result">
      You selected <b>{city}</b>, {state}, {country}
    </h2>
  );
};

export default SelectedLocation;
