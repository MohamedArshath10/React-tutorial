import React, { useContext } from 'react'
import {UserValue} from './App'

function User() {

  const newUser = useContext(UserValue)
  return (
    <div>
      <h1>User</h1>
      <h2>{newUser}</h2>
    </div>
  )
}

export default User