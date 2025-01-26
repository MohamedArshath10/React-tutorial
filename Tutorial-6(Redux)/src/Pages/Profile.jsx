import React from 'react'
import { useParams } from 'react-router-dom'

function Profile() {
    const {username} = useParams()
  return (
    <h1>Profile: {username}</h1>
  )
}

export default Profile