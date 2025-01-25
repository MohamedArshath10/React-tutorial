import Context from './Context'
import './App.css'
import { createContext, useState } from 'react';

export const UserValue = createContext()

function App() {

  const [user, setUser] = useState("Arshath");
  const [mail, setMail] = useState("Arshath@mail");
  
  return (
  <UserValue.Provider value={mail}>
    <h1>App</h1>
    <h2>{user}</h2>
    <Context></Context>
  </UserValue.Provider>  
  )
}

export default App
//  useContext is used instead of prop drilling to directly pass the from one component to anothercomponenet