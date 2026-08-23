import React from 'react'
import {Route,Routes} from "react-router-dom"
import Login from "./pages/login"
import Account_opening from './pages/account_opening'
import Dashboard from './pages/dashboard'
import Overview from './pages/sidebar_pages/overview'
import Product from './pages/sidebar_pages/product'
import Catagories from './pages/sidebar_pages/catagories'
import Order from './pages/sidebar_pages/order'
import Settings from './pages/sidebar_pages/settings'
import Logout from './pages/sidebar_pages/logout'

const App = () => {
  return (
    <div>
     
      <Routes>
              <Route path="/" element={<Login />}/>
              <Route path="/registration" element={<Account_opening />} />
              <Route path='/dashboard' element={<Dashboard />}>
                <Route path='' element={<Overview />}/>
                <Route path='overview' element={<Overview />}/>
                <Route path='product' element={<Product />}/>
                <Route path='catagories' element={<Catagories />}/>
                <Route path='order' element={<Order />}/>
                <Route path='settings' element={<Settings />}/>
                <Route path='logout' element={<Logout />}/>
                
              </Route>
      </Routes>
      
    </div>
  )
}

export default App
