import {useEffect, useState} from 'react';

export function MousePosition() {
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });
  const [lastClickCoordinates, setLastClickCoordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const update = event => setMouseCoordinates({
      x: event.clientX,
      y: event.clientY,
    })
    window.addEventListener('mousemove', update);
  }, []);

  useEffect(() => {
    const update = event => setLastClickCoordinates({
      x: event.clientX,
      y: event.clientY,
    })
    window.addEventListener('click', update);
  }, []);

  return <>
    <p>Mouse coordinates: x={mouseCoordinates.x} y={mouseCoordinates.y}</p>
    <p>Last click: x={lastClickCoordinates.x} y={lastClickCoordinates.y}</p>
  </>
}
