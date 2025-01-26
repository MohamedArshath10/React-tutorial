import React from 'react'
import {useSelector} from 'react-redux'

function Users() {

  const users = useSelector((state) => state.userInfo.users)

  console.log(users);
  return (
    <div>
      {users?.map((user, index) => {
        return(
          <div key={index} className='div'>
            <h1>{user.name}</h1>
            <h3>{user.age}</h3>
            <h3>{user.email}</h3>
            <h3>{user.contact}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default Users