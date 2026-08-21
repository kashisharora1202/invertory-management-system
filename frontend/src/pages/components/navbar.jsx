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

       console.log(find_username.data.username) 

        setusername(find_username.data.username)
       
        
      } catch (error) {
        alert(error.response.data.message || "something went wrong")
        console.log(error.message)
      }
      
    }
    getuser()
    },[])
        
  return (
    <div className='h-20 w-full bg-amber-500 flex flex-row justify-between items-center' >
      <h1 className='m-2.5 p-2.5 '>Your Inventory</h1>
      <h1 className='m-2.5 p-2.5 '>👤 {username}</h1>
    
    </div>
  )
}

export default navbar
