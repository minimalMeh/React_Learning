import React from 'react';
import './App.css';
import { Ref } from './refs/refs';
import { Clock } from './states/Clock';
import { ToggleButton } from './states/ToggleButton';
import { LoginControl } from './conditional_rendering/LoginControl';
import { NumberList } from './lists/NumberList';
import { NameForm } from './forms/NameForm';
import { EssayForm } from './forms/EssayForm';
import { FlavorForm } from './forms/FlavorForm';

function App() {
  return (
    <div className="App">
      <p>samples</p>
      <Ref />
      <Clock />
      <ToggleButton />
      <LoginControl />
      <NumberList numbers={[1, 2, 3]}/>
      <NameForm />
      <EssayForm />
      <FlavorForm />
    </div>
  );
}

export default App;
