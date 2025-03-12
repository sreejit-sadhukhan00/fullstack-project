import React from 'react'
import { Link } from 'react-router-dom';

function Captainhome() {
  return (
     <div>
            <div className='fixed   h-12  text-3xl mt-3 ml-3 rounded-full  flex items-center justify-between w-full p-4'>
              <img src="https://png.pngtree.com/png-vector/20241009/ourmid/pngtree-black-and-yellow-motorcycle-icon-png-image_14003057.png" alt="" width={68} />
              <Link to='/home'>
                <i className='ri-logout-box-line font-bold mr-8'></i>
              </Link>
            </div>
            <div className='h-screen flex flex-col lg:flex-row lg:justify-end'>
          {/* Left Side: Image */}
          <div className='h-[50%] lg:h-full w-full lg:w-[70%]'>
            <img
              className='h-full w-full object-cover'
              src='https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg'
              alt='Ride start banner'
            />
          </div>
    
          {/* Right Side: Content */}
          <div className='h-[50%] lg:h-full w-full lg:w-[30%] p-6 flex flex-col justify-center bg-white'>
           
        <div className='flex items-center justify-between gap-8'>
          <div className='flex items-center justify-start'>
            <img src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png" alt="" className='h-16 rounded-full object-cover'/>
            <h4 className='text-3xl font-bold'>Harsh Patel</h4>
          </div>
              <div>
            <h4 className='text-xl font-medium'>₹590</h4>
            <p className='text-lg text-gray-500 '>Earned</p>
          </div>
        </div>
           
        <div className='flex justify-evenly mt-6 items-start'>
          <div className='text-center '>
          <i className="text-2xl font-light ri-time-line"></i>
          <h5 className='text-lg font-medium text-gray-700'>10.2</h5>
          <p className='text-sm text-gray-500'>Hours Online</p>
          </div>
          <div className='text-center '>
          <i className="text-2xl font-light ri-speed-up-fill"></i>
          <h5 className='text-lg font-medium text-gray-700'>10.2</h5>
          <p className='text-sm text-gray-500'>Hours Online</p>
          </div>
          <div className='text-center '>
          <i className="text-2xl font-light ri-booklet-line"></i>
          <h5 className='text-lg font-medium text-gray-700'>10.2</h5>
          <p className='text-sm text-gray-500'>Hours Online</p>
          </div>
        </div>
            
          </div>
        </div>
        </div>
  )
}

export default Captainhome;