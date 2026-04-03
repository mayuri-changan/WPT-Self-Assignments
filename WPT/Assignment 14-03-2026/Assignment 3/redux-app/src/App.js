import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store, zones } from './store';

function Clock({ country, offset, index }) {
  const dispatch = useDispatch();
  const time = new Date(new Date().getTime() + offset * 3600 * 1000);
  const bgColor = time.getHours() < 12 ? 'lavender' : 'lightblue';

  return (
    <div style={{ backgroundColor: bgColor, margin: '5px', padding: '10px' }}>
      <h3>{country}: {time.toLocaleTimeString()}</h3>
      <button onClick={() => dispatch({ type: 'REMOVE_CLOCK', index })}>Close</button>
    </div>
  );
}

function App() {
  const clocks = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div>
      <center>
      <pre>
      Assignment 16: <br/>
      Modify the React Clock app using React Redux to maintain application state.
      </pre>
      <h1>World Clock with Redux</h1>
      <select id="zone">
        {Object.keys(zones).map(c => <option key={c}>{c}</option>)}
      </select>
      <button onClick={() => {
        const country = document.getElementById('zone').value;
        dispatch({ type: 'ADD_CLOCK', payload: { country, offset: zones[country] } });
      }}>Add</button>

      {clocks.map((c, i) => <Clock key={i} {...c} index={i} />)}
      </center>
    </div>
  );
}

export default function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}