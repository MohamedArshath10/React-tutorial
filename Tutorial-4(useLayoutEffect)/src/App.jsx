import React,{useState, useEffect} from 'react'

function App() {
  const [count, setCount] = useState(0);

   useEffect(() => {
    console.log("count", count)
  }, [count])
  
 

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> setCount((curr) => curr+1 )}>Add</button>
    </div>
  )
}

export default App
