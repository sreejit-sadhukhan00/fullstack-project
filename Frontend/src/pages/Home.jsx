import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-between bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      
      <h1 className="text-5xl font-bold ml-4 pt-5 text-black">TaxiGEo</h1>

      <div className="bg-white p-6 rounded-md shadow-lg">
        <h2 className="text-3xl font-semibold select-none">Get Started With TaxiGeo</h2>
        <Link to="/login" className="flex items-center text-xl justify-center w-full bg-black text-white py-3 rounded-md mt-4 hover:bg-gray-900 hover:font-bold transition duration-200">
          Continue
        </Link>
      </div>

    </div>
  );
}

export default Home;
