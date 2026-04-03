import logo from './logo.svg';
import './App.css';
import Clock from './Clock3';
import React, { useState } from "react";

function App() {
  const [selected, setSelected] = useState("");
  const [clocks, setClocks] = useState([]);

  const timezones = [
    { country: "India 🇮🇳", tz: "Asia/Kolkata", locale: "en-IN" },
    { country: "USA 🇺🇸", tz: "America/New_York", locale: "en-US" },
    { country: "UK 🇬🇧", tz: "Europe/London", locale: "en-GB" },
    { country: "Japan 🇯🇵", tz: "Asia/Tokyo", locale: "ja-JP" }
  ];

  const handleAdd = () => {
    if (selected !== "") {
      setClocks([...clocks, JSON.parse(selected)]);
    }
  };
  
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
    <div style={{ textAlign: "center" }}>
      <h1>Dynamic World Clock</h1>

      {/* Dropdown */}
      <select onChange={(e) => setSelected(e.target.value)}>
        <option value="">Select Country</option>
        {timezones.map((tz, index) => (
          <option key={index} value={JSON.stringify(tz)}>
            {tz.country}
          </option>
        ))}
      </select>

      {/* Add Button */}
      <button onClick={handleAdd} style={{ marginLeft: "10px" }}>
        Add
      </button>

      {/* Render Clocks */}
      <div>
        {clocks.map((c, index) => (
          <Clock
            key={index}
            country={c.country}
            timezone={c.tz}
            locale={c.locale}
          />
        ))}
      </div>
    </div>


      
      
    </div>
  );
}

export default App;
