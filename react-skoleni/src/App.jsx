import './App.css'
import {Table} from './table';
import {CounterButton} from './counter-button'
import {RandomNumbers} from './random-numbers'

function App() {
  const pole = [1,2,3,4];

  return (
    <>
      <h1>Hello {pole}</h1>
      <RandomNumbers pregeneratedCount={5} />
      <CounterButton />
      <Table rows={3} columns={4} />
    </>
  )
}

export default App
