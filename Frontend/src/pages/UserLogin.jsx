import React, { useState } from "react";
import { Link } from "react-router-dom";
 import "@fontsource/poppins"; // Import Poppins font
 

function UserLogin() {

const [email, setEmail] = useState('')
const[password,setPassword]=useState('')
  const [user,setUser]=useState({})

const submitHandler=(e)=>{
  e.preventDefault();
 
  setUser({
    email:email,password:password
  })
  console.log(user);
  
  setEmail('');
  setPassword('');

 
  
  
}

  return (
    <div className="p-10 flex flex-col justify-between lg:w-1/3 mx-auto my-auto lg:mt-6 h-screen font-poppins">
      <div>
      <div className='flex justify-center items-center'>
          <img src="https://st4.depositphotos.com/1000507/23539/v/450/depositphotos_235391478-stock-illustration-compact-car-drive-icon-simple.jpg" alt="" className='w-24' />
          <h1 className="text-5xl font-bold text-center text-[#FFCA20] mb-8">TaxiGo</h1> 
            </div>

        <form 
        onSubmit={(e)=>submitHandler(e)}
        className="flex justify-center flex-col">
          <h3 className="text-xl mb-2 font-semibold">What's Your Email?</h3>
          <input
            required
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="email@example.com"
            className="bg-gray-100 rounded-md px-4 py-2 w-full text-lg placeholder-gray-500 focus:ring focus:ring-gray-600 outline-none"
          />

          <h3 className="text-xl mt-4 mb-2 font-semibold">Enter Your Password</h3>
          <input
            type="password"
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="password"
            className="bg-gray-100 rounded-md px-4 py-2 w-full text-lg placeholder-gray-500 focus:ring focus:ring-gray-600 outline-none"
          />

          <button type="submit" className="mt-6 py-2 px-4 bg-black text-white rounded-md w-full font-semibold cursor-pointer mb-3 hover:bg-gray-800 transition">
            Login
          </button>
        </form>

        <p className="text-center text-md font-medium">
          New here?{" "}
          <Link to="/signup" className="text-blue-500 text-md hover:underline">
            Create new account
          </Link>
        </p>
      </div>

      <Link to='/captain-login' className=" flex items-center justify-center mt-6 py-2 px-4 bg-green-600 text-white rounded-md w-full font-semibold cursor-pointer hover:bg-green-700 transition">
        Sign in as Captain
      </Link>
    </div>
  );
}

export default UserLogin;
