import { useEffect, useState } from "react"
import axios from 'axios';

export function Joke() {
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    loadJoke();
  }, []);

  function loadJoke() {
    axios.get('https://api.chucknorris.io/jokes/random')
      .then(response => setJoke(response.data.value))
  }

  return <>
    <button onClick={loadJoke}>Next joke</button>
    <p>{joke}</p>
  </>
}