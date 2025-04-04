import React from 'react'

function VehiclePanel({setvehiclepanel,setconfirmedvehiclepanel,setimage,fare,setvehicleType}) {
  
  return (
    <div><h5 className='text-center cursor-pointer'
    onClick={(e)=>{
        e.stopPropagation();
        setvehiclepanel(false);
    }}
    >
    <i className="ri-arrow-down-wide-line text-3xl font-bold text-gray-400"></i>
    </h5>
    <h3 className='text-2xl font-semibold mb-5'>Choose Your Ride</h3>

    {/* Each vehicle box */}
<div onClick={()=>{
  setvehicleType('car');
  setconfirmedvehiclepanel(true);
  setimage('download.png');
}}  className='flex items-center justify-between p-3 border-2 border-transparent active:border-black  rounded-xl lg:flex lg:items-center lg:gap-4 mb-2 cursor-pointer '>
{/* Left Section: Image & Details */}
<div className='flex items-center gap-4 px-3 lg:w-full lg:flex lg:items-center'>
  <img src="download.png" width={66} height={66} alt="" />
  <div className='flex flex-col '>
    <h4 className='font-semibold text-xl'>
      TaxiGo Premier <span><i className="ri-user-fill"></i>4</span>
    </h4>
    <h5 className='font-medium text-md'>2 mins away</h5>
    <p className='font-mono text-sm tracking-tight text-zinc-500'>Affordable, compact rides</p>
  </div>
</div>

{/* Right Section: Price */}
<h2 className='text-xl font-bold '>₹{fare.car}</h2>
</div>

{/* Each vehicle box */}
<div 
onClick={()=>{
  setvehicleType('bike');
  setconfirmedvehiclepanel(true);
  setimage('https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png');
}}
className='flex items-center justify-between p-3 border-2 border-transparent active:border-black  rounded-xl lg:flex lg:items-center lg:gap-4 mb-2 cursor-pointer'>
{/* Left Section: Image & Details */}
<div className='flex items-center gap-4 px-3 lg:w-full lg:flex lg:items-center'>
  <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" width={66} height={66} alt="" />
  <div className='flex flex-col '>
    <h4 className='font-semibold text-xl'>
    TaxiGo Moto <span><i className="ri-user-fill"></i>1</span>
    </h4>
    <h5 className='font-medium text-md'>3 mins away</h5>
    <p className='font-mono text-sm tracking-tight text-zinc-500'>Affordable,motorcycle ride</p>
  </div>
</div>

{/* Right Section: Price */}
<h2 className='text-xl font-bold '>₹{fare.bike}</h2>
</div>

{/* Each vehicle box */}
<div
onClick={()=>{
  setvehicleType('auto');
  setconfirmedvehiclepanel(true);
  setimage('https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png')
}}
className='flex items-center justify-between p-3 border-2 border-transparent active:border-black  rounded-xl lg:flex lg:items-center lg:gap-4 mb-2 cursor-pointer'>
{/* Left Section: Image & Details */}
<div className='flex items-center gap-4 px-3 lg:w-full lg:flex lg:items-center'>
  <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" width={66} height={66} alt="" />
  <div className='flex flex-col '>
    <h4 className='font-semibold text-xl'>
      TaxiGo Auto <span><i className="ri-user-fill"></i>1</span>
    </h4>
    <h5 className='font-medium text-md'>3 mins away</h5>
    <p className='font-mono text-sm tracking-tight text-zinc-500'>Affordable,Auto rides</p>
  </div>
</div>

{/* Right Section: Price */}
<h2 className='text-xl font-bold '>₹{fare.auto}</h2>
</div>


</div>
  )
}

export default VehiclePanel