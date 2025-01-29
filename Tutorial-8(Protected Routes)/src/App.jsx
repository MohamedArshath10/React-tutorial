import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/Login'
import Setting from './pages/Setting'
import Navbar from './components/Navbar'
import { Provider } from 'react-redux'
import Store from './app/Store'
import PrivateRoute from './components/privateRoute'


const App = () => {
  return (
    <Provider store={Store}>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute></PrivateRoute>}>
          <Route path="/setting" element={<Setting />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App