import React, { useState } from 'react'

function CustomerAdd() {

    const [input, setInput] = useState("")
    const [customers, setCustomers] = useState([])

    const addCustomer = () => {
        if (input){
            setCustomers((previousState) => [...previousState, input])
            console.log(customers);
        }
    }
    // console.log(input);

  return (
    <div>
        <h3>Add new customer</h3>
        <input type="text" onChange={(event) => setInput(event.target.value)} />
        <button onClick={addCustomer}>Add</button>
    </div>
  )
}

export default CustomerAdd