import React, { useEffect, useMemo, useRef, useState } from 'react'

function Counter() {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)

  const doubleNum = useMemo(() => {
    return slowNumber(number)
  },[number])

  const colorTheme = {
    backgroundColor : dark? "black" : "white",
    color : dark? "white" : "black"
  }


  return (
    <>
     <input 
     type="number"
     value={number}
     onChange={(e) => setNumber(e.target.value)} />
     <button onClick={() => setDark((curr) => !curr)}>toggle</button>
     <div style={colorTheme}>{doubleNum}</div>
    </>
  )
}

export default Counter

function slowNumber(num){
  for(let i = 0; i < 3000; i++){
    console.log("hello")
  }
  return num * 2
}