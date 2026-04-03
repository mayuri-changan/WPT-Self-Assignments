// import logo from './logo.svg';
// import './App.css';
import Clock from "./Clock1";

function App() {
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
      <h1>World Clock</h1>

      <Clock country="India 🇮🇳" timezone="Asia/Kolkata" locale="en-IN" />
      <Clock country="USA 🇺🇸" timezone="America/New_York" locale="en-US" />
      <Clock country="UK 🇬🇧" timezone="Europe/London" locale="en-GB" />

    </div>
    </div>
  );
}

export default App;
