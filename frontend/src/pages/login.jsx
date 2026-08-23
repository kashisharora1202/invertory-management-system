import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [input, setinput] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate()

  async function userLogin(e) {
    try {
      setloading(true);
      e.preventDefault();

      const user = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/login`, {
        username: input,
        email: input,
        password: password,
      },
    {
      withCredentials:true
    });

      
      navigate("/dashboard")

    } catch (error) {
      alert(error.response.data.message);
    } 
    finally {
      setloading(false);
      setinput("")
      setpassword("")
      
    }
  }

  return (
    <div className="min-h-screen  bg-slate-400 flex items-center justify-center p-4 sm:p-6">

      <div className="w-full max-w-5xl min-height:580px overflow-hidden rounded-3xl bg-white shadow-2xl flex flex-col md:flex-row">

        {/* LEFT SIDE */}
        <div className="relative overflow-hidden bg-blue-600 p-7 sm:p-10 md:w-1/2 md:p-12 flex flex-col justify-between">

          {/* Decorative circles */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500 opacity-50"></div>
          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-blue-700 opacity-60"></div>

          <div className="relative z-10">

            {/* Logo */}
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl shadow-lg">
              📦
            </div>

            <h1 className="mt-8 text-3xl sm:text-4xl font-bold leading-tight text-white">
              Inventory
              <br />
              Management
              <br />
              System
            </h1>

            <p className="mt-5 max-w-sm text-sm sm:text-base leading-6 text-blue-100">
              Manage your products, stock and inventory efficiently from one
              simple dashboard.
            </p>
          </div>

          {/* Inventory Stats */}
          <div className="relative z-10 mt-8 grid grid-cols-2 gap-3 sm:gap-4">

            <div className="rounded-2xl bg-white/15 p-4 backdrop-blur-sm">
              <p className="text-2xl font-bold text-white">📦</p>
              <p className="mt-2 text-xs text-blue-100">
                Product Management
              </p>
            </div>

            <div className="rounded-2xl bg-white/15 p-4 backdrop-blur-sm">
              <p className="text-2xl font-bold text-white">📊</p>
              <p className="mt-2 text-xs text-blue-100">
                Stock Tracking
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-1 items-center justify-center bg-slate-200 p-6 sm:p-10 md:p-12">

          <div className="w-full max-w-sm">

            <div className="mb-8">
              <p className="text-sm font-semibold text-blue-600">
                WELCOME BACK
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                Sign in
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Login to access your inventory dashboard.
              </p>
            </div>

            <form onSubmit={userLogin} className="space-y-5">

              {/* Username */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Username or Email
                </label>

                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    👤
                  </span>

                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setinput(e.target.value)}
                    placeholder="Enter username or email"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Password
                </label>

                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    🔒
                  </span>

                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>

              {/* Login */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-blue-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Logging in..." : "Sign In"}
              </button>

            </form>

            <div className="mt-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-slate-200"></div>

              <span className="text-xs text-slate-400">
                INVENTORY SYSTEM
              </span>

              <div className="h-px flex-1 bg-slate-200"></div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;