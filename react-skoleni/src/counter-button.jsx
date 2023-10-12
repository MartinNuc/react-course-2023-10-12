import { useState } from "react"

export function CounterButton() {
  const [count, setCount] = useState(0);

  function handleIncrementClick() {
    setCount(count + 1);
  }

  return <button onClick={handleIncrementClick}>
    {count}
  </button>
}