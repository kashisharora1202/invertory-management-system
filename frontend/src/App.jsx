import React from 'react'
import {Route,Routes} from "react-router-dom"
import Login from "./pages/login"
import Account_opening from './pages/account_opening'
import Dashboard from './pages/dashboard'
import Overview from './pages/sidebar_pages/overview'
import Products from './pages/sidebar_pages/products'
import YourProduct from './pages/sidebar_pages/yourproduct'
import Myorder from './pages/sidebar_pages/myorder'
import Coustmororders from './pages/sidebar_pages/coustmor'
import Settings from './pages/sidebar_pages/settings'
import Add_product from './pages/sidebar_pages/add_product'
import Place_order from './pages/sidebar_pages/place_order'


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
                <Route path='myorders' element={<Myorder />}/>
                <Route path='coustmororders' element={<Coustmororders />}/>
                <Route path='products/order' element={<Place_order />}/>
                <Route path='settings' element={<Settings />}/>
                
                
              </Route>
      </Routes>
      
    </div>
  )
}

export default App
