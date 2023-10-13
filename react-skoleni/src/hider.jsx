import {useState} from 'react';

export function Hider(props) {

  const [isVisible, setIsVisible] = useState(true);

  return <>
    <button onClick={() => setIsVisible(!isVisible)}>Show / hide</button>
    {isVisible ? props.children : null}
    {/* {isVisible && <AutomaticCounter />} */}
  </>
}