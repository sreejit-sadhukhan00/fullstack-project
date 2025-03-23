import React from 'react'

function WaitForDriver({image="",setwaitfordriver,ridedetails}) {
  return (
    <div>
    <h5 className='text-center cursor-pointer'
    onClick={(e)=>{
        e.stopPropagation();
        setwaitfordriver(false);
    }}
    >
    <i className="ri-arrow-down-wide-line text-3xl font-bold text-gray-400"></i>
    </h5>
    
    <h3 className='text-2xl font-semibold mb-5'>Meet Driver At Pick-up Loaction</h3>
    
    <div className='flex gap-2 justify-between items-center flex-col'>
        
        <div className='flex justify-between pr-8 pl-8 items-center w-full'>
        <div>
        <img src="download.png" alt="" width={80} className='rounded-full ' />
        </div>
        <div className='text-right '>
          <h1 className='text-xl font-semibold tracking-tighter'>{ridedetails?.captain.fullname.firstname+" "+ridedetails?.captain.fullname.lastname}</h1>
          <h4 className='text-lg font-bold ml-6'>{ridedetails?.captain.vehicle.plate}</h4>
        </div>
        </div>
    
    <div className="details w-full flex flex-col gap-8 mt-4 lg:h-1/2">
      {/* user destination location */}
           <div 
           className='flex gap-4 items-center address  p-2 border-b-2 border-gray-300'>
           <i className="ri-map-pin-line text-xl font-bold"></i>
           <div>
            {/* <h3 className='text-lg font-medium text-zinc-700'>567-43/A</h3> */}
            <p className='text-base text-zinc-600 -mt-1'>{ridedetails?.pickup}</p>
           </div>
           </div>
           {/* user current location */}
           <div 
           className='flex gap-4 items-center p-2 border-b-2 border-gray-300 currentaddress '>
           <i className="ri-map-pin-5-fill text-xl font-bold"></i>
           <div>
            {/* <h3 className='text-lg font-medium text-zinc-700'>567-43/A</h3> */}
            <p className='text-base text-zinc-600 -mt-1'>{ridedetails?.destination}</p>
           </div>
           </div>
           <div
           className='flex justify-between  items-center p-2   paynment '
           >

           <div className='flex gap-3 items-center'>
           <i className="ri-cash-line text-[#6bd192] text-2xl font-bold"></i>
           <div className='flex flex-col'>
           
            <h3 className='text-lg font-medium text-zinc-700'>₹{ridedetails?.fare}</h3>
            <p className='text-base text-zinc-600 -mt-1'>Cash only</p>
            </div>
           </div>
               
            <div className='flex flex-col'>
            <p className='text-2xl font-bold'>Your OTP</p>
            <div className='flex gap-2 justify-center'>
            {ridedetails?.otp
      ? String(ridedetails.otp)
          .split("")
          .map((item, index) => (
            <div
              key={index}
              className="w-7 h-6 flex items-center justify-center border border-gray-300 rounded-md text-xl font-semibold bg-gray-100 shadow-sm"
            >
              {item}
            </div>
          ))
      : <p className="text-gray-500">Loading OTP...</p>}
            </div>
            </div>
           </div>
    </div>



    </div>
 
    </div>
  )
}

export default WaitForDriver;