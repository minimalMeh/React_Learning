import React from 'react';
import './App.css';
import { Ref } from './refs/refs';
import { Clock } from './states/states';

function App() {
  return (
    <div className="App">
      <p>samples</p>
      <Ref />
      <Clock />
    </div>
  );
}

export default App;
