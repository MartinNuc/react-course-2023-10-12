import './App.css';
import { Table } from './table';
import { CounterButton } from './counter-button';
import { RandomNumbers } from './random-numbers';
import { Hider } from './hider';
import { AutomaticCounter } from './automatic-counter';
import { Dropdown } from './dropdown/dropdown';
import {Joke} from './joke';
import React, { useState } from 'react';
import {ToggleThemeButton} from './toggle-theme'

export const ThemeContext = React.createContext();

function App() {
  const pole = [1, 2, 3, 4];

  const [theme, setTheme] = useState('dark');

  function toggleTheme() {
    if(theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <ThemeContext.Provider value={{
      theme,
      toggleTheme
    }}>
      <h1>Hello {pole}</h1>

      <Joke />

      <Dropdown title="show dropdown">
        Tohle je dropdown content:
        <ul>
          <li>google.com</li>
          <li>facebook.com</li>
          <li>seznam.cz</li>
        </ul>
      </Dropdown>

      <Hider>
        <AutomaticCounter />
      </Hider>
      <RandomNumbers pregeneratedCount={5} />
      <CounterButton />
      <ToggleThemeButton />
      <Table rows={3} columns={4} />
    </ThemeContext.Provider>
  );
}

export default App;
