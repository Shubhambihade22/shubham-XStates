import React from "react";

const StateDropdown = ({ states, selectedState, onChange, disabled }) => {
  return (
    <select value={selectedState} onChange={onChange} disabled={disabled}>
      <option key="default-state" value="">
        Select State
      </option>
      {states.map((state) => (
        <option key={state} value={state}>
          {state}
        </option>
      ))}
    </select>
  );
};

export default StateDropdown;
