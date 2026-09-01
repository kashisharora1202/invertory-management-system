import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import { useNavigate} from "react-router-dom";



const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [logout, setlogout] = useState(false);

  const navigate = useNavigate()

  async function logout_fnc() {
    try {
     const uu =  await axios.get(`${import.meta.env.VITE_BACKEND_URL}/user/logout`,{
        withCredentials:true
      })

      alert(uu.data.message)
      navigate("/")
    

    } catch (error) {
      alert(error.response.data.message)
    }
  }

  return (
    <>
    
      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed left-4 top-4  z-[100] flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl text-white shadow-md md:hidden"
      >
        ☰
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-[110] h-screen w-64 bg-white p-4
          shadow-xl transition-transform duration-300
          md:static md:z-auto md:flex md:h-[calc(100vh-4rem)]
          md:translate-x-0 md:shadow-none md:border-r md:border-slate-200
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >

        {/* Mobile Header */}
        <div className="mb-8 flex items-center justify-between md:hidden">

          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
              📦
            </div>

            <span className="font-bold text-slate-900">
              Inventory
            </span>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="text-xl text-slate-500"
          >
            ✕
          </button>

        </div>

        {/* Menu */}
        <div className="flex-1 ">

          <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Menu
          </p>

          <div className="space-y-1">

            
            <Link
              to="overview"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-xl  px-4 py-3 text-sm font-medium text-slate-600  hover:bg-blue-100"
            >
              📊
              Overview
            </Link>
            <Link
              to="products"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600  hover:bg-blue-100"
            >
              🏷️
              Products
            </Link>

            <Link
              to="yourproduct"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600  hover:bg-blue-100"
            >
              📦
              Your Products
            </Link>


            <Link
              to="order"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-blue-100"
            >
              📋
              Orders
            </Link>

            <Link
              to="settings"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-blue-100"
            >
              ⚙️
              Settings
            </Link>

        {/* Logout */}
        <div className="border-t border-slate-100 pt-4">

          <Link 
            onClick={() => {
              setlogout(true)
              
              
            }}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-500 hover:bg-red-100"
          >
            🚪
            Logout
          </Link>

          {logout&&(
            <div className="border-t border-slate-100  flex items-center gap-3">
              <button onClick={()=>{
                logout_fnc(),
                setOpen(false)
              }}
              className=" rounded-xl bg-red-100 px-5 py-2 text-sm font-semibold text-slate-700">
                Conform
                </button>

              <button onClick={()=>{
                setlogout(false),
                setOpen(false)
              }}
              className="rounded-xl bg-slate-200 px-5 py-2 text-sm font-semibold text-slate-700">
                Cencel
                </button>
            </div>
          )}

        </div>
          </div>
        </div>


      </aside>
    </>
  );
};

export default Sidebar;