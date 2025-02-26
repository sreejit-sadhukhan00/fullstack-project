import React, { useState } from "react";
import { Link } from "react-router-dom";
 import "@fontsource/poppins"; // Import Poppins font
 
function CaptainSignup() {
const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [email, setEmail] = useState('')
  const[password,setPassword]=useState('')
    const [captain,setcaptain]=useState({})
  
  const submitHandler=(e)=>{
    e.preventDefault();
   
    setcaptain({
      fullName:{
        firstname:firstname,
        lastname:lastname
      },
      email:email,
      password:password
    })
    setfirstname('');
    setlastname('');
    setEmail('');
    setPassword('');
}



  return (
    <div className="p-10 flex flex-col justify-between lg:w-1/3 mx-auto my-auto lg:mt-6 h-screen font-poppins">
        <div>
        <div className='flex justify-center items-center'>
            <img src="https://png.pngtree.com/png-vector/20241009/ourmid/pngtree-black-and-yellow-motorcycle-icon-png-image_14003057.png" alt="" className='w-24' />
            <h1 className="text-5xl font-bold text-center text-[#FFCA20] mb-8">TaxiGo</h1> 
              </div>
  
          <form 
          onSubmit={(e)=>submitHandler(e)}
          className="flex justify-center flex-col ">
            <h3 className="text-xl mb-2 font-semibold mt-4">What's our captain's name ?</h3>

            <div className="flex gap-4  ">
        
            <input
              required
              onChange={(e)=>setfirstname(e.target.value)}
              value={firstname}
              type="text"
              placeholder="Firstname"
              className="bg-gray-100 rounded-md px-3 py-2 w-full text-lg placeholder-gray-500 focus:ring focus:ring-gray-600 outline-none placeholder:text-lg"
            />
             
              
            <input
              required
              onChange={(e)=>setlastname(e.target.value)}
              value={lastname}
              type="text"
              placeholder="Lastname"
              className="bg-gray-100 rounded-md px-3 py-2 w-full text-lg placeholder-gray-500 focus:ring focus:ring-gray-600 outline-none placeholder:text-lg"
            />
           </div>

            
  
            <h3 className="text-xl mt-4 mb-2 font-semibold">What's our captain's Email</h3>
            <input
              type="email"
              required
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Email"
              className="bg-gray-100 rounded-md px-4 py-2 w-full text-lg placeholder-gray-500 focus:ring focus:ring-gray-600 outline-none"
            />
            <h3 className="text-xl mt-4 mb-2  font-semibold">Enter Your Password</h3>
            <input
              type="password"
              required
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="Password"
              className="bg-gray-100 rounded-md px-4 py-2 w-full text-lg placeholder-gray-500 focus:ring focus:ring-gray-600 outline-none"
            />
  
            <button type="submit" className="mt-6 py-2 px-4 bg-black text-white rounded-md w-full font-semibold cursor-pointer mb-3 hover:bg-gray-800 transition">
              Sign In
            </button>
          </form>
  
          <p className="text-center text-md font-medium">
            Already have an account?{" "}
            <Link to="/captain-login" className="text-blue-500 text-md hover:underline">
              Login
            </Link>
          </p>
        </div>
  
        <p className="text-gray-400 text-xs leading-tight ">By proceeding, you consent to receiving calls, WhatsApp or SMS/RCS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
      </div>
  )
}

export default CaptainSignup