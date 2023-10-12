import { useState } from "react";

export function RandomNumbers({pregeneratedCount}) {
  const [numbers, setNumbers] = useState(
    [...Array(pregeneratedCount)].map(() => Math.random())
  );

  function handleAddNumber() {
    setNumbers([...numbers, Math.random()]);
  }

  return <>
    <ul>
      {numbers.map(item => <li key={item}>{item}</li>)}
    </ul>
    <button onClick={handleAddNumber}>Generate number</button>
  </>
}