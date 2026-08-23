import axios from 'axios';
import React from 'react'
import { useState , useEffect } from 'react'

const overview = () => {

const [allproduct, setallproduct] = useState("");
const [stock, setstock] = useState("");
const [lowstock, setlowstock] = useState("");
const [username, setusername] = useState("");
const [loading, setloading] = useState(false);

useEffect(() => {
  async function details() {
    try {
      setloading(true)
      const user = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/show/allproducts`,{
        withCredentials:true
      })

      // username
      const find_username = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/find/user`,{
        withCredentials:true
      })

      setusername(find_username.data.username)

      // allproducts
      const product_data = user.data.products
      setallproduct(product_data.length)

      // total stock
      setstock(product_data.reduce((acc,curruntValue)=>{
        return acc + curruntValue.stock         
     },0))

    //  low stock
      const low_stock = product_data.filter((product)=>{
        return product.stock <= 5
      })

     setlowstock(low_stock.length)
     
    } catch (error) {
      alert(error.response.data.message)
    }
    finally{
      setloading(false)
    }

    

  }
  details()
},[]);

  return (
  <div className="w-full min-h-full bg-slate-50 p-4 sm:p-6 lg:p-8">

    {/* Welcome */}
    <div className="mb-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
        Welcome, {username} 👋
      </h1>

      <p className="mt-1 text-sm text-slate-500">
        Here's what's happening with your inventory today.
      </p>
    </div>


    {/* Summary Cards */}
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

      {/* Total Products */}
      <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">

        <div className="flex items-center justify-between">

          <div>
            <p className="text-sm font-medium text-slate-500">
              Total Products
            </p>

            <p className="mt-2 text-3xl font-bold text-slate-800">
              {allproduct}
            </p>

            <p className="mt-2 text-xs text-slate-400">
              Products in inventory
            </p>
          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
            📦
          </div>

        </div>
      </div>


      {/* Total Stock */}
      <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">

        <div className="flex items-center justify-between">

          <div>
            <p className="text-sm font-medium text-slate-500">
              Total Stock
            </p>

            <p className="mt-2 text-3xl font-bold text-slate-800">
              {stock}
            </p>

            <p className="mt-2 text-xs text-slate-400">
              Available items
            </p>
          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-2xl">
            📊
          </div>

        </div>
      </div>


      {/* Low Stock */}
      <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md sm:col-span-2 lg:col-span-1">

        <div className="flex items-center justify-between">

          <div>
            <p className="text-sm font-medium text-slate-500">
              Low Stock Products
            </p>

            <p className="mt-2 text-3xl font-bold text-slate-800">
              {lowstock}
            </p>

            <p className="mt-2 text-xs text-amber-500">
              Needs attention
            </p>
          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-2xl">
            ⚠️
          </div>

        </div>
      </div>

    </div>


    {/* Quick Info */}
    <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
          💡
        </div>

        <div>
          <h2 className="font-semibold text-slate-800">
            Inventory Overview
          </h2>

          <p className="text-sm text-slate-500">
            Keep an eye on your stock levels to avoid running out of products.
          </p>
        </div>
      </div>

    </div>

  </div>
)
}

export default overview
