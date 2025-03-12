import React from 'react';
import { Link } from 'react-router-dom';

function RideStart() {
  return (
    <div>
        <div className='fixed h-12 w-12 text-3xl mt-3 ml-3 rounded-full bg-amber-100 flex items-center justify-center'>
          <Link to='/home'>
            <i className='ri-home-line font-bold'></i>
          </Link>
        </div>
        <div className='h-screen flex flex-col lg:flex-row lg:justify-end'>
      {/* Left Side: Image */}
      <div className='h-[40%] lg:h-full w-full lg:w-[70%]'>
        <img
          className='h-full w-full object-cover'
          src='https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg'
          alt='Ride start banner'
        />
      </div>

      {/* Right Side: Content */}
      <div className='h-[60%] lg:h-full w-full lg:w-[30%] p-6 flex flex-col justify-center bg-white'>
       

        {/* Driver Info */}
        <div className='details w-full flex flex-col gap-8 mt-4 lg:h-1/2'>
          <div className='flex justify-between items-center w-full'>
            <div>
              <img src='download.png' alt='Driver' width={80} className='rounded-full' />
            </div>
            <div className='text-right'>
              <h1 className='text-xl font-semibold'>Driver name</h1>
              <h4 className='text-lg font-bold ml-6'>Car number</h4>
              <p className='text-base ml-6 text-gray-500'>Car name</p>
            </div>
          </div>

          {/* User destination location */}
          <div className='flex gap-4 items-center p-2 border-b-2 border-gray-300'>
            <i className='ri-map-pin-line text-xl font-bold'></i>
            <div>
              <h3 className='text-lg font-medium text-zinc-700'>567-43/A</h3>
              <p className='text-base text-zinc-600 -mt-1'>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

          {/* Payment section */}
          <div className='flex gap-4 items-center p-2 lg:border-b-2 lg:border-gray-300'>
            <i className='ri-cash-line text-[#0ca547] text-2xl font-bold'></i>
            <div>
              <h3 className='text-lg font-medium text-zinc-700'>₹198.20</h3>
              <p className='text-base text-zinc-600 -mt-1'>Cash only</p>
            </div>
          </div>
        </div>

        <button className='w-full bg-green-500 p-1 rounded-3xl cursor-pointer text-xl text-white font-medium mt-6'>
          Payment
        </button>
      </div>
    </div>
    </div>
  );
}

export default RideStart;
