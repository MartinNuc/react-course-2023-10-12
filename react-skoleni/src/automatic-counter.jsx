import {useEffect, useState} from 'react';

export const AutomaticCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setCounter(counter => counter + 1);
    }, 1000); 

    return () => {
      clearInterval(intervalRef)
    };
  }, []);

  return <div>{counter}</div>
}