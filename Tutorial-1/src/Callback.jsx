import React, { useState, useCallback } from 'react'
import List from './List';

function Callback() {

    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);


    const getItem = useCallback(() => {
      return[number + 1, number + 2, number + 3]
    },[number])


    const theme = {
        backgroundColor : dark? "black" : "white",
        color : dark? "white" : "black"
    }



  return (
    <div style={theme}>
        <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => setDark((curr) => !curr)}>Change</button>
        <List getItem = {getItem} />
    </div>
  )
}

export default Callback

// call back hook