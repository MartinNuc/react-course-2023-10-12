import { useContext } from 'react';
import { useJoke } from './use-joke';
import { ThemeContext } from './App';

export function Joke() {
  const { joke, isLoading, loadNext } = useJoke();

  const { theme } = useContext(ThemeContext);
  const isLightTheme = theme === 'light';

  return (
    <div
      style={{
        background: isLightTheme ? 'white' : 'black',
        color: isLightTheme ? 'black' : 'white',
      }}
    >
      <button onClick={loadNext}>Next joke</button>
      <p>{isLoading ? 'Loading...' : joke}</p>
    </div>
  );
}
