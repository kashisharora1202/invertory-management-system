import React from 'react'
import {Route,Routes} from "react-router-dom"
import Login from "./pages/login"
import Account_opening from './pages/account_opening'
import Dashboard from './pages/dashboard'
import Overview from './pages/sidebar_pages/overview'
import Products from './pages/sidebar_pages/products'
import YourProduct from './pages/sidebar_pages/yourproduct'
import Order from './pages/sidebar_pages/order'
import Settings from './pages/sidebar_pages/settings'
import Add_product from './pages/sidebar_pages/add_product'


const App = () => {
  return (
    <div>
     
      <Routes>
              <Route path="/" element={<Login />}/>
              <Route path="/registration" element={<Account_opening />} />
              <Route path='/dashboard' element={<Dashboard />}>
                <Route path='' element={<Overview />}/>
                <Route path='overview' element={<Overview />}/>
                <Route path='products' element={<Products />}/>
                <Route path="yourproduct/add" element={<Add_product />}/>    
                <Route path='yourproduct' element={<YourProduct />}/>
                <Route path='order' element={<Order />}/>
                <Route path='settings' element={<Settings />}/>
                
                
              </Route>
      </Routes>
      
    </div>
  )
}

export default App
