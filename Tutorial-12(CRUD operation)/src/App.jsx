import React from 'react'
import { useState } from 'react'
import './app.css'
import { v4 as uuidv4 } from 'uuid';

const App = () => {

  const [user, setUser] = useState([]);
  
  const [userInfo, setUserInfo] = useState({
    id: uuidv4(),
    name: '',
    age:'',
    email: '',
    phone: '',
  });
  
  const handleClick = (e) => {
    const {name, value} = e.target;
    setUserInfo((currInfo) => {
      return {
        ...currInfo,
        [name]: value
      }
    })
  }
  
  const addData = () => {
    setUser((currUser) => [...currUser, userInfo])
    setUserInfo({
      id: uuidv4(),
      name: '',
      age:'',
      email: '',
      phone: '',
    })
  } 
  
  const deleteData = (id) => {
    setUser((currUser) => {
      return currUser.filter((user) => {
        return user.id !== id
      })
    })
  } 
  
  
  const [buttonState, setButtonState] = useState("add");
  const startEditing = (user) => {
    setUserInfo(user)
    setButtonState("edit")
  }
  
  


  return (
    <div className='container'>
      <div>
        <input  className='form' type="text" placeholder='Enter your name' value={userInfo.name} name='name' onChange={handleClick}/>
        <br />
        <input  className='form' type="number" placeholder='Enter your age' value={userInfo.age} name='age' onChange={handleClick}/>
        <br />
        <input  className='form' type="email" placeholder='Enter your email' value={userInfo.email} name='email' onChange={handleClick} />
        <br />
        <input  className='form' type="number" placeholder='Enter your number' value={userInfo.phone} name='phone' onChange={handleClick}/>
        <br />
        {
          buttonState === "add" ? <button onClick={addData}>ADD</button> : <button onClick={addData}>UPDATE</button>
        }
      </div>
      <div className='dataTable'>
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>AGE</th>
              <th>EMAIL</th>
              <th>PHONE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user, index) => {
              return <tr key={index}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td><button className='editBtn' onClick={() => startEditing(user)}>Edit</button>
                <button className='deleteBtn' onClick={() => deleteData(user.id)}>delete</button></td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App