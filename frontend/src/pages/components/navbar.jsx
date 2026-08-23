import axios from 'axios'
import React from 'react'
import { useState , useEffect } from 'react'

const navbar = () => {
  
  const [username, setusername] = useState("");

  useEffect(()=>{
    async function getuser() {
      
      try {
        
         const find_username = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/find/user`,{
          withCredentials:true
        })

        setusername(find_username.data.username)
       
        
      } catch (error) {
        alert(error.response.data.message || "something went wrong")
        console.log(error.message)
      }
      
    }
    getuser()
    },[])
        
  return (
  <div className="sticky top-0 z-50 h-16 w-full border-b border-slate-200 bg-white/95 backdrop-blur">

    <div className="mx-auto flex h-full w-full items-center justify-between px-4 sm:px-6 lg:px-8">

      {/* Logo / Brand */}
      <div className="flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl shadow-sm">
          📦
        </div>

        <div>
          <h1 className="text-base font-bold text-slate-900 sm:text-lg">
            Your Inventory
          </h1>

          <p className="hidden text-xs text-slate-400 sm:block">
            Management System
          </p>
        </div>

      </div>


      {/* Right Side */}
      <div className="flex items-center gap-2 sm:gap-4">

        {/* Notification */}
        <button
          className="relative flex h-10 w-10 items-center justify-center rounded-xl text-lg transition hover:bg-slate-300"
        >
          🔔

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
        </button>


        {/* User */}
        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-2 py-1.5 sm:px-3">

          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-sm">
            👤
          </div>

          <div className="hidden sm:block">
            <p className="max-w-[120px] truncate text-sm font-semibold text-slate-700">
              {username}
            </p>

            <p className="text-[11px] text-slate-400">
              Admin
            </p>
          </div>

          <span className="hidden text-xs text-slate-400 sm:block">
            ▼
          </span>

        </div>

      </div>

    </div>
  </div>
);
}

export default navbar
