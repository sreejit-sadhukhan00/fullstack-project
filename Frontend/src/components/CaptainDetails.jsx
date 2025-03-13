import React from 'react'
import CaptainPopUp from './CaptainPopUp'

function CaptainDetails() {
  return (
    <div className=''>
           
            {/* Driver's profile picture and earnings section */}
            <div className='flex items-start justify-between gap-8 '>
              <div className='flex items-center justify-start gap-4'>
                <img src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png" alt="" className='h-16 rounded-full object-cover'/>
                <h4 className='text-3xl font-bold'>Harsh Patel</h4>
              </div>
              <div>
                <h4 className='text-xl font-medium'>₹590</h4>
                <p className='text-lg text-gray-500 '>Earned</p>
              </div>
            </div>
           
            {/* Driver's performance stats (hours online, speed, trips) */}
            <div className='flex justify-evenly mt-12 items-start bg-[#FEC925] p-3 rounded-3xl font-extrabold'>
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
  )
}

export default CaptainDetails