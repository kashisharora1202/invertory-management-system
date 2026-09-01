import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const account_opening = () => {

     const [username, setusername] = useState("");
     const [email, setemail] = useState("");
     const [password, setpassword] = useState("");
     const [loading, setloading] = useState(false);
     const [phoneno, setphoneno] = useState("");
     const navigate = useNavigate()

     async function account_opening(e){
        try {
            setloading(true)
            e.preventDefault()

            const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/create/user`,{
                username,
                password,
                email,
                phoneno
            },
          {
            withCredentials:true
          })

            alert(res.data.message)

            navigate("/dashboard")
            
        } catch (error) {
            alert(error.response.data.message || "something went wrong")
        }
        finally{
            setloading(false)
            setusername("")
            setemail("")
            setpassword("")
            setphoneno("")
        }
     }


  return (
  <div className="min-h-screen bg-slate-400 flex items-center justify-center px-4 py-8">

    <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">

      {/* Left Section */}
      <div className="bg-blue-600 p-7 sm:p-10 md:w-5/12 flex flex-col justify-between">

        <div>
          <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-2xl shadow-md">
            📦
          </div>

          <h1 className="mt-7 text-3xl sm:text-4xl font-bold text-white">
            Inventory
            <br />
            Management
          </h1>

          <p className="mt-4 text-sm sm:text-base text-blue-100 leading-6">
            Create your account and start managing your inventory
            efficiently.
          </p>
        </div>

        <div className="mt-8 rounded-2xl bg-white/15 p-5">
          <p className="text-sm font-medium text-white">
            📊 Manage your products
          </p>

          <p className="mt-2 text-xs leading-5 text-blue-100">
            Keep track of products, stock and inventory from one place.
          </p>
        </div>

      </div>


      {/* Right Section */}
      <div className=" bg-slate-200 flex-1 p-6 sm:p-10 md:p-12">

        <div className="w-full max-w-md mx-auto">

          <div className="mb-7">
            <p className="text-sm font-semibold text-blue-600">
              GET STARTED
            </p>

            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">
              Create Account
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Enter your details to create your account.
            </p>
          </div>


          <form
            onSubmit={account_opening}
            className="space-y-5"
          >

            {/* Username */}
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-700">
                Username
              </label>

              <div className="relative">

                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  👤
                </span>

                <input
                  type="text"
                  onChange={(e) => {
                    setusername(e.target.value);
                  }}
                  placeholder="Enter username"
                  value={username}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />

              </div>
            </div>


            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-700">
                Email Address
              </label>

              <div className="relative">

                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  ✉️
                </span>

                <input
                  type="email"
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  placeholder="Enter email address"
                  value={email}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />

              </div>
            </div>


            {/* Password */}
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-700">
                Password
              </label>

              <div className="relative">

                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  🔒
                </span>

                <input
                  type="password"
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  placeholder="Create a password"
                  value={password}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />

              </div>
            </div>

                  {/* phone number  */}
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-700">
                Contact Number
              </label>

              <div className="relative">

                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  📱
                </span>

                <input
                  type="text"
                  onChange={(e) => {
                    setphoneno(e.target.value);
                  }}
                  placeholder="Contact Number must have 10 digits"
                  value={phoneno}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />

              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-blue-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>

          </form>


          {/* Bottom */}
          <p className="mt-7 text-center text-xs text-slate-400">
            Inventory Management System
          </p>

        </div>

      </div>

    </div>
  </div>
);
}

export default account_opening
