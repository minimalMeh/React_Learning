import React from 'react';
import './App.css';
import { Ref } from './refs/refs';
import { Clock } from './states/Clock';
import { ToggleButton } from './states/ToggleButton';


function App() {
  return (
    <div className="App">
      <p>samples</p>
      <Ref />
      <Clock />
      <ToggleButton />
    </div>
  );
}

export default App;
