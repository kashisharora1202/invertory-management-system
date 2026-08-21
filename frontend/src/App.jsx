import React from 'react'
import {Route,Routes} from "react-router-dom"
import Login from "./pages/login"
import Account_opening from './pages/account_opening'
import Dashboard from './pages/dashboard'

const App = () => {
  return (
    <div>
     
      <Routes>
              <Route path='/' element={<Dashboard />}/>

              
              <Route path="/login" element={<Login />}/>
              <Route path="/registration" element={<Account_opening />} />
      </Routes>
      
    </div>
  )
}

export default App
