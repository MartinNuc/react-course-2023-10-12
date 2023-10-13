import './App.css';
import React, { useState } from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { Layout } from './layout';
import { Home } from './pages/home';
import {Categories } from './pages/categories'
import { Joke } from './joke';

export const ThemeContext = React.createContext();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'categories',
        element: <Categories />
      },
      {
        path: 'categories/:category',
        element: <Joke />
      },
    ]
  }
]);

function App() {
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

      <RouterProvider router={router} />
      
    </ThemeContext.Provider>
  );
}

export default App;
