import React from 'react';

import './App.css';
import Mycomponent from './components/Mycomponent'
import ToggleMode from './components/ToggleMode'
import Greet from './components/Greet'
import HookCounter from './components/HookCounter'
import HiddenText from './components/HiddenText'
import HookCounter2 from './components/HookCounter2';
import Settings from './components/Settings';
import MenuPageComponent from './components/MenuPageComponent';
import MainPageComponent from './components/MainPageComponent';
import Books from './components/Books';


function App() {
	let message='Hello World'
  return (
    <div className="App">
      <header className="App-header">
        {message}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Mycomponent/>
		<ToggleMode/>
		<HookCounter/>
		<HiddenText/>
	 <HookCounter2/>
	 <Settings/>
  <Books/>
	 <MenuPageComponent/>

      </header>
	
    </div>
  );
}

export default App;
