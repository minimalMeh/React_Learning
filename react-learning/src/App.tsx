import React from 'react';
import './App.css';
import RefSample from './refs/refs';
import { Clock } from './states/states';

function App() {
  return (
    <div className="App">
      <p>samples</p>
      <RefSample />
      <Clock />
    </div>
  );
}

export default App;
