import { useState,useEffect } from "react";
import Loading from "../components/loading_circle"
import axios from "axios"
import {useNavigate} from "react-router-dom"

const settings = () => {
 
  const [username, setusername] = useState("");
  const [edit, setedit] = useState(null);
  const [email, setemail] = useState("");
  const [phoneno, setphoneno] = useState("");
  const [loading, setloading] = useState(false);
  const [password, setpassword] = useState("");
  const [conform, setconform] = useState(false);

  const navigate = useNavigate()
 
 useEffect(()=>{

  async function userdata() {
    try {
      setloading(true)

      const infomation = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/find/user`,{
        withCredentials:true
      })

      setusername(infomation.data.user.username)
      setemail(infomation.data.user.email)
      setphoneno(infomation.data.user.phoneno)
      setpassword("•••••••••••")
      

    } catch (error) {
      alert(error.response.data.message || "Something Wents Wrong")
    }
    finally{
     setloading(false)
    }




  }
 userdata()
 },[])
 
 async function update() {
    try {

      const update_user = await axios.patch(`${import.meta.env.VITE_BACKEND_URL }/user/update`,{
        username,
        email,
        phoneno
      },{
        withCredentials:true
      }) 

      alert(update_user.data.message)

    } catch (error) {
      alert(error.response.data.message)
    }
    finally{
      setloading(false)
    }
 }

 async function update_password() {
    try {

      const update_user = await axios.patch(`${import.meta.env.VITE_BACKEND_URL }/user/update`,{
        password
      },{
        withCredentials:true
      }) 

      alert(update_user.data.message)

    } catch (error) {
      alert(error.response.data.message)
    }
    finally{
      setloading(false)
    }
 }
 
  async function delete_account() {
    try {
      setloading(true)
      const user = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/user/delete`,{
        withCredentials:true
      })

      alert(user.data.message)

      navigate("/")

    } catch (error) {
      alert(error.response.data.message)
    }
    finally{
      setloading(false)
    }
  }
 

 
 
 
 
  return (loading?(<Loading />):(

    <div className=" w-full bg-slate-50 p-4 sm:p-6 lg:p-8">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 sm:text-3xl">
          Settings
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Manage your account information and preferences
        </p>
      </div>

      {/* Settings Card */}
      <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

        {/* Account Header */}
        <div className="border-b border-slate-200 bg-slate-50 px-5 py-4 sm:px-6">
          <h2 className="text-lg font-bold text-slate-800">
            Account Settings
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Update your personal account details
          </p>
        </div>

        {/* Username */}


        <div className="grid grid-cols-1 gap-3 border-b border-slate-100 px-5 py-5 sm:grid-cols-3 sm:items-center sm:px-6">
          <div>
            <p className="text-sm font-semibold text-slate-700">
              Username
            </p>
            <p className="text-xs text-slate-400">
              Your account username
            </p>
          </div>

          {/* input box  */}

          {edit == "username" ? (
           
            
            <input type="text" placeholder="enter updated username"
            onChange={(e)=>{
              setusername(e.target.value)
            }}
            value={username}
            className="h-10 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"/>
          ) : (
          <p className="text-sm font-medium text-slate-600 sm:col-span-1">
            {username} 
          </p>

          )}

          {/* button save or update */}

          {edit != "username" ? (
          
          <div className="sm:text-right">
            <button onClick={()=>{
              setedit("username")
            }}
            className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-95">
              Update
            </button>
          </div>
        ):(
          <div className="sm:text-right">
            <button onClick={()=>{
              setedit(null),
              update()
            }}
            className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-95">
              Save
            </button>
          </div>
        )}

        </div>
             

        {/* Password */}
        <div className="grid grid-cols-1 gap-3 border-b border-slate-100 px-5 py-5 sm:grid-cols-3 sm:items-center sm:px-6">
          <div>
            <p className="text-sm font-semibold text-slate-700">
              Password
            </p>
            <p className="text-xs text-slate-400">
              Keep your account secure
            </p>
          </div>

          {/* input box  */}

          {edit == "password" ? (
           
            
            <input type="text" placeholder="enter updated password"
            onChange={(e)=>{
              setpassword(e.target.value)
            }}
            value={password}
            className="h-10 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"/>
          ) : (
          <p className="text-sm font-medium text-slate-600 sm:col-span-1">
             ••••••••••• 
          </p>

          )}

          {/* button save or update */}

          {edit != "password" ? (
          
          <div className="sm:text-right">
            <button onClick={()=>{
              setedit("password")
            }}
            className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-95">
              Update
            </button>
          </div>
        ):(
          <div className="sm:text-right">
            <button onClick={()=>{
              setedit(null),
              update_password()
            }}
            className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-95">
              Save
            </button>
          </div>
        )}
        </div>

        {/* Email */}
        <div className="grid grid-cols-1 gap-3 border-b border-slate-100 px-5 py-5 sm:grid-cols-3 sm:items-center sm:px-6">
          <div>
            <p className="text-sm font-semibold text-slate-700">
              Email
            </p>
            <p className="text-xs text-slate-400">
              Your registered email address
            </p>
          </div>
          {/* input box  */}

          {edit == "email" ? (
           
            
            <input type="email" placeholder="enter updated email"
            onChange={(e)=>{
              setemail(e.target.value)
            }}
            value={email}
            className="h-10 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"/>
          ) : (
          <p className="text-sm font-medium text-slate-600 sm:col-span-1">
             {email}
          </p>

          )}

          {/* button save or update */}

          {edit != "email" ? (
          
          <div className="sm:text-right">
            <button onClick={()=>{
              setedit("email")
            }}
            className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-95">
              Update
            </button>
          </div>
        ):(
          <div className="sm:text-right">
            <button onClick={()=>{
              setedit(null),
              update()
            }}
            className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-95">
              Save
            </button>
          </div>
        )}
           
        </div>

        {/* Phone */}
        <div className="grid grid-cols-1 gap-3 border-b border-slate-100 px-5 py-5 sm:grid-cols-3 sm:items-center sm:px-6">
          <div>
            <p className="text-sm font-semibold text-slate-700">
              Phone Number
            </p>
            <p className="text-xs text-slate-400">
              Your registered phone number
            </p>
          </div>

          {/* input box  */}

          {edit == "phoneno" ? (
           
            
            <input type="number" placeholder="enter updated phone number"
            onChange={(e)=>{
              setphoneno(e.target.value)
            }}
            value={phoneno}
            className="h-10 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"/>
          ) : (
          <p className="text-sm font-medium text-slate-600 sm:col-span-1">
             {phoneno}
          </p>

          )}

          {/* button save or update */}

          {edit != "phoneno" ? (
          
          <div className="sm:text-right">
            <button onClick={()=>{
              setedit("phoneno")
            }}
            className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-95">
              Update
            </button>
          </div>
        ):(
          <div className="sm:text-right">
            <button onClick={()=>{
              setedit(null),
              update()
            }}
            className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-95">
              Save
            </button>
          </div>
        )}
        </div>

        {/* Danger Zone */}
        <div className="bg-red-50 px-5 py-5 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-bold text-red-700">
                Remove Account
              </p>
              <p className="mt-1 text-xs text-red-500">
                Permanently remove your account and associated data.
              </p>
            </div>

            <button onClick={()=>{
              setconform(true)
            }} className="w-full rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 active:scale-95 sm:w-auto">
              Remove Account
            </button>
          </div>
          {conform&&(
  
               <div className="mt-4 flex gap-3 rounded-xl bg-red-50 p-4 justify-end">

                   <button
                        onClick={delete_account}
                          className="rounded-xl bg-red-600 px-5 py-2 text-sm font-semibold text-white"
                             >
                             Confirm
                    </button>

                     <button
                        onClick={() => setconform(false)}
                        className="rounded-xl bg-slate-200 px-5 py-2 text-sm font-semibold text-slate-700">
                         Cancel
                       </button>

                 </div>

            )}
        </div>

      </div>
    </div>
  ) 
  )};

export default settings;