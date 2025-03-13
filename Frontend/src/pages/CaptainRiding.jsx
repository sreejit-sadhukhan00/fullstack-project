import React from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'

function CaptainRiding() {
  return (
    <div>
        
        <div className='overflow-hidden h-screen'>
        {/* Top Navbar with logo and logout icon */}
        <div className='fixed h-12 text-3xl mt-3 ml-3 rounded-full flex items-center justify-between w-full p-4'>
          <img src="https://png.pngtree.com/png-vector/20241009/ourmid/pngtree-black-and-yellow-motorcycle-icon-png-image_14003057.png" alt="" width={68} />
          <Link to='/captain-home'>
            <i className='ri-logout-box-line font-bold mr-8'></i>
          </Link>
        </div>

        {/* Main layout container */}
        <div className='h-screen flex flex-col lg:flex-row lg:justify-end '>
          {/* Left Side: Large banner image */}
          <div className='h-4/5 lg:h-full w-full lg:w-[70%]'>
            <img
              className='h-full w-full object-cover'
              src='https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg'
              alt='Ride start banner'
            />
          </div>
     
          <div className='bg-yellow-400 h-1/5 lg:h-[30%] w-full lg:w-[30%] p-6 relative bottom-0 lg:top-60  rounded-lg'>
          <h5 className='text-center cursor-pointer'>
             <i className="ri-arrow-up-wide-line text-2xl font-bold text-black"></i>
          </h5>
          <div className=' flex  justify-between items-center  '>
          
                <h4 className='text-xl font-semibold'>4 Km Away</h4>
                
                <button className='w-[40%] h-fit bg-green-500 p-2 px-4 
                 rounded-3xl cursor-pointer text-xl text-white 
                 font-medium text-center 
                 lg:w-[50%] xl:w-[50%]'>Complete Ride</button>
          </div>

          </div>
          
        </div>
    </div>
    </div>
  )
}

export default CaptainRiding