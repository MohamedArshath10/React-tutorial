import React,{useReducer, useState} from "react";


function reduceFunction(state, action){
  switch(action.type){
    case "increment":
      return {count: state.count + 1}
    case "decrement":
      return {count: state.count - 1}
  }
}

function App() {
  const [state, dispatch] = useReducer(reduceFunction, {count : 1})
  const [count, setCount] = useState(0);

  const incre = () => {
    // setCount(count + 1);
    dispatch({type: "increment"});
  }
  const decre = () => {
    // setCount(count - 1);
    dispatch({type: "decrement"});
  }

  return (
    <>
    <h1>{state.count}</h1>
    <button onClick={decre}> -</button>      
    <button onClick={incre}> +</button>      
    </>
  )
}

export default App
