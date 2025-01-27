import React,{useEffect, useState} from 'react'
import App2 from './App2';
// functional based components
function App() {

  const [first, setFirst] = useState(1);
  const [second, setSecond] = useState(100);

  const getData = () => {
    console.log("data received")
  }

  useEffect(() => {
    return getData
  },[])


  return (
    <>
    <div>
      <h1>Functional Component</h1>
      <h1>First: {first}</h1>
      <button onClick={() => setFirst((curr) => curr + 1)}>Add</button>
      <h1>Second: {second}</h1>
      <button onClick={() => setSecond((curr) => curr + 1)}>Add</button>
    </div>


    <App2></App2>
    </>
  )
}

export default App