import React from 'react';
import { Link } from 'react-router-dom';

function Start() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-between bg-cover bg-center lg:bg-bottom bg-no-repeat" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1536995439819-b47123832cdc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
       
       
      <span className='flex justify-start gap-1items-center'><img src="/public/depositphotos_235391478-stock-illustration-compact-car-drive-icon-simple-removebg-preview.png" alt="" className='w-20'/> <h1 className="text-5xl font-bold ml-4 pt-5 text-black">TaxiGo</h1></span>

      <div className="bg-white p-6 rounded-md shadow-lg">
        <h2 className="text-3xl font-semibold select-none">Get Started With TaxiGo</h2>
        <Link to="/login" className="flex items-center text-xl justify-center w-full bg-black text-white py-3 rounded-md mt-4 hover:bg-gray-900 hover:font-bold transition duration-200">
          Continue
        </Link>
      </div>

    </div>
  );
}

export default Start;
