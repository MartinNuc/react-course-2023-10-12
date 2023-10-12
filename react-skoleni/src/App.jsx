import './App.css'
import {Table} from './table';

function App() {
  const pole = [1,2,3,4];

  return (
    <>
      <h1>Hello {pole}</h1>
      <Table rows={3} columns={4} />
    </>
  )
}

export default App
