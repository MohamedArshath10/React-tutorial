import React from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import {removeUser} from '../slices/UserSlice'

const Navbar = () => {
    const user = useSelector((state) => state.userInfo.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logOut = () => {
        dispatch(removeUser())
        navigate('/login')
    }
  return (
    <nav>
        <h1>Protected Router</h1>
        <ul>
            {!user && (
            <Link to={'/login'} >
                <li>Login</li>
            </Link>
            )}
            {user && (
            <>
                <Link to={'/setting'}>
                    <li>Setting</li>
                </Link>
                <li onClick={logOut}>LogOut</li>
            </>
            )}
        </ul>
    </nav>
  )
}

export default Navbar