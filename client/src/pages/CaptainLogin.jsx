import React, { useContext, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from '../context/Captaincontext';
// Import toast library
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CaptainLogin() {
  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const[password,setPassword]=useState('');
  const {captain,setcaptain}=useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler=async(e)=>{
    e.preventDefault();
    setIsLoading(true);

    const createdcaptain={
      email:email,password:password
    }
    try {
      const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/login`,createdcaptain);
      if(response.status===200){
        const data=response.data.data;
        setcaptain(data.loggedInUser);

        localStorage.setItem('captainToken',data.token);
        navigate('/captain-home');
      }
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log(error.message);
      toast.error(
        error.response?.data?.message || 'Authentication failed. Please check your credentials.',
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        }
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="p-10 flex flex-col justify-between lg:w-1/3 mx-auto my-auto lg:mt-6 h-screen font-poppins">
      <ToastContainer />
      <div>
        <div className='flex justify-center items-center'>
          <img src="https://png.pngtree.com/png-vector/20241009/ourmid/pngtree-black-and-yellow-motorcycle-icon-png-image_14003057.png" alt="" className='w-24' />
          <h1 className="text-5xl font-bold text-center text-[#FFCA20] mb-8">TaxiGo</h1> 
        </div> 

        <form 
          onSubmit={(e)=>submitHandler(e)}
          className="flex justify-center flex-col">
          <h3 className="text-xl mb-2 font-semibold">Enter Your Email?</h3>
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

          <button 
            type="submit" 
            disabled={isLoading}
            className="mt-6 py-2 px-4 bg-black text-white rounded-md w-full font-semibold cursor-pointer mb-3 hover:bg-gray-800 transition relative"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="h-5 w-5 border-2 border-t-transparent border-white rounded-full animate-spin mr-2"></div>
                Logging in...
              </div>
            ) : 'Login'}
          </button>
        </form>

        <p className="text-center text-md font-medium">
          Want's to be a new rider?{" "}
          <Link to="/captain-signup" className="text-blue-500 text-md hover:underline">
            Register as a captain
          </Link>
        </p>
      </div>

      <Link to='/login' className=" flex items-center justify-center mt-6 py-2 px-4 bg-green-600 text-white rounded-md w-full font-semibold cursor-pointer hover:bg-green-700 transition">
        Sign in as User
      </Link>
    </div>
  );
}

export default CaptainLogin;