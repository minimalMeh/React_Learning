import React from 'react';
import './App.css';
import { Ref } from './refs/refs';
import { Clock } from './states/Clock';
import { ToggleButton } from './states/ToggleButton';
import { LoginControl } from './conditional_rendering/LoginControl';


function App() {
  return (
    <div className="App">
      <p>samples</p>
      <Ref />
      <Clock />
      <ToggleButton />
      <LoginControl />
    </div>
  );
}

export default App;
