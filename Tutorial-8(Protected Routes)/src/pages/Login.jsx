import React from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../slices/UserSlice'
import { useNavigate } from 'react-router'

const Login = () => {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const login = () => {
    dispatch(
      setUser({
        name: 'Arshath',
        gmail: 'arshath@gmail.com',
      })
    )
    navigate('/')
  }

  return (
    <div className='login-page'>
      <h1>Login</h1>
      <button onClick={login}> Login</button>
    </div>
  )
}

export default Login