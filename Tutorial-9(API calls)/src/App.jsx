import React, { useEffect } from 'react'
import axios from 'axios'

const App = () => {

  // javascript method
  // async function apiCall() {
  //   const response = await fetch('https://v2.jokeapi.dev/joke/Any')
  //   const data = await response.json()
  //   console.log(data);
  // }

  

  async function apiCall() {
    const api = 'https://v2.jokeapi.dev/joke/Any'
    const response = await axios.get(api)
    const data = (response.data.setup) || (response.data.joke)
    console.log(data)
  }

  
  useEffect(() => {
    apiCall()
  },[])

  return (
    <div>
      <h1>Joke API</h1>
      <button onClick={apiCall}>New Joke</button>
      {/* <p>{data}</p> */}
    </div>
  )
}

export default App