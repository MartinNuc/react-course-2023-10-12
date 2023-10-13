import { useEffect, useState } from "react"
import axios from 'axios';

export function useJoke(category) {
  const [joke, setJoke] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadJoke();
  }, []);

  function loadJoke() {
    setIsLoading(true);
    axios.get(`https://api.chucknorris.io/jokes/random?${category ? `category=${category}` : ''}`)
      .then(response => setJoke(response.data.value))
      .then(() => setIsLoading(false));
  }

  return {
    joke,
    isLoading,
    loadNext: loadJoke
  };
}