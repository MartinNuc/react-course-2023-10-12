import { useJoke } from "./use-joke";

export function Joke() {
  const {joke, isLoading, loadNext} = useJoke();

  return <>
    <button onClick={loadNext}>Next joke</button>
    <p>{isLoading ? 'Loading...' : joke}</p>
  </>
}