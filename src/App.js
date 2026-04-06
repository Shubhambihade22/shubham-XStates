import React from "react";
import "./App.css";
import LocationSelector from "./Components/LocationSelector/LocationSelector";

function App() {
  return (
    <div className="container">
      <h1>Select Location</h1>
      <LocationSelector />
    </div>
  );
}

export default App;
